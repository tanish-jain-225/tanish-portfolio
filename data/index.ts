export const navItems = [
  { name: "Home", link: "#home", icon: "FaHome" },
  { name: "About", link: "#about", icon: "FaUser" },
  { name: "Projects", link: "#projects", icon: "FaProjectDiagram" },
  { name: "Experience", link: "#experience", icon: "FaBriefcase" },
  { name: "Contact", link: "#contact", icon: "FaEnvelope" },
];

export const navigationConfig = {
  resumeButton: {
    text: "Resume",
    link: "/resume.pdf", // You can update this to actual resume link
    enabled: true
  }
};

export const sectionTitles = {
  experience: "My Work Experience",
  projects: "Recent Projects",
  projectPortfolio: "Project Portfolio"
};

export const sectionDescriptions = {
  projectPortfolio: "A comprehensive collection of academic and personal projects showcasing engineering skills and innovation"
};

export const uiText = {
  experience: {
    viewDetails: "View Details",
    linkedInProfile: "https://www.linkedin.com/in/tanish-jain-tj02022005"
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
    allStatus: "All Status"
  },
  footer: {
    quickLinks: "Quick Links",
    contact: "Contact"
  },
  contact: {
    connectWithMe: "Connect with me",
    sending: "Sending..."
  }
};

export const heroData = {
  subtitle: "Engineering Student",
  title: "Building Tomorrow's Technology Today And Learning Along The Way",
  description: "Hi, I'm Tanish, Engineering Student at Mumbai University.",
  ctaButton: {
    text: "View My Projects",
    link: "#projects",
    icon: "FaLocationArrow",
    position: "right"
  }
};

export const techStack = [
  "HTML/CSS",
  "JavaScript",
  "TypeScript",
  "Python",
  "Java",
  "C++",
  "Arduino",
  "React",
  "Next.js",
  "Three.js",
  "Node.js",
  "MongoDB",
  "SQL",
  "Firebase",
  "Unity",
  "Blender",
  "OpenCV",
  "TensorFlow",
  "Blockchain",
  "IoT",
  "MATLAB",
  "Git",
  "Docker"
];

export const projectCategories = [
  {
    name: "Educational Simulation",
    count: 1,
    color: "bg-blue-500/20 text-blue-400"
  },
  {
    name: "Social Platform",
    count: 1,
    color: "bg-green-500/20 text-green-400"
  },
  {
    name: "IoT & Sustainability",
    count: 1,
    color: "bg-emerald-500/20 text-emerald-400"
  },
  {
    name: "Augmented Reality",
    count: 1,
    color: "bg-purple-500/20 text-purple-400"
  },
  {
    name: "AI & Computer Vision",
    count: 1,
    color: "bg-orange-500/20 text-orange-400"
  },
  {
    name: "Blockchain & Security",
    count: 1,
    color: "bg-yellow-500/20 text-yellow-400"
  }
];

export const projectStats = {
  totalProjects: 6,
  completedProjects: 3,
  inProgressProjects: 2,
  featuredProjects: 1,
  technologiesUsed: 25,
  coursesIntegrated: 6
};

export const projects = [
  {
    id: 1,
    title: "Interactive Solar System Simulation",
    des: "A physics-based educational tool that simulates planetary orbits and gravitational forces in our solar system. Features real-time calculations and interactive controls.",
    img: "/p1.svg",
    techStack: ["React", "Three.js", "TypeScript", "WebGL", "Physics.js"],
    demoLink: "https://solar-sim-demo.vercel.app",
    sourceLink: "https://github.com/tanishjain/solar-system-simulation",
    status: "completed",
    category: "Educational Simulation",
    duration: "3 months",
    features: [
      "Real-time orbital mechanics simulation",
      "Interactive planetary controls",
      "Educational tooltips and data",
      "Responsive 3D visualization"
    ],
    achievements: [
      "Featured in Physics Department showcase",
      "90+ accuracy in orbital calculations",
      "Used by 200+ students"
    ],
    course: "Physics II - Mechanics"
  },
  {
    id: 2,
    title: "Campus Connect - Student Hub",
    des: "A comprehensive platform for college students to share notes, coordinate study groups, find project partners, and manage academic schedules collaboratively.",
    img: "/p2.svg",
    techStack: ["Next.js", "TypeScript", "Tailwind CSS", "MongoDB", "Socket.io"],
    demoLink: "https://campus-connect-demo.vercel.app",
    sourceLink: "https://github.com/tanishjain/campus-connect",
    status: "in-progress",
    category: "Social Platform",
    duration: "6 months",
    features: [
      "Real-time chat and study groups",
      "Note sharing with version control",
      "Project partner matching system",
      "Academic calendar integration"
    ],
    achievements: [
      "150+ active users in beta",
      "Reduced study group formation time by 60%",
      "Integrated with university LMS"
    ],
    course: "Web Development & Database Systems"
  },
  {
    id: 3,
    title: "Smart Waste Management IoT System",
    des: "IoT-based solution that monitors waste bin levels using ultrasonic sensors, optimizes collection routes, and provides real-time analytics dashboard.",
    img: "/p3.svg",
    techStack: ["Arduino", "Python", "MQTT", "React", "Firebase", "Maps API"],
    demoLink: "https://waste-management-iot.vercel.app",
    sourceLink: "https://github.com/tanishjain/smart-waste-management",
    status: "featured",
    category: "IoT & Sustainability",
    duration: "4 months",
    features: [
      "Real-time bin level monitoring",
      "Route optimization algorithms",
      "Predictive analytics dashboard",
      "Mobile alerts for collection teams"
    ],
    achievements: [
      "40% reduction in collection costs",
      "Featured in Engineering Expo 2024",
      "Patent application filed",
      "Implemented in campus pilot program"
    ],
    course: "Engineering Design & IoT Systems"
  },
  {
    id: 4,
    title: "Augmented Reality Lab Assistant",
    des: "AR application that helps engineering students visualize complex equipment operation, safety procedures, and 3D models in laboratory environments.",
    img: "/p4.svg",
    techStack: ["Unity", "AR Foundation", "C#", "Blender", "Vuforia"],
    demoLink: "https://ar-lab-assistant.vercel.app",
    sourceLink: "https://github.com/tanishjain/ar-lab-assistant",
    status: "completed",
    category: "Augmented Reality",
    duration: "5 months",
    features: [
      "3D equipment visualization",
      "Step-by-step safety procedures",
      "Interactive component identification",
      "Multi-marker tracking system"
    ],
    achievements: [
      "Reduced lab training time by 50%",
      "100% safety compliance improvement",
      "Adopted by 3 engineering departments",
      "Winner of Innovation Challenge 2024"
    ],
    course: "Computer Graphics & Human-Computer Interaction"
  },
  {
    id: 5,
    title: "Traffic Flow Optimization System",
    des: "AI-powered traffic management system using computer vision to analyze traffic patterns and optimize signal timing for reduced congestion.",
    img: "/p1.svg",
    techStack: ["Python", "OpenCV", "TensorFlow", "Flask", "PostgreSQL"],
    demoLink: "https://traffic-optimization-demo.vercel.app",
    sourceLink: "https://github.com/tanishjain/traffic-optimization",
    status: "completed",
    category: "AI & Computer Vision",
    duration: "4 months",
    features: [
      "Real-time vehicle detection",
      "Traffic density analysis",
      "Dynamic signal optimization",
      "Congestion prediction models"
    ],
    achievements: [
      "30% reduction in average wait time",
      "Best Final Year Project Award",
      "Presented at IEEE conference",
      "City traffic department interest"
    ],
    course: "Artificial Intelligence & Machine Learning"
  },
  {
    id: 6,
    title: "Blockchain-Based Academic Credentials",
    des: "Secure, tamper-proof digital certificate system using blockchain technology to verify and store academic achievements and certifications.",
    img: "/p2.svg",
    techStack: ["Solidity", "Web3.js", "React", "Ethereum", "IPFS"],
    demoLink: "https://blockchain-credentials-demo.vercel.app",
    sourceLink: "https://github.com/tanishjain/blockchain-credentials",
    status: "in-progress",
    category: "Blockchain & Security",
    duration: "6 months",
    features: [
      "Immutable certificate storage",
      "Smart contract verification",
      "Decentralized identity management",
      "QR code certificate validation"
    ],
    achievements: [
      "Zero certificate fraud potential",
      "Hackathon finalist project",
      "University adoption proposal",
      "Featured in blockchain conference"
    ],
    course: "Distributed Systems & Cryptography"
  }, 
];

export const workExperience = [
  {
    id: 1,
    title: "Engineering Student",
    desc: "Currently pursuing Bachelor of Engineering at Mumbai University, specializing in Computer Science and developing practical skills through various projects.",
    className: "md:col-span-2",
    thumbnail: "/exp1.svg",
  },
  {
    id: 2,
    title: "Frontend Development Projects", 
    desc: "Developed multiple responsive web applications using React, Next.js, and modern CSS frameworks, focusing on user experience and performance optimization.",
    className: "md:col-span-2",
    thumbnail: "/exp2.svg",
  },
  {
    id: 3,
    title: "Full Stack Development",
    desc: "Built complete web applications with MERN stack, including database design, API development, and deployment on various platforms.",
    className: "md:col-span-2", 
    thumbnail: "/exp3.svg",
  },
  {
    id: 4,
    title: "Open Source Contributor",
    desc: "Actively contributing to open source projects and building personal projects that solve real-world problems using various technologies.",
    className: "md:col-span-2",
    thumbnail: "/exp4.svg",
  },
];

export const socialMedia = [
  {
    id: 1,
    img: "/git.svg",
    name: "GitHub",
    url: "https://github.com/tanish-jain-225",
    icon: "FaGithub"
  },
  {
    id: 2,
    img: "/link.svg",
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/tanish-jain-tj02022005",
    icon: "FaLinkedin"
  },
];

// Personal Information
export const personalInfo = {
  name: "Tanish Sanghvi",
  email: "tanishjain020205@gmail.com",
  location: "Mumbai, India",
  university: "Mumbai University",
  degree: "Bachelor of Engineering - Computer Science",
  status: "Engineering Student",
  bio: "Engineering student passionate about creating innovative solutions to real-world problems. Constantly learning and exploring new technologies.",
  experience: "3+ years",
  projectsCompleted: "15+",
  technologiesUsed: "25+",
  avatar: "/profile.svg"
};

// Contact Information
export const contactInfo = {
  title: "Let's Connect",
  subtitle: "Ready to collaborate on exciting projects? Let's build something amazing together!",
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
      { name: "message", label: "Your Message", type: "textarea", required: true }
    ],
    submitButton: "Send Message",
    successMessage: "Thanks for reaching out! I'll get back to you soon.",
    errorMessage: "Something went wrong. Please try again."
  },
  details: {
    title: "Contact Information",
    items: [
      {
        icon: "FaEnvelope",
        label: "Email",
        value: "tanishjain020205@gmail.com"
      },
      {
        icon: "FaPhone",
        label: "Phone",
        value: "+91-7021341948"
      },
      {
        icon: "FaMapMarkerAlt",
        label: "Location",
        value: "Mumbai, India"
      }
    ]
  }
};

// Footer Data
export const footerData = {
  logo: {
    text: "Tanish Sanghvi",
    accent: "purple"
  },
  description: "Engineering student passionate about creating innovative solutions to real-world problems. Constantly learning and exploring new technologies.",
  sections: [
    {
      title: "Quick Links",
      items: navItems
    },
    {
      title: "Projects",
      items: [
        { name: "Solar System Simulation", link: "#projects" },
        { name: "Campus Connect", link: "#projects" },
        { name: "Smart Waste Management", link: "#projects" },
        { name: "AR Lab Assistant", link: "#projects" }
      ]
    }
  ],
  copyright: {
    text: "Built by Tanish Sanghvi",
    year: new Date().getFullYear()
  },
  socialLinks: socialMedia
};

// Bento Grid Data
export const bentoGridData = {
  items: [
    {
      id: 1,
      title: "Academic Excellence & Leadership",
      description: "Maintaining high academic standards while leading collaborative projects",
      className: "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]",
      imgClassName: "w-full h-full",
      titleClassName: "justify-end",
      img: "/b1.svg",
      spareImg: "",
      content: {
        type: "academic",
        text: "I excel in team projects and believe that clear communication is key to academic success.",
        stats: [
          { label: "GPA", value: "3.8" },
          { label: "Course projects completed", value: "8+" }
        ]
      }
    },
    {
      id: 2,
      title: "Virtual Collaboration Ready",
      description: "Available for cross-university collaborations and study groups",
      className: "lg:col-span-2 md:col-span-3 md:row-span-2",
      imgClassName: "",
      titleClassName: "justify-start",
      img: "",
      spareImg: "",
      content: {
        type: "collaboration",
        text: "Open to virtual study sessions and project collaborations with students from other universities.",
        availability: {
          status: "Available for study groups",
          schedule: "After class hours"
        }
      }
    },
    {
      id: 3,
      title: "Tech Stack & Learning",
      description: "Technologies I work with and continuously learn",
      className: "lg:col-span-2 md:col-span-3 md:row-span-2",
      imgClassName: "",
      titleClassName: "justify-start",
      img: "",
      spareImg: "",
      content: {
        type: "techstack",
        text: "Preferred technologies:",
        note: "Always learning new technologies"
      }
    },
    {
      id: 4,
      title: "Engineering Problem Solver",
      description: "Applying engineering concepts to real-world challenges",
      className: "lg:col-span-2 md:col-span-3 md:row-span-1",
      imgClassName: "",
      titleClassName: "justify-start",
      img: "/grid.svg",
      spareImg: "",
      content: {
        type: "engineering",
        text: "Passionate about applying engineering concepts to solve real-world problems.",
        interests: [
          { name: "Robotics", icon: "/three.svg", color: "purple" },
          { name: "IoT", icon: "/fm.svg", color: "blue" },
          { name: "Web Dev", icon: "/ts.svg", color: "green" }
        ],
        currentStudy: "Currently studying: Data Structures and Algorithms"
      }
    },
    {
      id: 5,
      title: "IoT Traffic Management System",
      description: "Current project: Smart traffic optimization using IoT sensors",
      className: "md:col-span-3 md:row-span-2",
      imgClassName: "absolute right-0 bottom-0 md:w-96 w-60",
      titleClassName: "justify-center md:justify-start lg:justify-center",
      img: "/b5.svg",
      spareImg: "/grid.svg",
      content: {
        type: "project",
        text: "Developing an IoT-based traffic management system that optimizes signal timing based on real-time traffic density.",
        technologies: [
          "Arduino Uno",
          "IR Sensors", 
          "Python for data processing"
        ],
        repository: "Documentation on GitHub"
      }
    },
    {
      id: 6,
      title: "Let's Connect & Collaborate",
      description: "Ready to work together on innovative projects",
      className: "lg:col-span-2 md:col-span-3 md:row-span-1",
      imgClassName: "",
      titleClassName: "justify-center md:max-w-full max-w-60 text-center",
      img: "",
      spareImg: "",
      content: {
        type: "contact",
        text: "I'm looking to connect with other engineering students for hackathons and collaborative projects.",
        email: "tanishjain020205@gmail.com"
      }
    }
  ]
};

// About Section Data
export const aboutData = {
  title: "About Me",
  subtitle: "Get to know me better",
  bio: "I'm a passionate Computer Science Engineering student at Mumbai University with a deep love for technology and innovation. My journey in tech started with curiosity about how things work, which led me to explore various domains including web development, IoT, AI, and blockchain.",
  highlights: [
    "🎓 Computer Science Engineering Student",
    "💻 Full Stack Developer",
    "🤖 IoT & AI Enthusiast",
    "🌟 Open Source Contributor",
    "🏆 Award-winning Projects",
    "🎯 Problem Solver"
  ],
  stats: [
    { label: "Projects Completed", value: "15+", icon: "FaProjectDiagram" },
    { label: "Technologies Used", value: "25+", icon: "FaCode" },
    { label: "Years Learning", value: "3+", icon: "FaGraduationCap" },
    { label: "GitHub Repos", value: "50+", icon: "FaGithub" }
  ],
  skills: {
    title: "Skills & Technologies",
    categories: [
      {
        name: "Frontend",
        skills: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Three.js"]
      },
      {
        name: "Backend",
        skills: ["Node.js", "Python", "MongoDB", "PostgreSQL", "Firebase"]
      },
      {
        name: "Mobile & Desktop",
        skills: ["React Native", "Flutter", "Electron"]
      },
      {
        name: "DevOps & Tools",
        skills: ["Git", "Docker", "AWS", "Vercel", "Linux"]
      },
      {
        name: "Other",
        skills: ["Arduino", "IoT", "Blockchain", "AI/ML", "Unity"]
      }
    ]
  }
};

// Centralized Images Configuration
export const images = {
  backgrounds: {
    projectsBackground: "/bg.png",
    footerGrid: "/footer-grid.svg",
    cloud: "/cloud.svg",
    grid: "/grid.svg"
  },
  icons: {
    git: "/git.svg",
    link: "/link.svg"
  },
  profile: "/profile.svg",
  confetti: "/confetti.gif"
};

// Site Metadata
export const siteMetadata = {
  title: "Tanish Sanghvi - Engineering Student & Developer",
  description: "Computer Science Engineering student passionate about creating innovative solutions. Explore my projects in web development, IoT, AI, and more.",
  keywords: ["Engineering Student", "Full Stack Developer", "React", "Next.js", "IoT", "AI", "Blockchain", "Mumbai University"],
  author: "Tanish Sanghvi",
  siteUrl: "https://tanishsanghvi.vercel.app",
  image: "/profile.svg",
  twitterHandle: "@tanishjain",
  locale: "en_US"
};

// Navigation Animation Settings
export const animationSettings = {
  staggerDelay: 0.1,
  fadeInDuration: 0.6,
  slideInDistance: 50,
  hoverScale: 1.05,
  clickScale: 0.95
};

// Theme Configuration
export const themeConfig = {
  colors: {
    primary: "#8B5CF6", // purple-500
    secondary: "#06B6D4", // cyan-500
    accent: "#F59E0B", // amber-500
    background: "#0A0A0F",
    surface: "#13162D",
    text: {
      primary: "#FFFFFF",
      secondary: "#BEC1DD",
      muted: "#6B7280"
    }
  },
  gradients: {
    primary: "from-purple-600 to-blue-600",
    secondary: "from-cyan-500 to-purple-500",
    accent: "from-amber-500 to-orange-500"
  }
};