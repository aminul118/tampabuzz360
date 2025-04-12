import { Metadata } from "next";

const image = "https://tampabuzz360.com/images/features/thumbnails.png";
const title =
  "Events - Digital news destination for everything happening in Tampa";
const description =
  "TampaBuzz360 delivers real-time news, Tampa politics, business, weather, sports, traffic, and community updates — your go-to local news source.";

export const metadata: Metadata = {
  title,
  description,
  keywords:
    "Tampa news, Tampa Florida news, Tampa Bay news, local news Tampa, Tampa weather updates, Tampa sports news, Tampa politics, Tampa community events, Tampa entertainment, breaking news Tampa, Tampa traffic updates, Tampa headlines, Tampa local journalism, Tampa business news, Tampa health news, Tampa education updates, Tampa live news, news in Tampa Bay, Tampa lifestyle, Tampa news portal",
  category: "news articles",
  applicationName: "Tampabuzz360",
  openGraph: {
    type: "website",
    url: "https://www.tampabuzz360.com/events",
    title,
    description,
    siteName: "Tampabuzz360",
    images: [
      {
        url: image,
        width: 1200,
        height: 630,
        alt: "Tampabuzz360 Events",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@TampaBuzz360", // update if you have the actual Twitter handle
    creator: "@TampaBuzz360", // update if you have the actual creator handle
    title,
    description,
    images: [image],
  },
  robots: {
    index: true,
    follow: true,
  },
};

const EventPage = () => {
  return <div></div>;
};

export default EventPage;
