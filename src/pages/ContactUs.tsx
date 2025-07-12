import React, { useState, useEffect } from 'react';

const ContactUs = () => {
  const [scrollY, setScrollY] = useState(0);
  const [activeOffice, setActiveOffice] = useState<number | null>(0);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    subject: '',
    message: ''
  });

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const offices = [
    {
      id: 0,
      city: "Istanbul",
      country: "Turkey",
      address: "Levent Business District",
      street: "Büyükdere Caddesi No: 123",
      postal: "34330 Beşiktaş, Istanbul",
      phone: "+90 212 555 00 00",
      email: "istanbul@karacam-sir.com",
      timezone: "GMT+3",
      mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3007.8639!2d29.0!3d41.1!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDHCsDA2JzAwLjAiTiAyOcKwMDAnMDAuMCJF!5e0!3m2!1sen!2str!4v1234567890",
      flag: "https://images.unsplash.com/photo-1564410267841-915d8e4d71ea?w=400&h=300&fit=crop",
      isHeadquarters: true
    },
    {
      id: 1,
      city: "London",
      country: "United Kingdom",
      address: "City of London",
      street: "1 Poultry, Bank",
      postal: "EC2R 8EJ London",
      phone: "+44 20 7123 4567",
      email: "london@karacam-sir.com",
      timezone: "GMT+0",
      mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2483.0!2d-0.1!3d51.5!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNTHCsDMwJzAwLjAiTiAwwrAwNicwMC4wIlc!5e0!3m2!1sen!2suk!4v1234567890",
      flag: "https://images.unsplash.com/photo-1543589077-47d81606c1bf?w=400&h=300&fit=crop"
    },
    {
      id: 2,
      city: "Astana",
      country: "Kazakhstan",
      address: "Nur-Sultan Financial District",
      street: "Mangilik El Avenue 55/20",
      postal: "010000 Astana",
      phone: "+7 7172 123 456",
      email: "astana@karacam-sir.com",
      timezone: "GMT+6",
      mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2503.0!2d71.4!3d51.1!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNTHCsDA2JzAwLjAiTiA3McKwMjQnMDAuMCJF!5e0!3m2!1sen!2skz!4v1234567890",
      flag: "https://images.unsplash.com/photo-1578645635737-6a88e706e0f1?w=400&h=300&fit=crop"
    },
    {
      id: 3,
      city: "New York",
      country: "United States",
      address: "Manhattan",
      street: "590 Madison Avenue",
      postal: "New York, NY 10022",
      phone: "+1 212 555 0123",
      email: "newyork@karacam-sir.com",
      timezone: "GMT-5",
      mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.0!2d-73.9!3d40.7!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDDCsDQ1JzAwLjAiTiA3M8KwNTgnMDAuMCJX!5e0!3m2!1sen!2sus!4v1234567890",
      flag: "https://images.unsplash.com/photo-1485470733090-0aae1788d5af?w=400&h=300&fit=crop"
    }
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const containerStyle = {
    maxWidth: '80rem',
    margin: '0 auto'
  };

  return (
    <div style={{ backgroundColor: '#522d72', color: 'white' }}>
      {/* Hero Section */}
      <section style={{ 
        padding: '8rem 2rem 5rem', 
        backgroundColor: '#522d72',
        position: 'relative',
        overflow: 'hidden'
      }}>
        <div style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          fontSize: '20rem',
          opacity: 0.05,
          fontWeight: 200,
          pointerEvents: 'none'
        }}>
          🌍
        </div>
        <div style={containerStyle}>
          <h1 style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)', fontWeight: 200, lineHeight: 1.1, marginBottom: '2rem' }}>
            Global Reach,
            <span style={{ display: 'block', color: '#a78bfa' }}>Local Expertise</span>
          </h1>
          <div style={{ width: '6rem', height: '1px', backgroundColor: '#8b5cf6', marginBottom: '2rem' }}></div>
          <p style={{ fontSize: '1.25rem', color: '#d8b4fe', maxWidth: '42rem', fontWeight: 300, lineHeight: 1.6 }}>
            With offices in four major business hubs, we provide seamless legal services 
            across continents and time zones.
          </p>
        </div>
      </section>

      {/* Global Offices Section */}
      <section style={{ padding: '5rem 2rem', borderTop: '1px solid rgba(0,0,0,0.3)' }}>
        <div style={containerStyle}>
          <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
            <h2 style={{ fontSize: '2rem', fontWeight: 200, marginBottom: '1rem' }}>Our Global Offices</h2>
            <p style={{ color: '#d8b4fe' }}>Serving clients worldwide from strategic locations</p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2rem', marginBottom: '4rem' }}>
            {offices.map((office, index) => (
              <div
                key={office.id}
                style={{
                  border: '1px solid rgba(0,0,0,0.3)',
                  padding: '2rem',
                  borderRadius: '8px',
                  cursor: 'pointer',
                  transition: 'all 0.3s',
                  backgroundColor: activeOffice === index ? '#8b5cf6' : 'transparent',
                  transform: activeOffice === index ? 'scale(1.05)' : 'scale(1)',
                  opacity: scrollY > 100 ? 1 : 0,
                  animation: `fadeInUp 0.8s ease ${index * 0.1}s forwards`
                }}
                onClick={() => setActiveOffice(index)}
              >
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'start', marginBottom: '1rem' }}>
                  <div>
                    <img 
                      src={office.flag} 
                      alt={`${office.country} flag`}
                      style={{ 
                        width: '60px', 
                        height: '40px', 
                        borderRadius: '4px', 
                        objectFit: 'cover',
                        marginBottom: '0.5rem',
                        boxShadow: '0 2px 4px rgba(0,0,0,0.2)'
                      }} 
                    />
                    <h3 style={{ fontSize: '1.5rem', fontWeight: 400, marginBottom: '0.25rem' }}>
                      {office.city}
                      {office.isHeadquarters && (
                        <span style={{ 
                          fontSize: '0.75rem', 
                          backgroundColor: '#ffc61a', 
                          color: '#522d72',
                          padding: '0.25rem 0.5rem',
                          borderRadius: '4px',
                          marginLeft: '0.5rem',
                          fontWeight: 600
                        }}>
                          HQ
                        </span>
                      )}
                    </h3>
                    <p style={{ color: '#d8b4fe', fontSize: '0.875rem' }}>{office.country}</p>
                  </div>
                  <div style={{ fontSize: '0.75rem', color: '#a78bfa' }}>{office.timezone}</div>
                </div>
                <div style={{ fontSize: '0.875rem', lineHeight: 1.6 }}>
                  <p style={{ marginBottom: '0.5rem' }}>{office.address}</p>
                  <p style={{ color: '#d8b4fe', marginBottom: '1rem' }}>
                    {office.street}<br />
                    {office.postal}
                  </p>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                    <a href={`tel:${office.phone}`} style={{ color: '#a78bfa', textDecoration: 'none', transition: 'color 0.3s' }}
                       onMouseEnter={e => e.currentTarget.style.color = 'white'}
                       onMouseLeave={e => e.currentTarget.style.color = '#a78bfa'}>
                      📞 {office.phone}
                    </a>
                    <a href={`mailto:${office.email}`} style={{ color: '#a78bfa', textDecoration: 'none', transition: 'color 0.3s' }}
                       onMouseEnter={e => e.currentTarget.style.color = 'white'}
                       onMouseLeave={e => e.currentTarget.style.color = '#a78bfa'}>
                      ✉️ {office.email}
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Map Section */}
          {activeOffice !== null && (
            <div style={{ 
              height: '400px', 
              borderRadius: '8px', 
              overflow: 'hidden',
              border: '1px solid rgba(0,0,0,0.3)'
            }}>
              <iframe
                src={offices[activeOffice].mapUrl}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          )}
        </div>
      </section>

      {/* Contact Form Section */}
      <section style={{ padding: '5rem 2rem', borderTop: '1px solid rgba(0,0,0,0.3)' }}>
        <div style={{ ...containerStyle, maxWidth: '60rem' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '4rem' }}>
            <div>
              <h2 style={{ fontSize: '2.5rem', fontWeight: 200, marginBottom: '2rem' }}>Get in Touch</h2>
              <p style={{ color: '#d8b4fe', fontSize: '1.125rem', lineHeight: 1.6, marginBottom: '2rem' }}>
                Whether you need immediate legal assistance or want to explore how we can support 
                your business globally, our team is ready to help.
              </p>
              
              <div style={{ marginBottom: '3rem' }}>
                <h3 style={{ fontSize: '1.25rem', marginBottom: '1rem' }}>Response Times</h3>
                <ul style={{ listStyle: 'none', padding: 0 }}>
                  <li style={{ marginBottom: '0.5rem', color: '#d8b4fe' }}>
                    ⏱️ Urgent matters: Within 2 hours
                  </li>
                  <li style={{ marginBottom: '0.5rem', color: '#d8b4fe' }}>
                    📧 General inquiries: Within 24 hours
                  </li>
                  <li style={{ marginBottom: '0.5rem', color: '#d8b4fe' }}>
                    🌍 International cases: Coordinated response
                  </li>
                </ul>
              </div>

              <div>
                <h3 style={{ fontSize: '1.25rem', marginBottom: '1rem' }}>24/7 Emergency Line</h3>
                <a href="tel:+902125550099" style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  padding: '1rem 2rem',
                  backgroundColor: '#8b5cf6',
                  color: 'white',
                  textDecoration: 'none',
                  borderRadius: '4px',
                  fontSize: '1.125rem',
                  fontWeight: 600,
                  transition: 'all 0.3s'
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.backgroundColor = 'rgba(0,0,0,0.5)';
                  e.currentTarget.style.transform = 'translateY(-2px)';
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.backgroundColor = '#8b5cf6';
                  e.currentTarget.style.transform = 'translateY(0)';
                }}>
                  🚨 +90 212 555 00 99
                </a>
              </div>
            </div>

            <form onSubmit={handleSubmit} style={{
              backgroundColor: 'rgba(0, 0, 0, 0.1)',
              padding: '2.5rem',
              borderRadius: '8px',
              border: '1px solid rgba(0,0,0,0.3)',
              minWidth: '0'
            }}>
              <div style={{ display: 'grid', gap: '1.5rem' }}>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                  <input
                    type="text"
                    name="name"
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    style={{
                      padding: '1rem',
                      backgroundColor: 'rgba(255, 255, 255, 0.1)',
                      border: '1px solid rgba(255, 255, 255, 0.2)',
                      borderRadius: '4px',
                      color: 'white',
                      fontSize: '1rem',
                      outline: 'none',
                      transition: 'all 0.3s'
                    }}
                  />
                  <input
                    type="email"
                    name="email"
                    placeholder="Email Address"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    style={{
                      padding: '1rem',
                      backgroundColor: 'rgba(255, 255, 255, 0.1)',
                      border: '1px solid rgba(255, 255, 255, 0.2)',
                      borderRadius: '4px',
                      color: 'white',
                      fontSize: '1rem',
                      outline: 'none',
                      transition: 'all 0.3s'
                    }}
                  />
                </div>
                
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                  <input
                    type="tel"
                    name="phone"
                    placeholder="Phone Number"
                    value={formData.phone}
                    onChange={handleInputChange}
                    style={{
                      padding: '1rem',
                      backgroundColor: 'rgba(255, 255, 255, 0.1)',
                      border: '1px solid rgba(255, 255, 255, 0.2)',
                      borderRadius: '4px',
                      color: 'white',
                      fontSize: '1rem',
                      outline: 'none',
                      transition: 'all 0.3s'
                    }}
                  />
                  <input
                    type="text"
                    name="company"
                    placeholder="Company (Optional)"
                    value={formData.company}
                    onChange={handleInputChange}
                    style={{
                      padding: '1rem',
                      backgroundColor: 'rgba(255, 255, 255, 0.1)',
                      border: '1px solid rgba(255, 255, 255, 0.2)',
                      borderRadius: '4px',
                      color: 'white',
                      fontSize: '1rem',
                      outline: 'none',
                      transition: 'all 0.3s'
                    }}
                  />
                </div>

                <select
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  required
                  style={{
                    padding: '1rem',
                    backgroundColor: 'rgba(255, 255, 255, 0.1)',
                    border: '1px solid rgba(255, 255, 255, 0.2)',
                    borderRadius: '4px',
                    color: 'white',
                    fontSize: '1rem',
                    outline: 'none',
                    transition: 'all 0.3s'
                  }}
                >
                  <option value="" style={{ backgroundColor: '#522d72' }}>Select Subject</option>
                  <option value="corporate" style={{ backgroundColor: '#522d72' }}>Corporate Law</option>
                  <option value="litigation" style={{ backgroundColor: '#522d72' }}>Litigation</option>
                  <option value="international" style={{ backgroundColor: '#522d72' }}>International Business</option>
                  <option value="consultation" style={{ backgroundColor: '#522d72' }}>General Consultation</option>
                  <option value="other" style={{ backgroundColor: '#522d72' }}>Other</option>
                </select>

                <textarea
                  name="message"
                  placeholder="Tell us about your legal needs..."
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows={5}
                  style={{
                    padding: '1rem',
                    backgroundColor: 'rgba(255, 255, 255, 0.1)',
                    border: '1px solid rgba(255, 255, 255, 0.2)',
                    borderRadius: '4px',
                    color: 'white',
                    fontSize: '1rem',
                    outline: 'none',
                    transition: 'all 0.3s',
                    resize: 'vertical'
                  }}
                />

                <button type="submit" style={{
                  padding: '1.25rem 2rem',
                  backgroundColor: '#8b5cf6',
                  color: 'white',
                  border: 'none',
                  fontSize: '1.125rem',
                  fontWeight: 600,
                  cursor: 'pointer',
                  transition: 'all 0.3s',
                  borderRadius: '4px'
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.backgroundColor = 'rgba(0,0,0,0.5)';
                  e.currentTarget.style.transform = 'translateY(-2px)';
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.backgroundColor = '#8b5cf6';
                  e.currentTarget.style.transform = 'translateY(0)';
                }}>
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>

      {/* Global Network Section */}
      <section style={{ 
        padding: '5rem 2rem',
        background: 'linear-gradient(135deg, rgba(0,0,0,0.5) 0%, rgba(0,0,0,0.8) 100%)',
        textAlign: 'center'
      }}>
        <div style={containerStyle}>
          <h2 style={{ fontSize: '2.5rem', fontWeight: 200, marginBottom: '2rem' }}>
            Global Network, Local Solutions
          </h2>
          <p style={{ fontSize: '1.125rem', color: '#e9d5ff', marginBottom: '3rem', maxWidth: '800px', margin: '0 auto 3rem' }}>
            Our international presence enables us to provide coordinated legal services across jurisdictions, 
            ensuring seamless support for your global business operations.
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '2rem' }}>
            {[
              { number: '4', label: 'Global Offices' },
              { number: '15+', label: 'Partner Firms' },
              { number: '50+', label: 'Countries Covered' },
              { number: '24/7', label: 'Support Available' }
            ].map((stat, index) => (
              <div key={index} style={{
                opacity: scrollY > 800 ? 1 : 0,
                transform: scrollY > 800 ? 'scale(1)' : 'scale(0.8)',
                transition: `all 0.8s ease ${index * 0.1}s`
              }}>
                <div style={{ fontSize: '2.5rem', fontWeight: 200, marginBottom: '0.5rem' }}>
                  {stat.number}
                </div>
                <div style={{ fontSize: '1rem', color: '#e9d5ff', textTransform: 'uppercase', letterSpacing: '0.1em' }}>
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <style>
        {`
          @keyframes fadeInUp {
            from {
              opacity: 0;
              transform: translateY(30px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }
          
          input::placeholder,
          textarea::placeholder {
            color: rgba(255, 255, 255, 0.5);
          }
          
          input:focus,
          textarea:focus,
          select:focus {
            border-color: #8b5cf6 !important;
            background-color: rgba(255, 255, 255, 0.15) !important;
          }
        `}
      </style>
    </div>
  );
};

export default ContactUs;