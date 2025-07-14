import React from 'react';
import PageHeaderSection from "../components/PageHeaderSection/PageHeaderSection";
import istanbulImage from "../assets/istanbul_1.jpg";

const NasilYapariz: React.FC = () => (
  <>
    <PageHeaderSection
      title="Çalışma Alanlarımız"
      breadcrumb="Ana Sayfa / Hizmetlerimiz"
      backgroundImage={istanbulImage}
    />
    <section style={{ padding: '3rem 1rem', textAlign: 'center' }}>
      <h1>Nasıl Yaparız</h1>
      <p>Buraya işleyiş ve yaklaşım metni gelecek.</p>
    </section>
  </>
);

export default NasilYapariz; 