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
  title: "Shajeed | Full Stack Developer",
  description:
    "Explore the innovative projects I've delivered throughout my development career. Let me help you solve your challenges with custom web, mobile, and digital solutions tailored to your business needs.",
  metadataBase: new URL("https://www.shajeed.com"),
  openGraph: {
    images: [
      {
        url: "/b1.svg", // Path relative to the public directory
        width: 1200,
        height: 630,
        alt: "Your site preview image",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    images: ["/b1.svg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
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
