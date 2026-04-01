import React from 'react';
import { FaClock, FaTruck, FaTools, FaCheckCircle } from 'react-icons/fa';

interface Step {
  number: number;
  title: string;
  description: string;
  icon: React.ReactNode;
}

const steps: Step[] = [
  {
    number: 1,
    title: 'Book in Seconds',
    description: 'Tell us what\'s wrong. WhatsApp or form—your choice.',
    icon: <FaClock />,
  },
  {
    number: 2,
    title: 'We Pick Up',
    description: 'Doorstep pickup within 1 hour. No extra charge.',
    icon: <FaTruck />,
  },
  {
    number: 3,
    title: 'Expert Repair',
    description: 'Real technicians, genuine parts, and full diagnostics.',
    icon: <FaTools />,
  },
  {
    number: 4,
    title: 'Safe Delivery',
    description: 'Device returned same day with warranty on replacement parts.',
    icon: <FaCheckCircle />,
  },
];

export const HowItWorks: React.FC = () => {
  return (
    <section className="w-full py-12 md:py-32 px-4 md:px-8 bg-neutral-50 scroll-section-trigger">
      <div className="max-w-6xl mx-auto">
        {/* Section title */}
        <div className="text-center mb-12 md:mb-24">
          <h2 className="font-display text-neutral-900 mb-4 text-2xl md:text-4xl">
            How It Works
          </h2>
          <p className="text-sm md:text-lg text-neutral-600 font-light max-w-2xl mx-auto">
            Simple. Transparent. Fast. Get your device repaired in four straightforward steps.
          </p>
        </div>

        {/* Steps */}
        <div className="relative">
          {/* Vertical line connector - hidden on mobile */}
          <div className="hidden md:block absolute left-12 top-0 bottom-0 w-0.5 bg-gradient-to-b from-brand-red to-brand-navy opacity-20"></div>

          <div className="space-y-8 md:space-y-12">
            {steps.map((step, index) => (
              <div key={index} className="flex gap-4 md:gap-8 items-start animate-fade-up" style={{ animationDelay: `${index * 0.1}s` }}>
                {/* Step number indicator */}
                <div className="flex-shrink-0 relative z-10">
                  <div className="w-14 md:w-24 h-14 md:h-24 rounded-full bg-gradient-to-br from-brand-red to-red-600 text-white flex items-center justify-center font-display font-bold text-xl md:text-3xl shadow-elevated hover:shadow-premium transition-all duration-300 hover:scale-110">
                    {step.number}
                  </div>
                  {/* Icon overlay */}
                  <div className="absolute inset-0 flex items-center justify-center text-white text-base md:text-2xl opacity-0 hover:opacity-100 transition-opacity duration-300 rounded-full">
                    {step.icon}
                  </div>
                </div>

                {/* Content */}
                <div className="flex-grow pt-2 md:pt-6">
                  <h3 className="font-display text-neutral-900 mb-2 md:mb-3 text-base md:text-xl">
                    {step.title}
                  </h3>
                  <p className="text-neutral-600 text-sm md:text-lg font-light leading-relaxed">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
