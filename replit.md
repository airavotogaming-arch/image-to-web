# Airavoto Gaming POS — Landing Page

A marketing landing page for **Airavoto Gaming POS**, a free gaming center management software. Built with Lovable.

## Stack

- **Framework**: React 19 + TanStack Start (SSR-capable)
- **Routing**: TanStack Router (file-based)
- **Styling**: Tailwind CSS v4 + shadcn/ui components
- **Build tool**: Vite 8 via `@lovable.dev/vite-tanstack-config`
- **Package manager**: Bun

## Running the project

```sh
bun install       # install dependencies
bun run dev       # start dev server on port 5000
```

The dev server runs on `http://0.0.0.0:5000`.

## Project structure

```
src/
  routes/         # File-based TanStack Router pages
  components/
    site/         # Page-level components (Navbar, Footer, Hero effects)
    ui/           # shadcn/ui primitives
  assets/         # Images and asset manifests
  styles.css      # Global Tailwind styles
  server.ts       # SSR error wrapper (Nitro entry)
```

## User preferences

<!-- Add remembered preferences here -->
