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
    "Portfolio of Tanish Sanghvi — Full-Stack Developer and Software Engineer at VESIT Mumbai. Explore featured projects in React, Next.js, Python, Flask, TypeScript, and AI integrations.",
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
    "TypeScript",
    "Node.js",
    "MongoDB",
    "PostgreSQL",
    "Supabase",
    "REST APIs",
    "System Design",
    "Web Development",
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
      "My journey through engineering education, national hackathons, and real-world software development.",
  },
  projects: {
    title: "Featured Projects",
    subtitle:
      "A showcase of web applications, developer tools, and AI-driven products I've engineered.",
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
  subtitle: "Full-Stack Developer & Software Engineer",
  title: "Building Reliable Web Apps & Smart Tools",
  description:
    "Hi, I'm Tanish Sanghvi — an engineering student at VESIT Mumbai passionate about building responsive web applications, robust backends, and practical AI integrations.",
  availabilityBadge: "Available for Software Engineering & Full-Stack Roles",
  resumeButtonText: "View Resume",
  highlights: [
    { value: "20+", label: "Projects Built", color: "purple" },
    { value: "Top Finalist", label: "Hack Celestial 2.0 (320+ Teams)", color: "emerald" },
    { value: "90+", label: "Career Portals Tracked", color: "cyan" },
  ],
  ctaButton: {
    text: "View My Projects",
    link: "#projects",
    icon: "FaLocationArrow",
    position: "right",
  },
  techBadges: ["Python", "Flask", "React", "Next.js", "TypeScript", "Node.js", "PostgreSQL", "Supabase", "MongoDB"],
  scrollText: "Scroll",
  accentWordIndex: 5,
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
    title: "Job Hunter – Tech Career Board Aggregator",
    des: "An automated job scraping and tracking engine that aggregates listings across 90+ tech company career boards, filters out irrelevant roles, and structures requirements with AI parsing.",
    img: "/job-hunter.png",
    techStack: [
      "Python",
      "Flask",
      "Supabase (PostgreSQL)",
      "Next.js",
      "GitHub Actions",
      "Gemini AI",
    ],
    demoLink: "https://job-hunter-web-board.vercel.app",
    sourceLink: "https://github.com/tanish-jain-225/job-hunter",
    status: "completed",
    category: "AI & Autonomous",
    duration: "2026",
    features: [
      "Monitors career portals across 90+ tech companies, automatically aggregating and deduplicating new postings",
      "Integrated regex filtering and LLM extraction to pull structured skills, requirements, and tech stacks",
      "Built with Supabase PostgreSQL and Row-Level Security, automated via scheduled GitHub Actions pipelines",
    ],
    course: "Full-Stack Automation & APIs",
    date: "2026-03-30",
  },
  {
    id: 2,
    title: "Department Ledger Portal – Academic Record System",
    des: "A full-stack record management portal engineered for VESIT. Streamlines document workflows, academic syllabus parsing, and grading records with role-based permissions.",
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
    category: "Full-Stack Web",
    duration: "2025",
    features: [
      "Role-based access control (RBAC) separating student, faculty, and administrator workflows with Firebase Auth",
      "Automated syllabus and document parsing with client-side rate limiting to safeguard API quotas",
      "Validated with comprehensive unit and end-to-end testing suites to ensure reliable data handling",
    ],
    course: "Web Architecture & Document Systems",
    date: "2025-11-15",
  },
  {
    id: 3,
    title: "Edvanta – AI-Powered Learning Platform",
    des: "An intelligent study roadmap and learning platform recognized as a National Finalist at Hack Celestial 2.0 (Top 10 out of 320+ teams). Generates custom roadmaps, quizzes, and concept explanations.",
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
    category: "AI & EdTech",
    duration: "2025",
    features: [
      "National Finalist — Selected among the top 10 from 320+ competing engineering teams at Hack Celestial 2.0",
      "Engineered 30+ REST API endpoints powering AI tutoring, interactive quizzes, and custom learning paths",
      "Designed structured JSON schema validation for LLM responses to ensure clean, consistent frontend rendering",
    ],
    course: "Educational Technology & AI",
    date: "2025-08-20",
  },
  {
    id: 4,
    title: "DineEase – Restaurant Order & Menu Management",
    des: "A full-stack restaurant order and menu management system featuring synchronized cart persistence across sessions, real-time order lifecycle tracking, and an intuitive kitchen dashboard.",
    img: "/hotel.png",
    techStack: ["React.js", "Node.js", "Express.js", "MongoDB", "Tailwind CSS"],
    demoLink: "https://hotel-management-system-web.vercel.app",
    sourceLink: "https://github.com/tanish-jain-225/hotel-management-system",
    status: "completed",
    category: "Full-Stack Web",
    duration: "2024",
    features: [
      "Built a modular REST API with Node.js and Express for menu cataloging, cart handling, and order processing",
      "Synchronized client-side cart state with database persistence to prevent order loss on browser refresh",
      "Structured multi-stage order tracking (Placed -> Preparing -> Ready -> Served) with clear status updates",
    ],
    course: "Web Architecture & State Management",
    date: "2024-10-15",
  },
  {
    id: 5,
    title: "MindSphere – Student Mental Wellness Platform",
    des: "A student-centric mental health platform featuring standardized PHQ-9 wellness assessments, counselor appointment booking, an anonymous community forum, and supportive AI conversations.",
    img: "/mind-sphere.png",
    techStack: ["React", "Node.js", "Express", "MongoDB", "Tailwind CSS", "Flask", "Gemini AI"],
    demoLink: "https://mind-sphere-web.vercel.app",
    sourceLink: "https://github.com/tanish-jain-225/MindSphere",
    status: "completed",
    category: "Health & Wellness",
    duration: "1.5 months",
    features: [
      "Clinical PHQ-9 wellness self-assessments with visual score tracking over time",
      "Supportive conversational AI assistant for stress relief strategies and university resource navigation",
      "Confidential counseling appointment scheduling and moderated peer discussion community",
    ],
    course: "Full-Stack Development & AI",
    date: "2024-05-15",
  },
  {
    id: 6,
    title: "SilverCare-AI – Voice Assistant for Seniors",
    des: "A voice-first assistant designed for senior citizens, featuring spoken voice commands, medication reminders, emergency contact alerts with GPS coordinates, and an accessible high-contrast UI.",
    img: "/SilverCareAI.png",
    techStack: [
      "React 18",
      "Vite",
      "Tailwind CSS",
      "Framer Motion",
      "Web Speech API",
      "Python",
      "Flask",
      "MongoDB",
      "Firebase Firestore",
    ],
    demoLink: "https://silvercare-ai.vercel.app",
    sourceLink: "https://github.com/tanish-jain-225/SilverCare-AI",
    status: "completed",
    category: "AI & Autonomous",
    duration: "2 months",
    features: [
      "Voice-first interface using Web Speech API for natural hands-free navigation and text-to-speech readouts",
      "Emergency SOS trigger sending immediate alerts and location coordinates to designated caregivers",
      "High-contrast, large-button interface designed to be simple and accessible for elderly users",
    ],
    course: "Full-Stack AI Applications",
    date: "2024-04-10",
  },
  {
    id: 7,
    title: "PowerUp – 3D Workout & Exercise Simulator",
    des: "An interactive fitness guide with 3D exercise form visualization, muscle group breakdowns, integrated nutrition lookups, and workout planning.",
    img: "/exercise.png",
    techStack: ["React", "Node.js", "Express", "MongoDB", "Tailwind CSS"],
    demoLink: "https://exercise-simulator-app-frontend.vercel.app",
    sourceLink: "https://github.com/tanish-jain-225/exercise-simulator-app",
    status: "completed",
    category: "Fitness & Web",
    duration: "1 month",
    features: [
      "Interactive 3D model guides demonstrating proper lifting form and target muscle engagement",
      "Nutritional lookup integrating food data to calculate macros and daily calorie goals",
      "User authentication and personal workout routine planner",
    ],
    course: "Interactive Web & Simulation",
    date: "2024-03-01",
  },
  {
    id: 8,
    title: "Teditor – Web-Based Image Processing Tool",
    des: "A lightweight browser image editor built with Python and Flask. Allows users to upload photos, apply filters, crop, resize, and convert file formats directly in the browser.",
    img: "/editor.png",
    techStack: ["Python", "Flask", "Pillow (PIL)", "JavaScript", "HTML", "CSS"],
    demoLink: "https://image-editor-teditor.vercel.app",
    sourceLink: "https://github.com/tanish-jain-225/image-editor-teditor",
    status: "completed",
    category: "Security & Utilities",
    duration: "1 month",
    features: [
      "Server-side image transformations and filters implemented using Python's Pillow (PIL) library",
      "Real-time visual preview of editing operations before final download",
      "Fast conversion between common file formats including PNG, JPEG, and WebP",
    ],
    course: "Applied Python & Image Processing",
    date: "2024-02-01",
  },
  {
    id: 9,
    title: "SecureIt – Client-Encrypted Password Manager",
    des: "A secure password manager featuring client-side encryption, master passphrase authentication, customizable password generation, and categorized vault search.",
    img: "/secure.png",
    techStack: ["React", "Node.js", "Express", "MongoDB", "Tailwind CSS"],
    demoLink: "https://secureit-web-password-manager-frontend.vercel.app",
    sourceLink: "https://github.com/tanish-jain-225/secureit-web-password-manager",
    status: "completed",
    category: "Security & Utilities",
    duration: "3 weeks",
    features: [
      "Client-side encryption ensuring credentials remain private before transmission to the database",
      "Customizable password generator with real-time strength and entropy evaluation",
      "Categorized vault organization with quick search and secure auto-clearing clipboard copy",
    ],
    course: "Web Security & Authentication",
    date: "2024-01-15",
  },
];

export const workExperience: WorkExperienceItem[] = [
  {
    id: 1,
    title: "Automation & Robotics Engineering — VESIT",
    desc: "B.E. student in Automation & Robotics Engineering at Vivekanand Education Society's Institute of Technology (VESIT), Mumbai (2023 – Expected 2027, CGPA: 7.43/10). Coursework: Data Structures & Algorithms, Database Management, Machine Learning, and Software Engineering.",
    thumbnail: "/exp1.svg",
    link: "https://vesit.ves.ac.in",
  },
  {
    id: 2,
    title: "National Finalist — Hack Celestial 2.0",
    desc: "Recognized as a National Finalist from 320+ competing engineering teams across India for building Edvanta, an AI-powered educational platform featuring structured roadmaps and dynamic quiz generation.",
    thumbnail: "/exp2.svg",
    link: "https://edvanta-web.vercel.app",
  },
  {
    id: 3,
    title: "Hackathon Co-Organizer — UniMerge 1.0",
    desc: "Led operations, technical setup, and participant coordination for UniMerge 1.0, a national hackathon with 130+ participants across India, resolving real-time technical questions and judging logistics.",
    thumbnail: "/exp4.svg",
    link: "https://linkedin.com/in/tanish-jain-tj02022005",
  },
  {
    id: 4,
    title: "Full Stack Development Intern — BWS",
    desc: "Developed responsive web modules and backend REST APIs using Python, Flask, and relational databases. Collaborated on code reviews, database schema design, and feature deployments.",
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
  bio: "Full-stack developer and engineering student at VESIT Mumbai. I focus on building responsive web applications, robust backend APIs, and practical AI integrations. Experienced with React, Next.js, Python, Flask, Node.js, PostgreSQL, and MongoDB. Recognized as a national hackathon finalist among 320+ engineering teams.",
  experience: "2+ years",
  projectsCompleted: "20+",
  technologiesUsed: "20+",
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
    "Building fast, reliable web applications, modern backends, and practical AI tools.",
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
    "Engineering student at VESIT Mumbai passionate about full-stack web development, clean system design, and practical AI integrations.",
  items: [
    {
      id: 1,
      title: "Academics & Engineering",
      description: "Building strong computer science foundations and practical software projects",
      img: "/b1.svg",
      spareImg: "",
      content: {
        type: "engineering",
        text: "Pursuing B.E. in Automation & Robotics Engineering at VESIT, Mumbai (Expected 2027, CGPA 7.43/10). Grounded in data structures, algorithms, databases, and modern full-stack development, with a strong focus on clean architecture and practical problem solving.",
        stats: [
          { label: "CGPA", value: "7.43 / 10" },
          { label: "Projects", value: "20+ Built" },
          { label: "Hackathons", value: "Top Finalist" },
        ],
        interests: [
          { name: "Full-Stack Dev", icon: "/git.svg", color: "purple" },
          { name: "APIs & Systems", icon: "/cloud.svg", color: "blue" },
          { name: "Clean Code", icon: "/grid.svg", color: "green" },
        ],
        currentStudy: "Currently exploring scalable backend architectures & TypeScript patterns",
      },
    },
    {
      id: 2,
      title: "Hackathons & Community",
      description: "Competitive building & tech event organizing",
      img: "",
      spareImg: "",
      content: {
        type: "collaboration",
        text: "National Finalist selected from 320+ competing engineering teams at Hack Celestial 2.0, and Hackathon Co-Organizer leading operations and technical logistics for UniMerge 1.0 (130+ participants).",
        availability: {
          status: "Available for Software Engineering Roles",
          schedule: "Full-Stack / Frontend / Backend",
        },
      },
    },
    {
      id: 3,
      title: "Tech Stack & Core Tools",
      description: "Technologies and frameworks I build with daily",
      img: "",
      spareImg: "",
      content: {
        type: "techstack",
        text: "Comfortable across the stack with React, Next.js, Node.js, Python, Flask, PostgreSQL, MongoDB, and Gemini AI.",
        note: "Committed to clean code, comprehensive tests, and great UX",
      },
    },
    {
      id: 4,
      title: "Job Hunter",
      description: "Automated Tech Job Aggregator & AI Matcher",
      img: "/b4.svg",
      spareImg: "",
      content: {
        type: "project",
        text: "Monitors career portals across 90+ tech companies, automatically aggregating and deduplicating new openings with AI requirements parsing.",
        technologies: ["Python", "Flask", "Supabase", "Next.js", "Gemini AI"],
        repository: "https://github.com/tanish-jain-225/job-hunter",
      },
    },
    {
      id: 5,
      title: "Department Ledger Portal",
      description: "Academic Record & Document Management",
      img: "/b5.svg",
      spareImg: "/grid.svg",
      content: {
        type: "project",
        text: "Full-stack institutional portal with role-based permissions, automated syllabus extraction, and comprehensive unit/E2E test suites.",
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
