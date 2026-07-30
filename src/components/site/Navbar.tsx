import { Link, useRouterState } from "@tanstack/react-router";

const links = [
  { label: "Home", to: "/" as const },
  { label: "Features", to: "/features" as const },
  { label: "Download", to: "/download" as const },
  { label: "FAQ", to: "/faq" as const },
];

export function Navbar() {
  const pathname = useRouterState({ select: (s) => s.location.pathname });

  return (
    <header className="fixed inset-x-0 top-5 z-50 px-4">
      <nav className="mx-auto flex max-w-4xl items-center justify-between rounded-3xl border border-border/70 bg-[oklch(0.11_0_0/0.85)] p-2.5 pl-3 backdrop-blur-xl">
        <Link to="/" className="flex items-center gap-3">
          <span className="flex size-9 items-center justify-center rounded-xl border border-border bg-surface-2">
            <span className="block size-4 rounded-full bg-foreground/85 shadow-[inset_-4px_-2px_0_0_var(--surface-2)]" />
          </span>
          <span className="text-lg font-semibold tracking-tight">
            Airavoto<sup className="ml-0.5 text-[9px] font-medium text-muted-foreground">POS</sup>
          </span>
        </Link>
        <ul className="hidden items-center gap-1 md:flex">
          {links.map((l) => {
            const active = l.to === "/" ? pathname === "/" : pathname.startsWith(l.to);
            return (
              <li key={l.label}>
                <Link
                  to={l.to}
                  className={`rounded-xl px-4 py-2 text-sm transition-colors ${
                    active
                      ? "bg-surface-2 font-medium text-foreground"
                      : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  {l.label}
                </Link>
              </li>
            );
          })}
        </ul>
        <Link
          to="/download"
          className="rounded-2xl bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground transition-opacity hover:opacity-90"
        >
          Download Free
        </Link>
      </nav>
    </header>
  );
}
