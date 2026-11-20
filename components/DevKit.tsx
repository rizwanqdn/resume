"use client";

import React, { useEffect, useRef, useState, type ReactNode } from "react";
import {
  Check,
  Copy,
  Printer,
  ArrowUpRight,
  Sparkles,
  User,
  Briefcase,
  Layers,
  Cpu,
  Mail,
  Sun,
  Moon,
  Rocket,
} from "lucide-react";
import "./dev-theme.css";

/* ------------------------------------------------------------------ */
/* Helpers                                                             */
/* ------------------------------------------------------------------ */
function useInView<T extends HTMLElement>(threshold = 0.15) {
  const ref = useRef<T>(null);
  const [seen, setSeen] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          setSeen(true);
          io.disconnect();
        }
      },
      { threshold },
    );
    io.observe(el);
    return () => io.disconnect();
  }, [threshold]);
  return { ref, seen };
}

/* ------------------------------------------------------------------ */
/* Scroll reveal                                                       */
/* ------------------------------------------------------------------ */
export function DevReveal({
  children,
  delay = 0,
  className = "",
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
}) {
  const { ref, seen } = useInView<HTMLDivElement>(0.08);
  return (
    <div
      ref={ref}
      style={{ transitionDelay: `${delay}ms` }}
      className={`dev-reveal ${seen ? "is-in" : ""} ${className}`}
    >
      {children}
    </div>
  );
}

/* ------------------------------------------------------------------ */
/* Card with cursor-following spotlight                                */
/* ------------------------------------------------------------------ */
export function SpotlightCard({
  children,
  className = "",
  tilt = false,
}: {
  children: ReactNode;
  className?: string;
  tilt?: boolean;
}) {
  const onMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const r = e.currentTarget.getBoundingClientRect();
    e.currentTarget.style.setProperty("--mx", `${e.clientX - r.left}px`);
    e.currentTarget.style.setProperty("--my", `${e.clientY - r.top}px`);
    if (tilt && window.matchMedia("(hover: hover)").matches) {
      const x = (e.clientX - r.left) / r.width - 0.5;
      const y = (e.clientY - r.top) / r.height - 0.5;
      e.currentTarget.style.transform = `perspective(900px) rotateX(${(
        -y * 7
      ).toFixed(2)}deg) rotateY(${(x * 7).toFixed(2)}deg) translateY(-4px)`;
    }
  };
  const onLeave = (e: React.MouseEvent<HTMLDivElement>) => {
    e.currentTarget.style.transform = "";
  };
  return (
    <div
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      className={`surface spotlight relative overflow-hidden ${className}`}
    >
      <div className="relative z-10 h-full">{children}</div>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/* Rotating role words                                                 */
/* ------------------------------------------------------------------ */
export function RoleRotator({ words }: { words: string[] }) {
  const [i, setI] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setI((v) => (v + 1) % words.length), 2400);
    return () => clearInterval(t);
  }, [words.length]);
  return (
    <span
      key={i}
      className="rise-in grad-animate inline-block bg-gradient-to-r from-violet-400 via-fuchsia-300 to-cyan-300 bg-clip-text text-transparent"
    >
      {words[i]}
    </span>
  );
}

/* ------------------------------------------------------------------ */
/* Count-up number                                                     */
/* ------------------------------------------------------------------ */
export function CountUp({
  to,
  suffix = "",
  duration = 1200,
}: {
  to: number;
  suffix?: string;
  duration?: number;
}) {
  const { ref, seen } = useInView<HTMLSpanElement>(0.5);
  const [n, setN] = useState(0);
  useEffect(() => {
    if (!seen) return;
    let raf = 0;
    const start = performance.now();
    const tick = (t: number) => {
      const p = Math.min((t - start) / duration, 1);
      setN(Math.round((1 - Math.pow(1 - p, 3)) * to));
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [seen, to, duration]);
  return (
    <span ref={ref}>
      {n}
      {suffix}
    </span>
  );
}

/* ------------------------------------------------------------------ */
/* Infinite marquee                                                    */
/* ------------------------------------------------------------------ */
export function Marquee({
  items,
  reverse = false,
}: {
  items: string[];
  reverse?: boolean;
}) {
  const doubled = [...items, ...items];
  return (
    <div className="marquee-mask relative overflow-hidden">
      <div
        className={`marquee-track flex w-max gap-3 py-1 ${
          reverse ? "marquee-reverse" : ""
        }`}
      >
        {doubled.map((s, i) => (
          <span
            key={i}
            className="inline-flex items-center gap-2 whitespace-nowrap rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-xs font-medium text-zinc-200 sm:text-sm"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-violet-400" />
            {s}
          </span>
        ))}
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/* Navigation: floating pill (top) + dock (bottom on mobile)           */
/* ------------------------------------------------------------------ */
/* ------------------------------------------------------------------ */
/* Day / Night toggle (persists in localStorage)                       */
/* ------------------------------------------------------------------ */
export function ThemeToggle({ className = "" }: { className?: string }) {
  const [theme, setTheme] = useState<"dark" | "light">("dark");

  useEffect(() => {
    setTheme(
      document.documentElement.dataset.theme === "light" ? "light" : "dark",
    );
  }, []);

  const toggle = () => {
    const next = theme === "dark" ? "light" : "dark";
    setTheme(next);
    document.documentElement.dataset.theme = next;
    try {
      localStorage.setItem("theme", next);
    } catch {
      // storage blocked
    }
    document
      .querySelector('meta[name="theme-color"]')
      ?.setAttribute("content", next === "light" ? "#f7f6fb" : "#07070b");
  };

  const isDark = theme === "dark";

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label={isDark ? "Switch to day mode" : "Switch to night mode"}
      title={isDark ? "Day mode" : "Night mode"}
      className={`no-print relative flex h-9 w-9 shrink-0 items-center justify-center overflow-hidden rounded-full border border-white/10 bg-white/5 text-zinc-300 transition-all hover:border-violet-400/40 hover:text-white active:scale-90 ${className}`}
    >
      <Sun
        className={`absolute h-4 w-4 transition-all duration-500 ${
          isDark
            ? "rotate-0 scale-100 opacity-100"
            : "rotate-90 scale-0 opacity-0"
        }`}
      />
      <Moon
        className={`absolute h-4 w-4 transition-all duration-500 ${
          isDark
            ? "-rotate-90 scale-0 opacity-0"
            : "rotate-0 scale-100 opacity-100"
        }`}
      />
    </button>
  );
}

/* ------------------------------------------------------------------ */
/* Split-word heading reveal                                           */
/* ------------------------------------------------------------------ */
export function SplitHeading({
  text,
  className = "",
  as: Tag = "h2",
}: {
  text: string;
  className?: string;
  as?: React.ElementType;
}) {
  const { ref, seen } = useInView<HTMLElement>(0.3);
  const words = text.split(" ");
  return (
    <Tag ref={ref} className={className} aria-label={text}>
      {words.map((w, i) => (
        <span
          key={i}
          aria-hidden="true"
          className="-mb-[0.12em] inline-block overflow-hidden pb-[0.12em] align-bottom"
        >
          <span
            className={`split-word inline-block ${seen ? "is-in" : ""}`}
            style={{ transitionDelay: `${i * 70}ms` }}
          >
            {w}
            {i < words.length - 1 ? "\u00A0" : ""}
          </span>
        </span>
      ))}
    </Tag>
  );
}

/* ------------------------------------------------------------------ */
/* Magnetic hover wrapper                                              */
/* ------------------------------------------------------------------ */
export function Magnetic({
  children,
  className = "",
  strength = 0.25,
}: {
  children: ReactNode;
  className?: string;
  strength?: number;
}) {
  const onMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!window.matchMedia("(hover: hover)").matches) return;
    const r = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - (r.left + r.width / 2);
    const y = e.clientY - (r.top + r.height / 2);
    e.currentTarget.style.transform = `translate(${x * strength}px, ${
      y * strength
    }px)`;
  };
  const onLeave = (e: React.MouseEvent<HTMLDivElement>) => {
    e.currentTarget.style.transform = "";
  };
  return (
    <div
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      className={`transition-transform duration-200 ease-out ${className}`}
    >
      {children}
    </div>
  );
}

/* ------------------------------------------------------------------ */
/* Soft glow that follows the cursor (desktop only)                    */
/* ------------------------------------------------------------------ */
export function CursorGlow() {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (!window.matchMedia("(hover: hover) and (pointer: fine)").matches)
      return;
    const el = ref.current;
    if (!el) return;
    let x = window.innerWidth / 2;
    let y = window.innerHeight / 3;
    let tx = x;
    let ty = y;
    let raf = 0;
    const onMove = (e: MouseEvent) => {
      tx = e.clientX;
      ty = e.clientY;
      el.style.opacity = "1";
    };
    const loop = () => {
      x += (tx - x) * 0.12;
      y += (ty - y) * 0.12;
      el.style.transform = `translate3d(${x}px, ${y}px, 0)`;
      raf = requestAnimationFrame(loop);
    };
    window.addEventListener("mousemove", onMove, { passive: true });
    raf = requestAnimationFrame(loop);
    return () => {
      window.removeEventListener("mousemove", onMove);
      cancelAnimationFrame(raf);
    };
  }, []);
  return <div ref={ref} aria-hidden="true" className="cursor-glow no-print" />;
}

/* ------------------------------------------------------------------ */
/* Hero terminal with typing animation                                 */
/* ------------------------------------------------------------------ */
const TERM_LINES = [
  { t: "npx create-next-app@latest portfolio", k: "cmd" },
  { t: "✔ TypeScript · Tailwind · App Router", k: "ok" },
  { t: "npm i langchain", k: "cmd" },
  { t: "✔ AI workflow connected", k: "ok" },
  { t: "npm run build && npm run deploy", k: "cmd" },
  { t: "▲ Deployed successfully", k: "ok" },
];

export function HeroTerminal() {
  const [idx, setIdx] = useState(0);
  const [chars, setChars] = useState(0);

  useEffect(() => {
    let t: ReturnType<typeof setTimeout>;
    const line = TERM_LINES[idx];
    if (!line) {
      t = setTimeout(() => {
        setIdx(0);
        setChars(0);
      }, 3200);
    } else if (chars < line.t.length) {
      t = setTimeout(() => setChars((c) => c + 1), line.k === "cmd" ? 38 : 12);
    } else {
      t = setTimeout(
        () => {
          setIdx((i) => i + 1);
          setChars(0);
        },
        line.k === "cmd" ? 350 : 650,
      );
    }
    return () => clearTimeout(t);
  }, [idx, chars]);

  const current = TERM_LINES[idx];

  return (
    <div className="term-wrap relative mx-auto w-full max-w-md lg:max-w-none">
      <div className="pointer-events-none absolute -inset-6 rounded-[2rem] bg-gradient-to-tr from-violet-500/25 via-transparent to-cyan-400/20 blur-2xl" />

      <div className="term relative">
        <div className="term-bar">
          <span className="term-dot" style={{ background: "#ff5f57" }} />
          <span className="term-dot" style={{ background: "#febc2e" }} />
          <span className="term-dot" style={{ background: "#28c840" }} />
          <span className="term-title">rizwan@dev: ~/portfolio</span>
        </div>
        <div className="term-body" aria-hidden="true">
          {TERM_LINES.slice(0, idx).map((l, i) => (
            <div key={i} className={l.k === "cmd" ? "term-cmd" : "term-ok"}>
              {l.k === "cmd" && <span className="term-prompt">❯ </span>}
              {l.t}
            </div>
          ))}
          {current && (
            <div className={current.k === "cmd" ? "term-cmd" : "term-ok"}>
              {current.k === "cmd" && <span className="term-prompt">❯ </span>}
              {current.t.slice(0, chars)}
              <span className="term-caret" />
            </div>
          )}
          {!current && (
            <div className="term-cmd">
              <span className="term-prompt">❯ </span>
              <span className="term-caret" />
            </div>
          )}
        </div>
      </div>

      <div className="float-a surface absolute -right-1 -top-5 !rounded-2xl !px-3.5 !py-2 text-xs font-semibold text-white sm:-right-4">
        ⚡ Next.js
      </div>
      <div className="float-b surface absolute -bottom-5 -left-1 !rounded-2xl !px-3.5 !py-2 text-xs font-semibold text-white sm:-left-4">
        🤖 LangChain.js
      </div>
      <div className="float-a surface absolute -bottom-3 right-6 hidden !rounded-2xl !px-3.5 !py-2 text-xs font-semibold text-white sm:block">
        TypeScript
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/* Scroll-drawn timeline                                               */
/* ------------------------------------------------------------------ */
export function ScrollTimeline({ children }: { children: ReactNode }) {
  const wrap = useRef<HTMLDivElement>(null);
  const fill = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const update = () => {
      const el = wrap.current;
      const f = fill.current;
      if (!el || !f) return;
      const r = el.getBoundingClientRect();
      const p = (window.innerHeight * 0.65 - r.top) / r.height;
      f.style.height = `${Math.max(0, Math.min(1, p)) * 100}%`;
    };
    update();
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    return () => {
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, []);

  return (
    <div
      ref={wrap}
      className="relative ml-2 space-y-6 border-l border-white/10 pl-6 sm:ml-3 sm:pl-8"
    >
      <span
        ref={fill}
        className="absolute -left-px top-0 w-[2px] rounded-full bg-gradient-to-b from-violet-400 via-fuchsia-400 to-cyan-300"
        style={{ height: 0 }}
      />
      {children}
    </div>
  );
}

export function TimelineItem({
  children,
  delay = 0,
}: {
  children: ReactNode;
  delay?: number;
}) {
  const { ref, seen } = useInView<HTMLDivElement>(0.2);
  return (
    <div
      ref={ref}
      style={{ transitionDelay: `${delay}ms` }}
      className={`dev-reveal relative ${seen ? "is-in" : ""}`}
    >
      <span
        className={`tl-dot absolute -left-[31px] top-6 h-3 w-3 rounded-full sm:-left-[39px] ${
          seen ? "is-on" : ""
        }`}
      />
      {children}
    </div>
  );
}

/* ------------------------------------------------------------------ */
/* Animated process flow                                               */
/* ------------------------------------------------------------------ */
export type ProcessStep = {
  title: string;
  tag: string;
  text: string;
  icon: ReactNode;
};

export function ProcessFlow({ steps }: { steps: ProcessStep[] }) {
  const { ref, seen } = useInView<HTMLOListElement>(0.25);
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (!seen || paused) return;
    const t = setInterval(() => setActive((a) => (a + 1) % steps.length), 2300);
    return () => clearInterval(t);
  }, [seen, paused, steps.length]);

  return (
    <ol
      ref={ref}
      className="relative grid lg:grid-cols-5"
      onMouseLeave={() => setPaused(false)}
    >
      {steps.map((s, i) => {
        const isActive = i === active;
        const done = i < active;
        return (
          <li
            key={s.title}
            tabIndex={0}
            onMouseEnter={() => {
              setPaused(true);
              setActive(i);
            }}
            onClick={() => {
              setPaused(true);
              setActive(i);
            }}
            onFocus={() => setActive(i)}
            className="relative flex cursor-pointer gap-4 pb-8 outline-none last:pb-0 lg:flex-col lg:items-center lg:px-2 lg:pb-0 lg:text-center"
          >
            {i < steps.length - 1 && (
              <span
                aria-hidden="true"
                className="absolute bottom-0 left-5 top-11 w-px overflow-hidden bg-white/10 lg:bottom-auto lg:left-1/2 lg:top-5 lg:h-px lg:w-full"
              >
                <span
                  className={`block h-full w-full origin-top bg-gradient-to-b from-violet-400 to-cyan-300 transition-transform duration-700 ease-out lg:origin-left lg:bg-gradient-to-r ${
                    done ? "scale-100" : "scale-y-0 lg:scale-x-0 lg:scale-y-100"
                  }`}
                />
              </span>
            )}

            <span
              className={`proc-node relative z-10 flex h-10 w-10 shrink-0 items-center justify-center rounded-full ${
                isActive ? "is-active" : done ? "is-done" : ""
              }`}
            >
              {s.icon}
            </span>

            <div
              className={`min-w-0 transition-all duration-500 lg:mt-5 ${
                isActive
                  ? "translate-y-0 opacity-100"
                  : "translate-y-0.5 opacity-55"
              }`}
            >
              <p className="font-mono text-[11px] uppercase tracking-widest text-violet-300">
                0{i + 1} · {s.tag}
              </p>
              <h3 className="font-display mt-1 text-lg font-bold text-white">
                {s.title}
              </h3>
              <p className="mt-1.5 text-sm leading-relaxed text-zinc-400">
                {s.text}
              </p>
            </div>
          </li>
        );
      })}
    </ol>
  );
}

const NAV_ITEMS = [
  { id: "about", label: "About", icon: <User className="h-[18px] w-[18px]" /> },
  {
    id: "experience",
    label: "Work",
    icon: <Briefcase className="h-[18px] w-[18px]" />,
  },
  {
    id: "process",
    label: "Process",
    icon: <Rocket className="h-[18px] w-[18px]" />,
  },
  {
    id: "projects",
    label: "Projects",
    icon: <Layers className="h-[18px] w-[18px]" />,
  },
  {
    id: "skills",
    label: "Skills",
    icon: <Cpu className="h-[18px] w-[18px]" />,
  },
  {
    id: "contact",
    label: "Contact",
    icon: <Mail className="h-[18px] w-[18px]" />,
  },
];

export function SiteNav({
  initials,
  name,
}: {
  initials: string;
  name: string;
}) {
  const [active, setActive] = useState("about");
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const max = document.documentElement.scrollHeight - window.innerHeight;
      setProgress(max > 0 ? (window.scrollY / max) * 100 : 0);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) =>
        entries.forEach((e) => e.isIntersecting && setActive(e.target.id)),
      { rootMargin: "-40% 0px -50% 0px" },
    );
    NAV_ITEMS.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) io.observe(el);
    });
    return () => io.disconnect();
  }, []);

  return (
    <>
      {/* Top pill */}
      <header className="no-print fixed inset-x-0 top-3 z-50 flex justify-center px-3 sm:top-4">
        <nav className="relative flex w-full max-w-4xl items-center justify-between gap-2 overflow-hidden rounded-full border border-white/10 bg-zinc-950/70 py-2 pl-2.5 pr-2 shadow-2xl shadow-black/60 backdrop-blur-xl">
          <a
            href="#top"
            className="flex items-center gap-2.5 text-sm font-semibold text-white"
          >
            <span className="btn-primary flex h-8 w-8 items-center justify-center rounded-full font-mono text-xs font-extrabold">
              {initials}
            </span>
            <span className="max-w-[9.5rem] truncate sm:max-w-none">
              {name}
            </span>
          </a>

          <ul className="hidden items-center gap-0.5 md:flex">
            {NAV_ITEMS.map(({ id, label }) => (
              <li key={id}>
                <a
                  href={`#${id}`}
                  className={`rounded-full px-3 py-1.5 text-xs font-medium transition-all ${
                    active === id
                      ? "bg-white/10 text-white"
                      : "text-zinc-400 hover:text-white"
                  }`}
                >
                  {label}
                </a>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-1.5">
            <ThemeToggle />
            <a
              href="#contact"
              className="btn-primary rounded-full px-4 py-2 text-xs font-bold transition-transform hover:scale-105"
            >
              Hire me
            </a>
          </div>

          <span
            className="absolute bottom-0 left-0 h-[2px] bg-gradient-to-r from-violet-500 via-fuchsia-400 to-cyan-300"
            style={{ width: `${progress}%` }}
          />
        </nav>
      </header>

      {/* Mobile dock */}
      <nav
        aria-label="Sections"
        className="no-print dock-safe fixed inset-x-0 bottom-0 z-50 px-3 md:hidden"
      >
        <ul className="mx-auto grid max-w-lg grid-cols-6 gap-0.5 rounded-3xl border border-white/10 bg-zinc-950/80 p-1.5 shadow-2xl shadow-black/70 backdrop-blur-xl">
          {NAV_ITEMS.map(({ id, label, icon }) => {
            const on = active === id;
            return (
              <li key={id}>
                <a
                  href={`#${id}`}
                  className={`flex flex-col items-center gap-0.5 rounded-2xl py-2 text-[10px] font-medium transition-all ${
                    on
                      ? "bg-violet-500/20 text-violet-200"
                      : "text-zinc-500 active:scale-95"
                  }`}
                >
                  {icon}
                  {label}
                </a>
              </li>
            );
          })}
        </ul>
      </nav>
    </>
  );
}

/* ------------------------------------------------------------------ */
/* Copyable contact chip                                               */
/* ------------------------------------------------------------------ */
export function CopyAction({
  label,
  value,
  href,
  icon,
}: {
  label: string;
  value: string;
  href: string;
  icon: ReactNode;
}) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(value);
      setCopied(true);
      setTimeout(() => setCopied(false), 1800);
    } catch {
      // clipboard blocked
    }
  };

  return (
    <div className="surface flex min-w-0 items-center justify-between gap-2 !rounded-full py-1.5 pl-4 pr-1.5">
      <a
        href={href}
        className="flex min-w-0 items-center gap-2.5 text-sm text-zinc-200 hover:text-white"
      >
        <span className="shrink-0 text-violet-300">{icon}</span>
        <span className="truncate">{value}</span>
      </a>
      <button
        type="button"
        onClick={handleCopy}
        title={`Copy ${label}`}
        aria-label={`Copy ${label}`}
        className="no-print flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-white/5 text-zinc-400 transition-colors hover:bg-violet-500/20 hover:text-violet-200"
      >
        {copied ? (
          <Check className="h-4 w-4 text-emerald-400" />
        ) : (
          <Copy className="h-4 w-4" />
        )}
      </button>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/* Print / export                                                      */
/* ------------------------------------------------------------------ */
export function PrintResumeButton({ className = "" }: { className?: string }) {
  return (
    <button
      type="button"
      onClick={() => window.print()}
      className={`no-print surface inline-flex items-center justify-center gap-2 !rounded-full px-5 py-3 text-sm font-semibold text-zinc-100 transition-all hover:border-violet-400/40 hover:text-white ${className}`}
    >
      <Printer className="h-4 w-4" /> Save CV
    </button>
  );
}

/* ------------------------------------------------------------------ */
/* Filterable project grid                                             */
/* ------------------------------------------------------------------ */
export type ProjectItem = {
  id: string;
  name: string;
  category: "Full Stack" | "E-Commerce" | "Web";
  role: string;
  description: string;
  stack: string[];
  highlight: string;
  url?: string;
};

const CATEGORIES = ["All", "Full Stack", "E-Commerce", "Web"] as const;

const GRADIENTS = [
  "from-violet-600/40 via-fuchsia-500/20 to-transparent",
  "from-cyan-500/35 via-sky-500/15 to-transparent",
  "from-emerald-500/35 via-lime-400/15 to-transparent",
  "from-amber-500/35 via-rose-500/15 to-transparent",
];

export function ProjectShowcase({ items }: { items: ProjectItem[] }) {
  const [filter, setFilter] = useState<(typeof CATEGORIES)[number]>("All");
  const visible =
    filter === "All" ? items : items.filter((p) => p.category === filter);

  return (
    <div>
      <div className="no-print no-scrollbar -mx-4 mb-5 flex gap-2 overflow-x-auto px-4 sm:mx-0 sm:flex-wrap sm:px-0">
        {CATEGORIES.map((cat) => {
          const on = filter === cat;
          return (
            <button
              key={cat}
              type="button"
              onClick={() => setFilter(cat)}
              className={`shrink-0 rounded-full px-4 py-2 text-xs font-semibold transition-all ${
                on
                  ? "btn-primary shadow-lg shadow-violet-500/20"
                  : "border border-white/10 bg-white/[0.03] text-zinc-400 hover:text-white"
              }`}
            >
              {cat}
            </button>
          );
        })}
      </div>

      <div key={filter} className="grid gap-4 sm:grid-cols-2">
        {visible.map((p) => {
          const idx = items.findIndex((x) => x.id === p.id);
          const Tag = (p.url ? "a" : "article") as React.ElementType;
          const linkProps = p.url
            ? {
                href: p.url,
                target: "_blank",
                rel: "noopener noreferrer",
                "aria-label": `Open ${p.name} live website`,
              }
            : {};
          const host = p.url?.replace(/^https?:\/\//, "").replace(/\/$/, "");
          return (
            <SpotlightCard key={p.id} tilt className="card-pop group !p-0">
              <Tag {...linkProps} className="flex h-full flex-col">
                {/* Banner */}
                <div
                  className={`relative h-28 overflow-hidden bg-gradient-to-br ${
                    GRADIENTS[idx % GRADIENTS.length]
                  }`}
                >
                  <span className="absolute -bottom-6 -right-2 select-none font-display text-8xl font-black text-white/[0.07]">
                    {String(idx + 1).padStart(2, "0")}
                  </span>
                  <div className="absolute inset-x-5 top-4 flex items-center justify-between">
                    <span className="rounded-full border border-white/15 bg-black/30 px-3 py-1 text-[11px] font-medium text-zinc-100 backdrop-blur">
                      {p.category}
                    </span>
                    {p.url && (
                      <span className="flex h-8 w-8 items-center justify-center rounded-full bg-white/10 text-white transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5">
                        <ArrowUpRight className="h-4 w-4" />
                      </span>
                    )}
                  </div>
                </div>

                <div className="flex flex-1 flex-col justify-between p-5 sm:p-6">
                  <div>
                    <p className="font-mono text-[11px] uppercase tracking-widest text-violet-300">
                      {p.role}
                    </p>
                    <h3 className="mt-2 font-display text-xl font-bold text-white">
                      {p.name}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-zinc-400">
                      {p.description}
                    </p>
                    {host && (
                      <p className="mt-3 inline-flex items-center gap-1.5 font-mono text-xs font-medium text-cyan-300 group-hover:underline">
                        Live: {host}
                        <ArrowUpRight className="h-3.5 w-3.5" />
                      </p>
                    )}
                  </div>

                  <div className="mt-5 border-t border-white/10 pt-4">
                    <p className="mb-3 flex items-start gap-1.5 text-xs text-emerald-300">
                      <Sparkles className="mt-0.5 h-3.5 w-3.5 shrink-0" />
                      {p.highlight}
                    </p>
                    <div className="flex flex-wrap gap-1.5">
                      {p.stack.map((t) => (
                        <span
                          key={t}
                          className="rounded-full border border-white/10 bg-white/[0.04] px-2.5 py-1 font-mono text-[11px] text-zinc-300"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </Tag>
            </SpotlightCard>
          );
        })}
      </div>
    </div>
  );
}
