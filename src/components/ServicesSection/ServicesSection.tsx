import React from 'react';
import './ServicesSection.css';

const services = [
  { title: 'Ticaret ve Şirketler Hukuku', desc: 'Şirket kuruluşu, birleşme, devralma ve sözleşme yönetimi.' },
  { title: 'İş ve Sosyal Güvenlik Hukuku', desc: 'İşçi-işveren ilişkileri, tazminat ve SGK uyuşmazlıkları.' },
  { title: 'Aile Hukuku', desc: 'Boşanma, velayet, nafaka ve mal paylaşımı.' },
  { title: 'Ceza Hukuku', desc: 'Ceza davaları, savunma ve danışmanlık.' },
  { title: 'Gayrimenkul Hukuku', desc: 'Tapu işlemleri, ipotek, kira ve tahliye davaları.' },
];

const ServicesSection: React.FC = () => {
  return (
    <section className="services" id="services">
      <h2 className="services__title">Hizmetlerimiz</h2>
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