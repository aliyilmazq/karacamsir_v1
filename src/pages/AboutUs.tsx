import React, { useState, useEffect } from 'react';
import PageHeaderSection from "../components/PageHeaderSection/PageHeaderSection";
import istanbulImage from "../assets/istanbul_1.jpg";

const AboutUs: React.FC = () => {
  const [activeValue, setActiveValue] = useState(-1);
  const [hoveredService, setHoveredService] = useState<number | null>(null);
  const [isVisible, setIsVisible] = useState({
    intro: false,
    expertise: false,
    values: false,
    practices: false,
    conclusion: false
  });

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

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const section = entry.target.getAttribute('data-section');
            if (section) {
              setIsVisible(prev => ({ ...prev, [section]: true }));
            }
          }
        });
      },
      { threshold: 0.1 }
    );

    const sections = document.querySelectorAll('[data-section]');
    sections.forEach(section => observer.observe(section));

    return () => {
      sections.forEach(section => observer.unobserve(section));
    };
  }, []);

  // Mobile-first container styles
  const containerStyle = {
    maxWidth: '80rem',
    margin: '0 auto',
    padding: windowSize.isMobile ? '0 1rem' : '0 2rem'
  };

  const coreValues = [
    {
      title: "International Legal Fluency",
      description: "Seamlessly navigating Turkish, English, Delaware, and AIFC legal frameworks",
      icon: "🌍"
    },
    {
      title: "Precision & Discretion",
      description: "Boutique practice delivering partner-level attention and strategic focus",
      icon: "🎯"
    },
    {
      title: "Commercial Purpose",
      description: "Legal advice that enables outcomes while protecting what matters most",
      icon: "💼"
    },
    {
      title: "Preserving Values",
      description: "Our guiding principle reflects in every mandate we undertake",
      icon: "🛡️"
    }
  ];

  const practiceAreas = [
    {
      title: "Corporate and Commercial",
      description: "We advise on incorporations, restructurings, joint ventures, shareholder arrangements, and cross-border M&A. We regularly draft and negotiate international commercial contracts governed by Turkish, English, or AIFC law, with particular attention to enforceability and risk allocation across jurisdictions.",
      highlights: ["Cross-border M&A", "Joint Ventures", "International Contracts", "Corporate Restructuring"]
    },
    {
      title: "EPC and Finance",
      description: "We act for contractors, sponsors, and lenders involved in complex infrastructure, industrial, and energy projects. Our experience includes FIDIC-based agreements, procurement mandates, and project finance documentation. We are also engaged on mandates involving multilateral development banks and export credit agencies.",
      highlights: ["FIDIC Agreements", "Project Finance", "Infrastructure Projects", "Export Credit Agencies"]
    },
    {
      title: "Technology and Ventures",
      description: "We advise startups, growth companies, and venture investors across every stage of development. Our services include corporate structuring under English and Delaware law, convertible instruments such as SAFE and KISS notes, IP protection strategies, investor negotiations, and cross-border expansion.",
      highlights: ["Venture Capital", "SAFE/KISS Notes", "IP Strategy", "Cross-border Expansion"]
    },
    {
      title: "Dispute Resolution",
      description: "We represent clients in high-value commercial disputes and international arbitrations. Our work spans ICC, LCIA, and ISTAC proceedings, as well as ad hoc arbitration and cross-border litigation strategy. We regularly advise on disputes governed by English and AIFC law.",
      highlights: ["International Arbitration", "ICC/LCIA/ISTAC", "Cross-border Litigation", "Asset Recovery"]
    }
  ];

  const services = [
    {
      icon: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=400&h=400&fit=crop",
      title: "Corporate & Commercial",
      description: "Corporate structuring, contracts and general commercial law advisory for sophisticated business clients."
    },
    {
      icon: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=400&h=400&fit=crop",
      title: "EPC+F (Engineering, Procurement, Construction & Finance)",
      description: "Investment projects, construction and infrastructure contracts with financing structures."
    },
    {
      icon: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=400&h=400&fit=crop",
      title: "Technology & Ventures",
      description: "Innovative companies, digital economy and investment law for the new economy."
    },
    {
      icon: "https://images.unsplash.com/photo-1589391886645-d51941baf7fb?w=400&h=400&fit=crop",
      title: "Dispute Resolution",
      description: "Comprehensive dispute resolution services including litigation, arbitration and alternative dispute resolution."
    }
  ];

  return (
    <>
      <PageHeaderSection
        title="About Us"
        breadcrumb="Home / About Us"
        backgroundImage={istanbulImage}
      />
      <div style={{ backgroundColor: '#ffffff', color: '#333333' }}>
        {/* Introduction Section - Mobile Optimized */}
        <section 
          data-section="intro"
          style={{ 
            padding: windowSize.isMobile ? '3rem 1rem' : '5rem 2rem',
            opacity: isVisible.intro ? 1 : 0,
            transform: isVisible.intro ? 'translateY(0)' : 'translateY(20px)',
            transition: 'all 0.8s ease-out'
          }}
        >
          <div style={containerStyle}>
            <div style={{ maxWidth: '900px', margin: '0 auto', textAlign: 'center' }}>
              <h1 style={{ 
                fontSize: windowSize.isMobile ? '2rem' : 'clamp(2.5rem, 5vw, 4rem)', 
                fontWeight: 200, 
                lineHeight: 1.2, 
                marginBottom: windowSize.isMobile ? '2rem' : '3rem',
                color: '#333',
                letterSpacing: '-0.02em'
              }}>
                Boutique Excellence in <span style={{ color: '#5D3FD3' }}>International Law</span>
              </h1>
              
              <p style={{ 
                fontSize: windowSize.isMobile ? '1.125rem' : '1.375rem', 
                lineHeight: 1.8,
                color: '#555',
                marginBottom: windowSize.isMobile ? '1.5rem' : '2rem',
                fontWeight: 300
              }}>
                Karaçam & Şir is a boutique corporate law firm based in Istanbul, advising across Turkish law, English law, Delaware law, and the AIFC legal framework in Kazakhstan.
              </p>

              <p style={{ 
                fontSize: windowSize.isMobile ? '1rem' : '1.125rem', 
                lineHeight: 1.8,
                color: '#666',
                marginBottom: windowSize.isMobile ? '2rem' : '3rem'
              }}>
                We deliver high-calibre legal services with the precision, discretion, and strategic focus that only a tightly structured practice can offer.
              </p>

              <div style={{
                width: windowSize.isMobile ? '60px' : '80px',
                height: '3px',
                backgroundColor: '#5D3FD3',
                margin: '0 auto'
              }}></div>
            </div>
          </div>
        </section>

        {/* Our Expertise Section - Mobile Optimized */}
        <section 
          data-section="expertise"
          style={{ 
            padding: windowSize.isMobile ? '3rem 1rem' : '5rem 2rem', 
            borderTop: '1px solid #e0e0e0', 
            backgroundColor: '#ffffff',
            opacity: isVisible.expertise ? 1 : 0,
            transform: isVisible.expertise ? 'translateY(0)' : 'translateY(20px)',
            transition: 'all 0.8s ease-out 0.2s'
          }}
        >
          <div style={{...containerStyle}}>
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
                <div
                  key={index}
                  style={{
                    position: 'relative',
                    background: '#ffffff',
                    border: '2px solid',
                    borderColor: hoveredService === index ? '#702963' : 'rgba(112, 41, 99, 0.2)',
                    padding: '0',
                    overflow: 'hidden',
                    transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                    cursor: 'pointer',
                    boxShadow: hoveredService === index 
                      ? '0 20px 40px rgba(112, 41, 99, 0.3), inset 0 0 0 1px rgba(112, 41, 99, 0.2)' 
                      : '0 4px 12px rgba(0, 0, 0, 0.1)',
                    clipPath: 'polygon(0 0, calc(100% - 20px) 0, 100% 20px, 100% 100%, 0 100%)',
                    height: windowSize.isMobile ? 'auto' : '480px',
                    minHeight: windowSize.isMobile ? '320px' : '480px',
                    display: 'flex',
                    flexDirection: 'column',
                    transform: hoveredService === index ? 'translateY(-8px) scale(1.02)' : 'translateY(0) scale(1)'
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
                      top: windowSize.isMobile ? '-35px' : '-60px',
                      right: windowSize.isMobile ? '1rem' : '2rem',
                      fontSize: windowSize.isMobile ? '2rem' : '4rem',
                      fontWeight: '900',
                      color: hoveredService === index ? '#702963' : 'rgba(112, 41, 99, 0.2)',
                      transition: 'all 0.4s',
                      lineHeight: 1,
                      fontFamily: 'Arial, sans-serif'
                    }}>
                      0{index + 1}
                    </div>
                    <h3 style={{ 
                      fontSize: windowSize.isMobile ? '1.125rem' : '1.75rem', 
                      fontWeight: 700, 
                      marginBottom: '1rem',
                      letterSpacing: '-0.02em',
                      color: '#333',
                      transition: 'all 0.4s',
                      textAlign: 'center'
                    }}>
                      {service.title}
                    </h3>
                    <div style={{
                      width: windowSize.isMobile ? '32px' : '48px',
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
                      {service.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Core Values Section - Mobile Optimized */}
        <section 
          data-section="values"
          style={{ 
            padding: windowSize.isMobile ? '3rem 1rem' : '5rem 2rem',
            backgroundColor: '#f8f9fa',
            opacity: isVisible.values ? 1 : 0,
            transform: isVisible.values ? 'translateY(0)' : 'translateY(20px)',
            transition: 'all 0.8s ease-out 0.4s'
          }}
        >
          <div style={containerStyle}>
            <h2 style={{ 
              fontSize: windowSize.isMobile ? '1.75rem' : '2.5rem', 
              fontWeight: 200, 
              textAlign: 'center',
              marginBottom: windowSize.isMobile ? '2rem' : '4rem',
              color: '#333'
            }}>
              Our Deliberate Strength
            </h2>

            <div style={{ 
              maxWidth: '800px', 
              margin: '0 auto',
              marginBottom: windowSize.isMobile ? '2rem' : '4rem',
              textAlign: 'center'
            }}>
              <p style={{ 
                fontSize: windowSize.isMobile ? '1rem' : '1.25rem', 
                lineHeight: 1.8,
                color: '#555',
                fontWeight: 300
              }}>
                Our size is a deliberate strength. We do not operate as a large bureaucracy; we function as a specialised legal unit, providing direct partner-level attention, timely execution, and tailored legal architecture.
              </p>
            </div>

            <div style={{ 
              display: 'grid', 
              gridTemplateColumns: windowSize.isMobile ? '1fr' : windowSize.isTablet ? 'repeat(2, 1fr)' : 'repeat(auto-fit, minmax(280px, 1fr))', 
              gap: windowSize.isMobile ? '1.5rem' : '2rem',
              marginBottom: windowSize.isMobile ? '2rem' : '4rem'
            }}>
              {coreValues.map((value, index) => (
                <div
                  key={index}
                  style={{
                    backgroundColor: '#ffffff',
                    padding: windowSize.isMobile ? '2rem' : '2.5rem',
                    borderRadius: '8px',
                    border: '1px solid #e0e0e0',
                    textAlign: 'center',
                    transition: 'all 0.3s ease',
                    cursor: 'pointer',
                    transform: activeValue === index ? 'translateY(-8px)' : 'translateY(0)',
                    boxShadow: activeValue === index 
                      ? '0 20px 40px rgba(93, 63, 211, 0.2)' 
                      : '0 4px 12px rgba(0, 0, 0, 0.05)'
                  }}
                  onMouseEnter={() => !windowSize.isMobile && setActiveValue(index)}
                  onMouseLeave={() => setActiveValue(-1)}
                  onClick={() => windowSize.isMobile && setActiveValue(activeValue === index ? -1 : index)}
                >
                  <div style={{ 
                    fontSize: windowSize.isMobile ? '2rem' : '3rem', 
                    marginBottom: '1.5rem',
                    filter: activeValue === index ? 'grayscale(0)' : 'grayscale(0.5)',
                    transition: 'all 0.3s ease'
                  }}>
                    {value.icon}
                  </div>
                  <h3 style={{ 
                    fontSize: windowSize.isMobile ? '1.125rem' : '1.375rem', 
                    fontWeight: 500,
                    marginBottom: '1rem',
                    color: activeValue === index ? '#5D3FD3' : '#333',
                    transition: 'all 0.3s ease'
                  }}>
                    {value.title}
                  </h3>
                  <p style={{ 
                    fontSize: windowSize.isMobile ? '0.875rem' : '1rem',
                    color: '#666',
                    lineHeight: 1.6
                  }}>
                    {value.description}
                  </p>
                </div>
              ))}
            </div>

            <div style={{
              backgroundColor: '#5D3FD3',
              color: '#ffffff',
              padding: windowSize.isMobile ? '2rem 1.5rem' : '3rem',
              borderRadius: '8px',
              textAlign: 'center',
              maxWidth: '800px',
              margin: '0 auto'
            }}>
              <p style={{ 
                fontSize: windowSize.isMobile ? '1rem' : '1.25rem',
                lineHeight: 1.8,
                fontStyle: 'italic',
                margin: 0
              }}>
                "Each mandate is approached with depth, clarity, and a clear sense of commercial purpose. Our work is grounded in the belief that legal advice should enable outcomes while protecting what matters most."
              </p>
            </div>
          </div>
        </section>

        {/* Practice Areas Section - Mobile Optimized */}
        <section 
          data-section="practices"
          style={{ 
            padding: windowSize.isMobile ? '3rem 1rem' : '5rem 2rem',
            opacity: isVisible.practices ? 1 : 0,
            transform: isVisible.practices ? 'translateY(0)' : 'translateY(20px)',
            transition: 'all 0.8s ease-out 0.6s'
          }}
        >
          <div style={containerStyle}>
            <p style={{
              fontSize: windowSize.isMobile ? '0.875rem' : '1.125rem',
              color: '#666',
              textAlign: 'center',
              maxWidth: '700px',
              margin: `0 auto ${windowSize.isMobile ? '2rem' : '4rem'}`
            }}>
              Our practice is built around four core areas where we deliver exceptional value through deep expertise and innovative solutions.
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: windowSize.isMobile ? '1.5rem' : '2rem' }}>
              {practiceAreas.map((area, index) => (
                <div
                  key={index}
                  style={{
                    display: windowSize.isMobile ? 'flex' : 'grid',
                    flexDirection: windowSize.isMobile ? 'column' : undefined,
                    gridTemplateColumns: !windowSize.isMobile ? (index % 2 === 0 ? '1fr 2fr' : '2fr 1fr') : undefined,
                    gap: windowSize.isMobile ? '1.5rem' : '3rem',
                    alignItems: windowSize.isMobile ? 'stretch' : 'center',
                    backgroundColor: index % 2 === 0 ? '#ffffff' : '#f8f9fa',
                    padding: windowSize.isMobile ? '2rem 1.5rem' : '3rem',
                    borderRadius: '12px',
                    border: '1px solid #e0e0e0'
                  }}
                >
                  <div style={{ order: windowSize.isMobile ? 1 : (index % 2 === 0 ? 1 : 2) }}>
                    <div style={{
                      backgroundColor: '#5D3FD3',
                      color: '#ffffff',
                      padding: windowSize.isMobile ? '1.5rem' : '2rem',
                      borderRadius: '8px',
                      textAlign: 'center'
                    }}>
                      <h3 style={{ 
                        fontSize: windowSize.isMobile ? '1.25rem' : '1.75rem', 
                        fontWeight: 400,
                        marginBottom: windowSize.isMobile ? '0.75rem' : '1rem'
                      }}>
                        {area.title}
                      </h3>
                      <div style={{ 
                        display: 'flex', 
                        flexWrap: 'wrap', 
                        gap: windowSize.isMobile ? '0.5rem' : '0.75rem',
                        justifyContent: 'center'
                      }}>
                        {area.highlights.map((highlight, hIndex) => (
                          <span
                            key={hIndex}
                            style={{
                              fontSize: windowSize.isMobile ? '0.75rem' : '0.875rem',
                              backgroundColor: 'rgba(255, 255, 255, 0.2)',
                              padding: windowSize.isMobile ? '0.25rem 0.5rem' : '0.375rem 0.75rem',
                              borderRadius: '4px',
                              whiteSpace: 'nowrap'
                            }}
                          >
                            {highlight}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                  <div style={{ order: windowSize.isMobile ? 2 : (index % 2 === 0 ? 2 : 1) }}>
                    <p style={{ 
                      fontSize: windowSize.isMobile ? '0.875rem' : '1.125rem', 
                      lineHeight: 1.8,
                      color: '#555',
                      margin: 0,
                      textAlign: windowSize.isMobile ? 'left' : 'left'
                    }}>
                      {area.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Conclusion Section - Mobile Optimized */}
        <section 
          data-section="conclusion"
          style={{ 
            padding: windowSize.isMobile ? '3rem 1rem' : '5rem 2rem',
            backgroundColor: '#f8f9fa',
            borderTop: '1px solid #e0e0e0',
            opacity: isVisible.conclusion ? 1 : 0,
            transform: isVisible.conclusion ? 'translateY(0)' : 'translateY(20px)',
            transition: 'all 0.8s ease-out 0.8s'
          }}
        >
          <div style={containerStyle}>
            <div style={{ 
              maxWidth: '900px', 
              margin: '0 auto',
              textAlign: 'center'
            }}>
              <h2 style={{ 
                fontSize: windowSize.isMobile ? '1.5rem' : '2rem',
                fontWeight: 300,
                marginBottom: windowSize.isMobile ? '1.5rem' : '2rem',
                color: '#5D3FD3'
              }}>
                Precision-Oriented Legal Partnership
              </h2>
              <p style={{ 
                fontSize: windowSize.isMobile ? '1rem' : '1.375rem',
                lineHeight: 1.8,
                color: '#555',
                fontWeight: 300,
                marginBottom: windowSize.isMobile ? '2rem' : '3rem'
              }}>
                Karaçam & Şir combines international legal fluency with disciplined execution. We are not a volume-driven practice; we are a precision-oriented legal partner for clients who value clarity, depth, and long-term alignment.
              </p>
              <div style={{
                display: 'flex',
                flexDirection: windowSize.isMobile ? 'column' : 'row',
                gap: '1rem',
                justifyContent: 'center',
                alignItems: 'center'
              }}>
                <a href="/contact" style={{ textDecoration: 'none', width: windowSize.isMobile ? '100%' : 'auto' }}>
                  <button style={{
                    padding: windowSize.isMobile ? '1rem 2rem' : '1rem 2.5rem',
                    backgroundColor: '#5D3FD3',
                    color: '#ffffff',
                    border: 'none',
                    borderRadius: '4px',
                    fontSize: windowSize.isMobile ? '0.875rem' : '1rem',
                    fontWeight: 500,
                    cursor: 'pointer',
                    transition: 'all 0.3s',
                    boxShadow: '0 4px 12px rgba(93, 63, 211, 0.3)',
                    width: windowSize.isMobile ? '100%' : 'auto',
                    minHeight: '44px'
                  }}
                  onMouseEnter={e => {
                    e.currentTarget.style.backgroundColor = '#702963';
                    e.currentTarget.style.transform = 'translateY(-2px)';
                    e.currentTarget.style.boxShadow = '0 6px 20px rgba(93, 63, 211, 0.4)';
                  }}
                  onMouseLeave={e => {
                    e.currentTarget.style.backgroundColor = '#5D3FD3';
                    e.currentTarget.style.transform = 'translateY(0)';
                    e.currentTarget.style.boxShadow = '0 4px 12px rgba(93, 63, 211, 0.3)';
                  }}>
                    Get in Touch
                  </button>
                </a>
                <a href="/team" style={{ textDecoration: 'none', width: windowSize.isMobile ? '100%' : 'auto' }}>
                  <button style={{
                    padding: windowSize.isMobile ? '1rem 2rem' : '1rem 2.5rem',
                    backgroundColor: 'transparent',
                    color: '#5D3FD3',
                    border: '2px solid #5D3FD3',
                    borderRadius: '4px',
                    fontSize: windowSize.isMobile ? '0.875rem' : '1rem',
                    fontWeight: 500,
                    cursor: 'pointer',
                    transition: 'all 0.3s',
                    width: windowSize.isMobile ? '100%' : 'auto',
                    minHeight: '44px'
                  }}
                  onMouseEnter={e => {
                    e.currentTarget.style.backgroundColor = '#5D3FD3';
                    e.currentTarget.style.color = '#ffffff';
                  }}
                  onMouseLeave={e => {
                    e.currentTarget.style.backgroundColor = 'transparent';
                    e.currentTarget.style.color = '#5D3FD3';
                  }}>
                    Meet Our Team
                  </button>
                </a>
              </div>
            </div>
          </div>
        </section>
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
          
          /* Better touch targets */
          @media (max-width: 768px) {
            button, a {
              min-height: 44px;
              display: inline-flex;
              align-items: center;
              justify-content: center;
            }
          }
        `}
      </style>
    </>
  );
};

export default AboutUs;