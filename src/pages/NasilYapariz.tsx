import React from 'react';
import PageHeaderSection from "../components/PageHeaderSection/PageHeaderSection";
import istanbulImage from "../assets/istanbul_1.jpg";

const NasilYapariz: React.FC = () => (
  <>
    <PageHeaderSection
      title="How We Work"
      breadcrumb="Home / How We Work"
      backgroundImage={istanbulImage}
    />
    <section style={{ padding: '3rem 1rem', textAlign: 'center' }}>
      <h1>How We Work</h1>
      <p>Process and approach content will be added here.</p>
    </section>
  </>
);

export default NasilYapariz; 