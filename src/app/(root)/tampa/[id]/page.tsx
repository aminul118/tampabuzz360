/* eslint-disable @typescript-eslint/no-explicit-any */
import Image from "next/image";
import Container from "@/components/ui/Container";
import getNewsById from "@/lib/data/getNewsById";
import { Metadata } from "next";
import { TParams } from "@/lib/types/types";

//  Proper SEO using App Router metadata API
export async function generateMetadata({ params }: TParams): Promise<Metadata> {
  const { id } = await params;
  const news = await getNewsById(id);
  const { mainHeading, author, contents } = news.data;
  const content = contents[0];
  const { image, title, description } = content;

  const url = `https://tampabuzz360.com/tampa${id}`;

  return {
    title: mainHeading,
    description: description,
    keywords: title,
    authors: [{ name: author, url: url }],
    openGraph: {
      type: "website",
      url: url,
      title: mainHeading,
      description: description,
      siteName: "Tampabuzz360",
      images: [{ url: image }],
    },
    twitter: {
      card: "summary_large_image",
      site: "@tampabuzz360",
      creator: "@tampabuzz360",
      images: image,
    },
  };
}

//  Page component
const NewsDetailsPage = async ({ params }: TParams) => {
  const { id } = await params;
  const news = await getNewsById(id);
  const { mainHeading, author, contents } = news.data;
  console.log(contents);

  return (
    <Container>
      <h1 className="text-3xl font-bold">{mainHeading}</h1>
      <p className="text-xs text-red-500 mb-4">Author: {author}</p>

      <div className="grid grid-cols-12 gap-6">
        <div className="col-span-8">
          {contents.map((content: any, i: number) => {
            const { image, title, description } = content;
            return (
              <div key={i} className="space-y-4 mt-10">
                {image && (
                  <Image
                    src={image}
                    alt={title || "News image"}
                    width={800}
                    height={500}
                    className="w-full h-auto rounded-lg"
                  />
                )}
                {title && <h2 className="text-2xl font-semibold">{title}</h2>}
                <p>{description}</p>
              </div>
            );
          })}
        </div>
        <div className="col-span-4">{/* Sidebar content */}</div>
      </div>
    </Container>
  );
};

export default NewsDetailsPage;
