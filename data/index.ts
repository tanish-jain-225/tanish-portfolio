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
  color: "zinc" | "purple" | "cyan" | "emerald" | "blue" | "green";
}

export interface HeroPortrait {
  src: string;
  alt: string;
  width: number;
  height: number;
}

export interface HeroData {
  subtitle: string;
  title: string;
  description: string;
  availabilityBadge: string;
  resumeButtonText: string;
  portrait: HeroPortrait;
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
    academics?: {
      university: string;
      degree: string;
      cgpa: string;
      batch: string;
      coursework: string[];
    };
    engineering?: {
      focus: string;
      stats: BentoStat[];
      competencies: string[];
    };
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
  ogImage: "/og-image.png",
  themeColor: "#05070c",
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
    link: "/resume.pdf",
    enabled: true,
  },
};

export const sectionTitles = {
  experience: {
    title: "Experience & Leadership",
    subtitle:
      "Final-year engineering leadership, national hackathon coordination, and competitive prototyping.",
  },
  projects: {
    title: "Selected Projects",
    subtitle:
      "Full-stack web systems, REST APIs, data pipelines, and automated test suites built from scratch.",
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
    completed: "Completed",
    inProgress: "Active",
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
  subtitle: "Software Engineer · VESIT Mumbai (B.E. '27)",
  title: "Building tested full-stack web apps, REST APIs, and data pipelines.",
  description:
    "Final-year Automation and Robotics Engineering student building database-backed software across Python, TypeScript, React, Next.js, Flask, and Node.js—with practical focus on role-based access control, automated testing, and AI integration.",
  availabilityBadge: "Available for Software Engineering & Full-Stack Roles",
  resumeButtonText: "View Resume",
  portrait: {
    src: "/hero-portrait.webp",
    alt: "Tanish Sanghvi speaking at a podium during a technical presentation",
    width: 584,
    height: 668,
  },
  highlights: [
    { value: "114", label: "Career portals parsed across 9 ATS platforms", color: "zinc" },
    { value: "226+", label: "Jest & Playwright tests in Ledger Portal", color: "zinc" },
    { value: "33", label: "REST endpoints shipped in Edvanta", color: "zinc" },
    { value: "Finalist", label: "Hack Celestial 2.0 (320+ teams)", color: "zinc" },
  ],
  ctaButton: {
    text: "View Projects",
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
  "Pydantic",
  "NumPy",
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
    des: "An automated job scraping and ingestion engine that aggregates listings across 114 company career-page sources across 9 applicant tracking system platforms, featuring configurable filters and AI-assisted profile scoring.",
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
      "Built a job-ingestion pipeline with modular parsing adapters for 114 company career-page sources across 9 ATS platforms",
      "Integrated PostgreSQL/Supabase data storage, configurable filters, and AI-assisted profile scoring to store and evaluate job listings",
      "Implemented error handling and exponential retry backoff with comprehensive tests for data extraction, persistence integrity, and network recovery",
    ],
    course: "Full-Stack Automation & APIs",
    date: "2026-03-30",
  },
  {
    id: 2,
    title: "Department Ledger Portal – Academic Record System",
    des: "An academic records portal engineered for VESIT with separate student, faculty, and administrator workflows for record compilation and portfolio management.",
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
      "Developed an academic records platform with separate student, faculty and administrator workflows for record compilation and portfolio management",
      "Implemented role-based access control, audit logging and document autofill using parsed data for structured academic record management",
      "Wrote 199 Jest unit tests and 27 Playwright end-to-end tests to validate application logic and user workflows",
    ],
    course: "Web Architecture & Document Systems",
    date: "2025-11-15",
  },
  {
    id: 3,
    title: "Edvanta – AI-Powered Learning Platform",
    des: "An intelligent learning platform recognized as a National Finalist at Hack Celestial 2.0 (Top 10 out of 320+ teams). Deployed with 33 modular REST endpoints supporting assessment workflows and personalized pathways.",
    img: "/edvanta.png",
    techStack: [
      "Python",
      "Flask",
      "React.js",
      "Pydantic",
      "Gemini AI API",
      "MongoDB",
      "Firebase",
    ],
    demoLink: "https://edvanta-web.vercel.app",
    sourceLink: "https://github.com/tanish-jain-225/edvanta",
    status: "completed",
    category: "AI & Autonomous",
    duration: "2025",
    features: [
      "Designed and deployed 33 modular REST endpoints supporting assessment workflows, AI-assisted assessment generation and personalized learning pathways",
      "Integrated Gemini API to power AI-generated assessments and personalized learning experiences",
      "Implemented Pydantic request validation, Firebase JWT authentication, protected-route middleware and role-based authorization for controlled API access",
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
      "Developed a full-stack restaurant ordering application with menu browsing, cart management, checkout and administrator dashboards",
      "Implemented role-protected administrator workflows and MongoDB-backed order processing with persistent application data",
      "Wrote 35 automated tests covering order calculations, order-payload handling and route protection",
    ],
    course: "Web Architecture & State Management",
    date: "2024-10-15",
  },
  {
    id: 5,
    title: "Battery State Estimator – Final-Year Major Project",
    des: "A software-based battery simulation and telemetry pipeline generating voltage, current, and temperature data with Echo State Network-based SOC/SOH estimation compared against EKF, Coulomb Counting, and adaptive RLS.",
    img: "/battery-estimator.png",
    techStack: [
      "Python",
      "Flask",
      "MongoDB",
      "NumPy",
      "Data Processing",
      "Visualisation",
    ],
    demoLink: "https://battery-visualizer.onrender.com",
    sourceLink: "https://github.com/tanish-jain-225/Battery_State_Estimator_BE_Project_2026_2027",
    status: "completed",
    category: "AI & Autonomous",
    duration: "2026",
    features: [
      "Developed a software-based battery simulation and telemetry pipeline generating voltage, current and temperature data across configurable drive cycles and fault scenarios",
      "Implemented Echo State Network-based SOC/SOH estimation and comparative analysis against Extended Kalman Filter, Coulomb Counting and adaptive RLS methods",
      "Integrated simulation outputs and results from 4 estimation methods with MongoDB and a Flask-based visualisation dashboard for monitoring battery behaviour and comparing model performance",
    ],
    course: "Battery Simulation & Neural Estimation",
    date: "2026-04-15",
  },
  {
    id: 6,
    title: "MindSphere – Student Mental Wellness Platform",
    des: "A student-centric mental health platform featuring standardized PHQ-9 wellness assessments, counselor appointment booking, an anonymous community forum, and supportive AI conversations.",
    img: "/mind-sphere.png",
    techStack: ["React", "Node.js", "Express", "MongoDB", "Tailwind CSS", "Flask", "Gemini AI"],
    demoLink: "https://mind-sphere-web.vercel.app",
    sourceLink: "https://github.com/tanish-jain-225/MindSphere",
    status: "completed",
    category: "AI & Autonomous",
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
    id: 7,
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
    id: 8,
    title: "PowerUp – 3D Workout & Exercise Simulator",
    des: "An interactive fitness guide with 3D exercise form visualization, muscle group breakdowns, integrated nutrition lookups, and workout planning.",
    img: "/exercise.png",
    techStack: ["React", "Node.js", "Express", "MongoDB", "Tailwind CSS"],
    demoLink: "https://exercise-simulator-app-frontend.vercel.app",
    sourceLink: "https://github.com/tanish-jain-225/exercise-simulator-app",
    status: "completed",
    category: "Full-Stack Web",
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
    id: 9,
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
    id: 10,
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
    title: "Team Lead — B.E. Major Project",
    desc: "Led a 4-member team building a battery analytics platform, defining system architecture, splitting modules across members, and integrating simulation, estimation, and Flask visualisation outputs with MongoDB into one deployed system.",
    thumbnail: "",
    link: "https://battery-visualizer.onrender.com",
  },
  {
    id: 2,
    title: "National Finalist — Hack Celestial 2.0",
    desc: "Reached the national finals out of 320+ participating teams with Edvanta, shipping 33 modular REST endpoints with Pydantic validation, Firebase JWT authentication, and Gemini-powered assessment generation.",
    thumbnail: "",
    link: "https://edvanta-web.vercel.app",
  },
  {
    id: 3,
    title: "Co-Organizer — UniMerge 1.0",
    desc: "Coordinated technical operations, submission validation, judging logistics, and live developer support for a national hackathon hosting 130+ participants.",
    thumbnail: "",
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
  bio: "Full-stack developer and engineering student at VESIT Mumbai. Experienced in building full-stack web applications, REST APIs, database-backed systems, and automated data pipelines with Python, Flask, React, Next.js, and Node.js. National hackathon finalist who also led a 4-member team on a final-year battery analytics project.",
  experience: "2+ years",
  projectsCompleted: "20+",
  technologiesUsed: "20+",
};

// Contact Information
export const contactInfo: ContactInfo = {
  title: "Get in Touch",
  subtitle:
    "Reach out for software engineering internships, full-stack roles, or technical collaborations.",
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
    accent: "zinc",
  },
  description:
    "Full-stack software engineer and final-year engineering student at VESIT Mumbai.",
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
  builtWith: "Dombivli / Mumbai · Next.js & TypeScript",
  socialLinks: socialMedia,
};

// Bento Grid Data - About Me Section
export interface SkillCategory {
  category: string;
  items: string[];
}

export const skillCategories: SkillCategory[] = [
  {
    category: "Languages",
    items: ["Python", "JavaScript (ES6+)", "TypeScript", "C++", "SQL"],
  },
  {
    category: "Frontend",
    items: ["React.js", "Next.js", "HTML5", "CSS3", "Tailwind CSS"],
  },
  {
    category: "Backend & APIs",
    items: ["Node.js", "Express.js", "Flask", "REST API Design", "Pydantic Validation"],
  },
  {
    category: "Databases",
    items: ["PostgreSQL", "MongoDB", "Firebase Firestore", "Supabase"],
  },
  {
    category: "AI & Data",
    items: ["Gemini API Integration", "NumPy", "Data Pipelines", "Data Visualisation"],
  },
  {
    category: "Testing & QA",
    items: ["Pytest", "Jest", "Playwright", "Unit, Integration & E2E Testing", "Debugging"],
  },
  {
    category: "Security",
    items: ["JWT Authentication", "Role-Based Access Control", "API Validation", "Error Handling"],
  },
  {
    category: "Tools & Deployment",
    items: ["Git", "GitHub", "GitHub Actions (CI)", "Postman", "Vercel", "Render"],
  },
];

export const bentoGridData: BentoGridData = {
  title: "About & Stack",
  subtitle:
    "Final-year Automation and Robotics Engineering student at VESIT Mumbai focused on full-stack architectures, database-backed systems, and automated testing.",
  items: [
    {
      id: 1,
      title: "Academic Background & Engineering Craft",
      description: "Rigorous computer science foundations at VESIT Mumbai paired with production-grade full-stack engineering",
      img: "",
      spareImg: "",
      content: {
        type: "engineering",
        text: "Undergraduate student in Automation & Robotics Engineering at VESIT Mumbai (CGPA: 7.43/10). Grounded in algorithms, databases, and machine learning, with extensive hands-on experience designing full-stack web applications, resilient REST APIs, and automated test suites.",
        academics: {
          university: "Vivekanand Education Society's Institute of Technology (VESIT), Mumbai",
          degree: "B.E. in Automation & Robotics Engineering",
          cgpa: "7.43 / 10.0",
          batch: "2023 – 2027 (Expected)",
          coursework: [
            "Data Structures & Algorithms",
            "Database Management Systems",
            "Machine Learning",
            "Generative AI",
          ],
        },
        engineering: {
          focus: "Full-Stack Web Architecture, REST APIs & Automated Testing",
          stats: [
            { label: "CGPA", value: "7.43 / 10" },
            { label: "Projects Built", value: "20+" },
            { label: "Automated Tests", value: "220+" },
            { label: "Hackathon", value: "Top Finalist" },
          ],
          competencies: [
            "REST APIs & Validation (Pydantic)",
            "Next.js & React Architecture",
            "PostgreSQL, Supabase & MongoDB",
            "Automated Testing (199 Unit • 27 E2E)",
          ],
        },
        stats: [
          { label: "CGPA", value: "7.43 / 10" },
          { label: "Projects", value: "20+ Built" },
          { label: "Automated Tests", value: "220+" },
          { label: "Hackathons", value: "Top Finalist" },
        ],
        interests: [
          { name: "Full-Stack Dev", icon: "/git.svg", color: "purple" },
          { name: "APIs & Systems", icon: "/cloud.svg", color: "blue" },
          { name: "Clean Code", icon: "/git.svg", color: "green" },
        ],
        currentStudy: "Currently exploring scalable backend architectures, schema validation & TypeScript patterns",
      },
    },
    {
      id: 2,
      title: "Hackathons & Leadership",
      description: "Competitive building & tech event organizing",
      img: "",
      spareImg: "",
      content: {
        type: "collaboration",
        text: "National Finalist selected from 320+ competing engineering teams at Hack Celestial 2.0 with Edvanta, and Hackathon Co-Organizer coordinating technical operations for UniMerge 1.0 (130+ participants).",
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
      img: "/job-hunter.png",
      spareImg: "",
      content: {
        type: "project",
        text: "Monitors 114 company career-page sources across 9 applicant tracking system platforms, persisting structured openings in PostgreSQL/Supabase with exponential retry backoff and AI scoring.",
        technologies: ["Python", "Flask", "Supabase", "Next.js", "Gemini AI"],
        repository: "https://github.com/tanish-jain-225/job-hunter",
      },
    },
    {
      id: 5,
      title: "Department Ledger Portal",
      description: "Academic Record & Document Management",
      img: "/department-ledger-portal.png",
      spareImg: "",
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
  themeColor: "#2563eb",
  backgroundColor: "#05070c",
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
