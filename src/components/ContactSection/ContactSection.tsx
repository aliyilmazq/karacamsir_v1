import React from 'react';
import './ContactSection.css';

const ContactSection: React.FC = () => {
  return (
    <section className="contact" id="contact">
      <h2 className="contact__title">İletişim</h2>
      <div className="contact__info">
        <div>
          <strong>Adres:</strong> Örnek Mah. Hukuk Sk. No:1, İstanbul
        </div>
        <div>
          <strong>Telefon:</strong> 0212 000 00 00
        </div>
        <div>
          <strong>E-posta:</strong> info@lawfirm.com
        </div>
      </div>
      <form className="contact__form">
        <input type="text" placeholder="Adınız Soyadınız" required />
        <input type="email" placeholder="E-posta" required />
        <textarea placeholder="Mesajınız" required />
        <button type="submit">Gönder</button>
      </form>
    </section>
  );
};

export default ContactSection; 