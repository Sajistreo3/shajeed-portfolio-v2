import Grid from "@/components/Grid";
import Hero from "@/components/Hero";
import RecentProjects from "@/components/RecentProjects";
import { FloatingNav } from "@/components/ui/FloatingNav";
// import Image from "next/image";
// import { FaHome } from "react-icons/fa";
// import { navItems } from "@/data";
// import Clients from "@/components/Clients";
import Experience from "@/components/Experience";
import Approach from "@/components/Approach";
import Footer from "@/components/Footer";
import {
  FaUser,
  FaProjectDiagram,
  FaCommentDots,
  FaEnvelope,
  FaFileAlt,
  FaFileDownload,
  FaFileContract,
  FaRegFileAlt,
} from "react-icons/fa";
import { HiDocument, HiDocumentDownload } from "react-icons/hi";
import { BsFileEarmarkText, BsFileEarmarkPerson } from "react-icons/bs";

export default function Home() {
  const navItems = [
    { name: "About", link: "#about", icon: <FaUser /> },
    { name: "Projects", link: "#projects", icon: <FaProjectDiagram /> },
    { name: "Experience", link: "#experience", icon: <FaCommentDots /> },
    { name: "Contact", link: "#contact", icon: <FaEnvelope /> },
  ];

  return (
    <main className="relative bg-black-100 flex justify-centre items-center flex-col mx-auto sm:px-10 px-5 overflow-clip">
      <div className="max-w-7xl w-full">
        <h1>
          <FloatingNav navItems={navItems} />
          <Hero />
          <Grid />
          <RecentProjects />
          {/* <Clients /> */}
          <Experience />
          <Approach />
          <Footer />
        </h1>
      </div>
    </main>
  );
}
