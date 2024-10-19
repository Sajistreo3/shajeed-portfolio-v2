export const navItems = [
  { name: "About", link: "#about" },
  { name: "Projects", link: "#projects" },
  { name: "Testimonials", link: "#testimonials" },
  { name: "Contact", link: "#contact" },
];

export const gridItems = [
  {
    id: 1,
    title: "I emphasize teamwork and transparent communication, ensuring smooth collaboration across development teams and stakeholders.",
    description: "",
    className: "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]",
    imgClassName: "w-full h-full",
    titleClassName: "justify-end",
    img: "/b1.svg",
    spareImg: "",
  },
  {
    id: 2,
    title: "I'm very flexible with time zone communications",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "",
    spareImg: "",
  },
  {
    id: 3,
    title: "My tech stack",
    description: "I constantly try to improve",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-center",
    img: "",
    spareImg: "",
  },
  {
    id: 4,
    title: "Tech enthusiast with a passion for development.",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "/grid.svg",
    spareImg: "/b4.svg",
  },

  {
    id: 5,
    title: "Developing a JavaScript animation library to enhance UI/UX, focusing on efficient rendering and performance.",
    description: "The Inside Scoop",
    className: "md:col-span-3 md:row-span-2",
    imgClassName: "absolute right-0 bottom-0 md:w-96 w-60",
    titleClassName: "justify-center md:justify-start lg:justify-center",
    img: "/b5.svg",
    spareImg: "/grid.svg",
  },
  {
    id: 6,
    title: "Looking to contribute my skills to innovative projects. Let’s connect to explore opportunities.",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-center md:max-w-full max-w-60 text-center",
    img: "",
    spareImg: "",
  },
];

export const projects = [
  {
    id: 1,
    title: "Promptarium - AI-Powered Prompt Sharing Platform",
    des: "Discover and create AI-driven prompts with Promptarium. A collaborative space where users share, search, and explore community-generated prompts in real time.",
    img: "/promptarium.webp",
    iconLists: [
      "logos:nextjs-icon",
      "logos:mongodb-icon",
      "logos:tailwindcss-icon",
      "logos:typescript-icon",
      "logos:google-icon",
      "simple-icons:vercel",
    ], // Placeholder Iconify icons
    link: "https://promptarium.vercel.app",
  },
  {
    id: 2,
    title: "Sofan - Athlete-Focused NFT Marketplace & Social Platform",
    des: "Explore NFTs from top athletes and connect on Sofan. Featuring polls, posts, and real-time engagement, Sofan merges NFT trading with social interaction, powered by React and Firebase.",
    img: "/sofan.webp",
    iconLists: [
      "logos:react",
      "vscode-icons:file-type-firebase",
      "devicon:html5",
      "devicon:css3",
      "logos:web3js",
      "logos:jira",
      "logos:figma",
    ], // Placeholder Iconify icons
    link: "https://www.sofan.app",
  },
  {
    id: 3,
    title: "Coq-O-Bec - Chicken Dishes & Bakery Showcase",
    des: "Discover delicious chicken dishes and bakery treats at Coq-O-Bec. Featuring a dynamic menu, responsive design, and Google Maps integration for easy navigation.",
    img: "/coc.webp",
    iconLists: [
      "devicon:html5",
      "devicon:css3",
      "vscode-icons:file-type-firebase",
      "devicon:javascript",
      "logos:google-maps",
      "devicon:bootstrap",
    ], // Placeholder Iconify icons
    link: "https://www.coqobecgouin.com",
  },
  {
    id: 4,
    title: "Tekmadev - SaaS Agency for Web & Mobile Solutions",
    des: "Empower your business with Tekmadev. From websites to mobile apps, we provide end-to-end solutions, including development, marketing, and social media strategies to boost your online presence.",
    img: "/tekmadev.webp",
    iconLists: [
      "logos:react",
      "devicon:javascript",
      "logos:sass",
      "devicon:css3",
      "vscode-icons:file-type-firebase",
    ], // Placeholder Iconify icons
    link: "https://www.tekmadev.com",
  },
  {
    id: 5,
    title: "Gestion A.H.T - Petro-Canada Stations Management & Admin Panel",
    des: "A static marketing website for Gestion A.H.T, showcasing multiple Petro-Canada locations. The admin panel features an authentication system and examination tools for managers, powered by PHP.",
    img: "/gestionaht.webp",
    iconLists: [
      "logos:php",
      "logos:mysql",
      "devicon:html5",
      "devicon:css3",
      "devicon:javascript",
      "logos:figma",
    ], // Placeholder Iconify icons
    link: "https://github.com/Sajistreo3/gestionaht", // Replace with actual link if needed
  },
  {
    id: 6,
    title: "Linen Chest - E-commerce Platform with Magento 2 & React",
    des: "A feature-rich E-commerce platform built on Magento 2, integrating PHP for backend operations and React for a dynamic frontend. Offering advanced cart functionalities and customizable admin panels for seamless management.",
    img: "/linenchest.webp",
    iconLists: [
      "devicon:magento",
      "devicon:php",
      "logos:react",
      "devicon:html5",
      "devicon:css3",
      "devicon:javascript",
      "logos:jira",
      "devicon:algolia"
    ], // Placeholder Iconify icons
    link: "https://www.linenchest.com", // Replace with actual link if needed
  },
];

export const testimonials = [
  {
    quote:
      "Working with Shajeed was an amazing experience. His ability to quickly understand complex project requirements and deliver efficient, high-quality solutions is unparalleled. His full-stack development expertise helped us scale our NFT platform with ease. I highly recommend him for any project requiring a true professional.",
    name: "Sarah Thompson",
    title: "CEO of Digital Arts Collective",
  },
  {
    quote:
      "Shajeed is a dedicated developer who goes above and beyond to ensure the success of every project. He was instrumental in developing our e-commerce platform at Linen Chest, delivering robust solutions that enhanced user experience and significantly reduced technical issues. His contributions are highly valued.",
    name: "David Lee",
    title: "E-commerce Manager, Linen Chest",
  },
  {
    quote:
      "Shajeed's technical expertise and strong communication skills made him an invaluable part of our cross-platform mobile app project. His solutions were not only functional but innovative, improving both our development process and user engagement. A highly skilled and reliable developer.",
    name: "Jessica Martin",
    title: "Project Lead at JSM Tech",
  },
  {
    quote:
      "Shajeed is an exceptional full-stack developer with deep expertise in building scalable, user-friendly websites. He developed our gas station marketing website with incredible attention to detail and efficiency, and his PHP skills were critical in delivering a solid backend. I would highly recommend him to anyone looking for a top-tier developer.",
    name: "Ahmed Khan",
    title: "Owner of QuickGas Stations",
  },
  {
    quote:
      "Shajeed's work ethic and technical abilities are truly impressive. His contributions to our WordPress websites and React.js projects have consistently exceeded our expectations. Whether it's frontend or backend development, Shajeed is always reliable, detail-oriented, and focused on delivering exceptional results.",
    name: "Rachel Adams",
    title: "Freelance Client",
  },
];

export const companies = [
  {
    id: 1,
    name: "cloudinary",
    img: "/cloud.svg",
    nameImg: "/cloudName.svg",
  },
  {
    id: 2,
    name: "appwrite",
    img: "/app.svg",
    nameImg: "/appName.svg",
  },
  {
    id: 3,
    name: "HOSTINGER",
    img: "/host.svg",
    nameImg: "/hostName.svg",
  },
  {
    id: 4,
    name: "stream",
    img: "/s.svg",
    nameImg: "/streamName.svg",
  },
  {
    id: 5,
    name: "docker.",
    img: "/dock.svg",
    nameImg: "/dockerName.svg",
  },
];

export const workExperience = [
  {
    id: 1,
    title: "Junior Full Stack Developer",
    desc: "Contributed to wireframe designs, website maintenance, and mobile app development using React Native, enhancing project efficiency and user experience.",
    className: "md:col-span-2",
    thumbnail: "/exp1.svg",
  },
  {
    id: 2,
    title: "Mobile App Developer - Freelance (Tekmadev)",
    desc: "Developed cross-platform mobile applications for both iOS and Android using React Native and Python, improving user engagement and operational efficiency.",
    className: "md:col-span-2", // change to md:col-span-2
    thumbnail: "/exp2.svg",
  },
  {
    id: 3,
    title: "Freelance Full Stack Developer - Tekmadev",
    desc: "Led development of an NFT social platform and small business websites, handling both frontend (React.js) and backend (Firebase, PHP) development.",
    className: "md:col-span-2", // change to md:col-span-2
    thumbnail: "/exp3.svg",
  },
  {
    id: 4,
    title: "Web Developer",
    desc: "Developed e-commerce features and resolved JavaScript errors using Noibu, ensuring seamless user experience and preventing revenue loss.",
    className: "md:col-span-2",
    thumbnail: "/exp4.svg",
  },
];

export const socialMedia = [
  {
    id: 1,
    img: "/git.svg",
    link: "https://github.com/sajistreo3", // GitHub profile link
  },
  {
    id: 2,
    img: "/twit.svg",
    link: "https://x.com/itsshajeed", // Twitter profile link
  },
  {
    id: 3,
    img: "/link.svg",
    link: "https://linkedin.com/in/sajistreo3", // LinkedIn profile link
  },
];
