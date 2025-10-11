// app/page.tsx
'use client'
import { Mail, Phone, MapPin, GraduationCap, Briefcase, Zap, Star, Code, Terminal, Trophy, User } from 'lucide-react'; 
import Link from 'next/link';

// --- Data Structure (Unchanged) ---
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
  { year: '2018', institution: 'GGDSD College, Chandigarh (Punjab University)', degree: 'Bachelor of Science (B.Sc.)', detail: 'Medical stream (Botany, Zoology, Chemistry).' },
];

const experienceTimeline = [
  { period: '1 Year', title: 'Secondary Teacher', institution: 'SRI DASMESH SEN SEC SCHOOL', details: ['Applied subject matter expertise to teach science concepts.', 'Focused on student engagement and concept clarity to improve learning outcomes.', 'Achieved 90%+ pass rate in final exams.' ] },
  { period: '4 Months (Internship)', title: 'Secondary Teacher Intern', institution: 'Govt. Self Made Smart School, Kahlwan (Gurdaspur)', details: ['Conducted rigorous lesson planning and preparation.', 'Practiced effective classroom management and integrated basic classroom technologies.', 'Assisted in developing digital teaching aids.' ] },
];

const coreSkills = [
  'Lesson Planning & Preparation', 'Classroom Technologies Integration', 
  'Laboratory Equipment Use', 'Classroom Management', 'Good Communication', 
  'Communication with Parents', 'Problem Solving', 'MS – Office Basics'
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
    <a href={href} target="_blank" rel="noopener noreferrer" className="flex items-center text-sm text-gray-300 hover:text-teal-400 transition-colors group">
        <Icon className="w-4 h-4 mr-2 text-teal-400 group-hover:text-teal-300 flex-shrink-0" />
        <span className="truncate">{detail}</span>
    </a>
);

const StarRating: React.FC<{ count: number }> = ({ count }) => (
    <div className="flex space-x-0.5">
        {[...Array(5)].map((_, i) => (
            <Star key={i} className={`w-4 h-4 ${i < count ? 'text-amber-400 fill-amber-400' : 'text-gray-700'}`} />
        ))}
    </div>
);


// --- Main Page Component ---
export default function HomePage() {
  return (
    // Academic-themed background: Light blue-gray for professional contrast
    <div className="min-h-screen bg-gray-50 text-gray-800 font-sans antialiased"> {/* Added bg-gray-50 for a subtle background */}
      <div className="max-w-6xl mx-auto shadow-2xl rounded-xl overflow-hidden my-8 lg:my-16 bg-white"> {/* Added bg-white to the main card */}
        
        {/* CV Grid Layout: Sidebar (30%) and Main Content (70%) */}
        <div className="grid grid-cols-1 lg:grid-cols-3">
          
          {/* ==================================================== */}
          {/* 1. SIDEBAR (Contact, Skills, Languages, Projects) */}
          {/* ==================================================== */}
          <aside className="lg:col-span-1 bg-gray-900 text-gray-100 p-8 space-y-10 border-r border-gray-800 animate-slide-in-left">
            
            {/* --- PERSONAL INFO / AVATAR --- */}
            <header className="text-center">
              {/* Avatar Placeholder */}
              <div className="w-24 h-24 mx-auto rounded-full bg-teal-600 border-4 border-teal-400 mb-4 flex items-center justify-center text-4xl font-bold shadow-lg">
                  <User className="w-12 h-12 text-white" /> {/* Using User icon for a cleaner look */}
              </div>
              <h1 className="text-3xl font-extrabold tracking-tight text-white">{personalData.name.toUpperCase()}</h1>
              <p className="text-sm font-light text-teal-400 mt-1">{personalData.title}</p>
            </header>

            {/* --- CONTACT --- */}
            <section>
                <h2 className="sidebar-heading">
                    <Mail className="sidebar-icon" /> Contact
                </h2>
                <div className="space-y-3">
                    <ContactItem icon={Mail} detail={personalData.email} href={`mailto:${personalData.email}`} />
                    <ContactItem icon={Phone} detail={personalData.mobile} href={`tel:${personalData.mobile}`} />
                    <ContactItem icon={MapPin} detail={personalData.address} href="#" />
                </div>
            </section>
            
            {/* --- SKILLS --- */}
            <section id="skills">
                <h2 className="sidebar-heading">
                    <Code className="sidebar-icon" /> Core Skills
                </h2>
                <div className="flex flex-wrap gap-2">
                    {coreSkills.map((skill, index) => (
                        <span key={skill} className="skill-badge animate-fade-in" style={{ animationDelay: `${0.1 + index * 0.05}s` }}>
                            {skill}
                        </span>
                    ))}
                </div>
            </section>

            {/* --- LANGUAGES --- */}
            <section>
                <h2 className="sidebar-heading">
                    <Terminal className="sidebar-icon" /> Languages
                </h2>
                <div className="space-y-2">
                    {languages.map((lang) => (
                        <div key={lang.name} className="flex justify-between items-center pr-2">
                            <span className="text-gray-300 font-medium">{lang.name.toUpperCase()}</span>
                            <StarRating count={lang.proficiency} />
                        </div>
                    ))}
                </div>
            </section>

            {/* --- PROJECTS / RESEARCH --- */}
            <section id="projects">
                <h2 className="sidebar-heading">
                    <Trophy className="sidebar-icon" /> Research Work
                </h2>
                <div className="space-y-3">
                    {projects.map((proj, index) => (
                         <div key={index} className="project-card">
                            <p className="font-medium text-gray-200">{proj.name}</p>
                            <p className="text-xs text-amber-400 mt-0.5">{proj.type}</p>
                            <div className="flex gap-1 mt-1">
                                 {proj.tags.map(tag => (
                                     <span key={tag} className="text-xs px-1.5 py-0.5 bg-gray-700 text-gray-400 rounded-full">{tag}</span>
                                 ))}
                            </div>
                        </div>
                    ))}
                </div>
            </section>

          </aside>
          
          {/* ==================================================== */}
          {/* 2. MAIN CONTENT AREA (Objective, Experience, Education) */}
          {/* ==================================================== */}
          <main className="lg:col-span-2 p-8 space-y-12 animate-slide-in-right">
            
            {/* === 1. OBJECTIVE === */}
            <section id="objective" className="pt-24 -mt-24">
                <h2 className="main-heading">
                    <Zap className="main-icon" /> Objective
                </h2>
                <div className="summary-box">
                    <p className="text-gray-700 leading-relaxed italic">
                        To secure a challenging and rewarding teaching position where I can utilize my comprehensive academic knowledge in **Science and Molecular Biology** and my dedication to pedagogy to foster a deeper understanding of scientific concepts in students, thereby contributing to the provision of quality education.
                    </p>
                </div>
            </section>

            {/* --- HORIZONTAL LINE --- */}
            <div className="h-px bg-gray-200" />
            
            {/* === 2. PROFESSIONAL EXPERIENCE === */}
            <section id="experience" className="pt-24 -mt-24">
                <h2 className="main-heading">
                    <Briefcase className="main-icon" /> Professional Experience
                </h2>
                <div className="space-y-8">
                    {experienceTimeline.map((item, index) => (
                        <div key={index} className="experience-card">
                            <h3 className="text-xl font-bold text-gray-800">{item.title} - {item.institution}</h3>
                            <p className="text-sm text-teal-600 italic mb-2">{item.period}</p>
                            <ul className="list-disc list-inside text-gray-600 space-y-1 ml-2">
                                {item.details.map((detail, idx) => (
                                    <li key={idx} className="text-sm">{detail}</li>
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
                <h2 className="main-heading">
                    <GraduationCap className="main-icon" /> Education & Qualifications
                </h2>
                <Timeline data={educationTimeline} />
            </section>
            
            {/* === 4. CERTIFICATIONS & AWARDS === */}
            <section>
                 <h2 className="main-heading">
                    <Trophy className="main-icon" /> Awards & Certifications
                </h2>
                 <ul className="list-disc list-inside text-gray-600 space-y-2 ml-4 p-4 border rounded-md hover:shadow-sm transition-shadow">
                    <li className="text-base hover:text-teal-600 transition-colors">Molecular Biology and Biochemistry Technique Certificate</li>
                    <li className="text-base hover:text-teal-600 transition-colors">Teaching Training Certificate</li>
                </ul>
            </section>

          </main>
        </div>
        
        {/* --- CV FOOTER --- */}
        <footer className="bg-gray-900 py-4 text-center text-gray-600 border-t border-gray-800">
            <p className="text-sm">Arfa Sultan Professional Portfolio | {new Date().getFullYear()}</p>
        </footer>

      </div>

      {/* Tailwind Style Declarations & Keyframe Animations */}
      <style jsx global>{`
        /* Sidebar Styles */
        .sidebar-heading {
          @apply text-lg font-bold mb-3 border-b border-gray-700 pb-1 flex items-center text-teal-400 tracking-wider;
        }
        .sidebar-icon {
          @apply w-5 h-5 mr-2 text-teal-400 flex-shrink-0;
        }
        .skill-badge {
          @apply px-3 py-1 bg-gray-700 text-teal-300 text-xs font-medium rounded-md shadow-md transition-all duration-200 transform hover:scale-[1.05] hover:bg-gray-600 cursor-pointer;
        }
        .project-card {
            @apply border-l-2 border-amber-500 pl-3 p-2 transition-transform duration-200 hover:translate-x-1;
        }

        /* Main Content Styles */
        .main-heading {
          @apply text-3xl font-extrabold mb-6 border-b-4 border-indigo-500/50 pb-2 flex items-center text-gray-900 tracking-tight; /* Increased contrast to gray-900 */
        }
        .main-icon {
          @apply w-7 h-7 mr-3 text-indigo-600 flex-shrink-0;
        }
        .summary-box {
            @apply border-l-4 border-indigo-400 pl-4 bg-indigo-50 p-4 rounded-md shadow-sm; /* Added shadow for depth */
        }
        .experience-card {
            @apply border-l-4 border-gray-300 pl-4 p-3 rounded-lg transition-all duration-300 hover:border-teal-500 hover:bg-teal-50/50 transform hover:scale-[1.005] cursor-pointer; /* Enhanced hover effect */
        }

        /* --- Animations --- */
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


// --- Timeline Utility Component (Refined) ---
interface TimelineItem {
    year: string;
    institution: string;
    degree: string;
    detail: string;
}

const Timeline: React.FC<{ data: TimelineItem[] }> = ({ data }) => (
  <div className="relative border-l-4 border-indigo-400 ml-4">
    {data.map((item, index) => (
      <div key={index} className="mb-8 ml-6 relative p-3 bg-white border border-gray-200 rounded-lg shadow-md transition-shadow duration-300 hover:shadow-lg transform hover:scale-[1.01]">
        {/* Timeline Dot (Stylized) */}
        <div className="absolute -left-[37px] top-1 w-5 h-5 bg-teal-500 rounded-full border-4 border-white shadow-lg"></div>
        
        <p className="text-sm font-semibold text-indigo-600">{item.year}</p>
        <h3 className="text-xl font-bold text-gray-800 mt-1">{item.degree}</h3>
        <p className="text-base text-gray-600 italic mb-1">{item.institution}</p>
        <p className="text-sm text-gray-500">{item.detail}</p>
      </div>
    ))}
  </div>
);