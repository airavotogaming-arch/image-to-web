import { createFileRoute } from "@tanstack/react-router";
import {
  ArrowRight,
  Check,
  Download,
  Gamepad2,
  LineChart,
  Lock,
  Package,
  RefreshCw,
  ShieldCheck,
  Star,
  Timer,
  Utensils,
  Wallet,
  Zap,
} from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Navbar } from "@/components/site/Navbar";
import { Footer } from "@/components/site/Footer";
import { HeroFloaters } from "@/components/site/HeroFloaters";
import { HeroLights } from "@/components/site/HeroLights";
import { Eyebrow, Section, SectionHeading, Stat } from "@/components/site/primitives";
import heroGlow from "@/assets/hero-glow.jpg";
import posShot from "@/assets/airavoto-pos.png.asset.json";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Airavoto Gaming POS — Free Gaming Center Software" },
      {
        name: "description",
        content:
          "Download Airavoto Gaming POS free — complete gaming center management with live session tracking, bookings, food, inventory and finance. No hidden charges.",
      },
      { property: "og:title", content: "Airavoto Gaming POS — Free Gaming Center Software" },
      {
        property: "og:description",
        content:
          "All-in-one POS for PC, PS5, VR and simulator centers. Sessions, bookings, food, inventory and reports — free, complete, no hidden charges.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const brands = ["PC", "PS5", "Xbox", "VR", "Simulators", "Snooker"];

const glanceCards = [
  {
    icon: Timer,
    title: "Real-time Session Management",
    body: "Track sessions across PC, consoles, VR and simulators with visual and audio countdown timers, auto status updates and pause/resume.",
  },
  {
    icon: Gamepad2,
    title: "Streamlined Booking Management",
    body: "Walk-ins and advance reservations with conflict detection, instant seat allocation, bulk party bookings and full customer history.",
  },
  {
    icon: Utensils,
    title: "Integrated Food & Inventory",
    body: "Item catalog, orders attached to bookings, real-time quantity tracking, configurable pricing and F&B revenue analytics.",
  },
  {
    icon: Wallet,
    title: "Comprehensive Financials",
    body: "Expense categorisation, monthly and quarterly summaries, revenue tracking and CSV/PDF export for easy accounting.",
  },
];

const potential = [
  {
    icon: Zap,
    title: "Streamlined Operations",
    body: "One centralised panel for every activity in the center, cutting manual effort to a minimum.",
  },
  {
    icon: RefreshCw,
    title: "Live Data Sync",
    body: "Seat availability, timers and orders stay current across every screen in the venue.",
  },
  {
    icon: Lock,
    title: "Enterprise Security",
    body: "Role-based access control, bcrypt password hashing and secure sessions protect your data.",
  },
  {
    icon: LineChart,
    title: "Data-Driven Decisions",
    body: "Actionable analytics and reports across occupancy, revenue, F&B and expenses.",
  },
  {
    icon: Package,
    title: "Future-Proof Scalability",
    body: "Flexible device and pricing configurations that grow with new seats, rooms and formats.",
  },
];

const plans = [
  {
    name: "Free Download",
    price: "₹0",
    note: "Complete software — no hidden charges",
    features: [
      "All modules unlocked",
      "Unlimited seats & devices",
      "Sessions, bookings, food, inventory",
      "Expenses, reports & loyalty",
      "Free lifetime updates",
    ],
    featured: true,
  },
  {
    name: "Self-Hosted",
    price: "₹0",
    note: "Run it on your own PC or server",
    features: [
      "Your data stays with you",
      "PostgreSQL database included",
      "Offline-friendly local setup",
      "Community support",
    ],
    featured: false,
  },
];

const posts = [
  { tag: "Frontend", title: "React 18 + TypeScript, Vite, TanStack Query, Tailwind & shadcn/ui", date: "Type-safe UI" },
  { tag: "Backend", title: "Express + TypeScript, Drizzle ORM, Bcrypt, RESTful API", date: "Scalable API" },
  { tag: "Database", title: "PostgreSQL via Neon with a 16-table operations schema", date: "Reliable storage" },
];

const schema = [
  "Bookings",
  "Booking History",
  "Users",
  "Device Configs",
  "Pricing Configs",
  "Food Items",
  "Expenses",
  "Activity Logs",
  "Loyalty Members",
  "Loyalty Events",
  "Loyalty Config",
  "Game Updates",
  "Center Info",
  "Gallery Images",
  "Facilities",
  "Games",
];

const testimonials = [
  {
    quote:
      "Timers, billing and food orders finally live in one screen. Our counter queue disappeared.",
    name: "Rahul Menon",
    role: "Owner, LevelUp Gaming Arena",
  },
  {
    quote:
      "Seat occupancy and expiry alerts are accurate to the second — no more disputed sessions.",
    name: "Sneha Kapoor",
    role: "Manager, Nexus Esports Cafe",
  },
  {
    quote: "Completely free and it does more than the paid POS we were using before.",
    name: "Arjun Nair",
    role: "Founder, Respawn Gaming Zone",
  },
];

const faqs = [
  {
    q: "Is Airavoto Gaming POS really free?",
    a: "Yes. The complete software is free to download with every module unlocked — no trial period, no hidden charges and no locked features.",
  },
  {
    q: "Which devices can it manage?",
    a: "PC, PS5 and other consoles, VR rigs, racing simulators and any custom seat type you configure in device settings.",
  },
  {
    q: "How long does setup take?",
    a: "Most centers download, configure their seats and pricing, and start billing sessions the same day.",
  },
  {
    q: "Is my data secure?",
    a: "Role-based access control, bcrypt password hashing, secure express sessions and full activity logs protect every record.",
  },
  {
    q: "Can I run it on my own machine?",
    a: "Yes. Self-host it on your counter PC or a server with PostgreSQL — your data never has to leave the venue.",
  },
  {
    q: "Do I get updates?",
    a: "Free lifetime updates. New features, fixes and modules arrive at no extra cost.",
  },
];

function Index() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <Navbar />

      {/* Hero */}
      <section className="relative overflow-hidden pb-20 pt-36 sm:pt-44">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 opacity-[0.35]"
          style={{
            backgroundImage:
              "radial-gradient(oklch(0.5 0 0) 1px, transparent 1px)",
            backgroundSize: "22px 22px",
            maskImage: "radial-gradient(80% 70% at 50% 40%, black, transparent 80%)",
            WebkitMaskImage: "radial-gradient(80% 70% at 50% 40%, black, transparent 80%)",
          }}
        />
        <img
          src={heroGlow}
          alt=""
          aria-hidden="true"
          width={1920}
          height={1080}
          className="pointer-events-none absolute left-1/2 top-0 h-[80vh] w-[130%] -translate-x-[62%] -translate-y-[38%] object-cover opacity-40"
        />
        {/* Starfield */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 opacity-70"
          style={{
            backgroundImage:
              "radial-gradient(1.4px 1.4px at 12% 18%, oklch(0.98 0 0/0.9), transparent 60%)," +
              "radial-gradient(1.2px 1.2px at 27% 9%, oklch(0.98 0 0/0.7), transparent 60%)," +
              "radial-gradient(1.6px 1.6px at 42% 26%, oklch(0.98 0 0/0.55), transparent 60%)," +
              "radial-gradient(1.2px 1.2px at 61% 12%, oklch(0.98 0 0/0.8), transparent 60%)," +
              "radial-gradient(1.5px 1.5px at 78% 22%, oklch(0.98 0 0/0.6), transparent 60%)," +
              "radial-gradient(1.2px 1.2px at 90% 8%, oklch(0.98 0 0/0.75), transparent 60%)," +
              "radial-gradient(1.3px 1.3px at 7% 44%, oklch(0.98 0 0/0.5), transparent 60%)," +
              "radial-gradient(1.2px 1.2px at 34% 58%, oklch(0.98 0 0/0.45), transparent 60%)," +
              "radial-gradient(1.5px 1.5px at 69% 49%, oklch(0.98 0 0/0.5), transparent 60%)," +
              "radial-gradient(1.3px 1.3px at 95% 55%, oklch(0.98 0 0/0.55), transparent 60%)",
            maskImage: "linear-gradient(to bottom, black, transparent 85%)",
          }}
        />
        {/* Ambient light washes */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              "radial-gradient(60% 45% at 50% 8%, oklch(0.75 0.10 290/0.22), transparent 70%)," +
              "radial-gradient(45% 40% at 8% 12%, oklch(0.65 0.12 290/0.16), transparent 70%)," +
              "radial-gradient(45% 40% at 95% 20%, oklch(0.65 0.11 285/0.14), transparent 70%)," +
              "radial-gradient(35% 30% at 72% 8%, oklch(0.7 0.14 305/0.12), transparent 70%)",
          }}
        />
        {/* Center spotlight behind headline */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute left-1/2 top-[34%] -translate-x-1/2 -translate-y-1/2 sm:top-[38%]"
        >
          <div
            className="h-[280px] w-[340px] animate-spotlight-pulse rounded-full blur-[60px] sm:h-[400px] sm:w-[620px] sm:blur-[75px] lg:h-[520px] lg:w-[900px] lg:blur-[90px]"
            style={{
              background:
                "radial-gradient(closest-side, oklch(0.85 0.06 290/0.16), transparent 100%)",
            }}
          />
        </div>
        {/* Vignette */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              "radial-gradient(90% 70% at 50% 45%, transparent 40%, oklch(0.06 0 0/0.85) 100%)",
          }}
        />
        <HeroLights />
        <HeroFloaters />
        <div className="relative mx-auto w-full max-w-6xl px-5 text-center">
          <a
            href="#features"
            className="mx-auto flex w-fit items-center gap-2.5 rounded-full border border-border/80 bg-[oklch(0.2_0_0/0.9)] py-2 pl-3 pr-4 text-sm font-medium backdrop-blur-md"
          >
            <span className="block size-4 rounded-full bg-foreground/85 shadow-[inset_-4px_-2px_0_0_var(--surface-2)]" />
            Complete gaming center management
            <ArrowRight className="size-4 text-muted-foreground" />
          </a>
          <h1 className="mx-auto mt-8 max-w-4xl text-balance text-5xl font-bold leading-[1.02] tracking-[-0.03em] sm:text-7xl md:text-[5.2rem]">
            Airavoto Gaming POS — free, complete, no hidden charges.
          </h1>
          <p className="mx-auto mt-7 max-w-xl text-pretty text-base leading-relaxed text-muted-foreground sm:text-lg">
            Run every seat, session, booking, order and expense in your gaming center from one
            fast dashboard. Download the full software free.
          </p>
          <div className="mt-9 flex flex-col items-center gap-4">
            <a
              href="#download"
              className="inline-flex items-center gap-2 rounded-2xl bg-primary px-7 py-4 text-base font-semibold text-primary-foreground transition-opacity hover:opacity-90"
            >
              <Download className="size-5" /> Download Free
            </a>
            <p className="inline-flex items-center gap-2 text-sm text-muted-foreground">
              <ShieldCheck className="size-4" /> No payment, no hidden charges
            </p>
          </div>

          <p className="mt-24 text-sm text-muted-foreground">
            Built for every seat type in a modern gaming center.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-x-10 gap-y-5 opacity-45">
            {brands.map((b) => (
              <span key={b} className="text-xl font-semibold tracking-tight">
                {b}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Glance */}
      <Section id="features">
        <SectionHeading
          eyebrow="Overview"
          title="Your whole gaming center, one panel"
          subtitle="Seat occupancy, walk-ins, timers, food orders, payments and reports — live in a single admin dashboard."
        />
        <div className="mt-12 overflow-hidden rounded-2xl border border-border bg-surface p-2 shadow-[var(--shadow-soft)]">
          <img
            src={posShot.url}
            alt="Airavoto Gaming POS seat management dashboard showing PS5 and PC occupancy, walk-in list and booking table"
            loading="lazy"
            width={1366}
            height={768}
            className="w-full rounded-xl"
          />
        </div>
        <div className="mt-6 grid gap-4 md:grid-cols-2">
          {glanceCards.map(({ icon: Icon, title, body }) => (
            <div key={title} className="panel p-6">
              <Icon className="size-5 text-foreground/70" />
              <h3 className="mt-4 text-base font-medium tracking-tight">{title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{body}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* Potential */}
      <Section>
        <SectionHeading
          eyebrow="Why Airavoto"
          title="Why choose Airavoto Gaming POS"
          subtitle="Transform your center into a highly efficient, profitable operation with one integrated system."
        />
        <div className="mt-12 grid gap-4 md:grid-cols-3">
          {potential.slice(0, 3).map(({ icon: Icon, title, body }) => (
            <div key={title} className="panel p-6 text-center">
              <Icon className="mx-auto size-5 text-foreground/70" />
              <h3 className="mt-4 text-base font-medium tracking-tight">{title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{body}</p>
            </div>
          ))}
        </div>
        <div className="mt-4 grid gap-4 md:grid-cols-2">
          {potential.slice(3).map(({ icon: Icon, title, body }) => (
            <div key={title} className="panel p-6 text-center">
              <Icon className="mx-auto size-5 text-foreground/70" />
              <h3 className="mt-4 text-base font-medium tracking-tight">{title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{body}</p>
            </div>
          ))}
        </div>
        <div className="mt-4 grid gap-4 sm:grid-cols-3">
          <Stat value="16" label="Database tables covering every operation" />
          <Stat value="100%" label="Free — every module unlocked forever" />
          <Stat value="24/7" label="Live session tracking and status boards" />
        </div>
      </Section>

      {/* Pricing */}
      <Section id="download">
        <SectionHeading
          eyebrow="Download"
          title="Free forever. No hidden charges."
          subtitle="Download the complete Airavoto Gaming POS software — every feature unlocked, no trial, no seat limits."
        />
        <div className="mx-auto mt-12 grid max-w-3xl gap-4 md:grid-cols-2">
          {plans.map((p) => (
            <div
              key={p.name}
              className={`panel flex flex-col p-7 ${p.featured ? "shadow-[var(--shadow-glow)]" : ""}`}
            >
              <div className="flex items-center justify-between">
                <h3 className="text-sm font-medium tracking-tight">{p.name}</h3>
                {p.featured ? (
                  <span className="rounded-full border border-border bg-surface-2 px-2.5 py-1 text-[11px] text-muted-foreground">
                    Most popular
                  </span>
                ) : null}
              </div>
              <div className="mt-5 text-4xl font-semibold tracking-tight">{p.price}</div>
              <p className="mt-1 text-xs text-muted-foreground">{p.note}</p>
              <ul className="mt-6 space-y-3">
                {p.features.map((f) => (
                  <li key={f} className="flex items-center gap-2.5 text-sm text-foreground/85">
                    <Check className="size-4 text-foreground/60" />
                    {f}
                  </li>
                ))}
              </ul>
              <a
                href="#"
                className={`mt-8 inline-flex items-center justify-center rounded-full px-5 py-2.5 text-sm font-medium transition-opacity hover:opacity-90 ${
                  p.featured
                    ? "bg-primary text-primary-foreground"
                    : "border border-border bg-surface-2 text-foreground"
                }`}
              >
                Download now
              </a>
            </div>
          ))}
        </div>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-xs text-muted-foreground">
          {["Free lifetime updates", "No subscription", "No hidden charges", "All features unlocked"].map((i) => (
            <span key={i} className="inline-flex items-center gap-2">
              <Check className="size-3.5" /> {i}
            </span>
          ))}
        </div>
      </Section>

      {/* Monitor progress */}
      <Section>
        <div className="grid items-center gap-10 md:grid-cols-2">
          <div>
            <h2 className="max-w-md text-3xl font-semibold tracking-tight text-gradient sm:text-4xl">
              Monitor progress faster than ever.
            </h2>
            <p className="mt-4 max-w-md text-sm leading-relaxed text-muted-foreground">
              Real-time reporting rolls every task up into a single view of where the launch
              actually stands — no spreadsheets, no chasing.
            </p>
            <div className="mt-8 grid max-w-sm grid-cols-2 gap-6">
              <div>
                <div className="text-3xl font-semibold tracking-tight">100%</div>
                <p className="mt-1 text-xs text-muted-foreground">Visibility across every team</p>
              </div>
              <div>
                <div className="text-3xl font-semibold tracking-tight">10X</div>
                <p className="mt-1 text-xs text-muted-foreground">Faster weekly reporting</p>
              </div>
            </div>
            <a
              href="#pricing"
              className="mt-8 inline-flex items-center gap-2 rounded-full bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground"
            >
              Get started <ArrowRight className="size-4" />
            </a>
          </div>
          <div className="panel p-6">
            {[
              { label: "Discovery", value: 100 },
              { label: "Design system", value: 82 },
              { label: "Implementation", value: 64 },
              { label: "QA & launch", value: 28 },
            ].map((row) => (
              <div key={row.label} className="border-b border-border/60 py-4 last:border-0">
                <div className="flex items-center justify-between text-sm">
                  <span className="text-foreground/85">{row.label}</span>
                  <span className="text-muted-foreground">{row.value}%</span>
                </div>
                <div className="mt-3 h-1.5 w-full overflow-hidden rounded-full bg-surface-2">
                  <div
                    className="h-full rounded-full bg-foreground/80"
                    style={{ width: `${row.value}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* Blog */}
      <Section id="blog">
        <SectionHeading eyebrow="Blog" title="News, insights and more" />
        <div className="mt-12 grid gap-4 md:grid-cols-3">
          {posts.map((p) => (
            <article key={p.title} className="panel flex flex-col p-6">
              <span className="w-fit rounded-full border border-border bg-surface-2 px-2.5 py-1 text-[11px] text-muted-foreground">
                {p.tag}
              </span>
              <h3 className="mt-4 text-base font-medium leading-snug tracking-tight">{p.title}</h3>
              <p className="mt-auto pt-6 text-xs text-muted-foreground">{p.date}</p>
            </article>
          ))}
        </div>
      </Section>

      {/* Team */}
      <Section>
        <SectionHeading eyebrow="Team" title="Our Team Members" />
        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {team.map((m) => (
            <div key={m.name} className="panel overflow-hidden">
              <div className="h-44 w-full bg-[radial-gradient(120%_100%_at_50%_0%,var(--surface-2),var(--background))]" />
              <div className="p-5">
                <h3 className="text-sm font-medium tracking-tight">{m.name}</h3>
                <p className="mt-1 text-xs text-muted-foreground">{m.role}</p>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* Worldwide */}
      <Section>
        <SectionHeading
          eyebrow="Global"
          title="Connecting Worldwide Teams"
          subtitle="From two-person studios to distributed enterprises across 40+ countries."
        />
        <div className="mt-12 grid gap-4 sm:grid-cols-3">
          <Stat value="100%" label="Cloud-native and available anywhere" />
          <Stat value="50%" label="Faster handoffs between timezones" />
          <Stat value="90%" label="Of teams renew after their first launch" />
        </div>
      </Section>

      {/* Testimonials */}
      <Section>
        <SectionHeading eyebrow="Testimonials" title="What Our Users Say" />
        <div className="mt-12 grid gap-4 md:grid-cols-3">
          {testimonials.map((t) => (
            <figure key={t.name} className="panel flex flex-col p-6">
              <div className="flex gap-1">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="size-3.5 fill-current text-foreground/70" />
                ))}
              </div>
              <blockquote className="mt-4 text-sm leading-relaxed text-foreground/85">
                “{t.quote}”
              </blockquote>
              <figcaption className="mt-auto pt-6 text-xs text-muted-foreground">
                <span className="text-foreground">{t.name}</span> — {t.role}
              </figcaption>
            </figure>
          ))}
        </div>
      </Section>

      {/* FAQ */}
      <Section id="contact">
        <SectionHeading eyebrow="FAQ" title="Frequently Asked Questions" />
        <div className="mx-auto mt-12 grid max-w-4xl gap-x-6 md:grid-cols-2">
          {[faqs.slice(0, 3), faqs.slice(3)].map((group, gi) => (
            <Accordion key={gi} type="single" collapsible className="w-full">
              {group.map((f) => (
                <AccordionItem
                  key={f.q}
                  value={f.q}
                  className="mb-3 rounded-xl border border-border bg-surface px-4"
                >
                  <AccordionTrigger className="text-left text-sm hover:no-underline">
                    {f.q}
                  </AccordionTrigger>
                  <AccordionContent className="text-sm leading-relaxed text-muted-foreground">
                    {f.a}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          ))}
        </div>
      </Section>

      {/* CTA */}
      <Section>
        <div className="relative overflow-hidden rounded-3xl border border-border bg-surface px-6 py-16 text-center">
          <div className="pointer-events-none absolute inset-x-0 top-0 h-56 glow-top" />
          <div className="relative">
            <Eyebrow>Get Started</Eyebrow>
            <h2 className="mx-auto mt-5 max-w-xl text-3xl font-semibold tracking-tight text-gradient sm:text-5xl">
              Start your 7-day free trial
            </h2>
            <p className="mx-auto mt-4 max-w-md text-sm text-muted-foreground">
              Bring your next launch into Suprema today. No credit card, no setup calls.
            </p>
            <a
              href="#"
              className="mt-8 inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-medium text-primary-foreground"
            >
              Get started <ArrowRight className="size-4" />
            </a>
            <div className="mt-14 grid gap-4 sm:grid-cols-4">
              <Stat value="76%" label="Faster planning cycles" />
              <Stat value="12M+" label="Tasks completed" />
              <Stat value="600+" label="Teams onboard" />
              <Stat value="20+" label="Native integrations" />
            </div>
          </div>
        </div>
      </Section>

      <Footer />
    </main>
  );
}
