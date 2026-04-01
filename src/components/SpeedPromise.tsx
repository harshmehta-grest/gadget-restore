import React from 'react';
import { FaClock, FaTools, FaTruck } from 'react-icons/fa';

const metrics = [
  { value: '1',   unit: 'HOUR',  label: 'Doorstep Pickup', icon: <FaTruck />, color: '#2D2E82' },
  { value: '50',  unit: 'K+',  label: 'DEVICES Picked Up & Repaired', icon: <FaTools />, color: '#5c5a5a' },
  { value: 'SAME', unit: 'DAY',  label: 'Doorstep Delivery', icon: <FaClock />, color: '#2D2E82' },
];

export const SpeedPromise: React.FC<{ onCallClick?: () => void }> = ({ onCallClick }) => {
  return (
    <section
      className="w-full py-12 md:py-24 px-4 md:px-12 bg-white relative overflow-hidden scroll-section-trigger"
      style={{ fontFamily: "'DM Sans', sans-serif" }}
    >
      {/* Big faded background word */}
      <div
        className="absolute top-[-20px] left-[-10px] text-[rgba(255,255,255,0.03)] select-none pointer-events-none leading-none text-4xl md:text-[320px]"
        style={{ fontFamily: "'Bebas Neue', sans-serif", letterSpacing: '-10px' }}
      >
        FAST
      </div>

      {/* Vertical red accent rule */}
      <div className="hidden md:block absolute top-0 right-20 w-[3px] h-full bg-[#EB2652] opacity-40" />

      <div className="max-w-[1100px] mx-auto relative z-10">

        {/* Header */}
        <div className="mb-8 md:mb-18">
          <p className="text-[#EB2652] text-[11px] font-semibold tracking-[4px] uppercase mb-4">
            Speed You Can Count On
          </p>
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 md:gap-8">
            <h2
              className="text-black leading-[0.95] tracking-wide"
              style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: 'clamp(32px, 8vw, 72px)' }}
            >
              SAME-DAY
              <br />
              <span className="text-[#EB2652]">DEVICE REPAIR</span>
            </h2>
            <p className="text-[13px] md:text-[15px] font-light text-black leading-relaxed max-w-[360px]">
              Most repairs completed the same day — lightning-fast without compromising quality or data safety.
            </p>
          </div>
        </div>

        {/* Metric blocks */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-[2px] mb-[2px]">
          {metrics.map((m, i) => (
            <div
              key={i}
              className="bg-[rgba(247, 247, 247, 0.25)] transition-colors duration-200 p-6 md:p-14 relative"
              style={{ borderTop: `3px solid ${m.color}` }}
            >
              {/* Icon */}
              <div className="text-2xl md:text-4xl mb-3 md:mb-4" style={{ color: m.color }}>
                {m.icon}
              </div>
              
              <div
                className="leading-none mb-1"
                style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: 'clamp(48px, 8vw, 80px)', color: m.color, letterSpacing: '2px' }}
              >
                {m.value}
                <span style={{ fontSize: 'clamp(18px, 4vw, 32px)', opacity: 0.7 }}>{m.unit}</span>
              </div>
              <p className="text-[11px] md:text-[13px] font-light text-black tracking-[1px] uppercase">
                {m.label}
              </p>
              {/* Bottom accent bar */}
              <div
                className="absolute bottom-0 left-0 h-[2px] w-8 md:w-10"
                style={{ background: m.color }}
              />
            </div>
          ))}
        </div>

        {/* Bottom statement bar */}
        <div className="bg-[#0a0a0a] px-4 md:px-14 py-6 md:py-10 flex flex-col md:flex-row md:items-center md:justify-between gap-4 md:gap-6">
          <p
            className="text-white leading-tight text-sm md:text-base"
            style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: 'clamp(16px, 2vw, 32px)', letterSpacing: '2px' }}
          >
            YOUR DEVICE IS READY.{' '}
            <span className="text-[#EB2652]">WE'LL DELIVER IT BACK.</span>
          </p>
          <button 
            onClick={onCallClick}
            className="px-6 md:px-8 py-2.5 md:py-3.5 bg-[#EB2652] text-white text-[11px] md:text-[12px] font-semibold tracking-[2px] uppercase border-none cursor-pointer hover:bg-[#c91f44] transition-colors flex-shrink-0 whitespace-nowrap">
            Book Now →
          </button>
        </div>

      </div>
    </section>
  );
};