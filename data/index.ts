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
}

export interface SocialMediaItem {
  id: number;
  img: string;
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
  avatar: string;
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
    link: string;
  };
  profile: string;
  confetti: string;
}

// ─── Site Configuration (SEO, metadata, OpenGraph) ───
export const siteConfig: SiteConfig = {
  name: "Tanish Sanghvi | Full Stack Developer & Engineering Student",
  description:
    "Portfolio of Tanish Sanghvi — Full Stack Developer & Engineering student at VESIT, Mumbai. Explore projects built with React, Next.js, Node.js, Python, and MongoDB. Open to collaborations and freelance opportunities.",
  favicon: "/favicon.ico",
  url: "https://tanish-portfolio-web.vercel.app",
  creator: "Tanish Sanghvi",
  keywords: [
    "Tanish Sanghvi",
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
  jobTitle: "Engineering Student & Full Stack Developer",
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
    link: "https://docs.google.com/document/d/1ImL07uqKaPI9DymZntlTqeBCKGs__lzRX9CXI6WpkvM/edit?usp=sharing", // You can update this to actual resume link
    enabled: true,
  },
};

export const sectionTitles = {
  experience: {
    title: "Professional & Academic Experience",
    subtitle:
      "My journey of continuous growth through academics, internships, and hands-on project building.",
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
  },
  contact: {
    connectWithMe: "Connect with me",
    sending: "Sending...",
    messageSent: "✓ Message Sent!",
    copy: "Copy Email",
    copied: "Copied!",
    copyError: "Copy to clipboard failed.",
    copyNotSupported: "Copy to clipboard is not supported in this browser.",
  },
  status: {
    completed: "✓ Completed",
    inProgress: "⏳ In Progress",
  },
};

export const heroData: HeroData = {
  subtitle: "Full Stack Developer & Engineering Student",
  title: "Building Tomorrow's Technology Today And Learning Along The Way",
  description:
    "Hi, I'm Tanish — a Full Stack Developer and Engineering student at VESIT, Mumbai. I craft performant web apps and AI-powered solutions.",
  ctaButton: {
    text: "View My Projects",
    link: "#projects",
    icon: "FaLocationArrow",
    position: "right",
  },
  techBadges: ["React", "Next.js", "Node.js", "Python", "MongoDB"],
  scrollText: "Scroll",
  accentWordIndex: 5,
};

export const techStack = [
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
    des: "Developed a MERN stack-based hotel food ordering system with dynamic cart, real-time order tracking and secure admin login. Included admin panel for menu/order management and implemented efficient state management for smooth experience along with responsive design.",
    img: "/hotel.png",
    techStack: ["React", "Node.js", "Express", "MongoDB", "Tailwind CSS"],
    demoLink: "https://hotel-management-system-web.vercel.app",
    sourceLink: "https://github.com/tanish-jain-225/hotel-management-system",
    status: "completed",
    category: "Food and Beverage",
    duration: "1 month",
    features: [
      "Real-time order tracking",
      "Admin menu/order control panel",
      "Cart & checkout management",
      "Responsive interface",
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
    des: "A comprehensive mental wellness web application that provides mood tracking, guided mindfulness exercises, journaling features, and personalized wellness recommendations. Built with a focus on accessible design and calming user experience.",
    img: "/mind-sphere.png",
    techStack: ["React", "Node.js", "Express", "MongoDB", "Tailwind CSS", "Flask"],
    demoLink: "https://mind-sphere-web.vercel.app",
    sourceLink: "https://github.com/tanish-jain-225/MindSphere",
    status: "completed",
    category: "Health & Wellness",
    duration: "1.5 months",
    features: [
      "Mood tracking with visual analytics",
      "Guided mindfulness exercises",
      "Personal journaling system",
      "AI-powered wellness recommendations",
    ],
    course: "Full Stack Development & AI",
  },
  {
    id: 7,
    title: "Edvanta – EdTech Learning Platform",
    des: "A full-featured educational technology platform with course management, video lessons, progress tracking, and quiz assessments. Includes instructor dashboard for content management and student analytics.",
    img: "/edvanta.png",
    techStack: ["React", "Vite", "Tailwind CSS", "Python", "Flask", "MongoDB"],
    demoLink: "https://edvanta-web.vercel.app",
    sourceLink: "https://github.com/tanish-jain-225/edvanta",
    status: "completed",
    category: "EdTech",
    duration: "2 months",
    features: [
      "Course management system",
      "Video lesson streaming",
      "Progress tracking dashboard",
      "Quiz and assessment engine",
    ],
    course: "Educational Technology",
  },
];

export const workExperience: WorkExperienceItem[] = [
  {
    id: 1,
    title: "Engineering Student at VESIT",
    desc: "Pursuing B.E. in Automation and Robotics at Vivekanand Education Society's Institute of Technology (VESIT), Mumbai. Building real-world projects across web development, embedded systems, and AI while maintaining strong academic performance.",
    thumbnail: "/exp1.svg",
  },
  {
    id: 2,
    title: "Frontend Development Intern — Plasmid",
    desc: "Completed a remote frontend development internship at Plasmid, Bangalore. Built responsive and modern web interfaces using HTML, CSS, JavaScript, and Bootstrap. Collaborated with the team to deliver pixel-perfect designs and optimize page performance.",
    thumbnail: "/exp2.svg",
  },
  {
    id: 3,
    title: "Full Stack Development Intern — BWS",
    desc: "Completed a remote internship at BWS, New Delhi. Developed full-stack web applications using Python, Flask, and Bootstrap. Built dynamic Single Page Applications with RESTful APIs and database integration. Gained hands-on experience in backend architecture.",
    thumbnail: "/exp3.svg",
  },
  {
    id: 4,
    title: "Continuous Learning & Open Source",
    desc: "Actively building and shipping projects using the MERN stack, Next.js, and AI tools. Exploring cutting-edge technologies like LangChain, Hugging Face, and Three.js. Passionate about open-source contributions and community-driven development.",
    thumbnail: "/exp4.svg",
  },
];

export const socialMedia: SocialMediaItem[] = [
  {
    id: 1,
    img: "/git.svg",
    name: "GitHub",
    url: "https://github.com/tanish-jain-225",
    icon: "FaGithub",
  },
  {
    id: 2,
    img: "/link.svg",
    name: "LinkedIn",
    url: "https://linkedin.com/in/tanish-jain-tj02022005",
    icon: "FaLinkedin",
  },
];

// Personal Information
export const personalInfo: PersonalInfo = {
  name: "Tanish Sanghvi",
  email: "tanishjain020205@gmail.com",
  location: "Mumbai, India",
  university: "VESIT",
  degree: "Bachelor of Engineering - Automation & Robotics",
  status: "Full Stack Developer & Engineering Student",
  bio: "Full Stack Developer and Engineering student specializing in building scalable web applications and AI-powered solutions. Passionate about clean code, user experience, and continuous learning.",
  experience: "3+ years",
  projectsCompleted: "15+",
  technologiesUsed: "25+",
  avatar: "/profile.svg",
};

// Contact Information
export const contactInfo: ContactInfo = {
  title: "Let's Connect",
  subtitle:
    "Have a project in mind or want to collaborate? I'd love to hear from you. Let's build something great together!",
  email: "tanishjain020205@gmail.com",
  phone: "+91 98765 43210",
  location: "Mumbai, India",
  availability: "Available for student collaborations and project partnerships",
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
    "Full Stack Developer and Engineering student at VESIT, Mumbai. I build scalable web applications, AI solutions, and love turning ideas into reality.",
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
    "Full Stack Developer and Engineering student at VESIT with a passion for building impactful digital products and exploring cutting-edge technologies.",
  items: [
    {
      id: 1,
      title: "Academics & Innovation",
      description: "Merging theoretical concepts with real-world applications",
      img: "/b1.svg",
      spareImg: "",
      content: {
        type: "engineering",
        text: "Built and applied microcontroller-based systems using N76E003 for real-time applications. Also worked on Web development projects using MERN stack. Balanced academic and personal projects to enhance practical skills.",
        stats: [
          { label: "GPA", value: "7.5" },
          { label: "Projects Completed", value: "6+" },
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
        text: "Open to working with interdisciplinary teams for engineering, web or robotics-based hackathons.",
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
        text: "Comfortable with MERN Stack, Python and DSA",
        note: "Currently exploring: LangChain and Hugging Face AI Models",
      },
    },
    {
      id: 4,
      title: "Safe Load Indicator System",
      description: "Real-time safety system for crane operators",
      img: "/b4.svg",
      spareImg: "",
      content: {
        type: "project",
        text: "Designed an SLI using accelerometers & gyros for jerk detection and safety logging. Data used to analyze operator behavior.",
        technologies: ["N76E003", "MPU6050", "Serial Logger", "TM1640 Display"],
        repository: "Private field deployment",
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
        text: "Built with MERN stack for smooth customer and admin experience. Integrated authentication and cart flow with cash order support.",
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
    link: "/link.svg",
  },
  profile: "/profile.svg",
  confetti: "/confetti.gif",
};
