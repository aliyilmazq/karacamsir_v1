import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from '../components/Layout/Layout';
import Home from '../pages/Home';
import NotFound from '../pages/NotFound';
import WhoWeAre from '../pages/WhoWeAre';
import WhatWeAreDoing from '../pages/WhatWeAreDoing';
import HowWeAreDoing from '../pages/HowWeAreDoing';
import ContactUs from '../pages/ContactUs';
import Team from '../pages/Team';
import LegalInsightsQuarterly from '../pages/LegalInsightsQuarterly';
import DeclarationCleanConduct from '../pages/DeclarationCleanConduct';
import Compliance from '../pages/Compliance';
import PrivacyNotice from '../pages/PrivacyNotice';

const AppRouter: React.FC = () => (
  <BrowserRouter>
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about-us" element={<WhoWeAre />} />
        <Route path="/practice-areas" element={<WhatWeAreDoing />} />
        <Route path="/how-we-are-doing" element={<HowWeAreDoing />} />
        <Route path="/team" element={<Team />} />
        <Route path="/contact-us" element={<ContactUs />} />
        <Route path="/legal-insights-quarterly" element={<LegalInsightsQuarterly />} />
        <Route path="/declaration-clean-conduct" element={<DeclarationCleanConduct />} />
        <Route path="/compliance" element={<Compliance />} />
        <Route path="/privacy-notice" element={<PrivacyNotice />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Layout>
  </BrowserRouter>
);

export default AppRouter;
