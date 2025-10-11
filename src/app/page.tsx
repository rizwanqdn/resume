// app/page.tsx
'use client'
// Import the Navbar component here
import Navbar from '../../components/Navbar'; 
import { Mail, Phone, MapPin, GraduationCap, Briefcase, Zap, Star, Code, Terminal, Trophy, User } from 'lucide-react'; 


// --- Data Structure (Updated with Soft Skills) ---
const personalData = {
  name: "Arfa Sultan",
  title: "Science & Technology Educator | Molecular Biologist",
  email: "arfasultan1998@gmail.com",
  mobile: "7973685418",
  address: "Mohalla Ahmadiyya Qadian, Ward No 8",
};

const educationTimeline = [
  { year: '2025 (Completed)', institution: 'Guru Nanak University, Amritsar', degree: 'Master of Education (M.Ed.)', detail: 'Advanced studies in pedagogical theory and educational research.' },
  { year: '2023', institution: 'Shivalik College Of Education, Gurdaspur (GNDU)', degree: 'Bachelor of Education (B.Ed.)', detail: 'Specialized training in secondary teaching methodologies and classroom practices.' },
  { year: '2021', institution: 'Guru Nanak Dev University (GNDU), Amritsar', degree: 'Master of Science (M.Sc.)', detail: 'Molecular Biology & Biochemistry. Focused on advanced life science research and techniques.' },
  { year: '2018', institution: 'GGDSD College, Chandigarh (Punjab University)', degree: 'Bachelor of Science (B.Sc.)', detail: 'Medical stream (Biology,Chemistry).' },
];

const experienceTimeline = [
  { period: '1 Year', title: 'Secondary Teacher', institution: 'SRI DASMESH SEN SEC SCHOOL', details: ['Applied subject matter expertise to teach science concepts.', 'Focused on student engagement and concept clarity to improve learning outcomes.', 'Achieved 80%+ pass rate in final exams.' ] },
  { period: '4 Months (Internship)', title: 'Secondary Teacher Intern', institution: 'Govt. Self Made Smart School, Kahlwan (Gurdaspur)', details: ['Conducted rigorous lesson planning and preparation.', 'Practiced effective classroom management and integrated basic classroom technologies.', 'Assisted in developing digital teaching aids.' ] },
];

const coreSkills = [
  'Lesson Planning & Preparation', 'Classroom Technologies Integration', 
  'Laboratory Equipment Use', 'Classroom Management', 'Good Communication', 
  'Communication with Parents', 'Problem Solving', 'MS – Office Basics'
];

// --- NEW SOFT SKILLS DATA STRUCTURE ---
const softSkills = [
    { name: 'Creativity', proficiency: 5 },
    { name: 'Imaginative', proficiency: 4 },
    { name: 'Communication', proficiency: 5 },
    { name: 'Positive Attitude', proficiency: 5 },
    { name: 'Decision Making', proficiency: 4 },
];

const projects = [
  { name: 'Develop Nanoparticles from Cloves', type: 'Research Project', tags: ['Nanotechnology', 'Biochemistry'] },
  { name: 'Recent Progress on CRISPR-Cas9 Technology', type: 'Review Project', tags: ['Molecular Biology', 'Gene Editing'] },
];

const languages = [
    { name: 'English', proficiency: 5 },
    { name: 'Hindi', proficiency: 4 },
    { name: 'Punjabi', proficiency: 4 },
];

// --- Utility Components ---

const ContactItem: React.FC<{ icon: React.ElementType, detail: string, href: string }> = ({ icon: Icon, detail, href }) => (
    <a href={href} target="_blank" rel="noopener noreferrer" className="flex items-center text-sm text-gray-300 hover:text-cyan-300 transition-colors group">
        <Icon className="w-4 h-4 mr-2 text-cyan-400 group-hover:text-cyan-300 flex-shrink-0" />
        <span className="truncate">{detail}</span>
    </a>
);

const StarRating: React.FC<{ count: number }> = ({ count }) => (
    <div className="flex space-x-0.5">
        {[...Array(5)].map((_, i) => (
            <Star key={i} className={`w-4 h-4 ${i < count ? 'text-cyan-400 fill-cyan-400' : 'text-gray-600/50'}`} />
        ))}
    </div>
);


// --- Main Page Component ---
export default function HomePage() {
  return ( 
    // Background: Used Blue-Gray 900 for a deep, modern slate background
    <div className="min-h-screen bg-gray-100 text-gray-800 font-sans antialiased">
      
      {/* 1. Navbar is placed outside the main card */}
      <Navbar />

      <div className="max-w-6xl mx-auto shadow-2xl rounded-xl overflow-hidden my-8 lg:my-16 bg-white border border-gray-200">
        
        {/* CV Grid Layout: Sidebar (30%) and Main Content (70%) */}
        <div className="grid grid-cols-1 lg:grid-cols-3">
          
          {/* ==================================================== */}
          {/* 1. SIDEBAR (Slate Blue Background) */}
          {/* ==================================================== */}
          <aside className="lg:col-span-1 bg-slate-900 text-gray-100 p-8 space-y-10 border-r border-slate-700/50 animate-slide-in-left">
            
            {/* --- PERSONAL INFO / AVATAR --- */}
            <header className="text-center">
              <div className="w-28 h-28 mx-auto rounded-full bg-cyan-500 border-4 border-cyan-300 mb-4 flex items-center justify-center text-4xl font-bold shadow-2xl">
                  <User className="w-14 h-14 text-slate-900" /> 
              </div>
              <h1 className="text-4xl font-extrabold tracking-tight text-white">{personalData.name.toUpperCase()}</h1>
              <p className="text-base font-light text-cyan-300 mt-1">{personalData.title}</p>
            </header>

            {/* --- CONTACT --- */}
            <section className="pt-2">
                <h2 className="sidebar-heading-cool">
                    <Mail className="sidebar-icon-cool" /> Contact
                </h2>
                <div className="space-y-3">
                    <ContactItem icon={Mail} detail={personalData.email} href={`mailto:${personalData.email}`} />
                    <ContactItem icon={Phone} detail={personalData.mobile} href={`tel:${personalData.mobile}`} />
                    <ContactItem icon={MapPin} detail={personalData.address} href="#" />
                </div>
            </section>
            
            {/* --- CORE SKILLS --- */}
            <section id="coreskills">
                <h2 className="sidebar-heading-cool">
                    <Code className="sidebar-icon-cool" /> Core Skills
                </h2>
                <div className="flex flex-wrap gap-2">
                    {coreSkills.map((skill, index) => (
                        <span key={skill} className="skill-badge-cool animate-fade-in" style={{ animationDelay: `${0.1 + index * 0.05}s` }}>
                            {skill}
                        </span>
                    ))}
                </div>
            </section>

            {/* --- NEW: SOFT SKILLS --- */}
            <section id="softskills">
                <h2 className="sidebar-heading-cool">
                    <Zap className="sidebar-icon-cool" /> Soft Skills
                </h2>
                <div className="space-y-2">
                    {softSkills.map((skill) => (
                        <div key={skill.name} className="flex justify-between items-center pr-2 p-1 rounded-sm hover:bg-white/10 transition-colors">
                            <span className="text-gray-300 font-medium">{skill.name.toUpperCase()}</span>
                            <StarRating count={skill.proficiency} />
                        </div>
                    ))}
                </div>
            </section>


            {/* --- LANGUAGES --- */}
            <section>
                <h2 className="sidebar-heading-cool">
                    <Terminal className="sidebar-icon-cool" /> Languages
                </h2>
                <div className="space-y-2">
                    {languages.map((lang) => (
                        <div key={lang.name} className="flex justify-between items-center pr-2 p-1 rounded-sm hover:bg-white/10 transition-colors">
                            <span className="text-gray-300 font-medium">{lang.name.toUpperCase()}</span>
                            <StarRating count={lang.proficiency} />
                        </div>
                    ))}
                </div>
            </section>

            {/* --- PROJECTS / RESEARCH --- */}
            <section id="projects">
                <h2 className="sidebar-heading-cool">
                    <Trophy className="sidebar-icon-cool" /> Research Work
                </h2>
                <div className="space-y-3">
                    {projects.map((proj, index) => (
                         <div key={index} className="project-card-cool">
                            <p className="font-medium text-gray-200">{proj.name}</p>
                            <p className="text-xs text-sky-400 mt-0.5">{proj.type}</p>
                            <div className="flex gap-1 mt-1">
                                 {/* Secondary accents for tags */}
                                 <span key={proj.tags[0]} className="text-xs px-1.5 py-0.5 bg-slate-700/70 text-gray-300 rounded-full">{proj.tags[0]}</span>
                                 <span key={proj.tags[1]} className="text-xs px-1.5 py-0.5 bg-slate-700/70 text-gray-300 rounded-full">{proj.tags[1]}</span>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

          </aside>
          
          {/* ==================================================== */}
          {/* 2. MAIN CONTENT AREA */}
          {/* ==================================================== */}
          <main className="lg:col-span-2 p-10 space-y-12 animate-slide-in-right">
            
            {/* === 1. OBJECTIVE === */}
            <section id="objective" className="pt-24 -mt-24">
                <h2 className="main-heading-cool">
                    <Zap className="main-icon-cool" /> Professional Objective
                </h2>
                {/* Accent box changed to Cyan/Sky Blue */}
                <div className="summary-box-cool">
                    <p className="text-gray-700 leading-relaxed text-lg italic">
                        To secure a challenging and rewarding teaching position where I can utilize my comprehensive academic knowledge in **Science and Molecular Biology** and my dedication to pedagogy to foster a deeper understanding of scientific concepts in students, thereby contributing to the provision of quality education.
                    </p>
                </div>
            </section>

            {/* --- HORIZONTAL LINE --- */}
            <div className="h-px bg-gray-200" />
            
            {/* === 2. PROFESSIONAL EXPERIENCE === */}
            <section id="experience" className="pt-24 -mt-24">
                <h2 className="main-heading-cool">
                    <Briefcase className="main-icon-cool" /> Professional Experience
                </h2>
                <div className="space-y-10">
                    {experienceTimeline.map((item, index) => (
                        <div key={index} className="experience-card-cool">
                            <h3 className="text-xl font-bold text-gray-800">{item.title} - {item.institution}</h3>
                            <p className="text-sm text-cyan-700 italic mb-2 font-semibold">{item.period}</p>
                            <ul className="list-disc list-inside text-gray-600 space-y-1 ml-2">
                                {item.details.map((detail, idx) => (
                                    <li key={idx} className="text-base">{detail}</li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </section>

            {/* --- HORIZONTAL LINE --- */}
            <div className="h-px bg-gray-200" />
            
            {/* === 3. EDUCATION & ACADEMICS === */}
            <section id="education" className="pt-24 -mt-24">
                <h2 className="main-heading-cool">
                    <GraduationCap className="main-icon-cool" /> Education & Qualifications
                </h2>
                <Timeline data={educationTimeline} />
            </section>
            
            {/* --- HORIZONTAL LINE --- */}
            <div className="h-px bg-gray-200" />

            {/* === 4. RESEARCH PUBLICATION (NEW SECTION) === */}
            <section id="research" className="pt-24 -mt-24">
                <h2 className="main-heading-cool">
                    <Code className="main-icon-cool" /> Research Publication
                </h2>
                <div className="pl-4 p-4 border-l-4 border-cyan-500 bg-cyan-50/50 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                    <p className="font-semibold text-xl text-gray-800">
                        EFFECT OF CONCEPT MAPPING STRATEGY ON HIGHER ORDER THINKING SKILLS AMONG SECONDARY SCHOOL STUDENTS.
                    </p>
                    <p className="text-sm text-gray-500 mt-1 italic">
                        — Master of Education (M.Ed.) Research Paper
                    </p>
                </div>
            </section>
            
            {/* --- HORIZONTAL LINE --- */}
            <div className="h-px bg-gray-200" />

            {/* === 5. CERTIFICATIONS & AWARDS (Moved to last) === */}
            <section>
                 <h2 className="main-heading-cool">
                    <Trophy className="main-icon-cool" /> Awards & Certifications
                </h2>
                 <ul className="list-disc list-inside text-gray-600 space-y-2 ml-4 p-4 border border-gray-200 rounded-md hover:shadow-lg transition-shadow">
                    <li className="text-base hover:text-cyan-700 transition-colors">Molecular Biology and Biochemistry Technique Certificate</li>
                    <li className="text-base hover:text-cyan-700 transition-colors">Teaching Training Certificate</li>
                </ul>
            </section>

          </main>
        </div>
        
        {/* --- CV FOOTER --- */}
        <footer className=" bg-slate-950 py-4 text-center text-gray-400 border-t border-slate-800">
            <p className="text-sm">Arfa Sultan Professional Portfolio | {new Date().getFullYear()}</p>
        </footer>

      </div>

      {/* Tailwind Style Declarations & Keyframe Animations */}
      <style jsx global>{`
        /* --- COOL SIDEBAR STYLES (Slate/Cyan) --- */
        .sidebar-heading-cool {
          @apply text-xl font-bold mb-4 border-b border-slate-700 pb-2 flex items-center text-cyan-400 tracking-wider; 
        }
        .sidebar-icon-cool {
          @apply w-6 h-6 mr-2 text-cyan-400 flex-shrink-0;
        }
        .skill-badge-cool {
          @apply px-3 py-1 bg-slate-700 text-cyan-300 text-sm font-medium rounded-full shadow-md transition-all duration-200 transform hover:scale-[1.05] hover:bg-cyan-600/50 cursor-pointer; 
        }
        .project-card-cool {
            @apply border-l-4 border-sky-500 pl-4 p-2 rounded-sm transition-transform duration-200 hover:translate-x-1 hover:bg-slate-800/50;
        }

        /* --- COOL MAIN CONTENT STYLES (Slate/Cyan) --- */
        .main-heading-cool {
          @apply text-4xl font-extrabold mb-8 border-b-4 border-cyan-600 pb-2 flex items-center text-gray-900 tracking-tight; 
        }
        .main-icon-cool {
          @apply w-8 h-8 mr-4 text-cyan-600 flex-shrink-0; 
        }
        .summary-box-cool {
            @apply border-l-4 border-cyan-500 pl-4 bg-cyan-50 p-5 rounded-lg shadow-md; 
        }
        .experience-card-cool {
            @apply border-l-4 border-gray-300 pl-4 p-4 rounded-lg transition-all duration-300 hover:border-cyan-500 hover:bg-cyan-50/70 transform hover:translate-x-0.5 cursor-pointer; 
        }

        /* --- Animations (Unchanged) --- */
        .animate-slide-in-left {
          animation: slideInLeft 0.8s ease-out forwards;
          opacity: 0;
        }
        .animate-slide-in-right {
          animation: slideInRight 0.8s ease-out forwards;
          opacity: 0;
        }
        .animate-fade-in {
            animation: fadeIn 0.5s ease-out forwards;
            opacity: 0;
        }

        @keyframes slideInLeft {
          from { opacity: 0; transform: translateX(-30px); }
          to { opacity: 1; transform: translateX(0); }
        }
        @keyframes slideInRight {
          from { opacity: 0; transform: translateX(30px); }
          to { opacity: 1; transform: translateX(0); }
        }
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
      `}</style>
    </div>
  );
}


// --- Timeline Utility Component (Cool Refinement) ---
interface TimelineItem {
    year: string;
    institution: string;
    degree: string;
    detail: string;
}

const Timeline: React.FC<{ data: TimelineItem[] }> = ({ data }) => (
  <div className="relative border-l-4  border-cyan-500 ml-4">
    {data.map((item, index) => (
      <div key={index} className="mb-8 ml-6 relative p-4 bg-white border border-gray-200 rounded-lg shadow-md transition-shadow duration-300 hover:shadow-lg transform hover:scale-[1.01]">
        {/* Timeline Dot (Stylized) - Cyan/Sky Blue */}
        <div className="absolute -left-[37px] top-1 w-5 h-5 bg-cyan-500 rounded-full border-4 border-white shadow-lg"></div>
        
        <p className="text-sm font-semibold text-cyan-600">{item.year}</p>
        <h3 className="text-xl font-bold text-gray-800 mt-1">{item.degree}</h3>
        <p className="text-base text-gray-600 italic mb-1">{item.institution}</p>
        <p className="text-sm text-gray-500">{item.detail}</p>
      </div>
    ))}
  </div>
);