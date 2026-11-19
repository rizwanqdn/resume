// app/page.tsx
import {
  DevReveal,
  RailNav,
  CopyAction,
  PrintResumeButton,
  ProjectShowcase,
  type ProjectItem,
} from "../../components/DevKit";
import {
  Mail,
  Phone,
  MapPin,
  Briefcase,
  GraduationCap,
  Cpu,
  Layers,
  Globe,
  CheckCircle2,
  Sparkles,
  Code2,
} from "lucide-react";

// ------------------------------------------------------------------
// Resume Data (Rizwan Ahmad Zafar)
// ------------------------------------------------------------------
const profile = {
  name: "Rizwan Ahmad Zafar",
  initials: "RZ",
  role: "Full Stack Web Developer",
  tagline: "Next.js · React · TypeScript · Generative AI (LangChain.js)",
  email: "rizwan1022@icloud.com",
  phone: "9877434419",
  shortLocation: "Qadian, Punjab, India",
  fullAddress:
    "Ward No. 8, Mohalla Ahmadiyya, Qadian, District Gurdaspur, Punjab, India — 143516",
  summary:
    "Results-driven Full Stack Web Developer with a Master's degree in Information Technology and hands-on expertise in building dynamic, scalable web applications using Next.js, React, and TypeScript, paired with Generative AI integration via LangChain.js. Combines modern engineering with 6+ years of prior data management and administrative experience.",
};

const experience = [
  {
    period: "2021 — Present",
    role: "Full Stack Web Developer",
    company: "Newstep Computer Essentials",
    type: "Engineering",
    points: [
      "Design and maintain responsive, high-performance web applications using React, Next.js, and TypeScript.",
      "Integrate Generative AI capabilities into platforms using LangChain.js to enhance user experience and automate complex workflows.",
      "Optimize backend architecture and database integrity across MongoDB and SQL for seamless communication.",
      "Manage full-lifecycle development from requirements gathering to deployment and continuous maintenance.",
    ],
  },
  {
    period: "2015 — 2021",
    role: "Administrative & Data Specialist",
    company: "Sadr Anjuman",
    type: "Operations & Data",
    points: [
      "Managed day-to-day organizational documentation, reporting, and high-accuracy data entry.",
      "Streamlined internal processes and maintained structured records with strong attention to detail, bridging administrative operations with IT workflows.",
    ],
  },
];

const projects: ProjectItem[] = [
  {
    id: "PRJ-01",
    name: "TutorWave",
    category: "Full Stack",
    role: "Lead Full Stack Developer",
    description:
      "Comprehensive online tutoring platform designed to connect students and educators with interactive learning workflows.",
    highlight: "End-to-end scalable architecture & real-time experience",
    stack: ["Next.js", "React", "TypeScript", "MongoDB"],
  },
  {
    id: "PRJ-02",
    name: "SFC E-Commerce",
    category: "E-Commerce",
    role: "Full Stack Developer",
    description:
      "Fast-food delivery e-commerce platform featuring menu browsing, cart management, and complete online ordering functionality.",
    highlight: "Streamlined checkout & responsive ordering UX",
    stack: ["Next.js", "TypeScript", "MongoDB", "CSS"],
  },
  {
    id: "PRJ-03",
    name: "Architectural Firm Portfolio",
    category: "Web",
    role: "Frontend & UI Engineer",
    description:
      "Modern digital portfolio website crafted for an architectural firm to showcase spaces, concepts, and design projects.",
    highlight: "Editorial layout & high-impact visual presentation",
    stack: ["React", "Next.js", "TypeScript", "CSS"],
  },
  {
    id: "PRJ-04",
    name: "Community & Organizational Web Solutions",
    category: "Web",
    role: "Web Developer",
    description:
      "Tailored digital platforms and web tools built to serve specialized community and religious organizational needs.",
    highlight: "Accessible, maintainable web interfaces",
    stack: ["HTML", "CSS", "React", "SQL"],
  },
];

const skillGroups = [
  {
    title: "Frontend Development",
    items: ["React.js", "Next.js", "TypeScript", "HTML5", "CSS3"],
  },
  {
    title: "Backend & Databases",
    items: ["Python", "MongoDB", "SQL"],
  },
  {
    title: "AI & Integration",
    items: ["Generative AI", "LangChain.js", "Workflow Automation"],
  },
  {
    title: "Tools & Soft Skills",
    items: [
      "PyCharm",
      "MS Office Suite (Word, Excel)",
      "Problem Solving",
      "Time Management",
      "Adaptability",
    ],
  },
];

const education = [
  {
    year: "2023",
    degree: "Master of Science in Information Technology (M.Sc. IT)",
    school: "Sikh National College, Qadian · Guru Nanak Dev University",
  },
  {
    year: "2016 — 2019",
    degree: "Bachelor of Arts (B.A.)",
    school: "Sikh National College, Qadian · Guru Nanak Dev University",
  },
];

const languages = ["English", "Hindi", "Urdu", "Punjabi", "Arabic"];

// ------------------------------------------------------------------
// Section Title Helper
// ------------------------------------------------------------------
function SectionTitle({
  index,
  title,
  icon: Icon,
}: {
  index: string;
  title: string;
  icon: React.ElementType;
}) {
  return (
    <div className="mb-6 flex items-center gap-3 border-b border-zinc-800/80 pb-4">
      <span className="font-mono text-xs font-semibold text-amber-400">
        {index}
      </span>
      <Icon className="h-4 w-4 text-zinc-400" />
      <h2 className="text-lg font-bold tracking-tight text-white sm:text-xl">
        {title}
      </h2>
    </div>
  );
}

// ------------------------------------------------------------------
// Page
// ------------------------------------------------------------------
export default function HomePage() {
  return (
    <div className="relative min-h-screen bg-[#09090b] text-zinc-200 antialiased selection:bg-amber-400/25 selection:text-amber-200">
      {/* Background Layers */}
      <div className="pointer-events-none fixed inset-0 z-0">
        <div className="amber-glow absolute inset-0" />
        <div className="dev-grid absolute inset-0" />
      </div>

      {/* Split-Pane Layout */}
      <div className="relative z-10 mx-auto max-w-6xl px-5 py-10 lg:grid lg:grid-cols-12 lg:gap-12 lg:py-16">
        {/* ================= LEFT STICKY IDENTITY RAIL ================= */}
        <aside className="mb-12 lg:sticky lg:top-12 lg:col-span-4 lg:mb-0 lg:flex lg:h-[calc(100vh-6rem)] lg:flex-col lg:justify-between">
          <div>
            {/* Status Pill */}
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-emerald-500/25 bg-emerald-500/10 px-3 py-1 text-[11px] font-medium text-emerald-300">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
              </span>
              Open to Full Stack & AI Roles
            </div>

            {/* Monogram + Name */}
            <div className="flex items-center gap-4">
              <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl border border-amber-400/30 bg-gradient-to-br from-amber-400/15 to-zinc-900 font-mono text-lg font-bold text-amber-300">
                {profile.initials}
              </div>
              <div>
                <h1 className="text-2xl font-extrabold tracking-tight text-white sm:text-3xl">
                  {profile.name}
                </h1>
                <p className="text-sm font-medium text-amber-400">
                  {profile.role}
                </p>
              </div>
            </div>

            <p className="mt-4 font-mono text-xs leading-relaxed text-zinc-400">
              {profile.tagline}
            </p>

            {/* Quick Contact Stack */}
            <div className="mt-6 space-y-2">
              <CopyAction
                label="email"
                value={profile.email}
                href={`mailto:${profile.email}`}
                icon={<Mail className="h-3.5 w-3.5" />}
              />
              <CopyAction
                label="phone"
                value={profile.phone}
                href={`tel:${profile.phone}`}
                icon={<Phone className="h-3.5 w-3.5" />}
              />
              <div className="flex items-center gap-2.5 rounded-full border border-zinc-800/70 bg-zinc-900/30 px-3.5 py-2 text-xs text-zinc-400">
                <MapPin className="h-3.5 w-3.5 shrink-0 text-amber-400" />
                <span>{profile.shortLocation}</span>
              </div>
            </div>

            {/* Primary Actions */}
            <div className="mt-6 flex flex-wrap gap-2.5">
              <a
                href={`mailto:${profile.email}`}
                className="no-print inline-flex flex-1 items-center justify-center gap-2 rounded-full bg-amber-400 px-4 py-2.5 text-xs font-bold text-zinc-950 transition-transform hover:-translate-y-0.5"
              >
                <Mail className="h-3.5 w-3.5" /> Hire Me
              </a>
              <PrintResumeButton />
            </div>
          </div>

          {/* Desktop Scroll-Spy Nav */}
          <div className="mt-10">
            <RailNav />
          </div>
        </aside>

        {/* ================= RIGHT SCROLLABLE MAIN STAGE ================= */}
        <main className="space-y-16 lg:col-span-8">
          {/* 01 · SUMMARY */}
          <section id="summary" className="scroll-mt-12">
            <DevReveal>
              <SectionTitle
                index="01"
                title="Professional Summary"
                icon={Code2}
              />
              <div className="rounded-3xl border border-zinc-800/90 bg-zinc-900/40 p-6 sm:p-8">
                <p className="text-base leading-relaxed text-zinc-300 sm:text-lg">
                  {profile.summary}
                </p>

                {/* Metrics Strip */}
                <div className="mt-6 grid grid-cols-3 gap-4 border-t border-zinc-800/80 pt-6">
                  <div>
                    <p className="font-mono text-2xl font-bold text-white">
                      5+
                    </p>
                    <p className="mt-0.5 text-xs text-zinc-400">
                      Years Full Stack
                    </p>
                  </div>
                  <div>
                    <p className="font-mono text-2xl font-bold text-amber-400">
                      M.Sc. IT
                    </p>
                    <p className="mt-0.5 text-xs text-zinc-400">Postgraduate</p>
                  </div>
                  <div>
                    <p className="font-mono text-2xl font-bold text-emerald-400">
                      5
                    </p>
                    <p className="mt-0.5 text-xs text-zinc-400">
                      Languages Spoken
                    </p>
                  </div>
                </div>
              </div>
            </DevReveal>
          </section>

          {/* 02 · EXPERIENCE */}
          <section id="experience" className="scroll-mt-12">
            <DevReveal>
              <SectionTitle
                index="02"
                title="Work Experience"
                icon={Briefcase}
              />
              <div className="space-y-4">
                {experience.map((job) => (
                  <div
                    key={job.role}
                    className="rounded-3xl border border-zinc-800/90 bg-zinc-900/40 p-6 transition-colors hover:border-zinc-700"
                  >
                    <div className="flex flex-wrap items-center justify-between gap-2">
                      <span className="rounded-full border border-amber-400/25 bg-amber-400/10 px-3 py-1 font-mono text-xs font-medium text-amber-300">
                        {job.period}
                      </span>
                      <span className="font-mono text-[11px] uppercase tracking-widest text-zinc-500">
                        {job.type}
                      </span>
                    </div>

                    <h3 className="mt-4 text-xl font-bold text-white">
                      {job.role}
                    </h3>
                    <p className="text-sm font-medium text-zinc-400">
                      {job.company}
                    </p>

                    <ul className="mt-5 space-y-2.5 border-t border-zinc-800/80 pt-5">
                      {job.points.map((pt) => (
                        <li
                          key={pt}
                          className="flex gap-3 text-sm leading-relaxed text-zinc-300"
                        >
                          <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-emerald-400" />
                          <span>{pt}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </DevReveal>
          </section>

          {/* 03 · KEY PROJECTS */}
          <section id="projects" className="scroll-mt-12">
            <DevReveal>
              <SectionTitle index="03" title="Key Projects" icon={Layers} />
              <ProjectShowcase items={projects} />
            </DevReveal>
          </section>

          {/* 04 · TECHNICAL SKILLS */}
          <section id="stack" className="scroll-mt-12">
            <DevReveal>
              <SectionTitle
                index="04"
                title="Technical Stack & Capabilities"
                icon={Cpu}
              />
              <div className="grid gap-4 sm:grid-cols-2">
                {skillGroups.map((group) => (
                  <div
                    key={group.title}
                    className="rounded-3xl border border-zinc-800/90 bg-zinc-900/40 p-5"
                  >
                    <h3 className="mb-3.5 font-mono text-xs font-semibold uppercase tracking-widest text-amber-400">
                      {group.title}
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {group.items.map((item) => (
                        <span
                          key={item}
                          className="rounded-full border border-zinc-800 bg-zinc-950/80 px-3 py-1.5 text-xs font-medium text-zinc-200 transition-colors hover:border-amber-400/40 hover:text-amber-200"
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </DevReveal>
          </section>

          {/* 05 · EDUCATION & LANGUAGES */}
          <section id="education" className="scroll-mt-12">
            <DevReveal>
              <SectionTitle
                index="05"
                title="Education & Languages"
                icon={GraduationCap}
              />

              <div className="space-y-3">
                {education.map((edu) => (
                  <div
                    key={edu.degree}
                    className="flex flex-col justify-between gap-2 rounded-3xl border border-zinc-800/90 bg-zinc-900/40 p-5 sm:flex-row sm:items-center"
                  >
                    <div>
                      <h3 className="text-base font-bold text-white">
                        {edu.degree}
                      </h3>
                      <p className="mt-0.5 text-sm text-zinc-400">
                        {edu.school}
                      </p>
                    </div>
                    <span className="w-fit rounded-full border border-zinc-800 bg-zinc-950 px-3 py-1 font-mono text-xs text-amber-400">
                      {edu.year}
                    </span>
                  </div>
                ))}
              </div>

              {/* Languages Bar */}
              <div className="mt-4 flex flex-wrap items-center justify-between gap-4 rounded-3xl border border-zinc-800/90 bg-zinc-900/40 p-5">
                <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-zinc-400">
                  <Globe className="h-4 w-4 text-emerald-400" /> Languages
                </div>
                <div className="flex flex-wrap gap-2">
                  {languages.map((lang) => (
                    <span
                      key={lang}
                      className="rounded-full border border-zinc-800 bg-zinc-950 px-3.5 py-1 text-xs font-medium text-zinc-200"
                    >
                      {lang}
                    </span>
                  ))}
                </div>
              </div>
            </DevReveal>
          </section>

          {/* FOOTER */}
          <footer className="border-t border-zinc-800/80 pt-6 text-xs text-zinc-500">
            <div className="flex flex-col justify-between gap-2 sm:flex-row sm:items-center">
              <p className="flex items-center gap-1.5">
                <Sparkles className="h-3.5 w-3.5 text-amber-400" />
                {profile.fullAddress}
              </p>
              <p>
                © {new Date().getFullYear()} {profile.name}
              </p>
            </div>
          </footer>
        </main>
      </div>
    </div>
  );
}
