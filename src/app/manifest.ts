import type { MetadataRoute } from "next";
import { TOTAL_GAMES } from "@/lib/games";
import { withBase } from "@/lib/site";

export const dynamic = "force-static";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "VRental — Аренда VR-шлемов Meta Quest 3 в Минске",
    short_name: "VRental",
    description: `Аренда Meta Quest 3 в Минске с бесплатной доставкой, ${TOTAL_GAMES}+ игр, без залога.`,
    start_url: withBase("/"),
    display: "standalone",
    background_color: "#162e46",
    theme_color: "#162e46",
    lang: "ru",
    icons: [
      {
        src: withBase("/icon.png"),
        sizes: "512x512",
        type: "image/png",
      },
      {
        src: withBase("/icon-192.png"),
        sizes: "192x192",
        type: "image/png",
        purpose: "maskable",
      },
      {
        src: "/favicon.ico",
        sizes: "any",
        type: "image/x-icon",
      },
    ],
  };
}
