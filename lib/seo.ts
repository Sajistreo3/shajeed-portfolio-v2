export const seoConfig = {
  siteName: "Shajeed Islam Portfolio",
  siteUrl: "https://www.shajeed.com",
  title: "Shajeed Islam | Full Stack Developer & Software Engineer",
  description:
    "Passionate Full Stack Developer specializing in React, Next.js, Node.js, and mobile app development. Explore my portfolio featuring AI-powered platforms, NFT marketplaces, e-commerce solutions, and enterprise applications.",
  keywords: [
    "Shajeed Islam",
    "Full Stack Developer",
    "React Developer",
    "Next.js Developer",
    "Mobile App Developer",
    "Web Developer",
    "JavaScript Developer",
    "TypeScript Developer",
    "Node.js Developer",
    "Firebase Developer",
    "E-commerce Developer",
    "NFT Platform Developer",
    "AI Application Developer",
    "Freelance Developer",
    "Software Engineer",
    "Frontend Developer",
    "Backend Developer",
    "React Native Developer",
    "PHP Developer",
    "MongoDB Developer",
    "Portfolio",
    "Developer for Hire",
  ],
  social: {
    twitter: "@itsshajeed",
    github: "https://github.com/sajistreo3",
    linkedin: "https://linkedin.com/in/sajistreo3",
  },
  author: {
    name: "Shajeed Islam",
    url: "https://www.shajeed.com",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://www.shajeed.com",
    siteName: "Shajeed Islam Portfolio",
    title: "Shajeed Islam | Full Stack Developer & Software Engineer",
    description:
      "Passionate Full Stack Developer specializing in React, Next.js, and mobile app development. Explore my portfolio featuring AI platforms, NFT marketplaces, and enterprise solutions.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Shajeed Islam - Full Stack Developer Portfolio",
        type: "image/jpeg",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@itsshajeed",
    creator: "@itsshajeed",
    title: "Shajeed Islam | Full Stack Developer & Software Engineer",
    description:
      "Passionate Full Stack Developer specializing in React, Next.js, and mobile app development. Explore my portfolio featuring AI platforms, NFT marketplaces, and enterprise solutions.",
    images: ["/og-image.jpg"],
  },
};

export const generateMetadata = (
  pageTitle?: string,
  pageDescription?: string
) => {
  const title = pageTitle
    ? `${pageTitle} | ${seoConfig.title}`
    : seoConfig.title;
  const description = pageDescription || seoConfig.description;

  return {
    title,
    description,
    keywords: seoConfig.keywords,
    authors: [{ name: seoConfig.author.name, url: seoConfig.author.url }],
    creator: seoConfig.author.name,
    publisher: seoConfig.author.name,
    metadataBase: new URL(seoConfig.siteUrl),
    alternates: {
      canonical: "/",
    },
    openGraph: {
      ...seoConfig.openGraph,
      title,
      description,
    },
    twitter: {
      ...seoConfig.twitter,
      title,
      description,
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
  };
};
