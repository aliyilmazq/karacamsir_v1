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
import styles from './Team.module.css';

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
    intro: 'Özlem Albayrak is an associate specializing in technology ventures. She is a member of the Istanbul Bar Association and holds an LL.B. from Hacettepe University. She is fluent in Turkish and English.',
    cvSections: [
      { title: 'Bars', items: ['Istanbul'] },
      { title: 'Education', items: ['Hacettepe University, LL.B.'] },
      { title: 'Areas of Expertise', items: ['Technology & Ventures'] },
      { title: 'Languages', items: ['Turkish', 'English'] }
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
    email: 'furkan@karacamsir.com',
    phone: '+90 212 123 4506',
    initials: 'FK',
    photo: FurkanImg,
    intro: 'H. Furkan Karaçam is a dual-qualified corporate lawyer. His practice focuses on cross-border transactions, international commercial contracts, and institutional advisory. He advises under Turkish law, English law, and AIFC law.',
    cvSections: [
      { title: 'Bars', items: ['Istanbul', 'England & Wales', 'Rights of Audience in AIFC Courts (Kazakhstan)'] },
      { title: 'Education', items: ['Istanbul University, LL.M in Finance Law', 'Bilkent University, LL.B.'] },
      { title: 'Areas of Expertise', items: ['Corporate & Commercial'] },
      { title: 'Languages', items: ['Turkish', 'English', 'French'] },
      { title: 'Memberships', items: ['Member of Law Society of England', 'Artificial Intelligence Policies Association Turkey Disciplinary Board'] },
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
    intro: 'Kerem Seber is Of Counsel with expertise in corporate and commercial law. He is a member of the Istanbul Bar Association and holds an LL.M. from Queen Mary University and an LL.B. from Marmara University. He is fluent in Turkish and English.',
    cvSections: [
      { title: 'Bars', items: ['Istanbul'] },
      { title: 'Education', items: ['Queen Marry University, LL.M.', 'Marmara University, LL.B.'] },
      { title: 'Areas of Expertise', items: ['Corporate & Commercial'] },
      { title: 'Languages', items: ['Turkish', 'English'] }
    ]
  },
  {
    key: 'cankat',
    name: 'Cankat Şir',
    title: 'Partner',
    email: 'cankat@karacamsir.com',
    phone: '+90 212 123 4505',
    initials: 'CŞ',
    photo: CankatImg,
    intro: 'Cankat Şir is a corporate and commercial lawyer focused on technology ventures. His practice covers startup law, venture capital transactions, data protection, and intellectual property. He advises emerging technology startups, VCs and angel investors on complex projects, corporate structuring, and fundraising strategies, from seed rounds to Series A, B, C, and IPO & exit.',
    cvSections: [
      { title: 'Bars', items: ['Istanbul'] },
      { title: 'Education', items: ['Ozyegin University, LL.B.'] },
      { title: 'Areas of Expertise', items: ['Technology & Ventures'] },
      { title: 'Languages', items: ['Turkish', 'English'] },
      { title: 'Memberships', items: [
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
    intro: 'Burcu Uman is an associate specializing in corporate and commercial law. She is a member of the Istanbul Bar Association and holds an LL.B. from Marmara University. She is fluent in Turkish and English.',
    cvSections: [
      { title: 'Bars', items: ['Istanbul'] },
      { title: 'Education', items: ['Marmara University, LL.B.'] },
      { title: 'Areas of Expertise', items: ['Corporate & Commercial'] },
      { title: 'Languages', items: ['Turkish', 'English'] }
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
    intro: 'Bianca Geangalau is an associate specializing in dispute resolution. She holds an LL.B. from Robert Gordon University and is fluent in Romanian, English, and Greek.',
    cvSections: [
      { title: 'Education', items: ['Robert Gordon University, LL.B.'] },
      { title: 'Areas of Expertise', items: ['Dispute Resolution'] },
      { title: 'Languages', items: ['Romanian', 'English', 'Greek'] }
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
      
      <div className={styles.pageContainer}>
        <div className={styles.teamContainer}>
          <div className={styles.teamGrid}>
            {teamData.map((member, index) => (
              <div
                key={member.key}
                className={styles.teamMember}
                style={{
                  animationDelay: `${index * 0.1}s`
                }}
              >
                <div
                  onClick={() => openModal(member)}
                  className={styles.memberCard}
                >
                  <div className={styles.memberImageContainer}>
                    {member.photo ? (
                      <img
                        src={member.photo}
                        alt={member.name}
                        className={styles.memberImage}
                      />
                    ) : (
                      <div className={styles.memberInitials}>
                        {member.initials}
                      </div>
                    )}
                  </div>
                  <div className={styles.memberInfo}>
                    <h3 className={styles.memberName}>
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
          <div className={`${styles.modal} ${isModalOpen ? styles.modalOpen : ''}`}>
            <div
              ref={modalRef}
              className={styles.modalContent}
            >
              <button
                onClick={closeModal}
                className={styles.modalClose}
              >
                <span>×</span>
              </button>

              {selectedMember && (
                <div className={styles.modalBody}>
                  <div className={styles.modalImageSection}>
                    <div className={styles.modalMemberImageContainer}>
                      {selectedMember.photo ? (
                        <img
                          src={selectedMember.photo}
                          alt={selectedMember.name}
                          className={styles.modalMemberImage}
                        />
                      ) : (
                        <div className={styles.modalMemberInitials}>
                          {selectedMember.initials}
                        </div>
                      )}
                    </div>
                    {(selectedMember.email === 'cankat@karacamsir.com' || 
                     selectedMember.email === 'furkan@karacamsir.com') && (
                      <div className={styles.modalContact}>
                        <a
                          href={`mailto:${selectedMember.email}`}
                          className={styles.modalEmail}
                        >
                          {selectedMember.email}
                        </a>
                      </div>
                    )}
                  </div>

                  <div className={styles.modalDetails}>
                    <h2 className={styles.modalName}>
                      {selectedMember.name}
                    </h2>

                    {selectedMember.intro && (
                      <p className={styles.modalIntro}>
                        {selectedMember.intro}
                      </p>
                    )}

                    {selectedMember.cvSections.map((section, index) => (
                      <div key={index} className={styles.cvSection}>
                        <h3 className={styles.cvSectionTitle}>
                          {section.title}
                        </h3>
                        <ul className={styles.cvSectionList}>
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
    </>
  );
};

export default Team;