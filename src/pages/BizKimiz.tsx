import React from 'react';
import PageHeaderSection from "../components/PageHeaderSection/PageHeaderSection";
import istanbulImage from "../assets/istanbul_1.jpg";

const BizKimiz: React.FC = () => (
  <>
    <PageHeaderSection
      title="Çalışma Alanlarımız"
      breadcrumb="Ana Sayfa / Hizmetlerimiz"
      backgroundImage={istanbulImage}
    />
    <section style={{ padding: '3rem 1rem', textAlign: 'center' }}>
      <h1>Biz Kimiz</h1>
      <p>Buraya ekip ve kurum hakkında içerik gelecek.</p>
    </section>
  </>
);

export default BizKimiz; 