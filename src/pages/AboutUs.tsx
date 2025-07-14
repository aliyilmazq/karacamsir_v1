import React from 'react';

const AboutUs: React.FC = () => {
  const containerStyle = {
    maxWidth: '80rem',
    margin: '0 auto',
    padding: '0 2rem'
  };

  return (
    <div style={{ backgroundColor: '#522d72', color: 'white', minHeight: '100vh' }}>
      {/* Hero Section */}
      <section style={{ padding: '8rem 2rem 5rem' }}>
        <div style={containerStyle}>
          <h1 style={{ 
            fontSize: 'clamp(2rem, 5vw, 3.5rem)', 
            fontWeight: 200, 
            lineHeight: 1.1, 
            marginBottom: '3rem',
            color: '#fff'
          }}>
            About Us
          </h1>
          
          {/* Placeholder for accordion */}
          <div style={{
            background: 'rgba(0,0,0,0.3)',
            padding: '3rem',
            borderRadius: '8px',
            border: '1px solid rgba(255,255,255,0.1)'
          }}>
            <p style={{ 
              fontSize: '1.125rem', 
              color: 'rgba(255,255,255,0.8)', 
              textAlign: 'center',
              margin: 0
            }}>
              Accordion content will be added here
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;