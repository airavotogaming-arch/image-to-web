# macOS DMG build

The repository now includes an Electron wrapper around the generated Nitro server. The wrapper starts the bundled Airavoto POS server on a local loopback port and opens it in a native macOS window.

## Build in GitHub Actions

1. Open **Actions → Build macOS DMG** in GitHub.
2. Select **Run workflow**, or push a tag such as `v1.0.0`.
3. Download the `airavoto-macos-dmg` artifact from the completed workflow.

The workflow produces Intel (`x64`) and Apple Silicon (`arm64`) DMGs.

## Local commands

```bash
npm install
npm run build
npm run desktop:dist
```

Artifacts are written to `release/`.

## Important deployment note

The first version is intentionally **unsigned and not notarized**. macOS may show a Gatekeeper warning on first launch. For public customer distribution, add an Apple Developer signing certificate and notarization credentials to GitHub Actions, then remove `CSC_IDENTITY_AUTO_DISCOVERY=false` and configure electron-builder signing secrets. The DMG does not create or bundle a PostgreSQL database; if the POS requires database-backed features, the installer should later include a guided PostgreSQL setup or connect to an existing café database.
