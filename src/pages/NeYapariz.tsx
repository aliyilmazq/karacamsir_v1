import React from 'react';
import PageHeaderSection from "../components/PageHeaderSection/PageHeaderSection";
import istanbulImage from "../assets/istanbul_1.jpg";

const NeYapariz: React.FC = () => (
  <>
    <PageHeaderSection
      title="What We Do"
      breadcrumb="Home / What We Do"
      backgroundImage={istanbulImage}
    />
    <section style={{ padding: '3rem 1rem', textAlign: 'center' }}>
      <h1>What We Do</h1>
      <p>Services and areas of expertise will be added here.</p>
    </section>
  </>
);

export default NeYapariz; 