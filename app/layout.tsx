import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { ThemeProvider } from "./provider";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: {
    default: "Shajeed Islam | Full Stack Developer & Software Engineer",
    template: "%s | Shajeed Islam",
  },
  description:
    "Shajeed Islam is a passionate Full Stack Developer specializing in React, Next.js, Node.js, and mobile app development. Explore my portfolio featuring AI-powered platforms, NFT marketplaces, e-commerce solutions, and enterprise applications. Available for freelance projects and full-time opportunities.",
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
  authors: [{ name: "Shajeed Islam", url: "https://www.shajeed.com" }],
  creator: "Shajeed Islam",
  publisher: "Shajeed Islam",
  metadataBase: new URL("https://www.shajeed.com"),
  alternates: {
    canonical: "/",
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
  verification: {
    google: "your-google-verification-code", // Replace with actual verification code
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Shajeed Islam",
    jobTitle: "Full Stack Developer & Software Engineer",
    description:
      "Passionate Full Stack Developer specializing in React, Next.js, Node.js, and mobile app development",
    url: "https://www.shajeed.com",
    image: "https://www.shajeed.com/og-image.jpg",
    sameAs: [
      "https://github.com/sajistreo3",
      "https://x.com/itsshajeed",
      "https://linkedin.com/in/sajistreo3",
    ],
    knowsAbout: [
      "React",
      "Next.js",
      "JavaScript",
      "TypeScript",
      "Node.js",
      "Firebase",
      "React Native",
      "PHP",
      "MongoDB",
      "E-commerce Development",
      "Mobile App Development",
      "Web Development",
      "AI Applications",
      "NFT Platforms",
    ],
    hasOccupation: {
      "@type": "Occupation",
      name: "Full Stack Developer",
      description:
        "Developing web and mobile applications using modern technologies",
    },
    alumniOf: {
      "@type": "Organization",
      name: "Software Development",
    },
    worksFor: {
      "@type": "Organization",
      name: "Freelance Developer",
    },
  };

  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <link rel="canonical" href="https://www.shajeed.com" />
        <meta name="theme-color" content="#000000" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
