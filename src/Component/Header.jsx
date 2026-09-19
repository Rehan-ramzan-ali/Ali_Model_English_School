import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Navbar from './Navibar';

const Header = () => {
  const [showSticky, setShowSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Jab scroll 120px se aage jaye tab slide header trigger ho
      if (window.scrollY > 120) {
        setShowSticky(true);
      } else {
        setShowSticky(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      {/* 1. Normal Header (Initial page scroll par uper chala jayega) */}
      <header className="bg-white border-b-1  shadow-sm w-full">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16">
          <div className="flex-shrink-0 flex items-center">
            <a href="/">
              <img
                src="/HSoWxd.png"
                alt="Al-Huda Global Logo"
                className="h-13 w-auto object-contain bg-white rounded p-1"
              />
            </a>
          </div>

          <Navbar />

          <div className="flex-shrink-0">
            <a
              href="/activities"
              className="bg-[#A6192E] text-white font-bold text-xs uppercase tracking-wider px-4 py-2 rounded hover:bg-red-800 transition-all duration-200 shadow hover:shadow-lg inline-block"
            >
              VISIT ACTIVITIES
            </a>
          </div>
        </div>
      </header>

      {/* 2. Fixed Header (Scroll karne par top se slide-down hokar aayega) */}
      <AnimatePresence>
        {showSticky && (
          <motion.header
            initial={{ y: '-100%', opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: '-100%', opacity: 0 }}
            transition={{ duration: 0.35, ease: 'easeInOut' }}
            className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-b-1 shadow-lg"
          >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16">
              <div className="flex-shrink-0 flex items-center">
                <a href="/">
                  <img
                    src="/HSoWxd.png"
                    alt="Al-Huda Global Logo"
                    className="h-13 w-auto object-contain bg-white rounded p-1"
                  />
                </a>
              </div>

              <Navbar />

              <div className="flex-shrink-0">
                <a
                  href="/activities"
                  className="bg-[#A6192E] text-white font-bold text-xs uppercase tracking-wider px-4 py-2 rounded hover:bg-red-800 transition-all duration-200 shadow hover:shadow-lg inline-block"
                >
                  VISIT ACTIVITIES
                </a>
              </div>
            </div>
          </motion.header>
        )}
      </AnimatePresence>
    </>
  );
};

export default Header;