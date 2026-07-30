import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/site/Navbar";
import { Footer } from "@/components/site/Footer";
import { Eyebrow, Section } from "@/components/site/primitives";

export const Route = createFileRoute("/blog")({
  head: () => ({
    meta: [
      { title: "Blog — Airavoto Gaming POS" },
      { name: "description", content: "News, tips and updates from the Airavoto Gaming POS team." },
    ],
  }),
  component: BlogPage,
});

function BlogPage() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <Navbar />

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
            News & updates
          </h1>
          <p className="mx-auto mt-6 max-w-md text-pretty text-base leading-relaxed text-muted-foreground">
            Tips, feature announcements and stories from gaming centers using Airavoto POS.
          </p>
        </div>
      </section>

      <Section>
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm text-muted-foreground">Posts coming soon — check back shortly.</p>
        </div>
      </Section>

      <Footer />
    </main>
  );
}
