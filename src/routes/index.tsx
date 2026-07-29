import { createFileRoute } from "@tanstack/react-router";
import {
  ArrowRight,
  Bell,
  Check,
  Globe,
  LineChart,
  Lock,
  Puzzle,
  Star,
  Users,
  Workflow,
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
import { Eyebrow, Section, SectionHeading, Stat } from "@/components/site/primitives";
import heroGlow from "@/assets/hero-glow.jpg";
import dashboard from "@/assets/dashboard.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Suprema — Plan and Navigate From Idea to Launch" },
      {
        name: "description",
        content:
          "Suprema is the dark, focused planning workspace where teams map roadmaps, track progress and ship launches faster.",
      },
      { property: "og:title", content: "Suprema — Plan and Navigate From Idea to Launch" },
      {
        property: "og:description",
        content:
          "Roadmaps, real-time collaboration and progress analytics in one calm workspace built for teams who ship.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const brands = ["Linkfy", "Cloudex", "Nexora", "Pulsar", "Orbit", "Vertex"];

const glanceCards = [
  {
    icon: Workflow,
    title: "Smart Task Management",
    body: "Break big launches into ordered, owned steps with automatic dependencies and clear next actions.",
  },
  {
    icon: LineChart,
    title: "Live Progress Tracking",
    body: "Every milestone reports itself, so status meetings turn into a glance at one honest bar.",
  },
  {
    icon: Bell,
    title: "Priority Alerts",
    body: "Get pinged only when something actually blocks the launch — never for routine noise.",
  },
  {
    icon: Puzzle,
    title: "Plug Into Your Stack",
    body: "Connect the tools your team already lives in and keep a single source of truth.",
  },
];

const potential = [
  {
    icon: Zap,
    title: "Instant Workflows",
    body: "Spin up a launch plan from a template in seconds instead of an afternoon.",
  },
  {
    icon: Users,
    title: "Seamless Collaboration",
    body: "Comments, mentions and shared docs sit next to the work, not in another tab.",
  },
  {
    icon: Lock,
    title: "Enterprise Security",
    body: "SOC 2 controls, SSO and granular permissions protect every roadmap you own.",
  },
  {
    icon: Globe,
    title: "Global Timezones",
    body: "Schedules adapt to each teammate, so handoffs happen while you sleep.",
  },
  {
    icon: Star,
    title: "Built to Scale",
    body: "From a two-person sprint to a thousand-seat rollout with the same clean surface.",
  },
];

const plans = [
  {
    name: "Starter",
    price: "$0",
    note: "Free forever for small teams",
    features: ["Up to 3 projects", "Basic task board", "2 GB file storage", "Community support"],
    featured: false,
  },
  {
    name: "Pro",
    price: "$24",
    note: "Per user / month, billed yearly",
    features: [
      "Unlimited projects",
      "Timeline & roadmap views",
      "Progress analytics",
      "Priority support",
      "Advanced integrations",
    ],
    featured: true,
  },
];

const posts = [
  { tag: "Product", title: "How we rebuilt roadmap planning around momentum", date: "Mar 14, 2026" },
  { tag: "Teams", title: "The quiet cost of status meetings (and the fix)", date: "Mar 02, 2026" },
  { tag: "Guides", title: "A launch checklist that survives contact with reality", date: "Feb 18, 2026" },
];

const team = [
  { name: "Ava Mercer", role: "Founder & CEO" },
  { name: "Daniel Roth", role: "Head of Product" },
  { name: "Sofia Lang", role: "Design Lead" },
  { name: "Ken Osei", role: "Engineering" },
];

const testimonials = [
  {
    quote:
      "We replaced three tools with Suprema and our launch cycle dropped from nine weeks to five.",
    name: "Marta Klein",
    role: "VP Operations, Cloudex",
  },
  {
    quote:
      "The progress view is the first dashboard my team actually trusts. Nothing hides in it.",
    name: "Ryan Patel",
    role: "Product Lead, Nexora",
  },
  {
    quote: "Onboarding took an afternoon. By Friday the whole roadmap lived in one place.",
    name: "Lena Fischer",
    role: "COO, Pulsar",
  },
];

const faqs = [
  {
    q: "How long does setup take?",
    a: "Most teams import their existing projects and are running the same day — no implementation call required.",
  },
  {
    q: "Can I change plans later?",
    a: "Yes. Upgrade, downgrade or cancel at any time from billing, and we prorate the difference automatically.",
  },
  {
    q: "Do you offer a free trial?",
    a: "Every paid plan starts with a 7-day trial with full access. No credit card needed to begin.",
  },
  {
    q: "Is my data secure?",
    a: "Data is encrypted in transit and at rest, with SSO, audit logs and role-based permissions on Pro.",
  },
  {
    q: "Does Suprema work for remote teams?",
    a: "It is built for them. Timezone-aware scheduling and async updates keep distributed teams aligned.",
  },
  {
    q: "Can I integrate my own tools?",
    a: "Connect Slack, GitHub, Figma, Notion and more, or build your own workflow with the open API.",
  },
];

function Index() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <Navbar />

      {/* Hero */}
      <section className="relative overflow-hidden pb-24 pt-36 sm:pt-44">
        <img
          src={heroGlow}
          alt=""
          aria-hidden="true"
          width={1920}
          height={1080}
          className="pointer-events-none absolute inset-x-0 top-0 h-[70vh] w-full object-cover opacity-40"
        />
        <div className="pointer-events-none absolute inset-x-0 top-0 h-[70vh] glow-top" />
        <div className="relative mx-auto w-full max-w-6xl px-5 text-center">
          <Eyebrow>Announcing Suprema 2.0</Eyebrow>
          <h1 className="mx-auto mt-6 max-w-3xl text-balance text-4xl font-semibold leading-[1.05] tracking-tight text-gradient sm:text-6xl md:text-7xl">
            Plan and navigate from idea to launch.
          </h1>
          <p className="mx-auto mt-6 max-w-xl text-pretty text-sm leading-relaxed text-muted-foreground sm:text-base">
            Suprema keeps roadmaps, tasks and progress in one calm dark workspace, so your
            team always knows what ships next.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <a
              href="#pricing"
              className="inline-flex items-center gap-2 rounded-full bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90"
            >
              Start free trial <ArrowRight className="size-4" />
            </a>
            <a
              href="#features"
              className="inline-flex items-center gap-2 rounded-full border border-border bg-surface px-5 py-2.5 text-sm font-medium text-foreground transition-colors hover:bg-accent"
            >
              See how it works
            </a>
          </div>

          <p className="mt-16 text-xs uppercase tracking-[0.2em] text-muted-foreground">
            Trusted by fast-moving product teams
          </p>
          <div className="mt-6 flex flex-wrap items-center justify-center gap-x-10 gap-y-4 opacity-60">
            {brands.map((b) => (
              <span key={b} className="text-sm font-medium tracking-tight">
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
          title="Suprema at a Glance"
          subtitle="Everything a launch needs — planning, ownership and progress — held together in one surface."
        />
        <div className="mt-12 overflow-hidden rounded-2xl border border-border bg-surface p-2 shadow-[var(--shadow-soft)]">
          <img
            src={dashboard}
            alt="Suprema project workspace showing tasks, owners, priorities and progress"
            loading="lazy"
            width={1600}
            height={1008}
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
          eyebrow="Capabilities"
          title="Unlock Your Team's Potential"
          subtitle="Fewer tools, less status chasing, and a plan that stays honest as the work moves."
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
          <Stat value="76%" label="Less time spent in status updates each week" />
          <Stat value="12M+" label="Tasks planned and shipped through Suprema" />
          <Stat value="600+" label="Product teams running launches with us" />
        </div>
      </Section>

      {/* Pricing */}
      <Section id="pricing">
        <SectionHeading
          eyebrow="Pricing"
          title="Affordable Pricing Plans"
          subtitle="Start free, upgrade when your roadmap outgrows it. No hidden seats, no surprise fees."
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
                Get started
              </a>
            </div>
          ))}
        </div>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-xs text-muted-foreground">
          {["Free updates", "Cancel anytime", "24/7 support", "Secure payments"].map((i) => (
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
