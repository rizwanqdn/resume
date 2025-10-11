// components/Navbar.tsx
"use client";

import React, { useState } from 'react';
import { Menu, X } from 'lucide-react'; 

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  // Defined color classes for the new light/minimalist theme
  const accentColor = "text-teal-600"; // Primary accent color
  const linkColor = "text-gray-700"; // Default link color
  const hoverAccentColor = "hover:text-teal-600"; // Link hover color
  const hoverBgColor = "hover:bg-teal-50"; // Subtle hover background

  // Custom component for the internal anchor links (using native <a>)
  const NavAnchor: React.FC<{ href: string; children: React.ReactNode }> = ({ href, children }) => (
    <a 
      href={href} 
      onClick={closeMenu} 
      // Minimalist desktop link style
      className={`${linkColor} ${hoverAccentColor} text-base font-semibold transition-colors duration-200 px-3 py-2 rounded-lg ${hoverBgColor} border-b-2 border-transparent hover:border-teal-500`}
    >
      {children}
    </a>
  );
  
  // Custom component for mobile link style
  const NavAnchorMobile: React.FC<{ href: string; children: React.ReactNode }> = ({ href, children }) => (
    <a 
      href={href} 
      onClick={closeMenu} 
      className={`block text-gray-700 hover:text-teal-600 hover:bg-gray-100 px-4 py-2 rounded-md text-base font-medium transition-colors duration-200`}
    >
      {children}
    </a>
  );

  return (
    // Updated background to white, added subtle border for separation
    <nav className="bg-white shadow-lg p-4 sticky top-0 z-50 transition-all duration-300 ease-in-out border-b border-gray-100">
      <div className="container mx-auto flex items-center justify-between max-w-7xl">
        
        {/* --- 1. Logo/Name (Left) --- */}
        <a 
          href="#objective" 
          className={`text-2xl font-bold ${accentColor} transition-colors duration-200 tracking-wider flex-shrink-0`}
          onClick={closeMenu}
        >
          <span className="text-gray-900">Arfa Sultan </span>
          <span className={accentColor}>CV</span>
        </a>

        {/* --- 2. Desktop Navigation Links (Centered) --- */}
        {/* We use ml-auto/mr-auto to center the block of links in the middle */}
        <div className="hidden md:flex space-x-2 md:space-x-4 flex-grow justify-center">
          <div className="flex space-x-4">
            <NavAnchor href="#objective">Objective</NavAnchor>
            <NavAnchor href="#education">Education</NavAnchor>
            <NavAnchor href="#experience">Experience</NavAnchor>
            <NavAnchor href="#skills">Skills</NavAnchor>
            <NavAnchor href="#projects">Projects</NavAnchor>
          </div>
        </div>

        {/* --- 3. Contact Button (Right) --- */}
        <div className="hidden md:flex flex-shrink-0">
          <a 
            href="mailto:arfasultan1998@gmail.com" 
            className={`px-4 py-2 border border-teal-600 ${accentColor} rounded-full font-semibold transition-all duration-200 hover:bg-teal-600 hover:text-white`}
          >
            Email Me
          </a>
        </div>

        {/* Mobile Menu Button (Right) */}
        <div className="md:hidden flex items-center">
          <button onClick={toggleMenu} className={`text-gray-800 hover:text-teal-600 focus:outline-none focus:ring-2 focus:ring-teal-500 rounded-md p-2`}>
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
          <NavAnchorMobile href="#objective">Objective</NavAnchorMobile>
          <NavAnchorMobile href="#education">Education</NavAnchorMobile>
          <NavAnchorMobile href="#experience">Experience</NavAnchorMobile>
          <NavAnchorMobile href="#skills">Skills</NavAnchorMobile>
          <NavAnchorMobile href="#projects">Projects</NavAnchorMobile>
          <a href="mailto:arfasultan1998@gmail.com" onClick={closeMenu} className={`block text-gray-700 hover:text-teal-600 hover:bg-gray-100 px-4 py-2 rounded-md text-base font-medium transition-colors duration-200`}>
            Email Me
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;