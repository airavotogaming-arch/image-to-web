import { Layers, ListTodo, Zap } from "lucide-react";

function Gauge({ value }: { value: number }) {
  const ticks = 40;
  return (
    <div className="relative size-24">
      {Array.from({ length: ticks }).map((_, i) => {
        const on = i / ticks <= value / 100;
        return (
          <span
            key={i}
            className={`absolute left-1/2 top-1/2 h-[3px] w-2.5 origin-[-34px_50%] rounded-full ${
              on ? "bg-[oklch(0.72_0.16_150)]" : "bg-foreground/12"
            }`}
            style={{ transform: `rotate(${135 + (i / (ticks - 1)) * 270}deg) translateX(34px)` }}
          />
        );
      })}
      <div className="absolute inset-0 flex flex-col items-center justify-center">
        <span className="text-lg font-semibold">{value}%</span>
        <span className="text-[8px] text-muted-foreground">Productivity</span>
      </div>
    </div>
  );
}

function Card({
  className,
  style,
  children,
}: {
  className?: string;
  style?: React.CSSProperties;
  children: React.ReactNode;
}) {
  return (
    <div
      className={`absolute rounded-2xl border border-border/80 bg-[oklch(0.17_0_0/0.85)] p-4 backdrop-blur-sm shadow-[var(--shadow-soft)] ${className ?? ""}`}
      style={style}
    >
      {children}
    </div>
  );
}

export function HeroFloaters() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 hidden select-none lg:block"
      style={{
        maskImage:
          "radial-gradient(70% 60% at 50% 45%, transparent 30%, black 75%), linear-gradient(to bottom, black 60%, transparent 95%)",
        maskComposite: "intersect",
        WebkitMaskImage:
          "radial-gradient(70% 60% at 50% 45%, transparent 30%, black 75%), linear-gradient(to bottom, black 60%, transparent 95%)",
        WebkitMaskComposite: "source-in",
      }}
    >
      {/* left top */}
      <Card
        className="left-[4%] top-[8%] w-64 opacity-70"
        style={{ transform: "perspective(1200px) rotateY(14deg) rotateZ(-3deg)" }}
      >
        <div className="flex items-center gap-2 text-xs font-medium">
          <ListTodo className="size-3.5 text-[oklch(0.72_0.14_20)]" /> Keyboard-first design
        </div>
        <p className="mt-2 text-[11px] leading-relaxed text-muted-foreground">
          Shortcuts for everything — no mouse required.
        </p>
        <div className="mt-4 flex gap-2">
          <span className="rounded-md border border-border bg-surface-2 px-2 py-1 text-[10px]">⌘</span>
          <span className="rounded-md border border-border bg-surface-2 px-2 py-1 text-[10px]">K</span>
        </div>
      </Card>

      {/* left middle task list */}
      <Card
        className="left-[-2%] top-[36%] w-72 opacity-60"
        style={{ transform: "perspective(1200px) rotateY(16deg) rotateZ(-2deg)" }}
      >
        <div className="flex items-center justify-between text-[11px] text-muted-foreground">
          <span>Unsubscribe flow</span>
          <span>•••</span>
        </div>
        {["In Progress · 7 days ago", "Bug · Feature", "Review · 3 days ago"].map((r) => (
          <div
            key={r}
            className="mt-3 flex items-center gap-2 border-t border-border/60 pt-3 text-[11px] text-foreground/70"
          >
            <span className="size-1.5 rounded-full bg-foreground/50" />
            {r}
          </div>
        ))}
        <div className="mt-4 h-8 rounded-lg bg-surface-2" />
      </Card>

      {/* left bottom gauges */}
      <Card
        className="bottom-[2%] left-[2%] w-80 opacity-55"
        style={{ transform: "perspective(1200px) rotateY(14deg) rotateZ(-6deg)" }}
      >
        <div className="flex items-center justify-between">
          <span className="text-sm font-medium">Productivity Reports</span>
          <span className="rounded-md border border-border px-2 py-1 text-[10px] text-muted-foreground">
            View
          </span>
        </div>
        <div className="mt-4 flex justify-around">
          <Gauge value={80} />
          <Gauge value={65} />
        </div>
      </Card>

      {/* right top workspace nav */}
      <Card
        className="right-[3%] top-[6%] w-56 opacity-70"
        style={{ transform: "perspective(1200px) rotateY(-14deg) rotateZ(3deg)" }}
      >
        <div className="flex items-center gap-2 text-xs font-medium text-muted-foreground">
          <Layers className="size-3.5" /> My Workspace
        </div>
        <div className="mt-3 space-y-1.5 text-[11px]">
          <div className="rounded-md bg-surface-2 px-2 py-1.5 text-foreground">Issues</div>
          <div className="px-2 py-1 pl-5 text-muted-foreground">Active</div>
          <div className="px-2 py-1 pl-5 text-muted-foreground">Backlog</div>
          <div className="px-2 py-1 text-foreground/80">Projects</div>
          <div className="px-2 py-1 text-foreground/80">Views</div>
        </div>
      </Card>

      {/* right middle */}
      <Card
        className="right-[2%] top-[40%] w-64 opacity-65"
        style={{ transform: "perspective(1200px) rotateY(-16deg) rotateZ(6deg)" }}
      >
        <div className="flex size-9 items-center justify-center rounded-full border border-border bg-surface-2">
          <Zap className="size-4 text-foreground/70" />
        </div>
        <div className="mt-4 flex items-center gap-2 text-xs font-medium">
          <Zap className="size-3.5 text-[oklch(0.7_0.18_20)]" /> Instantly fast
        </div>
        <p className="mt-2 text-[11px] leading-relaxed text-muted-foreground">
          Designed in pursuit of high-speed performance.
        </p>
      </Card>

      {/* right bottom chart */}
      <Card
        className="bottom-[3%] right-[1%] w-80 opacity-55"
        style={{ transform: "perspective(1200px) rotateY(-12deg) rotateZ(4deg)" }}
      >
        <div className="flex items-center gap-2 text-xs font-medium">
          Productivity Reports
          <span className="rounded-md bg-[oklch(0.35_0.1_150)] px-1.5 py-0.5 text-[9px] text-[oklch(0.85_0.15_150)]">
            New
          </span>
        </div>
        <p className="mt-1 text-[10px] text-muted-foreground">Weekly output across the team.</p>
        <svg viewBox="0 0 260 90" className="mt-3 w-full">
          {[0, 1, 2, 3].map((i) => (
            <line
              key={i}
              x1="0"
              x2="260"
              y1={i * 28 + 2}
              y2={i * 28 + 2}
              stroke="currentColor"
              className="text-border"
              strokeWidth="0.5"
            />
          ))}
          <polyline
            fill="none"
            stroke="oklch(0.75 0.17 150)"
            strokeWidth="1.5"
            points="0,70 26,52 52,26 78,44 104,78 130,58 156,50 182,14 208,40 234,30 260,20"
          />
        </svg>
      </Card>
    </div>
  );
}