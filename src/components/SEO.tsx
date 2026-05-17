import { Helmet } from "react-helmet-async";
import { SITE_DATA } from "@/config/site-data";

interface SEOProps {
  title?: string;
  description?: string;
  url?: string;
}

const SEO = ({ title, description, url }: SEOProps) => {
  const fullTitle = title ? `${title} | ${SITE_DATA.name}` : SITE_DATA.fullName;
  const fullDescription = description || SITE_DATA.description;
  const fullUrl = `https://excelentech.com.br${url || ""}`;

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={fullDescription} />
      
      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content={fullUrl} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={fullDescription} />

      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={fullUrl} />
      <meta property="twitter:title" content={fullTitle} />
      <meta property="twitter:description" content={fullDescription} />
      
      {/* Canonical */}
      <link rel="canonical" href={fullUrl} />
    </Helmet>
  );
};

export default SEO;
