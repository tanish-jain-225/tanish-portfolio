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

export interface HeroData {
  subtitle: string;
  title: string;
  description: string;
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
  name: "Tanish Sanghvi | Software Engineer & Full Stack Developer",
  description:
    "Portfolio of Tanish Sanghvi — Software Engineer & Full Stack Developer at VESIT, Mumbai. Specializing in Next.js, React, Node.js, Express, MongoDB, and AI system integration.",
  favicon: "/favicon.ico",
  url: "https://tanish-portfolio-web.vercel.app",
  creator: "Tanish Sanghvi",
  keywords: [
    "Tanish Sanghvi",
    "Software Engineer",
    "Full Stack Developer",
    "Engineering Student",
    "VESIT Mumbai",
    "React Developer",
    "Next.js Portfolio",
    "MERN Stack Developer",
    "Node.js",
    "Python Developer",
    "Web Developer Mumbai",
    "AI Projects",
    "Software Engineer Portfolio",
    "Frontend Developer",
    "Backend Developer",
  ],
  ogImage: "/og-image.png",
  themeColor: "#8b5cf6",
  jobTitle: "Software Engineer & Full Stack Developer",
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
    title: "Professional & Academic Experience",
    subtitle:
      "My journey of continuous growth through internships, hackathons, and hands-on project building.",
  },
  projects: {
    title: "Highlighted Projects",
    subtitle:
      "A collection of projects showcasing full-stack development, AI integration, and creative problem-solving.",
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
  },
  status: {
    completed: "✓ Completed",
    inProgress: "⏳ In Progress",
  },
  accessibility: {
    skipToContent: "Skip to main content",
    scrollToTop: "Scroll to top",
    backToTop: "Back to top",
  },
};

export const heroData: HeroData = {
  subtitle: "Software Engineer & Full Stack Developer",
  title: "Building Tomorrow's Technology Today And Learning Along The Way",
  description:
    "Hi, I'm Tanish Sanghvi — a Software Engineer and Full Stack Developer focused on building robust backends, responsive interfaces, and practical AI integrations.",
  ctaButton: {
    text: "View My Projects",
    link: "#projects",
    icon: "FaLocationArrow",
    position: "right",
  },
  techBadges: ["React", "Next.js", "Node.js", "Python", "MongoDB", "Gemini AI"],
  scrollText: "Scroll",
  accentWordIndex: 5,
};

export const techStack = [
  "C",
  "C++",
  "HTML/CSS",
  "JavaScript",
  "TypeScript",
  "Python",
  "React",
  "Next.js",
  "Node.js",
  "Express.js",
  "MongoDB",
  "SQL",
  "Flask",
  "OpenCV",
  "Git/GitHub",
  "Tailwind CSS",
  "Bootstrap",
  "Framer Motion",
  "Firebase",
  "Vercel",
  "REST APIs",
  "Three.js",
  "Jest",
  "Playwright",
  "Gemini AI API",
  "Firebase Admin SDK",
];

export const projects: Project[] = [
  {
    id: 1,
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
  },
  {
    id: 2,
    title: "DineEase – Hotel Management App",
    des: "Developed a full-stack hotel food ordering system featuring modular backend routing and interactive checkouts. Solved local storage cart state synchronization with MongoDB databases and optimized serverless API database connection pools to eliminate timeout constraints.",
    img: "/hotel.png",
    techStack: ["React", "Node.js", "Express", "MongoDB", "Tailwind CSS"],
    demoLink: "https://hotel-management-system-web.vercel.app",
    sourceLink: "https://github.com/tanish-jain-225/hotel-management-system",
    status: "completed",
    category: "Food and Beverage",
    duration: "1 month",
    features: [
      "14 modular REST APIs for order & menu management",
      "Local storage shopping cart synchronization with MongoDB",
      "Serverless database connection pooling optimizations",
      "Real-time order tracking & admin control panels",
    ],
    course: "Web Development & Management",
  },
  {
    id: 3,
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
  },
  {
    id: 4,
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
  },
  {
    id: 5,
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
  },
  {
    id: 6,
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
  },
  {
    id: 7,
    title: "Edvanta – AI-Powered Career Platform",
    des: "An intelligent guidance and roadmap generator designed for learners. Built a modular backend supporting 33 API routes managing user roadmaps, AI chat limits, and personalized guidance resources. Contributed to recognition as Hack Celestial 2.0 National Finalist.",
    img: "/edvanta.png",
    techStack: ["React", "Vite", "Tailwind CSS", "Python", "Flask", "MongoDB", "Firebase Auth", "Gemini AI API"],
    demoLink: "https://edvanta-web.vercel.app",
    sourceLink: "https://github.com/tanish-jain-225/edvanta",
    status: "completed",
    category: "EdTech",
    duration: "2 months",
    features: [
      "National Finalist at Hack Celestial 2.0 (Top tiers out of 320+ teams)",
      "Robust backend architecture with 33 REST API endpoints",
      "Intelligent roadmap and career guidance utilizing Google Gemini API",
      "Secure user flows and Firebase Auth integration",
    ],
    course: "Educational Technology",
  },
  {
    id: 8,
    title: "Department Ledger Portal",
    des: "An institutional record management system engineered with strict security criteria. Implemented secure routing architectures via Firebase token verification and achieved production-grade reliability using automated pipelines.",
    img: "/department-ledger-portal.png",
    techStack: ["Next.js", "React", "Tailwind CSS", "Firebase Authentication", "Firestore", "Firebase Admin SDK", "Gemini AI", "Jest", "Playwright"],
    demoLink: "https://department-ledger-portal.vercel.app",
    sourceLink: "https://github.com/tanish-jain-225/Department-Ledger-Portal",
    status: "completed",
    category: "Academic Management",
    duration: "2 months",
    features: [
      "Robust testing suite with 77 Jest unit tests & 5 Playwright E2E pipelines",
      "Cryptographically verified API routes via Firebase Admin SDK",
      "Tamper-resistant audit logging for institutional records",
      "Intelligent document processing with Gemini AI integration",
    ],
    course: "Software Quality & Record Management",
  },
];

export const workExperience: WorkExperienceItem[] = [
  {
    id: 1,
    title: "Software Engineering Student at VESIT",
    desc: "B.E. student at Vivekanand Education Society's Institute of Technology (VESIT), Mumbai. Focused on full stack development, cloud deployment, and AI system design, building scalable web products and maintaining a strong academic record.",
    thumbnail: "/exp1.svg",
    link: "https://vesit.ves.ac.in",
  },
  {
    id: 2,
    title: "Frontend Development Intern — Plasmid",
    desc: "Completed a remote frontend development internship at Plasmid, Bangalore. Built responsive and modern web interfaces using HTML, CSS, JavaScript, and Bootstrap. Collaborated with the team to deliver pixel-perfect designs and optimize page performance.",
    thumbnail: "/exp2.svg",
    link: "https://linkedin.com/in/tanish-jain-tj02022005",
  },
  {
    id: 3,
    title: "Full Stack Development Intern — BWS",
    desc: "Completed a remote internship at BWS, New Delhi. Developed full-stack web applications using Python, Flask, and Bootstrap. Built dynamic Single Page Applications with RESTful APIs and database integration. Gained hands-on experience in backend architecture.",
    thumbnail: "/exp3.svg",
    link: "https://linkedin.com/in/tanish-jain-tj02022005",
  },
  {
    id: 4,
    title: "Co-Organizer — UniMerge 1.0 Hackathon",
    desc: "Co-organized a national-level online hackathon, coordinating scheduling, technical queries, and logistics for over 130 participants across India. Solved participant issues and platform challenges under tight deadlines.",
    thumbnail: "/exp4.svg",
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
  location: "Mumbai, Maharashtra",
  university: "VESIT",
  degree: "Bachelor of Engineering (B.E.)",
  status: "Software Engineer & Full Stack Developer",
  bio: "I am a Software Engineer and Full Stack Developer who enjoys building scalable, end-to-end applications. From designing responsive user interfaces to architecting robust APIs, modular databases, and custom AI workflows, I focus on software quality and security.",
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
  location: "Mumbai, India",
  availability: "Available for collaboration, hackathons, and software engineering opportunities",
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
        value: "Mumbai, India",
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
    "Creating meaningful products by combining robust backend logic, clean architectures, and intelligent AI features.",
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
    "B.E. student and developer at VESIT with 575+ commits. Explore my journey from writing code to building production-ready, fully tested applications.",
  items: [
    {
      id: 1,
      title: "Academics & Innovation",
      description: "Merging theoretical concepts with real-world applications",
      img: "/b1.svg",
      spareImg: "",
      content: {
        type: "engineering",
        text: "Focused heavily on software system architecture, database modeling, and MERN stack development. Balanced academic research and personal projects to refine core engineering and development skills.",
        stats: [
          { label: "GPA", value: "7.5" },
          { label: "Projects Completed", value: "20+" },
        ],
      },
    },
    {
      id: 2,
      title: "Cross-Functional Teamwork",
      description: "Proven experience in team projects and remote coordination",
      img: "",
      spareImg: "",
      content: {
        type: "collaboration",
        text: "Open to working with interdisciplinary teams for engineering, web or software-based hackathons and collaborations.",
        availability: {
          status: "Actively looking for tech teammates",
          schedule: "Weekends & Evenings",
        },
      },
    },
    {
      id: 3,
      title: "Tech Stack & Tools",
      description: "My core tech skills for development and prototyping",
      img: "",
      spareImg: "",
      content: {
        type: "techstack",
        text: "Comfortable with MERN Stack, Next.js, Python, and DSA",
        note: "Currently exploring: LLMs, RAG, and AI Agent workflows",
      },
    },
    {
      id: 4,
      title: "Department Ledger Portal",
      description: "Production-grade record management system",
      img: "/b4.svg",
      spareImg: "",
      content: {
        type: "project",
        text: "Engineered with cryptographically verified routing via Firebase Admin SDK and verified by 77 Jest tests and 5 Playwright E2E suites.",
        technologies: ["Next.js", "Firebase", "Jest", "Playwright"],
        repository: "Source on GitHub",
      },
    },
    {
      id: 5,
      title: "DineEase – Hotel Menu App",
      description:
        "Digital ordering system with admin panel and order tracking",
      img: "/b5.svg",
      spareImg: "/grid.svg",
      content: {
        type: "project",
        text: "Focused on serverless hosting connection pooling and local storage synchronization workflows to ensure zero-timeout cart transactions.",
        technologies: ["React", "Express", "MongoDB", "Node.js"],
        repository: "See on GitHub",
      },
    },
    {
      id: 6,
      title: "Let's Connect",
      description: "Open to collaboration, hackathons, and freelance gigs",
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
  backgroundColor: "#0f172a",
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
