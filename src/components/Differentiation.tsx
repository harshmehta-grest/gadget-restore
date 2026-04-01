import React from 'react';
import { FaTag, FaShieldAlt, FaClipboardList, FaTruck } from 'react-icons/fa';

interface Differentiator {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const differentiators: Differentiator[] = [
  {
    icon: <FaTag />,
    title: 'Transparent Pricing',
    description: 'Know the exact cost upfront with zero surprises.',
  },
  {
    icon: <FaShieldAlt />,
    title: 'Safe & Secure',
    description: 'Certified handling and data privacy guaranteed.',
  },
  {
    icon: <FaClipboardList />,
    title: 'Certified Technicians',
    description: 'Trained experts who know your device inside out.',
  },
  {
    icon: <FaTruck />,
    title: 'Free Pickup & Delivery',
    description: 'Convenient home service, your schedule.',
  },
];

const accentColor = (i: number) => (i % 2 === 0 ? '#EB2652' : '#2D2E82');

export const Differentiation: React.FC = () => {
  return (
    <section
      className="w-full py-12 md:py-24 px-4 md:px-12 bg-white scroll-section-trigger"
      style={{ fontFamily: "'DM Sans', sans-serif" }}
    >
      <div className="max-w-[1100px] mx-auto">

        {/* Header */}
        <div className="mb-8 md:mb-18">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 md:gap-8">
            <h2
              className="text-black leading-[0.95] tracking-wide"
              style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: 'clamp(32px, 8vw, 72px)' }}
            >
              WHY WE'RE
              <br />
              <span className="text-[#EB2652]">DIFFERENT</span>
            </h2>
            <p className="text-[13px] md:text-[15px] font-light text-[rgba(7, 7, 7, 0.99)] leading-relaxed max-w-[360px]">
              Built for trust, designed for simplicity. Repair services that put your peace of mind first.
            </p>
          </div>
        </div>

        {/* Cards — tight grid separated by 2px gaps */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-[2px] mb-[2px]">
          {differentiators.map((item, i) => (
            <div
              key={i}
              className="bg-white p-6 md:p-12 relative transition-colors duration-200 group"
              style={{ borderTop: `3px solid ${accentColor(i)}` }}
            >
              {/* Icon */}
              <div className="text-xl md:text-2xl mb-4 md:mb-7" style={{ color: accentColor(i) }}>
                {item.icon}
              </div>

              {/* Title */}
              <h3 className="text-[15px] md:text-[16px] font-bold text-black mb-2 md:mb-4 pr-8">
                {item.title}
              </h3>

              {/* Description */}
              <p className="text-[13px] md:text-[14px] font-light text-[rgba(0, 0, 0, 0.7)] leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};