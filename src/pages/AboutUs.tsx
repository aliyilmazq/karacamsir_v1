import React from 'react';
import PageHeaderSection from "../components/PageHeaderSection/PageHeaderSection";
import istanbulImage from "../assets/istanbul_1.jpg";

const AboutUs: React.FC = () => {
  const containerStyle = {
    maxWidth: '80rem',
    margin: '0 auto',
    padding: '0 2rem'
  };

  return (
    <>
      <PageHeaderSection
        title="Çalışma Alanlarımız"
        breadcrumb="Ana Sayfa / Hizmetlerimiz"
        backgroundImage={istanbulImage}
      />
      <div style={{ backgroundColor: '#ffffff', color: '#333333', minHeight: '100vh' }}>
        {/* Hero Section */}
        <section style={{ padding: '8rem 2rem 5rem' }}>
          <div style={containerStyle}>
            <h1 style={{ 
              fontSize: 'clamp(2rem, 5vw, 3.5rem)', 
              fontWeight: 200, 
              lineHeight: 1.1, 
              marginBottom: '3rem',
              color: '#5D3FD3'
            }}>
              About Us
            </h1>
            
            {/* Placeholder for accordion */}
            <div style={{
              background: 'rgba(240,240,240,0.5)',
              padding: '3rem',
              borderRadius: '8px',
              border: '1px solid #e0e0e0'
            }}>
              <p style={{ 
                fontSize: '1.125rem', 
                color: '#666666', 
                textAlign: 'center',
                margin: 0
              }}>
                Accordion content will be added here
              </p>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default AboutUs;