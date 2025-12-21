import { Helmet } from 'react-helmet-async';

const SEO = ({ 
  title = 'AlphaCare247 - Home Healthcare Services', 
  description = 'Professional home healthcare services including blood tests, health checkups, and medical consultations. NABL-accredited labs with certified professionals.',
  image,
  url,
  type = 'website'
}) => {
  const currentUrl = url || window.location.href;
  const imageUrl = image || `${window.location.origin}/logo.png`;
  
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      
      {/* Open Graph */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={imageUrl} />
      <meta property="og:url" content={currentUrl} />
      <meta property="og:type" content={type} />
      
      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={imageUrl} />
      
      {/* Additional SEO */}
      <meta name="robots" content="index, follow" />
      <link rel="canonical" href={currentUrl} />
    </Helmet>
  );
};

export default SEO;