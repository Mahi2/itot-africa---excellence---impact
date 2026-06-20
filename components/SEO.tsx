
import React from 'react';
import { Helmet } from 'react-helmet-async';

interface SEOProps {
  title?: string;
  description?: string;
  canonical?: string;
  ogType?: string;
  ogImage?: string;
}

const SEO: React.FC<SEOProps> = ({ 
  title, 
  description = "De la formation certifiante à l'emploi concret. Itot Africa est l'écosystème qui relie les talents, les entreprises et les institutions aux compétences réelles et aux opportunités durables de croissance.",
  canonical,
  ogType = 'website',
  ogImage = 'https://itot.africa/og-image.jpg' // Placeholder
}) => {
  const siteTitle = "Itot Africa | Infrastructure Humaine & Digitale";
  const fullTitle = title ? `${title} | ${siteTitle}` : siteTitle;

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      
      {/* Open Graph / Facebook */}
      <meta property="og:type" content={ogType} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:url" content={window.location.href} />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />

      {canonical && <link rel="canonical" href={canonical} />}
    </Helmet>
  );
};

export default SEO;
