import { Github, Linkedin, Twitter, Instagram } from "lucide-react";

export const SOCIAL_LINKS = [
  {
    name: "Github",
    href: "https://github.com/abdallahmohamedien",
    icon: Github,
    color: "#24292e",
  },
  {
    name: "Linkedin",
    href: "https://www.linkedin.com/in/abdallah-mohamedien",
    icon: Linkedin,
    color: "#0077b5",
  },
  {
    name: "Twitter",
    href: "https://twitter.com/your-username",
    icon: Twitter,
    color: "#1da1f2",
  },
  {
    name: "Instagram",
    href: "https://twitter.com/your-username",
    icon: Instagram,
    color: "#1da1f2",
  },
];

export interface Project {
  id: number;
  title: string;
  description: string;
  tags: string[];
  image: string;
  liveLink: string;
  githubLink: string;
  category: string;
}

export const PROJECTS: Project[] = [
  {
    id: 1,
    title: "Interactive Movie Web App",
    description:
      "A full-featured movie web application that displays trending and categorized movies with search, favorites, and authentication. Focused on performance, clean UI, and real-world API integration.",
    tags: [
      "Next.js",
      "React",
      "Tailwind CSS",
      "MongoDB",
      "NextAuth",
      "TMDB API",
    ],
    image:
      "https://images.unsplash.com/photo-1611162616475-46b635cb6868?q=80&w=2070",
    liveLink: "https://movies-web-app-dun.vercel.app/",
    githubLink: "https://github.com/abdallahmohamedien",
    category: "Web Application",
  },
  {
    id: 2,
    title: "Weather App",
    description:
      "A responsive weather application built with Vue 3 and TypeScript, featuring real-time weather data, geolocation support, and dynamic animated backgrounds based on current conditions.",
    tags: ["Vue 3", "TypeScript", "API Integration", "Tailwind CSS"],
    image:
      "https://images.unsplash.com/photo-1501973801540-537f08ccae7b?q=80&w=2070",
    liveLink: "https://weather-web-app-theta-five.vercel.app/",
    githubLink: "https://github.com/abdallahmohamedien",
    category: "Frontend",
  },
  {
    id: 3,
    title: "Attendance Management System",
    description:
      "A modern attendance system with a clean landing page and authentication flow. Built with a focus on responsive design and usability using Vue.js and Tailwind CSS.",
    tags: ["Vue.js", "Tailwind CSS", "JavaScript"],
    image:
      "https://images.unsplash.com/photo-1551836022-d5d88e9218df?q=80&w=2070",
    liveLink: "https://attendance-project-gilt.vercel.app/login",
    githubLink: "https://github.com/abdallahmohamedien",
    category: "Frontend",
  },
  {
    id: 4,
    title: "Bookazon Web App",
    description:
      "Contributed to building key sections of the Bookazon web application, including book forms and review components, with a strong focus on component structure and user experience.",
    tags: ["React", "JavaScript", "Bootstrap", "React-Bootstrap"],
    image:
      "https://images.unsplash.com/photo-1512820790803-83ca734da794?q=80&w=2070",
    liveLink: "https://na3ml.github.io/Bookazon_Frontend/",
    githubLink: "https://github.com/na3ml",
    category: "Team Project",
  },
];

export interface TimelineItem {
  year: string;
  title: string;
  company: string;
  description: string;
}

export const TIMELINE: TimelineItem[] = [
  {
    year: "Feb 2024 – Jul 2025",
    title: "Front-End Developer Intern",
    company: "Velents AI",
    description:
      "Built and maintained multiple product pages including landing pages, authentication flows, and content sections. Worked primarily with Vue.js, Tailwind CSS, and JavaScript, applying modern UI patterns and responsive design principles.",
  },
  {
    year: "Jun 2023 – Sep 2023",
    title: "Front-End Developer Intern",
    company: "Na3ml Initiative",
    description:
      "Contributed to the Bookazon web application by developing core features such as book forms and review sections using React, React-Bootstrap, and JavaScript, focusing on usability and clean component structure.",
  },
  {
    year: "Sep 2020 – Jan 2024",
    title: "B.Sc. in Computer Science",
    company: "M.E.T UN",
    description:
      "Graduated with a strong foundation in computer science fundamentals, web development concepts, and hands-on projects covering front-end technologies and modern JavaScript frameworks.",
  },
  {
    year: "2025 – Now",
    title: "Self-Taught Front-End Developer",
    company: "Personal Projects",
    description:
      "Independently learned modern web development fundamentals and built multiple responsive projects using HTML, CSS, JavaScript, React, Vue, and Next.js, with hands-on experience in APIs, authentication, and deployment.",
  },
];

export interface Skill {
  name: string;
  level: string;
  icon: string;
}

export const SKILLS: Skill[] = [
  { name: "Next.js", level: "Expert", icon: "🚀" },
  { name: "TypeScript", level: "Advanced", icon: "🔷" },
  { name: "React", level: "Expert", icon: "⚛️" },
  { name: "Tailwind CSS", level: "Expert", icon: "🎨" },
  { name: "Framer Motion", level: "Advanced", icon: "🎬" },
  { name: "Three.js", level: "Intermediate", icon: "🌐" },
  { name: "Node.js", level: "Advanced", icon: "🟢" },
  { name: "PostgreSQL", level: "Intermediate", icon: "🐘" },
];
