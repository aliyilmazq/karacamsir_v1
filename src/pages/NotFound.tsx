import React from 'react';
import PageHeaderSection from "../components/PageHeaderSection/PageHeaderSection";
import istanbulImage from "../assets/istanbul_1.jpg";

const NotFound: React.FC = () => (
  <>
    <PageHeaderSection
      title="Not Found"
      breadcrumb="Home / Not Found"
      backgroundImage={istanbulImage}
    />
    <div style={{ textAlign: 'center', padding: '4rem 1rem' }}>
      <h1>404</h1>
      <p>Page not found.</p>
    </div>
  </>
);

export default NotFound;
