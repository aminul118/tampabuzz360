import BrekingNews from "@/components/Home/BrekingNews";
import FeaturedStories from "@/components/Home/FeaturedStories";
import LetestStories from "@/components/Home/LetestStories";
import Promotion from "@/components/Home/Promotion";
import { Metadata } from "next";

const image = "https://tampabuzz360.com/images/features/thumbnails.png";

export const metadata: Metadata = {
  title:
    "TampaBuzz - Digital news destination for everything happening in Tampa",
  description:
    "TampaBuzz360 delivers real-time news, Tampa politics, business, weather, sports, traffic, and community updates — your go-to local news source.",
  keywords:
    "Tampa news, Tampa Florida news, Tampa Bay news, local news Tampa, Tampa weather updates, Tampa sports news, Tampa politics, Tampa community events, Tampa entertainment, breaking news Tampa, Tampa traffic updates, Tampa headlines, Tampa local journalism, Tampa business news, Tampa health news, Tampa education updates, Tampa live news, news in Tampa Bay, Tampa lifestyle, Tampa news portal",
  category: "news articals",
  openGraph: {
    type: "website",
    url: "https://www.tampabuzz360.com",
    title:
      "TampaBuzz - Digital news destination for everything happening in Tampa",
    description:
      "TampaBuzz360 delivers real-time news, Tampa politics, business, weather, sports, traffic, and community updates — your go-to local news source.",
    siteName: "Tampabuzz360",
    images: [{ url: image }],
  },
  robots: { index: true, follow: true },
  twitter: {
    card: "summary_large_image",
    site: "@site",
    creator: "@creator",
    images: image,
  },
  applicationName: "Tampabuzz360",
};

const HomePage = () => {
  return (
    <>
      <BrekingNews />
      <FeaturedStories />
      <Promotion />
      <LetestStories />
    </>
  );
};

export default HomePage;
