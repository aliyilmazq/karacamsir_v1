import React, { useState, useRef, useEffect } from 'react';
import PageHeaderSection from "../components/PageHeaderSection/PageHeaderSection";
import istanbulImage from "../assets/istanbul_1.jpg";

// Team member data (as React object)
type TeamMember = {
  key: string;
  name: string;
  title: string;
  email: string;
  phone: string;
  initials: string;
  education: string[];
  specializations: string[];
  languages: string[];
  bar: string;
  bio?: string;
};

const teamData: TeamMember[] = [
  {
    key: 'ozlem',
    name: 'Özlem Albayrak',
    title: 'Lawyer',
    email: 'ozlem.albayrak@karacamsir.com',
    phone: '+90 212 123 4501',
    initials: 'ÖA',
    education: ['Istanbul University Faculty of Law'],
    specializations: ['Commercial Law'],
    languages: ['Turkish', 'English'],
    bar: 'Istanbul Bar Association'
  },
  {
    key: 'bahadir',
    name: 'Bahadır İşgören',
    title: 'Lawyer',
    email: 'bahadir.isgoren@karacamsir.com',
    phone: '+90 212 123 4503',
    initials: 'Bİ',
    education: ['Ankara University Faculty of Law'],
    specializations: ['Criminal Law'],
    languages: ['Turkish', 'English'],
    bar: 'Ankara Bar Association'
  },
  {
    key: 'furkan',
    name: 'Furkan Karaçam',
    title: 'Lawyer',
    email: 'furkan.karacam@karacamsir.com',
    phone: '+90 212 123 4506',
    initials: 'FK',
    education: ['Istanbul Bilgi University Faculty of Law'],
    specializations: ['Tax Law'],
    languages: ['Turkish', 'English'],
    bar: 'Istanbul Bar Association'
  },
  {
    key: 'kerem',
    name: 'Kerem Seber',
    title: 'Lawyer',
    email: 'kerem.seber@karacamsir.com',
    phone: '+90 212 123 4504',
    initials: 'KS',
    education: ['Galatasaray University Faculty of Law'],
    specializations: ['Corporate Law'],
    languages: ['Turkish', 'English'],
    bar: 'Istanbul Bar Association'
  },
  {
    key: 'cankat',
    name: 'Cankat Şir',
    title: 'Lawyer',
    email: 'cankat.sir@karacamsir.com',
    phone: '+90 212 123 4505',
    initials: 'CŞ',
    education: ['Bilkent University Faculty of Law'],
    specializations: ['Intellectual Property Law'],
    languages: ['Turkish', 'English'],
    bar: 'Ankara Bar Association'
  },
  {
    key: 'burcu',
    name: 'Burcu Uman',
    title: 'Lawyer',
    email: 'burcu.uman@karacamsir.com',
    phone: '+90 212 123 4502',
    initials: 'BU',
    education: ['Marmara University Faculty of Law'],
    specializations: ['Labor Law'],
    languages: ['Turkish', 'English'],
    bar: 'Istanbul Bar Association'
  }
].sort((a, b) => {
  const getLastName = (name: string) => name.trim().split(' ').slice(-1)[0].toLocaleLowerCase('tr');
  return getLastName(a.name).localeCompare(getLastName(b.name), 'tr');
});

const Team: React.FC = () => {
  const [selectedMember, setSelectedMember] = useState<TeamMember | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const modalRef = useRef<HTMLDivElement>(null);

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

  const openModal = (member: TeamMember) => {
    setSelectedMember(member);
    setIsModalOpen(true);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setTimeout(() => setSelectedMember(null), 300);
    document.body.style.overflow = '';
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (modalRef.current && !modalRef.current.contains(event.target as Node)) {
        closeModal();
      }
    };

    if (isModalOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isModalOpen]);

  const containerStyle = {
    maxWidth: '80rem',
    margin: '0 auto',
    padding: windowSize.isMobile ? '0 1rem' : '0 2rem'
  };

  return (
    <>
      <PageHeaderSection
        title="Our Team"
        breadcrumb="Home / Team"
        backgroundImage={istanbulImage}
      />
      
      <div style={{ backgroundColor: '#ffffff', minHeight: '100vh' }}>
        <div style={{ 
          ...containerStyle,
          padding: windowSize.isMobile ? '3rem 1rem' : '5rem 2rem'
        }}>
          {/* Page Header */}
          {/* Removed: <div> with 'Meet Our Team' and subtitle */}

          {/* Team Grid */}
          <div style={{ 
            display: 'grid',
            gridTemplateColumns: windowSize.isMobile ? 'repeat(2, 1fr)' : windowSize.isTablet ? 'repeat(3, 1fr)' : 'repeat(4, 1fr)',
            gap: windowSize.isMobile ? '1rem' : '2rem'
          }}>
            {teamData.map((member, index) => (
              <div
                key={member.key}
                style={{
                  opacity: 1,
                  animation: `fadeInUp 0.8s ease forwards`,
                  animationDelay: `${index * 0.1}s`
                }}
              >
                <div
                  onClick={() => openModal(member)}
                  style={{
                    background: '#ffffff',
                    border: '1px solid #e0e0e0',
                    overflow: 'hidden',
                    transition: 'all 0.4s ease',
                    cursor: 'pointer',
                    position: 'relative',
                    borderRadius: '8px'
                  }}
                  onMouseEnter={e => {
                    if (!windowSize.isMobile) {
                      e.currentTarget.style.transform = 'translateY(-5px)';
                      e.currentTarget.style.borderColor = '#702963';
                      e.currentTarget.style.boxShadow = '0 10px 30px rgba(112, 41, 99, 0.2)';
                    }
                  }}
                  onMouseLeave={e => {
                    e.currentTarget.style.transform = 'translateY(0)';
                    e.currentTarget.style.borderColor = '#e0e0e0';
                    e.currentTarget.style.boxShadow = 'none';
                  }}
                >
                  {/* Member Image/Initials */}
                  <div style={{
                    position: 'relative',
                    height: windowSize.isMobile ? '200px' : '300px',
                    overflow: 'hidden',
                    background: 'linear-gradient(135deg, #702963, #702963)'
                  }}>
                    <div style={{
                      width: '100%',
                      height: '100%',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontSize: windowSize.isMobile ? '3rem' : '4rem',
                      fontWeight: 300,
                      color: 'rgba(255, 255, 255, 0.9)',
                      fontFamily: 'Georgia, serif'
                    }}>
                      {member.initials}
                    </div>
                  </div>

                  {/* Member Info */}
                  <div style={{
                    padding: windowSize.isMobile ? '1.5rem 1rem' : '2rem',
                    textAlign: 'center'
                  }}>
                    <h3 style={{
                      fontSize: windowSize.isMobile ? '1.125rem' : '1.375rem',
                      fontWeight: 400,
                      letterSpacing: '1px',
                      marginBottom: '0.5rem',
                      color: '#333'
                    }}>
                      {member.name}
                    </h3>
                    <p style={{
                      fontSize: windowSize.isMobile ? '0.875rem' : '1rem',
                      color: '#702963',
                      marginBottom: '1rem'
                    }}>
                      {member.title}
                    </p>
                    <a
                      href={`mailto:${member.email}`}
                      onClick={(e) => e.stopPropagation()}
                      style={{
                        fontSize: windowSize.isMobile ? '0.75rem' : '0.875rem',
                        color: '#666',
                        textDecoration: 'none',
                        transition: 'color 0.3s ease',
                        display: 'inline-block',
                        wordBreak: 'break-word'
                      }}
                      onMouseEnter={e => {
                        e.currentTarget.style.color = '#702963';
                        e.currentTarget.style.textDecoration = 'underline';
                      }}
                      onMouseLeave={e => {
                        e.currentTarget.style.color = '#666';
                        e.currentTarget.style.textDecoration = 'none';
                      }}
                    >
                      {member.email}
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Modal */}
        {isModalOpen && (
          <div 
            style={{
              position: 'fixed',
              top: 0,
              left: 0,
              width: '100%',
              height: '100%',
              background: 'rgba(0, 0, 0, 0.9)',
              display: 'flex',
              alignItems: windowSize.isMobile ? 'flex-start' : 'center',
              justifyContent: 'center',
              zIndex: 2000,
              opacity: isModalOpen ? 1 : 0,
              transition: 'opacity 0.3s ease',
              padding: windowSize.isMobile ? '0' : '2rem',
              overflowY: 'auto'
            }}
          >
            <div
              ref={modalRef}
              style={{
                background: '#ffffff',
                border: '1px solid #e0e0e0',
                maxWidth: windowSize.isMobile ? '100%' : '900px',
                width: '100%',
                maxHeight: windowSize.isMobile ? '100vh' : '90vh',
                overflowY: 'auto',
                position: 'relative',
                transform: isModalOpen ? 'translateY(0)' : 'translateY(20px)',
                transition: 'transform 0.3s ease',
                borderRadius: windowSize.isMobile ? '0' : '8px',
                marginTop: windowSize.isMobile ? '0' : '2rem'
              }}
            >
              {/* Close Button */}
              <button
                onClick={closeModal}
                style={{
                  position: windowSize.isMobile ? 'fixed' : 'absolute',
                  top: windowSize.isMobile ? '1rem' : '2rem',
                  right: windowSize.isMobile ? '1rem' : '2rem',
                  width: '40px',
                  height: '40px',
                  background: 'rgba(0, 0, 0, 0.1)',
                  border: 'none',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease',
                  zIndex: 10,
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.background = 'rgba(0, 0, 0, 0.2)';
                  e.currentTarget.style.transform = 'rotate(90deg)';
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.background = 'rgba(0, 0, 0, 0.1)';
                  e.currentTarget.style.transform = 'rotate(0)';
                }}
              >
                <span style={{ fontSize: '1.5rem', color: '#333' }}>×</span>
              </button>

              {selectedMember && (
                <div style={{
                  padding: windowSize.isMobile ? '3rem 1.5rem' : '4rem',
                  display: windowSize.isMobile ? 'block' : 'grid',
                  gridTemplateColumns: windowSize.isMobile ? '1fr' : '300px 1fr',
                  gap: windowSize.isMobile ? '2rem' : '4rem',
                  alignItems: 'start'
                }}>
                  {/* Left Column - Image and Contact */}
                  <div style={{ 
                    position: windowSize.isMobile ? 'relative' : 'sticky',
                    top: windowSize.isMobile ? '0' : '2rem'
                  }}>
                    <div style={{
                      width: '100%',
                      height: windowSize.isMobile ? '250px' : '350px',
                      background: 'linear-gradient(135deg, #702963, #702963)',
                      marginBottom: '2rem',
                      overflow: 'hidden',
                      borderRadius: '8px'
                    }}>
                      <div style={{
                        width: '100%',
                        height: '100%',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        fontSize: windowSize.isMobile ? '4rem' : '6rem',
                        fontWeight: 300,
                        color: 'rgba(255, 255, 255, 0.9)',
                        fontFamily: 'Georgia, serif'
                      }}>
                        {selectedMember.initials}
                      </div>
                    </div>
                    <div style={{ textAlign: 'center' }}>
                      <a
                        href={`mailto:${selectedMember.email}`}
                        style={{
                          color: '#702963',
                          textDecoration: 'none',
                          fontSize: windowSize.isMobile ? '0.875rem' : '1rem',
                          display: 'block',
                          marginBottom: '0.5rem',
                          transition: 'color 0.3s ease'
                        }}
                        onMouseEnter={e => e.currentTarget.style.textDecoration = 'underline'}
                        onMouseLeave={e => e.currentTarget.style.textDecoration = 'none'}
                      >
                        {selectedMember.email}
                      </a>
                      <p style={{
                        color: '#666',
                        fontSize: windowSize.isMobile ? '0.875rem' : '1rem'
                      }}>
                        {selectedMember.phone}
                      </p>
                    </div>
                  </div>

                  {/* Right Column - Info */}
                  <div style={{ color: '#333' }}>
                    <h2 style={{
                      fontSize: windowSize.isMobile ? '1.75rem' : '2.25rem',
                      fontWeight: 300,
                      letterSpacing: '1px',
                      marginBottom: '0.5rem'
                    }}>
                      {selectedMember.name}
                    </h2>
                    <p style={{
                      fontSize: windowSize.isMobile ? '1rem' : '1.125rem',
                      color: '#702963',
                      marginBottom: '2rem',
                      fontWeight: 300
                    }}>
                      {selectedMember.title}
                    </p>

                    {selectedMember.bio && (
                      <p style={{
                        fontSize: windowSize.isMobile ? '0.875rem' : '1rem',
                        lineHeight: 1.8,
                        color: '#555',
                        marginBottom: '2.5rem',
                        textAlign: 'justify'
                      }}>
                        {selectedMember.bio}
                      </p>
                    )}

                    {/* Education */}
                    <div style={{ marginBottom: '2rem' }}>
                      <h3 style={{
                        fontSize: windowSize.isMobile ? '1.125rem' : '1.25rem',
                        fontWeight: 400,
                        marginBottom: '1rem',
                        color: '#333',
                        position: 'relative',
                        paddingBottom: '0.75rem'
                      }}>
                        Education
                        <span style={{
                          position: 'absolute',
                          bottom: 0,
                          left: 0,
                          width: '30px',
                          height: '2px',
                          background: '#702963'
                        }}></span>
                      </h3>
                      <ul style={{
                        listStyle: 'none',
                        padding: 0,
                        margin: 0,
                        color: '#555',
                        lineHeight: 1.8
                      }}>
                        {selectedMember.education.map((edu, index) => (
                          <li key={index} style={{
                            marginBottom: '0.5rem',
                            paddingLeft: '1.5rem',
                            position: 'relative',
                            fontSize: windowSize.isMobile ? '0.875rem' : '0.9375rem'
                          }}>
                            <span style={{
                              position: 'absolute',
                              left: 0,
                              color: '#702963'
                            }}>▸</span>
                            {edu}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Specializations */}
                    <div style={{ marginBottom: '2rem' }}>
                      <h3 style={{
                        fontSize: windowSize.isMobile ? '1.125rem' : '1.25rem',
                        fontWeight: 400,
                        marginBottom: '1rem',
                        color: '#333',
                        position: 'relative',
                        paddingBottom: '0.75rem'
                      }}>
                        Areas of Expertise
                        <span style={{
                          position: 'absolute',
                          bottom: 0,
                          left: 0,
                          width: '30px',
                          height: '2px',
                          background: '#702963'
                        }}></span>
                      </h3>
                      <div style={{
                        display: 'flex',
                        flexWrap: 'wrap',
                        gap: '0.5rem'
                      }}>
                        {selectedMember.specializations.map((spec, index) => (
                          <span key={index} style={{
                            background: '#f0f0f0',
                            padding: windowSize.isMobile ? '0.375rem 0.75rem' : '0.5rem 1rem',
                            borderRadius: '20px',
                            fontSize: windowSize.isMobile ? '0.75rem' : '0.875rem',
                            color: '#555'
                          }}>
                            {spec}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Languages */}
                    <div style={{ marginBottom: '2rem' }}>
                      <h3 style={{
                        fontSize: windowSize.isMobile ? '1.125rem' : '1.25rem',
                        fontWeight: 400,
                        marginBottom: '1rem',
                        color: '#333',
                        position: 'relative',
                        paddingBottom: '0.75rem'
                      }}>
                        Languages
                        <span style={{
                          position: 'absolute',
                          bottom: 0,
                          left: 0,
                          width: '30px',
                          height: '2px',
                          background: '#702963'
                        }}></span>
                      </h3>
                      <p style={{
                        color: '#555',
                        fontSize: windowSize.isMobile ? '0.875rem' : '0.9375rem'
                      }}>
                        {selectedMember.languages.join(' • ')}
                      </p>
                    </div>

                    {/* Bar */}
                    <div>
                      <h3 style={{
                        fontSize: windowSize.isMobile ? '1.125rem' : '1.25rem',
                        fontWeight: 400,
                        marginBottom: '1rem',
                        color: '#333',
                        position: 'relative',
                        paddingBottom: '0.75rem'
                      }}>
                        Bar Registration
                        <span style={{
                          position: 'absolute',
                          bottom: 0,
                          left: 0,
                          width: '30px',
                          height: '2px',
                          background: '#702963'
                        }}></span>
                      </h3>
                      <p style={{
                        color: '#555',
                        fontSize: windowSize.isMobile ? '0.875rem' : '0.9375rem'
                      }}>
                        {selectedMember.bar}
                      </p>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        )}
      </div>

      <style>
        {`
          @keyframes fadeInUp {
            from {
              opacity: 0;
              transform: translateY(30px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }

          /* Prevent body scroll when modal is open */
          body.modal-open {
            overflow: hidden;
          }

          /* Smooth scrolling */
          html {
            scroll-behavior: smooth;
            -webkit-overflow-scrolling: touch;
          }

          /* Better scrollbar for modal */
          .modal-content::-webkit-scrollbar {
            width: 8px;
          }

          .modal-content::-webkit-scrollbar-track {
            background: #f1f1f1;
          }

          .modal-content::-webkit-scrollbar-thumb {
            background: #888;
            border-radius: 4px;
          }

          .modal-content::-webkit-scrollbar-thumb:hover {
            background: #555;
          }
        `}
      </style>
    </>
  );
};

export default Team;