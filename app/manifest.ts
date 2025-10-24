import { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Shajeed Islam - Full Stack Developer Portfolio",
    short_name: "Shajeed Portfolio",
    description:
      "Portfolio of Shajeed Islam - Full Stack Developer specializing in React, Next.js, and mobile app development",
    start_url: "/",
    display: "standalone",
    background_color: "#000000",
    theme_color: "#000000",
    icons: [
      {
        src: "/favicon.ico",
        sizes: "any",
        type: "image/x-icon",
      },
    ],
  };
}
