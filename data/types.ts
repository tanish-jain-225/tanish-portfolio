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
