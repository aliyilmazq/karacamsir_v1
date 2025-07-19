import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
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

  // Responsive helper
  const getResponsiveStyles = () => {
    const isMobile = window.innerWidth < 768;
    const isTablet = window.innerWidth >= 768 && window.innerWidth < 1024;
    return { isMobile, isTablet };
  };

  const [windowSize, setWindowSize] = useState(getResponsiveStyles());

  useEffect(() => {
    const handleResize = () => {
      setWindowSize(getResponsiveStyles());
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const offices = [
    {
      city: "Istanbul",
      address: ["Kısıklı Mah. Gurbet Sokak", "Rumeli Plaza No: 12/5", "Üsküdar, Istanbul, Turkey"],
      phone: "+90 212 123 4567"
    },
    {
      city: "Astana",
      address: ["Koskharbayeva St. 10/115", "010010 Astana, Kazakhstan"],
      phone: "+7 705 800 50 20"
    },
    {
      city: "London",
      address: ["115 Mount Street", "Flat 3", "London W1K 3NQ, United Kingdom"],
      phone: "+44 20 7123 4567"
    },
    {
      city: "New York",
      address: ["447 Broadway", "2nd Floor Suite #2069", "New York, NY 10013, United States"],
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
      <div style={{ backgroundColor: '#ffffff', minHeight: '100vh' }}>
        {/* Main Content */}
        <div style={{ position: 'relative', zIndex: 10 }}>
          {/* Contact Content */}
          <section style={{ 
            maxWidth: '80rem',
            margin: '0 auto',
            padding: windowSize.isMobile ? '2rem 1rem' : '3rem 2rem'
          }}>
            {/* Office Information - Full Width */}
            <div style={{ width: '100%', marginBottom: windowSize.isMobile ? '2rem' : '3rem' }}>
              <div>
                <h2 style={{ 
                  fontSize: windowSize.isMobile ? '1.5rem' : '2rem',
                  fontWeight: 300,
                  marginBottom: windowSize.isMobile ? '1.5rem' : '2rem',
                  color: '#2e0d50',
                  textAlign: 'center'
                }}>
                  {t('contact.ourOffices', 'Our Offices')}
                </h2>
                
                <div style={{ 
                  display: 'grid', 
                  gridTemplateColumns: windowSize.isMobile ? '1fr' : windowSize.isTablet ? 'repeat(2, 1fr)' : 'repeat(4, 1fr)', 
                  gap: windowSize.isMobile ? '1rem' : '1.5rem',
                  marginBottom: windowSize.isMobile ? '2rem' : '3rem'
                }}>
                  {offices.map((office, index) => (
                    <div 
                      key={index} 
                      style={{
                        backgroundColor: '#ffffff',
                        border: '1px solid #e0e0e0',
                        padding: windowSize.isMobile ? '1.5rem' : '2rem',
                        borderRadius: '8px',
                        transition: 'all 0.3s ease',
                        cursor: 'pointer',
                        position: 'relative',
                        overflow: 'hidden'
                      }}
                      onMouseEnter={e => {
                        if (!windowSize.isMobile) {
                          e.currentTarget.style.transform = 'translateY(-4px)';
                          e.currentTarget.style.boxShadow = '0 8px 24px rgba(0,0,0,0.1)';
                          e.currentTarget.style.borderColor = '#2e0d50';
                        }
                      }}
                      onMouseLeave={e => {
                        e.currentTarget.style.transform = 'translateY(0)';
                        e.currentTarget.style.boxShadow = 'none';
                        e.currentTarget.style.borderColor = '#e0e0e0';
                      }}
                    >
                      <h3 style={{ 
                        fontSize: windowSize.isMobile ? '1.125rem' : '1.25rem',
                        fontWeight: 400,
                        marginBottom: '1rem',
                        color: '#2e0d50',
                        letterSpacing: '1px'
                      }}>
                        {office.city}
                      </h3>
                      <div style={{
                        fontSize: windowSize.isMobile ? '0.875rem' : '0.9375rem',
                        lineHeight: 1.8,
                        color: '#666666'
                      }}>
                        {office.address.map((line, i) => (
                          <p key={i} style={{ marginBottom: '0.5rem' }}>{line}</p>
                        ))}
                        <p style={{ marginTop: '1rem' }}>
                          <a 
                            href={`tel:${office.phone}`}
                            style={{
                              color: '#2e0d50',
                              textDecoration: 'none',
                              transition: 'color 0.3s ease',
                              fontWeight: 500
                            }}
                            onMouseEnter={e => e.currentTarget.style.textDecoration = 'underline'}
                            onMouseLeave={e => e.currentTarget.style.textDecoration = 'none'}
                          >
                            {office.phone}
                          </a>
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Contact Form - Full Width */}
            <div style={{
              width: '100%',
              background: '#f8f9fa', 
              border: '1px solid #e0e0e0',
              padding: windowSize.isMobile ? '1.5rem' : '2.5rem 3rem',
              borderRadius: '8px'
            }}>
              <div style={{ marginBottom: windowSize.isMobile ? '1.5rem' : '2rem' }}>
                <h2 style={{
                  color: '#333', 
                  fontSize: windowSize.isMobile ? '1.25rem' : '1.5rem', 
                  fontWeight: 500, 
                  marginBottom: '0.5rem'
                }}>
                  Get in Touch
                </h2>
                <p style={{
                  color: '#666', 
                  fontSize: windowSize.isMobile ? '0.875rem' : '1rem'
                }}>
                  We'll respond within 24 hours
                </p>
              </div>
              <form id="contactForm" onSubmit={handleSubmit}>
                {/* First Row - Name Fields */}
                <div style={{
                  display: 'grid', 
                  gridTemplateColumns: windowSize.isMobile ? '1fr' : 'repeat(2, 1fr)', 
                  gap: windowSize.isMobile ? '1rem' : '1.5rem', 
                  marginBottom: windowSize.isMobile ? '1rem' : '1.5rem'
                }}>
                  <div>
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
                        padding: windowSize.isMobile ? '12px 16px' : '14px 18px', 
                        border: '1px solid #ddd', 
                        borderRadius: '4px',
                        fontSize: windowSize.isMobile ? '16px' : '1rem', 
                        color: '#333', 
                        backgroundColor: '#fff', 
                        transition: 'all 0.3s',
                        outline: 'none',
                        WebkitAppearance: 'none'
                      }}
                      onFocus={e => e.currentTarget.style.borderColor = '#2e0d50'}
                      onBlur={e => e.currentTarget.style.borderColor = '#ddd'}
                    />
                  </div>
                  <div>
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
                        padding: windowSize.isMobile ? '12px 16px' : '14px 18px', 
                        border: '1px solid #ddd', 
                        borderRadius: '4px',
                        fontSize: windowSize.isMobile ? '16px' : '1rem', 
                        color: '#333', 
                        backgroundColor: '#fff', 
                        transition: 'all 0.3s',
                        outline: 'none',
                        WebkitAppearance: 'none'
                      }}
                      onFocus={e => e.currentTarget.style.borderColor = '#2e0d50'}
                      onBlur={e => e.currentTarget.style.borderColor = '#ddd'}
                    />
                  </div>
                </div>

                {/* Second Row - Contact Fields */}
                <div style={{
                  display: 'grid', 
                  gridTemplateColumns: windowSize.isMobile ? '1fr' : 'repeat(2, 1fr)', 
                  gap: windowSize.isMobile ? '1rem' : '1.5rem', 
                  marginBottom: windowSize.isMobile ? '1rem' : '1.5rem'
                }}>
                  <div>
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
                        padding: windowSize.isMobile ? '12px 16px' : '14px 18px', 
                        border: '1px solid #ddd', 
                        borderRadius: '4px',
                        fontSize: windowSize.isMobile ? '16px' : '1rem', 
                        color: '#333', 
                        backgroundColor: '#fff', 
                        transition: 'all 0.3s',
                        outline: 'none',
                        WebkitAppearance: 'none'
                      }}
                      onFocus={e => e.currentTarget.style.borderColor = '#2e0d50'}
                      onBlur={e => e.currentTarget.style.borderColor = '#ddd'}
                    />
                  </div>
                  <div>
                    <input 
                      type="tel" 
                      id="phone" 
                      name="phone" 
                      placeholder="Phone" 
                      value={formData.phone} 
                      onChange={handleInputChange} 
                      style={{
                        width: '100%', 
                        padding: windowSize.isMobile ? '12px 16px' : '14px 18px', 
                        border: '1px solid #ddd', 
                        borderRadius: '4px',
                        fontSize: windowSize.isMobile ? '16px' : '1rem', 
                        color: '#333', 
                        backgroundColor: '#fff', 
                        transition: 'all 0.3s',
                        outline: 'none',
                        WebkitAppearance: 'none'
                      }}
                      onFocus={e => e.currentTarget.style.borderColor = '#2e0d50'}
                      onBlur={e => e.currentTarget.style.borderColor = '#ddd'}
                    />
                  </div>
                </div>

                {/* Third Row - Company */}
                <div style={{ marginBottom: windowSize.isMobile ? '1rem' : '1.5rem' }}>
                  <input 
                    type="text" 
                    id="company" 
                    name="company" 
                    placeholder="Company" 
                    value={formData.company} 
                    onChange={handleInputChange} 
                    style={{
                      width: '100%', 
                      padding: windowSize.isMobile ? '12px 16px' : '14px 18px', 
                      border: '1px solid #ddd', 
                      borderRadius: '4px',
                      fontSize: windowSize.isMobile ? '16px' : '1rem', 
                      color: '#333', 
                      backgroundColor: '#fff', 
                      transition: 'all 0.3s',
                      outline: 'none',
                      WebkitAppearance: 'none'
                    }}
                    onFocus={e => e.currentTarget.style.borderColor = '#2e0d50'}
                    onBlur={e => e.currentTarget.style.borderColor = '#ddd'}
                  />
                </div>

                {/* Fourth Row - Message */}
                <div style={{ marginBottom: windowSize.isMobile ? '1.5rem' : '2rem' }}>
                  <textarea 
                    id="message" 
                    name="message" 
                    placeholder="Your message *" 
                    value={formData.message} 
                    onChange={handleInputChange} 
                    required 
                    rows={windowSize.isMobile ? 5 : 4}
                    style={{
                      width: '100%', 
                      padding: windowSize.isMobile ? '12px 16px' : '14px 18px', 
                      border: '1px solid #ddd', 
                      borderRadius: '4px',
                      fontSize: windowSize.isMobile ? '16px' : '1rem', 
                      color: '#333', 
                      backgroundColor: '#fff', 
                      transition: 'all 0.3s', 
                      resize: 'vertical', 
                      minHeight: windowSize.isMobile ? '120px' : '100px',
                      maxHeight: '300px',
                      outline: 'none',
                      WebkitAppearance: 'none',
                      fontFamily: 'inherit'
                    }}
                    onFocus={e => e.currentTarget.style.borderColor = '#2e0d50'}
                    onBlur={e => e.currentTarget.style.borderColor = '#ddd'}
                  />
                </div>

                {/* Submit Button */}
                <div style={{ 
                  display: 'flex',
                  flexDirection: windowSize.isMobile ? 'column' : 'row',
                  justifyContent: windowSize.isMobile ? 'center' : 'space-between',
                  alignItems: 'center',
                  gap: windowSize.isMobile ? '1rem' : '2rem'
                }}>
                  <button 
                    type="submit" 
                    disabled={isSubmitting} 
                    style={{
                      width: windowSize.isMobile ? '100%' : 'auto',
                      padding: windowSize.isMobile ? '14px 32px' : '14px 40px', 
                      background: '#2e0d50', 
                      color: 'white', 
                      border: 'none', 
                      borderRadius: '4px',
                      fontSize: windowSize.isMobile ? '16px' : '0.875rem', 
                      fontWeight: 600, 
                      letterSpacing: '1px',
                      textTransform: 'uppercase',
                      cursor: 'pointer', 
                      transition: 'all 0.3s', 
                      opacity: isSubmitting ? 0.7 : 1,
                      outline: 'none',
                      minHeight: '48px'
                    }}
                    onMouseEnter={e => {
                      if (!isSubmitting && !windowSize.isMobile) {
                        e.currentTarget.style.background = '#2e0d50';
                        e.currentTarget.style.transform = 'translateY(-2px)';
                        e.currentTarget.style.boxShadow = '0 10px 30px rgba(46, 13, 80, 0.3)';
                      }
                    }}
                    onMouseLeave={e => {
                      e.currentTarget.style.background = '#2e0d50';
                      e.currentTarget.style.transform = 'translateY(0)';
                      e.currentTarget.style.boxShadow = 'none';
                    }}
                  >
                    {isSubmitting ? 'Sending...' : submitMessage ? 'Sent ✓' : 'Send Message'}
                  </button>
                  
                  <p style={{
                    fontSize: windowSize.isMobile ? '0.75rem' : '0.8125rem',
                    color: '#666666',
                    margin: 0,
                    textAlign: windowSize.isMobile ? 'center' : 'left',
                    maxWidth: windowSize.isMobile ? '100%' : '300px'
                  }}>
                    By submitting this form, you agree to our{' '}
                    <a href="/privacy" style={{ color: '#2e0d50', textDecoration: 'none' }}>
                      Privacy Policy
                    </a>
                  </p>
                </div>
              </form>
            </div>
          </section>
        </div>
      </div>

      <style>
        {`
          /* Prevent horizontal scroll on mobile */
          body {
            overflow-x: hidden;
          }
          
          /* Smooth scrolling */
          html {
            scroll-behavior: smooth;
            -webkit-overflow-scrolling: touch;
          }
          
          /* Remove tap highlight on mobile */
          * {
            -webkit-tap-highlight-color: transparent;
          }
          
          /* Better focus states for accessibility */
          input:focus,
          textarea:focus,
          button:focus {
            outline: 2px solid #2e0d50;
            outline-offset: 2px;
          }
          
          /* Fix iOS zoom on input focus */
          @media screen and (max-width: 768px) {
            input[type="text"],
            input[type="email"],
            input[type="tel"],
            textarea {
              font-size: 16px !important;
            }
          }
        `}
      </style>
    </>
  );
};

export default ContactUs;