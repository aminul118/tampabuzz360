import type { MetadataRoute } from "next";


export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Tampabuzz360",
    short_name: "Tampabuzz360",
    description:
      "TampaBuzz360 delivers breaking news and in-depth stories across Tampa, Florida — covering politics, business, sports, weather, health, traffic, entertainment, and local events.",
    start_url: "/",
    display: "standalone",
    background_color: "#FFFFFF",
    theme_color: "#1E2939",
    lang: "en",
    scope: "/",
    orientation: "portrait",
    dir: "ltr",
    display_override: ["standalone", "fullscreen", "minimal-ui"],
    screenshots: [
      {
        src: "/images/screenshots/desktop.png",
        sizes: "1024x768",
        type: "image/png",
        form_factor: "wide",
      },
      {
        src: "/images/screenshots/mobile.png",
        sizes: "375x667",
        type: "image/png",
      },
    ],
    icons: [
      {
        src: "/icons/icon-192x192.png",
        sizes: "192x192",
        type: "image/png",
        purpose: "any",
      },
      {
        src: "/icons/icon-512x512.png",
        sizes: "512x512",
        type: "image/png",
        purpose: "any",
      },
    ],
  };
}
