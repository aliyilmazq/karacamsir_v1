import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from '../components/Layout/Layout';
import Home from '../pages/Home';
import NotFound from '../pages/NotFound';
import WhoWeAre from '../pages/WhoWeAre';
import WhatWeAreDoing from '../pages/WhatWeAreDoing';
import HowWeAreDoing from '../pages/HowWeAreDoing';
import Blog from '../pages/Blog';
import ContactUs from '../pages/ContactUs';
import Careers from '../pages/Careers';

const AppRouter: React.FC = () => (
  <BrowserRouter>
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/who-we-are" element={<WhoWeAre />} />
        <Route path="/what-we-are-doing" element={<WhatWeAreDoing />} />
        <Route path="/how-we-are-doing" element={<HowWeAreDoing />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/contact-us" element={<ContactUs />} />
        <Route path="/careers" element={<Careers />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Layout>
  </BrowserRouter>
);

export default AppRouter;
