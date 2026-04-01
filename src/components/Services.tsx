import React from 'react';
import {
  FaMobileAlt,
  FaLaptop,
  FaMobile ,
  FaBatteryFull,
  FaWater,
  FaPlug,
} from 'react-icons/fa';

interface Service {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const services: Service[] = [
  {
    icon: <FaMobileAlt />,
    title: 'Mobile Repair',
    description: 'iPhone, Android, and all brands. Hardware and software fixes.',
  },
  {
    icon: <FaLaptop />,
    title: 'Laptop Repair',
    description: 'MacBook, Windows, and all models. Fast diagnostics and repair.',
  },
  {
    icon: <FaMobile />,
    title: 'Screen Replacement',
    description: 'Genuine screens with perfect color and touch sensitivity.',
  },
  {
    icon: <FaBatteryFull />,
    title: 'Battery Replacement',
    description: 'Extend your device life with premium battery replacements.',
  },
  {
    icon: <FaWater />,
    title: 'Water Damage',
    description: 'Professional recovery without data loss. All devices welcome.',
  },
  {
    icon: <FaPlug />,
    title: 'Charging Port Fix',
    description: 'Fast replacement for broken or loose charging ports.',
  },
];

export const Services: React.FC<{ onWhatsAppClick?: () => void }> = ({ onWhatsAppClick }) => {
  return (
    <section id="services" className="w-full py-12 md:py-32 px-4 md:px-8 bg-neutral-50 scroll-section-trigger">
      <div className="max-w-6xl mx-auto">
        
        {/* Title */}
        <div className="text-center mb-12 md:mb-20">
          <h2 className="font-display text-neutral-900 mb-4 text-2xl md:text-4xl">
            Our Services
          </h2>
          <p className="text-sm md:text-lg text-neutral-600 font-light max-w-2xl mx-auto">
            Everything your device needs. Professional, transparent, and fast.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className="p-6 md:p-8 rounded-lg md:rounded-2xl bg-white shadow-elegant border border-neutral-200 group hover:shadow-xl transition-all duration-300"
            >
              
              {/* Icon */}
              <div className="w-12 md:w-14 h-12 md:h-14 rounded-full bg-gradient-to-br from-brand-red to-red-600 flex items-center justify-center mb-4 md:mb-6 text-base md:text-xl text-white group-hover:scale-110 transition-transform duration-300">
                {service.icon}
              </div>

              {/* Title */}
              <h3 className="font-display text-brand-navy mb-2 md:mb-3 text-base md:text-lg">
                {service.title}
              </h3>

              {/* Description */}
              <p className="text-neutral-600 leading-relaxed text-xs md:text-sm font-light mb-4 md:mb-6">
                {service.description}
              </p>

              {/* CTA */}
              <button 
                onClick={onWhatsAppClick}
                className="text-brand-red font-medium hover:text-red-600 text-xs md:text-sm flex items-center gap-2 group/btn transition-all">
                Get Started
                <span className="group-hover/btn:translate-x-1 transition-transform">→</span>
              </button>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-12 md:mt-20 text-center p-6 md:p-12 bg-gradient-to-r from-neutral-900/5 to-brand-red/5 rounded-lg md:rounded-2xl border border-neutral-200">
          <p className="text-neutral-700 mb-4 md:mb-6 font-light text-sm md:text-lg">
            Don't see your issue? We handle almost everything. Get in touch.
          </p>
          <button 
            onClick={onWhatsAppClick}
            className="px-10 py-4 bg-brand-red hover:bg-red-600 text-white font-display font-semibold rounded-lg shadow-elevated hover:shadow-premium transition-all duration-300 hover:scale-105">
            Message Us on WhatsApp
          </button>
        </div>
      </div>
    </section>
  );
};