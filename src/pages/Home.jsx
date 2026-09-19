import React, { useState } from 'react';
import Hero from '../Component/Hero';
import { Outlet } from 'react-router-dom';
import  { newsList } from '../Data/NewsAndEvent';
        import { Link } from 'react-router-dom';


const HomePage = () => {
  // Inquiry Form State
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
    alert('Inquiry Submitted Successfully!');
    // Yahan aap backend / API integration kar sakte hain
  };

  // News & Events Data

  // Alumni Data
  const alumniList = [
    {
      id: 1,
      image: '/alumni1.jpg',
      name: 'Syeda Kinza Ali',
      role: 'BOEING',
      quote: '"KPS definitely helped me see what I lacked and what I didn\'t. It helped me understand how to use my skills to achieve my goals. I would not be here if it was not for this school."',
      link: '/alumni/syeda-kinza'
    },
    {
      id: 2,
      image: '/alumni2.jpg',
      name: 'Husnain T. Allahwala',
      role: 'Educator',
      quote: '"KPS is truly the best possible thing that could have happened to me. The strictness helped me in managing my time effectively, the outstanding faculty made me academically strong and extra-curricular activities made me physically and mentally fit."',
      link: '/alumni/husnain-allahwala'
    },
    {
      id: 3,
      image: '/alumni3.jpg',
      name: 'Muhammad Y. Ahmed',
      role: 'Civil Engineer',
      quote: '"KPS helped me nourish myself for the hardworking years ahead... Teachers played their part very diligently in bringing the best of the students."',
      link: '/alumni/muhammad-ahmed'
    }
  ];

  return (
    <div>
      <Hero/>
    <div className="bg-gray-50 text-slate-800 font-sans">

      {/* Top Button Section */}
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 flex flex-col items-center text-center">
  {/* Heading (Text Uper aur Center) */}
  <h1 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-black max-w-4xl mb-6 leading-relaxed">
    A caring, supportive and secure environment with the purpose of encouraging each student to develop to their full potential.
  </h1>

  {/* Button (Neechay aur Center) */}
  <a 
    href="about-us" 
    className="bg-[#0F5A37] hover:bg-[#0b4329] text-white font-medium text-sm px-6 py-2.5 rounded-md transition-colors shadow inline-block"
  >
    More About AMES
  </a>
</div>

      {/* 1. PROGRAMME SECTION */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <div className="overflow-hidden rounded-2xl shadow-lg border border-gray-200">
            <img 
              src="/Yesterday, students from our Matric class went on a study trip to the National Museum of Pakista (1).jpg" 
              alt="Programme" 
              className="w-full h-[380px] object-cover"
            />
          </div>
          <div className="space-y-4">
            <span className="text-black font-medium text-sm uppercase tracking-wide">Programme</span>
            <h2 className="text-3xl sm:text-4xl font-bold text-black leading-tight">
              Globally accredited and locally trusted; for a future that matters
            </h2>
            <p className="text-gray-600 text-base leading-relaxed">
              Recognised and accredited internationally and highly sought after locally. Where you study is just as important as what you study.
            </p>
            <div className="pt-2">
              <a 
                href="/programme" 
                className="inline-block bg-[#0F5A37] hover:bg-[#0b4329] text-white font-medium text-sm px-6 py-3 rounded-md transition-colors shadow"
              >
                More About The Programme
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* 2. NEWS & EVENTS SECTION */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div>
      <div className="mb-8">
          <span className="text-gray-500 font-medium text-sm uppercase tracking-wide">News & Events</span>
          <h2 className="text-3xl font-bold text-slate-900 mt-1">
            Updates that connect our community; past, present, and future
          </h2>
          <p className="text-gray-600 mt-2 text-sm sm:text-base">
            Stay informed with the latest milestones, achievements, and happenings from across the KPS community.
          </p>
        </div>


<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
  {newsList.map((item) => (
    <Link 
      key={item.id} 
      to={`/events/${item.id}`} 
      className="bg-white rounded-xl overflow-hidden border border-gray-200 shadow-sm hover:shadow-md transition-shadow group flex flex-col justify-between"
    >
      <div>
        <div className="h-48 overflow-hidden bg-gray-200">
          <img 
            src={item.image} 
            alt={item.title} 
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          />
        </div>
        <div className="p-4">
          <h3 className="font-bold text-slate-900 text-lg group-hover:text-[#0F5A37] transition-colors">
            {item.title}
          </h3>
          <p className="text-xs text-gray-600 mt-2 line-clamp-3">
            {item.desc}
          </p>
        </div>
      </div>
    </Link>
  ))}
</div>
          </div>
      </section>
     

      {/* 3. COMMUNITY SECTION */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <div className="overflow-hidden rounded-2xl shadow-lg border border-gray-200">
            <img 
              src="/Thank you Anum for conducting a productive& enjoyable training session on Jolly Phonics at AMES..jpg" 
              alt="Community" 
              className="w-full h-[380px] object-cover"
            />
          </div>
          <div className="space-y-4">
            <span className="text-gray-500 font-medium text-sm uppercase tracking-wide">Community</span>
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 leading-tight">
              A legacy of learning; built by generations of minds
            </h2>
            <p className="text-gray-600 text-base leading-relaxed">
              For over 43 years, our vibrant community of alumni, families, and educators has nurtured a shared tradition. One that continues to inspire future generations.
            </p>
            <div className="pt-2">
              <a 
                href="/community" 
                className="inline-block bg-[#0F5A37] hover:bg-[#0b4329] text-white font-medium text-sm px-6 py-3 rounded-md transition-colors shadow"
              >
                More About Our Community
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* 4. ALUMNI SECTION */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="mb-8">
          <span className="text-gray-500 font-medium text-sm uppercase tracking-wide">Alumni</span>
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mt-1">
            KPS Alumni: Shaping Futures, Leading Change
          </h2>
          <p className="text-gray-600 mt-3 text-sm sm:text-base leading-relaxed max-w-5xl">
            For over four decades, our alumni have carried the spirit of their school into diverse fields and across continents, making their mark in education, business, the arts and beyond. This is where generations connect, celebrate their shared roots, and inspire the future by showing what's possible with a strong foundation.
          </p>
        </div>

        {/* Alumni Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {alumniList.map((alumni) => (
            <a 
              key={alumni.id} 
              href={alumni.link} 
              className="bg-white rounded-xl p-5 border border-gray-200 shadow-sm hover:shadow-md transition-shadow group block"
            >
              <div className="h-64 overflow-hidden rounded-lg mb-4 bg-gray-100">
                <img 
                  src={alumni.image} 
                  alt={alumni.name} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <h3 className="font-bold text-slate-900 text-lg group-hover:text-[#0F5A37]">
                {alumni.name}
              </h3>
              <p className="text-sm text-gray-500 font-medium mb-3">{alumni.role}</p>
              <p className="text-xs text-gray-600 italic leading-relaxed bg-gray-50 p-3 rounded-md border border-gray-100">
                {alumni.quote}
              </p>
            </a>
          ))}
        </div>
      </section>

      {/* 5. MAKE AN INQUIRY FORM SECTION */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="bg-white p-8 sm:p-10 rounded-2xl border border-gray-200 shadow-sm">
          <h2 className="text-3xl font-bold text-slate-900 mb-1">Make an Inquiry!</h2>
          <p className="text-gray-500 text-sm mb-6">Send Us A Message</p>

          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label className="block text-xs font-semibold text-gray-700 uppercase mb-1">
                Full Name
              </label>
              <input
                type="text"
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
                placeholder="Enter your full name"
                required
                className="w-full border border-gray-300 rounded-md px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-[#0F5A37] focus:border-transparent transition-all"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-gray-700 uppercase mb-1">
                Email
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Enter your email address"
                required
                className="w-full border border-gray-300 rounded-md px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-[#0F5A37] focus:border-transparent transition-all"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-gray-700 uppercase mb-1">
                Phone Number
              </label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="Enter your phone number"
                className="w-full border border-gray-300 rounded-md px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-[#0F5A37] focus:border-transparent transition-all"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-gray-700 uppercase mb-1">
                Message
              </label>
              <textarea
                name="message"
                rows="4"
                value={formData.message}
                onChange={handleChange}
                placeholder="How can we help you?"
                required
                className="w-full border border-gray-300 rounded-md px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-[#0F5A37] focus:border-transparent transition-all"
              ></textarea>
            </div>

            <div>
              <button
                type="submit"
                className="bg-[#0F5A37] hover:bg-[#0b4329] text-white font-medium text-sm px-8 py-3 rounded-md transition-colors shadow cursor-pointer"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </section>

    </div>
    <Outlet/>
    </div>
    
  );
};

export default HomePage;