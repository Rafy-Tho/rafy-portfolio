import {
  Braces,
  Code2,
  Database,
  Figma,
  GitBranch,
  Globe2,
  LayoutDashboard,
  Palette,
  Rocket,
  ShieldCheck,
  Smartphone,
  TerminalSquare,
} from "lucide-react";
import { project_1 } from "../assets";
export const navItems = [
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
];

export const projects = [
  {
    title: "Learning Online Platform",

    summary:
      "A fullstack learning platform built with the PERN stack. It features user authentication, course management, and interactive dashboards for students and instructors.",
    stack: ["React", "Tailwind", "Nodejs", "Postgres", "Express"],
    demo: "https://learning-online-platform-pern.onrender.com",
    github: "https://github.com/Rafy-Tho/Learning_Online_Platform_Pern",
    image: project_1,
  },
  {
    title: "Learning Online Platform",

    summary:
      "A fullstack learning platform built with the PERN stack. It features user authentication, course management, and interactive dashboards for students and instructors.",
    stack: ["React", "Tailwind", "Nodejs", "Postgres", "Express"],
    demo: "https://learning-online-platform-pern.onrender.com",
    github: "https://github.com/Rafy-Tho/Learning_Online_Platform_Pern",
    image: project_1,
  },
];

export const skillGroups = [
  {
    title: "Frontend",
    icon: Code2,
    skills: ["React", "JavaScript", "Vite", "React Router", "Tailwind CSS"],
  },
  {
    title: "UI & UX",
    icon: Palette,
    skills: [
      "Responsive design",
      "Component-based UI",
      "Accessibility basics",
      "Wireframes",
      "User-focused layouts",
    ],
  },
  {
    title: "Backend",
    icon: Database,
    skills: [
      "REST APIs",
      "Authentication",
      "Postgres",
      "Nodejs",
      "CRUD systems",
    ],
  },
  {
    title: "Workflow",
    icon: GitBranch,
    skills: ["Git", "Debugging", "Performance basics", "Project structure"],
  },
];
export const timeline = [
  {
    period: "2026 — Present",
    title: "Fullstack Developer",
    org: "Independent Projects",
    details:
      "Building fullstack applications using the MERN and PERN stacks. Focused on authentication, REST APIs, database design, and responsive React interfaces.",
  },
  {
    period: "2025 — 2026",
    title: "Frontend Developer",
    org: "Self-directed Projects",
    details:
      "Built multiple React applications including dashboards, task managers, and e-commerce UI with API integration and state management.",
  },
  {
    period: "2024 — 2025",
    title: "Web Development Foundations",
    org: "Self-learning",
    details:
      "Learned HTML, CSS, JavaScript, and core programming concepts leading into modern fullstack development.",
  },
];
export const highlights = [
  { value: "5+", label: "Projects built" },
  { value: "3", label: "Fullstack apps" },
  { value: "10+", label: "Features implemented" },
];
export const techIcons = [
  LayoutDashboard,
  Braces,
  TerminalSquare,
  Smartphone,
  ShieldCheck,
  Globe2,
  Rocket,
  Figma,
];
