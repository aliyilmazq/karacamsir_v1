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
        title="Contact"
        breadcrumb="Home / Contact"
        backgroundImage={istanbulImage}
      />
      <div className="contact-page">
        {/* Background */}
        <div className="background-wrapper">
          <div className="bg-pattern"></div>
        </div>

        {/* Main Content */}
        <div className="main-content">
          {/* Contact Content */}
          <section className="contact-container">
            {/* Contact Information */}
            <div className="contact-info" style={{ gridColumn: '1 / -1', width: '100%' }}>
              <div className="info-section">
                <h2 className="info-title">{t('contact.ourOffices')}</h2>
                
                <div style={{ 
                  display: 'grid', 
                  gridTemplateColumns: 'repeat(4, 1fr)', 
                  gap: '20px',
                  marginBottom: '40px'
                }}>
                  {offices.map((office, index) => (
                    <div key={index} className="office-card" style={{ marginBottom: 0 }}>
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
              </div>
            </div>

            {/* Contact Form */}
            <div style={{
              gridColumn: '1 / -1', 
              background: '#f8f9fa', 
              border: '1px solid #e0e0e0',
              padding: '30px 40px',
              marginTop: '40px'
            }}>
              <div className="form-header" style={{marginBottom: 25}}>
                <h2 style={{color: '#333', fontSize: 20, fontWeight: 500, marginBottom: 5}}>Get in Touch</h2>
                <p style={{color: '#666', fontSize: 14}}>We'll respond within 24 hours</p>
              </div>
              <form id="contactForm" onSubmit={handleSubmit}>
                <div style={{display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 20, marginBottom: 20}}>
                  <div className="form-group">
                    <input 
                      type="text" 
                      id="firstName" 
                      name="firstName" 
                      placeholder="First Name *" 
                      value={formData.firstName} 
                      onChange={handleInputChange} 
                      required 
                      style={{
                        width: '100%', 
                        padding: '12px 16px', 
                        border: '1px solid #ddd', 
                        fontSize: 14, 
                        color: '#333', 
                        backgroundColor: '#fff', 
                        transition: 'all 0.3s',
                        outline: 'none'
                      }} 
                    />
                  </div>
                  <div className="form-group">
                    <input 
                      type="text" 
                      id="lastName" 
                      name="lastName" 
                      placeholder="Last Name *" 
                      value={formData.lastName} 
                      onChange={handleInputChange} 
                      required 
                      style={{
                        width: '100%', 
                        padding: '12px 16px', 
                        border: '1px solid #ddd', 
                        fontSize: 14, 
                        color: '#333', 
                        backgroundColor: '#fff', 
                        transition: 'all 0.3s',
                        outline: 'none'
                      }} 
                    />
                  </div>
                  <div className="form-group">
                    <input 
                      type="email" 
                      id="email" 
                      name="email" 
                      placeholder="Email *" 
                      value={formData.email} 
                      onChange={handleInputChange} 
                      required 
                      style={{
                        width: '100%', 
                        padding: '12px 16px', 
                        border: '1px solid #ddd', 
                        fontSize: 14, 
                        color: '#333', 
                        backgroundColor: '#fff', 
                        transition: 'all 0.3s',
                        outline: 'none'
                      }} 
                    />
                  </div>
                  <div className="form-group">
                    <input 
                      type="tel" 
                      id="phone" 
                      name="phone" 
                      placeholder="Phone" 
                      value={formData.phone} 
                      onChange={handleInputChange} 
                      style={{
                        width: '100%', 
                        padding: '12px 16px', 
                        border: '1px solid #ddd', 
                        fontSize: 14, 
                        color: '#333', 
                        backgroundColor: '#fff', 
                        transition: 'all 0.3s',
                        outline: 'none'
                      }} 
                    />
                  </div>
                </div>
                <div style={{display: 'grid', gridTemplateColumns: '1fr 2fr 1fr', gap: 20, alignItems: 'start'}}>
                  <input 
                    type="text" 
                    id="company" 
                    name="company" 
                    placeholder="Company" 
                    value={formData.company} 
                    onChange={handleInputChange} 
                    style={{
                      width: '100%', 
                      padding: '12px 16px', 
                      border: '1px solid #ddd', 
                      fontSize: 14, 
                      color: '#333', 
                      backgroundColor: '#fff', 
                      transition: 'all 0.3s',
                      outline: 'none'
                    }} 
                  />
                  <textarea 
                    id="message" 
                    name="message" 
                    placeholder="Your message *" 
                    value={formData.message} 
                    onChange={handleInputChange} 
                    required 
                    style={{
                      width: '100%', 
                      padding: '12px 16px', 
                      border: '1px solid #ddd', 
                      fontSize: 14, 
                      color: '#333', 
                      backgroundColor: '#fff', 
                      transition: 'all 0.3s', 
                      resize: 'vertical', 
                      minHeight: 50,
                      maxHeight: 100,
                      outline: 'none'
                    }} 
                  />
                  <button 
                    type="submit" 
                    disabled={isSubmitting} 
                    style={{
                      width: '100%', 
                      padding: '12px 30px', 
                      background: '#5D3FD3', 
                      color: 'white', 
                      border: 'none', 
                      fontSize: 14, 
                      fontWeight: 500, 
                      cursor: 'pointer', 
                      transition: 'all 0.3s', 
                      opacity: isSubmitting ? 0.7 : 1,
                      outline: 'none'
                    }}
                    onMouseEnter={e => {
                      if (!isSubmitting) e.currentTarget.style.background = '#702963';
                    }}
                    onMouseLeave={e => {
                      e.currentTarget.style.background = '#5D3FD3';
                    }}
                  >
                    {isSubmitting ? 'Sending...' : submitMessage ? 'Sent ✓' : 'Send Message'}
                  </button>
                </div>
              </form>
            </div>
          </section>
        </div>
      </div>
    </>
  );
};

export default ContactUs;