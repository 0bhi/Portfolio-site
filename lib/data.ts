export interface PersonalInfo {
  name: string;
  title: string;
  bio: string;
  avatar?: string;
  location: string;
  email: string;
  resume?: string;
}

export interface SocialLink {
  name: string;
  url: string;
  icon: string;
}

export interface Skill {
  name: string;
  category: "frontend" | "backend" | "database" | "tool" | "other";
  proficiency?: "beginner" | "intermediate" | "advanced" | "expert";
}

export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription?: string;
  techStack: string[];
  image?: string;
  githubUrl?: string;
  liveUrl?: string;
  category: string;
  featured?: boolean;
}

export interface Experience {
  id: string;
  company: string;
  role: string;
  startDate: string;
  endDate: string | "Present";
  description: string;
  achievements?: string[];
  location?: string;
}

export interface Education {
  id: string;
  institution: string;
  degree: string;
  field: string;
  startDate: string;
  endDate: string | "Present";
  location?: string;
}

// Personal Information
export const personalInfo: PersonalInfo = {
  name: "Abhigyan Pal",
  title: "Full Stack Developer",
  bio: "Full-stack developer building scalable web applications with real-time capabilities. I turn complex ideas into elegant solutions.",
  location: "Bhubaneswar, Odisha, India",
  email: "abhigyanpaldev@gmail.com",
  resume: "/Abhigyan_Intern_Resume.pdf",
  avatar: "/avatar.jpg", // Add your avatar image to the public folder and update this path
};

export const socialLinks: SocialLink[] = [
  {
    name: "GitHub",
    url: "https://github.com/0bhi", // Update with your actual GitHub URL
    icon: "github",
  },
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/abhigyanpal/", // Update with your actual LinkedIn URL
    icon: "linkedin",
  },
  {
    name: "Email",
    url: "mailto:abhigyanpaldev@gmail.com",
    icon: "mail",
  },
];

export const skills: Skill[] = [
  // Languages
  { name: "TypeScript", category: "frontend", proficiency: "advanced" },
  { name: "JavaScript", category: "frontend", proficiency: "advanced" },
  { name: "Python", category: "backend", proficiency: "intermediate" },
  { name: "C/C++", category: "other", proficiency: "intermediate" },
  
  // Frontend
  { name: "React", category: "frontend", proficiency: "advanced" },
  { name: "Next.js", category: "frontend", proficiency: "advanced" },
  { name: "Tailwind CSS", category: "frontend", proficiency: "advanced" },
  { name: "Vite", category: "frontend", proficiency: "intermediate" },
  { name: "Framer Motion", category: "frontend", proficiency: "advanced" },
  
  // Backend & APIs
  { name: "Node.js", category: "backend", proficiency: "advanced" },
  { name: "Express", category: "backend", proficiency: "advanced" },
  { name: "REST APIs", category: "backend", proficiency: "advanced" },
  { name: "WebSockets", category: "backend", proficiency: "advanced" },
  { name: "NextAuth", category: "backend", proficiency: "advanced" },
  { name: "JWT", category: "backend", proficiency: "advanced" },
  { name: "OAuth", category: "backend", proficiency: "intermediate" },
  { name: "LLM Integration", category: "backend", proficiency: "intermediate" },
  
  // Databases & Caching
  { name: "PostgreSQL", category: "database", proficiency: "advanced" },
  { name: "Prisma", category: "database", proficiency: "advanced" },
  { name: "Drizzle", category: "database", proficiency: "intermediate" },
  { name: "Redis", category: "database", proficiency: "intermediate" },
  
  // DevOps & Infrastructure
  { name: "Docker", category: "tool", proficiency: "intermediate" },
  { name: "AWS", category: "tool", proficiency: "intermediate" },
  { name: "Nginx", category: "tool", proficiency: "intermediate" },
  
  // Tools & Practices
  { name: "Git", category: "tool", proficiency: "advanced" },
  { name: "Monorepos", category: "tool", proficiency: "intermediate" },
  { name: "Jest", category: "tool", proficiency: "intermediate" },
];

export const projects: Project[] = [
  {
    id: "1",
    title: "AI Debate App",
    description: "A real-time debate platform where users can engage in structured debates with AI-powered judging. Built to handle concurrent debates with robust state management.",
    longDescription: "I wanted to create something that combined real-time communication with AI capabilities. The challenge was managing debate state across multiple server instances while keeping everything in sync. I used Redis pub/sub to solve the scaling problem, and built a state machine to handle the complex debate lifecycle. The AI judging feature uses Gemini 2.5 Flash API with proper rate limiting and retry logic to handle API throttling gracefully. Built as a Turborepo monorepo with shared packages for database, types, and UI components.",
    techStack: ["Next.js 15", "React 19", "TypeScript", "Express", "WebSockets", "Redis", "Prisma", "PostgreSQL", "Docker", "Docker Compose", "Turborepo", "pnpm", "Zustand", "Framer Motion", "GSAP", "NextAuth", "Zod", "MinIO"],
    category: "Full Stack",
    featured: true,
    githubUrl: "https://github.com/0bhi/Debate-App",
    liveUrl: "https://debate-app-0bhi.vercel.app/",
  },
  {
    id: "2",
    title: "Poll-Based Social App",
    description: "A social platform where every post is an interactive poll. Features real-time chat, typing indicators, and seamless OAuth integration.",
    longDescription: "This project started as an experiment: what if social media posts were inherently interactive? I built a platform where users can create polls, engage in real-time discussions, and see who's online. The real-time features use Socket.IO with typing indicators and read receipts. I implemented OAuth with NextAuth to make authentication smooth, and designed the database schema to support nested comments and follow relationships. Includes comprehensive testing with Jest and React Testing Library, and rate limiting with Upstash Redis.",
    techStack: ["Next.js 14", "TypeScript", "Prisma", "PostgreSQL", "Socket.IO", "NextAuth", "OAuth", "Upstash Redis", "Jest", "React Testing Library", "Zod", "React Infinite Scroll"],
    category: "Full Stack",
    featured: true,
    githubUrl: "https://github.com/0bhi/Poll-App",
    liveUrl: "https://poll-app-alpha.vercel.app/",
  },
  {
    id: "3",
    title: "Testimonials Platform",
    description: "A flexible testimonial management system with multiple embeddable templates. Businesses can collect and showcase customer feedback easily.",
    longDescription: "I noticed many businesses struggle with collecting and displaying testimonials effectively. I built a platform that lets them manage testimonials and embed them anywhere with customizable templates. The system includes 6 different display styles (carousel, grid, minimal) that work responsively. I used Drizzle ORM for type-safe database access, which made the codebase much more maintainable. Built with Vite for fast development and deployed with JWT-based authentication.",
    techStack: ["React 18", "TypeScript", "Vite", "Express", "Drizzle ORM", "PostgreSQL", "NeonDB", "JWT", "bcryptjs", "Framer Motion", "React Router", "Tailwind CSS"],
    category: "Full Stack",
    featured: true,
    githubUrl: "https://github.com/0bhi/Testimonials/",
    liveUrl: "https://testimonials-0bhi.netlify.app/",
  },
];

export const experience: Experience[] = [
  // Add your work experience here when available
];

export const education: Education[] = [
  {
    id: "1",
    institution: "KIIT University",
    degree: "Bachelor of Electronics and Computer Science",
    field: "Electronics and Computer Science (ECSE)",
    startDate: "2023-06",
    endDate: "2027-05",
    location: "Bhubaneswar, Odisha, India",
  },
];

// Additional Information
export const achievements = [
  {
    title: "LeetCode",
    description: "250+ problems solved, focusing on Trees, Graphs, and Dynamic Programming. I enjoy the problem-solving process and use it to sharpen my algorithmic thinking.",
    url: "https://leetcode.com/u/abhigyanisonline",
  },
];

export const certifications = [
  {
    title: "100xDevs – Full Stack Web Development Cohort",
    description: "Intensive training in building production-grade applications. Learned best practices for React, Node.js, Next.js, and TypeScript through hands-on projects.",
  },
];

