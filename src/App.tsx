import {
  Navbar,
  Hero,
  Differentiation,
  SpeedPromise,
  Services,
  HowItWorks,
  Trust,
  Testimonials,
  WhatsAppButton,
  Footer,
} from './components';
import { useScrollAnimation } from './hooks/useScrollAnimation';
import './App.css';

function App() {
  // Initialize scroll animations for all sections with 'scroll-section-trigger' class
  useScrollAnimation();

  const WHATSAPP_PHONE = '918800003785'; 
  const WHATSAPP_MESSAGE = 'Hi! I need help with my device repair. Can you help?';
  const CALL_PHONE = '918800003785';

  const handleWhatsAppClick = () => {
    const encodedMessage = encodeURIComponent(WHATSAPP_MESSAGE);
    const whatsappUrl = `https://wa.me/${WHATSAPP_PHONE}?text=${encodedMessage}`;
    window.open(whatsappUrl, '_blank');
  };

  const handleCallClick = () => {
    window.location.href = `tel:${CALL_PHONE}`;
  };

  return (
    <div className="w-full bg-white">
      {/* Navbar */}
      <Navbar onCallClick={handleCallClick} onWhatsAppClick={handleWhatsAppClick} />

      {/* Hero Section */}
      <Hero onWhatsAppClick={handleWhatsAppClick} />

      {/* Differentiation Section */}
      <Differentiation />

      {/* Speed Promise Section */}
      <SpeedPromise onCallClick={handleCallClick} />

      {/* Services Section */}
      <Services onWhatsAppClick={handleWhatsAppClick} />

      {/* How It Works Section */}
      <HowItWorks />

      {/* Trust Section */}
      <Trust />

      {/* Testimonials Section */}
      <Testimonials />

      {/* Footer */}
      <Footer />

      {/* WhatsApp Floating Button */}
      <WhatsAppButton phoneNumber={WHATSAPP_PHONE} message={WHATSAPP_MESSAGE} />
    </div>
  );
}

export default App;
