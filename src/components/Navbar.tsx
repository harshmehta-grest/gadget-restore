import React from 'react';

export const Navbar: React.FC = () => {
  return (
    <nav className="w-full bg-white border-b border-neutral-100 px-4 md:px-6 py-3 md:py-4 sticky top-0 z-40 shadow-sm entrance-fade">
      <div className="max-w-7xl mx-auto">
        <img
          src="/logo.jpeg"
          alt="GadgetRestore Logo"
          className="h-8 md:h-10 w-auto object-contain transition-transform hover:scale-105 duration-300"
        />
      </div>
    </nav>
  );
};
