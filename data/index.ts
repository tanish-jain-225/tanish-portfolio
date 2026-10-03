// ─── TypeScript interfaces for all centralized data structures ───

export interface NavItem {
  name: string;
  link: string;
  icon: string;
}

export interface SiteConfig {
  name: string;
  description: string;
  favicon: string;
  url: string;
  creator: string;
  keywords: string[];
  ogImage: string;
  themeColor: string;
  jobTitle: string;
}

export interface NavigationConfig {
  resumeButton: {
    text: string;
    link: string;
    enabled: boolean;
  };
}

export interface SectionTitle {
  title: string;
  subtitle: string;
}

export interface HeroHighlight {
  value: string;
  label: string;
  color: "purple" | "cyan" | "emerald" | "blue" | "green";
}

export interface HeroData {
  subtitle: string;
  title: string;
  description: string;
  availabilityBadge: string;
  resumeButtonText: string;
  highlights: HeroHighlight[];
  ctaButton: {
    text: string;
    link: string;
    icon: string;
    position: string;
  };
  techBadges: string[];
  scrollText: string;
  accentWordIndex: number;
}

export interface Project {
  id: number;
  title: string;
  des: string;
  img: string;
  techStack: string[];
  demoLink: string;
  sourceLink: string;
  status: "completed" | "in-progress";
  category: string;
  duration: string;
  features: string[];
  course: string;
  date: string;
}

export interface WorkExperienceItem {
  id: number;
  title: string;
  desc: string;
  thumbnail: string;
  link?: string;
}

export interface SocialMediaItem {
  id: number;
  name: string;
  url: string;
  icon: string;
}

export interface PersonalInfo {
  name: string;
  email: string;
  location: string;
  university: string;
  degree: string;
  status: string;
  bio: string;
  experience: string;
  projectsCompleted: string;
  technologiesUsed: string;
}

export interface ContactFormField {
  name: string;
  label: string;
  type: string;
  required: boolean;
}

export interface ContactDetailItem {
  icon: string;
  label: string;
  value: string;
}

export interface ContactInfo {
  title: string;
  subtitle: string;
  email: string;
  phone: string;
  location: string;
  availability: string;
  responseTime: string;
  form: {
    title: string;
    fields: ContactFormField[];
    submitButton: string;
    successMessage: string;
    errorMessage: string;
  };
  details: {
    title: string;
    items: ContactDetailItem[];
  };
}

export interface FooterData {
  logo: {
    text: string;
    accent: string;
  };
  description: string;
  sections: {
    title: string;
    items: NavItem[];
  }[];
  copyright: {
    text: string;
    year: number;
  };
  builtWith: string;
  socialLinks: SocialMediaItem[];
}

// Bento Grid types
export interface BentoStat {
  label: string;
  value: string;
}

export interface BentoInterest {
  name: string;
  icon: string;
  color: string;
}

export type BentoContentType =
  | {
    type: "engineering";
    text: string;
    stats?: BentoStat[];
    interests?: BentoInterest[];
    currentStudy?: string;
  }
  | {
    type: "collaboration";
    text: string;
    availability?: { status: string; schedule: string };
  }
  | {
    type: "techstack";
    text: string;
    note?: string;
  }
  | {
    type: "project";
    text: string;
    technologies?: string[];
    repository?: string;
  }
  | {
    type: "contact";
    email: string;
  }
  | {
    type: "academic";
    text: string;
    stats?: BentoStat[];
  };

export interface BentoGridItem {
  id: number;
  title: string;
  description: string;
  img: string;
  spareImg: string;
  content: BentoContentType;
}

export interface BentoGridData {
  title: string;
  subtitle: string;
  items: BentoGridItem[];
}

export interface Images {
  backgrounds: {
    projectsBackground: string;
    footerGrid: string;
    cloud: string;
    grid: string;
  };
  icons: {
    git: string;
  };
}

// ─── Site Configuration (SEO, metadata, OpenGraph) ───
export const siteConfig: SiteConfig = {
  name: "Tanish Sanghvi | Software Engineer & Full-Stack Developer",
  description:
    "Portfolio of Tanish Sanghvi — Software Engineer and Full-Stack Developer specializing in scalable web systems, autonomous backend pipelines, and deterministic AI architectures. Proficient in Flask, Python, React, Node.js, MongoDB, and PostgreSQL.",
  favicon: "/favicon.ico",
  url: "https://tanish-portfolio-web.vercel.app",
  creator: "Tanish Sanghvi",
  keywords: [
    "Tanish Sanghvi",
    "Software Engineer",
    "Full-Stack Developer",
    "Automation & Robotics Engineering",
    "VESIT Mumbai",
    "Python",
    "Flask",
    "React",
    "Next.js",
    "Node.js",
    "MongoDB",
    "PostgreSQL",
    "Supabase",
    "Gemini AI API",
    "Deterministic AI",
    "Autonomous Backend",
    "Jest",
    "Playwright",
    "Hypothesis",
    "Pytest",
  ],
  ogImage: "/logo.png",
  themeColor: "#8b5cf6",
  jobTitle: "Software Engineer & Full-Stack Developer",
};

export const navItems: NavItem[] = [
  { name: "Home", link: "#home", icon: "FaHome" },
  { name: "About", link: "#about", icon: "FaUser" },
  { name: "Projects", link: "#projects", icon: "FaProjectDiagram" },
  { name: "Experience", link: "#experience", icon: "FaBriefcase" },
  { name: "Contact", link: "#contact", icon: "FaEnvelope" },
];

export const navigationConfig: NavigationConfig = {
  resumeButton: {
    text: "Resume",
    link: "https://docs.google.com/document/d/1ImL07uqKaPI9DymZntlTqeBCKGs__lzRX9CXI6WpkvM/edit?usp=sharing",
    enabled: true,
  },
};

export const sectionTitles = {
  experience: {
    title: "Experience & Leadership",
    subtitle:
      "Proven track record across engineering education, national hackathon recognition, and autonomous backend pipelines.",
  },
  projects: {
    title: "Featured Engineering Projects",
    subtitle:
      "Production-grade distributed systems, autonomous backend pipelines, and deterministic AI architectures.",
  },
};

export const uiText = {
  experience: {
    viewDetails: "View Details",
    linkedInProfile: "https://linkedin.com/in/tanish-jain-tj02022005",
  },
  projects: {
    liveProject: "Live Demo",
    sourceCode: "Source Code",
    code: "Code",
    noProjectsMessage: "No projects found with the selected filters.",
    showMore: "Show More",
    showLess: "Show Less",
    keyFeatures: "Key Features",
    achievements: "Achievements",
    technologiesUsed: "Technologies Used",
    course: "Course",
    more: "more",
    categories: ["All", "AI & Autonomous", "Full-Stack Web", "Security & Utilities"] as const,
    // ProjectsGrid labels
    totalProjects: "Total Projects",
    completed: "Completed",
    inProgress: "In Progress",
    featured: "Featured",
    technologies: "Technologies",
    courses: "Courses",
    filterByCategory: "Filter by Category",
    filterByStatus: "Filter by Status",
    allCategories: "All Categories",
    allStatus: "All Status",
  },
  footer: {
    quickLinks: "Quick Links",
    contact: "Contact",
    allRightsReserved: "All rights reserved.",
  },
  contact: {
    connectWithMe: "Connect with me",
    sending: "Sending...",
    messageSent: "✓ Message Sent!",
    copy: "Copy Email",
    copied: "Copied!",
    copyError: "Copy to clipboard failed.",
    copyNotSupported: "Copy to clipboard is not supported in this browser.",
    allFieldsRequired: "All fields are required.",
    validationErrorsPrefix: "Validation errors:",
    networkError: "Network error. Please check your connection and try again.",
    emailCopied: "Email copied to clipboard",
    copyEmailAddress: "Copy email address",
  },
  status: {
    completed: "✓ Completed",
    inProgress: "⏳ In Progress",
  },
  accessibility: {
    skipToContent: "Skip to main content",
    scrollToTop: "Scroll to top",
    backToTop: "Back to top",
    mainNavigation: "Main Navigation",
    aboutMeGrid: "About Me Grid",
    backgroundPattern: "Background pattern",
    techBackground: "Tech background",
    categoryFilters: "Project category filters",
  },
};

export const heroData: HeroData = {
  subtitle: "Software Engineer & Full-Stack Developer",
  title: "Building Scalable Systems & Autonomous AI Pipelines",
  description:
    "Hi, I'm Tanish Sanghvi — a Software Engineer specializing in scalable web systems, autonomous backend pipelines, and deterministic AI architectures with 500+ automated test gates.",
  availabilityBadge: "Available for Software Engineering & Full-Stack Roles",
  resumeButtonText: "View Resume",
  highlights: [
    { value: "500+", label: "Automated Tests", color: "purple" },
    { value: "94+", label: "Board ATS Engine", color: "cyan" },
    { value: "National Finalist", label: "(Hack Celestial)", color: "emerald" },
  ],
  ctaButton: {
    text: "View My Projects",
    link: "#projects",
    icon: "FaLocationArrow",
    position: "right",
  },
  techBadges: ["Python", "Flask", "React", "Next.js", "Node.js", "PostgreSQL", "Supabase", "Gemini AI"],
  scrollText: "Scroll",
  accentWordIndex: 4,
};

export const techStack = [
  "Python",
  "Flask",
  "React.js",
  "Next.js",
  "Node.js",
  "Express.js",
  "PostgreSQL",
  "Supabase",
  "MongoDB",
  "Firestore",
  "Gemini AI API",
  "Multi-LLM Orchestration",
  "Prompt Engineering",
  "Structured JSON Schemas",
  "REST API Design",
  "TypeScript",
  "JavaScript (ES6+)",
  "Row-Level Security",
  "JWT & RBAC",
  "Tailwind CSS",
  "Jest",
  "Playwright",
  "Hypothesis",
  "Pytest",
  "Git & GitHub",
  "GitHub Actions",
  "Postman",
  "C++",
  "SQL",
  "Vercel",
  "Render",
];

export const projects: Project[] = [
  {
    id: 1,
    title: "Job Hunter – Autonomous ATS Ingestion Engine",
    des: "Autonomous multi-tenant ATS ingestion and verification engine that monitors 94+ tech career boards, filters noise at sub-millisecond speeds, and leverages a self-healing LLM cascade with zero-trust PostgreSQL security.",
    img: "/job-hunter.png",
    techStack: [
      "Python",
      "Flask",
      "Supabase (PostgreSQL)",
      "GitHub Actions",
      "Hypothesis",
      "Multi-LLM Orchestration",
    ],
    demoLink: "https://job-hunter-web-board.vercel.app",
    sourceLink: "https://github.com/tanish-jain-225/job-hunter",
    status: "completed",
    category: "Autonomous AI & Backend",
    duration: "2026",
    features: [
      "Ingested career boards across 94+ tech companies, building a sub-millisecond regex filter that discards 98% of irrelevant postings to eliminate token waste",
      "Designed a self-healing LLM cascade with token-bucket rate limiting, multi-key rotation and automated provider failover",
      "Built a zero-trust backend using Supabase PostgreSQL Row-Level Security, JWT authentication and property-based fuzz tests",
    ],
    course: "Distributed Ingestion & Resilient APIs",
    date: "2026-03-30",
  },
  {
    id: 2,
    title: "Department Ledger Portal – Academic Record System",
    des: "An institutional record management system engineered with strict security criteria. Implemented secure routing architectures via Firebase token verification and achieved production-grade reliability using automated pipelines.",
    img: "/department-ledger-portal.png",
    techStack: [
      "Next.js",
      "React",
      "Firebase Admin",
      "Firestore",
      "Gemini AI API",
      "Tailwind CSS",
      "Jest",
      "Playwright",
    ],
    demoLink: "https://department-ledger-portal.vercel.app",
    sourceLink: "https://github.com/tanish-jain-225/Department-Ledger-Portal",
    status: "completed",
    category: "Academic Management",
    duration: "2025",
    features: [
      "Built a full-stack system validated by 77 unit tests and 5 E2E tests, ensuring reliability before deployment",
      "Developed an AI-driven document parser with rate limiting, preventing API quota exhaustion under load",
      "Implemented role-based access control and audit logging, enforcing data integrity across protected workflows",
    ],
    course: "Software Quality & Record Management",
    date: "2025-11-15",
  },
  {
    id: 3,
    title: "Edvanta – AI-Powered Educational Platform",
    des: "An intelligent learning and roadmap platform recognized as a National Finalist at Hack Celestial 2.0 (selected from 320+ competing teams). Architected 33 REST API endpoints across AI tutoring, quizzes, and personalized learning roadmaps.",
    img: "/edvanta.png",
    techStack: [
      "Python",
      "Flask",
      "React.js",
      "Gemini AI API",
      "MongoDB",
      "Firebase",
    ],
    demoLink: "https://edvanta-web.vercel.app",
    sourceLink: "https://github.com/tanish-jain-225/edvanta",
    status: "completed",
    category: "EdTech & AI",
    duration: "2025",
    features: [
      "Architected 33 REST API endpoints across three core modules (AI tutoring, quizzes, learning roadmaps), enabling a single backend to power all student-facing features",
      "Designed structured JSON schemas for AI integration, ensuring consistent, application-ready outputs without manual post-processing",
      "Secured client-server workflows with authentication and protected routes, preventing unauthorized API access",
      "National Finalist - Selected from 320+ competing teams at Hack Celestial 2.0",
    ],
    course: "Educational Technology & AI",
    date: "2025-08-20",
  },
  {
    id: 4,
    title: "DineEase – Restaurant Menu & Order Management System",
    des: "A full-stack restaurant order and menu management system featuring 14 REST API endpoints, synchronized cart persistence across sessions, and atomic order lifecycle transitions.",
    img: "/hotel.png",
    techStack: ["React.js", "Node.js", "Express.js", "MongoDB", "Tailwind CSS"],
    demoLink: "https://hotel-management-system-web.vercel.app",
    sourceLink: "https://github.com/tanish-jain-225/hotel-management-system",
    status: "completed",
    category: "Food & Hospitality",
    duration: "2024",
    features: [
      "Built 14 REST API endpoints using modular controllers and centralized middleware for a scalable codebase",
      "Solved cart-state persistence by syncing browser storage with the database, eliminating data loss across sessions",
      "Implemented atomic order lifecycle transitions (Created -> Preparing -> Ready -> Served) with optimistic client locks to prevent race conditions",
    ],
    course: "Web Architecture & State Management",
    date: "2024-10-15",
  },
  {
    id: 5,
    title: "MindSphere – Mental Wellness Platform",
    des: "A comprehensive student mental health ecosystem. Integrates clinical PHQ-9 assessment tracking, appointment bookings, and an interactive peer community dashboard. Combines Next.js and Flask backend APIs with Gemini conversational model interfaces.",
    img: "/mind-sphere.png",
    techStack: ["React", "Node.js", "Express", "MongoDB", "Tailwind CSS", "Flask", "Gemini AI"],
    demoLink: "https://mind-sphere-web.vercel.app",
    sourceLink: "https://github.com/tanish-jain-225/MindSphere",
    status: "completed",
    category: "Health & Wellness",
    duration: "1.5 months",
    features: [
      "AI-powered wellness recommendations and chatbot with Gemini AI",
      "Clinical PHQ-9 wellness assessment tracking with visual analytics",
      "Secure appointment scheduling and peer discussion platform",
      "Strict data privacy, accessibility and student trust design patterns",
    ],
    course: "Full Stack Development & AI",
    date: "2024-05-15",
  },
  {
    id: 6,
    title: "SilverCare-AI – Voice-First Accessible AI Assistant",
    des: "A full-stack, voice-first AI assistant designed for senior citizens, featuring step-by-step onboarding, voice-enabled chat, smart reminders, emergency alerts, and a mobile-first accessible UI. Built with React, Tailwind CSS, and Flask, it integrates AI, speech recognition, and real-time databases to empower independent living.",
    img: "/SilverCareAI.png",
    techStack: [
      "React 18",
      "Vite",
      "Tailwind CSS",
      "Framer Motion",
      "React Router DOM",
      "Firebase Auth",
      "Web Speech API",
      "Python",
      "Flask",
      "MongoDB",
      "Firebase Firestore",
      "Together AI",
      "TextBlob",
    ],
    demoLink: "https://silvercare-ai.vercel.app",
    sourceLink: "https://github.com/tanish-jain-225/SilverCare-AI",
    status: "completed",
    category: "AI Assistant",
    duration: "2 months",
    features: [
      "Voice-first chat interface with text-to-speech",
      "Emergency detection and WhatsApp alerts with GPS",
      "Smart reminders with natural language processing",
      "Mobile-first, senior-friendly accessible design",
      "Curated news and health tips for seniors",
      "Secure authentication and profile management",
    ],
    course: "Full Stack AI Development",
    date: "2024-04-10",
  },
  {
    id: 7,
    title: "PowerUp - Exercise Simulator",
    des: "Developed a MERN-based Exercise Simulator with 3D model guides, an information manual and YouTube link cards to help users learn exercises. Integrated a search bar for easy access to Exercises and a Food Nutrition section for retrieving details. It also has additional layer of authentication by Login and Signup page utilities.",
    img: "/exercise.png",
    techStack: ["React", "Node.js", "Express", "MongoDB", "Tailwind CSS"],
    demoLink: "https://exercise-simulator-app-frontend.vercel.app",
    sourceLink: "https://github.com/tanish-jain-225/exercise-simulator-app",
    status: "completed",
    category: "Fitness Simulation",
    duration: "1 month",
    features: [
      "Responsive 3D visualization",
      "Food Nutrition API integration",
      "Login & Signup authentication",
      "Search-based filtering",
    ],
    course: "Physical Sciences & Simulation",
    date: "2024-03-01",
  },
  {
    id: 8,
    title: "Teditor – Image Processing Web App",
    des: "Developed a web-based image processing app using Flask and PIL libraries, allowing users to apply various editing operations. It is a multi-technology project that seamlessly integrates JavaScript, CSS and HTML for the frontend with Python for the backend in a single application.",
    img: "/editor.png",
    techStack: ["Python", "Flask", "PIL", "JavaScript", "HTML", "CSS"],
    demoLink: "https://image-editor-teditor.vercel.app",
    sourceLink: "https://github.com/tanish-jain-225/image-editor-teditor",
    status: "completed",
    category: "Image Editing",
    duration: "1 month",
    features: [
      "Web-based image editing tools",
      "Multi-technology stack integration",
      "User-friendly interface",
      "Real-time preview",
    ],
    course: "Image Processing & Web Apps",
    date: "2024-02-01",
  },
  {
    id: 9,
    title: "SecureIt – Password Manager",
    des: "Built a secure password management web application with encrypted storage, master key authentication, and a clean dashboard UI. Features include password generation, categorized vault entries, and copy-to-clipboard functionality with auto-clear for security.",
    img: "/secure.png",
    techStack: ["React", "Node.js", "Express", "MongoDB", "Tailwind CSS"],
    demoLink: "https://secureit-web-password-manager-frontend.vercel.app",
    sourceLink: "https://github.com/tanish-jain-225/secureit-web-password-manager",
    status: "completed",
    category: "Security & Utility",
    duration: "3 weeks",
    features: [
      "Encrypted password storage",
      "Master key authentication",
      "Password strength generator",
      "Categorized vault management",
    ],
    course: "Cybersecurity & Web Development",
    date: "2024-01-15",
  },
];

export const workExperience: WorkExperienceItem[] = [
  {
    id: 1,
    title: "Automation & Robotics Engineering — VESIT",
    desc: "B.E. student in Automation & Robotics Engineering at Vivekanand Education Society's Institute of Technology (VESIT), Mumbai (2023 – Expected 2027, CGPA: 7.43/10). Relevant Coursework: Data Structures & Algorithms, DBMS, Machine Learning, Generative AI.",
    thumbnail: "/exp1.svg",
    link: "https://vesit.ves.ac.in",
  },
  {
    id: 2,
    title: "National Finalist — Hack Celestial 2.0",
    desc: "Recognized as a National Finalist from 320+ competing engineering teams at Hack Celestial 2.0 for building Edvanta, an AI-powered educational platform with 33 REST API endpoints and structured Gemini AI schemas.",
    thumbnail: "/exp2.svg",
    link: "https://edvanta-web.vercel.app",
  },
  {
    id: 3,
    title: "Hackathon Co-Organizer — UniMerge 1.0",
    desc: "Led operations, technical support, and platform logistics for UniMerge 1.0, a national hackathon with 130+ participants across India, resolving real-time participant issues under tight deadlines.",
    thumbnail: "/exp4.svg",
    link: "https://linkedin.com/in/tanish-jain-tj02022005",
  },
  {
    id: 4,
    title: "Full Stack Development Intern — BWS",
    desc: "Completed a remote internship at BWS, developing full-stack web applications with Python, Flask, and RESTful APIs with database integration. Gained hands-on experience in distributed backend architectures.",
    thumbnail: "/exp3.svg",
    link: "https://linkedin.com/in/tanish-jain-tj02022005",
  },
];

export const socialMedia: SocialMediaItem[] = [
  {
    id: 1,
    name: "GitHub",
    url: "https://github.com/tanish-jain-225",
    icon: "FaGithub",
  },
  {
    id: 2,
    name: "LinkedIn",
    url: "https://linkedin.com/in/tanish-jain-tj02022005",
    icon: "FaLinkedin",
  },
  {
    id: 3,
    name: "Instagram",
    url: "https://www.instagram.com/tanish_jain_225",
    icon: "FaInstagram",
  },
];

// Personal Information
export const personalInfo: PersonalInfo = {
  name: "Tanish Sanghvi",
  email: "tanishjain020205@gmail.com",
  location: "Dombivli, Maharashtra, India",
  university: "Vivekanand Education Society's Institute of Technology (VESIT), Mumbai",
  degree: "B.E. in Automation & Robotics Engineering (Expected 2027)",
  status: "Software Engineer & Full-Stack Developer",
  bio: "Software Engineer and Full-Stack Developer specializing in scalable web systems, autonomous backend pipelines and deterministic AI architectures. Proficient in Flask, Python, React, Node.js, MongoDB and PostgreSQL, with proven experience building distributed ingestion engines, resilient APIs and 500+ automated test gates. Recognized as a national hackathon finalist among 320+ competing engineering teams.",
  experience: "3+ years",
  projectsCompleted: "20+",
  technologiesUsed: "25+",
};

// Contact Information
export const contactInfo: ContactInfo = {
  title: "Let's Connect",
  subtitle:
    "Have a project in mind or want to collaborate? I'd love to hear from you. Let's build something great together!",
  email: "tanishjain020205@gmail.com",
  phone: "+91-7021341948",
  location: "Dombivli, Maharashtra, India",
  availability: "Available for software engineering roles, hackathons, and collaborations",
  responseTime: "Usually responds within 24 hours",
  form: {
    title: "Send me a message",
    fields: [
      { name: "name", label: "Your Name", type: "text", required: true },
      { name: "email", label: "Your Email", type: "email", required: true },
      { name: "subject", label: "Subject", type: "text", required: false },
      {
        name: "message",
        label: "Your Message",
        type: "textarea",
        required: true,
      },
    ],
    submitButton: "Send Message",
    successMessage: "Thanks for reaching out! I'll get back to you soon.",
    errorMessage: "Something went wrong. Please try again.",
  },
  details: {
    title: "Contact Information",
    items: [
      {
        icon: "FaEnvelope",
        label: "Email",
        value: "tanishjain020205@gmail.com",
      },
      {
        icon: "FaPhone",
        label: "Phone",
        value: "+91-7021341948",
      },
      {
        icon: "FaMapMarkerAlt",
        label: "Location",
        value: "Dombivli, Maharashtra, India",
      },
    ],
  },
};

// Footer Data
export const footerData: FooterData = {
  logo: {
    text: "Tanish Sanghvi",
    accent: "purple",
  },
  description:
    "Engineering scalable web systems, autonomous backend pipelines, and deterministic AI architectures.",
  sections: [
    {
      title: "Quick Links",
      items: navItems,
    },
  ],
  copyright: {
    text: "Built by Tanish Sanghvi",
    year: new Date().getFullYear(),
  },
  builtWith: "Built with Next.js, Tailwind CSS & Framer Motion",
  socialLinks: socialMedia,
};

// Bento Grid Data - About Me Section
export const bentoGridData: BentoGridData = {
  title: "About Me",
  subtitle:
    "Software Engineer & Full-Stack Developer at VESIT building autonomous backend pipelines, distributed ingestion engines, and deterministic AI systems with 500+ automated test gates.",
  items: [
    {
      id: 1,
      title: "Academics & Autonomous Systems",
      description: "Merging deterministic AI pipelines with scalable web architectures",
      img: "/b1.svg",
      spareImg: "",
      content: {
        type: "engineering",
        text: "Pursuing B.E. in Automation & Robotics Engineering at VESIT, Mumbai (Expected 2027) with CGPA 7.43/10. Relevant Coursework: Data Structures & Algorithms, DBMS, Machine Learning, Generative AI. Proven experience building distributed ingestion engines, resilient APIs, and 500+ automated test gates.",
        stats: [
          { label: "CGPA", value: "7.43 / 10" },
          { label: "Test Gates", value: "500+" },
          { label: "Finalist", value: "320+ Teams" },
        ],
        interests: [
          { name: "Distributed Systems", icon: "/git.svg", color: "purple" },
          { name: "Deterministic AI", icon: "/cloud.svg", color: "blue" },
          { name: "Quality & Testing", icon: "/grid.svg", color: "green" },
        ],
        currentStudy: "Focused on Resilient Backend Ingestion & Multi-LLM Orchestration",
      },
    },
    {
      id: 2,
      title: "Leadership & Collaboration",
      description: "Hackathon Organizer and National Finalist",
      img: "",
      spareImg: "",
      content: {
        type: "collaboration",
        text: "National Finalist selected from 320+ competing engineering teams at Hack Celestial 2.0, and Hackathon Co-Organizer leading operations for UniMerge 1.0 (130+ participants).",
        availability: {
          status: "Open to Software Engineering Roles",
          schedule: "Full-Stack & Backend AI",
        },
      },
    },
    {
      id: 3,
      title: "Tech Stack & Quality Gates",
      description: "Core technologies, automated testing & AI integration",
      img: "",
      spareImg: "",
      content: {
        type: "techstack",
        text: "Proficient in Python, Flask, React, Next.js, Node.js, PostgreSQL, MongoDB, and Gemini AI",
        note: "500+ automated test gates across Jest, Playwright, Hypothesis, and Pytest",
      },
    },
    {
      id: 4,
      title: "Job Hunter – ATS Ingestion Engine",
      description: "Autonomous Multi-Tenant ATS Ingestion & Verification Engine",
      img: "/b4.svg",
      spareImg: "",
      content: {
        type: "project",
        text: "Ingested career boards across 94+ tech companies with sub-millisecond filtering, self-healing LLM cascade, and zero-trust Supabase PostgreSQL backend.",
        technologies: ["Python", "Flask", "Supabase", "Hypothesis", "Multi-LLM"],
        repository: "https://github.com/tanish-jain-225/job-hunter",
      },
    },
    {
      id: 5,
      title: "Department Ledger Portal",
      description: "Production-grade record management system",
      img: "/b5.svg",
      spareImg: "/grid.svg",
      content: {
        type: "project",
        text: "Full-stack system validated by 77 unit tests and 5 E2E tests with AI-driven document parsing, rate limiting, and role-based access control.",
        technologies: ["Next.js", "Firebase Admin", "Firestore", "Gemini AI"],
        repository: "https://github.com/tanish-jain-225/Department-Ledger-Portal",
      },
    },
    {
      id: 6,
      title: "Let's Connect",
      description: "Open to software engineering opportunities, hackathons, and collaborations",
      img: "",
      spareImg: "",
      content: {
        type: "contact",
        email: "tanishjain020205@gmail.com",
      },
    },
  ],
};

// API / Contact Form Text (used by server-side route)
export const apiText = {
  emailSubjectPrefix: "Portfolio - Contact Form: ",
  emailSubjectFallback: "Portfolio - Contact Form Mail Query",
  emailBodyPrefix: "You have a new message from",
  healthCheckMessage: "Contact Form API is working!",
  successMessage: "Message sent successfully! Thank you for reaching out.",
  errorMessage: "Failed to send message. Please try again later.",
  validationFailed: "Validation failed",
  failedToSave: "Failed to save message",
  validation: {
    nameTooShort: "Name must be at least 2 characters long",
    invalidEmail: "Please provide a valid email address",
    messageTooShort: "Message must be at least 2 characters long",
    nameTooLong: "Name cannot exceed 100 characters",
    messageTooLong: "Message cannot exceed 10000 characters",
    subjectTooLong: "Subject cannot exceed 200 characters",
  },
};

// Manifest / PWA configuration
export const manifestData = {
  name: siteConfig.name,
  shortName: siteConfig.creator.replace(/\s+/g, "") + "Portfolio",
  description: siteConfig.description,
  themeColor: siteConfig.themeColor,
  backgroundColor: "#000319",
};

// Centralized Images Configuration
export const images: Images = {
  backgrounds: {
    projectsBackground: "/bg.png",
    footerGrid: "/footer-grid.svg",
    cloud: "/cloud.svg",
    grid: "/grid.svg",
  },
  icons: {
    git: "/git.svg",
  },
};
