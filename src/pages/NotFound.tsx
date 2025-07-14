import React from 'react';
import PageHeaderSection from "../components/PageHeaderSection/PageHeaderSection";
import istanbulImage from "../assets/istanbul_1.jpg";

const NotFound: React.FC = () => (
  <>
    <PageHeaderSection
      title="Bulunamadı"
      breadcrumb="Ana Sayfa / Bulunamadı"
      backgroundImage={istanbulImage}
    />
    <div style={{ textAlign: 'center', padding: '4rem 1rem' }}>
      <h1>404</h1>
      <p>Sayfa bulunamadı.</p>
    </div>
  </>
);

export default NotFound;
