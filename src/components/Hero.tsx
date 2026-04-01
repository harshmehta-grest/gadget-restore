import React from 'react';

interface HeroProps {
  onWhatsAppClick: () => void;
  onCallClick: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onWhatsAppClick, onCallClick }) => {
  return (
    <section
      style={{ fontFamily: "'DM Sans', sans-serif" }}
      className="w-full max-h-screen grid grid-cols-1 md:grid-cols-2 bg-white overflow-hidden relative "
    >
      {/* LEFT */}
      <div className="bg-white flex flex-col justify-center px-2 md:px-6 py-10 md:py-15 relative z-10">
        {/* Red vertical rule - hidden on mobile */}
        <div className="hidden md:block absolute top-0 right-0 w-[3px] h-full bg-[#EB2652]" />

        <p className="text-[#EB2652] text-[9px] md:text-[11px] font-semibold tracking-[4px] uppercase mb-4 md:mb-6 entrance-fade">
          Certified Repair Specialists
        </p>

        <h1
          className="text-black mb-4 md:mb-7 leading-[0.95] tracking-wide entrance-slide-left"
          style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: 'clamp(36px, 2.5vw, 92px)' }}
        >
          Why Choose Us 
        </h1>

        <p className="text-black text-left font-light text-[13px] md:text-[15px] leading-relaxed max-w-[380px] mb-6 md:mb-10 entrance-slide-left" style={{ animationDelay: '0.1s' }}>
         We provide reliable, fast, and professional repair services for mobiles, laptops, and tablets across Delhi & Gurgaon. Trusted by thousands of satisfied customers, we focus on quality, convenience, and complete transparency.
        </p>

        {/* Badges */}
        <div className="flex flex-wrap gap-2 md:gap-2.5 mb-8 md:mb-11">
          {['1-hour Pickup', 'Genuine Parts', 'High Tech Repair Labs'].map((b, i) => (
            <span
              key={b}
              className="px-3 md:px-4 py-1 md:py-1.5 border border-black rounded-full text-[10px] md:text-[12px] font-medium text-black tracking-[0.5px] whitespace-nowrap entrance-scale transition-transform hover:scale-105 duration-300"
              style={{ animationDelay: `${0.2 + i * 0.1}s` }}
            >
              {b}
            </span>
          ))}
        </div>

        {/* CTAs */}
        <div className="flex flex-col md:flex-row items-stretch md:items-center gap-2 md:gap-3.5 mb-4 md:mb-8 entrance-scale" style={{ animationDelay: '0.4s' }}>
          <button
            onClick={onWhatsAppClick}
            className="inline-flex items-center justify-center gap-2 md:gap-2.5 px-4 md:px-8 py-3 md:py-4 bg-[#EB2652] text-white text-[11px] md:text-[13px] font-semibold tracking-widest uppercase hover:bg-[#c91f44] transition-all duration-300 hover:shadow-lg active:scale-95"
          >
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5">
              <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013 6.18A2 2 0 015 4h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L9.09 11.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 18.92z" />
            </svg>
            <span className="hidden xs:inline">WhatsApp Now</span>
            <span className="inline xs:hidden">WhatsApp</span>
          </button>
        </div>

        {/* Phone Number */}
        <div className="mb-3 md:mb-4 entrance-fade" style={{ animationDelay: '0.45s' }}>
          <p className="text-[12px] md:text-[13px] text-neutral-600 tracking-[0.5px] uppercase mb-2">
            Call Us Now
          </p>
          <a 
            href="tel:918800003785"
            className="text-[12px] md:text-[16px] font-display font-semibold text-black hover:text-[#EB2652] transition-colors duration-300"
            style={{ fontFamily: "'Bebas Neue', sans-serif" }}
          >
            +91 8800 003 785
          </a>
        </div>

        {/* Email */}
        <div className="mb-2 md:mb-4 entrance-fade" style={{ animationDelay: '0.47s' }}>
          <p className="text-[12px] md:text-[13px] text-neutral-600 tracking-[0.5px] uppercase mb-2">
            Email Us
          </p>
          <a 
            href="mailto:support@gadgetrestore.in"
            className="text-[14px] md:text-[16px] font-medium text-black hover:text-[#EB2652] transition-colors duration-300"
          >
            support@gadgetrestore.in
          </a>
        </div>

        {/* Stats */}
        <div className="flex flex-row xs:flex-row gap-6 md:gap-12 entrance-fade" style={{ animationDelay: '0.5s' }}>
          {[
            ['50K+', 'Devices Repaired'],
            ['4.9★', 'Avg. Rating'],
            ['2Hr', 'Avg. Turnaround'],
          ].map(([num, label]) => (
            <div key={label} className="transition-transform hover:scale-105 duration-300">
              <div
                className="text-[#EB2652] leading-none tracking-wide"
                style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: 'clamp(24px, 5vw, 34px)' }}
              >
                {num}
              </div>
              <div className="text-[10px] tracking-[1.5px] uppercase text-black mt-1">
                {label}
              </div>
            </div>
          ))}
        </div>

        <p className="text-[12px] text-black mt-4 tracking-[0.3px] entrance-fade" style={{ animationDelay: '0.6s' }}>
          No hidden charges · Same-day repair available · High Tech Repair Labs
        </p>
      </div>

      {/* RIGHT */}
      <div className="hidden md:flex bg-[#EB2652] relative flex items-center justify-center overflow-hidden">
        {/* Big decorative BG number */}
        <div
          className="absolute bottom-[-40px] right-[-20px] text-[rgba(255,255,255,0.04)] select-none leading-none"
          style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: '380px', letterSpacing: '-20px' }}
        >
          01
        </div>

        {/* Phone */}
        <div className="relative z-10 float-animation">
          <div
            className="relative overflow-hidden"
            style={{
              width: '200px',
              height: '390px',
              background: '#0a0a0a',
              borderRadius: '36px',
              border: '3px solid rgba(255,255,255,0.12)',
              boxShadow: '0 60px 100px rgba(0,0,0,0.6)',
            }}
          >
            {/* Screen */}
            <div
              className="absolute flex flex-col items-center justify-center gap-3"
              style={{
                inset: '10px',
                borderRadius: '28px',
                background: 'linear-gradient(160deg,#1a1a2e 0%,#0d0d1a 100%)',
              }}
            >
              <div
                className="flex items-center justify-center"
                style={{ width: '56px', height: '56px', borderRadius: '16px', background: '#EB2652' }}
              >
                <svg width="26" height="26" viewBox="0 0 24 24" fill="white">
                  <path d="M17 1.01L7 1c-1.1 0-2 .9-2 2v18c0 1.1.9 2 2 2h10c1.1 0 2-.9 2-2V3c0-1.1-.9-1.99-2-1.99zM17 19H7V5h10v14z" />
                </svg>
              </div>
              <p className="text-[8px] text-[rgba(255,255,255,0.4)] tracking-[2px] uppercase">
                Repair in progress
              </p>
              <p
                className="text-white tracking-[2px]"
                style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: '14px' }}
              >
                GADGET RESTORE 
              </p>
              <div
                className="overflow-hidden"
                style={{ width: '100px', height: '3px', background: 'rgba(255,255,255,0.1)', borderRadius: '2px' }}
              >
                <div style={{ height: '100%', width: '70%', background: '#EB2652', borderRadius: '2px' }} />
              </div>
            </div>
          </div>

          {/* Floating chips */}
          {[
            { label: 'Picked up',   color: '#22c55e', style: { top: '18%',  left: '-130px' } },
            { label: 'Diagnosing…', color: '#EB2652', style: { bottom: '28%', left: '-140px' } },
            { label: 'Est. 45 min', color: '#2D2E82', style: { top: '38%',  right: '-130px' } },
          ].map(({ label, color, style }) => (
            <div
              key={label}
              className="absolute flex items-center gap-2 text-white text-[12px] font-medium whitespace-nowrap"
              style={{
                ...style,
                background: '#0a0a0a',
                border: '1px solid rgba(255,255,255,0.1)',
                borderRadius: '12px',
                padding: '9px 14px',
                boxShadow: '0 8px 24px rgba(0,0,0,0.5)',
              }}
            >
              <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: color, flexShrink: 0 }} />
              {label}
            </div>
          ))}
        </div>

        {/* Vertical label */}
        <div
          className="absolute right-7 bottom-20 text-[rgba(255,255,255,0.18)] text-[10px] font-medium tracking-[4px] uppercase"
          style={{ writingMode: 'vertical-rl' }}
        >
          Premium Mobile Service
        </div>
      </div>
    </section>
  );
};