import React, { useState, useEffect } from 'react';
import PageHeaderSection from "../components/PageHeaderSection/PageHeaderSection";
import istanbulImage from "../assets/istanbul_1.jpg";

const WhatWeAreDoing = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const services = [
    {
      number: "01",
      title: "Corporate & Commercial",
      description: "Corporate structuring, contracts and general commercial law advisory for sophisticated business clients.",
      subcategories: [
        {
          name: "Corporate Advisory & Governance",
          items: [
            "Company formation and general assembly processes",
            "Shareholder agreements and share transfers",
            "Board resolutions, powers of attorney and representation",
            "Holding structures and group company advisory"
          ]
        },
        {
          name: "Commercial Contracts",
          items: [
            "Sales, supply, distribution and agency agreements",
            "Framework agreements and open account structures",
            "International contracts (INCOTERMS, ICC rules)",
            "Secured transactions: guarantees, mortgages, pledges"
          ]
        },
        {
          name: "Risk & Compliance",
          items: [
            "Commercial risk legal analysis",
            "Data protection (KVKK & GDPR)",
            "Business ethics, competition law and internal audit",
            "Compliance policies and training programs"
          ]
        },
        {
          name: "Dispute Resolution (Commercial)",
          items: [
            "Commercial collection lawsuits and enforcement",
            "Security disputes, check and promissory note cases",
            "Arbitration and alternative dispute resolution"
          ]
        }
      ],
      metrics: ["500+ Corporate Clients", "€2B+ Deal Value", "15+ Years Excellence"]
    },
    {
      number: "02",
      title: "EPC+F",
      subtitle: "Engineering, Procurement, Construction & Finance",
      description: "Investment projects, construction and infrastructure contracts with financing structures.",
      subcategories: [
        {
          name: "EPC & Infrastructure Contracts",
          items: [
            "EPC, EPCM, FIDIC contracts",
            "Subcontractor, material supply and site management",
            "Lump sum, unit price, hybrid model contracts",
            "Technical specifications and progress disputes"
          ]
        },
        {
          name: "Project Finance & PPP",
          items: [
            "Project finance agreements",
            "Leasing, factoring and ECA-backed structures",
            "Public-Private Partnership (PPP) law",
            "Banking and investment fund agreements"
          ]
        },
        {
          name: "Construction Disputes",
          items: [
            "Delay, defects, performance obstacles",
            "Settlement, expert witness and arbitration processes",
            "Liquidated damages and contract terminations",
            "Administrative sanctions and public tender disputes"
          ]
        }
      ],
      metrics: ["$5B+ Projects", "100+ FIDIC Contracts", "Global Expertise"]
    },
    {
      number: "03",
      title: "Technology & Ventures",
      description: "Innovative companies, digital economy and investment law for the new economy.",
      subcategories: [
        {
          name: "Startup & Venture Law",
          items: [
            "Startup incorporation and equity structures",
            "SAFE, convertible notes, pre-seed/seed rounds",
            "Angel investor & VC agreements",
            "Exit strategies and due diligence processes"
          ]
        },
        {
          name: "Technology Contracts",
          items: [
            "Software development and SaaS agreements",
            "Licensing, cloud services, API terms of use",
            "R&D, know-how, confidentiality and non-compete"
          ]
        },
        {
          name: "Data, AI & IP Law",
          items: [
            "IP strategies: patents, trademarks, designs",
            "AI, algorithm and data protection compliance",
            "KVKK/GDPR advisory for startups",
            "Blockchain, crypto assets and token law advisory"
          ]
        },
        {
          name: "Tech Disputes & Enforcement",
          items: [
            "Software violations, licensing disputes",
            "Startup partnership crises",
            "Post-investment obligation breaches",
            "IP infringement lawsuits and injunctions"
          ]
        }
      ],
      metrics: ["200+ Startups", "€500M+ Raised", "Tech Law Pioneers"]
    }
  ];

  const capabilities = [
    { area: "Corporate & Commercial", percentage: 95 },
    { area: "Project Finance", percentage: 92 },
    { area: "Technology Law", percentage: 90 },
    { area: "M&A Transactions", percentage: 88 },
    { area: "Dispute Resolution", percentage: 94 }
  ];

  const sectionStyle = {
    padding: '5rem 2rem',
    borderTop: '1px solid #e0e0e0'
  };

  const containerStyle = {
    maxWidth: '80rem',
    margin: '0 auto'
  };

  return (
    <>
      <PageHeaderSection
        title="Çalışma Alanlarımız"
        breadcrumb="Ana Sayfa / Hizmetlerimiz"
        backgroundImage={istanbulImage}
      />
      <div style={{ backgroundColor: '#ffffff', color: '#333333' }}>
        {/* Hero Section */}
        <section style={{ padding: '8rem 2rem 5rem', backgroundColor: '#ffffff' }}>
          <div style={containerStyle}>
            <h1 style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)', fontWeight: 200, lineHeight: 1.1, marginBottom: '2rem', color: '#702963' }}>
              What We
              <span style={{ display: 'block', color: '#666666' }}>Are Doing</span>
            </h1>
            <div style={{ width: '6rem', height: '1px', backgroundColor: '#702963', marginBottom: '2rem' }}></div>
            <p style={{ fontSize: '1.25rem', color: '#666666', maxWidth: '42rem', fontWeight: 300, lineHeight: 1.6 }}>
              Specialized legal advisory for complex corporate transactions, infrastructure projects 
              and technology ventures. We deliver sophisticated solutions for institutional clients 
              navigating today's dynamic business landscape.
            </p>
          </div>
        </section>

        {/* Services Section */}
        <section id="services" style={sectionStyle}>
          <div style={containerStyle}>
            <div style={{ marginBottom: '4rem' }}>
              <h2 style={{ fontSize: '2rem', fontWeight: 200, marginBottom: '1rem', color: '#702963' }}>Our Practice Areas</h2>
              <p style={{ color: '#666666' }}>Comprehensive legal solutions for modern businesses</p>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '1px' }}>
              {services.map((service, index) => (
                <div
                  key={index}
                  onMouseEnter={() => setHoveredCard(index)}
                  onMouseLeave={() => setHoveredCard(null)}
                >
                  <div 
                    style={{
                      border: '1px solid #e0e0e0',
                      padding: '2rem',
                      transition: 'all 0.5s',
                      cursor: 'pointer',
                      backgroundColor: hoveredCard === index ? '#702963' : '#ffffff'
                    }}
                    onClick={() => setActiveIndex(activeIndex === index ? null : index)}
                  >
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                      <div style={{ flex: 1 }}>
                        <div style={{ display: 'flex', alignItems: 'baseline', gap: '2rem', marginBottom: '1rem' }}>
                          <span style={{ 
                            fontSize: '2.5rem', 
                            fontWeight: 100,
                            color: hoveredCard === index ? '#ffffff' : '#702963'
                          }}>
                            {service.number}
                          </span>
                          <div>
                            <h3 style={{ fontSize: '2rem', fontWeight: 300 }}>{service.title}</h3>
                            {service.subtitle && (
                              <p style={{ fontSize: '1rem', color: '#666666', marginTop: '0.25rem' }}>{service.subtitle}</p>
                            )}
                          </div>
                        </div>
                        <p style={{ 
                          fontSize: '1.125rem', 
                          lineHeight: 1.6,
                          color: hoveredCard === index ? '#ffffff' : '#666666'
                        }}>
                          {service.description}
                        </p>
                      </div>
                      <button style={{ 
                        marginLeft: '2rem', 
                        padding: '0.5rem',
                        background: 'none',
                        border: 'none',
                        color: '#333333',
                        cursor: 'pointer',
                        fontSize: '1.5rem'
                      }}>
                        {activeIndex === index ? '−' : '+'}
                      </button>
                    </div>

                    {activeIndex === index && (
                      <div style={{ 
                        marginTop: '2rem', 
                        paddingTop: '2rem', 
                        borderTop: '1px solid #e0e0e0' 
                      }}>
                        <div style={{ 
                          display: 'grid', 
                          gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', 
                          gap: '2rem',
                          marginBottom: '2rem'
                        }}>
                          {service.subcategories.map((subcat, idx) => (
                            <div key={idx}>
                              <h4 style={{ 
                                fontSize: '1.25rem', 
                                fontWeight: 500,
                                marginBottom: '1rem',
                                color: hoveredCard === index ? '#ffffff' : '#333333'
                              }}>
                                {subcat.name}
                              </h4>
                              <ul style={{ 
                                listStyle: 'none', 
                                padding: 0,
                                fontSize: '0.875rem',
                                lineHeight: 1.8
                              }}>
                                {subcat.items.map((item, itemIdx) => (
                                  <li key={itemIdx} style={{ 
                                    paddingLeft: '1rem',
                                    position: 'relative',
                                    color: hoveredCard === index ? '#ffffff' : '#666666'
                                  }}>
                                    <span style={{ 
                                      position: 'absolute', 
                                      left: 0,
                                      color: '#666666'
                                    }}>•</span>
                                    {item}
                                  </li>
                                ))}
                              </ul>
                            </div>
                          ))}
                        </div>
                        <div style={{ 
                          display: 'flex', 
                          gap: '2rem', 
                          flexWrap: 'wrap',
                          paddingTop: '1.5rem',
                          borderTop: '1px solid #e0e0e0'
                        }}>
                          {service.metrics.map((metric, idx) => (
                            <div key={idx} style={{ fontSize: '0.875rem' }}>
                              <div style={{ fontWeight: 600, color: '#666666' }}>{metric}</div>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Capabilities Section */}
        <section id="capabilities" style={sectionStyle}>
          <div style={containerStyle}>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '4rem' }}>
              <div>
                <h2 style={{ fontSize: '2rem', fontWeight: 200, marginBottom: '2rem', color: '#702963' }}>Legal Expertise</h2>
                <p style={{ color: '#666666', fontSize: '1.125rem', lineHeight: 1.6, marginBottom: '3rem' }}>
                  Our expertise spans across critical legal domains, ensuring comprehensive 
                  coverage of your legal needs. We maintain industry-leading 
                  proficiency levels through continuous education and practice.
                </p>
                <button style={{
                  border: '1px solid #702963',
                  padding: '1rem 2rem',
                  backgroundColor: 'transparent',
                  color: '#702963',
                  cursor: 'pointer',
                  transition: 'all 0.3s',
                  fontSize: '1rem',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.5rem'
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.backgroundColor = '#702963';
                  e.currentTarget.style.color = 'white';
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.backgroundColor = 'transparent';
                  e.currentTarget.style.color = '#702963';
                }}>
                  View All Services <span>↗</span>
                </button>
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
                {capabilities.map((cap, index) => (
                  <div key={index}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: '0.5rem' }}>
                      <span style={{ fontSize: '1.125rem' }}>{cap.area}</span>
                      <span style={{ fontSize: '0.875rem', color: '#666666' }}>{cap.percentage}%</span>
                    </div>
                    <div style={{ width: '100%', height: '1px', backgroundColor: '#e0e0e0', position: 'relative' }}>
                      <div 
                        style={{ 
                          position: 'absolute',
                          left: 0,
                          top: 0,
                          height: '100%',
                          backgroundColor: '#702963',
                          transition: 'width 1s',
                          transitionDelay: `${index * 100}ms`,
                          width: scrollY > 600 ? `${cap.percentage}%` : '0%'
                        }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section style={{ ...sectionStyle, borderBottom: '1px solid #e0e0e0' }}>
          <div style={containerStyle}>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '2rem', textAlign: 'center' }}>
              <div>
                <div style={{ fontSize: '2rem', fontWeight: 200, marginBottom: '0.5rem' }}>€7.5B+</div>
                <div style={{ fontSize: '0.875rem', color: '#666666', textTransform: 'uppercase', letterSpacing: '0.1em' }}>Transaction Value</div>
              </div>
              <div>
                <div style={{ fontSize: '2rem', fontWeight: 200, marginBottom: '0.5rem' }}>800+</div>
                <div style={{ fontSize: '0.875rem', color: '#666666', textTransform: 'uppercase', letterSpacing: '0.1em' }}>Corporate Clients</div>
              </div>
              <div>
                <div style={{ fontSize: '2rem', fontWeight: 200, marginBottom: '0.5rem' }}>45+</div>
                <div style={{ fontSize: '0.875rem', color: '#666666', textTransform: 'uppercase', letterSpacing: '0.1em' }}>Jurisdictions</div>
              </div>
              <div>
                <div style={{ fontSize: '2rem', fontWeight: 200, marginBottom: '0.5rem' }}>30+</div>
                <div style={{ fontSize: '0.875rem', color: '#666666', textTransform: 'uppercase', letterSpacing: '0.1em' }}>Specialized Lawyers</div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" style={{ padding: '5rem 2rem' }}>
          <div style={containerStyle}>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '4rem' }}>
              <div>
                <h2 style={{ fontSize: '2rem', fontWeight: 200, marginBottom: '2rem', color: '#702963' }}>Let's Discuss Your Legal Needs</h2>
                <p style={{ color: '#666666', fontSize: '1.125rem', marginBottom: '2rem' }}>
                  Connect with our expert legal team to explore how we can protect your interests and help you achieve your goals.
                </p>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', color: '#666666' }}>
                  <p>Main Office</p>
                  <p style={{ color: '#333333', fontSize: '1.25rem' }}>Istanbul, Turkey</p>
                </div>
              </div>
              <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'flex-end' }}>
                <button style={{
                  border: '1px solid #702963',
                  padding: '1.5rem 3rem',
                  backgroundColor: 'transparent',
                  color: '#702963',
                  cursor: 'pointer',
                  transition: 'all 0.3s',
                  fontSize: '1.125rem'
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.backgroundColor = '#702963';
                  e.currentTarget.style.color = 'white';
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.backgroundColor = 'transparent';
                  e.currentTarget.style.color = '#702963';
                }}>
                  Schedule Consultation
                </button>
              </div>
            </div>
          </div>
        </section>

      </div>
    </>
  );
};

export default WhatWeAreDoing;