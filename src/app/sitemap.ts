import { moreFromUs } from "@/lib/constants/footerMenu";
import navMenu from "@/lib/constants/navMenu";
import getAllIds from "@/lib/data/getAllIds";
import { MetadataRoute } from "next";

interface IMenu {
  title: string;
  url: string;
}

const sitemap = async (): Promise<MetadataRoute.Sitemap> => {
  const baseUrl = "https://tampabuzz360.com";
  const today = new Date().toISOString();

  const getAllMongodbId = await getAllIds();
  const mongoIds = getAllMongodbId.data;

  const generateSitemapEntries = (menu: IMenu[]) =>
    menu.map((item) => ({
      url: `${baseUrl}${item.url}`,
      lastModified: today,
      changeFrequency: "monthly",
      priority: 0.8,
    }));

  const dynamicNewsIds = mongoIds.map((id: string) => ({
    url: `${baseUrl}/tampa/${id}`,
    lastModified: today,
    changeFrequency: "weekly",
    priority: 0.7,
  }));

  return [
    {
      url: baseUrl,
      lastModified: today,
      changeFrequency: "yearly",
      priority: 1,
    },
    ...generateSitemapEntries(navMenu),
    ...generateSitemapEntries(moreFromUs),
    ...dynamicNewsIds,
  ];
};

export default sitemap;
