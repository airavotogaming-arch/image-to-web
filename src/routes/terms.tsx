import { createFileRoute, Link } from "@tanstack/react-router";
import { Navbar } from "@/components/site/Navbar";
import { Footer } from "@/components/site/Footer";
import { Eyebrow, Section } from "@/components/site/primitives";

const TITLE = "Terms of Use — Airavoto Gaming POS";
const DESCRIPTION = "Terms of use for Airavoto Gaming POS and the Airavoto Gaming platform.";
const URL = "https://airavotogaming.com/terms";

export const Route = createFileRoute("/terms")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:type", content: "website" },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:image", content: "/airavoto-logo.png" },
      { property: "og:url", content: URL },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: TITLE },
      { name: "twitter:description", content: DESCRIPTION },
      { name: "twitter:image", content: "/airavoto-logo.png" },
    ],
    links: [{ rel: "canonical", href: URL }],
  }),
  component: TermsPage,
});

const sections = [
  { title: "1. Acceptance of terms", body: `By downloading, installing, accessing, or using Airavoto Gaming POS ("the Software"), the café operator agrees to these Terms of Use. If you do not agree, do not install or use the Software.` },
  { title: "2. License grant", body: `Subject to these terms, Airavoto grants the operator a non-exclusive, non-transferable license to install and use the Software for the operator's own gaming center or café operations.

You may not resell or sublicense the Software as a standalone product, remove copyright or security notices, use another café's credentials, bypass license verification, interfere with the heartbeat or Platform, or represent Airavoto's original work as your own.` },
  { title: "3. Service and pricing", body: `The availability of free features, trials, paid plans, lifetime licenses, updates, and support may differ by offer, account, or written agreement. The applicable commercial terms shown at purchase or agreed with Airavoto control any paid service. Nothing on this page promises that every feature or update will remain free forever.` },
  { title: "4. POS operation and public sync", body: `The Software is designed to operate locally while communicating with Airavoto services for account setup, license verification, security status, and live directory features. A valid authenticated installation may periodically send the café name and slug, profile metadata, device and seat availability, timestamps, pricing, happy-hour configuration, and related operational status.

The Platform may display the café's public profile, opening information, pricing, happy-hour offers, and current seat availability to gaming customers. The operator must not place customer names, phone numbers, payment details, staff passwords, private API keys, or other confidential information in public profile or heartbeat fields.

If the operator blocks required verification or deliberately falsifies, abuses, or interferes with the sync, Airavoto may disable the affected Platform features, suspend the installation, or refuse further service after considering the circumstances and applicable law.` },
  { title: "5. Operator responsibilities", body: `The operator is responsible for lawful use of the Software, obtaining any notices or permissions required for customer data, securing the local machine and network, protecting administrator credentials and API secrets, maintaining backups, reviewing public café information, and keeping supported runtime and database dependencies updated. The operator is also responsible for the accuracy of prices, hours, availability, and other information shown to customers.` },
  { title: "6. Acceptable use and suspension", body: `You must not use the Software or Platform to commit fraud, abuse customers, distribute malware, scrape or attack the service, impersonate another café, expose private information, or evade a suspension. Airavoto may suspend or limit access when reasonably necessary for security, misuse, non-payment under a paid agreement, legal compliance, or material breach. Where practical, Airavoto will provide a reason and a support route for review.` },
  { title: "7. Third-party components and hosting", body: `The Software includes open-source and third-party components governed by their own licenses. The Platform and Website may use hosting, database, delivery, monitoring, and communications providers. Those services may have separate terms and availability limits.` },
  { title: "8. No warranty", body: `TO THE MAXIMUM EXTENT PERMITTED BY APPLICABLE LAW, THE SOFTWARE, PLATFORM, AND WEBSITE ARE PROVIDED "AS IS" AND "AS AVAILABLE" WITHOUT WARRANTIES, EXPRESS OR IMPLIED. Airavoto does not promise uninterrupted operation, error-free calculations, continuous availability, or that every vulnerability will be prevented. The operator must verify billing, pricing, availability, and backups before relying on them.` },
  { title: "9. Limitation of liability", body: `TO THE MAXIMUM EXTENT PERMITTED BY APPLICABLE LAW, AIRAVOTO WILL NOT BE LIABLE FOR INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, EXEMPLARY, OR PUNITIVE LOSS, INCLUDING LOSS OF DATA, REVENUE, BUSINESS, OR CUSTOMER RELATIONSHIPS, ARISING FROM use of or inability to use the Software, Platform, or Website. This does not exclude liability that cannot lawfully be excluded.` },
  { title: "10. Termination", body: `The license ends if the operator materially breaches these terms or the applicable commercial agreement. On termination, the operator must stop using the Software and remove copies that it is not otherwise entitled to retain. Local records remain under the operator's control, subject to applicable law and the operator's backup and deletion responsibilities.` },
  { title: "11. Governing law and contact", body: `These Terms are governed by the laws of India, subject to any mandatory rights under applicable law. Questions about the Software, Platform, or a suspension can be sent to airavotogaming@gmail.com, +91 8657955764, or https://airavotogaming.com/contact.` },
  { title: "12. Changes to these terms", body: `Airavoto may update these Terms when the Software, Platform, commercial offers, or legal requirements change. Material changes will be posted on this page with a new effective date. Continued use after the effective date means the updated terms apply to future use, subject to applicable law.` },
];

function TermsPage() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <Navbar />
      <section className="relative overflow-hidden pb-12 pt-36 sm:pt-44">
        <div aria-hidden="true" className="pointer-events-none absolute inset-0" style={{ background: "radial-gradient(60% 45% at 50% 0%, oklch(0.75 0.10 290/0.18), transparent 70%)" }} />
        <div className="relative mx-auto w-full max-w-6xl px-5 text-center"><Eyebrow>Legal</Eyebrow><h1 className="mx-auto mt-8 max-w-3xl text-balance text-5xl font-bold leading-[1.02] tracking-[-0.03em] sm:text-6xl">Terms of Use</h1><p className="mx-auto mt-4 text-sm text-muted-foreground">Last updated: September 2026</p></div>
      </section>
      <Section>
        <div className="mx-auto max-w-3xl">
          <div className="rounded-2xl border border-border bg-surface p-6"><p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">TL;DR</p><p className="mt-3 text-base leading-relaxed text-foreground/90">Airavoto POS keeps detailed café operations local, but authenticated license and live-availability communication is part of the service. Use accurate public information, protect customer and staff data, and do not misuse or interfere with the Platform.</p></div>
          <div className="mt-10 space-y-10">{sections.map((s) => <div key={s.title} id={s.title.startsWith("7.") ? "license" : undefined}><h2 className="text-lg font-semibold tracking-tight">{s.title}</h2><div className="mt-3 space-y-3">{s.body.split("\n\n").map((para, i) => <p key={i} className="whitespace-pre-line text-sm leading-relaxed text-muted-foreground">{para}</p>)}</div></div>)}</div>
          <div className="mt-12 flex flex-wrap gap-4 border-t border-border/60 pt-8 text-sm"><Link to="/privacy" className="text-foreground/80 hover:text-foreground">Privacy Policy →</Link><Link to="/faq" className="text-foreground/80 hover:text-foreground">FAQ →</Link></div>
        </div>
      </Section>
      <Footer />
    </main>
  );
}
