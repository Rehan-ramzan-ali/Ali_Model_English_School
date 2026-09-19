import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

const navItems = [
  { name: 'Home', path: '/' },
  { name: 'About Us', path: '/about-us' },
  {
    name: 'Programme',
    path: '/programme',
    dropdown: [
      { title: 'Pre-Primary', subtitle: 'Learning Through Play', path: '/programme#pre-primary' },
      { title: 'Primary', subtitle: 'Building Character and Academics', path: '/programme#primary' },
      { title: 'Secondary', subtitle: 'O Level and Matric Excellence', path: '/programme#secondary' },
    ],
  },
  // { name: 'Campuses', path: '/campuses' },
  { name: 'Community', path: '/community' },
  { name: 'Admissions Policy', path: '/admissions-policy' },
  { name: 'News and Events', path: '/events' },
  { name: 'Contact Us', path: '/contact-us' },
];

const Navbar = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [activeDropdown, setActiveDropdown] = useState(null);

  return (
    <nav className="bg-white sticky top-0 z-50">
      <div className="mx-auto px-2 sm:px-4 lg:px-8">
        <div className="flex items-center justify-center h-13">
          <ul className="flex items-center text-[5px] space-x-4 sm:space-x-6">
            {navItems.map((item, index) => {
              const isHovered = hoveredIndex === index;
              const hasDropdown = Boolean(item.dropdown);

              return (
                <li
                  key={item.name}
                  className="relative py-4"
                  onMouseEnter={() => {
                    setHoveredIndex(index);
                    if (hasDropdown) setActiveDropdown(item.name);
                  }}
                  onMouseLeave={() => {
                    setHoveredIndex(null);
                    if (hasDropdown) setActiveDropdown(null);
                  }}
                >
                  <Link
                    to={item.path}
                    className="text-black hover:text-slate-750 text-[13px] tracking-wide transition-colors"
                  >
                    {item.name}
                  </Link>

                  {/* Underline Animation */}
                  {isHovered && (
                    <motion.div
                      layoutId="navUnderline"
                      className="absolute bottom-1 left-0 right-0 h-[2px] bg-slate-800 rounded-full"
                      transition={{ type: 'spring', stiffness: 350, damping: 30 }}
                    />
                  )}

                  {/* Dropdown Menu */}
                  <AnimatePresence>
                    {hasDropdown && activeDropdown === item.name && (
                      <motion.div
                        initial={{ opacity: 0, y: 12, scale: 0.98 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 8, scale: 0.98 }}
                        transition={{ duration: 0.2 }}
                        className="absolute left-0 top-full mt-1 w-72 bg-white rounded-xl shadow-xl border border-gray-100 p-2 z-50"
                      >
                        {item.dropdown.map((subItem) => (
                          <Link
                            key={subItem.title}
                            to={subItem.path}
                            className="block p-3 rounded-lg hover:bg-slate-50 transition-colors group"
                          >
                            <div className="text-sm font-semibold text-slate-800 group-hover:text-[#0F5A37]">
                              {subItem.title}
                            </div>
                            <div className="text-xs text-gray-500 mt-0.5">
                              {subItem.subtitle}
                            </div>
                          </Link>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;