import React from 'react';
import './ServicesSection.css';

const services = [
  { title: 'Commercial and Corporate Law', desc: 'Company formation, mergers, acquisitions and contract management.' },
  { title: 'Labor and Social Security Law', desc: 'Employee-employer relations, compensation and social security disputes.' },
  { title: 'Family Law', desc: 'Divorce, custody, alimony and property division.' },
  { title: 'Criminal Law', desc: 'Criminal cases, defense and consultancy.' },
  { title: 'Real Estate Law', desc: 'Title deeds, mortgages, rental and eviction cases.' },
];

const ServicesSection: React.FC = () => {
  return (
    <section className="services" id="services">
      <h2 className="services__title">Our Services</h2>
      <div className="services__list">
        {services.map((service, idx) => (
          <div className="service" key={idx}>
            <h3 className="service__name">{service.title}</h3>
            <p className="service__desc">{service.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ServicesSection; 