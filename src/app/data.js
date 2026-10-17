// Centralized portfolio data

export const personalInfo = {
  name: "Saurabh Solanke",
  title: "Hello, I'm Saurabh Solanke",
  subtitle: "AI Software Engineer with 4+ Years Experience in Javascript, Typescript and AI",
  email: "saurabh.solanke@gmail.com",
  phone: "+91 9028066793",
  phoneRaw: "+919028066793",
  metaTitle: "Saurabh Solanke — AI Software Engineer",
  metaDescription: "AI Software Engineer with 4+ Years Experience in Javascript, Typescript and AI.",
  aboutEyebrow: "TECH STACK",
  aboutHeading: "The stack behind the craft.",
  aboutSubheading: "4+ years of engineering production applications with JavaScript, TypeScript, modern frontend frameworks, and intelligent backend systems.",
  workEyebrow: "The latest.",
  workHeading: "Explore recent projects & builds.",
  experienceEyebrow: "CAREER & EXPERIENCE",
  experienceHeading: "Where I've worked & built.",
  experienceSubheading: "4+ years of shipping enterprise web applications, mobile platforms, and resilient frontend systems.",
  skillsEyebrow: "CAPABILITIES",
  skillsHeading: "Built on a foundation of modern technology.",
  blogsEyebrow: "PUBLICATIONS & WRITING",
  blogsHeading: "Writing & insights.",
  blogsSubheading: "Technical guides, system architectures, and engineering notes on Medium.",
  contactHeading: "Let's build your next experience.",
  contactBody: "Whether you have a specific project in mind or want to explore new possibilities, I'd love to hear from you.",
  copyright: `Copyright © ${new Date().getFullYear()} Saurabh Solanke. All rights reserved.`,
};

export const navLinks = [
  { name: "Work", href: "#work" },
  { name: "Stack", href: "#about" },
  { name: "Experience", href: "#experience" },
  { name: "Skills", href: "#skills" },
  { name: "Contact", href: "#contact" },
];

export const stackCategories = [
  {
    category: "Frontend & UI Architecture",
    description: "Modular component systems, reactive state architecture, and accessible interfaces.",
    skills: [
      { name: "React", icon: "/images/react-svgrepo-com.svg", exp: "4+ yrs" },
      { name: "Next.js", icon: "/images/nextjs.svg", exp: "3+ yrs" },
      { name: "TypeScript", icon: "/images/typescript.svg", exp: "4+ yrs" },
      { name: "Angular", icon: "/images/Angular1.svg", exp: "3+ yrs" },
      { name: "Vue.js", icon: "/images/vue.svg", exp: "3+ yrs" },
      // { name: "Nuxt.js", icon: "/images/nuxtjs.svg", exp: "2+ yrs" },
      { name: "Tailwind CSS", icon: "/images/tailwind.svg", exp: "4+ yrs" },
    ],
  },
  {
    category: "Backend & Data",
    description: "Robust REST services, AI workflows, and distributed databases engineered for scale.",
    skills: [
      { name: "Node.js", icon: "/images/Node.js.svg", exp: "4+ yrs" },
      { name: "Express", icon: "/images/Express.svg", exp: "3+ yrs" },
      { name: "JavaScript", icon: "/images/js-svgrepo-com.svg", exp: "4+ yrs" },
      { name: "MongoDB", icon: "/images/MongoDB.svg", exp: "3+ yrs" },
      { name: "PostgreSQL", icon: "/images/PostgresSQL.svg", exp: "2+ yrs" },
    ],
  },
  {
    category: "Mobile & Cloud Tools",
    description: "Cross-platform mobile apps, native device bridges, and deployment pipelines.",
    skills: [
      { name: "Ionic", icon: "/images/ionic.svg", exp: "2+ yrs" },
      { name: "Git", icon: "/images/git.svg", exp: "4+ yrs" },
      { name: "Vercel", icon: "/images/Vercel.svg", exp: "3+ yrs" },
      { name: "Firebase", icon: "/images/Firebase.svg", exp: "3+ yrs" },
    ],
  },
  {
    category: "AI",
    description: "AI-assisted engineering tools, Claude Code, Cursor, and LLM acceleration workflows.",
    skills: [
      { name: "Cursor", icon: "/images/CUBE_25D.svg", exp: "" },
      { name: "Claude Code", icon: "/images/Claude-Code.svg", exp: "" },
      { name: "Gemini", icon: "/images/Gemini.svg", exp: "" },
    ],
  }
];

export const projectCategoryTabs = [
  { name: "All Projects", icon: "✦" },
  { name: "Web Platforms", icon: "" },
  { name: "Mobile Apps", icon: "📱" },
  { name: "Enterprise", icon: "⚡︎" },
];

export const projects = [
  {
    id: 1,
    eyebrow: "LIVE IN PRODUCTION",
    title: "TEDxPune Platform",
    tagline: "Full-stack web & mobile platform serving 2,000+ active patrons.",
    meta: "React · React Native · Node.js · Supabase",
    description: "Architected a full-stack web and mobile platform (React, React-Native, Node.js, Supabase) featuring Email Auth, interactive feeds, and an administrative dashboard—successfully serving 2,000+ active patrons and community members.",
    image: "/images/tedxpune.jpg",
    link: "https://www.tedxpune.com",
    category: "Web",
  },
  {
    id: 2,
    eyebrow: "MOBILE APPLICATION",
    title: "Dadar Mobile Portal",
    tagline: "Location discovery app with real-time sync & CI/CD pipeline.",
    meta: "Expo · React Native · Firebase · Cloudinary · EAS",
    description: "Developed a cross-platform (iOS, Android, Web) location-discovery app using Expo, Firebase, and Cloudinary, featuring real-time data synchronization and secure authentication. Configured a custom CI/CD pipeline targeting Vercel and Expo EAS to streamline releases.",
    image: "/images/dadar_app.jpg",
    link: "https://github.com/saurabhsolanke",
    category: "Mobile",
  },
  {
    id: 3,
    eyebrow: "ENTERPRISE PLATFORM",
    title: "Healthcare Clinical App",
    tagline: "Clinical analytics & patient scheduling suite.",
    meta: "React · Node.js · PostgreSQL · Fullstack",
    description: "Clinical workflow analytics and patient scheduling suite featuring HIPAA-compliant data storage, responsive clinical dashboards, and real-time medical staff scheduling.",
    image: "/images/medical_app.jpg",
    link: "https://github.com/saurabhsolanke",
    category: "Enterprise",
  },
];

export const blogs = [
  {
    id: 1,
    eyebrow: "TECHNICAL PUBLICATION",
    title: "How to Install and Use AOS",
    tagline: "Smooth scroll animations in Angular 15.",
    description: "AOS (Animate On Scroll) is a lightweight JavaScript library that makes it easy to add smooth scroll-based animations to your website. In this guide, I walk you through installing AOS in an Angular 15 project.",
    meta: "Angular · 5 min read on Medium",
    image: "/images/aos.png",
    link: "https://medium.com/p/76b0da09dab1",
    date: "Nov 18, 2024",
    readTime: "5 min read",
    platform: "Medium",
  },
  {
    id: 2,
    eyebrow: "MEDIUM ARTICLE",
    title: "SpendTracker App",
    tagline: "The personal finance app that puts your privacy and wallet first.",
    description: "Managing money is stressful—especially with apps that treat financial data as a product. A deep-dive into building SpendTracker, a powerful and uncompromisingly private financial companion.",
    meta: "Next.js · TypeScript · Tailwind CSS · 3 min read",
    image: "/images/spendtracker.png",
    link: "https://medium.com/@saurabh.solanke_6285/spendtracker-the-personal-finance-app-that-puts-your-privacy-and-wallet-first-748d9e4e3e4d",
    date: "Nov 19, 2025",
    readTime: "3 min read",
    platform: "Medium",
  },
];

export const experiences = [
  {
    company: "IICL",
    companyUrl: "#",
    role: "Software Development Engineer",
    period: "May 2026 — Present",
    location: "Hyderabad",
    type: "Full-time",
    active: true,
    responsibilities: [
      "Engineering lead for RAPIDÉ nforce: an enterprise-grade web application built using ReactJS, TypeScript, and high-performance Web UI architecture integrated with Node.js and PostgreSQL backends, reducing initial page render time by 35%.",
      "Automated work order workflows, Samsara telematics synchronization (DVIR defects & fault codes), preventative maintenance (PM) inspections, and OCR-powered document management, improving workflow processing efficiency by 40%.",
      "Engineered scalable backend RESTful APIs using Node.js & Express (implementing GET, POST, PUT, DELETE methods) to handle work orders, fleet telemetry data, and compliance audits.",
      "Optimized PostgreSQL database queries and backend controllers for reliable, high-throughput transactional operations.",
    ],
    achievements: [
      { text: "RAPIDÉ nforce engineering lead (ReactJS, TypeScript, Node.js, PostgreSQL), reducing initial render time by 35%.", highlight: "RAPIDÉ nforce (-35% Render)" },
      { text: "Automated work order workflows, Samsara telematics sync, and PM inspections, boosting processing efficiency by 40%.", highlight: "Telematics & PM (+40% Eff.)" },
      { text: "Authored full-lifecycle RESTful APIs (GET, POST, PUT, DELETE) handling fleet operations & asset tracking.", highlight: "Backend REST APIs" },
    ],
    footerNote: "Active role leading frontend architecture, backend REST APIs, and telematics automation.",
  },
  {
    company: "Kiot Innovations",
    companyUrl: "#",
    role: "Software Engineer",
    period: "May 2025 — April 2026",
    location: "Hyderabad",
    type: "Full-time",
    active: false,
    responsibilities: [
      "Led development for client-facing dashboards using Nuxt.js, React, & Express.js serving 100+ daily active users with seamless backend API integrations.",
      "Architected secure RESTful APIs using Express.js (implementing GET, POST, PUT, DELETE methods) and automated CI/CD deployment pipelines via GitHub Actions and Vercel, reducing deployment cycles by 50%.",
      "Designed scalable database schemas and managed data migrations, reducing average API response time by 25% and maintaining data consistency across microservices.",
      "Implemented responsive, accessible UIs using ShadCN and React components, adhering to WCAG 2.1 AA standards.",
      "Leveraged AI-assisted coding to accelerate component scaffolding and code review turnaround, boosting overall feature delivery speed by 30%.",
      "Collaborated in an Agile environment using Jest and React Testing Library (RTL) to achieve 85%+ unit test coverage and ensure zero-downtime production deployments.",
    ],
    achievements: [
      { text: "Led client dashboards (Nuxt.js, React, Express.js) serving 100+ daily active users with seamless API integrations.", highlight: "100+ DAU Dashboards" },
      { text: "Architected RESTful APIs (GET/POST/PUT/DELETE) and CI/CD via GitHub Actions & Vercel, reducing deployment cycles by 50%.", highlight: "-50% Deployment Cycles" },
      { text: "Designed scalable database schemas and data migrations, reducing average API response time by 25%.", highlight: "-25% API Latency" },
      { text: "Achieved 85%+ unit test coverage with Jest and RTL, ensuring zero-downtime production releases.", highlight: "85%+ Test Coverage" },
      { text: "Leveraged AI-assisted coding workflows, boosting overall feature delivery speed by 30%.", highlight: "+30% Feature Velocity" },
    ],
    footerNote: "Engineered scalable client platforms, backend REST APIs (GET, POST, PUT, DELETE), and automated CI/CD pipelines.",
  },
  {
    company: "Inteliment Group (Rubiscape)",
    companyUrl: "#",
    role: "Software Engineer / Associate Software Engineer",
    period: "Aug 2022 — Nov 2024",
    location: "Pune",
    type: "Full-time",
    active: false,
    responsibilities: [
      "Built the frontend for 'Data as a Service' (Client: Bajaj Auto) from 0 to 1 — designed and shipped a production-ready responsive web application for large-scale data visualization and reporting.",
      "Contributed to RubiSight, a large-scale BI & analytics platform — developed new feature modules, debugged and resolved production issues across a complex codebase, and improved dashboard rendering performance.",
      "Led Angular 9 → 14 upgrade on RubiSight (5 major versions) — migrated to Ivy renderer, RxJS 7, while maintaining zero production downtime.",
      "Made all dashboard pages fully responsive and mobile-friendly, improving usability across devices for enterprise users.",
      "Authored and tested backend REST API endpoints (GET, POST, PUT, DELETE), resolving data synchronization bottlenecks and response latency.",
    ],
    achievements: [
      { text: "Built the frontend for 'Data as a Service' (Client: Bajaj Auto) from 0 to 1 for large-scale data visualization & reporting.", highlight: "0 to 1 DaaS (Bajaj Auto)" },
      { text: "Led Angular 9 → 14 upgrade on RubiSight (5 major versions) migrating to Ivy renderer & RxJS 7 with zero downtime.", highlight: "Angular 9 → 14 Upgrade" },
      { text: "Developed feature modules and optimized rendering performance on RubiSight large-scale BI & analytics platform.", highlight: "RubiSight BI Platform" },
      { text: "Transformed all dashboard pages into responsive, mobile-friendly interfaces across enterprise devices.", highlight: "Responsive Architecture" },
    ],
    footerNote: "Inteliment Group is the parent company of the Rubiscape data intelligence platform.",
  },
];

export const capabilities = [
  {
    title: "Frontend Architecture",
    description: "Engineering fluid, accessible interfaces using React, Next.js, Nuxt.js, Angular, and TypeScript. Focused on high performance and clean component hierarchies.",
    meta: "React · Next.js · Nuxt.js · TypeScript · Vue",
  },
  {
    title: "Mobile Development",
    description: "Building responsive cross-platform mobile applications with React Native, Ionic, and Capacitor that feel truly native on iOS and Android.",
    meta: "React Native · Ionic · Capacitor · iOS · Android",
  },
  {
    title: "Backend & Systems",
    description: "Developing robust APIs, distributed data pipelines, and microservices with Node.js, Express, MongoDB, and PostgreSQL engineered for resilience.",
    meta: "Node.js · Express · PostgreSQL · MongoDB · REST APIs",
  },
  {
    title: "Design Systems & Quality",
    description: "Crafting reusable UI token systems and establishing comprehensive Jasmine and automated unit test suites with strict WCAG accessibility.",
    meta: "Tailwind CSS · Design Tokens · Unit Testing · WCAG",
  },
];

export const footerLinks = [
  { name: "GitHub", href: "https://github.com/saurabhsolanke" },
  { name: "LinkedIn", href: "https://www.linkedin.com/in/saurabh-solanke/" },
  { name: "Medium", href: "https://medium.com/@saurabh.solanke_6285" },
  { name: "Stack Overflow", href: "https://stackoverflow.com/users/11864453/saurabh-solanke" },
  { name: "Email", href: "mailto:saurabh.solanke98@gmail.com" },
];
