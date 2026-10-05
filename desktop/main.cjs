const { app, BrowserWindow, shell } = require("electron");
const http = require("node:http");
const fs = require("node:fs");
const path = require("node:path");
const { pathToFileURL } = require("node:url");

const HOST = "127.0.0.1";
const PORT = Number(process.env.AIRAVOTO_PORT || 0);
let server;

function outputRoot() {
  return app.isPackaged
    ? path.join(app.getAppPath(), ".output")
    : path.join(__dirname, "..", ".output");
}

async function startLocalServer() {
  const entryPath = path.join(outputRoot(), "server", "index.mjs");
  if (!fs.existsSync(entryPath)) {
    throw new Error(`Airavoto server build not found at ${entryPath}. Run npm run build first.`);
  }

  const serverModule = await import(pathToFileURL(entryPath).href);
  const fetchHandler = serverModule.default?.fetch;
  if (typeof fetchHandler !== "function") {
    throw new Error("The generated Airavoto server does not expose a fetch handler.");
  }

  server = http.createServer(async (request, response) => {
    try {
      const headers = new Headers();
      for (const [key, value] of Object.entries(request.headers)) {
        if (Array.isArray(value)) headers.set(key, value.join(", "));
        else if (value != null) headers.set(key, value);
      }

      const hasBody = request.method !== "GET" && request.method !== "HEAD";
      const webRequest = new Request(`http://${HOST}:${server.address().port}${request.url}`, {
        method: request.method,
        headers,
        body: hasBody ? require("node:stream").Readable.toWeb(request) : undefined,
        duplex: hasBody ? "half" : undefined,
      });
      const webResponse = await fetchHandler(webRequest, {}, {});

      response.statusCode = webResponse.status;
      webResponse.headers.forEach((value, key) => response.setHeader(key, value));
      if (webResponse.body) {
        require("node:stream").Readable.fromWeb(webResponse.body).pipe(response);
      } else {
        response.end();
      }
    } catch (error) {
      console.error("Airavoto local server error", error);
      if (!response.headersSent) response.statusCode = 500;
      response.end("Airavoto POS could not complete this request.");
    }
  });

  await new Promise((resolve, reject) => {
    server.once("error", reject);
    server.listen(PORT, HOST, resolve);
  });

  return server.address().port;
}

async function createWindow() {
  const port = await startLocalServer();
  const window = new BrowserWindow({
    width: 1440,
    height: 960,
    minWidth: 1024,
    minHeight: 700,
    title: "Airavoto Gaming POS",
    backgroundColor: "#09090b",
    webPreferences: {
      contextIsolation: true,
      nodeIntegration: false,
    },
  });

  window.webContents.setWindowOpenHandler(({ url }) => {
    if (!url.startsWith(`http://${HOST}:${port}`)) shell.openExternal(url);
    return { action: "deny" };
  });
  await window.loadURL(`http://${HOST}:${port}/`);
}

app.whenReady().then(async () => {
  try {
    await createWindow();
  } catch (error) {
    console.error(error);
    app.quit();
  }
});

app.on("window-all-closed", () => {
  if (process.platform !== "darwin") app.quit();
});

app.on("before-quit", () => {
  server?.close();
});
