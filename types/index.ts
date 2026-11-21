import type { ComponentType } from "react";

/** Icon component accepted from lucide-react or react-icons. */
export type IconComponent = ComponentType<{ className?: string; size?: number }>;

export interface SocialLink {
  name: string;
  handle: string;
  href: string;
  icon: IconComponent;
}

export interface NavLink {
  name: string;
  href: `#${string}`;
}

export interface Project {
  id: string;
  title: string;
  category: string;
  description: string;
  /** What I built technically — shown as the highlighted contribution. */
  contribution?: string;
  tags: string[];
  liveLink: string;
  githubLink?: string;
}

export type ProjectLink = Pick<Project, "id" | "title" | "category" | "liveLink" | "githubLink">;

export interface SkillGroup {
  id: "languages" | "ui" | "state" | "forms" | "backend" | "tools";
  title: string;
  summary: string;
  items: string[];
}

export interface Role {
  title: string;
  period: string;
  current?: boolean;
  description?: string;
}

export interface Experience {
  company: string;
  roles: Role[];
  /** Technologies and practices used at this company. */
  stack?: string[];
  achievement?: string;
}

export interface Credential {
  kind: "Degree" | "Course" | "Diploma";
  title: string;
  issuer: string;
  period?: string;
  detail?: string;
}
