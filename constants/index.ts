/**
 * All portfolio content lives here, separate from presentation.
 * Sources: CV + details confirmed by Abdallah. Do not add unverified claims.
 */
import { Linkedin } from "lucide-react";
import { SiGithub, SiX } from "react-icons/si";
import type {
  Credential,
  Experience,
  NavLink,
  Project,
  ProjectLink,
  SkillGroup,
  SocialLink,
} from "@/types";

/* ------------------------------------------------------------------ */
/* Profile                                                            */
/* ------------------------------------------------------------------ */

export const PROFILE = {
  name: "Abdallah Mohamedien",
  initials: "AM",
  role: "Junior Frontend Developer",
  company: "Wexcute",
  location: "Cairo, Egypt",
  email: "abdallahmohamedien@gmail.com",
  github: "https://github.com/abdallahmohamedien",
  headline: "Building Digital Experiences That Make an Impact.",
  intro:
    "I build modern, responsive, and interactive web applications with a focus on clean architecture, performance, and exceptional user experiences.",
} as const;

/* ------------------------------------------------------------------ */
/* Navigation & social links (verified only)                           */
/* ------------------------------------------------------------------ */

export const NAV_LINKS: NavLink[] = [
  { name: "Work", href: "#work" },
  { name: "Skills", href: "#skills" },
  { name: "About", href: "#about" },
  { name: "Experience", href: "#experience" },
];

export const SOCIAL_LINKS: SocialLink[] = [
  { name: "GitHub", handle: "abdallahmohamedien", href: PROFILE.github, icon: SiGithub },
  {
    name: "LinkedIn",
    handle: "abdallah-mohamedien",
    href: "https://www.linkedin.com/in/abdallah-mohamedien/",
    icon: Linkedin,
  },
  { name: "X", handle: "@Abdallah_mo522", href: "https://x.com/Abdallah_mo522", icon: SiX },
];

/* ------------------------------------------------------------------ */
/* Projects                                                           */
/* ------------------------------------------------------------------ */

/** Featured projects, in display order. */
export const PROJECTS: Project[] = [
  {
    id: "pos",
    title: "Store Order & Repair POS System",
    category: "Business dashboard",
    description:
      "Retail and service-management dashboard for orders, repair workflows, inventory, and invoices.",
    contribution:
      "Integrated Supabase RPC for backend transactions, dynamic data tables, and real-time repair-status updates.",
    tags: ["Next.js", "React", "TypeScript", "Supabase", "Tailwind CSS", "TanStack Query"],
    liveLink: "https://mobile-pos-system-three.vercel.app/",
  },
  {
    id: "wild-oasis",
    title: "The Wild Oasis",
    category: "Cabin booking app",
    description:
      "Cabin reservation app with room management, pricing tools, and guest authentication.",
    contribution:
      "Implemented optimistic UI updates, Server Actions for database mutations, and responsive client dashboards.",
    tags: ["Next.js", "React", "Supabase", "Tailwind CSS", "Server Actions", "TanStack Query"],
    liveLink: "https://the-wildd-oasis-demo.vercel.app/",
    githubLink: "https://github.com/abdallahmohamedien/the-wildd-oasis",
  },
  {
    id: "ghostwriter",
    title: "AI Ghostwriter Pro",
    category: "AI SaaS",
    description: "SaaS application for AI-assisted content generation and editing.",
    contribution:
      "Integrated the Groq API for low-latency response streaming and JSON output handling.",
    tags: ["Next.js", "React", "Tailwind CSS", "Groq API"],
    liveLink: "https://ai-ghostwriter-iota.vercel.app/",
    githubLink: "https://github.com/abdallahmohamedien/AI-Ghostwriter",
  },
  {
    id: "movies",
    title: "Interactive Movie Web App",
    category: "Entertainment platform",
    description:
      "Movie application featuring categories, live search, watchlists, and user profiles.",
    contribution:
      "Integrated TMDB for trending entertainment data and NextAuth.js with MongoDB for session storage.",
    tags: ["Next.js", "React", "Tailwind CSS", "MongoDB", "NextAuth.js", "TMDB API"],
    liveLink: "https://movies-web-app-dun.vercel.app/",
    githubLink: "https://github.com/abdallahmohamedien/movies-web-app",
  },
  {
    id: "weather",
    title: "Weather App",
    category: "Vue 3 + TypeScript",
    description:
      "Weather application with live meteorological data, geolocation detection, and animated backgrounds.",
    tags: ["Vue.js 3", "TypeScript", "OpenWeather API", "Tailwind CSS"],
    liveLink: "https://weather-web-app-theta-five.vercel.app/",
    githubLink: "https://github.com/abdallahmohamedien/weather-web-app",
  },
];

/** Smaller projects, shown as a compact list. */
export const MORE_PROJECTS: ProjectLink[] = [
  {
    id: "bookazon",
    title: "Bookazon",
    category: "Hackathon · 2nd place",
    liveLink: "https://na3ml.github.io/Bookazon_Frontend/",
    githubLink: "https://github.com/na3ml",
  },
  {
    id: "attendance",
    title: "Attendance Management System",
    category: "Vue.js",
    liveLink: "https://attendance-project-gilt.vercel.app/login",
    githubLink: "https://github.com/abdallahmohamedien/FE-project",
  },
  {
    id: "electric",
    title: "Electric Web App",
    category: "Product storefront",
    liveLink: "https://electric-web-app.vercel.app/",
    githubLink: "https://github.com/abdallahmohamedien/electric-web-app",
  },
];

/* ------------------------------------------------------------------ */
/* Skills — grouped, no arbitrary levels                               */
/* ------------------------------------------------------------------ */

export const SKILL_GROUPS: SkillGroup[] = [
  {
    id: "languages",
    title: "Languages & Frameworks",
    summary: "The foundations I build interfaces with.",
    items: [
      "JavaScript (ES6+)",
      "TypeScript",
      "HTML5",
      "CSS3 / Sass",
      "React.js",
      "Next.js (App Router)",
      "Vue.js",
      "Nuxt.js",
    ],
  },
  {
    id: "ui",
    title: "UI Libraries & Styling",
    summary: "Design systems and styling tools for consistent UI.",
    items: ["Tailwind CSS", "Ant Design", "Bootstrap", "React-Bootstrap"],
  },
  {
    id: "state",
    title: "State & Data Fetching",
    summary: "Keeping client and server state predictable.",
    items: ["TanStack Query", "Redux Toolkit", "Context API", "Pinia"],
  },
  {
    id: "forms",
    title: "Forms, Validation & Data Handling",
    summary: "Type-safe forms and schema validation.",
    items: ["React Hook Form", "Zod"],
  },
  {
    id: "backend",
    title: "Backend Integration",
    summary: "Connecting interfaces to real data, auth and realtime.",
    items: [
      "REST APIs",
      "Supabase (RPC, Realtime)",
      "Server Actions",
      "Firebase",
      "MongoDB",
      "NextAuth.js",
    ],
  },
  {
    id: "tools",
    title: "Tools & Workflow",
    summary: "From editor to code review to deployment.",
    items: [
      "Git",
      "GitHub",
      "Pull Requests & Code Reviews",
      "Nx Monorepo",
      "VS Code",
      "Cursor",
      "Vercel",
      "Postman",
      "npm",
      "Vite",
      "Terminal",
    ],
  },
];

/* ------------------------------------------------------------------ */
/* Experience & education                                              */
/* ------------------------------------------------------------------ */

export const EXPERIENCE: Experience[] = [
  {
    company: "Wexcute",
    roles: [
      {
        title: "Junior Frontend Developer",
        period: "Nov 2026 – Present",
        current: true,
        description: "Promoted to Junior Frontend Developer after completing the internship.",
      },
      { title: "Frontend Developer Intern", period: "Jun 2026 – Oct 2026" },
    ],
    stack: [
      "React",
      "Next.js",
      "TypeScript",
      "Ant Design",
      "React Hook Form",
      "Zod",
      "TanStack Query",
      "Nx Monorepo",
      "REST APIs",
      "Git, Pull Requests & Code Reviews",
    ],
  },
  {
    company: "Velents AI",
    roles: [
      {
        title: "Front-End Developer Intern",
        period: "Feb 2024 – Jul 2025",
        description:
          "Built interactive web features including the main landing page, authentication workflows, the Nomaken module, and an e-book viewer using Vue.js, JavaScript, and Tailwind CSS. Used Skeleton and Vue component libraries for a reusable component architecture, and improved page-load experience and cross-browser responsiveness across desktop and mobile.",
      },
    ],
  },
  {
    company: "Initiative Na3ml (Roqay Company)",
    roles: [
      {
        title: "Front-End Developer Intern — Hackathon Project",
        period: "Jun 2023 – Sep 2023",
        description:
          "Collaborated on Bookazon, a hotel and destination booking platform, building reservation forms and user-review features with React.js, React-Bootstrap, JavaScript, and React Icons.",
      },
    ],
    achievement: "Won 2nd place among participating teams in the company hackathon.",
  },
];

export const EDUCATION: Credential[] = [
  {
    kind: "Degree",
    title: "Bachelor’s Degree in Computer Science",
    issuer: "M.E.T, Higher Institute for Management & Information Technology",
    period: "Sep 2020 – Jan 2024",
  },
  {
    kind: "Course",
    title: "The Ultimate React Course",
    issuer: "Jonas Schmedtmann · Udemy",
    detail: "React, Next.js, Redux, TanStack Query, App Router, Server Actions, Supabase.",
  },
  {
    kind: "Diploma",
    title: "Web Development Diploma",
    issuer: "New Horizons Mansoura",
    period: "Apr 2020",
  },
];
