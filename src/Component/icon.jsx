import React from 'react';

const FloatingSocials = () => {
  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-3">
      
      {/* 1. WhatsApp Button */}
      <a
        href="https://wa.me/923000000000" // Yahan apna WhatsApp number daalein (country code ke sath, bina '+' sign ke)
        target="_blank"
        rel="noopener noreferrer"
        className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center shadow-xl hover:scale-110 transition-transform duration-200"
        title="Chat on WhatsApp"
      >
        <img 
          src="/web-441716274.webp" // Public folder se apni whatsapp image ka path
          alt="WhatsApp" 
          className="w-7 h-7 object-contain" 
        />
      </a>

      {/* 2. Instagram Button */}
      <a
        href="https://instagram.com/your_username" // Yahan apna Instagram profile link daalein
        target="_blank"
        rel="noopener noreferrer"
        className="w-12 h-12 bg-gradient-to-tr from-yellow-500 via-pink-500 to-purple-600 rounded-full flex items-center justify-center shadow-xl hover:scale-110 transition-transform duration-200"
        title="Follow on Instagram"
      >
        <img 
          src="/instagram-logo-instagram-logo-transparent-instagram-icon-transparent-free-free-png.webp" // Public folder se apni instagram image ka path
          alt="Instagram" 
          className="w-7 h-7 object-contain" 
        />
      </a>

      {/* 3. Facebook Button */}
      <a
        href="https://facebook.com/your_page" // Yahan apna Facebook page link daalein
        target="_blank"
        rel="noopener noreferrer"
        className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center shadow-xl hover:scale-110 transition-transform duration-200"
        title="Visit Facebook Page"
      >
        <img 
          src="/facebook-logo.webp" // Public folder se apni facebook image ka path
          alt="Facebook" 
          className="w-7 h-7 object-contain" 
        />
      </a>

    </div>
  );
};

export default FloatingSocials;