import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import './ContactUs.css';
import PageHeaderSection from "../components/PageHeaderSection/PageHeaderSection";
import istanbulImage from "../assets/istanbul_1.jpg";

const ContactUs: React.FC = () => {
  const { t } = useTranslation();
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    company: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState('');

  const offices = [
    {
      city: "Istanbul",
      address: ["Levent, Büyükdere Caddesi No: 185", "Kanyon Ofis Bloğu Kat: 18", "34394 Şişli, Istanbul, Turkey"],
      phone: "+90 212 123 4567"
    },
    {
      city: "Astana",
      address: ["Mangilik El Avenue 55/20", "Esil District, EXPO Business Center", "Z05T8F6 Astana, Kazakhstan"],
      phone: "+7 7172 123 456"
    },
    {
      city: "London",
      address: ["30 St Mary Axe", "London EC3A 8BF", "United Kingdom"],
      phone: "+44 20 7123 4567"
    },
    {
      city: "New York",
      address: ["One World Trade Center", "285 Fulton Street, Suite 8500", "New York, NY 10007, United States"],
      phone: "+1 212 123 4567"
    }
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitMessage('');

    // Simulate API call
    setTimeout(() => {
      setSubmitMessage('Message Sent Successfully');
      setIsSubmitting(false);
      
      // Reset form after 3 seconds
      setTimeout(() => {
        setFormData({
          firstName: '',
          lastName: '',
          email: '',
          phone: '',
          company: '',
          subject: '',
          message: ''
        });
        setSubmitMessage('');
      }, 3000);
    }, 2000);
  };

  return (
    <>
      <PageHeaderSection
        title="Çalışma Alanlarımız"
        breadcrumb="Ana Sayfa / Hizmetlerimiz"
        backgroundImage={istanbulImage}
      />
      <div className="contact-page">
        {/* Background */}
        <div className="background-wrapper">
          <div className="bg-pattern"></div>
        </div>

        {/* Main Content */}
        <div className="main-content">
          {/* Contact Content */}
          <section className="contact-container">
            {/* Contact Information */}
            <div className="contact-info">
              <div className="info-section">
                <h2 className="info-title">{t('contact.ourOffices')}</h2>
                
                {offices.map((office, index) => (
                  <div key={index} className="office-card">
                    <h3 className="office-name">{office.city}</h3>
                    <div className="office-details">
                      {office.address.map((line, i) => (
                        <p key={i}>{line}</p>
                      ))}
                      <p style={{ marginTop: '15px' }}>
                        <a href={`tel:${office.phone}`}>{office.phone}</a>
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Contact Form */}
            <div className="contact-container" style={{background: '#fff', borderRadius: 0, boxShadow: '0 10px 30px rgba(0,0,0,0.2)', maxWidth: 600, margin: '0 auto', padding: 40, animation: 'slideUp 0.6s ease-out'}}>
              <div className="form-header" style={{textAlign: 'center', marginBottom: 35}}>
                <h2 style={{color: '#8B5CF6', fontSize: 28, fontWeight: 700, marginBottom: 10}}>Bize Ulaşın</h2>
                <p style={{color: '#666', fontSize: 15, lineHeight: 1.6}}>Formu doldurun, 24 saat içinde size dönüş yapalım.</p>
              </div>
              <form id="contactForm" onSubmit={handleSubmit}>
                <div className="form-row" style={{display: 'flex', gap: 20, marginBottom: 20}}>
                  <div className="form-group" style={{flex: 1, marginBottom: 20}}>
                    <label htmlFor="firstName" style={{display: 'block', color: '#444', fontSize: 14, fontWeight: 600, marginBottom: 8, letterSpacing: 0.3}}>Ad *</label>
                    <input type="text" id="firstName" name="firstName" className="form-control" placeholder="Adınız" value={formData.firstName} onChange={handleInputChange} required style={{width: '100%', padding: '12px 16px', border: '2px solid #e1e4e8', borderRadius: 0, fontSize: 15, color: '#333', backgroundColor: '#f8f9fa', transition: 'all 0.3s', fontFamily: 'inherit'}} />
                  </div>
                  <div className="form-group" style={{flex: 1, marginBottom: 20}}>
                    <label htmlFor="lastName" style={{display: 'block', color: '#444', fontSize: 14, fontWeight: 600, marginBottom: 8, letterSpacing: 0.3}}>Soyad *</label>
                    <input type="text" id="lastName" name="lastName" className="form-control" placeholder="Soyadınız" value={formData.lastName} onChange={handleInputChange} required style={{width: '100%', padding: '12px 16px', border: '2px solid #e1e4e8', borderRadius: 0, fontSize: 15, color: '#333', backgroundColor: '#f8f9fa', transition: 'all 0.3s', fontFamily: 'inherit'}} />
                  </div>
                </div>
                <div className="form-row" style={{display: 'flex', gap: 20, marginBottom: 20}}>
                  <div className="form-group" style={{flex: 1, marginBottom: 20}}>
                    <label htmlFor="email" style={{display: 'block', color: '#444', fontSize: 14, fontWeight: 600, marginBottom: 8, letterSpacing: 0.3}}>E-posta *</label>
                    <input type="email" id="email" name="email" className="form-control" placeholder="ornek@email.com" value={formData.email} onChange={handleInputChange} required style={{width: '100%', padding: '12px 16px', border: '2px solid #e1e4e8', borderRadius: 0, fontSize: 15, color: '#333', backgroundColor: '#f8f9fa', transition: 'all 0.3s', fontFamily: 'inherit'}} />
                  </div>
                  <div className="form-group" style={{flex: 1, marginBottom: 20}}>
                    <label htmlFor="phone" style={{display: 'block', color: '#444', fontSize: 14, fontWeight: 600, marginBottom: 8, letterSpacing: 0.3}}>Telefon</label>
                    <input type="tel" id="phone" name="phone" className="form-control" placeholder="+90 555 123 4567" value={formData.phone} onChange={handleInputChange} style={{width: '100%', padding: '12px 16px', border: '2px solid #e1e4e8', borderRadius: 0, fontSize: 15, color: '#333', backgroundColor: '#f8f9fa', transition: 'all 0.3s', fontFamily: 'inherit'}} />
                  </div>
                </div>
                <div className="form-group" style={{marginBottom: 20}}>
                  <label htmlFor="company" style={{display: 'block', color: '#444', fontSize: 14, fontWeight: 600, marginBottom: 8, letterSpacing: 0.3}}>Şirket / Kurum</label>
                  <input type="text" id="company" name="company" className="form-control" placeholder="Şirket adınız" value={formData.company} onChange={handleInputChange} style={{width: '100%', padding: '12px 16px', border: '2px solid #e1e4e8', borderRadius: 0, fontSize: 15, color: '#333', backgroundColor: '#f8f9fa', transition: 'all 0.3s', fontFamily: 'inherit'}} />
                </div>
                <div className="form-group" style={{marginBottom: 20}}>
                  <label htmlFor="subject" style={{display: 'block', color: '#444', fontSize: 14, fontWeight: 600, marginBottom: 8, letterSpacing: 0.3}}>Konu *</label>
                  <select id="subject" name="subject" className="form-control" value={formData.subject} onChange={handleInputChange} required style={{width: '100%', padding: '12px 16px', border: '2px solid #e1e4e8', borderRadius: 0, fontSize: 15, color: '#333', backgroundColor: '#f8f9fa', transition: 'all 0.3s', fontFamily: 'inherit', cursor: 'pointer', appearance: 'none', backgroundImage: "url('data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' fill=\'none\' viewBox=\'0 0 24 24\' stroke=\'%23667eea\'%3E%3Cpath stroke-linecap=\'round\' stroke-linejoin=\'round\' stroke-width=\'2\' d=\'M19 9l-7 7-7-7\'%3E%3C/path%3E%3C/svg%3E')", backgroundRepeat: 'no-repeat', backgroundPosition: 'right 12px center', backgroundSize: 20, paddingRight: 40}}>
                    <option value="">Bir konu seçin</option>
                    <option value="general">Genel Bilgi</option>
                    <option value="support">Teknik Destek</option>
                    <option value="sales">Satış</option>
                    <option value="partnership">İş Ortaklığı</option>
                    <option value="other">Diğer</option>
                  </select>
                </div>
                <div className="form-group" style={{marginBottom: 20}}>
                  <label htmlFor="message" style={{display: 'block', color: '#444', fontSize: 14, fontWeight: 600, marginBottom: 8, letterSpacing: 0.3}}>Mesajınız *</label>
                  <textarea id="message" name="message" className="form-control" placeholder="Mesajınızı buraya yazın..." value={formData.message} onChange={handleInputChange} required style={{width: '100%', padding: '12px 16px', border: '2px solid #e1e4e8', borderRadius: 0, fontSize: 15, color: '#333', backgroundColor: '#f8f9fa', transition: 'all 0.3s', fontFamily: 'inherit', resize: 'vertical', minHeight: 120, lineHeight: 1.5}} />
                </div>
                <div className="checkbox-group" style={{display: 'flex', alignItems: 'flex-start', marginBottom: 25, gap: 10}}>
                  <input type="checkbox" id="privacy" required style={{marginTop: 5, width: 18, height: 18, cursor: 'pointer', accentColor: '#667eea'}} />
                  <label htmlFor="privacy" style={{color: '#555', fontSize: 14, lineHeight: 1.5, cursor: 'pointer'}}>
                    <a href="#" style={{color: '#667eea', textDecoration: 'none', fontWeight: 600, transition: 'color 0.3s'}}>Gizlilik Politikası</a> ve <a href="#" style={{color: '#667eea', textDecoration: 'none', fontWeight: 600, transition: 'color 0.3s'}}>Kullanım Şartları</a>'nı okudum, kabul ediyorum.
                  </label>
                </div>
                <button type="submit" className="submit-btn" disabled={isSubmitting} style={{width: '100%', padding: '14px 30px', background: 'linear-gradient(135deg, #667eea, #764ba2)', color: 'white', border: 'none', borderRadius: 10, fontSize: 16, fontWeight: 600, letterSpacing: 0.5, cursor: 'pointer', transition: 'all 0.3s', textTransform: 'uppercase', boxShadow: '0 4px 15px rgba(102,126,234,0.3)', opacity: isSubmitting ? 0.7 : 1}}>
                  {isSubmitting ? 'Gönderiliyor...' : submitMessage ? 'Başarıyla Gönderildi ✓' : 'Mesaj Gönder'}
                </button>
              </form>
            </div>
          </section>
        </div>
      </div>
    </>
  );
};

export default ContactUs;