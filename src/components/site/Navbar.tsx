import { Sparkles } from "lucide-react";

const links = ["Home", "Features", "Pricing", "Blog", "Contact"];

export function Navbar() {
  return (
    <header className="fixed inset-x-0 top-4 z-50 px-4">
      <nav className="mx-auto flex max-w-5xl items-center justify-between rounded-full border border-border/80 bg-surface/80 px-3 py-2 backdrop-blur-xl">
        <a href="#" className="flex items-center gap-2 pl-2 text-sm font-semibold tracking-tight">
          <Sparkles className="size-4 text-foreground/80" />
          Suprema
        </a>
        <ul className="hidden items-center gap-1 md:flex">
          {links.map((l) => (
            <li key={l}>
              <a
                href={`#${l.toLowerCase()}`}
                className="rounded-full px-3 py-1.5 text-[13px] text-muted-foreground transition-colors hover:bg-accent hover:text-foreground"
              >
                {l}
              </a>
            </li>
          ))}
        </ul>
        <a
          href="#pricing"
          className="rounded-full bg-primary px-4 py-2 text-[13px] font-medium text-primary-foreground transition-opacity hover:opacity-90"
        >
          Get Started
        </a>
      </nav>
    </header>
  );
}