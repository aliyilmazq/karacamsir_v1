import React, { useState, useEffect } from 'react';

const HowWeAreDoing = () => {
  const [scrollY, setScrollY] = useState(0);
  const [activeStep, setActiveStep] = useState<number | null>(null);
  const [hoveredApproach, setHoveredApproach] = useState<number | null>(null);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const approaches = [
    {
      title: "Sector Expertise",
      description: "Deep understanding of corporate structures, infrastructure development, and technology ecosystems enables us to anticipate challenges and create value.",
      icon: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=400&h=400&fit=crop",
      details: ["Industry-specific knowledge", "Regulatory expertise", "Market intelligence", "Cross-sector synergies"]
    },
    {
      title: "Commercial Focus",
      description: "Every legal solution is designed with commercial outcomes in mind, ensuring our advice drives business success, not just compliance.",
      icon: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=400&fit=crop",
      details: ["ROI-driven strategies", "Risk-adjusted solutions", "Deal optimization", "Value creation"]
    },
    {
      title: "Global Standards",
      description: "We apply international best practices while navigating local complexities, delivering seamless cross-border legal solutions.",
      icon: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=400&fit=crop",
      details: ["Multi-jurisdictional expertise", "International frameworks", "Local law integration", "Global coordination"]
    },
    {
      title: "Innovation",
      description: "Leveraging legal technology and innovative structuring to deliver faster, more efficient, and cost-effective solutions.",
      icon: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=400&h=400&fit=crop",
      details: ["Legal tech integration", "Process automation", "Data analytics", "Agile methodology"]
    }
  ];

  const process = [
    {
      step: "01",
      title: "Strategic Assessment",
      description: "Comprehensive analysis of transaction structure, regulatory landscape, and commercial objectives to identify optimal legal pathways.",
      duration: "24-48 hours",
      deliverables: ["Transaction roadmap", "Regulatory matrix", "Risk heat map", "Budget framework"]
    },
    {
      step: "02",
      title: "Due Diligence & Structuring",
      description: "Deep-dive analysis across legal, financial, and operational dimensions, designing structures that maximize value and minimize risk.",
      duration: "5-15 days",
      deliverables: ["DD report", "Structure options", "Tax optimization", "Compliance checklist"]
    },
    {
      step: "03",
      title: "Documentation & Negotiation",
      description: "Drafting sophisticated agreements with built-in protections, leading negotiations to secure favorable terms while maintaining deal momentum.",
      duration: "10-20 days",
      deliverables: ["Contract suite", "Negotiation strategy", "Term sheets", "Closing checklist"]
    },
    {
      step: "04",
      title: "Execution & Closing",
      description: "Coordinating multi-party closings, managing conditions precedent, and ensuring seamless transaction completion across jurisdictions.",
      duration: "Variable",
      deliverables: ["Closing coordination", "CP satisfaction", "Funds flow", "Post-closing items"]
    },
    {
      step: "05",
      title: "Post-Transaction Support",
      description: "Ongoing advisory for integration, compliance monitoring, and strategic adjustments to maximize long-term value realization.",
      duration: "Ongoing",
      deliverables: ["Integration support", "Compliance monitoring", "Dispute prevention", "Strategic advisory"]
    }
  ];

  const metrics = [
    { label: "Deal Value", value: "€7.5B+", description: "Total transaction value advised" },
    { label: "Completion Rate", value: "97%", description: "Deals successfully closed" },
    { label: "Time to Close", value: "-25%", description: "Faster than market average" },
    { label: "Cost Efficiency", value: "30%", description: "Average client cost savings" }
  ];

  const caseStudies = [
    {
      title: "Cross-Border M&A",
      category: "Corporate & Commercial",
      value: "€850M",
      description: "Advised on the acquisition of a European technology company by a US private equity fund, navigating complex regulatory approvals across 5 jurisdictions.",
      outcome: "Closed 40% faster than initial timeline"
    },
    {
      title: "Infrastructure PPP",
      category: "EPC+F",
      value: "$1.2B",
      description: "Structured and negotiated a public-private partnership for a major transportation infrastructure project, including project finance and EPC contracts.",
      outcome: "Achieved financial close in record time"
    },
    {
      title: "Series C Funding",
      category: "Technology & Ventures",
      value: "€120M",
      description: "Led legal advisory for a fintech unicorn's Series C round, including complex ESOP restructuring and regulatory compliance across multiple markets.",
      outcome: "Optimized tax structure saving 15%"
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
    <div style={{ backgroundColor: '#ffffff', color: '#333333' }}>
      {/* Hero Section */}
      <section style={{ padding: '8rem 2rem 5rem', backgroundColor: '#ffffff' }}>
        <div style={containerStyle}>
          <h1 style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)', fontWeight: 200, lineHeight: 1.1, marginBottom: '2rem', color: '#5D3FD3' }}>
            How We Are
            <span style={{ display: 'block', color: '#666666' }}>Doing</span>
          </h1>
          <div style={{ width: '6rem', height: '1px', backgroundColor: '#5D3FD3', marginBottom: '2rem' }}></div>
          <p style={{ fontSize: '1.25rem', color: '#666666', maxWidth: '42rem', fontWeight: 300, lineHeight: 1.6 }}>
            Our integrated approach combines deep sector expertise with innovative legal 
            solutions, delivering measurable value in complex corporate transactions, 
            infrastructure projects, and technology ventures.
          </p>
        </div>
      </section>

      {/* Our Approach Section */}
      <section id="approach" style={sectionStyle}>
        <div style={containerStyle}>
          <div style={{ marginBottom: '4rem' }}>
            <h2 style={{ fontSize: '2rem', fontWeight: 200, marginBottom: '1rem', color: '#5D3FD3' }}>Our Methodology</h2>
            <p style={{ color: '#666666' }}>Four pillars that drive exceptional legal outcomes</p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2rem' }}>
            {approaches.map((approach, index) => (
              <div
                key={index}
                style={{
                  border: '1px solid #e0e0e0',
                  padding: '2rem',
                  transition: 'all 0.3s',
                  cursor: 'pointer',
                  backgroundColor: hoveredApproach === index ? '#5D3FD3' : 'transparent',
                  transform: hoveredApproach === index ? 'translateY(-5px)' : 'translateY(0)'
                }}
                onMouseEnter={() => setHoveredApproach(index)}
                onMouseLeave={() => setHoveredApproach(null)}
                onClick={() => setActiveStep(activeStep === index ? null : index)}
              >
                <img 
                  src={approach.icon} 
                  alt={approach.title}
                  style={{ 
                    width: '100px', 
                    height: '100px', 
                    borderRadius: '12px', 
                    objectFit: 'cover',
                    marginBottom: '1rem',
                    opacity: hoveredApproach === index ? 1 : 0.8,
                    transition: 'opacity 0.3s'
                  }} 
                />
                <h3 style={{ fontSize: '1.5rem', fontWeight: 400, marginBottom: '1rem' }}>{approach.title}</h3>
                <p style={{ color: hoveredApproach === index ? '#ffffff' : '#666666', lineHeight: 1.6, marginBottom: '1rem' }}>
                  {approach.description}
                </p>
                {activeStep === index && (
                  <ul style={{ listStyle: 'none', padding: 0, marginTop: '1rem' }}>
                    {approach.details.map((detail, idx) => (
                      <li key={idx} style={{ 
                        fontSize: '0.875rem', 
                        marginBottom: '0.5rem',
                        paddingLeft: '1rem',
                        position: 'relative'
                      }}>
                        <span style={{ position: 'absolute', left: 0 }}>•</span>
                        {detail}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section id="process" style={sectionStyle}>
        <div style={containerStyle}>
          <div style={{ marginBottom: '4rem' }}>
            <h2 style={{ fontSize: '2rem', fontWeight: 200, marginBottom: '1rem', color: '#5D3FD3' }}>Transaction Lifecycle</h2>
            <p style={{ color: '#666666' }}>From strategic planning to value realization</p>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
            {process.map((step, index) => (
              <div
                key={index}
                style={{
                  display: 'grid',
                  gridTemplateColumns: 'auto 1fr',
                  gap: '3rem',
                  padding: '2rem',
                  border: '1px solid #e0e0e0',
                  backgroundColor: activeStep === index ? '#5D3FD3' : 'transparent',
                  cursor: 'pointer',
                  transition: 'all 0.3s',
                  opacity: scrollY > 200 + (index * 100) ? 1 : 0,
                  transform: scrollY > 200 + (index * 100) ? 'translateX(0)' : 'translateX(-20px)'
                }}
                onClick={() => setActiveStep(activeStep === index ? null : index)}
              >
                <div style={{ 
                  fontSize: '2.5rem', 
                  fontWeight: 100, 
                  color: activeStep === index ? '#ffffff' : '#5D3FD3' 
                }}>
                  {step.step}
                </div>
                <div>
                  <h3 style={{ fontSize: '1.5rem', fontWeight: 400, marginBottom: '0.5rem' }}>
                    {step.title}
                  </h3>
                  <p style={{ 
                    color: activeStep === index ? '#ffffff' : '#666666', 
                    marginBottom: '1rem',
                    lineHeight: 1.6 
                  }}>
                    {step.description}
                  </p>
                  <div style={{ fontSize: '0.875rem', color: '#666666', marginBottom: '1rem' }}>
                    Duration: {step.duration}
                  </div>
                  {activeStep === index && (
                    <div>
                      <h4 style={{ fontSize: '1rem', marginBottom: '0.5rem' }}>Deliverables:</h4>
                      <ul style={{ listStyle: 'none', padding: 0 }}>
                        {step.deliverables.map((deliverable, idx) => (
                          <li key={idx} style={{ 
                            fontSize: '0.875rem', 
                            marginBottom: '0.25rem',
                            paddingLeft: '1rem',
                            position: 'relative'
                          }}>
                            <span style={{ position: 'absolute', left: 0 }}>✓</span>
                            {deliverable}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Metrics Section */}
      <section style={{ ...sectionStyle, borderBottom: '1px solid #e0e0e0' }}>
        <div style={containerStyle}>
          <div style={{ marginBottom: '4rem', textAlign: 'center' }}>
            <h2 style={{ fontSize: '2rem', fontWeight: 200, marginBottom: '1rem', color: '#5D3FD3' }}>Performance Metrics</h2>
            <p style={{ color: '#666666' }}>Delivering measurable value across every engagement</p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '3rem' }}>
            {metrics.map((metric, index) => (
              <div
                key={index}
                style={{
                  textAlign: 'center',
                  padding: '2rem',
                  border: '1px solid #e0e0e0',
                  borderRadius: '8px',
                  transition: 'all 0.3s',
                  transform: scrollY > 800 ? 'scale(1)' : 'scale(0.9)',
                  opacity: scrollY > 800 ? 1 : 0
                }}
              >
                <div style={{ 
                  fontSize: '2.5rem', 
                  fontWeight: 200, 
                  color: '#5D3FD3',
                  marginBottom: '0.5rem' 
                }}>
                  {metric.value}
                </div>
                <h3 style={{ fontSize: '1.25rem', fontWeight: 400, marginBottom: '0.5rem' }}>
                  {metric.label}
                </h3>
                <p style={{ fontSize: '0.875rem', color: '#666666' }}>
                  {metric.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies Section */}
      <section id="case-studies" style={sectionStyle}>
        <div style={containerStyle}>
          <div style={{ marginBottom: '4rem', textAlign: 'center' }}>
            <h2 style={{ fontSize: '2rem', fontWeight: 200, marginBottom: '1rem', color: '#5D3FD3' }}>Recent Successes</h2>
            <p style={{ color: '#666666' }}>Representative matters across our practice areas</p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '2rem' }}>
            {caseStudies.map((study, index) => (
              <div
                key={index}
                style={{
                  border: '1px solid #e0e0e0',
                  padding: '2rem',
                  borderRadius: '8px',
                  background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.9) 0%, rgba(255, 255, 255, 0.95) 100%)',
                  boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)',
                  transition: 'all 0.3s',
                  cursor: 'pointer',
                  transform: hoveredApproach === index + 10 ? 'translateY(-5px)' : 'translateY(0)'
                }}
                onMouseEnter={() => setHoveredApproach(index + 10)}
                onMouseLeave={() => setHoveredApproach(null)}
              >
                <div style={{ 
                  fontSize: '0.875rem', 
                  color: '#666666', 
                  marginBottom: '1rem',
                  textTransform: 'uppercase',
                  letterSpacing: '0.1em'
                }}>
                  {study.category}
                </div>
                <h3 style={{ fontSize: '1.75rem', fontWeight: 400, marginBottom: '0.5rem' }}>
                  {study.title}
                </h3>
                <div style={{ 
                  fontSize: '2.5rem', 
                  fontWeight: 200, 
                  color: '#5D3FD3',
                  marginBottom: '1rem' 
                }}>
                  {study.value}
                </div>
                <p style={{ 
                  color: '#666666', 
                  lineHeight: 1.6, 
                  marginBottom: '1.5rem',
                  fontSize: '0.875rem'
                }}>
                  {study.description}
                </p>
                <div style={{
                  borderTop: '1px solid #e0e0e0',
                  paddingTop: '1rem',
                  fontSize: '0.875rem',
                  color: '#333333',
                  fontWeight: 600
                }}>
                  ✓ {study.outcome}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section style={{ padding: '5rem 2rem' }}>
        <div style={{ ...containerStyle, textAlign: 'center' }}>
          <h2 style={{ fontSize: '2rem', fontWeight: 200, marginBottom: '2rem', color: '#5D3FD3' }}>
            Ready to Transform Your Legal Strategy?
          </h2>
          <p style={{ color: '#666666', fontSize: '1.125rem', marginBottom: '3rem', maxWidth: '600px', margin: '0 auto 3rem' }}>
            Discover how our integrated approach delivers superior outcomes for complex 
            transactions and strategic initiatives.
          </p>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <button style={{
              border: '1px solid #8b5cf6',
              padding: '1.5rem 3rem',
              backgroundColor: '#8b5cf6',
              color: 'white',
              cursor: 'pointer',
              transition: 'all 0.3s',
              fontSize: '1.125rem'
            }}
            onMouseEnter={e => {
              e.currentTarget.style.backgroundColor = 'rgba(0,0,0,0.5)';
              e.currentTarget.style.borderColor = 'rgba(0,0,0,0.5)';
            }}
            onMouseLeave={e => {
              e.currentTarget.style.backgroundColor = '#8b5cf6';
              e.currentTarget.style.borderColor = '#8b5cf6';
            }}>
              Schedule Consultation
            </button>
            <button style={{
              border: '1px solid #8b5cf6',
              padding: '1.5rem 3rem',
              backgroundColor: 'transparent',
              color: 'white',
              cursor: 'pointer',
              transition: 'all 0.3s',
              fontSize: '1.125rem'
            }}
            onMouseEnter={e => {
              e.currentTarget.style.backgroundColor = '#8b5cf6';
            }}
            onMouseLeave={e => {
              e.currentTarget.style.backgroundColor = 'transparent';
            }}>
              View Case Studies
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HowWeAreDoing;