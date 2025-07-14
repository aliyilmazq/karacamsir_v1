import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import './ContactLawFirm.css';

const ContactLawFirm: React.FC = () => {
  const { t } = useTranslation();
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    company: '',
    practiceArea: '',
    urgency: '',
    preferredContact: '',
    preferredTime: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState('');

  const offices = [
    {
      city: "İstanbul - Merkez Ofis",
      address: ["Levent, Büyükdere Caddesi No: 185", "Kanyon Ofis Bloğu Kat: 18", "34394 Şişli, İstanbul"],
      phone: "+90 212 123 4567",
      fax: "+90 212 123 4568",
      hours: "Pazartesi - Cuma: 09:00 - 18:00"
    },
    {
      city: "Ankara Ofisi",
      address: ["Çankaya, Kızılırmak Mahallesi", "Ufuk Üniversitesi Caddesi No: 12", "06550 Ankara"],
      phone: "+90 312 123 4567",
      fax: "+90 312 123 4568",
      hours: "Pazartesi - Cuma: 09:00 - 18:00"
    }
  ];

  const practiceAreas = [
    "Kurumsal Hukuk",
    "Birleşme ve Devralmalar",
    "Fikri Mülkiyet Hukuku",
    "Gayrimenkul Hukuku",
    "İş ve Sosyal Güvenlik Hukuku",
    "Ticaret Hukuku",
    "Vergi Hukuku",
    "Uyuşmazlık Çözümü",
    "Diğer"
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

    setTimeout(() => {
      setSubmitMessage('Mesajınız başarıyla gönderildi. En kısa sürede size dönüş yapacağız.');
      setIsSubmitting(false);
      
      setTimeout(() => {
        setFormData({
          firstName: '',
          lastName: '',
          email: '',
          phone: '',
          company: '',
          practiceArea: '',
          urgency: '',
          preferredContact: '',
          preferredTime: '',
          message: ''
        });
        setSubmitMessage('');
      }, 5000);
    }, 2000);
  };

  return (
    <div className="contact-law-page">
      {/* Hero Section */}
      <section className="law-hero">
        <div className="hero-overlay"></div>
        <div className="hero-content">
          <h1 className="hero-title">Bizimle İletişime Geçin</h1>
          <p className="hero-subtitle">
            Hukuki ihtiyaçlarınız için yanınızdayız. Size en iyi hizmeti sunmak için buradayız.
          </p>
        </div>
      </section>

      {/* Quick Contact Bar */}
      <section className="quick-contact-bar">
        <div className="quick-contact-container">
          <div className="quick-contact-item">
            <span className="quick-icon">📞</span>
            <div className="quick-info">
              <span className="quick-label">Acil Danışmanlık Hattı</span>
              <a href="tel:+902121234567" className="quick-value">+90 212 123 4567</a>
            </div>
          </div>
          <div className="quick-contact-item">
            <span className="quick-icon">📧</span>
            <div className="quick-info">
              <span className="quick-label">E-posta</span>
              <a href="mailto:info@karacamsir.com" className="quick-value">info@karacamsir.com</a>
            </div>
          </div>
          <div className="quick-contact-item">
            <span className="quick-icon">⏰</span>
            <div className="quick-info">
              <span className="quick-label">Çalışma Saatleri</span>
              <span className="quick-value">Pazartesi - Cuma: 09:00 - 18:00</span>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="contact-main">
        <div className="contact-container">
          <div className="contact-grid">
            {/* Left Side - Contact Form */}
            <div className="contact-form-section">
              <div className="form-header">
                <h2 className="form-title">Ücretsiz Danışmanlık Formu</h2>
                <p className="form-subtitle">
                  Formu doldurarak ücretsiz ön danışmanlık talebinde bulunabilirsiniz. 
                  Uzman ekibimiz en kısa sürede sizinle iletişime geçecektir.
                </p>
              </div>

              <form className="law-contact-form" onSubmit={handleSubmit}>
                <div className="form-row">
                  <div className="form-group">
                    <label className="form-label-static" htmlFor="firstName">Ad *</label>
                    <input
                      type="text"
                      className="form-input"
                      id="firstName"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label className="form-label-static" htmlFor="lastName">Soyad *</label>
                    <input
                      type="text"
                      className="form-input"
                      id="lastName"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                </div>

                <div className="form-row">
                  <div className="form-group">
                    <label className="form-label-static" htmlFor="email">E-posta *</label>
                    <input
                      type="email"
                      className="form-input"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label className="form-label-static" htmlFor="phone">Telefon *</label>
                    <input
                      type="tel"
                      className="form-input"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                </div>

                <div className="form-group full-width">
                  <label className="form-label-static" htmlFor="company">Firma/Kurum</label>
                  <input
                    type="text"
                    className="form-input"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleInputChange}
                  />
                </div>

                <div className="form-row">
                  <div className="form-group">
                    <label className="form-label-static" htmlFor="practiceArea">Hukuki Konu *</label>
                    <select
                      className="form-select"
                      id="practiceArea"
                      name="practiceArea"
                      value={formData.practiceArea}
                      onChange={handleInputChange}
                      required
                    >
                      <option value="">Seçiniz</option>
                      {practiceAreas.map((area, index) => (
                        <option key={index} value={area}>{area}</option>
                      ))}
                    </select>
                  </div>
                  <div className="form-group">
                    <label className="form-label-static" htmlFor="urgency">Aciliyet Durumu *</label>
                    <select
                      className="form-select"
                      id="urgency"
                      name="urgency"
                      value={formData.urgency}
                      onChange={handleInputChange}
                      required
                    >
                      <option value="">Seçiniz</option>
                      <option value="urgent">Acil (24 saat içinde)</option>
                      <option value="normal">Normal (2-3 gün içinde)</option>
                      <option value="flexible">Esnek</option>
                    </select>
                  </div>
                </div>

                <div className="form-row">
                  <div className="form-group">
                    <label className="form-label-static" htmlFor="preferredContact">Tercih Edilen İletişim</label>
                    <select
                      className="form-select"
                      id="preferredContact"
                      name="preferredContact"
                      value={formData.preferredContact}
                      onChange={handleInputChange}
                    >
                      <option value="">Seçiniz</option>
                      <option value="phone">Telefon</option>
                      <option value="email">E-posta</option>
                      <option value="whatsapp">WhatsApp</option>
                    </select>
                  </div>
                  <div className="form-group">
                    <label className="form-label-static" htmlFor="preferredTime">Uygun Zaman</label>
                    <select
                      className="form-select"
                      id="preferredTime"
                      name="preferredTime"
                      value={formData.preferredTime}
                      onChange={handleInputChange}
                    >
                      <option value="">Seçiniz</option>
                      <option value="morning">Sabah (09:00-12:00)</option>
                      <option value="afternoon">Öğleden Sonra (12:00-15:00)</option>
                      <option value="evening">Akşam (15:00-18:00)</option>
                    </select>
                  </div>
                </div>

                <div className="form-group full-width">
                  <label className="form-label-static" htmlFor="message">Konu Hakkında Detaylar *</label>
                  <textarea
                    className="form-textarea"
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    rows={6}
                    placeholder="Lütfen hukuki konunuzla ilgili detayları paylaşın..."
                    required
                  ></textarea>
                </div>

                <div className="form-footer">
                  <button 
                    type="submit" 
                    className="submit-btn"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? 'Gönderiliyor...' : 'Danışmanlık Talebi Gönder'}
                  </button>
                  {submitMessage && (
                    <div className="submit-message success">
                      {submitMessage}
                    </div>
                  )}
                  <p className="privacy-text">
                    Gönder butonuna tıklayarak <a href="/privacy">Gizlilik Politikamızı</a> ve{' '}
                    <a href="/terms">Kullanım Koşullarımızı</a> kabul etmiş olursunuz.
                  </p>
                </div>
              </form>
            </div>

            {/* Right Side - Office Information */}
            <div className="contact-info-section">
              <h3 className="info-title">Ofislerimiz</h3>
              
              {offices.map((office, index) => (
                <div key={index} className="office-card">
                  <h4 className="office-name">{office.city}</h4>
                  <div className="office-info">
                    <div className="info-item">
                      <span className="info-icon">📍</span>
                      <div className="info-content">
                        {office.address.map((line, i) => (
                          <p key={i}>{line}</p>
                        ))}
                      </div>
                    </div>
                    <div className="info-item">
                      <span className="info-icon">📞</span>
                      <div className="info-content">
                        <p>Tel: <a href={`tel:${office.phone}`}>{office.phone}</a></p>
                        <p>Fax: {office.fax}</p>
                      </div>
                    </div>
                    <div className="info-item">
                      <span className="info-icon">⏰</span>
                      <div className="info-content">
                        <p>{office.hours}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}

              {/* Additional Services */}
              <div className="services-card">
                <h4 className="services-title">Hizmetlerimiz</h4>
                <ul className="services-list">
                  <li>✓ 7/24 Acil Hukuki Danışmanlık</li>
                  <li>✓ Online Görüşme İmkanı</li>
                  <li>✓ Ücretsiz İlk Danışmanlık</li>
                  <li>✓ Kurumsal Hukuki Destek</li>
                  <li>✓ Yabancı Dil Desteği</li>
                </ul>
              </div>

              {/* Map */}
              <div className="map-card">
                <h4 className="map-title">Konumumuz</h4>
                <div className="map-placeholder">
                  <span>Harita Yükleniyor...</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Bottom CTA Section */}
      <section className="contact-cta">
        <div className="cta-container">
          <h2 className="cta-title">Hemen Bizimle İletişime Geçin</h2>
          <p className="cta-subtitle">
            Profesyonel hukuki destek için uzman ekibimiz sizinle.
          </p>
          <div className="cta-buttons">
            <a href="tel:+902121234567" className="cta-btn primary">
              <span className="btn-icon">📞</span>
              Hemen Ara
            </a>
            <a href="mailto:info@karacamsir.com" className="cta-btn secondary">
              <span className="btn-icon">📧</span>
              E-posta Gönder
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactLawFirm;