import { createFileRoute, Link } from "@tanstack/react-router";
import { ChevronDown, Download, ShieldCheck, Wrench } from "lucide-react";
import { useState } from "react";
import { Navbar } from "@/components/site/Navbar";
import { Footer } from "@/components/site/Footer";
import { Eyebrow, Section, SectionHeading } from "@/components/site/primitives";

const TITLE = "Gaming Café POS Troubleshooting Guide — Airavoto Gaming POS";
const DESCRIPTION =
  "Fix common Airavoto Gaming POS installation, Microsoft Store, Windows security, network and update problems with this practical troubleshooting guide.";
const URL = "https://airavotogaming.com/troubleshooting";

export const Route = createFileRoute("/troubleshooting")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      {
        name: "keywords",
        content:
          "gaming cafe POS troubleshooting, gaming center POS installation help, Windows POS not opening, Microsoft Store installation help, Airavoto Gaming POS support",
      },
      { property: "og:type", content: "article" },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:image", content: "/airavoto-demo-screenshot.png" },
      { property: "og:url", content: URL },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: TITLE },
      { name: "twitter:description", content: DESCRIPTION },
      { name: "twitter:image", content: "/airavoto-demo-screenshot.png" },
    ],
    links: [{ rel: "canonical", href: URL }],
  }),
  component: TroubleshootingPage,
});

const setupSteps = [
  ["01", "Install the POS", "Use the Microsoft Store button on Windows for the simplest installation, or use the standalone Windows installer."],
  ["02", "Create the admin profile", "Enter your café details and keep the admin password private. It controls pricing, reports and staff access."],
  ["03", "Configure your stations", "Add PC, PS5, Xbox, VR or custom stations, then set seat numbers, opening hours and pricing rules."],
  ["04", "Start managing sessions", "Use the Dashboard for walk-ins, advance bookings, food orders, payments, reports and real-time seat management."],
];

const fixes = [
  ["The Microsoft Store button does not open", "The Store link opens the Microsoft Store app on Windows. If you are on a phone or Mac, open the page on a Windows 10 or Windows 11 computer, or use the standalone Windows installer."],
  ["Windows shows a security warning", "Download the latest installer from the official Airavoto source. If SmartScreen appears, select More info and verify that the application is Airavoto Gaming POS before continuing."],
  ["The POS does not open after installation", "Restart Windows and try again. Confirm that installation completed and that Windows Defender or another security tool did not quarantine the application. Reinstall the latest release if necessary."],
  ["Other counter computers cannot connect", "Start the POS on the main counter computer and keep every terminal on the same local network. Use the main computer's local IP address and check Windows Firewall if the dashboard is unreachable."],
  ["My old data is not visible after an update", "Do not delete the existing application data or database. Close the POS, confirm that you are opening the new installation, and restore your latest backup before contacting support."],
  ["The installer seems stuck", "Close duplicate installer windows, restart Windows and run the installer again as administrator. Keep at least 500 MB of free storage and temporarily close other installers."],
];

function FixItem({ question, answer }: { question: string; answer: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="rounded-xl border border-border bg-surface">
      <button
        type="button"
        onClick={() => setOpen((value) => !value)}
        className="flex w-full items-center justify-between px-5 py-4 text-left text-sm font-medium"
        aria-expanded={open}
      >
        {question}
        <ChevronDown className={`ml-4 size-4 shrink-0 text-muted-foreground transition-transform ${open ? "rotate-180" : ""}`} />
      </button>
      {open ? <p className="border-t border-border/60 px-5 py-4 text-sm leading-relaxed text-muted-foreground">{answer}</p> : null}
    </div>
  );
}

function TroubleshootingPage() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <Navbar />
      <section className="relative overflow-hidden pb-16 pt-36 sm:pt-44">
        <div aria-hidden="true" className="pointer-events-none absolute inset-0" style={{ background: "radial-gradient(60% 45% at 50% 0%, oklch(0.75 0.10 290/0.18), transparent 70%)" }} />
        <div className="relative mx-auto w-full max-w-4xl px-5 text-center">
          <Eyebrow><Wrench className="mr-2 inline size-3.5" /> Support guide</Eyebrow>
          <h1 className="mx-auto mt-8 max-w-3xl text-balance text-5xl font-bold leading-[1.02] tracking-[-0.03em] sm:text-7xl">Gaming café POS troubleshooting guide.</h1>
          <p className="mx-auto mt-6 max-w-2xl text-pretty text-base leading-relaxed text-muted-foreground sm:text-lg">Get Airavoto Gaming POS installed, configured and running smoothly on Windows. Find quick fixes for the Microsoft Store, security warnings, local networks and updates.</p>
        </div>
      </section>

      <Section>
        <SectionHeading eyebrow="First-time setup" title="Set up your gaming center POS" subtitle="Follow these steps after installing Airavoto Gaming POS for the first time." />
        <div className="mx-auto mt-12 grid max-w-5xl gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {setupSteps.map(([number, title, body]) => (
            <article key={number} className="panel p-6">
              <span className="font-mono text-3xl font-bold text-foreground/15">{number}</span>
              <h2 className="mt-5 text-sm font-semibold tracking-tight">{title}</h2>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{body}</p>
            </article>
          ))}
        </div>
      </Section>

      <Section>
        <SectionHeading eyebrow="Common fixes" title="Installation and Windows troubleshooting" subtitle="Open a problem below to see the recommended fix." />
        <div className="mx-auto mt-12 max-w-3xl space-y-3">
          {fixes.map(([question, answer]) => <FixItem key={question} question={question} answer={answer} />)}
        </div>
      </Section>

      <Section>
        <div className="mx-auto max-w-3xl rounded-3xl border border-border bg-surface p-8 text-center sm:p-12">
          <ShieldCheck className="mx-auto size-7 text-foreground/70" />
          <h2 className="mt-5 text-2xl font-semibold tracking-tight">Need the latest installer?</h2>
          <p className="mx-auto mt-3 max-w-lg text-sm leading-relaxed text-muted-foreground">Download the free Windows gaming café POS or install it from the Microsoft Store.</p>
          <div className="mt-7 flex flex-wrap justify-center gap-3">
            <Link to="/download" className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90"><Download className="size-4" /> Download POS</Link>
            <Link to="/faq" className="inline-flex items-center rounded-full border border-border bg-surface-2 px-6 py-3 text-sm font-medium text-foreground transition-colors hover:bg-surface">Read FAQ</Link>
          </div>
        </div>
      </Section>
      <Footer />
    </main>
  );
}

export default TroubleshootingPage;

// Keep the canonical URL close to the route metadata for future SEO maintenance.
void URL;
