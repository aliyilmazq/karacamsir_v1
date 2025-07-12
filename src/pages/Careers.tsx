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
      icon: "💼",
      title: "Professional Growth",
      description: "Continuous learning opportunities, mentorship programs, and clear career progression paths"
    },
    {
      icon: "🏥",
      title: "Health & Wellness",
      description: "Comprehensive health insurance, wellness programs, and mental health support"
    },
    {
      icon: "💰",
      title: "Competitive Compensation",
      description: "Market-leading salaries, performance bonuses, and profit sharing"
    },
    {
      icon: "⚖️",
      title: "Work-Life Balance",
      description: "Flexible working arrangements, generous vacation policy, and family support"
    },
    {
      icon: "🎓",
      title: "Education Support",
      description: "Funding for continuing education, bar memberships, and professional development"
    },
    {
      icon: "🌍",
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
    borderTop: '1px solid rgba(0,0,0,0.3)'
  };

  const containerStyle = {
    maxWidth: '80rem',
    margin: '0 auto'
  };

  return (
    <div style={{ backgroundColor: '#522d72', color: 'white' }}>
      {/* Hero Section */}
      <section style={{ padding: '8rem 2rem 5rem', backgroundColor: '#522d72' }}>
        <div style={containerStyle}>
          <h1 style={{ fontSize: 'clamp(3rem, 8vw, 6rem)', fontWeight: 200, lineHeight: 1.1, marginBottom: '2rem' }}>
            Join Our
            <span style={{ display: 'block', color: '#a78bfa' }}>Team</span>
          </h1>
          <div style={{ width: '6rem', height: '1px', backgroundColor: '#8b5cf6', marginBottom: '2rem' }}></div>
          <p style={{ fontSize: '1.25rem', color: '#d8b4fe', maxWidth: '42rem', fontWeight: 300, lineHeight: 1.6 }}>
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
              <h2 style={{ fontSize: '3rem', fontWeight: 200, marginBottom: '2rem' }}>Why KARAÇAM & ŞİR?</h2>
              <p style={{ fontSize: '1.125rem', color: '#d8b4fe', lineHeight: 1.8, marginBottom: '2rem' }}>
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
                    <h3 style={{ color: '#a78bfa', marginBottom: '0.5rem' }}>{value.title}</h3>
                    <p style={{ fontSize: '0.875rem', color: '#d8b4fe' }}>{value.description}</p>
                  </div>
                ))}
              </div>
            </div>
            <div style={{ 
              padding: '3rem',
              background: 'linear-gradient(135deg, rgba(0, 0, 0, 0.1) 0%, rgba(0, 0, 0, 0.15) 100%)',
              border: '1px solid rgba(0,0,0,0.3)',
              borderRadius: '8px',
              textAlign: 'center'
            }}>
              <div style={{ fontSize: '4rem', fontWeight: 200, color: '#8b5cf6', marginBottom: '1rem' }}>25+</div>
              <div style={{ fontSize: '1.25rem', marginBottom: '2rem' }}>Legal Professionals</div>
              <div style={{ fontSize: '4rem', fontWeight: 200, color: '#8b5cf6', marginBottom: '1rem' }}>15</div>
              <div style={{ fontSize: '1.25rem', marginBottom: '2rem' }}>Years of Excellence</div>
              <div style={{ fontSize: '4rem', fontWeight: 200, color: '#8b5cf6', marginBottom: '1rem' }}>95%</div>
              <div style={{ fontSize: '1.25rem', marginBottom: '2rem' }}>Employee Satisfaction</div>
              <a 
                href="https://www.linkedin.com/company/karacam-sir-law-firm/" 
                target="_blank" 
                rel="noopener noreferrer"
                style={{ textDecoration: 'none' }}
              >
                <button style={{
                  marginTop: '1rem',
                  padding: '0.75rem 1.5rem',
                  backgroundColor: '#8b5cf6',
                  color: 'white',
                  border: 'none',
                  fontSize: '1rem',
                  cursor: 'pointer',
                  transition: 'all 0.3s',
                  borderRadius: '4px'
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.backgroundColor = 'rgba(0,0,0,0.5)';
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.backgroundColor = '#8b5cf6';
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
            <h2 style={{ fontSize: '3rem', fontWeight: 200, marginBottom: '1rem' }}>Benefits & Perks</h2>
            <p style={{ color: '#d8b4fe' }}>We take care of our team so they can take care of our clients</p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '2rem' }}>
            {benefits.map((benefit, index) => (
              <div
                key={index}
                style={{
                  border: '1px solid rgba(0,0,0,0.3)',
                  padding: '2rem',
                  transition: 'all 0.3s',
                  cursor: 'pointer',
                  backgroundColor: hoveredBenefit === index ? '#8b5cf6' : 'transparent',
                  transform: hoveredBenefit === index ? 'translateY(-5px)' : 'translateY(0)'
                }}
                onMouseEnter={() => setHoveredBenefit(index)}
                onMouseLeave={() => setHoveredBenefit(null)}
              >
                <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>{benefit.icon}</div>
                <h3 style={{ fontSize: '1.25rem', fontWeight: 400, marginBottom: '0.5rem' }}>{benefit.title}</h3>
                <p style={{ color: hoveredBenefit === index ? '#f3e8ff' : '#d8b4fe', fontSize: '0.875rem', lineHeight: 1.6 }}>
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
            <h2 style={{ fontSize: '3rem', fontWeight: 200, marginBottom: '1rem' }}>Open Positions</h2>
            <p style={{ color: '#d8b4fe' }}>Explore current opportunities to join our team</p>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            {openPositions.map((position, index) => (
              <div
                key={position.id}
                style={{
                  border: '1px solid rgba(0,0,0,0.3)',
                  padding: '2rem',
                  cursor: 'pointer',
                  transition: 'all 0.3s',
                  backgroundColor: activePosition === index ? '#8b5cf6' : 'transparent'
                }}
                onClick={() => setActivePosition(activePosition === index ? null : index)}
              >
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '1rem' }}>
                  <div>
                    <h3 style={{ fontSize: '1.5rem', fontWeight: 400, marginBottom: '0.5rem' }}>{position.title}</h3>
                    <div style={{ display: 'flex', gap: '2rem', flexWrap: 'wrap', fontSize: '0.875rem', color: '#d8b4fe' }}>
                      <span>📍 {position.location}</span>
                      <span>🏢 {position.department}</span>
                      <span>⏰ {position.type}</span>
                      <span>📊 {position.experience}</span>
                    </div>
                  </div>
                  <div style={{ fontSize: '1.5rem', color: '#a78bfa' }}>
                    {activePosition === index ? '−' : '+'}
                  </div>
                </div>

                {activePosition === index && (
                  <div style={{ marginTop: '2rem', paddingTop: '2rem', borderTop: '1px solid #a78bfa' }}>
                    <p style={{ marginBottom: '1.5rem', lineHeight: 1.6 }}>{position.description}</p>
                    <h4 style={{ marginBottom: '1rem' }}>Requirements:</h4>
                    <ul style={{ listStyle: 'none', padding: 0 }}>
                      {position.requirements.map((req, idx) => (
                        <li key={idx} style={{ 
                          marginBottom: '0.5rem',
                          paddingLeft: '1.5rem',
                          position: 'relative',
                          fontSize: '0.875rem'
                        }}>
                          <span style={{ position: 'absolute', left: 0 }}>•</span>
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
                        backgroundColor: 'white',
                        color: 'rgba(0,0,0,0.8)',
                        border: 'none',
                        fontSize: '1rem',
                        fontWeight: 600,
                        cursor: 'pointer',
                        transition: 'all 0.3s',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '0.5rem'
                      }}
                      onMouseEnter={e => {
                        e.currentTarget.style.transform = 'translateY(-2px)';
                        e.currentTarget.style.boxShadow = '0 5px 15px rgba(0,0,0,0.2)';
                      }}
                      onMouseLeave={e => {
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
      <section style={{ ...sectionStyle, borderBottom: '1px solid rgba(0,0,0,0.3)' }}>
        <div style={containerStyle}>
          <div style={{ marginBottom: '4rem', textAlign: 'center' }}>
            <h2 style={{ fontSize: '3rem', fontWeight: 200, marginBottom: '1rem' }}>Application Process</h2>
            <p style={{ color: '#d8b4fe' }}>Simple, transparent, and efficient</p>
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
                  backgroundColor: '#8b5cf6',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  margin: '0 auto 1rem',
                  fontSize: '2rem',
                  fontWeight: 200
                }}>
                  {item.step}
                </div>
                <h3 style={{ fontSize: '1.25rem', fontWeight: 400, marginBottom: '0.5rem' }}>{item.title}</h3>
                <p style={{ fontSize: '0.875rem', color: '#d8b4fe' }}>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section style={{ padding: '5rem 2rem' }}>
        <div style={{ ...containerStyle, textAlign: 'center' }}>
          <h2 style={{ fontSize: '3rem', fontWeight: 200, marginBottom: '2rem' }}>
            Ready to Make an Impact?
          </h2>
          <p style={{ color: '#d8b4fe', fontSize: '1.125rem', marginBottom: '3rem', maxWidth: '600px', margin: '0 auto 3rem' }}>
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
                backgroundColor: '#8b5cf6',
                color: 'white',
                border: 'none',
                fontSize: '1.125rem',
                cursor: 'pointer',
                transition: 'all 0.3s',
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem'
              }}
              onMouseEnter={e => {
                e.currentTarget.style.backgroundColor = 'rgba(0,0,0,0.5)';
                e.currentTarget.style.transform = 'translateY(-2px)';
              }}
              onMouseLeave={e => {
                e.currentTarget.style.backgroundColor = '#8b5cf6';
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
                color: 'white',
                border: '2px solid #8b5cf6',
                fontSize: '1.125rem',
                cursor: 'pointer',
                transition: 'all 0.3s'
              }}
              onMouseEnter={e => {
                e.currentTarget.style.backgroundColor = '#8b5cf6';
              }}
              onMouseLeave={e => {
                e.currentTarget.style.backgroundColor = 'transparent';
              }}>
                📧 Send CV via Email
              </button>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Careers;