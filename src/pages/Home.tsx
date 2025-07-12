import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import istanbulBg from '../assets/istanbul_1.jpg';

const Home = () => {
  const [scrollY, setScrollY] = useState(0);
  const [hoveredService, setHoveredService] = useState<number | null>(null);
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  const { t } = useTranslation();

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const services = [
    {
      icon: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=400&h=400&fit=crop",
      titleKey: 'home.services.corporate.title',
      descriptionKey: 'home.services.corporate.description',
      link: "/what-we-are-doing"
    },
    {
      icon: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=400&h=400&fit=crop",
      titleKey: 'home.services.epcf.title',
      descriptionKey: 'home.services.epcf.description',
      link: "/what-we-are-doing"
    },
    {
      icon: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=400&h=400&fit=crop",
      titleKey: 'home.services.technology.title',
      descriptionKey: 'home.services.technology.description',
      link: "/what-we-are-doing"
    },
    {
      icon: "https://images.unsplash.com/photo-1589391886645-d51941baf7fb?w=400&h=400&fit=crop",
      titleKey: 'home.services.dispute.title',
      descriptionKey: 'home.services.dispute.description',
      link: "/what-we-are-doing"
    }
  ];

  const stats = [
    { number: "€7.5B+", labelKey: "home.stats.transactionValue" },
    { number: "800+", labelKey: "home.stats.corporateClients" },
    { number: "45+", labelKey: "home.stats.jurisdictions" },
    { number: "97%", labelKey: "home.stats.successRate" }
  ];

  const testimonials = [
    {
      text: "KARAÇAM & ŞİR expertly navigated our €500M cross-border acquisition, managing regulatory approvals across multiple jurisdictions with exceptional efficiency.",
      author: "Michael Richardson",
      position: "Managing Partner, Nordic Capital Partners"
    },
    {
      text: "Their innovative structuring on our renewable energy project saved us significant time and costs. True experts in project finance and EPC contracts.",
      author: "Elena Petrova",
      position: "CEO, Green Energy Solutions EMEA"
    },
    {
      text: "Outstanding counsel on our Series B funding. They understand the startup ecosystem and delivered practical, business-oriented legal solutions.",
      author: "Can Yildirim",
      position: "Founder & CEO, FinTech Innovations"
    }
  ];

  const containerStyle = {
    maxWidth: '80rem',
    margin: '0 auto',
    padding: '0 2rem'
  };

  return (
    <div style={{ backgroundColor: '#522d72', color: 'white' }}>
      {/* Hero Section */}
      <section style={{ 
        minHeight: '100vh', 
        display: 'flex', 
        alignItems: 'center',
        position: 'relative',
        overflow: 'hidden',
        backgroundImage: `url(${istanbulBg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed'
      }}>
        <div style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: 'linear-gradient(rgba(82, 45, 114, 0.25), rgba(82, 45, 114, 0.25))',
          pointerEvents: 'none'
        }}></div>
        
        <div style={containerStyle}>
          <h2 style={{ 
            fontSize: '1.5rem', 
            color: 'rgba(255,255,255,0.95)', 
            fontWeight: 300,
            marginBottom: '1.5rem',
            letterSpacing: '0.15em'
          }}>
            {t('home.hero.preservingValues')}
          </h2>
          <h3 style={{ 
            fontSize: '1.25rem', 
            color: 'rgba(255,255,255,0.9)', 
            fontWeight: 400,
            marginBottom: '2rem',
            letterSpacing: '0.1em'
          }}>
            {t('home.hero.tailoredApproach')}
          </h3>
          <p style={{ 
            fontSize: '1rem', 
            color: 'rgba(255,255,255,0.85)', 
            maxWidth: '90rem', 
            fontWeight: 300, 
            lineHeight: 1.8,
            marginBottom: '3rem',
            letterSpacing: '0.05em'
          }}>
            {t('home.hero.description').split('\n').map((line, i) => (
              <React.Fragment key={i}>
                {line}
                {i < 2 && <br />}
              </React.Fragment>
            ))}
          </p>
          <p style={{ 
            fontSize: '1.25rem', 
            color: 'rgba(255,255,255,0.9)', 
            fontWeight: 400,
            letterSpacing: '0.2em',
            marginBottom: '4rem'
          }}>
            {t('home.hero.cities')}
          </p>
          <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
            <Link to="/contact-us" style={{ textDecoration: 'none' }}>
              <button style={{
                padding: '1.5rem 3rem',
                backgroundColor: '#8b5cf6',
                color: 'white',
                border: 'none',
                fontSize: '1.125rem',
                cursor: 'pointer',
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
                {t('home.hero.getLegalConsultation')}
              </button>
            </Link>
            <Link to="/who-we-are" style={{ textDecoration: 'none' }}>
              <button style={{
                padding: '1.5rem 3rem',
                backgroundColor: 'transparent',
                color: 'white',
                border: '2px solid #8b5cf6',
                fontSize: '1.125rem',
                cursor: 'pointer',
                transition: 'all 0.3s'
              }}
              onMouseEnter={e => {
                e.currentTarget.style.backgroundColor = '#8b5cf6';
                e.currentTarget.style.transform = 'translateY(-2px)';
              }}
              onMouseLeave={e => {
                e.currentTarget.style.backgroundColor = 'transparent';
                e.currentTarget.style.transform = 'translateY(0)';
              }}>
                {t('home.hero.learnAboutUs')}
              </button>
            </Link>
          </div>
        </div>

        <div style={{
          position: 'absolute',
          bottom: '2rem',
          left: '50%',
          transform: 'translateX(-50%)',
          animation: 'bounce 2s infinite'
        }}>
          <div style={{ fontSize: '2rem', color: 'rgba(255,255,255,0.5)' }}>↓</div>
        </div>
      </section>

      {/* Services Section */}
      <section style={{ padding: '5rem 2rem', borderTop: '1px solid rgba(0,0,0,0.3)' }}>
        <div style={containerStyle}>
          <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
            <h2 style={{ fontSize: '2rem', fontWeight: 200, marginBottom: '1rem' }}>{t('home.services.title')}</h2>
            <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: '1.25rem' }}>{t('home.services.subtitle')}</p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2rem' }}>
            {services.map((service, index) => (
              <Link 
                to={service.link} 
                key={index}
                style={{ textDecoration: 'none', color: 'inherit' }}
              >
                <div
                  style={{
                    position: 'relative',
                    background: hoveredService === index 
                      ? 'linear-gradient(135deg, #1a1a1a 0%, #2d2d2d 100%)' 
                      : 'linear-gradient(135deg, rgba(0,0,0,0.6) 0%, rgba(0,0,0,0.8) 100%)',
                    border: '2px solid',
                    borderColor: hoveredService === index ? '#8b5cf6' : 'rgba(139, 92, 246, 0.2)',
                    padding: '0',
                    overflow: 'hidden',
                    transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                    cursor: 'pointer',
                    transform: hoveredService === index ? 'translateY(-8px) scale(1.02)' : 'translateY(0) scale(1)',
                    boxShadow: hoveredService === index 
                      ? '0 20px 40px rgba(139, 92, 246, 0.3), inset 0 0 0 1px rgba(139, 92, 246, 0.2)' 
                      : '0 4px 12px rgba(0, 0, 0, 0.3)',
                    clipPath: 'polygon(0 0, calc(100% - 20px) 0, 100% 20px, 100% 100%, 0 100%)'
                  }}
                  onMouseEnter={() => setHoveredService(index)}
                  onMouseLeave={() => setHoveredService(null)}
                >
                  {/* Corner accent */}
                  <div style={{
                    position: 'absolute',
                    top: 0,
                    right: 0,
                    width: '20px',
                    height: '20px',
                    backgroundColor: hoveredService === index ? '#8b5cf6' : 'rgba(139, 92, 246, 0.3)',
                    clipPath: 'polygon(0 0, 100% 0, 100% 100%)',
                    transition: 'all 0.4s'
                  }} />
                  
                  {/* Image container */}
                  <div style={{
                    position: 'relative',
                    width: '100%',
                    height: '200px',
                    overflow: 'hidden',
                    backgroundColor: '#000'
                  }}>
                    <img 
                      src={service.icon} 
                      alt={t(service.titleKey)}
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
                      background: 'linear-gradient(to top, rgba(0,0,0,0.9) 0%, transparent 100%)',
                      pointerEvents: 'none'
                    }} />
                  </div>
                  
                  {/* Content */}
                  <div style={{
                    padding: '2rem',
                    position: 'relative',
                    zIndex: 1
                  }}>
                    {/* Number indicator */}
                    <div style={{
                      position: 'absolute',
                      top: '-60px',
                      right: '2rem',
                      fontSize: '4rem',
                      fontWeight: '900',
                      color: hoveredService === index ? '#8b5cf6' : 'rgba(139, 92, 246, 0.1)',
                      transition: 'all 0.4s',
                      lineHeight: 1,
                      fontFamily: 'Arial, sans-serif'
                    }}>
                      0{index + 1}
                    </div>
                    
                    <h3 style={{ 
                      fontSize: '1.75rem', 
                      fontWeight: 700, 
                      marginBottom: '1rem',
                      letterSpacing: '-0.02em',
                      color: hoveredService === index ? '#fff' : 'rgba(255,255,255,0.95)',
                      transition: 'all 0.4s'
                    }}>
                      {t(service.titleKey)}
                    </h3>
                    
                    {/* Divider line */}
                    <div style={{
                      width: hoveredService === index ? '60px' : '40px',
                      height: '3px',
                      backgroundColor: '#8b5cf6',
                      marginBottom: '1rem',
                      transition: 'all 0.4s'
                    }} />
                    
                    <p style={{ 
                      color: hoveredService === index ? 'rgba(255,255,255,0.95)' : 'rgba(255,255,255,0.7)', 
                      lineHeight: 1.6,
                      fontSize: '0.95rem',
                      transition: 'all 0.4s'
                    }}>
                      {t(service.descriptionKey)}
                    </p>
                    
                    {/* Arrow indicator */}
                    <div style={{
                      marginTop: '1.5rem',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.5rem',
                      color: '#8b5cf6',
                      fontSize: '0.875rem',
                      fontWeight: 600,
                      opacity: hoveredService === index ? 1 : 0,
                      transform: hoveredService === index ? 'translateX(0)' : 'translateX(-10px)',
                      transition: 'all 0.4s'
                    }}>
                      <span>Learn More</span>
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

      {/* Stats Section */}
      <section style={{ 
        padding: '5rem 2rem', 
        background: 'linear-gradient(135deg, rgba(0,0,0,0.6) 0%, rgba(0,0,0,0.8) 100%)'
      }}>
        <div style={containerStyle}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '3rem', textAlign: 'center' }}>
            {stats.map((stat, index) => (
              <div 
                key={index}
                style={{
                  opacity: scrollY > 400 ? 1 : 0,
                  transform: scrollY > 400 ? 'scale(1)' : 'scale(0.8)',
                  transition: `all 0.8s ease ${index * 0.1}s`
                }}
              >
                <div style={{ fontSize: '3.5rem', fontWeight: 200, marginBottom: '0.5rem' }}>
                  {stat.number}
                </div>
                <div style={{ fontSize: '1rem', color: 'rgba(255,255,255,0.9)', textTransform: 'uppercase', letterSpacing: '0.1em' }}>
                  {t(stat.labelKey)}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section style={{ padding: '5rem 2rem', borderTop: '1px solid rgba(0,0,0,0.3)' }}>
        <div style={containerStyle}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))', gap: '4rem', alignItems: 'center' }}>
            <div>
              <h2 style={{ fontSize: '2rem', fontWeight: 200, marginBottom: '2rem' }}>
                Why Choose 
                <span style={{ color: 'white' }}> KARAÇAM & ŞİR</span>
              </h2>
              <p style={{ fontSize: '1.125rem', color: 'rgba(255,255,255,0.8)', lineHeight: 1.8, marginBottom: '2rem' }}>
                We are a specialized law firm advising institutional clients on complex corporate 
                transactions, infrastructure development, and technology ventures. Our integrated 
                approach combines sector expertise with innovative legal solutions to deliver 
                measurable value.
              </p>
              <ul style={{ listStyle: 'none', padding: 0 }}>
                {['Cross-Border Expertise', 'Sector-Specific Knowledge', 'Innovative Structuring', 'Integrated Solutions'].map((item, index) => (
                  <li key={index} style={{ 
                    marginBottom: '1rem', 
                    paddingLeft: '2rem',
                    position: 'relative',
                    fontSize: '1.125rem'
                  }}>
                    <span style={{ 
                      position: 'absolute', 
                      left: 0, 
                      color: '#8b5cf6',
                      fontSize: '1.5rem'
                    }}>✓</span>
                    {item}
                  </li>
                ))}
              </ul>
              <Link to="/who-we-are" style={{ textDecoration: 'none' }}>
                <button style={{
                  marginTop: '2rem',
                  padding: '1rem 2rem',
                  backgroundColor: 'transparent',
                  color: 'white',
                  border: '1px solid #8b5cf6',
                  fontSize: '1rem',
                  cursor: 'pointer',
                  transition: 'all 0.3s'
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.backgroundColor = '#8b5cf6';
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.backgroundColor = 'transparent';
                }}>
                  Learn More About Us →
                </button>
              </Link>
            </div>
            <div style={{ 
              padding: '3rem',
              background: 'linear-gradient(135deg, rgba(0, 0, 0, 0.1) 0%, rgba(0, 0, 0, 0.15) 100%)',
              border: '1px solid rgba(0,0,0,0.3)',
              borderRadius: '8px'
            }}>
              <h3 style={{ fontSize: '1.5rem', fontWeight: 400, marginBottom: '2rem', color: 'rgba(255,255,255,0.9)' }}>
                Client Testimonial
              </h3>
              <blockquote style={{ 
                fontSize: '1.125rem', 
                lineHeight: 1.8, 
                fontStyle: 'italic',
                marginBottom: '2rem'
              }}>
                "{testimonials[activeTestimonial].text}"
              </blockquote>
              <div>
                <div style={{ fontWeight: 600 }}>{testimonials[activeTestimonial].author}</div>
                <div style={{ color: 'rgba(255,255,255,0.7)', fontSize: '0.875rem' }}>{testimonials[activeTestimonial].position}</div>
              </div>
              <div style={{ display: 'flex', gap: '0.5rem', marginTop: '2rem' }}>
                {testimonials.map((_, index) => (
                  <div
                    key={index}
                    style={{
                      width: '8px',
                      height: '8px',
                      borderRadius: '50%',
                      backgroundColor: activeTestimonial === index ? 'rgba(0,0,0,0.6)' : 'rgba(0,0,0,0.3)',
                      cursor: 'pointer',
                      transition: 'all 0.3s'
                    }}
                    onClick={() => setActiveTestimonial(index)}
                  ></div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section style={{ 
        padding: '5rem 2rem',
        background: 'linear-gradient(135deg, rgba(0,0,0,0.5) 0%, rgba(0,0,0,0.8) 100%)',
        textAlign: 'center'
      }}>
        <div style={containerStyle}>
          <h2 style={{ fontSize: '2rem', fontWeight: 200, marginBottom: '2rem' }}>
            Transform Your Legal Strategy
          </h2>
          <p style={{ fontSize: '1.25rem', color: 'rgba(255,255,255,0.9)', marginBottom: '3rem', maxWidth: '600px', margin: '0 auto 3rem' }}>
            Schedule a confidential consultation to discuss your transaction or project.
          </p>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link to="/contact-us" style={{ textDecoration: 'none' }}>
              <button style={{
                padding: '1.5rem 3rem',
                backgroundColor: 'white',
                color: 'rgba(0,0,0,0.8)',
                border: 'none',
                fontSize: '1.125rem',
                fontWeight: 600,
                cursor: 'pointer',
                transition: 'all 0.3s'
              }}
              onMouseEnter={e => {
                e.currentTarget.style.transform = 'translateY(-2px)';
                e.currentTarget.style.boxShadow = '0 10px 30px rgba(0,0,0,0.2)';
              }}
              onMouseLeave={e => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = 'none';
              }}>
                Schedule Consultation
              </button>
            </Link>
            <button style={{
              padding: '1.5rem 3rem',
              backgroundColor: 'transparent',
              color: 'white',
              border: '2px solid white',
              fontSize: '1.125rem',
              cursor: 'pointer',
              transition: 'all 0.3s'
            }}
            onMouseEnter={e => {
              e.currentTarget.style.backgroundColor = 'white';
              e.currentTarget.style.color = 'rgba(0,0,0,0.8)';
            }}
            onMouseLeave={e => {
              e.currentTarget.style.backgroundColor = 'transparent';
              e.currentTarget.style.color = 'white';
            }}>
              📞 +90 212 000 00 00
            </button>
          </div>
        </div>
      </section>

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
        `}
      </style>
    </div>
  );
};

export default Home;