import "./globals.css";
import { TChildren } from "@/lib/types/types";
import { poppins } from "./fonts";
import { Metadata } from "next";
import { GoogleTagManager } from "@next/third-parties/google";

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
    images: [
      { url: "https://tampabuzz360.com/images/features/thumbnails.png" },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@tampabuzz360",
    creator: "@tanjim360",
    images: "https://tampabuzz360.com/images/features/thumbnails.png",
  },
  robots: { index: true, follow: true },
  applicationName: "Tampabuzz360",
  facebook: { appId: "1615679795750113" },
  authors: [{ name: "Syed Tajim Hossain", url: "https://nextjs.org" }],
};

const RootLayout = ({ children }: TChildren) => {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={poppins.className}>
        <GoogleTagManager gtmId="GTM-WH7CWN2H" />
        {children}
      </body>
    </html>
  );
};

export default RootLayout;
