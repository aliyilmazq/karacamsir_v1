import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import './ContactUs.css';
import PageHeaderSection from "../components/PageHeaderSection/PageHeaderSection";
import istanbulImage from "../assets/istanbul_1.jpg";

const ContactUs: React.FC = () => {
  const { t } = useTranslation();
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    company: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState('');

  const offices = [
    {
      city: "Istanbul",
      address: ["Levent, Büyükdere Caddesi No: 185", "Kanyon Ofis Bloğu Kat: 18", "34394 Şişli, Istanbul, Turkey"],
      phone: "+90 212 123 4567"
    },
    {
      city: "Astana",
      address: ["Mangilik El Avenue 55/20", "Esil District, EXPO Business Center", "Z05T8F6 Astana, Kazakhstan"],
      phone: "+7 7172 123 456"
    },
    {
      city: "London",
      address: ["30 St Mary Axe", "London EC3A 8BF", "United Kingdom"],
      phone: "+44 20 7123 4567"
    },
    {
      city: "New York",
      address: ["One World Trade Center", "285 Fulton Street, Suite 8500", "New York, NY 10007, United States"],
      phone: "+1 212 123 4567"
    }
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitMessage('');

    // Simulate API call
    setTimeout(() => {
      setSubmitMessage('Message Sent Successfully');
      setIsSubmitting(false);
      
      // Reset form after 3 seconds
      setTimeout(() => {
        setFormData({
          firstName: '',
          lastName: '',
          email: '',
          phone: '',
          company: '',
          subject: '',
          message: ''
        });
        setSubmitMessage('');
      }, 3000);
    }, 2000);
  };

  return (
    <>
      <PageHeaderSection
        title="Çalışma Alanlarımız"
        breadcrumb="Ana Sayfa / Hizmetlerimiz"
        backgroundImage={istanbulImage}
      />
      <div className="contact-page">
        {/* Background */}
        <div className="background-wrapper">
          <div className="bg-pattern"></div>
        </div>

        {/* Main Content */}
        <div className="main-content">
          {/* Hero Section */}
          <section className="contact-hero">
            <div className="hero-content">
              <h1 className="page-title">{t('contact.title')}</h1>
              <p className="page-subtitle">
                {t('contact.subtitle')}
              </p>
            </div>
          </section>

          {/* Contact Content */}
          <section className="contact-container">
            {/* Contact Information */}
            <div className="contact-info">
              <div className="info-section">
                <h2 className="info-title">{t('contact.ourOffices')}</h2>
                
                {offices.map((office, index) => (
                  <div key={index} className="office-card">
                    <h3 className="office-name">{office.city}</h3>
                    <div className="office-details">
                      {office.address.map((line, i) => (
                        <p key={i}>{line}</p>
                      ))}
                      <p style={{ marginTop: '15px' }}>
                        <a href={`tel:${office.phone}`}>{office.phone}</a>
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="contact-methods">
                <div className="method-card">
                  <div className="method-icon">⏰</div>
                  <div className="method-label">{t('contact.hours')}</div>
                  <div className="method-value">{t('contact.businessHours')}</div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="contact-form-wrapper">
              <div className="form-header">
                <h2 className="form-title">{t('contact.formTitle')}</h2>
                <p className="form-description">
                  {t('contact.formDescription')}
                </p>
              </div>

              <form className="contact-form" onSubmit={handleSubmit}>
                <div className="form-row">
                  <div className="form-group">
                    <input
                      type="text"
                      className="form-input"
                      id="firstName"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleInputChange}
                      placeholder=" "
                      required
                    />
                    <label className="form-label" htmlFor="firstName">{t('contact.firstName')}</label>
                  </div>
                  <div className="form-group">
                    <input
                      type="text"
                      className="form-input"
                      id="lastName"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleInputChange}
                      placeholder=" "
                      required
                    />
                    <label className="form-label" htmlFor="lastName">{t('contact.lastName')}</label>
                  </div>
                </div>

                <div className="form-row">
                  <div className="form-group">
                    <input
                      type="email"
                      className="form-input"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder=" "
                      required
                    />
                    <label className="form-label" htmlFor="email">{t('contact.emailAddress')}</label>
                  </div>
                  <div className="form-group">
                    <input
                      type="tel"
                      className="form-input"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      placeholder=" "
                      required
                    />
                    <label className="form-label" htmlFor="phone">{t('contact.phoneNumber')}</label>
                  </div>
                </div>

                <div className="form-group full-width">
                  <input
                    type="text"
                    className="form-input"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleInputChange}
                    placeholder=" "
                    required
                  />
                  <label className="form-label" htmlFor="company">{t('contact.company')}</label>
                </div>

                <div className="form-group full-width">
                  <select
                    className="form-select"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    required
                  >
                    <option value="" disabled>{t('contact.selectSubject')}</option>
                    <option value="corporate">{t('contact.subjects.corporate')}</option>
                    <option value="ma">{t('contact.subjects.ma')}</option>
                    <option value="ip">{t('contact.subjects.ip')}</option>
                    <option value="realestate">{t('contact.subjects.realestate')}</option>
                    <option value="litigation">{t('contact.subjects.litigation')}</option>
                    <option value="other">{t('contact.subjects.other')}</option>
                  </select>
                </div>

                <div className="form-group full-width">
                  <textarea
                    className="form-textarea"
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder=" "
                    required
                  ></textarea>
                  <label className="form-label" htmlFor="message">{t('contact.yourMessage')}</label>
                </div>

                <div className="submit-section">
                  <button 
                    type="submit" 
                    className="submit-btn"
                    disabled={isSubmitting}
                    style={{
                      opacity: isSubmitting ? 0.7 : 1,
                      background: submitMessage ? 'linear-gradient(135deg, #1a1a1a, #2a2a2a)' : ''
                    }}
                  >
                    {isSubmitting ? t('contact.sending') : submitMessage || t('contact.sendMessage')}
                  </button>
                  <p className="privacy-note">
                    {t('contact.privacyNote.text')} 
                    <a href="/privacy">{t('contact.privacyNote.privacy')}</a> {t('contact.privacyNote.and')} 
                    <a href="/terms">{t('contact.privacyNote.terms')}</a>.
                  </p>
                </div>
              </form>
            </div>
          </section>

          {/* Map Section */}
          <section className="map-section">
            <div className="map-container">
              <div className="map-placeholder">
                <div className="map-overlay"></div>
                <span>Interactive Map</span>
              </div>
            </div>
          </section>
        </div>
      </div>
    </>
  );
};

export default ContactUs;