import React from 'react';
import './ContactSection.css';

const ContactSection: React.FC = () => {
  return (
    <section className="contact" id="contact">
      <h2 className="contact__title">Contact</h2>
      <div className="contact__info">
        <div>
          <strong>Address:</strong> Sample District Law St. No:1, Istanbul
        </div>
        <div>
          <strong>Phone:</strong> +90 212 000 00 00
        </div>
        <div>
          <strong>Email:</strong> info@lawfirm.com
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