import React from 'react';
import './AboutSection.css';

const AboutSection: React.FC = () => {
  return (
    <section className="about" id="about">
      <h2 className="about__title">About Us</h2>
      <p className="about__desc">
        Our law firm provides reliable, fast and effective solutions to our clients with our corporate approach and modern vision. With our experienced team, we provide professional support in every field.
      </p>
    </section>
  );
};

export default AboutSection; 