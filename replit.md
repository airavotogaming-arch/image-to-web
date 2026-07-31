# Airavoto Gaming POS — Marketing Site

A marketing/landing site for **Airavoto Gaming POS**, a free gaming center management software. Built with TanStack Start, React 19, Tailwind CSS v4, and shadcn/ui components.

## Stack

- **Framework:** TanStack Start (SSR) + TanStack Router (file-based routing)
- **UI:** React 19, Tailwind CSS v4, shadcn/ui (Radix UI primitives)
- **Build tool:** Vite 8 via `@lovable.dev/vite-tanstack-config`
- **Runtime:** Bun
- **Originally built with:** [Lovable](https://lovable.dev)

## Running the project

```sh
bun install
bun run dev
```

The dev server listens on **port 5000**.

## Project structure

```
src/
  routes/         # File-based routes (TanStack Router)
  components/
    site/         # Landing page components (Navbar, Footer, Hero, etc.)
    ui/           # shadcn/ui component library
  lib/            # Utilities and blog post data
  assets/         # Images used in the site
```

## Key pages

| Route | Description |
|---|---|
| `/` | Home / hero landing page |
| `/features` | Feature breakdown |
| `/download` | Download CTA page |
| `/blog` | Blog index |
| `/blog/:slug` | Individual blog post |
| `/faq` | FAQ accordion |
| `/roadmap` | Product roadmap |
| `/changelog` | Release changelog |
| `/privacy` | Privacy policy |
| `/terms` | Terms of service |

## User preferences

<!-- Add user preferences here as you learn them -->
