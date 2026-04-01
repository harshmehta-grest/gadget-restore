import React from 'react';
import { FaWhatsapp } from 'react-icons/fa';

interface WhatsAppButtonProps {
  phoneNumber: string;
  message?: string;
}

export const WhatsAppButton: React.FC<WhatsAppButtonProps> = ({
  phoneNumber,
  message = 'Hi! I need help with my device repair.',
}) => {
  const handleClick = () => {
    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <button
      onClick={handleClick}
      className="fixed bottom-8 right-8 w-16 h-16 rounded-full bg-green-500 hover:bg-green-600 text-white shadow-2xl flex items-center justify-center text-2xl font-bold transition-all duration-300 transform hover:scale-110 z-50 hover:shadow-3xl"
      aria-label="Chat on WhatsApp"
      title="Chat with us on WhatsApp"
    >
      <FaWhatsapp />
    </button>
  );
};
