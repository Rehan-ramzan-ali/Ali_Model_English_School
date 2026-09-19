import React from 'react';
import { Routes, Route } from 'react-router-dom';
import HomePage from './pages/Home';
import Programme from './Expentfile/Programing';
import EventAndNews from './Expentfile/Event&News';
import EventDetail from './Expentfile/EventDetail';
import AboutUs from './pages/About';
import ContactUs from './pages/Contect';

const RouterPage = () => {
  return (
    <Routes>
      {/* 1. Home Page Route */}
      <Route path="/" element={<HomePage />} />

      {/* 2. Programme Page Route */}
      <Route path="/programme" element={<Programme />} />

      <Route path="/events" element={<EventAndNews />} />
  <Route path="/events/:id" element={<EventDetail/>} />

  import AboutUs from './pages/AboutUs';

// Routes ke andar:
<Route path="/about-us" element={<AboutUs />} />
<Route path="/contact-us" element={<ContactUs />} />

      {/* Aage ke baaki routes yahan add karte jayein */}
      {/* <Route path="/enroll" element={<Enroll />} /> */}
    </Routes>
  );
};

export default RouterPage;