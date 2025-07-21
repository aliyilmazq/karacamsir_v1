import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import PageHeaderSection from "../components/PageHeaderSection/PageHeaderSection";
import istanbulImage from "../assets/istanbul_1.jpg";
import SubscriptionBox from "../components/SubscriptionBox/SubscriptionBox";

const AboutUs: React.FC = () => {
  const [hoveredService, setHoveredService] = useState<number | null>(null);

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

  const containerStyle = {
    maxWidth: '80rem',
    margin: '0 auto',
    padding: windowSize.isMobile ? '0 1rem' : '0 2rem'
  };


  const offices = [
    {
      city: 'Istanbul',
      address: 'Kısıklı Mah. Gurbet Sokak Rumeli Plaza No: 12/5 Üsküdar, Istanbul, Turkey',
      phone: '+90 216 329 00 60'
    },
    {
      city: 'Astana',
      address: 'Koskharbayeva St. 10/115 Astana, Kazakhstan 010010',
      phone: '+7 705 800 50 20'
    },
    {
      city: 'London',
      address: '115 Mount Street, Flat 3, London W1K 3NQ, United Kingdom',
      phone: '+44 20 1234 5678'
    },
    {
      city: 'New York',
      address: '447 Broadway, 2nd Floor Suite #2069, New York, NY 10013, United States',
      phone: '+1 212 123 4567'
    }
  ];

  const services = [
    {
      icon: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=400&h=400&fit=crop",
      title: "Corporate & Commercial Law",
      description: "We provide comprehensive services in company formations, mergers and acquisitions, commercial contracts, and corporate governance advisory.",
      link: "/what-we-are-doing"
    },
    {
      icon: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=400&h=400&fit=crop",
      title: "Project Finance & EPC",
      description: "We provide financing structuring and legal advisory services for large-scale infrastructure projects, energy investments, and EPC contracts.",
      link: "/what-we-are-doing"
    },
    {
      icon: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=400&h=400&fit=crop",
      title: "Technology & Ventures",
      description: "We offer innovative legal solutions for technology companies, startups, and venture capital investments in the digital economy.",
      link: "/what-we-are-doing"
    },
    {
      icon: "https://images.unsplash.com/photo-1589391886645-d51941baf7fb?w=400&h=400&fit=crop",
      title: "Dispute Resolution",
      description: "We effectively protect our clients' rights through litigation, arbitration, mediation, and alternative dispute resolution methods.",
      link: "/what-we-are-doing"
    }
  ];

  return (
    <>
      <PageHeaderSection
        title="About Us"
        breadcrumb="Home / About Us"
        backgroundImage={istanbulImage}
      />
      <div style={{ backgroundColor: '#ffffff', color: '#333' }}>
        {/* About Section - Mobile Optimized */}
        <section style={{ 
          padding: windowSize.isMobile ? '3rem 1rem' : '5rem 2rem', 
          backgroundColor: '#f8f9fa' 
        }}>
          <div style={{...containerStyle, padding: windowSize.isMobile ? '0 1rem' : '0 2rem'}}>
            <div style={{ textAlign: 'center', marginBottom: windowSize.isMobile ? '2rem' : '4rem' }}>
              <h2 style={{ 
                fontSize: windowSize.isMobile ? '1.5rem' : '2rem', 
                fontWeight: 200, 
                marginBottom: '1rem', 
                color: '#2e0d50' 
              }}>About Us</h2>
            </div>
            <div style={{ 
              display: 'grid', 
              gridTemplateColumns: windowSize.isMobile ? '1fr' : 'repeat(auto-fit, minmax(400px, 1fr))', 
              gap: windowSize.isMobile ? '2rem' : '4rem', 
              alignItems: 'center' 
            }}>
              <div>
                <h2 style={{ 
                  fontSize: windowSize.isMobile ? '1.5rem' : '2rem', 
                  fontWeight: 200, 
                  marginBottom: windowSize.isMobile ? '1.5rem' : '2rem' 
                }}>
                  Our History
                  <span style={{ color: '#2e0d50' }}> & Foundation</span>
                </h2>
                <p style={{ 
                  fontSize: windowSize.isMobile ? '1rem' : '1.125rem', 
                  color: '#666', 
                  lineHeight: 1.8, 
                  marginBottom: windowSize.isMobile ? '1.5rem' : '2rem' 
                }}>
                  Karaçam & Şir was established in Istanbul in 2021. Our founders 
                  combined their experience from international law firms with local market knowledge 
                  to provide value-driven legal services to our clients with a shared vision.
                </p>
                <p style={{ 
                  fontSize: windowSize.isMobile ? '1rem' : '1.125rem', 
                  color: '#666', 
                  lineHeight: 1.8, 
                  marginBottom: windowSize.isMobile ? '1.5rem' : '2rem' 
                }}>
                  With over 15 years of experience, we provide advisory services to our corporate 
                  clients operating in Turkey, Central Asia, Europe, and America on complex commercial 
                  transactions, infrastructure projects, and technology ventures.
                </p>
                <Link to="/team" style={{ textDecoration: 'none' }}>
                  <button style={{
                    marginTop: windowSize.isMobile ? '1.5rem' : '2rem',
                    padding: windowSize.isMobile ? '0.875rem 1.5rem' : '1rem 2rem',
                    backgroundColor: 'transparent',
                    color: '#333',
                    border: '1px solid #2e0d50',
                    fontSize: windowSize.isMobile ? '0.875rem' : '1rem',
                    cursor: 'pointer',
                    transition: 'all 0.3s',
                    width: windowSize.isMobile ? '100%' : 'auto'
                  }}
                  onMouseEnter={e => {
                    e.currentTarget.style.backgroundColor = '#2e0d50';
                    e.currentTarget.style.color = '#ffffff';
                  }}
                  onMouseLeave={e => {
                    e.currentTarget.style.backgroundColor = 'transparent';
                    e.currentTarget.style.color = '#333';
                  }}>
                    Meet Our Team →
                  </button>
                </Link>
              </div>
              <div style={{
                backgroundColor: '#ffffff',
                padding: windowSize.isMobile ? '2rem 1.5rem' : '3rem',
                borderRadius: '8px',
                boxShadow: '0 8px 24px rgba(0,0,0,0.1)',
                border: '1px solid #e0e0e0'
              }}>
                <h3 style={{ 
                  fontSize: windowSize.isMobile ? '1.25rem' : '1.5rem',
                  fontWeight: 300,
                  marginBottom: '1.5rem',
                  color: '#2e0d50'
                }}>
                  Our Approach
                </h3>
                <div style={{ marginBottom: '2rem' }}>
                  <h4 style={{ 
                    fontSize: windowSize.isMobile ? '1rem' : '1.125rem',
                    fontWeight: 600,
                    marginBottom: '0.75rem',
                    color: '#333'
                  }}>
                    Client-Focused Service
                  </h4>
                  <p style={{ 
                    fontSize: windowSize.isMobile ? '0.875rem' : '1rem',
                    lineHeight: 1.6,
                    color: '#666',
                    marginBottom: '1.5rem'
                  }}>
                    We deeply analyze each client's needs and provide customized solutions 
                    by considering sector-specific dynamics.
                  </p>
                </div>
                <div style={{ marginBottom: '2rem' }}>
                  <h4 style={{ 
                    fontSize: windowSize.isMobile ? '1rem' : '1.125rem',
                    fontWeight: 600,
                    marginBottom: '0.75rem',
                    color: '#333'
                  }}>
                    Innovative Solutions
                  </h4>
                  <p style={{ 
                    fontSize: windowSize.isMobile ? '0.875rem' : '1rem',
                    lineHeight: 1.6,
                    color: '#666',
                    marginBottom: '1.5rem'
                  }}>
                    Going beyond traditional legal approaches, we provide practical and 
                    applicable solutions that align with current business realities.
                  </p>
                </div>
                <div>
                  <h4 style={{ 
                    fontSize: windowSize.isMobile ? '1rem' : '1.125rem',
                    fontWeight: 600,
                    marginBottom: '0.75rem',
                    color: '#333'
                  }}>
                    Global Perspective
                  </h4>
                  <p style={{ 
                    fontSize: windowSize.isMobile ? '0.875rem' : '1rem',
                    lineHeight: 1.6,
                    color: '#666'
                  }}>
                    With our international experience and extensive partner network, we provide 
                    reliable advisory services in cross-border transactions.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Mission, Vision, Values Section */}
        <section style={{ 
          padding: windowSize.isMobile ? '3rem 1rem' : '5rem 2rem', 
          backgroundColor: '#ffffff' 
        }}>
          <div style={{...containerStyle, padding: windowSize.isMobile ? '0 1rem' : '0 2rem'}}>
            <div style={{ textAlign: 'center', marginBottom: windowSize.isMobile ? '2rem' : '4rem' }}>
              <h2 style={{ 
                fontSize: windowSize.isMobile ? '1.5rem' : '2rem', 
                fontWeight: 200, 
                marginBottom: '1rem', 
                color: '#2e0d50' 
              }}>Mission, Vision & Values</h2>
            </div>
            <div style={{ 
              display: 'grid', 
              gridTemplateColumns: windowSize.isMobile ? '1fr' : 'repeat(3, 1fr)', 
              gap: windowSize.isMobile ? '2rem' : '3rem' 
            }}>
              <div style={{ textAlign: 'center' }}>
                <div style={{
                  width: '80px',
                  height: '80px',
                  margin: '0 auto 1.5rem',
                  backgroundColor: '#f3e6f7',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}>
                  <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#2e0d50" strokeWidth="2">
                    <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/>
                  </svg>
                </div>
                <h3 style={{ 
                  fontSize: windowSize.isMobile ? '1.25rem' : '1.5rem',
                  fontWeight: 400,
                  marginBottom: '1rem',
                  color: '#2e0d50'
                }}>
                  Our Mission
                </h3>
                <p style={{ 
                  fontSize: windowSize.isMobile ? '0.875rem' : '1rem',
                  lineHeight: 1.6,
                  color: '#666'
                }}>
                  To be a trusted business partner in Turkey and internationally by providing 
                  innovative and practical legal solutions that help our clients achieve 
                  their business objectives.
                </p>
              </div>
              <div style={{ textAlign: 'center' }}>
                <div style={{
                  width: '80px',
                  height: '80px',
                  margin: '0 auto 1.5rem',
                  backgroundColor: '#f3e6f7',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}>
                  <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#2e0d50" strokeWidth="2">
                    <circle cx="12" cy="12" r="10"/>
                    <path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>
                  </svg>
                </div>
                <h3 style={{ 
                  fontSize: windowSize.isMobile ? '1.25rem' : '1.5rem',
                  fontWeight: 400,
                  marginBottom: '1rem',
                  color: '#2e0d50'
                }}>
                  Our Vision
                </h3>
                <p style={{ 
                  fontSize: windowSize.isMobile ? '0.875rem' : '1rem',
                  lineHeight: 1.6,
                  color: '#666'
                }}>
                  To become the leading law firm in the region and the first choice 
                  for advisory services in complex commercial transactions, infrastructure 
                  projects, and technology investments.
                </p>
              </div>
              <div style={{ textAlign: 'center' }}>
                <div style={{
                  width: '80px',
                  height: '80px',
                  margin: '0 auto 1.5rem',
                  backgroundColor: '#f3e6f7',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}>
                  <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#2e0d50" strokeWidth="2">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                  </svg>
                </div>
                <h3 style={{ 
                  fontSize: windowSize.isMobile ? '1.25rem' : '1.5rem',
                  fontWeight: 400,
                  marginBottom: '1rem',
                  color: '#2e0d50'
                }}>
                  Our Values
                </h3>
                <p style={{ 
                  fontSize: windowSize.isMobile ? '0.875rem' : '1rem',
                  lineHeight: 1.6,
                  color: '#666'
                }}>
                  Integrity, professionalism, innovation, and client satisfaction are 
                  our core values. We aim for the highest quality standards in every 
                  project and never compromise on ethical principles.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* SubscriptionBox Band */}
        <div style={{
          width: '100%',
          background: 'linear-gradient(90deg, #f3e6f7 0%, #f8f9fa 100%)',
          padding: windowSize.isMobile ? '2rem 0.5rem' : '2.5rem 0',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          borderTop: '1px solid #eee',
          borderBottom: '1px solid #eee',
          margin: 0
        }}>
          <SubscriptionBox />
        </div>

        {/* Practice Areas/Services Section - Mobile Optimized */}
        <section style={{ 
          padding: windowSize.isMobile ? '3rem 1rem' : '5rem 2rem', 
          borderTop: '1px solid #e0e0e0', 
          backgroundColor: '#ffffff' 
        }}>
          <div style={{...containerStyle, padding: windowSize.isMobile ? '0 1rem' : '0 2rem'}}>
            <div style={{ textAlign: 'center', marginBottom: windowSize.isMobile ? '2rem' : '4rem' }}>
              <h2 style={{ 
                fontSize: windowSize.isMobile ? '1.5rem' : '2rem', 
                fontWeight: 200, 
                marginBottom: '1rem', 
                color: '#2e0d50' 
              }}>Our Practice Areas</h2>
            </div>

            <div style={{ 
              display: 'grid', 
              gridTemplateColumns: windowSize.isMobile ? '1fr' : windowSize.isTablet ? 'repeat(2, 1fr)' : 'repeat(auto-fit, minmax(280px, 1fr))', 
              gap: windowSize.isMobile ? '1.5rem' : '2rem' 
            }}>
              {services.map((service, index) => (
                <Link 
                  to={service.link} 
                  key={index}
                  style={{ textDecoration: 'none', color: 'inherit' }}
                >
                  <div
                    style={{
                      position: 'relative',
                      background: '#ffffff',
                      border: '2px solid',
                      borderColor: hoveredService === index ? '#2e0d50' : 'rgba(46, 13, 80, 0.2)',
                      padding: '0',
                      overflow: 'hidden',
                      transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                      cursor: 'pointer',
                      transform: hoveredService === index ? 'translateY(-8px) scale(1.02)' : 'translateY(0) scale(1)',
                      boxShadow: hoveredService === index 
                        ? '0 20px 40px rgba(46, 13, 80, 0.3), inset 0 0 0 1px rgba(46, 13, 80, 0.2)' 
                        : '0 4px 12px rgba(0, 0, 0, 0.1)',
                      clipPath: 'polygon(0 0, calc(100% - 20px) 0, 100% 20px, 100% 100%, 0 100%)',
                      height: windowSize.isMobile ? 'auto' : '480px',
                      minHeight: windowSize.isMobile ? '350px' : '480px',
                      display: 'flex',
                      flexDirection: 'column'
                    }}
                    onMouseEnter={() => !windowSize.isMobile && setHoveredService(index)}
                    onMouseLeave={() => setHoveredService(null)}
                  >
                    {/* Corner accent */}
                    <div style={{
                      position: 'absolute',
                      top: 0,
                      right: 0,
                      width: '20px',
                      height: '20px',
                      backgroundColor: hoveredService === index ? '#2e0d50' : 'rgba(46, 13, 80, 0.3)',
                      clipPath: 'polygon(0 0, 100% 0, 100% 100%)',
                      transition: 'all 0.4s'
                    }} />
                    
                    {/* Image container */}
                    <div style={{
                      position: 'relative',
                      width: '100%',
                      height: windowSize.isMobile ? '150px' : '200px',
                      overflow: 'hidden',
                      backgroundColor: '#f5f5f5'
                    }}>
                      <img 
                        src={service.icon} 
                        alt={service.title}
                        style={{ 
                          width: '100%', 
                          height: '100%', 
                          objectFit: 'cover',
                          opacity: hoveredService === index ? 0.9 : 0.7,
                          transition: 'all 0.4s',
                          transform: hoveredService === index ? 'scale(1.1)' : 'scale(1)',
                          filter: hoveredService === index ? 'brightness(1.1)' : 'brightness(0.8)'
                        }} 
                      />
                      {/* Gradient overlay */}
                      <div style={{
                        position: 'absolute',
                        bottom: 0,
                        left: 0,
                        right: 0,
                        height: '60%',
                        background: 'linear-gradient(to top, rgba(255,255,255,0.9) 0%, transparent 100%)',
                        pointerEvents: 'none'
                      }} />
                    </div>
                    
                    {/* Content */}
                    <div style={{
                      padding: windowSize.isMobile ? '1.5rem' : '2rem',
                      position: 'relative',
                      zIndex: 1,
                      flex: 1,
                      display: 'flex',
                      flexDirection: 'column'
                    }}>
                      {/* Number indicator */}
                      <div style={{
                        position: 'absolute',
                        top: windowSize.isMobile ? '-40px' : '-60px',
                        right: windowSize.isMobile ? '1rem' : '2rem',
                        fontSize: windowSize.isMobile ? '2.5rem' : '4rem',
                        fontWeight: '900',
                        color: hoveredService === index ? '#2e0d50' : 'rgba(46, 13, 80, 0.2)',
                        transition: 'all 0.4s',
                        lineHeight: 1,
                        fontFamily: 'Arial, sans-serif'
                      }}>
                        0{index + 1}
                      </div>
                      
                      <h3 style={{ 
                        fontSize: windowSize.isMobile ? '1.25rem' : '1.75rem', 
                        fontWeight: 700, 
                        marginBottom: '1rem',
                        letterSpacing: '-0.02em',
                        color: hoveredService === index ? '#333' : '#333',
                        transition: 'all 0.4s',
                        textAlign: 'center'
                      }}>
                        {service.title}
                      </h3>
                      <div style={{
                        width: windowSize.isMobile ? '36px' : '48px',
                        height: '3px',
                        backgroundColor: '#2e0d50',
                        margin: '0 auto 1rem auto',
                        transition: 'all 0.4s'
                      }} />
                      
                      <p style={{ 
                        color: hoveredService === index ? '#555' : '#666', 
                        lineHeight: 1.6,
                        fontSize: windowSize.isMobile ? '0.875rem' : '0.95rem',
                        transition: 'all 0.4s',
                        flex: 1,
                        marginBottom: '1.5rem',
                        textAlign: 'center'
                      }}>
                        {service.description}
                      </p>
                      
                      {/* Arrow indicator - Always visible on mobile */}
                      <div style={{
                        marginTop: 'auto',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '0.5rem',
                        justifyContent: 'center',
                        color: '#2e0d50',
                        fontSize: windowSize.isMobile ? '0.75rem' : '0.875rem',
                        fontWeight: 600,
                        opacity: windowSize.isMobile ? 1 : (hoveredService === index ? 1 : 0),
                        transform: windowSize.isMobile ? 'translateX(0)' : (hoveredService === index ? 'translateX(0)' : 'translateX(-10px)'),
                        transition: 'all 0.4s'
                      }}>
                        <span style={{ color: '#2e0d50' }}>Learn More</span>
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <path d="M5 12h14M12 5l7 7-7 7"/>
                        </svg>
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Office Locations Section - Mobile Optimized */}
        <section style={{ 
          padding: windowSize.isMobile ? '3rem 1rem' : '5rem 2rem',
          borderTop: '1px solid #e0e0e0',
          backgroundColor: '#f8f9fa'
        }}>
          <div style={{...containerStyle, padding: windowSize.isMobile ? '0 1rem' : '0 2rem'}}>
            <h2 style={{ 
              fontSize: windowSize.isMobile ? '1.5rem' : '2rem', 
              fontWeight: 200, 
              marginBottom: windowSize.isMobile ? '2rem' : '3rem', 
              textAlign: 'center', 
              color: '#2e0d50' 
            }}>
              Our Offices
            </h2>
            <div style={{ 
              display: 'grid', 
              gridTemplateColumns: windowSize.isMobile ? '1fr' : windowSize.isTablet ? 'repeat(2, 1fr)' : 'repeat(4, 1fr)', 
              gap: windowSize.isMobile ? '1rem' : '1.5rem' 
            }}>
              {offices.map((office, index) => (
                <div 
                  key={index}
                  style={{
                    backgroundColor: '#ffffff',
                    padding: windowSize.isMobile ? '1.5rem' : '2rem',
                    borderRadius: '8px',
                    border: '1px solid #e0e0e0',
                    transition: 'all 0.3s',
                    cursor: 'pointer'
                  }}
                  onMouseEnter={e => {
                    if (!windowSize.isMobile) {
                      e.currentTarget.style.transform = 'translateY(-4px)';
                      e.currentTarget.style.boxShadow = '0 8px 24px rgba(0,0,0,0.1)';
                    }
                  }}
                  onMouseLeave={e => {
                    e.currentTarget.style.transform = 'translateY(0)';
                    e.currentTarget.style.boxShadow = 'none';
                  }}
                >
                  <h3 style={{ 
                    fontSize: windowSize.isMobile ? '1.25rem' : '1.5rem', 
                    marginBottom: '1rem', 
                    color: '#2e0d50' 
                  }}>
                    {office.city}
                  </h3>
                  <p style={{ 
                    color: '#666', 
                    lineHeight: 1.6, 
                    marginBottom: '1rem',
                    fontSize: windowSize.isMobile ? '0.875rem' : '1rem'
                  }}>
                    {office.address}
                  </p>
                  <a 
                    href={`tel:${office.phone}`}
                    style={{ 
                      color: '#2e0d50', 
                      textDecoration: 'none', 
                      fontWeight: 500,
                      fontSize: windowSize.isMobile ? '0.875rem' : '1rem'
                    }}
                    onMouseEnter={e => e.currentTarget.style.textDecoration = 'underline'}
                    onMouseLeave={e => e.currentTarget.style.textDecoration = 'none'}
                  >
                    {office.phone}
                  </a>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>

      <style>
        {`
          @keyframes bounce {
            0%, 20%, 50%, 80%, 100% {
              transform: translateX(-50%) translateY(0);
            }
            40% {
              transform: translateX(-50%) translateY(-10px);
            }
            60% {
              transform: translateX(-50%) translateY(-5px);
            }
          }
          
          /* Ensure smooth scrolling on mobile */
          html {
            scroll-behavior: smooth;
            -webkit-overflow-scrolling: touch;
          }
          
          /* Prevent horizontal scroll on mobile */
          body {
            overflow-x: hidden;
          }
          
          /* Fix iOS input zoom */
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

export default AboutUs;