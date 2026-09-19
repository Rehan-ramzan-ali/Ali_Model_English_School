import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-[#0B3C25] text-white pt-12 pb-6 border-t-4 border-yellow-500">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Footer Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 pb-10 border-b border-emerald-800/60">

          {/* Column 1: School Info & Logo */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <img 
                src="/HSoWxd.png" 
                alt="School Logo" 
                className="h-12 w-auto bg-white rounded p-1 object-contain"
              />
              <span className="font-bold text-lg tracking-wider text-white uppercase">
                Ali Model English School
              </span>
            </div>
            <p className="text-gray-300 text-xs sm:text-sm leading-relaxed">
              Providing quality Islamic and modern education for over 25 years. Empowering students to build a bright future.
            </p>
            
            {/* Social Media Links */}
            <div className="flex space-x-3 pt-2">
              {['Facebook', 'Instagram', 'LinkedIn', 'YouTube'].map((platform, idx) => (
                <a
                  key={idx}
                  href={`#${platform.toLowerCase()}`}
                  className="w-8 h-8 rounded-full bg-[#125032] flex items-center justify-center text-xs text-gray-200 hover:bg-yellow-500 hover:text-slate-900 transition-all duration-200"
                  aria-label={platform}
                >
                  {platform[0]}
                </a>
              ))}
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h3 className="text-yellow-400 font-semibold text-xs tracking-widest uppercase mb-4">
              Quick Links
            </h3>
            <ul className="space-y-2.5 text-sm text-gray-300">
              <li>
                <a href="/about-us" className="hover:text-yellow-400 transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a href="/admission" className="hover:text-yellow-400 transition-colors">
                  Admissions
                </a>
              </li>
           
              <li>
                <a href="/student-life" className="hover:text-yellow-400 transition-colors">
                  Student Life
                </a>
              </li>
              <li>
                <a href="/news" className="hover:text-yellow-400 transition-colors">
                  News & Events
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3: Our Campuses */}
          

          {/* Column 4: Contact Details */}
          <div>
            <h3 className="text-yellow-400 font-semibold text-xs tracking-widest uppercase mb-4">
              Contact Us
            </h3>
            <ul className="space-y-3 text-sm text-gray-300">
              <li className="flex items-start gap-2.5">
                <span className="text-yellow-400">📍</span>
                <span>Awami Colony , Korangi , Karachi Industrial Area , Pakistan</span>
              </li>
              <li className="flex items-center gap-2.5">
                <span className="text-yellow-400">📞</span>
                <span>+92 21 111 222 333</span>
              </li>
              <li className="flex items-center gap-2.5">
                <span className="text-yellow-400">✉️</span>
                <span>alimodelschool@gmail.com</span>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar: Copyright & Policy Links */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between text-xs text-gray-300 gap-4">
          <p>© {new Date().getFullYear()} Ali Model English School. All Rights Reserved.</p>
          <div className="flex gap-6">
            <a href="/privacy" className="hover:text-yellow-400 transition-colors">
              Privacy Policy
            </a>
            <a href="/terms" className="hover:text-yellow-400 transition-colors">
              Terms of Service
            </a>
            <a href="/sitemap" className="hover:text-yellow-400 transition-colors">
              Sitemap
            </a>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;