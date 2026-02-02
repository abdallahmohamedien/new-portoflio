import { Github, Linkedin, Twitter, Instagram } from "lucide-react";

export const SOCIAL_LINKS = [
  {
    name: "Github",
    href: "https://github.com/your-username",
    icon: Github,
    color: "#24292e",
  },
  {
    name: "Linkedin",
    href: "https://linkedin.com/in/your-username",
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
    title: "Quantum E-commerce",
    description:
      "A high-performance storefront featuring real-time inventory tracking and seamless Stripe integration for global payments.",
    tags: ["Next.js 15", "TypeScript", "Stripe", "Prisma"],
    image:
      "https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=2070",
    liveLink: "https://example.com",
    githubLink: "https://github.com",
    category: "Full-stack",
  },
  {
    id: 2,
    title: "AI Synthesis Lab",
    description:
      "An advanced dashboard for generative AI models, offering real-time streaming responses and sophisticated prompt engineering tools.",
    tags: ["OpenAI API", "Framer Motion", "Tailwind CSS"],
    image:
      "https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=2070",
    liveLink: "https://example.com",
    githubLink: "https://github.com",
    category: "AI / Web App",
  },
  {
    id: 3,
    title: "Visionary Studio",
    description:
      "A digital agency portfolio with deep parallax effects and complex layout transitions designed for high-end brand storytelling.",
    tags: ["Next.js", "Three.js", "Gsap"],
    image:
      "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=2564",
    liveLink: "https://example.com",
    githubLink: "https://github.com",
    category: "Design System",
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
    year: "2024 - Present",
    title: "Senior Front-end Engineer",
    company: "Tech Solutions Inc.",
    description:
      "Architecting scalable design systems and optimizing core web vitals for high-traffic platforms.",
  },
  {
    year: "2022 - 2023",
    title: "Web Developer",
    company: "Creative Studio",
    description:
      "Transformed complex Figma designs into pixel-perfect, motion-rich React applications.",
  },
  {
    year: "2020 - 2021",
    title: "Junior Developer",
    company: "StartUp Hub",
    description:
      "Mastered the fundamentals of modern JavaScript and built responsive landing pages.",
  },
];
