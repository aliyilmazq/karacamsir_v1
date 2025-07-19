import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import './ContactLawFirm.css';

const ContactLawFirm: React.FC = () => {
  const { t } = useTranslation();
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    company: '',
    practiceArea: '',
    urgency: '',
    preferredContact: '',
    preferredTime: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState('');

  const offices = [
    {
      city: "Istanbul - Head Office",
      address: ["Kısıklı Mah. Gurbet Sokak", "Rumeli Plaza No: 12/5", "Üsküdar, Istanbul"],
      phone: "+90 212 123 4567",
      fax: "+90 212 123 4568",
      hours: "Monday - Friday: 09:00 - 18:00"
    },
    {
      city: "London Office",
      address: ["115 Mount Street", "Flat 3", "London W1K 3NQ"],
      phone: "+44 20 1234 5678",
      fax: "+44 20 1234 5679",
      hours: "Monday - Friday: 09:00 - 18:00 GMT"
    }
  ];

  const practiceAreas = [
    "Corporate Law",
    "Mergers and Acquisitions",
    "Intellectual Property Law",
    "Real Estate Law",
    "Labor and Social Security Law",
    "Commercial Law",
    "Tax Law",
    "Dispute Resolution",
    "Other"
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

    setTimeout(() => {
      setSubmitMessage('Your message has been sent successfully. We will get back to you as soon as possible.');
      setIsSubmitting(false);
      
      setTimeout(() => {
        setFormData({
          firstName: '',
          lastName: '',
          email: '',
          phone: '',
          company: '',
          practiceArea: '',
          urgency: '',
          preferredContact: '',
          preferredTime: '',
          message: ''
        });
        setSubmitMessage('');
      }, 5000);
    }, 2000);
  };

  return (
    <div className="contact-law-page">
      {/* Hero Section */}
      <section className="law-hero">
        <div className="hero-overlay"></div>
        <div className="hero-content">
          <h1 className="hero-title">Contact Us</h1>
          <p className="hero-subtitle">
            We are here for your legal needs. We are here to provide you with the best service.
          </p>
        </div>
      </section>

      {/* Quick Contact Bar */}
      <section className="quick-contact-bar">
        <div className="quick-contact-container">
          <div className="quick-contact-item">
            <span className="quick-icon">📞</span>
            <div className="quick-info">
              <span className="quick-label">Emergency Consultation Line</span>
              <a href="tel:+902121234567" className="quick-value">+90 212 123 4567</a>
            </div>
          </div>
          <div className="quick-contact-item">
            <span className="quick-icon">📧</span>
            <div className="quick-info">
              <span className="quick-label">Email</span>
              <a href="mailto:info@karacamsir.com" className="quick-value">info@karacamsir.com</a>
            </div>
          </div>
          <div className="quick-contact-item">
            <span className="quick-icon">⏰</span>
            <div className="quick-info">
              <span className="quick-label">Working Hours</span>
              <span className="quick-value">Monday - Friday: 09:00 - 18:00</span>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="contact-main">
        <div className="contact-container">
          <div className="contact-grid">
            {/* Left Side - Contact Form */}
            <div className="contact-form-section">
              <div className="form-header">
                <h2 className="form-title">Free Consultation Form</h2>
                <p className="form-subtitle">
                  You can request a free preliminary consultation by filling out the form. 
                  Our expert team will contact you as soon as possible.
                </p>
              </div>

              <form className="law-contact-form" onSubmit={handleSubmit}>
                <div className="form-row">
                  <div className="form-group">
                    <label className="form-label-static" htmlFor="firstName">First Name *</label>
                    <input
                      type="text"
                      className="form-input"
                      id="firstName"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label className="form-label-static" htmlFor="lastName">Last Name *</label>
                    <input
                      type="text"
                      className="form-input"
                      id="lastName"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                </div>

                <div className="form-row">
                  <div className="form-group">
                    <label className="form-label-static" htmlFor="email">Email *</label>
                    <input
                      type="email"
                      className="form-input"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label className="form-label-static" htmlFor="phone">Phone *</label>
                    <input
                      type="tel"
                      className="form-input"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                </div>

                <div className="form-group full-width">
                  <label className="form-label-static" htmlFor="company">Company/Organization</label>
                  <input
                    type="text"
                    className="form-input"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleInputChange}
                  />
                </div>

                <div className="form-row">
                  <div className="form-group">
                    <label className="form-label-static" htmlFor="practiceArea">Legal Matter *</label>
                    <select
                      className="form-select"
                      id="practiceArea"
                      name="practiceArea"
                      value={formData.practiceArea}
                      onChange={handleInputChange}
                      required
                    >
                      <option value="">Select</option>
                      {practiceAreas.map((area, index) => (
                        <option key={index} value={area}>{area}</option>
                      ))}
                    </select>
                  </div>
                  <div className="form-group">
                    <label className="form-label-static" htmlFor="urgency">Urgency *</label>
                    <select
                      className="form-select"
                      id="urgency"
                      name="urgency"
                      value={formData.urgency}
                      onChange={handleInputChange}
                      required
                    >
                      <option value="">Select</option>
                      <option value="urgent">Urgent (within 24 hours)</option>
                      <option value="normal">Normal (within 2-3 days)</option>
                      <option value="flexible">Flexible</option>
                    </select>
                  </div>
                </div>

                <div className="form-row">
                  <div className="form-group">
                    <label className="form-label-static" htmlFor="preferredContact">Preferred Contact Method</label>
                    <select
                      className="form-select"
                      id="preferredContact"
                      name="preferredContact"
                      value={formData.preferredContact}
                      onChange={handleInputChange}
                    >
                      <option value="">Select</option>
                      <option value="phone">Phone</option>
                      <option value="email">Email</option>
                      <option value="whatsapp">WhatsApp</option>
                    </select>
                  </div>
                  <div className="form-group">
                    <label className="form-label-static" htmlFor="preferredTime">Preferred Time</label>
                    <select
                      className="form-select"
                      id="preferredTime"
                      name="preferredTime"
                      value={formData.preferredTime}
                      onChange={handleInputChange}
                    >
                      <option value="">Select</option>
                      <option value="morning">Morning (09:00-12:00)</option>
                      <option value="afternoon">Afternoon (12:00-15:00)</option>
                      <option value="evening">Evening (15:00-18:00)</option>
                    </select>
                  </div>
                </div>

                <div className="form-group full-width">
                  <label className="form-label-static" htmlFor="message">Details About Your Matter *</label>
                  <textarea
                    className="form-textarea"
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    rows={6}
                    placeholder="Please share details about your legal matter..."
                    required
                  ></textarea>
                </div>

                <div className="form-footer">
                  <button 
                    type="submit" 
                    className="submit-btn"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? 'Sending...' : 'Send Consultation Request'}
                  </button>
                  {submitMessage && (
                    <div className="submit-message success">
                      {submitMessage}
                    </div>
                  )}
                  <p className="privacy-text">
                    By clicking submit, you agree to our <a href="/privacy">Privacy Policy</a> and{' '}
                    <a href="/terms">Terms of Use</a>.
                  </p>
                </div>
              </form>
            </div>

            {/* Right Side - Office Information */}
            <div className="contact-info-section">
              <h3 className="info-title">Our Offices</h3>
              
              {offices.map((office, index) => (
                <div key={index} className="office-card">
                  <h4 className="office-name">{office.city}</h4>
                  <div className="office-info">
                    <div className="info-item">
                      <span className="info-icon">📍</span>
                      <div className="info-content">
                        {office.address.map((line, i) => (
                          <p key={i}>{line}</p>
                        ))}
                      </div>
                    </div>
                    <div className="info-item">
                      <span className="info-icon">📞</span>
                      <div className="info-content">
                        <p>Tel: <a href={`tel:${office.phone}`}>{office.phone}</a></p>
                        <p>Fax: {office.fax}</p>
                      </div>
                    </div>
                    <div className="info-item">
                      <span className="info-icon">⏰</span>
                      <div className="info-content">
                        <p>{office.hours}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}

              {/* Additional Services */}
              <div className="services-card">
                <h4 className="services-title">Our Services</h4>
                <ul className="services-list">
                  <li>✓ 24/7 Emergency Legal Consultation</li>
                  <li>✓ Online Meeting Option</li>
                  <li>✓ Free Initial Consultation</li>
                  <li>✓ Corporate Legal Support</li>
                  <li>✓ Foreign Language Support</li>
                </ul>
              </div>

              {/* Map */}
              <div className="map-card">
                <h4 className="map-title">Our Location</h4>
                <div className="map-placeholder">
                  <span>Loading Map...</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Bottom CTA Section */}
      <section className="contact-cta">
        <div className="cta-container">
          <h2 className="cta-title">Contact Us Now</h2>
          <p className="cta-subtitle">
            Our expert team is here for professional legal support.
          </p>
          <div className="cta-buttons">
            <a href="tel:+902121234567" className="cta-btn primary">
              <span className="btn-icon">📞</span>
              Call Now
            </a>
            <a href="mailto:info@karacamsir.com" className="cta-btn secondary">
              <span className="btn-icon">📧</span>
              Send Email
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactLawFirm;