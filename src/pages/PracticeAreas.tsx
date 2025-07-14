import React, { useState } from 'react';
import PageHeaderSection from "../components/PageHeaderSection/PageHeaderSection";
import istanbulImage from "../assets/istanbul_1.jpg";

const PracticeAreas: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

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
        }
      ]
    },
    {
      number: "02",
      title: "Dispute Resolution",
      description: "Comprehensive dispute resolution services including litigation, arbitration and alternative dispute resolution.",
      subcategories: [
        {
          name: "Commercial Disputes",
          items: [
            "Commercial collection lawsuits and enforcement",
            "Security disputes, check and promissory note cases",
            "Contract breach and damage claims",
            "Arbitration and alternative dispute resolution"
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
        },
        {
          name: "Technology & IP Disputes",
          items: [
            "Software violations, licensing disputes",
            "Startup partnership crises",
            "Post-investment obligation breaches",
            "IP infringement lawsuits and injunctions"
          ]
        }
      ]
    },
    {
      number: "03",
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
        }
      ]
    },
    {
      number: "04",
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
        }
      ]
    }
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
      {/* Services Section */}
      <section id="services" style={sectionStyle}>
        <div style={containerStyle}>
          <div style={{ marginBottom: '4rem' }}>
            <h2 style={{ fontSize: '2rem', fontWeight: 200, marginBottom: '1rem', color: '#5D3FD3' }}>Our Practice Areas</h2>
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
                    backgroundColor: hoveredCard === index ? '#5D3FD3' : '#ffffff'
                  }}
                  onClick={() => setActiveIndex(activeIndex === index ? null : index)}
                >
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                    <div style={{ flex: 1 }}>
                      <div style={{ display: 'flex', alignItems: 'baseline', gap: '1rem', marginBottom: '0.5rem' }}>
                        <span style={{ fontSize: '2rem', color: hoveredCard === index ? '#ffffff' : '#5D3FD3', fontWeight: 300 }}>
                          {service.number}
                        </span>
                        <h3 style={{ fontSize: '1.5rem', fontWeight: 300 }}>
                          {service.title}
                          {service.subtitle && <span style={{ display: 'block', fontSize: '0.875rem', marginTop: '0.25rem' }}>{service.subtitle}</span>}
                        </h3>
                      </div>
                      <p style={{ color: hoveredCard === index ? '#ffffff' : '#666666', margin: 0 }}>
                        {service.description}
                      </p>
                    </div>
                    <div style={{
                      fontSize: '1.5rem',
                      transform: activeIndex === index ? 'rotate(180deg)' : 'rotate(0deg)',
                      transition: 'transform 0.3s'
                    }}>
                      ▼
                    </div>
                  </div>
                </div>

                {activeIndex === index && (
                  <div style={{
                    backgroundColor: 'rgba(240,240,240,0.8)',
                    padding: '3rem 2rem',
                    borderTop: '1px solid #e0e0e0'
                  }}>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '3rem' }}>
                      {service.subcategories.map((sub, subIndex) => (
                        <div key={subIndex}>
                          <h4 style={{ fontSize: '1.25rem', marginBottom: '1rem', color: '#5D3FD3' }}>
                            {sub.name}
                          </h4>
                          <ul style={{ listStyle: 'none', padding: 0 }}>
                            {sub.items.map((item, itemIndex) => (
                              <li key={itemIndex} style={{ 
                                marginBottom: '0.75rem', 
                                paddingLeft: '1.5rem',
                                position: 'relative',
                                color: '#333333'
                              }}>
                                <span style={{ 
                                  position: 'absolute', 
                                  left: 0, 
                                  color: '#5D3FD3'
                                }}>•</span>
                                {item}
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default PracticeAreas;