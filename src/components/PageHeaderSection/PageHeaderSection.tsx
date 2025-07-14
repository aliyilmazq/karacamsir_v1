import React from "react";
import "./PageHeaderSection.css";

interface PageHeaderSectionProps {
  title: string;
  breadcrumb: string;
  backgroundImage: string;
  slogan?: string;
}

const PageHeaderSection: React.FC<PageHeaderSectionProps> = ({
  title,
  breadcrumb,
  backgroundImage,
  slogan = "Your success. Our business.",
}) => {
  return (
    <div
      className="page-header-section"
      style={{
        backgroundImage: `url(${backgroundImage})`,
      }}
    >
      <div className="page-header-overlay">
        <div className="page-header-content">
          <div className="page-header-breadcrumb">{breadcrumb}</div>
          <h1 className="page-header-title">{title}</h1>
        </div>
        <div className="page-header-slogan">{slogan}</div>
      </div>
    </div>
  );
};

export default PageHeaderSection; 