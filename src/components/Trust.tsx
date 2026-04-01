import React from 'react';
import { FaAward, FaCheckCircle, FaCertificate, FaShieldAlt, FaLock, FaHandshake } from 'react-icons/fa';

interface TrustFeature {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const features: TrustFeature[] = [
  {
    icon: <FaAward />,
    title: 'Warranty on replacement parts.',
    description: 'We stand behind our repairs with a warranty on all replacement parts.. ',
  },
  {
    icon: <FaCheckCircle />,
    title: 'Genuine Parts Only',
    description: 'No clones. No fakes. Every part is verified and original.',
  },
  {
    icon: <FaCertificate />,
    title: 'Certified Technicians',
    description: 'All technicians are certified and trained on latest devices.',
  },
  {
    icon: <FaShieldAlt />,
    title: 'Safe Handling',
    description: 'Professional grade tools and certified packaging protocols.',
  },
  {
    icon: <FaLock />,
    title: 'Data Privacy',
    description: 'Your data stays yours. We follow strict privacy protocols.',
  },
  {
    icon: <FaHandshake />,
    title: '100% Transparent',
    description: 'No hidden charges. What you see is what you pay.',
  },
];

export const Trust: React.FC = () => {
  return (
    <section className="w-full py-12 md:py-32 px-4 md:px-8 bg-white scroll-section-trigger">
      <div className="max-w-6xl mx-auto">
        {/* Section title */}
        <div className="text-center mb-12 md:mb-20">
          <h2 className="font-display text-neutral-900 mb-4 text-2xl md:text-4xl">
            Why Trust Us
          </h2>
          <p className="text-sm md:text-lg text-neutral-600 font-light max-w-2xl mx-auto">
            Your device deserves exceptional care. So do you. We've earned the trust of thousands.
          </p>
        </div>

        {/* Trust features grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 mb-12 md:mb-20">
          {features.map((feature, index) => (
            <div
              key={index}
              className="p-6 md:p-8 bg-neutral-50 rounded-lg md:rounded-2xl border border-neutral-200 shadow-elegant hover:shadow-elevated transition-all duration-300"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-10 md:w-12 h-10 md:h-12 rounded-full bg-gradient-to-br from-brand-red to-red-600 flex items-center justify-center text-white text-lg md:text-lg mb-4 md:mb-6 transition-transform duration-300 hover:scale-110">
                {feature.icon}
              </div>
              <h3 className="font-display text-neutral-900 mb-2 md:mb-3 text-base md:text-lg">
                {feature.title}
              </h3>
              <p className="text-neutral-600 leading-relaxed font-light text-xs md:text-sm">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
