import Grid from "@/components/Grid";
import Hero from "@/components/Hero";
import RecentProjects from "@/components/RecentProjects";
import { FloatingNav } from "@/components/ui/FloatingNav";
import Experience from "@/components/Experience";
import Approach from "@/components/Approach";
import Footer from "@/components/Footer";
import {
  FaUser,
  FaProjectDiagram,
  FaCommentDots,
  FaEnvelope,
} from "react-icons/fa";

export default function Home() {
  const navItems = [
    { name: "About", link: "#about", icon: <FaUser /> },
    { name: "Projects", link: "#projects", icon: <FaProjectDiagram /> },
    { name: "Experience", link: "#experience", icon: <FaCommentDots /> },
    { name: "Contact", link: "#contact", icon: <FaEnvelope /> },
  ];

  return (
    <>
      {/* SEO-optimized structured content */}
      <div className="sr-only">
        <h1>Shajeed Islam - Full Stack Developer & Software Engineer</h1>
        <p>
          Passionate Full Stack Developer specializing in React, Next.js,
          Node.js, and mobile app development. Explore my portfolio featuring
          AI-powered platforms, NFT marketplaces, e-commerce solutions, and
          enterprise applications.
        </p>
        <h2>Skills & Technologies</h2>
        <ul>
          <li>React & Next.js Development</li>
          <li>JavaScript & TypeScript</li>
          <li>Node.js & Express</li>
          <li>Firebase & MongoDB</li>
          <li>React Native Mobile Development</li>
          <li>PHP & MySQL</li>
          <li>E-commerce Solutions</li>
          <li>AI Application Development</li>
          <li>NFT Platform Development</li>
        </ul>
        <h2>Featured Projects</h2>
        <ul>
          <li>Promptarium - AI-Powered Prompt Sharing Platform</li>
          <li>Sofan - Athlete-Focused NFT Marketplace</li>
          <li>Coq-O-Bec - Restaurant Website</li>
          <li>Tekmadev - SaaS Agency Platform</li>
          <li>Gestion A.H.T - Petro-Canada Stations Management</li>
          <li>Linen Chest - E-commerce Platform</li>
          <li>Precision Flooring & Contracting - Home Service Platform</li>
          <li>TransGlobal Canada - International Supply Chain Solutions</li>
        </ul>
        <h2>Professional Experience</h2>
        <ul>
          <li>Junior Full Stack Developer - Brossard App Design</li>
          <li>Web Developer - Linen Chest</li>
          <li>Mobile App Developer - Tekmadev (Freelance)</li>
          <li>Full Stack Developer - Tekmadev (Freelance)</li>
        </ul>
        <h2>Contact Information</h2>
        <p>
          Available for freelance projects and full-time opportunities.
          Specializing in web development, mobile app development, and custom
          software solutions.
        </p>
      </div>

      <main className="relative bg-black-100 flex justify-centre items-center flex-col mx-auto sm:px-10 px-5 overflow-clip">
        <div className="max-w-7xl w-full">
          <FloatingNav navItems={navItems} />
          <Hero />
          <Grid />
          <RecentProjects />
          <Experience />
          <Approach />
          <Footer />
        </div>
      </main>
    </>
  );
}
