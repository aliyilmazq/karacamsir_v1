import React from 'react';
import './HeroSection.css';
import istanbul from '../../assets/istanbul.jpg';

const HeroSection: React.FC = () => {
  return (
    <section className="hero">
      <div className="hero__bg" style={{ backgroundImage: `url(${istanbul})` }} />
      <div className="hero__overlay" />
      <div className="hero__content">
        <h1 className="hero__title">Preserving Values</h1>
        <h2 className="hero__subtitle">Risk &amp; Benefit Analysis</h2>
        <p className="hero__desc">
          We offer timely and tailored solutions,<br />
          blending our legal expertise with deep business insights<br />
          to ensure our clients' success and uphold their core values.
        </p>
        <div className="hero__locations">
          Istanbul &bull; London &bull; Delaware &bull; Astana
        </div>
      </div>
    </section>
  );
};

export default HeroSection; 