import React, { useState, useRef, useEffect } from 'react';
import styles from './Team.module.css';
import PageHeaderSection from "../components/PageHeaderSection/PageHeaderSection";
import istanbulImage from "../assets/istanbul_1.jpg";

// Team member data (React objesi olarak)
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
    key: 'ayse',
    name: 'Ayşe Aydın',
    title: 'Avukat',
    email: 'ayse.aydin.av.tr',
    phone: '+90 212 123 4567',
    initials: 'AA',
    education: [
      'İstanbul Üniversitesi Hukuk Fakültesi (2010)',
      'University of London, LLM in Commercial Law (2012)'
    ],
    specializations: [
      'Ticaret Hukuku',
      'Şirketler Hukuku',
      'Birleşme ve Devralmalar',
      'Sermaye Piyasası Hukuku'
    ],
    languages: ['Türkçe', 'İngilizce', 'Almanca'],
    bar: 'İstanbul Barosu (2011)'
  },
  {
    key: 'ali',
    name: 'Ali Yılmaz',
    title: 'Kıdemli Avukat',
    email: 'ali.yilmaz.av.tr',
    phone: '+90 212 123 4568',
    initials: 'AY',
    bio: 'Ali Yılmaz, 15 yılı aşkın deneyimi ile özellikle teknoloji hukuku ve fikri mülkiyet alanlarında uzmanlaşmıştır. Türkiye\'nin önde gelen teknoloji şirketlerine danışmanlık hizmeti vermekte ve startup ekosisteminde aktif rol almaktadır. Blockchain teknolojileri ve kripto varlıklar konusundaki uzmanlığı ile sektörde tanınmaktadır.',
    education: [
      'Ankara Üniversitesi Hukuk Fakültesi (2005)',
      'Harvard Law School, LLM in Law and Technology (2008)'
    ],
    specializations: [
      'Teknoloji Hukuku',
      'Fikri Mülkiyet Hukuku',
      'Veri Koruma Hukuku',
      'Kripto Varlıklar ve Blockchain'
    ],
    languages: ['Türkçe', 'İngilizce'],
    bar: 'İstanbul Barosu (2006)'
  },
  {
    key: 'esin',
    name: 'Esin Başaran',
    title: 'Avukat',
    email: 'esin.basaran.av.tr',
    phone: '+90 212 123 4569',
    initials: 'EB',
    education: [
      'Galatasaray Üniversitesi Hukuk Fakültesi (2013)',
      'Université Paris 1 Panthéon-Sorbonne, Master 2 Droit des Affaires (2015)'
    ],
    specializations: [
      'Gayrimenkul Hukuku',
      'İnşaat Hukuku',
      'Kira Hukuku',
      'Kat Mülkiyeti Hukuku'
    ],
    languages: ['Türkçe', 'Fransızca', 'İngilizce'],
    bar: 'İstanbul Barosu (2014)'
  },
  {
    key: 'mehmet',
    name: 'Mehmet Çelik',
    title: 'Avukat',
    email: 'mehmet.celik.av.tr',
    phone: '+90 212 123 4570',
    initials: 'MC',
    education: [
      'Marmara Üniversitesi Hukuk Fakültesi (2011)',
      "King's College London, LLM in International Business Law (2013)"
    ],
    specializations: [
      'Uluslararası Ticaret Hukuku',
      'Denizcilik Hukuku',
      'Sigorta Hukuku',
      'Tahkim'
    ],
    languages: ['Türkçe', 'İngilizce', 'Arapça'],
    bar: 'İstanbul Barosu (2012)'
  },
  {
    key: 'selin',
    name: 'Selin Demir',
    title: 'Avukat',
    email: 'selin.demir.av.tr',
    phone: '+90 212 123 4571',
    initials: 'SD',
    education: [
      'Bilkent Üniversitesi Hukuk Fakültesi (2014)',
      'Georgetown University Law Center, LLM in Securities and Financial Regulation (2016)'
    ],
    specializations: [
      'Bankacılık Hukuku',
      'Sermaye Piyasası Hukuku',
      'Proje Finansmanı',
      'Yapılandırılmış Finansman'
    ],
    languages: ['Türkçe', 'İngilizce'],
    bar: 'Ankara Barosu (2015)'
  },
  {
    key: 'furkan',
    name: 'Furkan Karaçam',
    title: 'Kurucu Ortak',
    email: 'furkan.karacam.av.tr',
    phone: '+90 212 123 4567',
    initials: 'FK',
    bio: 'Furkan Karaçam, 20 yılı aşkın mesleki deneyimi ile Türkiye\'nin en saygın hukuk profesyonellerinden biridir. Kariyeri boyunca yüzlerce milyon dolarlık birleşme ve devralma işlemlerine danışmanlık yapmış, uluslararası tahkim davalarında Türk ve yabancı şirketleri temsil etmiştir. Karaçam & Şir\'in kurucu ortağı olarak, firmanın stratejik yönlendirmesinden ve kurumsal müvekkillerin üst düzey hukuki ihtiyaçlarından sorumludur.',
    education: [
      'İstanbul Üniversitesi Hukuk Fakültesi (2000)',
      'University of Cambridge, LLM in Corporate Law (2002)',
      'New York Bar Exam (2003)'
    ],
    specializations: [
      'Birleşme ve Devralmalar',
      'Kurumsal Finansman',
      'Uluslararası Tahkim',
      'Enerji ve Altyapı Projeleri'
    ],
    languages: ['Türkçe', 'İngilizce', 'Almanca'],
    bar: 'İstanbul Barosu (2001), New York Bar (2003)'
  },
  {
    key: 'ozan',
    name: 'Ozan Kaya',
    title: 'Avukat',
    email: 'ozan.kaya.av.tr',
    phone: '+90 212 123 4572',
    initials: 'OK',
    education: [
      'Koç Üniversitesi Hukuk Fakültesi (2015)',
      'Columbia Law School, LLM in Corporate Governance (2017)'
    ],
    specializations: [
      'Start-up Hukuku',
      'Risk Sermayesi',
      'Teknoloji Transferi',
      'Lisans Sözleşmeleri'
    ],
    languages: ['Türkçe', 'İngilizce', 'İspanyolca'],
    bar: 'İstanbul Barosu (2016)'
  },
  {
    key: 'cankat',
    name: 'Cankat Şir',
    title: 'Kurucu Ortak',
    email: 'cankat.sir.av.tr',
    phone: '+90 212 123 4573',
    initials: 'CŞ',
    bio: 'Cankat Şir, özellikle fikri mülkiyet hukuku ve teknoloji hukuku alanlarında Türkiye\'nin önde gelen uzmanlarından biridir. 18 yıllık kariyeri boyunca, Fortune 500 şirketlerinden yenilikçi startup\'lara kadar geniş bir müvekkil portföyüne hizmet vermiştir. Yapay zeka, blockchain ve biyoteknoloji gibi yeni nesil teknolojilerin hukuki boyutları konusundaki öncü çalışmaları ile tanınmaktadır.',
    education: [
      'Boğaziçi Üniversitesi Hukuk Fakültesi (2002)',
      'Stanford Law School, LLM in Law, Science & Technology (2004)',
      'WIPO Worldwide Academy, Advanced Course on IP (2005)'
    ],
    specializations: [
      'Fikri Mülkiyet Hukuku',
      'Teknoloji Transferi',
      'Biyoteknoloji Hukuku',
      'Yapay Zeka ve Veri Hukuku'
    ],
    languages: ['Türkçe', 'İngilizce', 'Fransızca'],
    bar: 'İstanbul Barosu (2003)'
  },
  {
    key: 'zeynep',
    name: 'Zeynep Yılmaz',
    title: 'Avukat',
    email: 'zeynep.yilmaz.av.tr',
    phone: '+90 212 123 4574',
    initials: 'ZY',
    education: [
      'Yeditepe Üniversitesi Hukuk Fakültesi (2016)',
      'Leiden University, Advanced LLM in European and International Business Law (2018)'
    ],
    specializations: [
      'Rekabet Hukuku',
      'Regülasyon ve Uyum',
      'Tüketici Hukuku',
      'E-Ticaret Hukuku'
    ],
    languages: ['Türkçe', 'İngilizce', 'Hollandaca'],
    bar: 'İstanbul Barosu (2017)'
  }
];

const Team: React.FC = () => {
  const [modalMember, setModalMember] = useState<TeamMember | null>(null);
  const modalRef = useRef<HTMLDivElement | null>(null);

  // ESC ile modal kapama
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setModalMember(null);
    };
    window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, []);

  // Modal dışına tıklayınca kapama
  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      if (modalRef.current && e.target === modalRef.current) setModalMember(null);
    };
    if (modalMember) document.addEventListener('mousedown', handleClick);
    return () => document.removeEventListener('mousedown', handleClick);
  }, [modalMember]);

  // Animasyon için Intersection Observer
  useEffect(() => {
    const members = document.querySelectorAll(`.${styles.teamMember}`);
    const observer = new window.IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          (entry.target as HTMLElement).style.animationPlayState = 'running';
        }
      });
    }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });
    members.forEach(member => {
      (member as HTMLElement).style.animationPlayState = 'paused';
      observer.observe(member);
    });
    return () => observer.disconnect();
  }, []);

  // Modal açıldığında debug log
  useEffect(() => {
    if (modalMember) {
      console.log('Modal open for:', modalMember);
    }
  }, [modalMember]);

  // Öncelikli üyeler anahtarları
  const priorityKeys = ['furkan', 'cankat', 'ali'];
  // Öncelikli üyeler başta olacak şekilde sıralama
  const sortedTeamData = [
    ...priorityKeys.map(key => teamData.find(member => member.key === key)).filter(Boolean),
    ...teamData.filter(member => !priorityKeys.includes(member.key)),
  ];

  return (
    <>
      <PageHeaderSection
        title="Team"
        breadcrumb="Home / Team"
        backgroundImage={istanbulImage}
      />
      <div className={styles.backgroundWrapper}>
        <div className={styles.bgPattern}></div>
        <div className={styles.mainContent}>
          <div className={styles.pageHeader}>
            <p className={styles.pageSubtitle}>Excellence in Legal Practice</p>
          </div>
          <section className={styles.teamSection}>
            <div className={styles.teamGrid}>
              {sortedTeamData.map((member, idx) => {
                if (!member) return null;
                return (
                  <div
                    className={styles.teamMember}
                    style={{ '--delay': `${0.1 + idx * 0.1}s` } as React.CSSProperties}
                    key={member.key}
                  >
                    <div
                      className={styles.memberCard}
                      onClick={() => {
                        console.log('Clicked member:', member);
                        setModalMember(member);
                      }}
                      tabIndex={0}
                      role="button"
                      aria-label={member.name}
                      onKeyDown={e => { if (e.key === 'Enter') setModalMember(member); }}
                    >
                      <div className={styles.memberImageContainer}>
                        <div className={styles.placeholderImage}>{member.initials}</div>
                      </div>
                      <div className={styles.memberInfo}>
                        <h3 className={styles.memberName}>{member.name}</h3>
                        <a
                          href={`mailto:${member.email}`}
                          className={styles.memberEmail}
                          onClick={e => e.stopPropagation()}
                        >
                          {member.email}
                        </a>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </section>
        </div>
      </div>
      {/* Modal */}
      {modalMember && (
        <div
          className={styles.modal ? styles.modal + ' show' : ''}
          ref={modalRef}
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100vw',
            height: '100vh',
            background: 'rgba(0,0,0,0.95)',
            zIndex: 99999,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            opacity: 1,
            padding: 40,
            overflowY: 'auto',
          }}
        >
          {!styles.modal && (
            <div style={{color: 'red', background: '#fff', padding: 16, zIndex: 3000}}>
              CSS modülü yüklenemedi! Modal fallback modda gösteriliyor.
            </div>
          )}
          <div className={styles.modalContent || ''} style={!styles.modalContent ? {background: '#222', color: '#fff', padding: 40, borderRadius: 8, maxWidth: 900, width: '100%'} : undefined}>
            <button className={styles.modalClose || ''} style={!styles.modalClose ? {position: 'absolute', top: 30, right: 30, width: 40, height: 40, background: 'rgba(255,255,255,0.1)', border: 'none', cursor: 'pointer', color: '#fff', fontSize: 32} : undefined} onClick={() => setModalMember(null)} aria-label="Close modal">{!styles.modalClose && '×'}</button>
            <div className={styles.modalBody || ''} style={!styles.modalBody ? {display: 'flex', flexDirection: 'row', gap: 40, padding: 40} : undefined}>
              <div className={styles.modalImageSection || ''}>
                <div className={styles.modalImageContainer || ''} style={!styles.modalImageContainer ? {width: 300, height: 400, background: '#444', marginBottom: 30, display: 'flex', alignItems: 'center', justifyContent: 'center'} : undefined}>
                  <div className={styles.modalPlaceholderImage || ''} style={!styles.modalPlaceholderImage ? {fontSize: 120, color: '#fff'} : undefined}>{modalMember.initials}</div>
                </div>
                <div className={styles.modalContactInfo || ''}>
                  <a href={`mailto:${modalMember.email}`} className={styles.modalEmail || ''} style={!styles.modalEmail ? {color: '#e1bee7', fontSize: 16, display: 'block', marginBottom: 10} : undefined}>{modalMember.email}</a>
                  <p className={styles.modalPhone || ''} style={!styles.modalPhone ? {color: '#fff', fontSize: 16} : undefined}>{modalMember.phone}</p>
                </div>
              </div>
              <div className={styles.modalInfoSection || ''}>
                <h2 className={styles.modalName || ''} style={!styles.modalName ? {fontSize: 36, color: '#fff'} : undefined}>{modalMember.name}</h2>
                <p className={styles.modalTitle || ''} style={!styles.modalTitle ? {fontSize: 18, color: '#e1bee7'} : undefined}>{modalMember.title}</p>
                {(modalMember.key === 'cankat' || modalMember.key === 'furkan' || modalMember.key === 'ali') && modalMember.bio && (
                  <p className={styles.modalBio || ''} style={!styles.modalBio ? {fontSize: 16, color: '#fff', marginBottom: 40} : undefined}>{modalMember.bio}</p>
                )}
                <div className={styles.modalSection || ''}>
                  <h3 className={styles.modalSectionTitle || ''}>Eğitim</h3>
                  <ul className={styles.modalList || ''}>
                    {modalMember.education.map((edu, i) => <li key={i}>{edu}</li>)}
                  </ul>
                </div>
                <div className={styles.modalSection || ''}>
                  <h3 className={styles.modalSectionTitle || ''}>Uzmanlık Alanları</h3>
                  <ul className={styles.modalList || ''}>
                    {modalMember.specializations.map((spec, i) => <li key={i}>{spec}</li>)}
                  </ul>
                </div>
                <div className={styles.modalSection || ''}>
                  <h3 className={styles.modalSectionTitle || ''}>Diller</h3>
                  <ul className={styles.modalList || ''}>
                    {modalMember.languages.map((lang, i) => <li key={i}>{lang}</li>)}
                  </ul>
                </div>
                <div className={styles.modalSection || ''}>
                  <h3 className={styles.modalSectionTitle || ''}>Baro Kaydı</h3>
                  <ul className={styles.modalList || ''}>
                    <li>{modalMember.bar}</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Team;