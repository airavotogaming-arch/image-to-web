import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowLeft } from "lucide-react";
import { Navbar } from "@/components/site/Navbar";
import { Footer } from "@/components/site/Footer";
import { posts, categoryColors } from "@/lib/blog-posts";

export const Route = createFileRoute("/blog_/$slug")({
  head: ({ params }) => {
    const post = posts.find((p) => p.slug === params.slug);
    if (!post) {
      return {
        meta: [{ title: "Post not found" }, { name: "description", content: "" }],
      };
    }
    const title = `${post.title} — Airavoto Blog`;
    const url = `https://airavoto.com/blog/${post.slug}`;
    return {
      meta: [
        { title },
        { name: "description", content: post.excerpt },
        // Open Graph — controls how the post looks when shared on WhatsApp, Facebook, LinkedIn, etc.
        { property: "og:type", content: "article" },
        { property: "og:title", content: post.title },
        { property: "og:description", content: post.excerpt },
        { property: "og:image", content: post.img },
        { property: "og:url", content: url },
        { property: "og:site_name", content: "Airavoto Gaming POS" },
        { property: "article:published_time", content: new Date(post.date).toISOString() },
        { property: "article:section", content: post.category },
        // Twitter/X card
        { name: "twitter:card", content: "summary_large_image" },
        { name: "twitter:title", content: post.title },
        { name: "twitter:description", content: post.excerpt },
        { name: "twitter:image", content: post.img },
      ],
      links: [{ rel: "canonical", href: url }],
    };
  },
  loader: ({ params }) => {
    const post = posts.find((p) => p.slug === params.slug);
    if (!post) throw notFound();
    return post;
  },
  component: BlogPostPage,
});

function renderContent(content: string) {
  return content.split("\n\n").map((block, i) => {
    if (block.startsWith("## ")) {
      return (
        <h2 key={i} className="mt-10 text-xl font-bold tracking-tight text-foreground">
          {block.slice(3)}
        </h2>
      );
    }
    if (block.startsWith("**") && block.endsWith("**")) {
      return (
        <p key={i} className="mt-4 font-semibold text-foreground">
          {block.slice(2, -2)}
        </p>
      );
    }
    // Handle inline bold and code within paragraphs
    const parts = block.split(/(\*\*[^*]+\*\*|`[^`]+`)/g);
    const rendered = parts.map((part, j) => {
      if (part.startsWith("**") && part.endsWith("**")) {
        return <strong key={j}>{part.slice(2, -2)}</strong>;
      }
      if (part.startsWith("`") && part.endsWith("`")) {
        return <code key={j} className="rounded bg-surface-2 px-1.5 py-0.5 font-mono text-[0.85em] text-foreground/80">{part.slice(1, -1)}</code>;
      }
      return part;
    });
    // List items
    if (block.startsWith("- ")) {
      const items = block.split("\n").filter((l) => l.startsWith("- "));
      return (
        <ul key={i} className="mt-4 space-y-2 pl-4">
          {items.map((item, j) => {
            const itemParts = item.slice(2).split(/(\*\*[^*]+\*\*|`[^`]+`)/g);
            return (
              <li key={j} className="flex gap-2 text-sm leading-relaxed text-muted-foreground">
                <span className="mt-2 size-1.5 shrink-0 rounded-full bg-foreground/30" />
                <span>
                  {itemParts.map((p, k) => {
                    if (p.startsWith("**") && p.endsWith("**")) return <strong key={k} className="text-foreground">{p.slice(2, -2)}</strong>;
                    if (p.startsWith("`") && p.endsWith("`")) return <code key={k} className="rounded bg-surface-2 px-1.5 py-0.5 font-mono text-[0.85em] text-foreground/80">{p.slice(1, -1)}</code>;
                    return p;
                  })}
                </span>
              </li>
            );
          })}
        </ul>
      );
    }
    return (
      <p key={i} className="mt-4 text-sm leading-relaxed text-muted-foreground">
        {rendered}
      </p>
    );
  });
}

function BlogPostPage() {
  const post = Route.useLoaderData();
  const others = posts.filter((p) => p.slug !== post.slug).slice(0, 3);

  return (
    <main className="min-h-screen bg-background text-foreground">
      <Navbar />

      {/* Hero image */}
      <div className="relative h-72 w-full overflow-hidden sm:h-96 lg:h-[480px]">
        <img src={post.img} alt={post.title} className="h-full w-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent" />
      </div>

      {/* Article */}
      <div className="relative mx-auto max-w-3xl px-5 pb-24 -mt-16">
        {/* Back link */}
        <Link to="/blog" className="inline-flex items-center gap-1.5 text-xs text-muted-foreground transition-colors hover:text-foreground">
          <ArrowLeft className="size-3.5" /> Back to blog
        </Link>

        {/* Meta */}
        <div className="mt-4 flex flex-wrap items-center gap-3">
          <span className={`rounded-full px-2.5 py-1 text-[11px] font-medium ${categoryColors[post.category]}`}>
            {post.category}
          </span>
          <span className="text-xs text-muted-foreground">{post.date}</span>
          <span className="text-xs text-muted-foreground">·</span>
          <span className="text-xs text-muted-foreground">{post.readTime} read</span>
        </div>

        <h1 className="mt-5 text-3xl font-bold leading-tight tracking-tight sm:text-4xl lg:text-5xl">
          {post.title}
        </h1>
        <p className="mt-4 text-base leading-relaxed text-muted-foreground">{post.excerpt}</p>

        {/* Divider */}
        <div className="my-8 border-t border-border/60" />

        {/* Body */}
        <article>{renderContent(post.content)}</article>

        {/* Divider */}
        <div className="my-12 border-t border-border/60" />

        {/* More posts */}
        <h2 className="text-sm font-semibold uppercase tracking-widest text-muted-foreground">More articles</h2>
        <div className="mt-5 grid gap-4 sm:grid-cols-3">
          {others.map((p) => (
            <Link to="/blog/$slug" params={{ slug: p.slug }} key={p.slug} className="group flex flex-col overflow-hidden rounded-xl border border-border bg-surface transition-colors hover:bg-surface-2">
              <div className="relative h-28 overflow-hidden">
                <img src={p.img} alt={p.title} className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" />
              </div>
              <div className="p-3">
                <p className="text-xs font-semibold leading-snug tracking-tight">{p.title}</p>
                <p className="mt-1 text-[11px] text-muted-foreground">{p.date}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>

      <Footer />
    </main>
  );
}
