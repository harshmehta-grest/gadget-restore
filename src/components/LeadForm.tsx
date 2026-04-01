import React, { useState } from 'react';

interface FormData {
  name: string;
  phone: string;
  issue: string;
}

interface LeadFormProps {
  onSubmit: (data: FormData) => void;
}

export const LeadForm: React.FC<LeadFormProps> = ({ onSubmit }) => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    phone: '',
    issue: '',
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.name || !formData.phone || !formData.issue) {
      alert('Please fill all fields');
      return;
    }

    setLoading(true);
    
    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1000));
      
      onSubmit(formData);
      setSubmitted(true);
      setFormData({ name: '', phone: '', issue: '' });
      
      setTimeout(() => {
        setSubmitted(false);
      }, 3000);
    } catch (error) {
      console.error('Error submitting form:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="lead-form" className="w-full py-32 px-4 bg-brand-navy relative overflow-hidden">
      {/* Background gradient accent */}
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-brand-red rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-2xl mx-auto relative z-10">
        {/* Section title */}
        <div className="text-center mb-12 animate-fade-up">
          <h2 className="font-display text-white mb-4">
            Get Your Device Fixed Today
          </h2>
          <p className="text-lg text-gray-300 font-light">
            Tell us about your device. We'll handle the rest.
          </p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-6 animate-fade-up" style={{ animationDelay: '0.1s' }}>
          {/* Name field */}
          <div>
            <label className="block text-white font-display font-semibold mb-3 text-sm">
              Your Name
            </label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Rahul Sharma"
              className="w-full px-6 py-4 rounded-xl border-2 border-white border-opacity-20 bg-white bg-opacity-10 backdrop-blur text-white placeholder-gray-400 focus:border-brand-red focus:bg-opacity-15 focus:outline-none transition-all duration-300 font-light"
            />
          </div>

          {/* Phone field */}
          <div>
            <label className="block text-white font-display font-semibold mb-3 text-sm">
              Phone Number
            </label>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="98765 43210"
              className="w-full px-6 py-4 rounded-xl border-2 border-white border-opacity-20 bg-white bg-opacity-10 backdrop-blur text-white placeholder-gray-400 focus:border-brand-red focus:bg-opacity-15 focus:outline-none transition-all duration-300 font-light"
            />
          </div>

          {/* Issue field */}
          <div>
            <label className="block text-white font-display font-semibold mb-3 text-sm">
              What's the Issue?
            </label>
            <textarea
              name="issue"
              value={formData.issue}
              onChange={handleChange}
              placeholder="Broken screen, battery not charging, water damage, etc."
              rows={4}
              className="w-full px-6 py-4 rounded-xl border-2 border-white border-opacity-20 bg-white bg-opacity-10 backdrop-blur text-white placeholder-gray-400 focus:border-brand-red focus:bg-opacity-15 focus:outline-none transition-all duration-300 resize-none font-light"
            ></textarea>
          </div>

          {/* Submit button */}
          <button
            type="submit"
            disabled={loading}
            className="w-full px-8 py-4 bg-gradient-to-r from-brand-red to-red-600 hover:from-red-600 hover:to-red-700 disabled:from-red-700 disabled:to-red-800 text-white font-display font-semibold text-lg rounded-xl shadow-elevated hover:shadow-premium transition-all duration-300 transform hover:scale-105 active:scale-95"
          >
            {loading ? 'Submitting...' : 'Get Free Estimate'}
          </button>

          {/* Success message */}
          {submitted && (
            <div className="p-4 bg-green-500 bg-opacity-20 border border-green-400 border-opacity-50 rounded-xl text-green-300 text-center font-semibold backdrop-blur">
              ✓ We'll contact you shortly!
            </div>
          )}
        </form>

        {/* Sub-text */}
        <p className="text-center text-gray-400 mt-10 font-light text-sm">
          No spam. No strings attached. Just expert repair service.
        </p>
      </div>
    </section>
  );
};
