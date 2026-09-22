import { createFileRoute, Link } from "@tanstack/react-router";
import { Navbar } from "@/components/site/Navbar";
import { Footer } from "@/components/site/Footer";
import { Eyebrow, Section } from "@/components/site/primitives";

const TITLE = "Privacy Policy — Airavoto Gaming POS";
const DESCRIPTION = "Privacy policy for Airavoto Gaming POS and the Airavoto Gaming live availability platform.";
const URL = "https://airavotogaming.com/privacy";

export const Route = createFileRoute("/privacy")({
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
  component: PrivacyPage,
});

const sections = [
  {
    title: "1. Scope and overview",
    body: `This Privacy Policy explains how Airavoto Gaming POS ("the Software"), the Airavoto Gaming live availability platform ("the Platform"), and https://airavotogaming.com ("the Website") handle information.

The Software keeps the café's operational records on the café's own computer, local network, or server. However, the Software also communicates with Airavoto services for license verification, café registration or account setup, security status, and the live availability features described below. The statement that no information ever leaves the installation would therefore be inaccurate.`,
  },
  {
    title: "2. Information processed by the POS and Platform",
    body: `Depending on the features enabled and the information entered by the café operator, Airavoto may receive and store:

• Café identity and public profile information, such as café name, slug, location, categories, phone number, opening hours, and other website-profile details
• Account and administration information supplied during setup, such as owner or administrator name and email address
• Technical identifiers used for licensing and security, such as café ID, machine or installation identifiers, API credentials, request timestamps, and online or suspended status
• Live operational information used by the public directory, such as device categories, total and available seats, occupancy status, session availability, pricing, happy-hour schedules, and the time of the latest heartbeat

The public directory is designed not to publish customer names, customer phone numbers, booking notes, payment details, revenue reports, staff passwords, or private API credentials. Café operators should not include that information in heartbeat or public-profile fields.`,
  },
  {
    title: "3. Information kept locally by the café",
    body: `Customer records, bookings, session history, expenses, food and inventory records, staff accounts, reports, and activity logs are normally stored in the café's local application database or server. The café operator controls that installation and is responsible for its access controls, backups, retention, and compliance with applicable data-protection law.

Airavoto does not need the local database contents to display the public live-availability directory. The live sync should contain only the operational and public-profile fields needed for the Platform.`,
  },
  {
    title: "4. How information is used",
    body: `Airavoto uses information to verify and protect POS installations, create and maintain café profiles, provide live availability and pricing on the Platform, detect stale or offline installations, enforce account status and service rules, respond to support requests, maintain security, and improve reliability. Public café information is used to help gaming customers discover participating cafés and their current availability.`,
  },
  {
    title: "5. Service providers and transfers",
    body: `The Website and Platform may be hosted by third-party infrastructure providers, and Platform records may be stored in a managed database used to operate the service. The Website may load fonts or other static resources from third-party delivery services. These providers process information only as needed to host, secure, deliver, and maintain the relevant service.

Airavoto does not sell café operational data or use customer records from the local POS database for advertising. Optional integrations, if introduced, will be documented before they are enabled.`,
  },
  {
    title: "6. Security and retention",
    body: `The service uses HTTPS, rate limiting, access controls, secret-based heartbeat authentication, password hashing where applicable, and filtering of private fields before public directory responses. No internet service can guarantee absolute security, so café operators must protect their devices, credentials, network, and backups.

Airavoto retains account, licensing, profile, and live-directory records for as long as reasonably necessary to operate the service, meet security and legal obligations, resolve disputes, and maintain backups. Live availability is refreshed from heartbeats and is treated as offline or stale when updates stop.`,
  },
  {
    title: "7. Your choices and responsibilities",
    body: `The café operator may request correction or removal of café profile and account information by contacting Airavoto. The operator is responsible for giving customers appropriate notice where required, collecting any required permissions, using the POS lawfully, and avoiding personal or confidential information in public profile and heartbeat fields. Disabling required license or live-service communication may prevent verification or public availability features from working.`,
  },
  {
    title: "8. The Website and error reporting",
    body: `The Website may receive ordinary technical request information needed to deliver pages and may receive limited error information when an error-reporting mechanism is active, such as the affected route and error message. The Website's release-update form is currently only a user-interface element unless a separate submission notice is shown; do not assume an email has been subscribed until confirmation is provided.`,
  },
  {
    title: "9. Changes to this policy",
    body: `Airavoto may update this Privacy Policy when the Software, Platform, or legal requirements change. Material changes will be posted on this page with a new effective date. Continued use after an update means the updated policy will apply to future use, subject to applicable law.`,
  },
  {
    title: "10. Contact",
    body: `Questions, correction requests, or privacy concerns can be sent to airavotogaming@gmail.com or +91 8657955764. You can also visit https://airavotogaming.com/contact.`,
  },
];

function PrivacyPage() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <Navbar />
      <section className="relative overflow-hidden pb-12 pt-36 sm:pt-44">
        <div aria-hidden="true" className="pointer-events-none absolute inset-0" style={{ background: "radial-gradient(60% 45% at 50% 0%, oklch(0.75 0.10 290/0.18), transparent 70%)" }} />
        <div className="relative mx-auto w-full max-w-6xl px-5 text-center">
          <Eyebrow>Legal</Eyebrow>
          <h1 className="mx-auto mt-8 max-w-3xl text-balance text-5xl font-bold leading-[1.02] tracking-[-0.03em] sm:text-6xl">Privacy Policy</h1>
          <p className="mx-auto mt-4 text-sm text-muted-foreground">Last updated: September 2026</p>
        </div>
      </section>
      <Section>
        <div className="mx-auto max-w-3xl">
          <div className="rounded-2xl border border-border bg-surface p-6">
            <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">TL;DR</p>
            <p className="mt-3 text-base leading-relaxed text-foreground/90">Airavoto POS keeps detailed café operations locally, but it sends limited account, licensing, café-profile, and live availability information to Airavoto services so verification and the public directory can work. We do not intend the public directory to contain customer records, payment details, staff passwords, or private API credentials.</p>
          </div>
          <div className="mt-10 space-y-10">
            {sections.map((s) => (
              <div key={s.title} id={s.title.startsWith("6.") ? "security" : undefined}>
                <h2 className="text-lg font-semibold tracking-tight">{s.title}</h2>
                <div className="mt-3 space-y-3">{s.body.split("\n\n").map((para, i) => <p key={i} className="whitespace-pre-line text-sm leading-relaxed text-muted-foreground">{para}</p>)}</div>
              </div>
            ))}
          </div>
          <div className="mt-12 flex flex-wrap gap-4 border-t border-border/60 pt-8 text-sm"><Link to="/terms" className="text-foreground/80 hover:text-foreground">Terms of Use →</Link><Link to="/faq" className="text-foreground/80 hover:text-foreground">FAQ →</Link></div>
        </div>
      </Section>
      <Footer />
    </main>
  );
}
