import React from 'react';
import PageHeaderSection from "../components/PageHeaderSection/PageHeaderSection";
import istanbulImage from "../assets/istanbul_1.jpg";

const BizKimiz: React.FC = () => (
  <>
    <PageHeaderSection
      title="Who We Are"
      breadcrumb="Home / Who We Are"
      backgroundImage={istanbulImage}
    />
    <section style={{ padding: '3rem 1rem', textAlign: 'center' }}>
      <h1>Who We Are</h1>
      <p>Content about our team and institution will be added here.</p>
    </section>
  </>
);

export default BizKimiz; 