
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
  description = "Itot Africa est l'écosystème leader en RDC reliant talents, entreprises et institutions aux compétences réelles. Formation certifiante, recrutement et transformation digitale.",
  canonical,
  ogType = 'website',
  ogImage = 'https://itotafrica.netlify.app/img/logoblack.png'
}) => {
  const siteTitle = "Itot Africa | Delaformation certifiante à l'emploi concret.";
  const fullTitle = title ? `${title} | ${siteTitle}` : siteTitle;
  const keywords = "Itot Africa, Itot, ITOT, formation professionnelle RDC, recrutement talents Afrique, transformation digitale, infrastructure humaine, employabilité, Lubumbashi, Kinshasa, tech Africa";

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      
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
