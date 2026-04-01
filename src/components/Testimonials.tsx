import React from 'react';

interface Testimonial {
  name: string;
  device: string;
  rating: number;
  text: string;
  avatar: string;
}

const testimonials: Testimonial[] = [
  {
    name: 'Rahul Sharma',
    device: 'iPhone 14 Pro',
    rating: 5,
    text: 'Got my screen fixed in 2 hour. No compromise on quality. Definitely coming back!',
    avatar: 'RS',
  },
  {
    name: 'Priya Gupta',
    device: 'Samsung Galaxy S23',
    rating: 5,
    text: 'The transparency is amazing. They explained everything and fixed my battery over lunch. Highly recommend!',
    avatar: 'PG',
  },
  {
    name: 'Amit Patel',
    device: 'MacBook Pro',
    rating: 5,
    text: 'Water damaged my MacBook. They recovered my data and fixed it same day. Lifesaver!',
    avatar: 'AP',
  },
];

export const Testimonials: React.FC = () => {
  return (
    <section id="testimonials" className="w-full py-32 px-4 bg-neutral-50 scroll-section-trigger">
      <div className="max-w-6xl mx-auto">
        {/* Section title */}
        <div className="text-center mb-20">
          <h2 className="font-display text-neutral-900 mb-4">
            Loved by Thousands
          </h2>
          <p className="text-lg text-neutral-600 font-light max-w-2xl mx-auto">
            Real customers. Real repairs. Real trust.
          </p>
        </div>

        {/* Testimonials grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-24 stagger-children">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="card-hover p-8 bg-white rounded-2xl border border-neutral-200 shadow-elegant"
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              {/* Stars */}
              <div className="flex gap-1 mb-6">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <span key={i} className="text-brand-red text-lg">★</span>
                ))}
              </div>

              {/* Text */}
              <p className="text-neutral-700 mb-8 leading-relaxed font-light italic text-base">
                "{testimonial.text}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-4 pt-6 border-t border-neutral-100">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-brand-red to-red-600 text-white flex items-center justify-center font-display font-bold text-base shadow-elegant">
                  {testimonial.avatar}
                </div>
                <div>
                  <p className="font-display font-semibold text-neutral-900 text-sm">{testimonial.name}</p>
                  <p className="text-xs text-neutral-600 font-light">{testimonial.device}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center py-16 bg-white rounded-2xl border border-neutral-200 shadow-elegant">
          <div className="border-r border-neutral-100">
            <p className="font-display text-4xl md:text-5xl font-bold text-brand-red">4.9<span className="text-xl">★</span></p>
            <p className="text-neutral-600 mt-2 text-sm font-light">Average Rating</p>
          </div>
          <div className="border-r border-neutral-100">
            <p className="font-display text-4xl md:text-5xl font-bold text-brand-navy">25000<span className="text-lg text-neutral-500">+</span></p>
            <p className="text-neutral-600 mt-2 text-sm font-light">Happy Customers</p>
          </div>
          <div className="border-r border-neutral-100">
            <p className="font-display text-4xl md:text-5xl font-bold text-brand-red">98<span className="text-lg">%</span></p>
            <p className="text-neutral-600 mt-2 text-sm font-light">Same Day Fix</p>
          </div>
          <div>
            <p className="font-display text-4xl md:text-5xl font-bold text-brand-navy">0</p>
            <p className="text-neutral-600 mt-2 text-sm font-light">Hidden Charges</p>
          </div>
        </div>
      </div>
    </section>
  );
};
