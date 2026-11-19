// app/page.tsx
import {
  FloatingNav,
  SpotlightCard,
  SegMeter,
  Marquee,
  CopyPill,
  BentoReveal,
} from "../../components/BentoKit";
import {
  Mail,
  Phone,
  MapPin,
  GraduationCap,
  Briefcase,
  FlaskConical,
  Award,
  BookOpen,
  Sparkles,
  ArrowUpRight,
  CheckCircle2,
  Dna,
  Microscope,
  Languages,
} from "lucide-react";

// ------------------------------------------------------------------
// Data
// ------------------------------------------------------------------
const personalData = {
  name: "Arfa Sultan",
  title: "Science & Technology Educator",
  subtitle: "Molecular Biologist",
  email: "arfasultan1998@gmail.com",
  mobile: "7973685418",
  location: "Qadian, Punjab",
  address: "Mohalla Ahmadiyya Qadian, Ward No 8",
};

const educationTimeline = [
  {
    year: "2025",
    institution: "Guru Nanak Dev University, Amritsar",
    degree: "Master of Education (M.Ed.)",
    detail: "Advanced studies in pedagogical theory and educational research.",
  },
  {
    year: "2023",
    institution: "Shivalik College of Education, Gurdaspur (GNDU)",
    degree: "Bachelor of Education (B.Ed.)",
    detail:
      "Specialized training in secondary teaching methodologies and classroom practices.",
  },
  {
    year: "2021",
    institution: "Guru Nanak Dev University (GNDU), Amritsar",
    degree: "Master of Science (M.Sc.)",
    detail:
      "Molecular Biology & Biochemistry. Focused on advanced life science research and lab techniques.",
  },
  {
    year: "2018",
    institution: "GGDSD College, Chandigarh (Panjab University)",
    degree: "Bachelor of Science (B.Sc.)",
    detail: "Medical stream — Biology & Chemistry.",
  },
];

const experienceTimeline = [
  {
    period: "1 Year",
    badge: "Full-Time",
    title: "Secondary Teacher",
    institution: "Sri Dasmesh Sen Sec School",
    details: [
      "Applied subject matter expertise to teach secondary science concepts.",
      "Focused on student engagement and concept clarity to elevate learning outcomes.",
      "Achieved an 80%+ pass rate in final examinations.",
    ],
  },
  {
    period: "4 Months",
    badge: "Internship",
    title: "Secondary Teacher Intern",
    institution: "Govt. Self Made Smart School, Kahlwan (Gurdaspur)",
    details: [
      "Conducted structured lesson planning and daily curriculum preparation.",
      "Practiced classroom management and integrated smart classroom technologies.",
      "Assisted in designing interactive digital teaching aids.",
    ],
  },
];

const coreSkills = [
  "Lesson Planning & Preparation",
  "Classroom Technologies Integration",
  "Laboratory Equipment Use",
  "Classroom Management",
  "Parent-Teacher Communication",
  "Problem Solving",
  "Concept Mapping Pedagogy",
  "MS Office Basics",
];

const softSkills = [
  { name: "Creativity", proficiency: 5 },
  { name: "Communication", proficiency: 5 },
  { name: "Positive Attitude", proficiency: 5 },
  { name: "Imaginative", proficiency: 4 },
  { name: "Decision Making", proficiency: 4 },
];

const languages = [
  { name: "English", proficiency: 5 },
  { name: "Hindi", proficiency: 4 },
  { name: "Punjabi", proficiency: 4 },
];

const projects = [
  {
    code: "LAB-01",
    name: "Develop Nanoparticles from Cloves",
    type: "Research Project",
    summary:
      "Green synthesis approach exploring clove-derived extracts for nanoparticle formulation and biochemical characterization.",
    tags: ["Nanotechnology", "Biochemistry", "Green Synthesis"],
  },
  {
    code: "REV-02",
    name: "Recent Progress on CRISPR-Cas9 Technology",
    type: "Review Project",
    summary:
      "Comprehensive review of genome-editing mechanisms, therapeutic breakthroughs, and contemporary molecular applications.",
    tags: ["Molecular Biology", "Gene Editing", "CRISPR"],
  },
];

const certifications = [
  "Molecular Biology and Biochemistry Technique Certificate",
  "Teaching Training Certificate",
];

// ------------------------------------------------------------------
// Section Label Helper
// ------------------------------------------------------------------
function SectionHeader({
  eyebrow,
  title,
  icon: Icon,
}: {
  eyebrow: string;
  title: string;
  icon: React.ElementType;
}) {
  return (
    <BentoReveal className="mb-8 flex flex-col gap-2">
      <span className="inline-flex w-fit items-center gap-2 rounded-full border border-cyan-400/20 bg-cyan-400/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-cyan-300">
        <Icon className="h-3.5 w-3.5" /> {eyebrow}
      </span>
      <h2 className="text-2xl font-bold tracking-tight text-white sm:text-3xl">
        {title}
      </h2>
    </BentoReveal>
  );
}

// ------------------------------------------------------------------
// Page
// ------------------------------------------------------------------
export default function HomePage() {
  return (
    <div className="relative min-h-screen overflow-x-clip bg-[#060913] text-slate-200 antialiased selection:bg-cyan-400/30 selection:text-cyan-100">
      {/* Ambient Background Layers */}
      <div className="pointer-events-none fixed inset-0 z-0">
        <div className="bio-grid absolute inset-0" />
        <div className="aurora absolute -left-32 top-0 h-[34rem] w-[34rem] rounded-full bg-cyan-500/12 blur-[120px]" />
        <div className="aurora-2 absolute -right-32 top-1/3 h-[34rem] w-[34rem] rounded-full bg-indigo-600/14 blur-[120px]" />
      </div>

      <FloatingNav />

      <main className="relative z-10 mx-auto max-w-6xl px-5 pb-20 pt-28 sm:pt-32">
        {/* ============================ HERO ============================ */}
        <section id="home" className="scroll-mt-24 pb-16">
          <div className="grid items-center gap-8 lg:grid-cols-12">
            {/* Left Copy */}
            <div className="lg:col-span-8">
              <div className="mb-5 inline-flex items-center gap-2.5 rounded-full border border-emerald-400/20 bg-emerald-400/10 px-3.5 py-1.5 text-xs font-medium text-emerald-300">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
                </span>
                Available for Secondary & Higher-Secondary Science Roles
              </div>

              <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-6xl lg:text-[4.25rem] lg:leading-[1.05]">
                {personalData.name}
              </h1>

              <p className="mt-4 text-lg font-medium sm:text-2xl">
                <span className="gradient-pan bg-gradient-to-r from-cyan-300 via-sky-300 to-indigo-400 bg-clip-text text-transparent">
                  {personalData.title}
                </span>
                <span className="text-slate-500"> · </span>
                <span className="text-slate-300">{personalData.subtitle}</span>
              </p>

              <p className="mt-5 max-w-2xl text-base leading-relaxed text-slate-400">
                Bridging laboratory-grade{" "}
                <span className="text-slate-200">
                  Molecular Biology & Biochemistry
                </span>{" "}
                with modern classroom pedagogy—turning complex scientific
                mechanisms into intuitive, concept-mapped learning.
              </p>

              {/* Interactive Copy Contact Pills */}
              <div className="mt-7 flex flex-wrap gap-2.5">
                <CopyPill
                  label="email"
                  value={personalData.email}
                  icon={<Mail className="h-4 w-4" />}
                />
                <CopyPill
                  label="phone number"
                  value={personalData.mobile}
                  icon={<Phone className="h-4 w-4" />}
                />
                <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-4 py-2 text-sm text-slate-300">
                  <MapPin className="h-4 w-4 text-cyan-400" />
                  {personalData.location}
                </span>
              </div>

              {/* Primary CTAs */}
              <div className="mt-8 flex flex-wrap items-center gap-3">
                <a
                  href="#experience"
                  className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-slate-950 shadow-lg shadow-cyan-500/10 transition-transform hover:-translate-y-0.5"
                >
                  Explore Experience <ArrowUpRight className="h-4 w-4" />
                </a>
                <a
                  href="#research"
                  className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/[0.03] px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-white/10"
                >
                  <FlaskConical className="h-4 w-4 text-cyan-300" /> View
                  Research
                </a>
              </div>
            </div>

            {/* Right Bio-Profile Card */}
            <div className="lg:col-span-4">
              <SpotlightCard className="flex flex-col items-center justify-center p-8 text-center">
                <div className="helix-float relative mb-5">
                  <div className="absolute -inset-2 rounded-full bg-gradient-to-tr from-cyan-400/40 via-indigo-500/40 to-teal-300/40 blur-lg" />
                  <div className="relative flex h-28 w-28 items-center justify-center rounded-full border border-white/20 bg-slate-950 text-3xl font-extrabold tracking-tight text-white">
                    AS
                    <span className="absolute -bottom-1 -right-1 flex h-9 w-9 items-center justify-center rounded-full border border-slate-900 bg-gradient-to-br from-cyan-400 to-indigo-500 text-slate-950 shadow-lg">
                      <Dna className="h-4 w-4" />
                    </span>
                  </div>
                </div>

                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-cyan-300">
                  M.Ed. · M.Sc. (Mol. Bio)
                </p>
                <p className="mt-2 text-sm text-slate-400">
                  Pedagogical Researcher & Secondary Science Specialist
                </p>

                <div className="mt-6 grid w-full grid-cols-3 divide-x divide-white/10 border-t border-white/10 pt-5">
                  <div>
                    <p className="text-lg font-bold text-white">80%+</p>
                    <p className="text-[11px] text-slate-400">Pass Rate</p>
                  </div>
                  <div>
                    <p className="text-lg font-bold text-white">4</p>
                    <p className="text-[11px] text-slate-400">Degrees</p>
                  </div>
                  <div>
                    <p className="text-lg font-bold text-white">3</p>
                    <p className="text-[11px] text-slate-400">Languages</p>
                  </div>
                </div>
              </SpotlightCard>
            </div>
          </div>

          {/* Core Skills Marquee Strip */}
          <div className="mt-12 rounded-full border border-white/[0.07] bg-white/[0.02] p-2">
            <Marquee items={coreSkills} />
          </div>
        </section>

        {/* ======================== BENTO OVERVIEW ======================== */}
        <section id="about" className="scroll-mt-24 py-12">
          <SectionHeader
            eyebrow="Profile & Capabilities"
            title="Teaching Philosophy & Skill Matrix"
            icon={Sparkles}
          />

          <div className="grid gap-5 md:grid-cols-12">
            {/* Objective Tile */}
            <BentoReveal className="md:col-span-7">
              <SpotlightCard className="flex flex-col justify-between">
                <div>
                  <div className="mb-4 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-cyan-300">
                    <Microscope className="h-4 w-4" /> Mission Statement
                  </div>
                  <p className="text-lg leading-relaxed text-slate-200 sm:text-xl">
                    To secure a challenging and rewarding teaching position
                    where I can apply deep academic training in{" "}
                    <span className="font-semibold text-cyan-300">
                      Science & Molecular Biology
                    </span>{" "}
                    alongside evidence-based pedagogy to cultivate critical
                    thinking and scientific curiosity in students.
                  </p>
                </div>

                <div className="mt-6 flex flex-wrap gap-2 border-t border-white/10 pt-5">
                  {[
                    "Concept Mapping",
                    "Lab-First Instruction",
                    "Smart Classrooms",
                    "Student Mentorship",
                  ].map((pill) => (
                    <span
                      key={pill}
                      className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 text-xs text-slate-300"
                    >
                      {pill}
                    </span>
                  ))}
                </div>
              </SpotlightCard>
            </BentoReveal>

            {/* Soft Skills Tile */}
            <BentoReveal delay={80} className="md:col-span-5">
              <SpotlightCard>
                <h3 className="mb-5 flex items-center gap-2 text-sm font-semibold uppercase tracking-widest text-slate-300">
                  <Sparkles className="h-4 w-4 text-cyan-400" /> Classroom
                  Strengths
                </h3>
                <div className="space-y-4">
                  {softSkills.map((s) => (
                    <SegMeter
                      key={s.name}
                      label={s.name}
                      value={s.proficiency}
                    />
                  ))}
                </div>
              </SpotlightCard>
            </BentoReveal>

            {/* Languages Tile */}
            <BentoReveal delay={120} className="md:col-span-5">
              <SpotlightCard>
                <h3 className="mb-5 flex items-center gap-2 text-sm font-semibold uppercase tracking-widest text-slate-300">
                  <Languages className="h-4 w-4 text-indigo-400" /> Languages
                </h3>
                <div className="space-y-4">
                  {languages.map((l) => (
                    <SegMeter
                      key={l.name}
                      label={l.name}
                      value={l.proficiency}
                    />
                  ))}
                </div>
              </SpotlightCard>
            </BentoReveal>

            {/* Certifications Tile */}
            <BentoReveal delay={160} className="md:col-span-7">
              <SpotlightCard>
                <h3 className="mb-5 flex items-center gap-2 text-sm font-semibold uppercase tracking-widest text-slate-300">
                  <Award className="h-4 w-4 text-cyan-400" /> Certifications &
                  Credentials
                </h3>
                <div className="grid gap-3 sm:grid-cols-2">
                  {certifications.map((cert) => (
                    <div
                      key={cert}
                      className="flex items-start gap-3 rounded-2xl border border-white/[0.07] bg-white/[0.03] p-4"
                    >
                      <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-cyan-400" />
                      <span className="text-sm font-medium leading-snug text-slate-200">
                        {cert}
                      </span>
                    </div>
                  ))}
                </div>
              </SpotlightCard>
            </BentoReveal>
          </div>
        </section>

        {/* ========================== EXPERIENCE ========================== */}
        <section id="experience" className="scroll-mt-24 py-12">
          <SectionHeader
            eyebrow="Classroom Track Record"
            title="Professional Experience"
            icon={Briefcase}
          />

          <div className="grid gap-5 md:grid-cols-2">
            {experienceTimeline.map((item, i) => (
              <BentoReveal key={item.title} delay={i * 100}>
                <SpotlightCard className="flex flex-col justify-between">
                  <div>
                    <div className="flex items-center justify-between gap-2">
                      <span className="rounded-full border border-cyan-400/25 bg-cyan-400/10 px-3 py-1 text-xs font-semibold text-cyan-300">
                        {item.period}
                      </span>
                      <span className="text-xs font-medium uppercase tracking-wider text-slate-500">
                        {item.badge}
                      </span>
                    </div>

                    <h3 className="mt-4 text-xl font-bold text-white">
                      {item.title}
                    </h3>
                    <p className="mt-1 text-sm font-medium text-indigo-300">
                      {item.institution}
                    </p>

                    <ul className="mt-5 space-y-3 border-t border-white/10 pt-5">
                      {item.details.map((d) => (
                        <li
                          key={d}
                          className="flex gap-3 text-sm leading-relaxed text-slate-300"
                        >
                          <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-cyan-400" />
                          <span>{d}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </SpotlightCard>
              </BentoReveal>
            ))}
          </div>
        </section>

        {/* =========================== EDUCATION =========================== */}
        <section id="education" className="scroll-mt-24 py-12">
          <SectionHeader
            eyebrow="Academic Foundation"
            title="Education & Qualifications"
            icon={GraduationCap}
          />

          <div className="grid gap-5 sm:grid-cols-2">
            {educationTimeline.map((e, i) => (
              <BentoReveal key={e.degree} delay={i * 80}>
                <SpotlightCard>
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl border border-cyan-400/20 bg-cyan-400/10 text-cyan-300">
                      <GraduationCap className="h-5 w-5" />
                    </div>
                    <span className="font-mono text-2xl font-black tracking-tight text-white/15">
                      {e.year}
                    </span>
                  </div>
                  <h3 className="mt-4 text-lg font-bold text-white">
                    {e.degree}
                  </h3>
                  <p className="mt-1 text-xs font-medium text-cyan-300">
                    {e.institution}
                  </p>
                  <p className="mt-3 text-sm leading-relaxed text-slate-400">
                    {e.detail}
                  </p>
                </SpotlightCard>
              </BentoReveal>
            ))}
          </div>
        </section>

        {/* ============================ RESEARCH ============================ */}
        <section id="research" className="scroll-mt-24 py-12">
          <SectionHeader
            eyebrow="Scientific Inquiry"
            title="Publication & Lab Projects"
            icon={FlaskConical}
          />

          {/* Featured M.Ed Research Paper */}
          <BentoReveal className="mb-5">
            <SpotlightCard className="border-cyan-400/20 bg-gradient-to-br from-cyan-500/[0.08] via-slate-900/60 to-indigo-600/[0.1] p-8">
              <div className="flex flex-wrap items-center justify-between gap-3">
                <span className="inline-flex items-center gap-2 rounded-full border border-cyan-400/30 bg-cyan-400/10 px-3 py-1 text-xs font-semibold uppercase tracking-widest text-cyan-300">
                  <BookOpen className="h-3.5 w-3.5" /> Featured M.Ed. Research
                  Paper
                </span>
                <span className="font-mono text-xs text-slate-400">
                  PEDAGOGY · 2025
                </span>
              </div>
              <h3 className="mt-4 max-w-3xl text-xl font-bold leading-snug text-white sm:text-2xl">
                Effect of Concept Mapping Strategy on Higher Order Thinking
                Skills Among Secondary School Students.
              </h3>
            </SpotlightCard>
          </BentoReveal>

          {/* Lab & Review Projects */}
          <div className="grid gap-5 md:grid-cols-2">
            {projects.map((p, i) => (
              <BentoReveal key={p.name} delay={i * 100}>
                <SpotlightCard>
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-semibold uppercase tracking-widest text-indigo-300">
                      {p.type}
                    </span>
                    <span className="font-mono text-xs text-slate-500">
                      {p.code}
                    </span>
                  </div>
                  <h3 className="mt-3 text-lg font-bold text-white">
                    {p.name}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-400">
                    {p.summary}
                  </p>
                  <div className="mt-5 flex flex-wrap gap-2">
                    {p.tags.map((t) => (
                      <span
                        key={t}
                        className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 text-xs text-slate-300"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </SpotlightCard>
              </BentoReveal>
            ))}
          </div>
        </section>

        {/* ============================ CONTACT ============================ */}
        <section id="contact" className="scroll-mt-24 pt-12">
          <BentoReveal>
            <SpotlightCard className="overflow-hidden border-white/10 bg-gradient-to-b from-white/[0.05] to-white/[0.02] px-6 py-14 text-center sm:px-12">
              <span className="inline-flex items-center gap-2 rounded-full border border-cyan-400/20 bg-cyan-400/10 px-3.5 py-1 text-xs font-semibold uppercase tracking-widest text-cyan-300">
                Get in Touch
              </span>
              <h2 className="mt-4 text-3xl font-bold tracking-tight text-white sm:text-4xl">
                Ready to inspire the next generation of scientists?
              </h2>
              <p className="mx-auto mt-3 max-w-xl text-sm text-slate-400 sm:text-base">
                Open to full-time secondary teaching roles, curriculum design,
                and academic collaborations.
              </p>

              <div className="mt-8 flex flex-wrap justify-center gap-3">
                <a
                  href={`mailto:${personalData.email}`}
                  className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-cyan-400 to-indigo-500 px-6 py-3 text-sm font-semibold text-slate-950 shadow-xl shadow-cyan-500/20 transition-transform hover:-translate-y-0.5"
                >
                  <Mail className="h-4 w-4" /> Send an Email
                </a>
                <a
                  href={`tel:${personalData.mobile}`}
                  className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/[0.04] px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-white/10"
                >
                  <Phone className="h-4 w-4 text-cyan-300" />{" "}
                  {personalData.mobile}
                </a>
              </div>

              <p className="mt-8 flex items-center justify-center gap-2 text-xs text-slate-500">
                <MapPin className="h-3.5 w-3.5 text-cyan-400/70" />{" "}
                {personalData.address}
              </p>
            </SpotlightCard>
          </BentoReveal>
        </section>
      </main>

      <footer className="relative z-10 border-t border-white/[0.06] py-6 text-center text-xs text-slate-500">
        © {new Date().getFullYear()} {personalData.name} · Science & Technology
        Educator
      </footer>
    </div>
  );
}
