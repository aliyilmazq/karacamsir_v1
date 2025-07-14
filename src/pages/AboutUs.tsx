import React, { useState, useEffect } from 'react';
import PageHeaderSection from "../components/PageHeaderSection/PageHeaderSection";
import istanbulImage from "../assets/istanbul_1.jpg";

const AboutUs: React.FC = () => {
  const [activeValue, setActiveValue] = useState(0);
  const [isVisible, setIsVisible] = useState({
    intro: false,
    values: false,
    practices: false,
    conclusion: false
  });

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

  const containerStyle = {
    maxWidth: '80rem',
    margin: '0 auto',
    padding: '0 2rem'
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

  return (
    <>
      <PageHeaderSection
        title="About Us"
        breadcrumb="Home / About Us"
        backgroundImage={istanbulImage}
      />
      <div style={{ backgroundColor: '#ffffff', color: '#333333' }}>
        {/* Introduction Section */}
        <section 
          data-section="intro"
          style={{ 
            padding: '5rem 2rem',
            opacity: isVisible.intro ? 1 : 0,
            transform: isVisible.intro ? 'translateY(0)' : 'translateY(20px)',
            transition: 'all 0.8s ease-out'
          }}
        >
          <div style={containerStyle}>
            <div style={{ maxWidth: '900px', margin: '0 auto', textAlign: 'center' }}>
              <h1 style={{ 
                fontSize: 'clamp(2.5rem, 5vw, 4rem)', 
                fontWeight: 200, 
                lineHeight: 1.2, 
                marginBottom: '3rem',
                color: '#333',
                letterSpacing: '-0.02em'
              }}>
                Boutique Excellence in <span style={{ color: '#5D3FD3' }}>International Law</span>
              </h1>
              
              <p style={{ 
                fontSize: '1.375rem', 
                lineHeight: 1.8,
                color: '#555',
                marginBottom: '2rem',
                fontWeight: 300
              }}>
                Karaçam & Şir is a boutique corporate law firm based in Istanbul, advising across Turkish law, English law, Delaware law, and the AIFC legal framework in Kazakhstan.
              </p>

              <p style={{ 
                fontSize: '1.125rem', 
                lineHeight: 1.8,
                color: '#666',
                marginBottom: '3rem'
              }}>
                We deliver high-calibre legal services with the precision, discretion, and strategic focus that only a tightly structured practice can offer.
              </p>

              <div style={{
                width: '80px',
                height: '3px',
                backgroundColor: '#5D3FD3',
                margin: '0 auto'
              }}></div>
            </div>
          </div>
        </section>

        {/* Core Values Section */}
        <section 
          data-section="values"
          style={{ 
            padding: '5rem 2rem',
            backgroundColor: '#f8f9fa',
            opacity: isVisible.values ? 1 : 0,
            transform: isVisible.values ? 'translateY(0)' : 'translateY(20px)',
            transition: 'all 0.8s ease-out 0.2s'
          }}
        >
          <div style={containerStyle}>
            <h2 style={{ 
              fontSize: '2.5rem', 
              fontWeight: 200, 
              textAlign: 'center',
              marginBottom: '4rem',
              color: '#333'
            }}>
              Our Deliberate Strength
            </h2>

            <div style={{ 
              maxWidth: '800px', 
              margin: '0 auto 4rem',
              textAlign: 'center'
            }}>
              <p style={{ 
                fontSize: '1.25rem', 
                lineHeight: 1.8,
                color: '#555',
                fontWeight: 300
              }}>
                Our size is a deliberate strength. We do not operate as a large bureaucracy; we function as a specialised legal unit, providing direct partner-level attention, timely execution, and tailored legal architecture.
              </p>
            </div>

            <div style={{ 
              display: 'grid', 
              gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', 
              gap: '2rem',
              marginBottom: '4rem'
            }}>
              {coreValues.map((value, index) => (
                <div
                  key={index}
                  style={{
                    backgroundColor: '#ffffff',
                    padding: '2.5rem',
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
                  onMouseEnter={() => setActiveValue(index)}
                  onMouseLeave={() => setActiveValue(-1)}
                >
                  <div style={{ 
                    fontSize: '3rem', 
                    marginBottom: '1.5rem',
                    filter: activeValue === index ? 'grayscale(0)' : 'grayscale(0.5)',
                    transition: 'all 0.3s ease'
                  }}>
                    {value.icon}
                  </div>
                  <h3 style={{ 
                    fontSize: '1.375rem', 
                    fontWeight: 500,
                    marginBottom: '1rem',
                    color: activeValue === index ? '#5D3FD3' : '#333',
                    transition: 'all 0.3s ease'
                  }}>
                    {value.title}
                  </h3>
                  <p style={{ 
                    fontSize: '1rem',
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
              padding: '3rem',
              borderRadius: '8px',
              textAlign: 'center',
              maxWidth: '800px',
              margin: '0 auto'
            }}>
              <p style={{ 
                fontSize: '1.25rem',
                lineHeight: 1.8,
                fontStyle: 'italic',
                margin: 0
              }}>
                "Each mandate is approached with depth, clarity, and a clear sense of commercial purpose. Our work is grounded in the belief that legal advice should enable outcomes while protecting what matters most."
              </p>
            </div>
          </div>
        </section>

        {/* Practice Areas Section */}
        <section 
          data-section="practices"
          style={{ 
            padding: '5rem 2rem',
            opacity: isVisible.practices ? 1 : 0,
            transform: isVisible.practices ? 'translateY(0)' : 'translateY(20px)',
            transition: 'all 0.8s ease-out 0.4s'
          }}
        >
          <div style={containerStyle}>
            <p style={{
              fontSize: '1.125rem',
              color: '#666',
              textAlign: 'center',
              marginBottom: '4rem',
              maxWidth: '700px',
              margin: '0 auto 4rem'
            }}>
              Our practice is built around four core areas where we deliver exceptional value through deep expertise and innovative solutions.
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
              {practiceAreas.map((area, index) => (
                <div
                  key={index}
                  style={{
                    display: 'grid',
                    gridTemplateColumns: index % 2 === 0 ? '1fr 2fr' : '2fr 1fr',
                    gap: '3rem',
                    alignItems: 'center',
                    backgroundColor: index % 2 === 0 ? '#ffffff' : '#f8f9fa',
                    padding: '3rem',
                    borderRadius: '12px',
                    border: '1px solid #e0e0e0'
                  }}
                >
                  <div style={{ order: index % 2 === 0 ? 1 : 2 }}>
                    <div style={{
                      backgroundColor: '#5D3FD3',
                      color: '#ffffff',
                      padding: '2rem',
                      borderRadius: '8px',
                      textAlign: 'center'
                    }}>
                      <h3 style={{ 
                        fontSize: '1.75rem', 
                        fontWeight: 400,
                        marginBottom: '1rem'
                      }}>
                        {area.title}
                      </h3>
                      <div style={{ 
                        display: 'flex', 
                        flexWrap: 'wrap', 
                        gap: '0.75rem',
                        justifyContent: 'center'
                      }}>
                        {area.highlights.map((highlight, hIndex) => (
                          <span
                            key={hIndex}
                            style={{
                              fontSize: '0.875rem',
                              backgroundColor: 'rgba(255, 255, 255, 0.2)',
                              padding: '0.375rem 0.75rem',
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
                  <div style={{ order: index % 2 === 0 ? 2 : 1 }}>
                    <p style={{ 
                      fontSize: '1.125rem', 
                      lineHeight: 1.8,
                      color: '#555',
                      margin: 0
                    }}>
                      {area.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Conclusion Section */}
        <section 
          data-section="conclusion"
          style={{ 
            padding: '5rem 2rem',
            backgroundColor: '#f8f9fa',
            borderTop: '1px solid #e0e0e0',
            opacity: isVisible.conclusion ? 1 : 0,
            transform: isVisible.conclusion ? 'translateY(0)' : 'translateY(20px)',
            transition: 'all 0.8s ease-out 0.6s'
          }}
        >
          <div style={containerStyle}>
            <div style={{ 
              maxWidth: '900px', 
              margin: '0 auto',
              textAlign: 'center'
            }}>
              <h2 style={{ 
                fontSize: '2rem',
                fontWeight: 300,
                marginBottom: '2rem',
                color: '#5D3FD3'
              }}>
                Precision-Oriented Legal Partnership
              </h2>
              <p style={{ 
                fontSize: '1.375rem',
                lineHeight: 1.8,
                color: '#555',
                fontWeight: 300,
                marginBottom: '3rem'
              }}>
                Karaçam & Şir combines international legal fluency with disciplined execution. We are not a volume-driven practice; we are a precision-oriented legal partner for clients who value clarity, depth, and long-term alignment.
              </p>
              <div style={{
                display: 'flex',
                gap: '1rem',
                justifyContent: 'center',
                alignItems: 'center'
              }}>
                <a href="/contact" style={{ textDecoration: 'none' }}>
                  <button style={{
                    padding: '1rem 2.5rem',
                    backgroundColor: '#5D3FD3',
                    color: '#ffffff',
                    border: 'none',
                    borderRadius: '4px',
                    fontSize: '1rem',
                    fontWeight: 500,
                    cursor: 'pointer',
                    transition: 'all 0.3s',
                    boxShadow: '0 4px 12px rgba(93, 63, 211, 0.3)'
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
                <a href="/team" style={{ textDecoration: 'none' }}>
                  <button style={{
                    padding: '1rem 2.5rem',
                    backgroundColor: 'transparent',
                    color: '#5D3FD3',
                    border: '2px solid #5D3FD3',
                    borderRadius: '4px',
                    fontSize: '1rem',
                    fontWeight: 500,
                    cursor: 'pointer',
                    transition: 'all 0.3s'
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
    </>
  );
};

export default AboutUs;