import React, { useState } from 'react';

interface TeamMember {
  id: number;
  name: string;
  title: string;
  imageUrl: string;
  details: string;
  specialParagraph?: string;
}

interface TeamModalProps {
  member: TeamMember | null;
  onClose: () => void;
}

const TeamModal: React.FC<TeamModalProps> = ({ member, onClose }) => {
  if (!member) return null;

  return (
    <div
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: 'rgba(0, 0, 0, 0.8)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        zIndex: 9999,
        padding: '2rem'
      }}
      onClick={onClose}
    >
      <div
        style={{
          backgroundColor: '#fff',
          borderRadius: '12px',
          maxWidth: '600px',
          width: '100%',
          maxHeight: '90vh',
          overflow: 'auto',
          padding: '3rem',
          position: 'relative',
          boxShadow: '0 20px 60px rgba(0, 0, 0, 0.3)'
        }}
        onClick={(e) => e.stopPropagation()}
      >
        <button
          style={{
            position: 'absolute',
            top: '1.5rem',
            right: '1.5rem',
            background: 'transparent',
            border: 'none',
            fontSize: '2rem',
            cursor: 'pointer',
            color: '#666',
            padding: '0.5rem',
            lineHeight: 1
          }}
          onClick={onClose}
        >
          ×
        </button>
        
        <div style={{ display: 'flex', gap: '2rem', marginBottom: '2rem', flexWrap: 'wrap' }}>
          <img
            src={member.imageUrl}
            alt={member.name}
            style={{
              width: '150px',
              height: '150px',
              borderRadius: '8px',
              objectFit: 'cover'
            }}
          />
          <div style={{ flex: 1 }}>
            <h2 style={{ fontSize: '1.75rem', marginBottom: '0.5rem', color: '#333' }}>
              {member.name}
            </h2>
            <p style={{ fontSize: '1.125rem', color: '#666', marginBottom: '1rem' }}>
              {member.title}
            </p>
          </div>
        </div>
        
        {member.specialParagraph && (
          <div style={{
            backgroundColor: '#f8f9fa',
            padding: '1.5rem',
            borderRadius: '8px',
            marginBottom: '2rem',
            borderLeft: '4px solid #5D3FD3'
          }}>
            <p style={{ color: '#333', lineHeight: 1.6, margin: 0 }}>
              {member.specialParagraph}
            </p>
          </div>
        )}
        
        <div style={{ color: '#333', lineHeight: 1.8 }}>
          {member.details.split('\n').map((paragraph, index) => (
            <p key={index} style={{ marginBottom: '1rem' }}>
              {paragraph}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
};

const Team: React.FC = () => {
  const [selectedMember, setSelectedMember] = useState<TeamMember | null>(null);

  // Sample team data - replace with actual data
  const teamMembers: TeamMember[] = [
    {
      id: 1,
      name: 'Cankat Karaçam',
      title: 'Managing Partner',
      imageUrl: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&h=400&fit=crop',
      details: 'Cankat Karaçam is the Managing Partner at Karaçam & Şir Law Firm. With over 20 years of experience in corporate law and international transactions, he leads our firm\'s strategic initiatives and major client relationships.\n\nHis expertise spans mergers and acquisitions, project finance, and cross-border transactions. He has advised on transactions totaling over €5 billion in value.',
      specialParagraph: 'Cankat has been recognized as a leading lawyer in Turkey by international legal directories and has been instrumental in shaping the firm\'s vision and growth strategy.'
    },
    {
      id: 2,
      name: 'Furkan Şir',
      title: 'Senior Partner',
      imageUrl: 'https://images.unsplash.com/photo-1556157382-97eda2d62296?w=400&h=400&fit=crop',
      details: 'Furkan Şir is a Senior Partner specializing in litigation and dispute resolution. He has successfully represented clients in complex commercial disputes and international arbitrations.\n\nWith expertise in both civil and commercial litigation, Furkan has a track record of achieving favorable outcomes in high-stakes disputes.',
      specialParagraph: 'Furkan is known for his strategic approach to dispute resolution and has been recognized for his advocacy skills in international arbitration forums.'
    },
    {
      id: 3,
      name: 'Ali Yılmaz',
      title: 'Partner',
      imageUrl: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop',
      details: 'Ali Yılmaz is a Partner in our Technology and Innovation practice. He advises technology companies, startups, and investors on corporate matters, intellectual property, and regulatory compliance.\n\nAli has extensive experience in venture capital transactions, technology licensing, and data protection matters.',
      specialParagraph: 'Ali has been at the forefront of advising on emerging technology regulations and has helped numerous startups navigate complex legal landscapes.'
    },
    {
      id: 4,
      name: 'Zeynep Demir',
      title: 'Senior Associate',
      imageUrl: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=400&fit=crop',
      details: 'Zeynep Demir is a Senior Associate in our Corporate and M&A practice. She has worked on numerous cross-border transactions and has expertise in private equity and capital markets.\n\nZeynep regularly advises on corporate restructurings, joint ventures, and regulatory compliance matters.'
    },
    {
      id: 5,
      name: 'Mehmet Kaya',
      title: 'Associate',
      imageUrl: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop',
      details: 'Mehmet Kaya is an Associate in our Energy and Infrastructure practice. He assists clients with project development, regulatory compliance, and financing arrangements.\n\nMehmet has worked on several renewable energy projects and public-private partnerships.'
    },
    {
      id: 6,
      name: 'Ayşe Özkan',
      title: 'Associate',
      imageUrl: 'https://images.unsplash.com/photo-1594744803329-e58b31de8bf5?w=400&h=400&fit=crop',
      details: 'Ayşe Özkan is an Associate specializing in employment law and regulatory compliance. She advises both domestic and international clients on Turkish labor law matters.\n\nAyşe has extensive experience in employment disputes, collective bargaining agreements, and workplace compliance issues.'
    }
  ];

  // Sort team members alphabetically by name
  const sortedMembers = [...teamMembers].sort((a, b) => a.name.localeCompare(b.name));

  // Handle ESC key to close modal
  React.useEffect(() => {
    const handleEsc = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setSelectedMember(null);
      }
    };
    window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, []);

  return (
    <div style={{ backgroundColor: '#522d72', color: 'white', minHeight: '100vh', paddingTop: '2rem' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 2rem' }}>
        <h1 style={{ 
          fontSize: '2.5rem', 
          fontWeight: 200, 
          marginBottom: '3rem', 
          textAlign: 'center',
          color: '#fff'
        }}>
          Our Team
        </h1>
        
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', 
          gap: '2rem',
          marginBottom: '4rem'
        }}>
          {sortedMembers.map((member) => (
            <div
              key={member.id}
              style={{
                background: 'linear-gradient(135deg, rgba(0,0,0,0.6) 0%, rgba(0,0,0,0.8) 100%)',
                borderRadius: '12px',
                overflow: 'hidden',
                cursor: 'pointer',
                transition: 'all 0.3s',
                border: '2px solid transparent'
              }}
              onClick={() => setSelectedMember(member)}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-8px)';
                e.currentTarget.style.borderColor = '#8b5cf6';
                e.currentTarget.style.boxShadow = '0 10px 30px rgba(139, 92, 246, 0.3)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.borderColor = 'transparent';
                e.currentTarget.style.boxShadow = 'none';
              }}
            >
              <div style={{ position: 'relative', paddingBottom: '100%', overflow: 'hidden' }}>
                <img
                  src={member.imageUrl}
                  alt={member.name}
                  style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    transition: 'transform 0.3s'
                  }}
                />
              </div>
              <div style={{ padding: '1.5rem', textAlign: 'center' }}>
                <h3 style={{ fontSize: '1.25rem', fontWeight: 500, color: '#fff' }}>
                  {member.name}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      <TeamModal member={selectedMember} onClose={() => setSelectedMember(null)} />
    </div>
  );
};

export default Team;