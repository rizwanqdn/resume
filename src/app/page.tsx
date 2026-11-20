// app/page.tsx
import {
  DevReveal,
  SiteNav,
  CopyAction,
  PrintResumeButton,
  ProjectShowcase,
  SpotlightCard,
  RoleRotator,
  CountUp,
  Marquee,
  SplitHeading,
  Magnetic,
  CursorGlow,
  HeroTerminal,
  ScrollTimeline,
  TimelineItem,
  ProcessFlow,
  type ProjectItem,
  type ProcessStep,
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
  ArrowRight,
  ArrowUpRight,
  Sparkles,
  User,
  Search,
  PenTool,
  Code2,
  Rocket,
  Workflow,
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
  studioUrl: "https://officialwebxstudio.online",
  fullAddress:
    "Ward No. 8, Mohalla Ahmadiyya, Qadian, District Gurdaspur, Punjab, India — 143516",
  summary:
    "Results-driven Full Stack Web Developer with a Master's degree in Information Technology and hands-on expertise in building dynamic, scalable web applications using Next.js, React, and TypeScript, paired with Generative AI integration via LangChain.js. Combines modern engineering with 6+ years of prior data management and administrative experience.",
};

const rotatingWords = [
  "scalable web apps",
  "AI-powered products",
  "fast Next.js sites",
  "clean user experiences",
];

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

const processSteps: ProcessStep[] = [
  {
    tag: "Requirements",
    title: "Discover",
    text: "I dig into goals, users and constraints so the right thing gets built first time.",
    icon: <Search className="h-4 w-4" />,
  },
  {
    tag: "UI / UX",
    title: "Design",
    text: "Mobile-first layouts and a clear component system, shaped before any code.",
    icon: <PenTool className="h-4 w-4" />,
  },
  {
    tag: "Development",
    title: "Build",
    text: "Next.js, React and TypeScript on MongoDB or SQL, built to scale.",
    icon: <Code2 className="h-4 w-4" />,
  },
  {
    tag: "AI & Automation",
    title: "Integrate",
    text: "LangChain.js and Generative AI workflows that automate the complex parts.",
    icon: <Sparkles className="h-4 w-4" />,
  },
  {
    tag: "Deploy & Support",
    title: "Launch",
    text: "Ship, monitor and keep improving, with ownership of the full lifecycle.",
    icon: <Rocket className="h-4 w-4" />,
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
    url: "https://tutorwave.online",
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
    url: "https://fastfoodspicy.netlify.app",
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
    url: "https://luxeateliers.netlify.app",
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
    title: "Frontend",
    items: ["React.js", "Next.js", "TypeScript", "HTML5", "CSS3"],
  },
  { title: "Backend & Databases", items: ["Python", "MongoDB", "SQL"] },
  {
    title: "AI & Integration",
    items: ["Generative AI", "LangChain.js", "Workflow Automation"],
  },
  {
    title: "Tools & Soft Skills",
    items: [
      "PyCharm",
      "MS Office (Word, Excel)",
      "Problem Solving",
      "Time Management",
      "Adaptability",
    ],
  },
];

const marqueeItems = [
  "React.js",
  "Next.js",
  "TypeScript",
  "LangChain.js",
  "Generative AI",
  "MongoDB",
  "SQL",
  "Python",
  "HTML5",
  "CSS3",
  "Workflow Automation",
];

const education = [
  {
    year: "2023",
    degree: "M.Sc. Information Technology",
    school: "Sikh National College, Qadian · Guru Nanak Dev University",
  },
  {
    year: "2016 — 2019",
    degree: "Bachelor of Arts (B.A.)",
    school: "Sikh National College, Qadian · Guru Nanak Dev University",
  },
];

const languages = ["English", "Hindi", "Urdu", "Punjabi", "Arabic"];

// Faint developer-themed symbols drifting in the background
const codeSymbols = [
  { s: "</>", x: "6%", y: "12%", size: "2.4rem", d: "0s", hide: false },
  { s: "{ }", x: "88%", y: "9%", size: "2.8rem", d: "-3s", hide: false },
  { s: "=>", x: "78%", y: "34%", size: "2rem", d: "-6s", hide: true },
  { s: "AI", x: "10%", y: "42%", size: "2.2rem", d: "-2s", hide: true },
  { s: "npm", x: "92%", y: "58%", size: "1.6rem", d: "-8s", hide: true },
  { s: "[ ]", x: "4%", y: "70%", size: "2.6rem", d: "-5s", hide: false },
  { s: "git", x: "82%", y: "82%", size: "1.8rem", d: "-10s", hide: true },
  { s: "/>", x: "46%", y: "90%", size: "2.2rem", d: "-4s", hide: false },
];

// ------------------------------------------------------------------
// Section heading (animated word reveal)
// ------------------------------------------------------------------
function SectionTitle({
  eyebrow,
  title,
  icon: Icon,
}: {
  eyebrow: string;
  title: string;
  icon: React.ElementType;
}) {
  return (
    <div className="mb-8 sm:mb-10">
      <p className="mb-2 flex items-center gap-2 font-mono text-[11px] font-semibold uppercase tracking-[0.2em] text-violet-300">
        <span className="h-px w-6 bg-violet-400/60" />
        <Icon className="h-3.5 w-3.5" /> {eyebrow}
      </p>
      <SplitHeading
        text={title}
        className="font-display text-3xl font-bold text-white sm:text-5xl"
      />
    </div>
  );
}

// ------------------------------------------------------------------
// Page
// ------------------------------------------------------------------
export default function HomePage() {
  return (
    <div
      id="top"
      className="print-root relative min-h-screen overflow-x-clip bg-[#07070b] pb-28 text-zinc-200 antialiased selection:bg-violet-400/30 selection:text-white md:pb-0"
    >
      {/* Background */}
      <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
        <div className="aurora-blob aurora-1" />
        <div className="aurora-blob aurora-2" />
        <div className="aurora-blob aurora-3" />
        <div className="dev-grid absolute inset-0" />
        {codeSymbols.map((c) => (
          <span
            key={c.s}
            aria-hidden="true"
            className={`code-float ${c.hide ? "hidden sm:block" : ""}`}
            style={{
              left: c.x,
              top: c.y,
              fontSize: c.size,
              animationDelay: c.d,
            }}
          >
            {c.s}
          </span>
        ))}
      </div>
      <CursorGlow />

      <SiteNav initials={profile.initials} name={profile.name} />

      <div className="relative z-10 mx-auto w-full max-w-6xl px-4 sm:px-6">
        {/* ============================ HERO ============================ */}
        <section className="pb-20 pt-28 sm:pb-28 sm:pt-36 lg:pt-44">
          <div className="grid items-center gap-14 lg:grid-cols-12 lg:gap-10">
            <DevReveal className="lg:col-span-7">
              <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-emerald-400/25 bg-emerald-400/10 px-3.5 py-1.5 text-[11px] font-medium text-emerald-300 sm:text-xs">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
                </span>
                Open to Full Stack & AI roles
              </div>

              <p className="font-mono text-xs uppercase tracking-[0.25em] text-zinc-400 sm:text-sm">
                Hi, I&apos;m {profile.name.split(" ")[0]} 👋
              </p>

              <h1 className="font-display mt-4 text-[2.6rem] font-extrabold leading-[1.05] text-white sm:text-6xl xl:text-7xl">
                I build{" "}
                <span className="block min-h-[2.2em] sm:min-h-[1.15em]">
                  <RoleRotator words={rotatingWords} />
                </span>
              </h1>

              <p className="mt-5 max-w-xl text-base leading-relaxed text-zinc-400 sm:text-lg">
                {profile.role} — {profile.tagline}. Turning ideas into fast,
                accessible products from requirements to deployment.
              </p>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Magnetic className="block sm:inline-block">
                  <a
                    href="#contact"
                    className="btn-primary no-print group flex w-full items-center justify-center gap-2 rounded-full px-6 py-3.5 text-sm font-bold shadow-xl shadow-violet-500/20 sm:inline-flex sm:w-auto"
                  >
                    Let&apos;s work together
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </a>
                </Magnetic>
                <Magnetic className="block sm:inline-block">
                  <a
                    href="#projects"
                    className="surface no-print flex w-full items-center justify-center gap-2 !rounded-full px-6 py-3.5 text-sm font-semibold text-zinc-100 sm:inline-flex sm:w-auto"
                  >
                    View projects
                  </a>
                </Magnetic>
              </div>

              {/* Quick facts */}
              <dl className="mt-10 grid max-w-md grid-cols-3 gap-4 border-t border-white/10 pt-6">
                {[
                  { k: "Experience", v: "5+ yrs" },
                  { k: "Projects", v: "4" },
                  { k: "Education", v: "M.Sc. IT" },
                ].map((f) => (
                  <div key={f.k}>
                    <dt className="text-[11px] uppercase tracking-widest text-zinc-500">
                      {f.k}
                    </dt>
                    <dd className="font-display mt-1 text-lg font-bold text-white sm:text-xl">
                      {f.v}
                    </dd>
                  </div>
                ))}
              </dl>
            </DevReveal>

            <DevReveal delay={150} className="lg:col-span-5">
              <HeroTerminal />
            </DevReveal>
          </div>
        </section>

        {/* ============================ ABOUT / BENTO ============================ */}
        <section id="about" className="scroll-mt-24 pb-24 sm:pb-32">
          <DevReveal>
            <SectionTitle
              eyebrow="About"
              title="A quick overview"
              icon={User}
            />
          </DevReveal>

          <div className="grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-4">
            <DevReveal className="col-span-2 lg:row-span-2">
              <SpotlightCard className="h-full">
                <p className="mb-3 font-mono text-[11px] uppercase tracking-widest text-violet-300">
                  Professional summary
                </p>
                <p className="text-[15px] leading-relaxed text-zinc-300 sm:text-base">
                  {profile.summary}
                </p>
              </SpotlightCard>
            </DevReveal>

            <DevReveal delay={60}>
              <SpotlightCard tilt>
                <p className="font-display text-4xl font-extrabold text-white sm:text-5xl">
                  <CountUp to={5} suffix="+" />
                </p>
                <p className="mt-1 text-xs text-zinc-400 sm:text-sm">
                  Years in full stack
                </p>
              </SpotlightCard>
            </DevReveal>

            <DevReveal delay={120}>
              <SpotlightCard tilt>
                <p className="font-display text-4xl font-extrabold text-violet-300 sm:text-5xl">
                  <CountUp to={4} />
                </p>
                <p className="mt-1 text-xs text-zinc-400 sm:text-sm">
                  Key projects shipped
                </p>
              </SpotlightCard>
            </DevReveal>

            <DevReveal delay={180}>
              <SpotlightCard tilt>
                <GraduationCap className="mb-3 h-5 w-5 text-cyan-300" />
                <p className="font-display text-xl font-bold text-white sm:text-2xl">
                  M.Sc. IT
                </p>
                <p className="mt-1 text-xs text-zinc-400 sm:text-sm">
                  Postgraduate · 2023
                </p>
              </SpotlightCard>
            </DevReveal>

            <DevReveal delay={240}>
              <SpotlightCard tilt>
                <MapPin className="mb-3 h-5 w-5 text-emerald-300" />
                <p className="font-display text-xl font-bold text-white sm:text-2xl">
                  Punjab
                </p>
                <p className="mt-1 text-xs text-zinc-400 sm:text-sm">
                  {profile.shortLocation}
                </p>
              </SpotlightCard>
            </DevReveal>
          </div>
        </section>

        {/* ============================ EXPERIENCE ============================ */}
        <section id="experience" className="scroll-mt-24 pb-24 sm:pb-32">
          <DevReveal>
            <SectionTitle
              eyebrow="Experience"
              title="Where I've worked"
              icon={Briefcase}
            />
          </DevReveal>

          <ScrollTimeline>
            {experience.map((job, i) => (
              <TimelineItem key={job.role} delay={i * 80}>
                <SpotlightCard>
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <span className="rounded-full border border-violet-400/25 bg-violet-400/10 px-3 py-1 font-mono text-xs font-medium text-violet-200">
                      {job.period}
                    </span>
                    <span className="font-mono text-[11px] uppercase tracking-widest text-zinc-500">
                      {job.type}
                    </span>
                  </div>

                  <h3 className="font-display mt-4 text-xl font-bold text-white sm:text-2xl">
                    {job.role}
                  </h3>
                  <p className="text-sm font-medium text-zinc-400">
                    {job.company}
                  </p>

                  <ul className="mt-5 space-y-3 border-t border-white/10 pt-5">
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
                </SpotlightCard>
              </TimelineItem>
            ))}
          </ScrollTimeline>
        </section>

        {/* ============================ PROCESS ============================ */}
        <section id="process" className="scroll-mt-24 pb-24 sm:pb-32">
          <DevReveal>
            <SectionTitle
              eyebrow="Process"
              title="How I work"
              icon={Workflow}
            />
          </DevReveal>
          <DevReveal>
            <div className="surface !p-6 sm:!p-10">
              <ProcessFlow steps={processSteps} />
            </div>
          </DevReveal>
        </section>

        {/* ============================ PROJECTS ============================ */}
        <section id="projects" className="scroll-mt-24 pb-24 sm:pb-32">
          <DevReveal>
            <SectionTitle
              eyebrow="Projects"
              title="Selected work"
              icon={Layers}
            />
            <ProjectShowcase items={projects} />
          </DevReveal>

          <DevReveal>
            <SpotlightCard className="mt-4 !p-0">
              <a
                href={profile.studioUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex flex-col gap-5 p-5 sm:flex-row sm:items-center sm:justify-between sm:p-7"
              >
                <div className="flex items-start gap-4">
                  <span className="btn-primary flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl">
                    <Globe className="h-5 w-5" />
                  </span>
                  <div>
                    <p className="font-mono text-[11px] uppercase tracking-widest text-violet-300">
                      My development studio
                    </p>
                    <h3 className="font-display mt-1 text-xl font-bold text-white sm:text-2xl">
                      WebX Studio
                    </h3>
                    <p className="mt-1 max-w-md text-sm leading-relaxed text-zinc-400">
                      Every website I&apos;ve built and my complete portfolio of
                      work, all in one place.
                    </p>
                  </div>
                </div>
                <span className="btn-primary inline-flex shrink-0 items-center justify-center gap-2 rounded-full px-5 py-3 text-sm font-bold transition-transform group-hover:-translate-y-0.5">
                  officialwebxstudio.online
                  <ArrowUpRight className="h-4 w-4" />
                </span>
              </a>
            </SpotlightCard>
          </DevReveal>
        </section>

        {/* ============================ SKILLS + EDUCATION ============================ */}
        <section id="skills" className="scroll-mt-24 pb-24 sm:pb-32">
          <DevReveal>
            <SectionTitle
              eyebrow="Skills & education"
              title="Tools I work with"
              icon={Cpu}
            />
          </DevReveal>

          <DevReveal>
            <div className="mb-5 space-y-3">
              <Marquee items={marqueeItems} />
              <Marquee items={[...marqueeItems].reverse()} reverse />
            </div>
          </DevReveal>

          <div className="grid gap-3 sm:grid-cols-2 sm:gap-4">
            {skillGroups.map((group, i) => (
              <DevReveal key={group.title} delay={i * 60}>
                <SpotlightCard tilt className="h-full">
                  <h3 className="mb-4 font-mono text-[11px] font-semibold uppercase tracking-widest text-violet-300">
                    {group.title}
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {group.items.map((item) => (
                      <span
                        key={item}
                        className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1.5 text-xs font-medium text-zinc-200"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </SpotlightCard>
              </DevReveal>
            ))}
          </div>

          {/* Education */}
          <div className="mt-10 grid gap-3 sm:gap-4 md:grid-cols-2">
            {education.map((edu, i) => (
              <DevReveal key={edu.degree} delay={i * 80}>
                <SpotlightCard tilt className="h-full">
                  <span className="rounded-full border border-cyan-300/25 bg-cyan-300/10 px-3 py-1 font-mono text-xs text-cyan-200">
                    {edu.year}
                  </span>
                  <h3 className="font-display mt-4 text-lg font-bold text-white">
                    {edu.degree}
                  </h3>
                  <p className="mt-1 text-sm text-zinc-400">{edu.school}</p>
                </SpotlightCard>
              </DevReveal>
            ))}
          </div>

          {/* Languages */}
          <DevReveal>
            <SpotlightCard className="mt-3 sm:mt-4">
              <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-zinc-400">
                  <Globe className="h-4 w-4 text-emerald-300" /> Languages
                </div>
                <div className="flex flex-wrap gap-2">
                  {languages.map((lang) => (
                    <span
                      key={lang}
                      className="rounded-full border border-white/10 bg-white/[0.04] px-3.5 py-1.5 text-xs font-medium text-zinc-200"
                    >
                      {lang}
                    </span>
                  ))}
                </div>
              </div>
            </SpotlightCard>
          </DevReveal>
        </section>

        {/* ============================ CONTACT ============================ */}
        <section id="contact" className="scroll-mt-24 pb-16 sm:pb-24">
          <DevReveal>
            <div className="surface glow-border relative overflow-hidden !p-6 sm:!p-12">
              <div className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-violet-500/30 blur-3xl" />
              <div className="pointer-events-none absolute -bottom-24 -left-16 h-64 w-64 rounded-full bg-cyan-400/20 blur-3xl" />

              <div className="relative">
                <p className="mb-3 flex items-center gap-2 font-mono text-[11px] font-semibold uppercase tracking-[0.2em] text-violet-300">
                  <Sparkles className="h-3.5 w-3.5" /> Contact
                </p>
                <h2 className="font-display grad-text max-w-xl text-3xl font-extrabold leading-tight sm:text-5xl">
                  Have a project in mind? Let&apos;s talk.
                </h2>
                <p className="mt-4 max-w-xl text-sm leading-relaxed text-zinc-400 sm:text-base">
                  Available for full stack and Generative AI work. Tap to call
                  or email, or copy the details.
                </p>

                <div className="mt-8 grid gap-3 sm:grid-cols-2">
                  <CopyAction
                    label="email"
                    value={profile.email}
                    href={`mailto:${profile.email}`}
                    icon={<Mail className="h-4 w-4" />}
                  />
                  <CopyAction
                    label="phone"
                    value={profile.phone}
                    href={`tel:${profile.phone}`}
                    icon={<Phone className="h-4 w-4" />}
                  />
                </div>

                <div className="mt-4 flex flex-col gap-3 sm:flex-row">
                  <a
                    href={`mailto:${profile.email}`}
                    className="btn-primary no-print inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-bold transition-transform hover:-translate-y-0.5"
                  >
                    <Mail className="h-4 w-4" /> Send an email
                  </a>
                  <a
                    href={profile.studioUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="surface no-print inline-flex items-center justify-center gap-2 !rounded-full px-5 py-3 text-sm font-semibold text-zinc-100"
                  >
                    <Globe className="h-4 w-4" /> WebX Studio
                  </a>
                  <PrintResumeButton />
                </div>
              </div>
            </div>
          </DevReveal>
        </section>

        {/* ============================ FOOTER ============================ */}
        <footer className="border-t border-white/10 py-6 text-xs text-zinc-500">
          <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
            <p className="flex items-start gap-1.5">
              <MapPin className="mt-0.5 h-3.5 w-3.5 shrink-0 text-violet-300" />
              {profile.fullAddress}
            </p>
            <p>
              © {new Date().getFullYear()} {profile.name}
            </p>
          </div>
        </footer>
      </div>
    </div>
  );
}
