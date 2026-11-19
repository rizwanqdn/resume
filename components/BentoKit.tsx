// components/BentoKit.tsx
"use client";

import React, { useEffect, useRef, useState, type ReactNode } from "react";
import { Menu, X, Check, Copy, Printer } from "lucide-react";
import "./bento.css";
// Add to imports at the top of components/BentoKit.tsx:
import Image from "next/image";
import { Dna } from "lucide-react";

/* ------------------------------------------------------------------ */
/* Profile Avatar with hover zoom + graceful initials fallback         */
/* ------------------------------------------------------------------ */
export function ProfileAvatar({
  src,
  alt,
  initials = "AS",
}: {
  src: string;
  alt: string;
  initials?: string;
}) {
  const [imgError, setImgError] = useState(false);

  return (
    <div className="helix-float group relative mb-5">
      {/* Ambient glow */}
      <div className="absolute -inset-2 rounded-full bg-gradient-to-tr from-cyan-400/40 via-indigo-500/40 to-teal-300/40 blur-lg transition-opacity duration-300 group-hover:opacity-100" />

      {/* Circular frame */}
      <div className="relative flex h-28 w-28 items-center justify-center overflow-hidden rounded-full border-2 border-white/20 bg-slate-950 text-3xl font-extrabold tracking-tight text-white">
        {!imgError ? (
          <Image
            src={src}
            alt={alt}
            fill
            priority
            sizes="112px"
            onError={() => setImgError(true)}
            className="object-cover object-top transition-transform duration-500 ease-out group-hover:scale-110"
          />
        ) : (
          <span>{initials}</span>
        )}
      </div>

      {/* DNA badge */}
      <span className="absolute -bottom-1 -right-1 z-10 flex h-9 w-9 items-center justify-center rounded-full border border-slate-900 bg-gradient-to-br from-cyan-400 to-indigo-500 text-slate-950 shadow-lg transition-transform duration-300 group-hover:rotate-12 group-hover:scale-105">
        <Dna className="h-4 w-4" />
      </span>
    </div>
  );
}
/* ------------------------------------------------------------------ */
/* Scroll Reveal                                                       */
/* ------------------------------------------------------------------ */
export function BentoReveal({
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
      { threshold: 0.12, rootMargin: "0px 0px -6% 0px" },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      style={{ transitionDelay: `${delay}ms` }}
      className={`bento-reveal ${visible ? "is-visible" : ""} ${className}`}
    >
      {children}
    </div>
  );
}

/* ------------------------------------------------------------------ */
/* Card with cursor-following glow                                     */
/* ------------------------------------------------------------------ */
export function SpotlightCard({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  const onMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const r = e.currentTarget.getBoundingClientRect();
    e.currentTarget.style.setProperty("--mx", `${e.clientX - r.left}px`);
    e.currentTarget.style.setProperty("--my", `${e.clientY - r.top}px`);
  };
  return (
    <div
      onMouseMove={onMove}
      className={`spotlight relative h-full overflow-hidden rounded-3xl border border-white/[0.08] bg-white/[0.03] p-6 backdrop-blur-md transition-transform duration-300 hover:-translate-y-0.5 ${className}`}
    >
      <div className="relative z-10 h-full">{children}</div>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/* Click-to-copy contact pill                                          */
/* ------------------------------------------------------------------ */
export function CopyPill({
  label,
  value,
  icon,
}: {
  label: string;
  value: string;
  icon: ReactNode;
}) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(value);
      setCopied(true);
      setTimeout(() => setCopied(false), 1800);
    } catch {
      // Fallback ignored if clipboard blocked
    }
  };

  return (
    <button
      type="button"
      onClick={handleCopy}
      title={`Copy ${label}`}
      className="group inline-flex items-center gap-2.5 rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-sm text-slate-200 backdrop-blur-md transition-all hover:border-cyan-400/40 hover:bg-white/[0.08]"
    >
      <span className="text-cyan-400">{icon}</span>
      <span>{value}</span>
      <span className="ml-0.5 text-slate-400 transition-colors group-hover:text-cyan-300">
        {copied ? (
          <Check className="h-3.5 w-3.5 text-emerald-400" />
        ) : (
          <Copy className="h-3.5 w-3.5" />
        )}
      </span>
    </button>
  );
}

/* ------------------------------------------------------------------ */
/* Segmented skill meter                                               */
/* ------------------------------------------------------------------ */
export function SegMeter({
  label,
  value,
  max = 5,
}: {
  label: string;
  value: number;
  max?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [on, setOn] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          setOn(true);
          io.disconnect();
        }
      },
      { threshold: 0.4 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <div ref={ref} className="flex items-center justify-between gap-4">
      <span className="text-sm font-medium text-slate-300">{label}</span>
      <div className="flex gap-1.5" aria-label={`${value} out of ${max}`}>
        {Array.from({ length: max }).map((_, i) => (
          <span
            key={i}
            style={{ transitionDelay: `${i * 80}ms` }}
            className={`seg h-4 w-2.5 origin-bottom rounded-full ${
              on && i < value
                ? "on bg-gradient-to-t from-indigo-500 via-cyan-400 to-teal-300 shadow-[0_0_10px_rgba(34,211,238,0.45)]"
                : "bg-white/10"
            }`}
          />
        ))}
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/* Infinite marquee                                                    */
/* ------------------------------------------------------------------ */
export function Marquee({ items }: { items: string[] }) {
  const doubled = [...items, ...items];
  return (
    <div className="marquee relative overflow-hidden [mask-image:linear-gradient(90deg,transparent,black_10%,black_90%,transparent)]">
      <div className="marquee-track flex gap-3 py-1">
        {doubled.map((s, i) => (
          <span
            key={i}
            className="inline-flex items-center gap-2 whitespace-nowrap rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-xs font-medium tracking-wide text-slate-200 transition-colors hover:border-cyan-400/40 hover:text-cyan-200"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-cyan-400" />
            {s}
          </span>
        ))}
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/* Floating pill navbar                                                */
/* ------------------------------------------------------------------ */
const LINKS = [
  { id: "home", label: "Overview" },
  { id: "about", label: "Bento" },
  { id: "experience", label: "Career" },
  { id: "education", label: "Academics" },
  { id: "research", label: "Research" },
  { id: "contact", label: "Contact" },
];

export function FloatingNav() {
  const [active, setActive] = useState("home");
  const [open, setOpen] = useState(false);
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
      { rootMargin: "-35% 0px -55% 0px" },
    );
    LINKS.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) io.observe(el);
    });
    return () => io.disconnect();
  }, []);

  return (
    <header className="fixed inset-x-0 top-4 z-50 flex flex-col items-center px-4 print:hidden">
      <nav className="relative flex w-full max-w-4xl items-center justify-between gap-2 overflow-hidden rounded-full border border-white/10 bg-slate-950/75 py-2 pl-5 pr-2 shadow-2xl shadow-black/50 backdrop-blur-xl">
        <a
          href="#home"
          className="flex items-center gap-2 text-sm font-bold tracking-tight text-white"
        >
          <span className="flex h-6 w-6 items-center justify-center rounded-full bg-gradient-to-br from-cyan-400 to-indigo-500 text-[11px] font-extrabold text-slate-950">
            AS
          </span>
          <span className="hidden sm:inline">Arfa Sultan</span>
        </a>

        <ul className="hidden items-center gap-0.5 md:flex">
          {LINKS.map(({ id, label }) => (
            <li key={id}>
              <a
                href={`#${id}`}
                className={`rounded-full px-3.5 py-1.5 text-xs font-medium transition-all ${
                  active === id
                    ? "bg-white/12 text-white shadow-inner"
                    : "text-slate-400 hover:text-white"
                }`}
              >
                {label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-1.5">
          <button
            type="button"
            onClick={() => window.print()}
            title="Print or Save as PDF"
            className="hidden items-center gap-1.5 rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-xs font-medium text-slate-300 transition-colors hover:bg-white/10 hover:text-white sm:inline-flex"
          >
            <Printer className="h-3.5 w-3.5" /> CV
          </button>
          <a
            href="#contact"
            className="rounded-full bg-gradient-to-r from-cyan-400 to-indigo-500 px-4 py-1.5 text-xs font-semibold text-slate-950 transition-transform hover:scale-105"
          >
            Hire me
          </a>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-label="Toggle menu"
            className="rounded-full p-2 text-white hover:bg-white/10 md:hidden"
          >
            {open ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
          </button>
        </div>

        {/* Scroll progress bar */}
        <span
          className="absolute bottom-0 left-0 h-[2px] bg-gradient-to-r from-cyan-400 via-sky-400 to-indigo-500 transition-[width] duration-75"
          style={{ width: `${progress}%` }}
        />
      </nav>

      {/* Mobile dropdown */}
      <div
        className={`mt-2 w-full max-w-4xl origin-top overflow-hidden rounded-3xl border border-white/10 bg-slate-950/95 backdrop-blur-xl transition-all duration-300 md:hidden ${
          open
            ? "max-h-96 scale-100 opacity-100"
            : "max-h-0 scale-95 border-transparent opacity-0"
        }`}
      >
        <ul className="p-2">
          {LINKS.map(({ id, label }) => (
            <li key={id}>
              <a
                href={`#${id}`}
                onClick={() => setOpen(false)}
                className={`block rounded-2xl px-4 py-3 text-sm font-medium ${
                  active === id
                    ? "bg-white/10 text-cyan-300"
                    : "text-slate-400 hover:text-white"
                }`}
              >
                {label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
}
