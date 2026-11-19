// components/DevKit.tsx
"use client";

import React, { useEffect, useRef, useState, type ReactNode } from "react";
import {
  Check,
  Copy,
  Printer,
  ArrowUpRight,
  Terminal,
  Sparkles,
} from "lucide-react";
import "./dev-theme.css";

/* ------------------------------------------------------------------ */
/* Scroll Reveal                                                       */
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
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          io.disconnect();
        }
      },
      { threshold: 0.1 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      style={{ transitionDelay: `${delay}ms` }}
      className={`dev-reveal ${visible ? "is-in" : ""} ${className}`}
    >
      {children}
    </div>
  );
}

/* ------------------------------------------------------------------ */
/* Sticky Sidebar Nav with Active Scroll-Spy                           */
/* ------------------------------------------------------------------ */
const NAV_ITEMS = [
  { id: "summary", num: "01", label: "Summary" },
  { id: "experience", num: "02", label: "Experience" },
  { id: "projects", num: "03", label: "Projects" },
  { id: "stack", num: "04", label: "Tech Stack" },
  { id: "education", num: "05", label: "Education" },
];

export function RailNav() {
  const [active, setActive] = useState("summary");

  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActive(e.target.id);
        });
      },
      { rootMargin: "-30% 0px -60% 0px" },
    );
    NAV_ITEMS.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) io.observe(el);
    });
    return () => io.disconnect();
  }, []);

  return (
    <nav
      className="no-print hidden flex-col gap-1 lg:flex"
      aria-label="Sections"
    >
      {NAV_ITEMS.map(({ id, num, label }) => {
        const isActive = active === id;
        return (
          <a
            key={id}
            href={`#${id}`}
            className={`group flex items-center gap-3 rounded-full px-3.5 py-2 text-xs font-medium transition-all ${
              isActive
                ? "bg-amber-400/10 text-amber-300"
                : "text-zinc-500 hover:bg-zinc-900 hover:text-zinc-200"
            }`}
          >
            <span
              className={`font-mono text-[10px] ${
                isActive
                  ? "text-amber-400"
                  : "text-zinc-600 group-hover:text-zinc-400"
              }`}
            >
              {num}
            </span>
            <span
              className={`h-px transition-all duration-300 ${
                isActive
                  ? "w-6 bg-amber-400"
                  : "w-3 bg-zinc-700 group-hover:w-5 group-hover:bg-zinc-500"
              }`}
            />
            <span className="uppercase tracking-widest">{label}</span>
          </a>
        );
      })}
    </nav>
  );
}

/* ------------------------------------------------------------------ */
/* Copyable Contact Action Row                                         */
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

  const handleCopy = async (e: React.MouseEvent) => {
    e.preventDefault();
    try {
      await navigator.clipboard.writeText(value);
      setCopied(true);
      setTimeout(() => setCopied(false), 1800);
    } catch {
      // Clipboard blocked fallback
    }
  };

  return (
    <div className="flex items-center justify-between gap-2 rounded-full border border-zinc-800/90 bg-zinc-900/60 py-1.5 pl-3.5 pr-1.5 transition-colors hover:border-zinc-700">
      <a
        href={href}
        className="flex min-w-0 items-center gap-2.5 text-xs text-zinc-300 hover:text-white"
      >
        <span className="shrink-0 text-amber-400">{icon}</span>
        <span className="truncate">{value}</span>
      </a>
      <button
        type="button"
        onClick={handleCopy}
        title={`Copy ${label}`}
        className="no-print flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-zinc-800/80 text-zinc-400 transition-colors hover:bg-amber-400/15 hover:text-amber-300"
      >
        {copied ? (
          <Check className="h-3.5 w-3.5 text-emerald-400" />
        ) : (
          <Copy className="h-3.5 w-3.5" />
        )}
      </button>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/* Print / Export Resume Button                                        */
/* ------------------------------------------------------------------ */
export function PrintResumeButton() {
  return (
    <button
      type="button"
      onClick={() => window.print()}
      className="no-print inline-flex items-center justify-center gap-2 rounded-full border border-zinc-800 bg-zinc-900/80 px-4 py-2.5 text-xs font-semibold text-zinc-200 transition-all hover:border-amber-400/40 hover:bg-zinc-900 hover:text-amber-300"
    >
      <Printer className="h-3.5 w-3.5" /> Save / Print CV
    </button>
  );
}

/* ------------------------------------------------------------------ */
/* Interactive Filterable Project Grid                                 */
/* ------------------------------------------------------------------ */
export type ProjectItem = {
  id: string;
  name: string;
  category: "Full Stack" | "E-Commerce" | "Web";
  role: string;
  description: string;
  stack: string[];
  highlight: string;
};

const CATEGORIES = ["All", "Full Stack", "E-Commerce", "Web"] as const;

export function ProjectShowcase({ items }: { items: ProjectItem[] }) {
  const [filter, setFilter] = useState<(typeof CATEGORIES)[number]>("All");

  const visible =
    filter === "All" ? items : items.filter((p) => p.category === filter);

  return (
    <div>
      {/* Filter Pills */}
      <div className="no-print mb-6 flex flex-wrap gap-2">
        {CATEGORIES.map((cat) => {
          const active = filter === cat;
          return (
            <button
              key={cat}
              type="button"
              onClick={() => setFilter(cat)}
              className={`rounded-full px-4 py-1.5 text-xs font-medium transition-all ${
                active
                  ? "bg-amber-400 text-zinc-950 shadow-lg shadow-amber-500/15"
                  : "border border-zinc-800 bg-zinc-900/60 text-zinc-400 hover:border-zinc-700 hover:text-zinc-200"
              }`}
            >
              {cat}
            </button>
          );
        })}
      </div>

      {/* Cards */}
      <div className="grid gap-4 sm:grid-cols-2">
        {visible.map((p) => (
          <article
            key={p.id}
            className="group relative flex flex-col justify-between rounded-3xl border border-zinc-800/90 bg-zinc-900/40 p-6 transition-all duration-300 hover:-translate-y-0.5 hover:border-amber-400/40 hover:bg-zinc-900/80"
          >
            <div>
              <div className="flex items-center justify-between gap-2">
                <span className="inline-flex items-center gap-1.5 font-mono text-[11px] uppercase tracking-wider text-amber-400">
                  <Terminal className="h-3.5 w-3.5" /> {p.id}
                </span>
                <span className="rounded-full border border-zinc-800 bg-zinc-950/70 px-2.5 py-0.5 text-[11px] text-zinc-400">
                  {p.category}
                </span>
              </div>

              <h3 className="mt-4 flex items-center justify-between text-lg font-bold text-white group-hover:text-amber-300 transition-colors">
                {p.name}
                <ArrowUpRight className="h-4 w-4 text-zinc-600 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-amber-400" />
              </h3>

              <p className="mt-2 text-sm leading-relaxed text-zinc-400">
                {p.description}
              </p>
            </div>

            <div className="mt-5 border-t border-zinc-800/80 pt-4">
              <p className="mb-3 flex items-center gap-1.5 text-xs text-emerald-400">
                <Sparkles className="h-3.5 w-3.5 shrink-0" /> {p.highlight}
              </p>
              <div className="flex flex-wrap gap-1.5">
                {p.stack.map((tech) => (
                  <span
                    key={tech}
                    className="rounded-full border border-zinc-800 bg-zinc-950/80 px-2.5 py-1 font-mono text-[11px] text-zinc-300"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
