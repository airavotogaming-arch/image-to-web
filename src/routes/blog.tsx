import { createFileRoute, Link } from "@tanstack/react-router";
import { Navbar } from "@/components/site/Navbar";
import { Footer } from "@/components/site/Footer";
import { Eyebrow, Section } from "@/components/site/primitives";

export const Route = createFileRoute("/blog")({
  head: () => ({
    meta: [
      { title: "Blog — Airavoto Gaming POS" },
      { name: "description", content: "Tips, news and stories from gaming centers using Airavoto POS." },
    ],
  }),
  component: BlogPage,
});

const posts = [
  {
    slug: "how-to-run-a-profitable-gaming-center",
    title: "How to Run a Profitable Gaming Center in 2025",
    excerpt: "From seat pricing to food margins — the numbers that actually move the needle for modern gaming cafés.",
    category: "Business",
    date: "Jul 18, 2025",
    readTime: "6 min",
    img: "https://images.unsplash.com/photo-1542751371-adc38448a05e?w=800&q=80",
  },
  {
    slug: "ps5-vs-pc-which-earns-more",
    title: "PS5 vs PC Seats: Which Earns More Per Hour?",
    excerpt: "We crunched the numbers across 40 gaming centers to find out which hardware pays back faster.",
    category: "Revenue",
    date: "Jul 10, 2025",
    readTime: "5 min",
    img: "https://images.unsplash.com/photo-1593305841991-05c297ba4575?w=800&q=80",
  },
  {
    slug: "session-billing-best-practices",
    title: "Session Billing Best Practices for Gaming Cafés",
    excerpt: "Hourly, per-minute or flat packages — how top operators structure pricing to maximise occupancy.",
    category: "Operations",
    date: "Jun 28, 2025",
    readTime: "4 min",
    img: "https://images.unsplash.com/photo-1511512578047-dfb367046420?w=800&q=80",
  },
  {
    slug: "food-orders-inside-gaming-center",
    title: "Why In-Seat Food Ordering Can Double Your Revenue",
    excerpt: "Adding a simple food menu to your POS turned out to be the highest-ROI decision for dozens of operators.",
    category: "Revenue",
    date: "Jun 15, 2025",
    readTime: "5 min",
    img: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=800&q=80",
  },
  {
    slug: "loyalty-programs-gaming-centers",
    title: "Loyalty Programs That Actually Keep Gamers Coming Back",
    excerpt: "Points, punch cards, VIP tiers — what works and what just adds complexity without payoff.",
    category: "Marketing",
    date: "Jun 3, 2025",
    readTime: "4 min",
    img: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&q=80",
  },
  {
    slug: "multi-terminal-gaming-center-setup",
    title: "How to Set Up a Multi-Counter Gaming Center on One Server",
    excerpt: "Run 3 billing counters, a food station and a manager dashboard from a single local server. Here's how.",
    category: "Setup",
    date: "May 22, 2025",
    readTime: "7 min",
    img: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80",
  },
  {
    slug: "vr-simulators-gaming-center",
    title: "Adding VR & Simulators: Is It Worth the Investment?",
    excerpt: "VR headsets and racing simulators command premium rates, but the hardware cost is real. We break it down.",
    category: "Hardware",
    date: "May 10, 2025",
    readTime: "6 min",
    img: "https://images.unsplash.com/photo-1622979135225-d2ba269cf1ac?w=800&q=80",
  },
  {
    slug: "staff-management-gaming-cafe",
    title: "Staff Management Tips for Small Gaming Cafés",
    excerpt: "Shift scheduling, role-based access and accountability — keeping your team efficient without micromanaging.",
    category: "Operations",
    date: "Apr 29, 2025",
    readTime: "4 min",
    img: "https://images.unsplash.com/photo-1600880292089-90a7e086ee0c?w=800&q=80",
  },
  {
    slug: "tournament-hosting-guide",
    title: "The Complete Guide to Hosting Tournaments at Your Center",
    excerpt: "From bracket software to prize pools and social promotion — filling seats on off-peak days with competitive events.",
    category: "Events",
    date: "Apr 14, 2025",
    readTime: "8 min",
    img: "https://images.unsplash.com/photo-1560253023-3ec5d502959f?w=800&q=80",
  },
  {
    slug: "snooker-gaming-center-combo",
    title: "Why the Best Gaming Centers Also Have a Snooker Table",
    excerpt: "A snooker table pulls in a different crowd, extends dwell time and fills the hours when screens are quiet.",
    category: "Business",
    date: "Apr 2, 2025",
    readTime: "3 min",
    img: "https://images.unsplash.com/photo-1611195974226-a6a9be9dd763?w=800&q=80",
  },
];

const categoryColors: Record<string, string> = {
  Business: "text-[oklch(0.72_0.18_290)] bg-[oklch(0.72_0.18_290/0.12)]",
  Revenue: "text-[oklch(0.72_0.18_150)] bg-[oklch(0.72_0.18_150/0.12)]",
  Operations: "text-[oklch(0.72_0.18_220)] bg-[oklch(0.72_0.18_220/0.12)]",
  Marketing: "text-[oklch(0.72_0.18_30)] bg-[oklch(0.72_0.18_30/0.12)]",
  Setup: "text-[oklch(0.72_0.18_200)] bg-[oklch(0.72_0.18_200/0.12)]",
  Hardware: "text-[oklch(0.72_0.18_320)] bg-[oklch(0.72_0.18_320/0.12)]",
  Events: "text-[oklch(0.72_0.18_60)] bg-[oklch(0.72_0.18_60/0.12)]",
};

function BlogPage() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <Navbar />

      {/* Hero */}
      <section className="relative overflow-hidden pb-16 pt-36 sm:pt-44">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              "radial-gradient(60% 45% at 50% 0%, oklch(0.75 0.10 290/0.18), transparent 70%)",
          }}
        />
        <div className="relative mx-auto w-full max-w-6xl px-5 text-center">
          <Eyebrow>Blog</Eyebrow>
          <h1 className="mx-auto mt-8 max-w-2xl text-balance text-5xl font-bold leading-[1.02] tracking-[-0.03em] sm:text-7xl">
            Grow your gaming center
          </h1>
          <p className="mx-auto mt-6 max-w-md text-pretty text-base leading-relaxed text-muted-foreground">
            Practical tips, revenue ideas and operator stories — everything you need to run a better center.
          </p>
        </div>
      </section>

      {/* Featured post */}
      <Section>
        <div className="group relative overflow-hidden rounded-3xl border border-border bg-surface">
          <div className="grid md:grid-cols-2">
            <div className="relative h-64 overflow-hidden md:h-auto">
              <img
                src={posts[0].img}
                alt={posts[0].title}
                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>
            <div className="flex flex-col justify-center p-8 sm:p-12">
              <div className="flex items-center gap-3">
                <span className={`rounded-full px-2.5 py-1 text-[11px] font-medium ${categoryColors[posts[0].category]}`}>
                  {posts[0].category}
                </span>
                <span className="text-xs text-muted-foreground">{posts[0].date} · {posts[0].readTime} read</span>
              </div>
              <h2 className="mt-4 text-2xl font-bold leading-snug tracking-tight sm:text-3xl">{posts[0].title}</h2>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{posts[0].excerpt}</p>
              <Link
                to="/blog"
                className="mt-6 inline-flex w-fit items-center gap-1.5 rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground transition-opacity hover:opacity-90"
              >
                Read article →
              </Link>
            </div>
          </div>
        </div>
      </Section>

      {/* Grid */}
      <Section>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {posts.slice(1).map((post) => (
            <Link to="/blog" key={post.slug} className="group flex flex-col overflow-hidden rounded-2xl border border-border bg-surface transition-colors hover:bg-surface-2">
              <div className="relative h-48 overflow-hidden">
                <img
                  src={post.img}
                  alt={post.title}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="flex flex-1 flex-col p-5">
                <div className="flex items-center gap-2">
                  <span className={`rounded-full px-2 py-0.5 text-[10px] font-medium ${categoryColors[post.category]}`}>
                    {post.category}
                  </span>
                  <span className="text-[11px] text-muted-foreground">{post.readTime} read</span>
                </div>
                <h3 className="mt-3 text-sm font-semibold leading-snug tracking-tight">{post.title}</h3>
                <p className="mt-2 flex-1 text-xs leading-relaxed text-muted-foreground line-clamp-3">{post.excerpt}</p>
                <span className="mt-4 text-[11px] text-muted-foreground">{post.date}</span>
              </div>
            </Link>
          ))}
        </div>
      </Section>

      <Footer />
    </main>
  );
}
