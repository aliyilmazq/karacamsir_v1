import React from 'react';
import './AboutSection.css';

const AboutSection: React.FC = () => {
  return (
    <section className="about" id="about">
      <h2 className="about__title">Hakkımızda</h2>
      <p className="about__desc">
        Hukuk firmamız, kurumsal yaklaşımı ve modern vizyonu ile müvekkillerine güvenilir, hızlı ve etkili çözümler sunar. Deneyimli ekibimizle, her alanda profesyonel destek sağlıyoruz.
      </p>
    </section>
  );
};

export default AboutSection; 