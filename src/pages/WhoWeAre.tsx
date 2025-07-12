import React, { useState, useEffect } from 'react';

const WhoWeAre = () => {
  const [scrollY, setScrollY] = useState(0);
  const [activeValue, setActiveValue] = useState<number | null>(null);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const teamMembers = [
    {
      name: "Ali Karaçam",
      role: "Managing Partner",
      expertise: "Corporate Law, M&A",
      experience: "20+ years",
      image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&h=400&fit=crop"
    },
    {
      name: "Ayşe Şir",
      role: "Senior Partner",
      expertise: "Litigation, Arbitration",
      experience: "18+ years",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=400&fit=crop"
    },
    {
      name: "Mehmet Yılmaz",
      role: "Partner",
      expertise: "Criminal Law, White Collar",
      experience: "15+ years",
      image: "https://images.unsplash.com/photo-1556157382-97eda2d62296?w=400&h=400&fit=crop"
    },
    {
      name: "Zeynep Demir",
      role: "Partner",
      expertise: "International Business Law",
      experience: "12+ years",
      image: "https://images.unsplash.com/photo-1551836022-deb4988cc6c0?w=400&h=400&fit=crop"
    }
  ];

  const values = [
    {
      title: "Integrity",
      description: "We uphold the highest ethical standards in all our professional dealings",
      icon: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=400&h=400&fit=crop"
    },
    {
      title: "Excellence",
      description: "We strive for excellence in every case and transaction we handle",
      icon: "https://images.unsplash.com/photo-1569163139394-de4798aa62ea?w=400&h=400&fit=crop"
    },
    {
      title: "Confidentiality",
      description: "We maintain absolute confidentiality in all client matters",
      icon: "https://images.unsplash.com/photo-1633265486064-086b219458ec?w=400&h=400&fit=crop"
    },
    {
      title: "Innovation",
      description: "We embrace innovative solutions to complex legal challenges",
      icon: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=400&h=400&fit=crop"
    }
  ];

  const milestones = [
    { year: "2010", event: "Firm Founded", description: "Established with a vision to provide exceptional legal services" },
    { year: "2015", event: "International Expansion", description: "Opened our first international desk for cross-border transactions" },
    { year: "2018", event: "Award Recognition", description: "Named 'Law Firm of the Year' by Turkish Legal Awards" },
    { year: "2023", event: "25+ Team Members", description: "Grown to a full-service firm with specialized practice groups" }
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
          <h1 style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)', fontWeight: 200, lineHeight: 1.1, marginBottom: '2rem' }}>
            Who We
            <span style={{ display: 'block', color: '#a78bfa' }}>Are</span>
          </h1>
          <div style={{ width: '6rem', height: '1px', backgroundColor: '#8b5cf6', marginBottom: '2rem' }}></div>
          <p style={{ fontSize: '1.25rem', color: '#d8b4fe', maxWidth: '42rem', fontWeight: 300, lineHeight: 1.6 }}>
            A leading law firm built on trust, expertise, and an unwavering commitment 
            to our clients' success. Since 2010, we've been shaping the legal landscape in Turkey.
          </p>
        </div>
      </section>

      {/* Values Section */}
      <section id="values" style={sectionStyle}>
        <div style={containerStyle}>
          <div style={{ marginBottom: '4rem' }}>
            <h2 style={{ fontSize: '2rem', fontWeight: 200, marginBottom: '1rem' }}>Our Core Values</h2>
            <p style={{ color: '#d8b4fe' }}>The principles that guide everything we do</p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2rem' }}>
            {values.map((value, index) => (
              <div
                key={index}
                style={{
                  border: '1px solid rgba(0,0,0,0.3)',
                  padding: '2rem',
                  transition: 'all 0.3s',
                  cursor: 'pointer',
                  backgroundColor: activeValue === index ? '#8b5cf6' : 'transparent'
                }}
                onMouseEnter={() => setActiveValue(index)}
                onMouseLeave={() => setActiveValue(null)}
              >
                <img 
                  src={value.icon} 
                  alt={value.title}
                  style={{ 
                    width: '80px', 
                    height: '80px', 
                    borderRadius: '8px', 
                    objectFit: 'cover',
                    marginBottom: '1rem',
                    opacity: 0.9
                  }} 
                />
                <h3 style={{ fontSize: '1.5rem', fontWeight: 400, marginBottom: '1rem' }}>{value.title}</h3>
                <p style={{ color: activeValue === index ? '#f3e8ff' : '#d8b4fe', lineHeight: 1.6 }}>
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section id="team" style={sectionStyle}>
        <div style={containerStyle}>
          <div style={{ marginBottom: '4rem' }}>
            <h2 style={{ fontSize: '2rem', fontWeight: 200, marginBottom: '1rem' }}>Our Leadership Team</h2>
            <p style={{ color: '#d8b4fe' }}>Experienced professionals dedicated to your success</p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '3rem' }}>
            {teamMembers.map((member, index) => (
              <div
                key={index}
                style={{
                  textAlign: 'center',
                  opacity: scrollY > 200 ? 1 : 0,
                  transform: scrollY > 200 ? 'translateY(0)' : 'translateY(20px)',
                  transition: `all 0.8s ease ${index * 0.1}s`
                }}
              >
                <img 
                  src={member.image} 
                  alt={member.name}
                  style={{ 
                    width: '150px', 
                    height: '150px', 
                    borderRadius: '50%', 
                    objectFit: 'cover',
                    marginBottom: '1rem',
                    border: '3px solid #8b5cf6'
                  }} 
                />
                <h3 style={{ fontSize: '1.5rem', fontWeight: 400, marginBottom: '0.5rem' }}>{member.name}</h3>
                <p style={{ color: '#a78bfa', marginBottom: '0.5rem' }}>{member.role}</p>
                <p style={{ fontSize: '0.875rem', color: '#d8b4fe', marginBottom: '0.25rem' }}>{member.expertise}</p>
                <p style={{ fontSize: '0.875rem', color: '#d8b4fe' }}>{member.experience}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section id="history" style={sectionStyle}>
        <div style={containerStyle}>
          <div style={{ marginBottom: '4rem' }}>
            <h2 style={{ fontSize: '2rem', fontWeight: 200, marginBottom: '1rem' }}>Our Journey</h2>
            <p style={{ color: '#d8b4fe' }}>Building a legacy of legal excellence</p>
          </div>

          <div style={{ position: 'relative', paddingLeft: '2rem' }}>
            <div style={{
              position: 'absolute',
              left: '0',
              top: '0',
              bottom: '0',
              width: '2px',
              backgroundColor: 'rgba(0,0,0,0.3)'
            }}></div>

            {milestones.map((milestone, index) => (
              <div
                key={index}
                style={{
                  position: 'relative',
                  marginBottom: '3rem',
                  opacity: scrollY > 600 + (index * 100) ? 1 : 0,
                  transform: scrollY > 600 + (index * 100) ? 'translateX(0)' : 'translateX(-20px)',
                  transition: 'all 0.8s ease'
                }}
              >
                <div style={{
                  position: 'absolute',
                  left: '-2.5rem',
                  top: '0',
                  width: '1rem',
                  height: '1rem',
                  backgroundColor: '#8b5cf6',
                  borderRadius: '50%',
                  border: '3px solid #522d72'
                }}></div>
                <div style={{ marginLeft: '1rem' }}>
                  <div style={{ fontSize: '2rem', fontWeight: 200, color: '#a78bfa', marginBottom: '0.5rem' }}>
                    {milestone.year}
                  </div>
                  <h3 style={{ fontSize: '1.5rem', fontWeight: 400, marginBottom: '0.5rem' }}>
                    {milestone.event}
                  </h3>
                  <p style={{ color: '#d8b4fe' }}>{milestone.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section style={{ ...sectionStyle, borderBottom: '1px solid rgba(0,0,0,0.3)' }}>
        <div style={containerStyle}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '2rem', textAlign: 'center' }}>
            <div>
              <div style={{ fontSize: '2rem', fontWeight: 200, marginBottom: '0.5rem' }}>13+</div>
              <div style={{ fontSize: '0.875rem', color: '#a78bfa', textTransform: 'uppercase', letterSpacing: '0.1em' }}>Years of Excellence</div>
            </div>
            <div>
              <div style={{ fontSize: '2rem', fontWeight: 200, marginBottom: '0.5rem' }}>25+</div>
              <div style={{ fontSize: '0.875rem', color: '#a78bfa', textTransform: 'uppercase', letterSpacing: '0.1em' }}>Legal Experts</div>
            </div>
            <div>
              <div style={{ fontSize: '2rem', fontWeight: 200, marginBottom: '0.5rem' }}>1500+</div>
              <div style={{ fontSize: '0.875rem', color: '#a78bfa', textTransform: 'uppercase', letterSpacing: '0.1em' }}>Clients Served</div>
            </div>
            <div>
              <div style={{ fontSize: '2rem', fontWeight: 200, marginBottom: '0.5rem' }}>10+</div>
              <div style={{ fontSize: '0.875rem', color: '#a78bfa', textTransform: 'uppercase', letterSpacing: '0.1em' }}>Industry Awards</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section style={{ padding: '5rem 2rem' }}>
        <div style={{ ...containerStyle, textAlign: 'center' }}>
          <h2 style={{ fontSize: '2rem', fontWeight: 200, marginBottom: '2rem' }}>Ready to Work With Us?</h2>
          <p style={{ color: '#d8b4fe', fontSize: '1.125rem', marginBottom: '3rem', maxWidth: '600px', margin: '0 auto 3rem' }}>
            Join hundreds of satisfied clients who trust us with their most important legal matters.
          </p>
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
            Get in Touch
          </button>
        </div>
      </section>
    </div>
  );
};

export default WhoWeAre;