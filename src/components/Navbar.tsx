import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';

interface NavbarProps {
  onCallClick?: () => void;
  onWhatsAppClick?: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onCallClick, onWhatsAppClick }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navLinks = [
    { label: 'Services', href: '#services' },
    { label: 'How It Works', href: '#how-it-works' },
    { label: 'Why Us', href: '#trust' },
    { label: 'Reviews', href: '#testimonials' },
  ];

  const closeMobileMenu = () => setIsMobileMenuOpen(false);

  return (
    <nav className="w-full bg-white border-b border-neutral-100 px-4 md:px-6 py-3 md:py-4 sticky top-0 z-40 shadow-sm entrance-fade">
      <div className="max-w-7xl mx-auto flex items-center justify-between gap-4">
        {/* Logo */}
        <img
          src="/logo.jpeg"
          alt="GadgetRestore Logo"
          className="h-8 md:h-10 w-auto object-contain transition-transform hover:scale-105 duration-300"
        />
        
        {/* Nav Links - Hidden on mobile */}
        <div className="hidden md:flex items-center gap-6 flex-1 px-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-[13px] font-medium text-black hover:text-[#EB2652] transition-colors duration-300"
            >
              {link.label}
            </a>
          ))}
        </div>
        
        {/* Nav Buttons */}
        <div className="hidden md:flex items-center gap-2 md:gap-3">
          <button
            onClick={onWhatsAppClick}
            className="px-3 md:px-5 py-2 md:py-2.5 text-[11px] md:text-[12px] font-semibold text-black border border-black rounded hover:border-[#EB2652] hover:text-[#EB2652] transition-all duration-300"
          >
            Contact Us
          </button>
          <button
            onClick={onCallClick}
            className="px-3 md:px-5 py-2 md:py-2.5 bg-[#EB2652] text-white text-[11px] md:text-[12px] font-semibold rounded hover:bg-[#c91f44] transition-all duration-300"
          >
            Book Now
          </button>
        </div>

        {/* Hamburger Menu - Mobile only */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="md:hidden p-2 text-black hover:text-[#EB2652] transition-colors"
          aria-label="Toggle mobile menu"
        >
          {isMobileMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden mt-4 pb-4 border-t border-neutral-100 pt-4">
          {/* Mobile Nav Links */}
          <div className="flex flex-col gap-3 mb-4">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={closeMobileMenu}
                className="text-[13px] font-medium text-black hover:text-[#EB2652] transition-colors duration-300 py-2"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Mobile Buttons */}
          <div className="flex flex-col gap-2">
            <button
              onClick={() => {
                onWhatsAppClick?.();
                closeMobileMenu();
              }}
              className="px-4 py-2.5 text-[12px] font-semibold text-black border border-black rounded hover:border-[#EB2652] hover:text-[#EB2652] transition-all duration-300 w-full"
            >
              Contact Us
            </button>
            <button
              onClick={() => {
                onCallClick?.();
                closeMobileMenu();
              }}
              className="px-4 py-2.5 bg-[#EB2652] text-white text-[12px] font-semibold rounded hover:bg-[#c91f44] transition-all duration-300 w-full"
            >
              Book Now
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};
