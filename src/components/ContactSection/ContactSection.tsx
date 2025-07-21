import React from 'react';
import './ContactSection.css';

const ContactSection: React.FC = () => {
  return (
    <section className="contact" id="contact">
      <h2 className="contact__title">Contact</h2>
      <div className="contact__info">
        <div>
          <strong>Address:</strong> Kısıklı Mah. Gurbet Sokak Rumeli Plaza No: 12/5 Üsküdar, Istanbul
        </div>
        <div>
          <strong>Phone:</strong> +90 216 329 00 60
        </div>
        <div>
          <strong>Email:</strong> info@karacamsir.com
        </div>
      </div>
      <form className="contact__form">
        <input type="text" placeholder="Your Name" required />
        <input type="email" placeholder="Email" required />
        <textarea placeholder="Your Message" required />
        <button type="submit">Send</button>
      </form>
    </section>
  );
};

export default ContactSection; 