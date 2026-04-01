import React from 'react';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full bg-black text-white py-16 px-4 entrance-fade">
      <div className="max-w-6xl mx-auto">


        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div>
                    {/* Logo at top */}
        <div className="mb-4 pb-4 border-b border-gray-800 entrance-scale">
          <img
            src="/logo-black.jpeg"
            alt="GadgetRestore Logo"
            className="h-10 md:h-12 w-auto object-contain transition-transform hover:scale-110 duration-300"
          />
        </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              Mobile repair you can trust. Fast. Transparent. Professional.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold mb-4 text-white">Services</h4>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li><a href="#services" className="hover:text-white transition duration-300 hover:translate-x-1">Mobile Repair</a></li>
              <li><a href="#services" className="hover:text-white transition duration-300 hover:translate-x-1">Laptop Repair</a></li>
              <li><a href="#services" className="hover:text-white transition duration-300 hover:translate-x-1">Screen Fix</a></li>
              <li><a href="#services" className="hover:text-white transition duration-300 hover:translate-x-1">Battery</a></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-bold mb-4 text-white">Company</h4>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li><a href="#" className="hover:text-white transition duration-300 hover:translate-x-1">About Us</a></li>
              <li><a href="#" className="hover:text-white transition duration-300 hover:translate-x-1">Careers</a></li>
              <li><a href="#" className="hover:text-white transition duration-300 hover:translate-x-1">Blog</a></li>
              <li><a href="#" className="hover:text-white transition duration-300 hover:translate-x-1">Contact</a></li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="font-bold mb-4 text-white">Legal</h4>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li><a href="#" className="hover:text-white transition duration-300 hover:translate-x-1">Privacy</a></li>
              <li><a href="#" className="hover:text-white transition duration-300 hover:translate-x-1">Terms</a></li>
              <li><a href="#" className="hover:text-white transition duration-300 hover:translate-x-1">Warranty</a></li>
              <li><a href="#" className="hover:text-white transition duration-300 hover:translate-x-1">Disclaimer</a></li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-800 my-8"></div>

        {/* Bottom */}
        <div className="flex flex-col md:flex-row justify-between items-center text-gray-400 text-sm">
          <p>&copy; {currentYear} GadgetRestore. All rights reserved.</p>
          <div className="flex gap-4 mt-4 md:mt-0">
            <a href="#" className="hover:text-white transition">Facebook</a>
            <a href="#" className="hover:text-white transition">Instagram</a>
          </div>
        </div>
      </div>
    </footer>
  );
};
