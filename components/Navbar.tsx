// components/Navbar.tsx
"use client";

import React, { useState, useEffect } from 'react';
import { Menu, X, Mail } from 'lucide-react'; 

// FIX 2: Move the static array OUTSIDE the component to prevent re-creation on every render.
const SECTIONS = ['objective', 'education', 'experience', 'skills', 'projects'];

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('objective'); 

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  // --- Cool Slate & Cyan Palette ---
  // FIX 1: Removed 'accentColor' variable as it was unused.
  const linkColor = "text-gray-700"; 
  const hoverAccentColor = "hover:text-cyan-600"; 
  const hoverBgColor = "hover:bg-cyan-50"; 
  const activeBorder = "border-b-4 border-cyan-500"; 

  // 🔥 NEW HANDLER: Forces the active state when a link is clicked
  const handleAnchorClick = (sectionId: string) => {
    setActiveSection(sectionId); 
    closeMenu();
  };


  // --- EFFECT: Corrected Scroll-Spy Logic for manual scrolling ---
  useEffect(() => {
    const handleScroll = () => {
      let currentActive = 'objective'; 
      let maxScrollDepth = -Infinity; 

      // Use the static SECTIONS array
      for (const sectionId of SECTIONS) {
        const section = document.getElementById(sectionId);
        
        if (section) {
          const rect = section.getBoundingClientRect();
          
          // Condition 1: Check if the section top has scrolled up past the 200px threshold.
          if (rect.top <= 200) { 
            
            // Condition 2: Select the section whose 'rect.top' is the largest (closest to 0).
            if (rect.top > maxScrollDepth) { 
                maxScrollDepth = rect.top;
                currentActive = sectionId;
            }
          }
        }
      }
      
      // Update the state only if it has changed due to manual scroll
      if (currentActive !== activeSection) {
        setActiveSection(currentActive);
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial check on load

    return () => window.removeEventListener('scroll', handleScroll);
    // FIX 2: Removed 'sections' from deps, which is now SECTIONS (static)
  }, [activeSection]); 
  
  // Custom component for the internal anchor links (Desktop)
  const NavAnchor: React.FC<{ href: string; children: React.ReactNode }> = ({ href, children }) => {
    const sectionId = href.substring(1); 
    const isActive = activeSection === sectionId;

    return (
      <a 
        href={href} 
        onClick={() => handleAnchorClick(sectionId)} 
        className={`${linkColor} ${hoverAccentColor} text-base font-semibold transition-all duration-300 px-3 py-2 rounded-lg ${hoverBgColor} 
        ${isActive ? activeBorder + ' text-cyan-600' : 'border-b-2 border-transparent'}`}
      >
        {children}
      </a>
    );
  };
  
  // Custom component for mobile link style
  const NavAnchorMobile: React.FC<{ href: string; children: React.ReactNode, hrefId: string }> = ({ href, children, hrefId }) => (
    <a 
      href={href} 
      onClick={() => handleAnchorClick(hrefId)} 
      className={`block px-4 py-2 rounded-md text-base font-medium transition-colors duration-200 
        ${activeSection === hrefId ? 'text-white bg-cyan-600 shadow-md' : 'text-gray-700 hover:text-cyan-600 hover:bg-gray-100'}`}
    >
      {children}
    </a>
  );

  return (
    // Navbar design is clean and modern, sticking to the top
    <nav className="bg-white shadow-lg p-4 sticky top-0 z-50 transition-all duration-300 ease-in-out border-b border-gray-100">
      <div className="container mx-auto flex items-center justify-between max-w-7xl">
        
        {/* --- 1. Logo/Name (Left) --- */}
        <a 
          href="#objective" 
          className={`text-2xl font-extrabold text-slate-800 transition-colors duration-200 tracking-wider flex-shrink-0`}
          onClick={() => handleAnchorClick('objective')}
        >
          Arfa Sultan <span className="text-cyan-600">CV</span>
        </a>

        {/* --- 2. Desktop Navigation Links (Centered) --- */}
        <div className="hidden md:flex space-x-2 md:space-x-4 flex-grow justify-center">
          <div className="flex space-x-4">
            <NavAnchor href="#objective">Objective</NavAnchor>
            <NavAnchor href="#education">Education</NavAnchor>
            <NavAnchor href="#experience">Experience</NavAnchor>
            <NavAnchor href="#skills">Skills</NavAnchor>
            <NavAnchor href="#projects">Research</NavAnchor>
          </div>
        </div>

        {/* --- 3. Contact Button (Right) --- */}
        <div className="hidden md:flex flex-shrink-0">
          <a 
            href="mailto:arfasultan1998@gmail.com" 
            className={`px-4 py-2 border border-cyan-600 text-cyan-600 rounded-full font-semibold transition-all duration-200 hover:bg-cyan-600 hover:text-white flex items-center shadow-sm hover:shadow-lg`}
          >
            <Mail className="w-5 h-5 mr-2" /> Email Me
          </a>
        </div>

        {/* Mobile Menu Button (Right) */}
        <div className="md:hidden flex items-center">
          <button onClick={toggleMenu} className={`text-white bg-gray-700 hover:text-cyan-600 focus:outline-none focus:ring-2 border-1 rounded-md p-2`}>
            {isOpen ? (
                <X className="w-8 h-8" /> 
              ) : (
                <Menu className="w-8 h-8" /> 
              )}
          </button>
        </div>
      </div>

      {/* Mobile Menu Content (Dropdown) */}
      <div className={`md:hidden ${isOpen ? 'block' : 'hidden'} bg-gray-50 mt-4 mx-auto rounded-lg shadow-inner border border-gray-200`}>
        <div className="space-y-1 px-4 py-3">
          {/* Using the handleAnchorClick via NavAnchorMobile */}
          <NavAnchorMobile href="#objective" hrefId="objective">Objective</NavAnchorMobile>
          <NavAnchorMobile href="#education" hrefId="education">Education</NavAnchorMobile>
          <NavAnchorMobile href="#experience" hrefId="experience">Experience</NavAnchorMobile>
          <NavAnchorMobile href="#skills" hrefId="skills">Skills</NavAnchorMobile>
          <NavAnchorMobile href="#projects" hrefId="projects">Research</NavAnchorMobile>
          <a href="mailto:arfasultan1998@gmail.com" onClick={closeMenu} className={`flex items-center text-gray-700 hover:text-cyan-600 hover:bg-gray-100 px-4 py-2 rounded-md text-base font-medium transition-colors duration-200`}>
            <Mail className="w-5 h-5 mr-2" /> Email Me
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;