import type { Metadata } from "next";

type SEOProps = {
  title: string;
  description: string;
  keywords?: string;
  url?: string;
  images?: string[];
  author?: string;
  type?: "website" | "article";
  publishedAt?: string;
  updatedAt?: string;
};

const generateSEO = ({
  title,
  description,
  keywords = "Tampabuzz, tampabuzz360, Tampa News, Florida News, USA News, Local News, Breaking News",
  url = "https://tampabuzz360.com",
  images = [],
  author = "Md Aminul Islam",
  type = "website",
  publishedAt = "",
  updatedAt = "",
}: SEOProps): Metadata => {
  const defaultImage =
    "https://tampabuzz360.com/images/features/thumbnails.png";

  const uniqueImages = [
    ...new Set(images.length > 0 ? images : [defaultImage]),
  ];

  return {
    title,
    description,
    keywords,
    authors: [{ name: author, url }],
    alternates: {
      canonical: url,
    },
    openGraph: {
      title,
      description,
      type,
      url,
      siteName: "Tampabuzz360",
      images: uniqueImages.map((img) => ({
        url: img,
        width: 1200,
        height: 630,
        alt: title,
      })),
      ...(type === "article" && {
        publishedTime: publishedAt,
        modifiedTime: updatedAt,
        authors: [author],
      }),
    },
    twitter: {
      card: "summary_large_image",
      site: "@tampabuzz360",
      creator: "@aminul_dev",
      title,
      description,
      images: [uniqueImages[0]],
    },
    other: {
      "fb:app_id": "1615679795750113",
      "application-name": "Tampabuzz360",
      "apple-mobile-web-app-title": "Tampabuzz360",
      "theme-color": "#ffffff",
      "color-scheme": "light dark",
      "msapplication-TileColor": "#ffffff",
      robots: "index, follow",
    },
  };
};

export default generateSEO;
