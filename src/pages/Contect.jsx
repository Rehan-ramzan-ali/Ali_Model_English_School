import React, { useState } from 'react';
import { FaGraduationCap, FaBriefcase, FaEnvelope, FaWhatsapp, FaFacebookF, FaInstagram, FaLinkedinIn } from 'react-icons/fa';

const ContactUs = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form Submitted:', formData);
    alert('Thank you for contacting Ali Model English School!');
    setFormData({ fullName: '', email: '', phone: '', message: '' });
  };

  return (
    <div className="bg-white min-h-screen text-slate-800 font-sans">
      
      {/* ================= 1. TOP HERO BANNER IMAGE ================= */}
      <div className="w-full h-64 sm:h-80 md:h-96 overflow-hidden bg-gray-100">
        <img 
          src="/images/contact-banner.jpg" 
          alt="Ali Model English School Students" 
          className="w-full h-full object-cover object-center"
        />
      </div>

      {/* ================= 2. MAIN CONTENT AREA ================= */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* LEFT SIDE: INQUIRY FORM (7 Columns) */}
          <main className="lg:col-span-7 bg-white rounded-2xl border border-gray-200 p-6 sm:p-8 shadow-sm">
            <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
              Make an Inquiry!
            </h1>
            <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider mt-1 mb-6">
              Send Us A Message
            </p>

            <form onSubmit={handleSubmit} className="space-y-5">
              {/* Full Name */}
              <div>
                <label className="block text-xs font-bold text-slate-800 uppercase mb-2">
                  Full Name
                </label>
                <input 
                  type="text"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                  placeholder="Enter your full name"
                  required
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 text-sm focus:outline-none focus:ring-2 focus:ring-[#0F5A37] focus:border-transparent transition-all"
                />
              </div>

              {/* Email */}
              <div>
                <label className="block text-xs font-bold text-slate-800 uppercase mb-2">
                  Email
                </label>
                <input 
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Enter your email address"
                  required
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 text-sm focus:outline-none focus:ring-2 focus:ring-[#0F5A37] focus:border-transparent transition-all"
                />
              </div>

              {/* Phone Number */}
              <div>
                <label className="block text-xs font-bold text-slate-800 uppercase mb-2">
                  Phone Number
                </label>
                <input 
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="Enter your phone number"
                  required
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 text-sm focus:outline-none focus:ring-2 focus:ring-[#0F5A37] focus:border-transparent transition-all"
                />
              </div>

              {/* Message */}
              <div>
                <label className="block text-xs font-bold text-slate-800 uppercase mb-2">
                  Message
                </label>
                <textarea 
                  name="message"
                  rows="4"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="How can we help you?"
                  required
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 text-sm focus:outline-none focus:ring-2 focus:ring-[#0F5A37] focus:border-transparent transition-all resize-none"
                ></textarea>
              </div>

              {/* Submit Button */}
              <button 
                type="submit"
                className="bg-[#0F5A37] hover:bg-[#0b4329] text-white font-bold py-3 px-8 rounded-lg text-sm transition-colors shadow-sm"
              >
                Submit
              </button>
            </form>
          </main>


          {/* RIGHT SIDE: INFO CARDS (5 Columns) */}
          <aside className="lg:col-span-5 space-y-6">
            
            {/* Card 1: Admission Queries */}
            <div className="bg-white rounded-2xl border border-gray-200 p-6 sm:p-8 shadow-sm space-y-4">
              <div className="flex items-center gap-3">
                <FaGraduationCap className="text-[#0F5A37] text-2xl" />
                <h2 className="text-xl font-bold text-slate-900">
                  Admission Queries
                </h2>
              </div>

              <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                Explore admissions, ask questions, and get the support you need.
              </p>

              <div className="space-y-3 pt-2 text-xs sm:text-sm font-medium">
                <a 
                  href="mailto:admission@alimodel.edu.pk" 
                  className="flex items-center gap-3 text-slate-700 hover:text-[#0F5A37] transition-colors"
                >
                  <FaEnvelope className="text-gray-400 text-base" />
                  <span>admission@alimodel.edu.pk</span>
                </a>

                <a 
                  href="https://wa.me/923197599352" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-slate-700 hover:text-[#0F5A37] transition-colors"
                >
                  <FaWhatsapp className="text-gray-400 text-base" />
                  <span>0319-7599352 (WhatsApp)</span>
                </a>
              </div>

              {/* Social Links */}
              <div className="pt-4 border-t border-gray-100">
                <p className="text-xs font-bold text-slate-800 mb-3">Follow Us</p>
                <div className="flex items-center gap-3">
                  <a href="#" className="w-9 h-9 rounded-full bg-[#0F5A37] text-white flex items-center justify-center hover:opacity-90 transition-opacity">
                    <FaFacebookF className="text-sm" />
                  </a>
                  <a href="#" className="w-9 h-9 rounded-full bg-[#0F5A37] text-white flex items-center justify-center hover:opacity-90 transition-opacity">
                    <FaInstagram className="text-sm" />
                  </a>
                  <a href="#" className="w-9 h-9 rounded-full bg-[#0F5A37] text-white flex items-center justify-center hover:opacity-90 transition-opacity">
                    <FaLinkedinIn className="text-sm" />
                  </a>
                </div>
              </div>
            </div>

            {/* Card 2: Human Resources */}
            <div className="bg-white rounded-2xl border border-gray-200 p-6 sm:p-8 shadow-sm space-y-4">
              <div className="flex items-center gap-3">
                <FaBriefcase className="text-[#0F5A37] text-2xl" />
                <h2 className="text-xl font-bold text-slate-900">
                  Human Resources
                </h2>
              </div>

              <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                Discover career opportunities and grow with a purpose-driven educational community.
              </p>

              <div className="pt-2 text-xs sm:text-sm font-medium">
                <a 
                  href="mailto:jobs@alimodel.edu.pk" 
                  className="flex items-center gap-3 text-slate-700 hover:text-[#0F5A37] transition-colors"
                >
                  <FaEnvelope className="text-gray-400 text-base" />
                  <span>jobs@alimodel.edu.pk</span>
                </a>
              </div>
            </div>

          </aside>

        </div>
      </div>
    </div>
  );
};

export default ContactUs;