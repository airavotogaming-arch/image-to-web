import { useState, useRef, useEffect } from "react";
import { Link, useRouterState } from "@tanstack/react-router";
import { MessageCircle, Instagram, FileText, ChevronDown } from "lucide-react";

const links = [
  { label: "Home", to: "/" as const },
  { label: "Features", to: "/features" as const },
  { label: "Download", to: "/download" as const },
  { label: "FAQ", to: "/faq" as const },
];

const contactOptions = [
  {
    icon: MessageCircle,
    label: "WhatsApp",
    sub: "+91 86579 55764",
    href: "https://wa.me/918657955764",
    color: "text-[oklch(0.72_0.18_150)]",
  },
  {
    icon: Instagram,
    label: "Instagram",
    sub: "@airavotogaming",
    href: "https://www.instagram.com/airavotogaming",
    color: "text-[oklch(0.72_0.18_320)]",
  },
  {
    icon: FileText,
    label: "Google Form",
    sub: "Send us a message",
    href: "https://forms.gle/QiFf57g7bdU1UTX19",
    color: "text-[oklch(0.72_0.18_250)]",
  },
];

export function Navbar() {
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClick(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, []);

  return (
    <header className="fixed inset-x-0 top-5 z-50 px-4">
      <nav className="mx-auto flex max-w-4xl items-center justify-between rounded-3xl border border-border/70 bg-[oklch(0.11_0_0/0.85)] p-2.5 pl-3 backdrop-blur-xl">
        <Link to="/" className="flex items-center gap-3">
          <span className="flex size-9 items-center justify-center">
            <img src="/airavoto-logo.png" alt="Airavoto" width={32} height={32} style={{ filter: "brightness(0) invert(1)" }} />
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

          {/* Contact dropdown */}
          <li ref={ref} className="relative">
            <button
              onClick={() => setOpen((v) => !v)}
              className="flex items-center gap-1 rounded-xl px-4 py-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              Contact
              <ChevronDown
                className={`size-3.5 transition-transform duration-200 ${open ? "rotate-180" : ""}`}
              />
            </button>

            {open && (
              <div className="absolute right-0 top-full mt-2 w-56 overflow-hidden rounded-2xl border border-border/70 bg-[oklch(0.11_0_0/0.95)] shadow-xl backdrop-blur-xl">
                {contactOptions.map(({ icon: Icon, label, sub, href, color }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => setOpen(false)}
                    className="flex items-center gap-3 px-4 py-3 transition-colors hover:bg-surface-2"
                  >
                    <span className={`flex size-8 shrink-0 items-center justify-center rounded-xl bg-surface-2 ${color}`}>
                      <Icon className="size-4" />
                    </span>
                    <div>
                      <div className="text-sm font-medium text-foreground">{label}</div>
                      <div className="text-[11px] text-muted-foreground">{sub}</div>
                    </div>
                  </a>
                ))}
              </div>
            )}
          </li>
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
