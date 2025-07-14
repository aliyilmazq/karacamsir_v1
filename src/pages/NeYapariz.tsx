import React from 'react';
import PageHeaderSection from "../components/PageHeaderSection/PageHeaderSection";
import istanbulImage from "../assets/istanbul_1.jpg";

const NeYapariz: React.FC = () => (
  <>
    <PageHeaderSection
      title="Ne Yaparız"
      breadcrumb="Ana Sayfa / Ne Yaparız"
      backgroundImage={istanbulImage}
    />
    <section style={{ padding: '3rem 1rem', textAlign: 'center' }}>
      <h1>Ne Yaparız</h1>
      <p>Buraya hizmetler ve uzmanlık alanları gelecek.</p>
    </section>
  </>
);

export default NeYapariz; 