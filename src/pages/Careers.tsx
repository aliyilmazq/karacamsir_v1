import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Careers = () => {
  const [scrollY, setScrollY] = useState(0);
  const [activePosition, setActivePosition] = useState<number | null>(null);
  const [hoveredBenefit, setHoveredBenefit] = useState<number | null>(null);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const openPositions = [
    {
      id: 1,
      title: "Senior Corporate Lawyer",
      department: "Corporate Law",
      location: "Istanbul",
      type: "Full-time",
      experience: "7+ years",
      description: "We are seeking an experienced corporate lawyer to join our growing team. The ideal candidate will have extensive experience in M&A, corporate governance, and commercial contracts.",
      requirements: [
        "Law degree from a reputable university",
        "Member of Istanbul Bar Association",
        "Fluent in English (additional languages a plus)",
        "Strong analytical and negotiation skills",
        "Experience with international transactions"
      ]
    },
    {
      id: 2,
      title: "Litigation Associate",
      department: "Litigation & Dispute Resolution",
      location: "Istanbul",
      type: "Full-time",
      experience: "3-5 years",
      description: "Join our litigation team to handle complex commercial disputes and arbitration cases. We're looking for a detail-oriented professional with excellent written and oral advocacy skills.",
      requirements: [
        "Law degree with strong academic record",
        "Experience in commercial litigation",
        "Excellent research and writing skills",
        "Ability to manage multiple cases",
        "Court experience preferred"
      ]
    },
    {
      id: 3,
      title: "Legal Intern",
      department: "Various Departments",
      location: "Istanbul",
      type: "Internship",
      experience: "Law students",
      description: "We offer comprehensive internship programs for law students looking to gain practical experience in a dynamic legal environment.",
      requirements: [
        "Currently enrolled in law school",
        "Strong academic performance",
        "Excellent communication skills",
        "Proficiency in English",
        "Eager to learn and contribute"
      ]
    },
    {
      id: 4,
      title: "International Business Law Specialist",
      department: "International Law",
      location: "Istanbul",
      type: "Full-time",
      experience: "5+ years",
      description: "Seeking a specialist in international business law to advise on cross-border transactions, international trade, and regulatory compliance.",
      requirements: [
        "Advanced degree in International Law preferred",
        "Experience with international contracts",
        "Knowledge of EU and US regulations",
        "Multiple language skills required",
        "Travel flexibility"
      ]
    }
  ];

  const benefits = [
    {
      icon: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop",
      title: "Professional Growth",
      description: "Continuous learning opportunities, mentorship programs, and clear career progression paths"
    },
    {
      icon: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=400&fit=crop",
      title: "Health & Wellness",
      description: "Comprehensive health insurance, wellness programs, and mental health support"
    },
    {
      icon: "https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?w=400&h=400&fit=crop",
      title: "Competitive Compensation",
      description: "Market-leading salaries, performance bonuses, and profit sharing"
    },
    {
      icon: "https://images.unsplash.com/photo-1521791136064-7986c2920216?w=400&h=400&fit=crop",
      title: "Work-Life Balance",
      description: "Flexible working arrangements, generous vacation policy, and family support"
    },
    {
      icon: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=400&h=400&fit=crop",
      title: "Education Support",
      description: "Funding for continuing education, bar memberships, and professional development"
    },
    {
      icon: "https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?w=400&h=400&fit=crop",
      title: "International Exposure",
      description: "Opportunities to work on international cases and collaborate with global partners"
    }
  ];

  const values = [
    { title: "Excellence", description: "We strive for excellence in everything we do" },
    { title: "Integrity", description: "We uphold the highest ethical standards" },
    { title: "Teamwork", description: "We believe in the power of collaboration" },
    { title: "Innovation", description: "We embrace new ideas and approaches" }
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
      <section style={{ padding: '8rem 2rem 5rem', backgroundColor: '#f8f9fa' }}>
        <div style={containerStyle}>
          <h1 style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)', fontWeight: 200, lineHeight: 1.1, marginBottom: '2rem', color: '#2e0d50' }}>
            Join Our
            <span style={{ display: 'block', color: '#2e0d50' }}>Team</span>
          </h1>
          <div style={{ width: '6rem', height: '2px', backgroundColor: '#2e0d50', marginBottom: '2rem' }}></div>
          <p style={{ fontSize: '1.25rem', color: '#666666', maxWidth: '42rem', fontWeight: 300, lineHeight: 1.6 }}>
            Build your career with one of Turkey's leading law firms. We're always looking for 
            talented individuals who share our commitment to legal excellence.
          </p>
        </div>
      </section>

      {/* Why Join Us Section */}
      <section id="why-join" style={sectionStyle}>
        <div style={containerStyle}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))', gap: '4rem', alignItems: 'center' }}>
            <div>
              <h2 style={{ fontSize: '2rem', fontWeight: 200, marginBottom: '2rem', color: '#2e0d50' }}>Why KARAÇAM & ŞİR?</h2>
              <p style={{ fontSize: '1.125rem', color: '#666666', lineHeight: 1.8, marginBottom: '2rem' }}>
                At KARAÇAM & ŞİR, we believe our people are our greatest asset. We foster an environment 
                where legal professionals can thrive, grow, and make a meaningful impact on our clients' success.
              </p>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem' }}>
                {values.map((value, index) => (
                  <div key={index} style={{
                    opacity: scrollY > 200 ? 1 : 0,
                    transform: scrollY > 200 ? 'translateY(0)' : 'translateY(20px)',
                    transition: `all 0.8s ease ${index * 0.1}s`
                  }}>
                    <h3 style={{ color: '#2e0d50', marginBottom: '0.5rem' }}>{value.title}</h3>
                    <p style={{ fontSize: '0.875rem', color: '#666666' }}>{value.description}</p>
                  </div>
                ))}
              </div>
            </div>
            <div style={{ 
              padding: '3rem',
              background: '#f8f9fa',
              border: '1px solid #e0e0e0',
              borderRadius: '8px',
              textAlign: 'center',
              boxShadow: '0 2px 8px rgba(0, 0, 0, 0.05)'
            }}>
              <div style={{ fontSize: '2.5rem', fontWeight: 200, color: '#2e0d50', marginBottom: '1rem' }}>25+</div>
              <div style={{ fontSize: '1.25rem', marginBottom: '2rem', color: '#333333' }}>Legal Professionals</div>
              <div style={{ fontSize: '2.5rem', fontWeight: 200, color: '#2e0d50', marginBottom: '1rem' }}>15</div>
              <div style={{ fontSize: '1.25rem', marginBottom: '2rem', color: '#333333' }}>Years of Excellence</div>
              <div style={{ fontSize: '2.5rem', fontWeight: 200, color: '#2e0d50', marginBottom: '1rem' }}>95%</div>
              <div style={{ fontSize: '1.25rem', marginBottom: '2rem', color: '#333333' }}>Employee Satisfaction</div>
              <a 
                href="https://www.linkedin.com/company/karacam-sir-law-firm/" 
                target="_blank" 
                rel="noopener noreferrer"
                style={{ textDecoration: 'none' }}
              >
                <button style={{
                  marginTop: '1rem',
                  padding: '0.75rem 1.5rem',
                  backgroundColor: '#2e0d50',
                  color: 'white',
                  border: 'none',
                  fontSize: '1rem',
                  cursor: 'pointer',
                  transition: 'all 0.3s',
                  borderRadius: '4px'
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.backgroundColor = '#2e0d50';
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.backgroundColor = '#2e0d50';
                }}>
                  Follow us on LinkedIn →
                </button>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section id="benefits" style={sectionStyle}>
        <div style={containerStyle}>
          <div style={{ marginBottom: '4rem', textAlign: 'center' }}>
            <h2 style={{ fontSize: '2rem', fontWeight: 200, marginBottom: '1rem', color: '#2e0d50' }}>Benefits & Perks</h2>
            <p style={{ color: '#666666' }}>We take care of our team so they can take care of our clients</p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '2rem' }}>
            {benefits.map((benefit, index) => (
              <div
                key={index}
                style={{
                  border: '1px solid #e0e0e0',
                  padding: '2rem',
                  transition: 'all 0.3s',
                  cursor: 'pointer',
                  backgroundColor: hoveredBenefit === index ? '#2e0d50' : '#ffffff',
                  transform: hoveredBenefit === index ? 'translateY(-5px)' : 'translateY(0)',
                  boxShadow: hoveredBenefit === index ? '0 8px 20px rgba(46, 13, 80, 0.2)' : '0 2px 8px rgba(0, 0, 0, 0.05)',
                  borderRadius: '8px',
                  color: hoveredBenefit === index ? '#ffffff' : '#333333'
                }}
                onMouseEnter={() => setHoveredBenefit(index)}
                onMouseLeave={() => setHoveredBenefit(null)}
              >
                <img 
                  src={benefit.icon} 
                  alt={benefit.title}
                  style={{ 
                    width: '80px', 
                    height: '80px', 
                    borderRadius: '8px', 
                    objectFit: 'cover',
                    marginBottom: '1rem',
                    opacity: hoveredBenefit === index ? 1 : 0.8,
                    transition: 'opacity 0.3s'
                  }} 
                />
                <h3 style={{ fontSize: '1.25rem', fontWeight: 400, marginBottom: '0.5rem' }}>{benefit.title}</h3>
                <p style={{ color: hoveredBenefit === index ? '#f0f0f0' : '#666666', fontSize: '0.875rem', lineHeight: 1.6 }}>
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Open Positions Section */}
      <section id="positions" style={sectionStyle}>
        <div style={containerStyle}>
          <div style={{ marginBottom: '4rem' }}>
            <h2 style={{ fontSize: '2rem', fontWeight: 200, marginBottom: '1rem', color: '#2e0d50' }}>Open Positions</h2>
            <p style={{ color: '#666666' }}>Explore current opportunities to join our team</p>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            {openPositions.map((position, index) => (
              <div
                key={position.id}
                style={{
                  border: '1px solid #e0e0e0',
                  padding: '2rem',
                  cursor: 'pointer',
                  transition: 'all 0.3s',
                  backgroundColor: activePosition === index ? '#f8f9fa' : '#ffffff',
                  borderRadius: '8px',
                  boxShadow: activePosition === index ? '0 4px 12px rgba(0, 0, 0, 0.08)' : '0 2px 8px rgba(0, 0, 0, 0.05)'
                }}
                onClick={() => setActivePosition(activePosition === index ? null : index)}
              >
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '1rem' }}>
                  <div>
                    <h3 style={{ fontSize: '1.5rem', fontWeight: 400, marginBottom: '0.5rem', color: '#2e0d50' }}>{position.title}</h3>
                    <div style={{ display: 'flex', gap: '2rem', flexWrap: 'wrap', fontSize: '0.875rem', color: '#666666' }}>
                      <span>📍 {position.location}</span>
                      <span>🏢 {position.department}</span>
                      <span>⏰ {position.type}</span>
                      <span>📊 {position.experience}</span>
                    </div>
                  </div>
                  <div style={{ fontSize: '1.5rem', color: '#2e0d50' }}>
                    {activePosition === index ? '−' : '+'}
                  </div>
                </div>

                {activePosition === index && (
                  <div style={{ marginTop: '2rem', paddingTop: '2rem', borderTop: '1px solid #e0e0e0' }}>
                    <p style={{ marginBottom: '1.5rem', lineHeight: 1.6, color: '#333333' }}>{position.description}</p>
                    <h4 style={{ marginBottom: '1rem', color: '#2e0d50' }}>Requirements:</h4>
                    <ul style={{ listStyle: 'none', padding: 0 }}>
                      {position.requirements.map((req, idx) => (
                        <li key={idx} style={{ 
                          marginBottom: '0.5rem',
                          paddingLeft: '1.5rem',
                          position: 'relative',
                          fontSize: '0.875rem',
                          color: '#666666'
                        }}>
                          <span style={{ position: 'absolute', left: 0, color: '#2e0d50' }}>•</span>
                          {req}
                        </li>
                      ))}
                    </ul>
                    <a 
                      href="https://www.linkedin.com/company/karacam-sir-law-firm/jobs/" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      style={{ textDecoration: 'none' }}
                    >
                      <button style={{
                        marginTop: '2rem',
                        padding: '1rem 2rem',
                        backgroundColor: '#2e0d50',
                        color: 'white',
                        border: 'none',
                        fontSize: '1rem',
                        fontWeight: 600,
                        cursor: 'pointer',
                        transition: 'all 0.3s',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '0.5rem',
                        borderRadius: '4px'
                      }}
                      onMouseEnter={e => {
                        e.currentTarget.style.backgroundColor = '#2e0d50';
                        e.currentTarget.style.transform = 'translateY(-2px)';
                        e.currentTarget.style.boxShadow = '0 5px 15px rgba(46, 13, 80, 0.3)';
                      }}
                      onMouseLeave={e => {
                        e.currentTarget.style.backgroundColor = '#2e0d50';
                        e.currentTarget.style.transform = 'translateY(0)';
                        e.currentTarget.style.boxShadow = 'none';
                      }}>
                        Apply on LinkedIn →
                      </button>
                    </a>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Application Process Section */}
      <section style={{ ...sectionStyle, borderBottom: '1px solid #e0e0e0' }}>
        <div style={containerStyle}>
          <div style={{ marginBottom: '4rem', textAlign: 'center' }}>
            <h2 style={{ fontSize: '2rem', fontWeight: 200, marginBottom: '1rem', color: '#2e0d50' }}>Application Process</h2>
            <p style={{ color: '#666666' }}>Simple, transparent, and efficient</p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '2rem' }}>
            {[
              { step: "1", title: "Apply via LinkedIn", desc: "Submit through our LinkedIn page" },
              { step: "2", title: "Initial Review", desc: "We review your qualifications" },
              { step: "3", title: "Interview", desc: "Meet with our team" },
              { step: "4", title: "Decision", desc: "Receive our response" }
            ].map((item, index) => (
              <div key={index} style={{ 
                textAlign: 'center',
                opacity: scrollY > 1000 ? 1 : 0,
                transform: scrollY > 1000 ? 'scale(1)' : 'scale(0.8)',
                transition: `all 0.8s ease ${index * 0.1}s`
              }}>
                <div style={{ 
                  width: '80px', 
                  height: '80px', 
                  borderRadius: '50%', 
                  backgroundColor: '#2e0d50',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  margin: '0 auto 1rem',
                  fontSize: '2rem',
                  fontWeight: 200,
                  color: '#ffffff'
                }}>
                  {item.step}
                </div>
                <h3 style={{ fontSize: '1.25rem', fontWeight: 400, marginBottom: '0.5rem', color: '#333333' }}>{item.title}</h3>
                <p style={{ fontSize: '0.875rem', color: '#666666' }}>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section style={{ padding: '5rem 2rem', backgroundColor: '#f8f9fa' }}>
        <div style={{ ...containerStyle, textAlign: 'center' }}>
          <h2 style={{ fontSize: '2rem', fontWeight: 200, marginBottom: '2rem', color: '#2e0d50' }}>
            Ready to Make an Impact?
          </h2>
          <p style={{ color: '#666666', fontSize: '1.125rem', marginBottom: '3rem', maxWidth: '600px', margin: '0 auto 3rem' }}>
            Join our team and be part of shaping the future of legal services in Turkey.
          </p>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <a 
              href="https://www.linkedin.com/company/karacam-sir-law-firm/jobs/" 
              target="_blank" 
              rel="noopener noreferrer"
              style={{ textDecoration: 'none' }}
            >
              <button style={{
                padding: '1.5rem 3rem',
                backgroundColor: '#2e0d50',
                color: 'white',
                border: 'none',
                fontSize: '1.125rem',
                cursor: 'pointer',
                transition: 'all 0.3s',
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem',
                borderRadius: '4px'
              }}
              onMouseEnter={e => {
                e.currentTarget.style.backgroundColor = '#2e0d50';
                e.currentTarget.style.transform = 'translateY(-2px)';
              }}
              onMouseLeave={e => {
                e.currentTarget.style.backgroundColor = '#2e0d50';
                e.currentTarget.style.transform = 'translateY(0)';
              }}>
                <span style={{ fontSize: '1.25rem' }}>in</span> View LinkedIn Jobs
              </button>
            </a>
            <a 
              href="mailto:hr@karacam-sir.com?subject=Job Application" 
              style={{ textDecoration: 'none' }}
            >
              <button style={{
                padding: '1.5rem 3rem',
                backgroundColor: 'transparent',
                color: '#2e0d50',
                border: '2px solid #2e0d50',
                fontSize: '1.125rem',
                cursor: 'pointer',
                transition: 'all 0.3s',
                borderRadius: '4px'
              }}
              onMouseEnter={e => {
                e.currentTarget.style.backgroundColor = '#2e0d50';
                e.currentTarget.style.color = 'white';
              }}
              onMouseLeave={e => {
                e.currentTarget.style.backgroundColor = 'transparent';
                e.currentTarget.style.color = '#2e0d50';
              }}>
                Email HR Department
              </button>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Careers;