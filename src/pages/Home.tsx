import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import istanbulBg from '../assets/istanbul_1.jpg';
import SubscriptionBox from "../components/SubscriptionBox/SubscriptionBox";

const Home = () => {
  const [hoveredService, setHoveredService] = useState<number | null>(null);
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState('');
  const { t } = useTranslation();

  const [formData, setFormData] = useState({
    firstName: '',
    email: '',
    phone: '',
    message: ''
  });

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

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [testimonials.length]);

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

  const teamMembers = [
    {
      name: 'Furkan Karaçam',
      title: 'Founding Partner',
      email: 'furkan.karacam@karacamsir.com',
      initials: 'FK',
      bio: 'Furkan Karaçam brings over 20 years of experience in corporate law and M&A transactions.'
    },
    {
      name: 'Cankat Şir',
      title: 'Founding Partner',
      email: 'cankat.sir@karacamsir.com',
      initials: 'CŞ',
      bio: 'Cankat Şir specializes in intellectual property and technology law with 18 years of expertise.'
    },
    {
      name: 'Ali Yılmaz',
      title: 'Senior Associate',
      email: 'ali.yilmaz@karacamsir.com',
      initials: 'AY',
      bio: 'Ali Yılmaz leads our technology law practice with over 15 years of experience.'
    },
    {
      name: 'Ayşe Aydın',
      title: 'Associate',
      email: 'ayse.aydin@karacamsir.com',
      initials: 'AA',
      bio: 'Ayşe Aydın specializes in corporate law and capital markets.'
    }
  ];

  const offices = [
    {
      city: 'Istanbul',
      address: 'Levent Mahallesi, Büyükdere Caddesi No: 199, 34394 Şişli/Istanbul, Turkey',
      phone: '+90 212 123 45 67'
    },
    {
      city: 'Astana',
      address: 'Mangilik El Avenue 55/20, Astana, Kazakhstan 010000',
      phone: '+7 717 123 45 67'
    },
    {
      city: 'London',
      address: '100 Bishopsgate, London EC2N 4AG, United Kingdom',
      phone: '+44 20 1234 5678'
    },
    {
      city: 'New York',
      address: '1 Wall Street, New York, NY 10005, United States',
      phone: '+1 212 123 4567'
    }
  ];


  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
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
          email: '',
          phone: '',
          message: ''
        });
        setSubmitMessage('');
      }, 3000);
    }, 2000);
  };

  // Mobile-first container styles
  const containerStyle = {
    maxWidth: '80rem',
    margin: '0 auto',
    padding: '0 1rem', // Reduced padding for mobile
    '@media (min-width: 768px)': {
      padding: '0 2rem'
    }
  };

  // Responsive styles
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

  return (
    <div style={{ backgroundColor: '#ffffff', color: '#333' }}>
      {/* Hero Section - Mobile Optimized */}
      <section id="home" style={{ 
        minHeight: '100vh', 
        display: 'flex', 
        alignItems: 'flex-start',
        paddingTop: windowSize.isMobile ? '5rem' : '8rem', // Reduced mobile padding
        position: 'relative',
        overflow: 'hidden',
        backgroundImage: `url(${istanbulBg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: windowSize.isMobile ? 'scroll' : 'fixed' // Fixed attachment causes issues on mobile
      }}>
        <div style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: 'linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.7))',
          pointerEvents: 'none'
        }}></div>
        
        <div style={{
          ...containerStyle,
          position: 'relative',
          zIndex: 10,
          padding: windowSize.isMobile ? '0 1.5rem' : '0 2rem'
        }}>
          <h2 style={{ 
            fontSize: windowSize.isMobile ? '1.125rem' : '1.5rem', 
            color: '#ffffff', 
            fontWeight: 300,
            marginBottom: windowSize.isMobile ? '1rem' : '1.5rem',
            letterSpacing: '0.15em',
            textShadow: '2px 2px 4px rgba(0,0,0,0.5)'
          }}>
            Preserving Values
          </h2>
          <h3 style={{ 
            fontSize: windowSize.isMobile ? '1rem' : '1.25rem', 
            color: '#ffffff', 
            fontWeight: 400,
            marginBottom: windowSize.isMobile ? '1.5rem' : '2rem',
            letterSpacing: '0.1em',
            textShadow: '2px 2px 4px rgba(0,0,0,0.5)'
          }}>
            Tailored Approach
          </h3>
          <p style={{ 
            fontSize: windowSize.isMobile ? '0.875rem' : '1rem', 
            color: '#ffffff', 
            maxWidth: windowSize.isMobile ? '100%' : '90rem', 
            fontWeight: 300, 
            lineHeight: 1.8,
            marginBottom: windowSize.isMobile ? '2rem' : '3rem',
            letterSpacing: '0.05em',
            textShadow: '1px 1px 3px rgba(0,0,0,0.5)'
          }}>
            We offer timely and tailored solutions, blending our legal expertise with deep business insights to ensure our clients' success and uphold their core values.
          </p>
          <p style={{ 
            fontSize: windowSize.isMobile ? '0.875rem' : '1.25rem', 
            color: '#ffffff', 
            fontWeight: 400,
            letterSpacing: windowSize.isMobile ? '0.1em' : '0.2em',
            marginBottom: '4rem',
            textShadow: '2px 2px 4px rgba(0,0,0,0.5)',
            wordBreak: 'break-word' // Prevent overflow on mobile
          }}>
            Istanbul ● London ● New York ● Astana
          </p>
        </div>

        <div style={{
          position: 'absolute',
          bottom: '2rem',
          left: '50%',
          transform: 'translateX(-50%)',
          animation: 'bounce 2s infinite'
        }}>
          <div style={{ fontSize: windowSize.isMobile ? '1.5rem' : '2rem', color: '#ffffff' }}>↓</div>
        </div>
      </section>

      {/* About Section - Mobile Optimized */}
      <section id="about" style={{ 
        padding: windowSize.isMobile ? '3rem 1rem' : '5rem 2rem', 
        borderTop: '1px solid #e0e0e0', 
        backgroundColor: '#f8f9fa' 
      }}>
        <div style={{...containerStyle, padding: windowSize.isMobile ? '0 1rem' : '0 2rem'}}>
          <div style={{ textAlign: 'center', marginBottom: windowSize.isMobile ? '2rem' : '4rem' }}>
            <h2 style={{ 
              fontSize: windowSize.isMobile ? '1.5rem' : '2rem', 
              fontWeight: 200, 
              marginBottom: '1rem', 
              color: '#5D3FD3' 
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
                Why Choose 
                <span style={{ color: '#702963' }}> KARAÇAM & ŞİR</span>
              </h2>
              <p style={{ 
                fontSize: windowSize.isMobile ? '1rem' : '1.125rem', 
                color: '#666', 
                lineHeight: 1.8, 
                marginBottom: windowSize.isMobile ? '1.5rem' : '2rem' 
              }}>
                We are a specialized law firm advising institutional clients on complex corporate 
                transactions, infrastructure development, and technology ventures. Our integrated 
                approach combines sector expertise with innovative legal solutions to deliver 
                measurable value.
              </p>
              <ul style={{ listStyle: 'none', padding: 0 }}>
                {['Cross-Border Expertise', 'Sector-Specific Knowledge', 'Innovative Structuring', 'Integrated Solutions'].map((item, index) => (
                  <li key={index} style={{ 
                    marginBottom: '1rem', 
                    paddingLeft: windowSize.isMobile ? '1.5rem' : '2rem',
                    position: 'relative',
                    fontSize: windowSize.isMobile ? '1rem' : '1.125rem'
                  }}>
                    <span style={{ 
                      position: 'absolute', 
                      left: 0, 
                      color: '#702963',
                      fontSize: windowSize.isMobile ? '1.25rem' : '1.5rem'
                    }}>✓</span>
                    {item}
                  </li>
                ))}
              </ul>
              <Link to="/who-we-are" style={{ textDecoration: 'none' }}>
                <button style={{
                  marginTop: windowSize.isMobile ? '1.5rem' : '2rem',
                  padding: windowSize.isMobile ? '0.875rem 1.5rem' : '1rem 2rem',
                  backgroundColor: 'transparent',
                  color: '#333',
                  border: '1px solid #702963',
                  fontSize: windowSize.isMobile ? '0.875rem' : '1rem',
                  cursor: 'pointer',
                  transition: 'all 0.3s',
                  width: windowSize.isMobile ? '100%' : 'auto' // Full width on mobile
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.backgroundColor = '#702963';
                  e.currentTarget.style.color = '#ffffff';
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.backgroundColor = 'transparent';
                  e.currentTarget.style.color = '#333';
                }}>
                  Learn More About Us →
                </button>
              </Link>
            </div>
            {/* Testimonial card removed as requested */}
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
      <section id="practice-areas" style={{ 
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
              color: '#5D3FD3' 
            }}>Our Expertise</h2>
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
                    borderColor: hoveredService === index ? '#702963' : 'rgba(112, 41, 99, 0.2)',
                    padding: '0',
                    overflow: 'hidden',
                    transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                    cursor: 'pointer',
                    transform: hoveredService === index ? 'translateY(-8px) scale(1.02)' : 'translateY(0) scale(1)',
                    boxShadow: hoveredService === index 
                      ? '0 20px 40px rgba(112, 41, 99, 0.3), inset 0 0 0 1px rgba(112, 41, 99, 0.2)' 
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
                    backgroundColor: hoveredService === index ? '#702963' : 'rgba(112, 41, 99, 0.3)',
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
                      color: hoveredService === index ? '#702963' : 'rgba(112, 41, 99, 0.2)',
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
                      {t(service.titleKey)}
                    </h3>
                    <div style={{
                      width: windowSize.isMobile ? '36px' : '48px',
                      height: '3px',
                      backgroundColor: '#702963',
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
                      {t(service.descriptionKey)}
                    </p>
                    
                    {/* Arrow indicator - Always visible on mobile */}
                    <div style={{
                      marginTop: 'auto',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.5rem',
                      justifyContent: 'center',
                      color: '#702963',
                      fontSize: windowSize.isMobile ? '0.75rem' : '0.875rem',
                      fontWeight: 600,
                      opacity: windowSize.isMobile ? 1 : (hoveredService === index ? 1 : 0),
                      transform: windowSize.isMobile ? 'translateX(0)' : (hoveredService === index ? 'translateX(0)' : 'translateX(-10px)'),
                      transition: 'all 0.4s'
                    }}>
                      <span style={{ color: '#702963' }}>Learn More</span>
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

      {/* Team Section - Mobile Optimized */}
      <section id="team" style={{ 
        padding: windowSize.isMobile ? '3rem 1rem' : '5rem 2rem', 
        borderTop: '1px solid #e0e0e0', 
        backgroundColor: '#f8f9fa' 
      }}>
        <div style={{...containerStyle, padding: windowSize.isMobile ? '0 1rem' : '0 2rem'}}>
          <div style={{ textAlign: 'center', marginBottom: windowSize.isMobile ? '2rem' : '4rem' }}>
            <h2 style={{ 
              fontSize: windowSize.isMobile ? '1.5rem' : '2rem', 
              fontWeight: 200, 
              marginBottom: '1rem', 
              color: '#5D3FD3' 
            }}>Our Team</h2>
            <p style={{ 
              color: '#666', 
              fontSize: windowSize.isMobile ? '0.875rem' : '1.125rem' 
            }}>Meet our experienced legal professionals</p>
          </div>

          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: windowSize.isMobile ? '1fr' : windowSize.isTablet ? 'repeat(2, 1fr)' : 'repeat(auto-fit, minmax(280px, 1fr))', 
            gap: windowSize.isMobile ? '1.5rem' : '2rem' 
          }}>
            {teamMembers.map((member, index) => (
              <div
                key={index}
                style={{
                  background: '#ffffff',
                  border: '1px solid #e0e0e0',
                  padding: windowSize.isMobile ? '1.5rem' : '2rem',
                  textAlign: 'center',
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
                <div style={{
                  width: windowSize.isMobile ? '80px' : '120px',
                  height: windowSize.isMobile ? '80px' : '120px',
                  borderRadius: '50%',
                  backgroundColor: '#702963',
                  color: '#ffffff',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: windowSize.isMobile ? '1.75rem' : '2.5rem',
                  fontWeight: 600,
                  margin: '0 auto 1.5rem'
                }}>
                  {member.initials}
                </div>
                <h3 style={{ 
                  fontSize: windowSize.isMobile ? '1rem' : '1.25rem', 
                  marginBottom: '0.5rem', 
                  color: '#333' 
                }}>{member.name}</h3>
                <p style={{ 
                  color: '#702963', 
                  fontSize: windowSize.isMobile ? '0.75rem' : '0.875rem', 
                  marginBottom: '1rem', 
                  fontWeight: 500 
                }}>{member.title}</p>
                <p style={{ 
                  color: '#666', 
                  fontSize: windowSize.isMobile ? '0.75rem' : '0.875rem', 
                  lineHeight: 1.6, 
                  marginBottom: '1rem' 
                }}>{member.bio}</p>
                <a 
                  href={`mailto:${member.email}`}
                  style={{ 
                    color: '#702963', 
                    fontSize: windowSize.isMobile ? '0.75rem' : '0.875rem', 
                    textDecoration: 'none',
                    wordBreak: 'break-word' // Prevent email overflow
                  }}
                  onMouseEnter={e => e.currentTarget.style.textDecoration = 'underline'}
                  onMouseLeave={e => e.currentTarget.style.textDecoration = 'none'}
                >
                  {member.email}
                </a>
              </div>
            ))}
          </div>

          <div style={{ textAlign: 'center', marginTop: windowSize.isMobile ? '2rem' : '3rem' }}>
            <Link to="/team" style={{ textDecoration: 'none' }}>
              <button style={{
                padding: windowSize.isMobile ? '0.875rem 1.5rem' : '1rem 2rem',
                backgroundColor: 'transparent',
                color: '#333',
                border: '1px solid #702963',
                fontSize: windowSize.isMobile ? '0.875rem' : '1rem',
                cursor: 'pointer',
                transition: 'all 0.3s',
                width: windowSize.isMobile ? '100%' : 'auto',
                maxWidth: '300px'
              }}
              onMouseEnter={e => {
                e.currentTarget.style.backgroundColor = '#702963';
                e.currentTarget.style.color = '#ffffff';
              }}
              onMouseLeave={e => {
                e.currentTarget.style.backgroundColor = 'transparent';
                e.currentTarget.style.color = '#333';
              }}>
                View All Team Members →
              </button>
            </Link>
          </div>
        </div>
      </section>

      {/* Contact Section - Mobile Optimized */}
      <section id="contact" style={{ 
        padding: windowSize.isMobile ? '2rem 1rem' : '3rem 2rem', 
        borderTop: '1px solid #e0e0e0', 
        backgroundColor: '#ffffff' 
      }}>
        <div style={{...containerStyle, padding: windowSize.isMobile ? '0 1rem' : '0 2rem'}}>
          <div style={{ textAlign: 'center', marginBottom: windowSize.isMobile ? '1.5rem' : '2rem' }}>
            <h2 style={{ 
              fontSize: windowSize.isMobile ? '1.5rem' : '2rem', 
              fontWeight: 200, 
              marginBottom: '0.5rem', 
              color: '#5D3FD3' 
            }}>Contact Us</h2>
          </div>

          <div style={{
            maxWidth: windowSize.isMobile ? '100%' : '800px',
            margin: '0 auto'
          }}>
            <form onSubmit={handleSubmit}>
              <div style={{
                display: 'grid', 
                gridTemplateColumns: windowSize.isMobile ? '1fr' : 'repeat(3, 1fr)', 
                gap: windowSize.isMobile ? '0.75rem' : '1rem', 
                marginBottom: '1rem'
              }}>
                <input 
                  type="text" 
                  name="firstName" 
                  placeholder="Name *" 
                  value={formData.firstName} 
                  onChange={handleInputChange} 
                  required 
                  style={{
                    width: '100%', 
                    padding: windowSize.isMobile ? '12px 14px' : '10px 14px', 
                    border: '1px solid #ddd', 
                    borderRadius: '4px',
                    fontSize: windowSize.isMobile ? '16px' : '0.95rem', // 16px prevents zoom on iOS
                    color: '#333', 
                    backgroundColor: '#fff', 
                    transition: 'all 0.3s',
                    outline: 'none',
                    WebkitAppearance: 'none' // Remove iOS styling
                  }}
                  onFocus={e => e.currentTarget.style.borderColor = '#702963'}
                  onBlur={e => e.currentTarget.style.borderColor = '#ddd'}
                />
                <input 
                  type="email" 
                  name="email" 
                  placeholder="Email *" 
                  value={formData.email} 
                  onChange={handleInputChange} 
                  required 
                  style={{
                    width: '100%', 
                    padding: windowSize.isMobile ? '12px 14px' : '10px 14px', 
                    border: '1px solid #ddd', 
                    borderRadius: '4px',
                    fontSize: windowSize.isMobile ? '16px' : '0.95rem',
                    color: '#333', 
                    backgroundColor: '#fff', 
                    transition: 'all 0.3s',
                    outline: 'none',
                    WebkitAppearance: 'none'
                  }}
                  onFocus={e => e.currentTarget.style.borderColor = '#702963'}
                  onBlur={e => e.currentTarget.style.borderColor = '#ddd'}
                />
                <input 
                  type="tel" 
                  name="phone" 
                  placeholder="Phone" 
                  value={formData.phone} 
                  onChange={handleInputChange} 
                  style={{
                    width: '100%', 
                    padding: windowSize.isMobile ? '12px 14px' : '10px 14px', 
                    border: '1px solid #ddd', 
                    borderRadius: '4px',
                    fontSize: windowSize.isMobile ? '16px' : '0.95rem',
                    color: '#333', 
                    backgroundColor: '#fff', 
                    transition: 'all 0.3s',
                    outline: 'none',
                    WebkitAppearance: 'none'
                  }}
                  onFocus={e => e.currentTarget.style.borderColor = '#702963'}
                  onBlur={e => e.currentTarget.style.borderColor = '#ddd'}
                />
              </div>
              
              <div style={{marginBottom: '1rem'}}>
                <textarea 
                  name="message" 
                  placeholder="Your message *" 
                  value={formData.message} 
                  onChange={handleInputChange} 
                  required 
                  rows={windowSize.isMobile ? 4 : 3}
                  style={{
                    width: '100%', 
                    padding: windowSize.isMobile ? '12px 14px' : '10px 14px', 
                    border: '1px solid #ddd', 
                    borderRadius: '4px',
                    fontSize: windowSize.isMobile ? '16px' : '0.95rem',
                    color: '#333', 
                    backgroundColor: '#fff', 
                    transition: 'all 0.3s', 
                    resize: 'vertical', 
                    minHeight: windowSize.isMobile ? '100px' : '80px',
                    maxHeight: '200px',
                    outline: 'none',
                    WebkitAppearance: 'none',
                    fontFamily: 'inherit' // Ensure consistent font
                  }}
                  onFocus={e => e.currentTarget.style.borderColor = '#702963'}
                  onBlur={e => e.currentTarget.style.borderColor = '#ddd'}
                />
              </div>
              
              <div style={{ textAlign: windowSize.isMobile ? 'center' : 'right' }}>
                <button 
                  type="submit" 
                  disabled={isSubmitting} 
                  style={{
                    padding: windowSize.isMobile ? '12px 32px' : '10px 24px', 
                    background: '#702963', 
                    color: 'white', 
                    border: 'none', 
                    borderRadius: '4px',
                    fontSize: windowSize.isMobile ? '16px' : '0.95rem', 
                    fontWeight: 500, 
                    cursor: 'pointer', 
                    transition: 'all 0.3s', 
                    opacity: isSubmitting ? 0.7 : 1,
                    outline: 'none',
                    width: windowSize.isMobile ? '100%' : 'auto',
                    minHeight: '44px' // Minimum touch target size
                  }}
                  onMouseEnter={e => {
                    if (!isSubmitting) e.currentTarget.style.background = '#5D3FD3';
                  }}
                  onMouseLeave={e => {
                    e.currentTarget.style.background = '#702963';
                  }}
                >
                  {isSubmitting ? 'Sending...' : submitMessage ? 'Sent ✓' : 'Send'}
                </button>
              </div>
            </form>
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
            color: '#5D3FD3' 
          }}>
            Office Locations
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
                  color: '#702963' 
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
                    color: '#702963', 
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
    </div>
  );
};

export default Home;