import React, { useState, useEffect } from 'react';

const Hero = () => {
  // Paths se 'public/' hata diya hai aur start mein '/' lagaya hai
  const slides = [
    { 
      id: 1, 
      src: '/Today at Ali Model English School, we inaugurated our newly painted wall outside our school buil.jpg', 
      alt: 'Banner 1' 
    },
    { 
      id: 2, 
      src: '/Yesterday, students from our Matric class went on a study trip to the National Museum of Pakista (1).jpg', 
      alt: 'Banner 2' 
    },
    { 
      id: 3, 
      src: '/Our Grade 7 students embrace real-world change in their Community Projects course. From battling.jpg', 
      alt: 'Banner 3' 
    },
    { 
      id: 4, 
      src: '/Yesterday, students from our Matric class went on a study trip to the National Museum of Pakista.jpg', 
      alt: 'Banner 4' 
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  // 2-Second Auto Slider Logic
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
    }, 2000); // 2 seconds (2000ms)

    return () => clearInterval(timer);
  }, [slides.length]);

  return (
    <section className="relative w-full h-90 sm:h-105 md:h-137 overflow-hidden bg-slate-900">
      {/* Slide Images */}
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${
            index === currentIndex ? 'opacity-100 z-10' : 'opacity-0 z-0'
          }`}
        >
          <img
            src={slide.src}
            alt={slide.alt}
            className="w-full h-full object-cover object-center"
          />
        </div>
      ))}

      {/* Navigation Dots */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-20 flex space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`h-3 rounded-full transition-all duration-300 ${
              index === currentIndex
                ? 'bg-yellow-400 w-7'
                : 'bg-white/60 hover:bg-white w-3'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
};

export default Hero;