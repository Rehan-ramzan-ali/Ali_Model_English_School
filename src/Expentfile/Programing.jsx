import React, { useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Programme = () => {
  const location = useLocation();

  // Hash (#pre-primary, #primary, #secondary) hone par smooth scroll karne ka logic
  useEffect(() => {
    if (location.hash) {
      const targetId = location.hash.replace('#', '');
      const element = document.getElementById(targetId);
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }, 100);
      }
    }
  }, [location]);

  return (
    <div className="bg-white text-slate-800 font-sans min-h-screen">
      
      {/* 1. TOP HERO TAGLINE */}
      <section className="relative w-full h-90 sm:h-105 md:h-137 overflow-hidden bg-slate-900">
        <img
          src="public/Study trip to @mohattapalacemuseum for grade 9th and 10th. Students engaged in creative thinking.jpg"
          alt="Ali Model English School Hero Banner"
          className="w-full h-full object-cover object-center"
        />
      </section>
      <section className="max-w-5xl mx-auto text-center py-12 sm:py-16 px-4">
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-light text-slate-800 leading-relaxed sm:leading-snug">
          Empowering students through excellence in literacy, critical thinking, and holistic development rooted in Islamic Values and Global Tolerance
        </h1>
      </section>

      {/* 2. LEARNING JOURNEY TABLE SECTION */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
        <div className="mb-8">
          <h2 className="text-3xl sm:text-4xl font-semibold text-slate-900 tracking-tight">
            The Ali Model English Learning Journey
          </h2>
          <p className="text-gray-600 font-light text-sm sm:text-base mt-3 max-w-4xl leading-relaxed">
            An Ali Model English education runs as one continuous, carefully sequenced journey — from the pre-primary years through to the examination streams. From Grade 8, students choose one of three streams to suit their strengths and goals.
          </p>
        </div>

        {/* Responsive Table Wrapper */}
        <div className="overflow-x-auto border border-gray-200 rounded-xl shadow-sm">
          <table className="w-full text-left text-xs sm:text-sm border-collapse">
            <thead>
              <tr className="bg-[#0F5A37] text-white font-medium uppercase text-[11px] tracking-wider">
                <th className="py-4 px-4 sm:px-6">Stage</th>
                <th className="py-4 px-4 sm:px-6">Grades</th>
                <th className="py-4 px-4 sm:px-6">Ages (Approx.)</th>
                <th className="py-4 px-4 sm:px-6">Focus & Pathway</th>
                <th className="py-4 px-4 sm:px-6 text-center">Enroll</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200 text-slate-700 font-light">
              <tr className="hover:bg-slate-50 transition-colors">
                <td className="py-4 px-4 sm:px-6 font-semibold text-slate-900">Pre-Primary</td>
                <td className="py-4 px-4 sm:px-6">Nursery – Prep 1</td>
                <td className="py-4 px-4 sm:px-6">3 – 5</td>
                <td className="py-4 px-4 sm:px-6">Confidence, curiosity, and foundations through play and guided discovery</td>
                <td className="py-4 px-4 sm:px-6 text-center">
                  <Link
                    to="/enroll"
                    className="inline-block bg-[#0F5A37] hover:bg-[#0b4329] text-white font-medium text-xs px-4 py-1.5 rounded-full transition-colors shadow-sm"
                  >
                    Enroll
                  </Link>
                </td>
              </tr>
              <tr className="hover:bg-slate-50 transition-colors">
                <td className="py-4 px-4 sm:px-6 font-semibold text-slate-900">Primary</td>
                <td className="py-4 px-4 sm:px-6">Grade 1 – 5</td>
                <td className="py-4 px-4 sm:px-6">6 – 10</td>
                <td className="py-4 px-4 sm:px-6">Core literacy, numeracy, and inquiry; strong learning habits</td>
                <td className="py-4 px-4 sm:px-6 text-center">
                  <Link
                    to="/enroll"
                    className="inline-block bg-[#0F5A37] hover:bg-[#0b4329] text-white font-medium text-xs px-4 py-1.5 rounded-full transition-colors shadow-sm"
                  >
                    Enroll
                  </Link>
                </td>
              </tr>
              <tr className="hover:bg-slate-50 transition-colors">
                <td className="py-4 px-4 sm:px-6 font-semibold text-slate-900">Secondary</td>
                <td className="py-4 px-4 sm:px-6">Grade 6 – 10/11</td>
                <td className="py-4 px-4 sm:px-6">11 – 16</td>
                <td className="py-4 px-4 sm:px-6">Grades 6-7 are shared foundation years; from Grade 8 students specialise in one of the three streams below</td>
                <td className="py-4 px-4 sm:px-6 text-center">
                  <Link
                    to="/enroll"
                    className="inline-block bg-[#0F5A37] hover:bg-[#0b4329] text-white font-medium text-xs px-4 py-1.5 rounded-full transition-colors shadow-sm"
                  >
                    Enroll
                  </Link>
                </td>
              </tr>
              <tr className="bg-slate-100/70 text-slate-800 text-xs font-medium">
                <td colSpan="5" className="py-2.5 px-4 sm:px-6 text-slate-600 italic">
                  Secondary — from Grade 8, students choose one of three examination streams:
                </td>
              </tr>
              <tr className="hover:bg-slate-50 transition-colors bg-slate-50/30">
                <td className="py-3 px-4 sm:px-6 pl-8 font-medium text-slate-900">• Matric</td>
                <td className="py-3 px-4 sm:px-6">Grade 8 – 10</td>
                <td className="py-3 px-4 sm:px-6">13 – 15</td>
                <td className="py-3 px-4 sm:px-6">National curriculum → Intermediate colleges and Pakistani universities</td>
                <td className="py-3 px-4 sm:px-6 text-center">
                  <Link
                    to="/enroll"
                    className="inline-block bg-[#0F5A37] hover:bg-[#0b4329] text-white font-medium text-xs px-4 py-1.5 rounded-full transition-colors shadow-sm"
                  >
                    Enroll
                  </Link>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* 3. DETAILED SECTIONS */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16 pb-20">
        
        {/* Pre-Primary Detailed */}
        <section id="pre-primary" className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start scroll-mt-24">
          <div className="md:col-span-5 rounded-2xl overflow-hidden border border-gray-200 shadow-sm">
            <img src="public/Today in creative writing class, students were asked to sit in groups to discuss picture books o.jpg" alt="Pre-Primary Students" className="w-full h-80 object-cover" />
          </div>
          <div className="md:col-span-7 space-y-3 font-light text-sm text-gray-700">
            <span className="text-gray-400 text-xs uppercase tracking-wider block font-normal">Classes Nursery - Prep II</span>
            <h3 className="text-2xl font-semibold text-slate-900">Pre-Primary</h3>
            <p className="leading-relaxed">
              The Pre-Primary Programme gives children a strong, nurturing start. In a warm and supportive setting, young learners build confidence, curiosity, and essential foundations through play, connection, and guided discovery.
            </p>
            <p><strong className="font-semibold text-slate-900">Learning Through Wonder:</strong> Stories, music, movement, and imaginative play. Exploration that encourages creativity and expression.</p>
            <p><strong className="font-semibold text-slate-900">Strong Foundations:</strong> Early literacy through Jolly Phonics. Hands-on numeracy and thinking skills. Communication in English.</p>
            <p><strong className="font-semibold text-slate-900">Growing Together:</strong> Friendship, empathy, and cooperation in a caring community.</p>
          </div>
        </section>

        {/* Primary Detailed */}
        <section id="primary" className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start scroll-mt-24">
          <div className="md:col-span-5 rounded-2xl overflow-hidden border border-gray-200 shadow-sm">
            <img src="public/On Saturday  our students from grade 7 & 8 visited DATINI, the only facility in Pakistan that re.jpg" alt="Primary Students" className="w-full h-80 object-cover" />
          </div>
          <div className="md:col-span-7 space-y-3 font-light text-sm text-gray-700">
            <span className="text-gray-400 text-xs uppercase tracking-wider block font-normal">Classes I - V</span>
            <h3 className="text-2xl font-semibold text-slate-900">Primary</h3>
            <p className="leading-relaxed">
              The Primary Years provide a <strong className="font-semibold text-slate-900">structured, supportive foundation for academic and personal development</strong>. Students strengthen essential skills in literacy, numeracy, and inquiry while building confidence.
            </p>
            <p><strong className="font-semibold text-slate-900">Academic learning:</strong> A broad, progressive curriculum in language, mathematics, science, and social studies.</p>
            <p><strong className="font-semibold text-slate-900">Learning through experience:</strong> Projects, presentations, educational visits, and real-world connections.</p>
            <p><strong className="font-semibold text-slate-900">Technology and future skills:</strong> Age-appropriate introduction to digital tools, coding, and robotics.</p>
          </div>
        </section>

        {/* Secondary Detailed */}
        <section id="secondary" className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start scroll-mt-24">
          <div className="md:col-span-5 rounded-2xl overflow-hidden border border-gray-200 shadow-sm">
            <img src="public/Trip to Mohatta Palace Museum on 24th February 2024. Following up our critical thinking and writ.jpg" alt="Secondary Students" className="w-full h-80 object-cover" />
          </div>
          <div className="md:col-span-7 space-y-3 font-light text-sm text-gray-700">
            <span className="text-gray-400 text-xs uppercase tracking-wider block font-normal">Classes VI - X</span>
            <h3 className="text-2xl font-semibold text-slate-900">Secondary</h3>
            <p className="leading-relaxed">
              <strong className="font-semibold text-slate-900">Grade 6-7 (Foundation Years):</strong> Secondary at Ali Model English deepens learning and builds the independence students need before choosing an examination stream.
            </p>
            <p><strong className="font-semibold text-slate-900">Academic development:</strong> A broader, more rigorous curriculum that strengthens conceptual understanding and analytical thinking.</p>
            <p><strong className="font-semibold text-slate-900">Independence and leadership:</strong> Communication, teamwork, and respectful engagement, with growing ownership of learning.</p>
          </div>
        </section>

      </div>
    </div>
  );
};

export default Programme;