type NewsContent = {
  image?: string;
  title?: string;
  description: string;
};

type JsonLdProps = {
  type?: "NewsArticle" | "Article" | "BlogPosting";
  headline: string;
  contents: NewsContent[];
  author: string;
  datePublished: string;
  dateModified?: string;
};

const generateJsonLd = ({
  type = "NewsArticle",
  headline,
  contents,
  author,
  datePublished,
  dateModified = datePublished,
}: JsonLdProps) => {
  return {
    "@context": "https://schema.org",
    "@type": type,
    headline,
    image: contents.map((c) => c.image).filter(Boolean),
    author: {
      "@type": "Person",
      name: author,
    },
    datePublished,
    dateModified,
    description: contents
      .map((c) => c.description)
      .join(" ")
      .slice(0, 160),
  };
};

export default generateJsonLd;
