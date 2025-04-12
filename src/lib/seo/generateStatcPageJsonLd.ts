// lib/seo/generateStaticPageJsonLd.ts

export type StaticJsonLdProps = {
  name: string;
  url: string;
  description: string;
  thumbnail?: string;
};

const generateStaticPageJsonLd = ({
  name,
  url,
  description,
  thumbnail = "https://tampabuzz360.com/images/features/thumbnails.png",
}: StaticJsonLdProps) => {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name,
    url,
    description,
    publisher: {
      "@type": "Organization",
      name,
      logo: {
        "@type": "ImageObject",
        url: thumbnail,
      },
    },
  };
};

export default generateStaticPageJsonLd;
