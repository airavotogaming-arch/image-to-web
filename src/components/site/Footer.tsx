import { Sparkles } from "lucide-react";

const cols = [
  { title: "Product", items: ["Features", "Pricing", "Integrations", "Changelog"] },
  { title: "Company", items: ["About", "Careers", "Blog", "Contact"] },
  { title: "Resources", items: ["Docs", "Guides", "Support", "Status"] },
  { title: "Legal", items: ["Privacy", "Terms", "Security", "Cookies"] },
];

export function Footer() {
  return (
    <footer className="border-t border-border/60 py-16">
      <div className="mx-auto grid w-full max-w-6xl gap-12 px-5 md:grid-cols-[1.4fr_2fr]">
        <div>
          <div className="flex items-center gap-2 text-sm font-semibold">
            <Sparkles className="size-4" />
            Suprema
          </div>
          <p className="mt-4 max-w-xs text-sm leading-relaxed text-muted-foreground">
            The planning workspace that takes teams from first idea to shipped launch.
          </p>
          <div className="mt-6 flex max-w-sm items-center gap-2 rounded-full border border-border bg-surface p-1.5">
            <input
              type="email"
              placeholder="Enter your email"
              aria-label="Email address"
              className="w-full bg-transparent px-3 text-sm text-foreground outline-none placeholder:text-muted-foreground"
            />
            <button className="rounded-full bg-primary px-4 py-2 text-xs font-medium text-primary-foreground">
              Subscribe
            </button>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-8 sm:grid-cols-4">
          {cols.map((c) => (
            <div key={c.title}>
              <h3 className="text-xs uppercase tracking-[0.16em] text-muted-foreground">
                {c.title}
              </h3>
              <ul className="mt-4 space-y-2.5">
                {c.items.map((i) => (
                  <li key={i}>
                    <a href="#" className="text-sm text-foreground/80 hover:text-foreground">
                      {i}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
      <div className="mx-auto mt-12 flex w-full max-w-6xl flex-col gap-2 border-t border-border/60 px-5 pt-6 text-xs text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
        <p>© {new Date().getFullYear()} Suprema. All rights reserved.</p>
        <p>Designed for teams who ship.</p>
      </div>
    </footer>
  );
}