import React, { useState, useRef, useEffect } from 'react';
import PageHeaderSection from "../components/PageHeaderSection/PageHeaderSection";
import istanbulImage from "../assets/istanbul_1.jpg";
import BahadirImg from "../assets/team_photos/bahadır.png";
import BiancaImg from "../assets/team_photos/bianca.png";
import BurcuImg from "../assets/team_photos/Burcu UMAN.jpg";
import KeremImg from "../assets/team_photos/Kerem SEBER.JPG";
import FurkanImg from "../assets/team_photos/H.Furkan KARAÇAM.JPG";
import OzlemImg from "../assets/team_photos/Özlem ALBAYRAK.jpeg";
import CankatImg from "../assets/team_photos/Cankat Şir.JPG";

// Team member data (as React object)
type CVSection = {
  title: string;
  items: string[];
};

type TeamMember = {
  key: string;
  name: string;
  title: string;
  email: string;
  phone: string;
  initials: string;
  photo?: string;
  intro?: string; // Short bio or intro
  cvSections: CVSection[];
};

const teamData: TeamMember[] = [
  {
    key: 'ozlem',
    name: 'Özlem Albayrak',
    title: 'Associate',
    email: 'ozlem.albayrak@karacamsir.com',
    phone: '+90 212 123 4501',
    initials: 'ÖA',
    photo: OzlemImg,
    intro: undefined,
    cvSections: [
      { title: 'Education', items: ['Hacettepe University, LL.B.'] },
      { title: 'Areas of Expertise', items: ['Technology & Ventures'] },
      { title: 'Languages', items: ['Turkish', 'English'] },
      { title: 'Memberships', items: ['Istanbul Bar Association'] }
    ]
  },
  {
    key: 'bahadir',
    name: 'Bahadır İşgören',
    title: 'Associate',
    email: 'bahadir.isgoren@karacamsir.com',
    phone: '+90 212 123 4503',
    initials: 'Bİ',
    photo: BahadirImg,
    intro: undefined,
    cvSections: [
      { title: 'Education', items: ['Ankara University, LL.B.'] },
      { title: 'Areas of Expertise', items: ['Corporate & Commercial'] },
      { title: 'Languages', items: ['Turkish', 'English'] },
      { title: 'Memberships', items: ['Ankara Bar Association'] }
    ]
  },
  {
    key: 'furkan',
    name: 'H. Furkan Karaçam',
    title: 'Partner',
    email: 'furkan.karacam@karacamsir.com',
    phone: '+90 212 123 4506',
    initials: 'FK',
    photo: FurkanImg,
    intro: 'H. Furkan Karaçam is a dual-qualified corporate lawyer. His practice focuses on cross-border transactions, international commercial contracts, and institutional advisory. He advises under Turkish law, English law, and AIFC law.',
    cvSections: [
      { title: 'Education', items: ['Istanbul University, LL.M in Finance Law', 'Bilkent University, LL.B.'] },
      { title: 'Areas of Expertise', items: ['Corporate & Commercial'] },
      { title: 'Languages', items: ['Turkish', 'English'] },
      { title: 'Memberships', items: [
        'Istanbul Bar Association',
        'Solicitor of England & Wales',
        'Rights of Audience in AIFC Courts (Kazakhstan)',
        'Artificial Intelligence Policies Association Turkey (Disciplinary Board Member)'
      ] },
      { title: 'Other Professional Qualifications', items: [
        'Capital Markets Activities Level 3 License',
        'Derivative Instruments License',
        'Corporate Governance Rating License',
        'Trademark Attorney'
      ] }
    ]
  },
  {
    key: 'kerem',
    name: 'Kerem Seber',
    title: 'Of Counsel',
    email: 'kerem.seber@karacamsir.com',
    phone: '+90 212 123 4504',
    initials: 'KS',
    photo: KeremImg,
    intro: undefined,
    cvSections: [
      { title: 'Education', items: ['Queen Marry University, LL.M.', 'Marmara University, LL.B.'] },
      { title: 'Areas of Expertise', items: ['Corporate & Commercial'] },
      { title: 'Languages', items: ['Turkish', 'English'] },
      { title: 'Memberships', items: ['Istanbul Bar Association'] }
    ]
  },
  {
    key: 'cankat',
    name: 'Cankat Şir',
    title: 'Partner',
    email: 'cankat.sir@karacamsir.com',
    phone: '+90 212 123 4505',
    initials: 'CŞ',
    photo: CankatImg,
    intro: 'Cankat Şir is a corporate and commercial lawyer focused on technology ventures. His practice covers startup law, venture capital transactions, data protection, and intellectual property. He advises emerging technology ventures and VCs and angel investors on complex projects, corporate structuring, and fundraising strategies, from seed rounds to Series A, B, C, and IPO and exit.',
    cvSections: [
      { title: 'Education', items: ['Ozyegin University, LL.B.'] },
      { title: 'Areas of Expertise', items: ['Technology & Ventures'] },
      { title: 'Languages', items: ['Turkish', 'English'] },
      { title: 'Memberships', items: [
        'Istanbul Bar Association',
        'Artificial Intelligence Policies Association Turkey',
        'Better Justice Association Turkey',
        'Former TOBB E-Commerce Council, Data Protection Working Group Secretary'
      ] }
    ]
  },
  {
    key: 'burcu',
    name: 'Burcu Uman',
    title: 'Associate',
    email: 'burcu.uman@karacamsir.com',
    phone: '+90 212 123 4502',
    initials: 'BU',
    photo: BurcuImg,
    intro: undefined,
    cvSections: [
      { title: 'Education', items: ['Marmara University, LL.B.'] },
      { title: 'Areas of Expertise', items: ['Corporate & Commercial'] },
      { title: 'Languages', items: ['Turkish', 'English'] },
      { title: 'Memberships', items: ['Istanbul Bar Association'] }
    ]
  },
  {
    key: 'bianca',
    name: 'Bianca Geangalau',
    title: 'Associate',
    email: 'bianca.geangalau@karacamsir.com',
    phone: '+90 212 123 4507',
    initials: 'BG',
    photo: BiancaImg,
    intro: undefined,
    cvSections: [
      { title: 'Education', items: ['Robert Gordon University, LL.B.'] },
      { title: 'Areas of Expertise', items: ['Dispute Resolution'] },
      { title: 'Languages', items: ['Romanian', 'English', 'Turkish'] },
      { title: 'Memberships', items: ['Bucharest Bar Association'] }
    ]
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
                      e.currentTarget.style.borderColor = '#2e0d50';
                      e.currentTarget.style.boxShadow = '0 10px 30px rgba(46, 13, 80, 0.2)';
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
                    width: '100%',
                    paddingTop: '100%', // Kare oranı
                    overflow: 'hidden',
                    background: 'linear-gradient(135deg, #2e0d50, #2e0d50)',
                    borderRadius: '8px'
                  }}>
                    {member.photo ? (
                      <img
                        src={member.photo}
                        alt={member.name}
                        style={{
                          position: 'absolute',
                          top: 0,
                          left: 0,
                          width: '100%',
                          height: '100%',
                          objectFit: 'cover',
                          display: 'block',
                          background: '#2e0d50',
                          borderRadius: '8px'
                        }}
                      />
                    ) : (
                      <div style={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        width: '100%',
                        height: '100%',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        fontSize: windowSize.isMobile ? '3rem' : '4rem',
                        fontWeight: 300,
                        color: 'rgba(255, 255, 255, 0.9)',
                        fontFamily: 'Georgia, serif',
                        background: 'linear-gradient(135deg, #2e0d50, #2e0d50)',
                        borderRadius: '8px'
                      }}>
                        {member.initials}
                      </div>
                    )}
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
                      color: '#2e0d50',
                      marginBottom: '1rem'
                    }}>
                      {member.title}
                    </p>
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
                      position: 'relative',
                      width: '100%',
                      paddingTop: '100%', // Kare oranı
                      overflow: 'hidden',
                      background: 'linear-gradient(135deg, #2e0d50, #2e0d50)',
                      borderRadius: '8px',
                      marginBottom: '2rem'
                    }}>
                      {selectedMember.photo ? (
                        <img
                          src={selectedMember.photo}
                          alt={selectedMember.name}
                          style={{
                            position: 'absolute',
                            top: 0,
                            left: 0,
                            width: '100%',
                            height: '100%',
                            objectFit: 'cover',
                            display: 'block',
                            background: '#2e0d50',
                            borderRadius: '8px'
                          }}
                        />
                      ) : (
                        <div style={{
                          position: 'absolute',
                          top: 0,
                          left: 0,
                          width: '100%',
                          height: '100%',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          fontSize: windowSize.isMobile ? '4rem' : '6rem',
                          fontWeight: 300,
                          color: 'rgba(255, 255, 255, 0.9)',
                          fontFamily: 'Georgia, serif',
                          background: 'linear-gradient(135deg, #2e0d50, #2e0d50)',
                          borderRadius: '8px'
                        }}>
                          {selectedMember.initials}
                        </div>
                      )}
                    </div>
                    <div style={{ textAlign: 'center' }}>
                      <a
                        href={`mailto:${selectedMember.email}`}
                        style={{
                          color: '#2e0d50',
                          textDecoration: 'none',
                          fontSize: windowSize.isMobile ? '0.75rem' : '1rem',
                          display: 'block',
                          marginBottom: '0.5rem',
                          transition: 'color 0.3s ease',
                          wordBreak: 'break-all',
                          overflowWrap: 'anywhere',
                          hyphens: 'auto',
                          lineHeight: '1.4',
                          maxWidth: '100%',
                          padding: windowSize.isMobile ? '0 0.5rem' : '0'
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
                      color: '#2e0d50',
                      marginBottom: '2rem',
                      fontWeight: 300
                    }}>
                      {selectedMember.title}
                    </p>

                    {selectedMember.intro && (
                      <p style={{
                        fontSize: windowSize.isMobile ? '0.875rem' : '1rem',
                        lineHeight: 1.8,
                        color: '#555',
                        marginBottom: '2.5rem',
                        textAlign: 'justify'
                      }}>
                        {selectedMember.intro}
                      </p>
                    )}

                    {/* CV Sections */}
                    {selectedMember.cvSections.map((section, index) => (
                      <div key={index} style={{ marginBottom: '2rem' }}>
                        <h3 style={{
                          fontSize: windowSize.isMobile ? '1.125rem' : '1.25rem',
                          fontWeight: 400,
                          marginBottom: '1rem',
                          color: '#333',
                          position: 'relative',
                          paddingBottom: '0.75rem'
                        }}>
                          {section.title}
                          <span style={{
                            position: 'absolute',
                            bottom: 0,
                            left: 0,
                            width: '30px',
                            height: '2px',
                            background: '#2e0d50'
                          }}></span>
                        </h3>
                        <ul style={{
                          listStyle: 'none',
                          padding: 0,
                          margin: 0,
                          color: '#555',
                          lineHeight: 1.8
                        }}>
                          {section.items.map((item, itemIndex) => (
                            <li key={itemIndex} style={{
                              marginBottom: '0.5rem',
                              paddingLeft: '1.5rem',
                              position: 'relative',
                              fontSize: windowSize.isMobile ? '0.875rem' : '0.9375rem'
                            }}>
                              <span style={{
                                position: 'absolute',
                                left: 0,
                                color: '#2e0d50'
                              }}>▸</span>
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