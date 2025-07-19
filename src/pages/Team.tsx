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

  return (
    <>
      <PageHeaderSection
        title="Our Team"
        breadcrumb="Home / Team"
        backgroundImage={istanbulImage}
      />
      
      <div style={{ backgroundColor: '#ffffff', minHeight: '100vh' }}>
        <div className="team-container">
          {/* Team Grid */}
          <div className="team-grid">
            {teamData.map((member, index) => (
              <div
                key={member.key}
                className="team-member-wrapper"
                style={{
                  animation: `fadeInUp 0.8s ease forwards`,
                  animationDelay: `${index * 0.1}s`
                }}
              >
                <div
                  onClick={() => openModal(member)}
                  className="team-member-card"
                >
                  {/* Member Image/Initials */}
                  <div className="member-image-container">
                    {member.photo ? (
                      <img
                        src={member.photo}
                        alt={member.name}
                        className="member-image"
                      />
                    ) : (
                      <div className="member-initials">
                        {member.initials}
                      </div>
                    )}
                  </div>

                  {/* Member Info */}
                  <div className="member-info">
                    <h3 className="member-name">
                      {member.name}
                    </h3>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Modal */}
        {isModalOpen && (
          <div className={`modal ${isModalOpen ? 'open' : ''}`}>
            <div
              ref={modalRef}
              className="modal-content"
            >
              {/* Close Button */}
              <button
                onClick={closeModal}
                className="modal-close"
              >
                <span>×</span>
              </button>

              {selectedMember && (
                <div className="modal-body">
                  {/* Member Photo Section */}
                  <div className="modal-image-section">
                    <div className="modal-member-image-container">
                      {selectedMember.photo ? (
                        <img
                          src={selectedMember.photo}
                          alt={selectedMember.name}
                          className="modal-member-image"
                        />
                      ) : (
                        <div className="modal-member-initials">
                          {selectedMember.initials}
                        </div>
                      )}
                    </div>
                    <div className="modal-contact">
                      <a
                        href={`mailto:${selectedMember.email}`}
                        className="modal-email"
                      >
                        {selectedMember.email}
                      </a>
                    </div>
                  </div>

                  {/* Member Details Section */}
                  <div className="modal-details">
                    <h2 className="modal-name">
                      {selectedMember.name}
                    </h2>

                    {selectedMember.intro && (
                      <p className="modal-intro">
                        {selectedMember.intro}
                      </p>
                    )}

                    {/* CV Sections */}
                    {selectedMember.cvSections.map((section, index) => (
                      <div key={index} className="cv-section">
                        <h3 className="cv-section-title">
                          {section.title}
                        </h3>
                        <ul className="cv-section-list">
                          {section.items.map((item, itemIndex) => (
                            <li key={itemIndex}>
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

      <style jsx>{`
        .team-container {
          max-width: 80rem;
          margin: 0 auto;
          padding: 2rem 1rem;
        }

        .team-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 0.75rem;
        }

        .team-member-wrapper {
          opacity: 0;
        }

        .team-member-card {
          background: #ffffff;
          border: 1px solid #e0e0e0;
          overflow: hidden;
          transition: all 0.4s ease;
          cursor: pointer;
          position: relative;
          border-radius: 4px;
        }

        .team-member-card:hover {
          transform: translateY(-5px);
          border-color: #2e0d50;
          box-shadow: 0 10px 30px rgba(46, 13, 80, 0.2);
        }

        .member-image-container {
          position: relative;
          width: 100%;
          padding-top: 100%;
          overflow: hidden;
          background: linear-gradient(135deg, #2e0d50, #2e0d50);
        }

        .member-image {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
          background: #2e0d50;
        }

        .member-initials {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 2rem;
          font-weight: 300;
          color: rgba(255, 255, 255, 0.9);
          font-family: Georgia, serif;
          background: linear-gradient(135deg, #2e0d50, #2e0d50);
        }

        .member-info {
          padding: 0.75rem;
          text-align: center;
        }

        .member-name {
          font-size: 0.875rem;
          font-weight: 400;
          letter-spacing: 0.5px;
          margin-bottom: 0;
          color: #333;
          line-height: 1.2;
        }

        .modal {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: rgba(0, 0, 0, 0.9);
          display: flex;
          align-items: flex-start;
          justify-content: center;
          z-index: 2000;
          opacity: 0;
          visibility: hidden;
          transition: opacity 0.3s ease, visibility 0.3s ease;
          overflow-y: auto;
        }

        .modal.open {
          opacity: 1;
          visibility: visible;
        }

        .modal-content {
          background: #ffffff;
          border: 1px solid #e0e0e0;
          width: 100%;
          max-width: 100%;
          height: 100vh;
          overflow-y: auto;
          position: relative;
          transform: translateY(20px);
          transition: transform 0.3s ease;
        }

        .modal.open .modal-content {
          transform: translateY(0);
        }

        .modal-close {
          position: fixed;
          top: 1rem;
          right: 1rem;
          width: 40px;
          height: 40px;
          background: rgba(0, 0, 0, 0.1);
          border: none;
          cursor: pointer;
          transition: all 0.3s ease;
          z-index: 10;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .modal-close:hover {
          background: rgba(0, 0, 0, 0.2);
          transform: rotate(90deg);
        }

        .modal-close span {
          font-size: 1.5rem;
          color: #333;
        }

        .modal-body {
          padding: 3rem 1rem;
        }

        .modal-image-section {
          position: relative;
          max-width: 250px;
          margin: 0 auto 2rem;
        }

        .modal-member-image-container {
          position: relative;
          width: 100%;
          padding-top: 100%;
          overflow: hidden;
          background: linear-gradient(135deg, #2e0d50, #2e0d50);
          border-radius: 8px;
          margin-bottom: 1.5rem;
        }

        .modal-member-image {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
          background: #2e0d50;
          border-radius: 8px;
        }

        .modal-member-initials {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 3rem;
          font-weight: 300;
          color: rgba(255, 255, 255, 0.9);
          font-family: Georgia, serif;
          background: linear-gradient(135deg, #2e0d50, #2e0d50);
          border-radius: 8px;
        }

        .modal-contact {
          text-align: center;
        }

        .modal-email {
          color: #2e0d50;
          text-decoration: none;
          font-size: 0.875rem;
          display: block;
          transition: color 0.3s ease;
          word-break: break-all;
          overflowWrap: anywhere;
          hyphens: auto;
          lineHeight: 1.4;
          padding: 0 0.5rem;
        }

        .modal-email:hover {
          text-decoration: underline;
        }

        .modal-details {
          color: #333;
        }

        .modal-name {
          font-size: 1.5rem;
          font-weight: 300;
          letter-spacing: 1px;
          margin-bottom: 1rem;
          text-align: center;
        }

        .modal-intro {
          font-size: 0.875rem;
          line-height: 1.8;
          color: #555;
          margin-bottom: 2rem;
          text-align: justify;
        }

        .cv-section {
          margin-bottom: 1.5rem;
        }

        .cv-section-title {
          font-size: 1rem;
          font-weight: 400;
          margin-bottom: 0.75rem;
          color: #333;
          position: relative;
          padding-bottom: 0.5rem;
        }

        .cv-section-title::after {
          content: '';
          position: absolute;
          bottom: 0;
          left: 0;
          width: 30px;
          height: 2px;
          background: #2e0d50;
        }

        .cv-section-list {
          list-style: none;
          padding: 0;
          margin: 0;
          color: #555;
          line-height: 1.8;
        }

        .cv-section-list li {
          margin-bottom: 0.5rem;
          padding-left: 1.5rem;
          position: relative;
          font-size: 0.875rem;
        }

        .cv-section-list li::before {
          content: '▸';
          position: absolute;
          left: 0;
          color: #2e0d50;
        }

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

        /* Tablet styles */
        @media (min-width: 768px) {
          .team-container {
            padding: 3rem 2rem;
          }

          .team-grid {
            grid-template-columns: repeat(3, 1fr);
            gap: 1.5rem;
          }

          .member-initials {
            font-size: 3rem;
          }

          .member-info {
            padding: 1.5rem;
          }

          .member-name {
            font-size: 1.125rem;
          }

          .modal-content {
            max-width: 90%;
            height: auto;
            max-height: 90vh;
            border-radius: 8px;
            margin-top: 2rem;
          }

          .modal {
            align-items: center;
            padding: 2rem;
          }

          .modal-close {
            position: absolute;
            top: 2rem;
            right: 2rem;
          }

          .modal-body {
            padding: 4rem;
            display: grid;
            grid-template-columns: 300px 1fr;
            gap: 4rem;
            align-items: start;
          }

          .modal-image-section {
            position: sticky;
            top: 2rem;
            max-width: 100%;
          }

          .modal-member-image-container {
            margin-bottom: 2rem;
          }

          .modal-member-initials {
            font-size: 5rem;
          }

          .modal-email {
            font-size: 1rem;
            padding: 0;
          }

          .modal-name {
            font-size: 2rem;
            text-align: left;
          }

          .modal-intro {
            font-size: 1rem;
            margin-bottom: 2.5rem;
          }

          .cv-section {
            margin-bottom: 2rem;
          }

          .cv-section-title {
            font-size: 1.25rem;
            margin-bottom: 1rem;
            padding-bottom: 0.75rem;
          }

          .cv-section-list li {
            font-size: 0.9375rem;
          }
        }

        /* Desktop styles */
        @media (min-width: 1024px) {
          .team-container {
            padding: 5rem 2rem;
          }

          .team-grid {
            grid-template-columns: repeat(4, 1fr);
            gap: 2rem;
          }

          .member-initials {
            font-size: 4rem;
          }

          .member-info {
            padding: 2rem;
          }

          .member-name {
            font-size: 1.375rem;
            letter-spacing: 1px;
          }

          .modal-content {
            max-width: 900px;
          }

          .modal-member-initials {
            font-size: 6rem;
          }

          .modal-name {
            font-size: 2.25rem;
          }
        }

        /* Mobile hover prevention */
        @media (hover: none) {
          .team-member-card:hover {
            transform: none;
            border-color: #e0e0e0;
            box-shadow: none;
          }
        }
      `}</style>
    </>
  );
};

export default Team;