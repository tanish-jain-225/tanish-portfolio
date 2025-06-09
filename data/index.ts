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
    enabled: true,
  },
};

export const sectionTitles = {
  experience: "Professional & Academic Experience",
  projects: "Highlighted Projects",
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
    copy: "Copy Email",
    copied: "Copied!",
    copyError: "Copy to clipboard failed.",
    copyNotSupported: "Copy to clipboard is not supported in this browser.",
  },
};

export const heroData = {
  subtitle: "Engineering Student",
  title: "Building Tomorrow's Technology Today And Learning Along The Way",
  description:
    "Hi, I'm Tanish, Engineering Student at Vivekanand Education Society's Institute of Technology.",
  ctaButton: {
    text: "View My Projects",
    link: "#projects",
    icon: "FaLocationArrow",
    position: "right",
  },
};

export const techStack = [
  "HTML/CSS",
  "JavaScript",
  "TypeScript",
  "Python",
  "React",
  "Next.js",
  "Node.js",
  "MongoDB",
  "SQL",
  "OpenCV",
  "Git",
  "Flask",
  "Tailwind CSS",
  "Bootstrap",
  "Express.js",
  "Vercel",
];

export const projects = [
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
];

export const workExperience = [
  {
    id: 1,
    title: "Engineering Student",
    desc: "Currently pursuing Bachelor of Engineering at Vivekanand Education Society's Institute of Technology, specializing in Automation and Robotics Branch and developing practical skills through various projects.",
    thumbnail: "/exp1.svg",
  },
  {
    id: 2,
    title: "Frontend Development Internship",
    desc: "Completed remote internship in Plasmid, located at Banglore. Implemented frontend skills like HTML, CSS, JS and Bootstrap in building responsive and modern web design across websites.",
    thumbnail: "/exp2.svg",
  },
  {
    id: 3,
    title: "Full Stack Development Internship",
    desc: "Completed remote internship in BWS, located at New Delhi. Worked upon skills such as Python, Flask and Bootstrap in building web applications across front-end and back-end. Created dynamic Single Page Applications.",
    thumbnail: "/exp3.svg",
  },
  {
    id: 4,
    title: "Dynamic Learning & Active Project Building",
    desc: "Worked upon various projects in the field of Web development, continuously learning evolving technologies like MongoDB, Express, React, NodeJS, Tailwind, NextJS and Vercel to enhance skills and knowledge.",
    thumbnail: "/exp4.svg",
  },
];

export const socialMedia = [
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
export const personalInfo = {
  name: "Tanish Sanghvi",
  email: "tanishjain020205@gmail.com",
  location: "Mumbai, India",
  university: "VESIT",
  degree: "Bachelor of Engineering - Computer Science",
  status: "Engineering Student",
  bio: "Engineering student passionate about creating innovative solutions to real-world problems. Constantly learning and exploring new technologies.",
  experience: "3+ years",
  projectsCompleted: "15+",
  technologiesUsed: "25+",
  avatar: "/profile.svg",
};

// Contact Information
export const contactInfo = {
  title: "Let's Connect",
  subtitle:
    "Ready to collaborate on exciting projects? Let's build something amazing together!",
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
export const footerData = {
  logo: {
    text: "Tanish Sanghvi",
    accent: "purple",
  },
  description:
    "Engineering student passionate about creating innovative solutions to real-world problems. Constantly learning and exploring new technologies.",
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
  socialLinks: socialMedia,
};

// Bento Grid Data - About Me Section
export const bentoGridData = {
  title: "About Me",
  subtitle:
    "I'm a passionate Engineering student at Vivekanand Education Society's Institute of Technology with a deep love for technology and innovation.",
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

// Centralized Images Configuration
export const images = {
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
