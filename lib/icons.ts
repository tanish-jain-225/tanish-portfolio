/**
 * Centralized icon registry — avoids wildcard `import * as FaIcons`
 * which pulls the entire react-icons/fa set (~2500 icons) into the bundle.
 * Only the icons actually used in the app are imported here.
 */
import {
  FaHome,
  FaUser,
  FaProjectDiagram,
  FaBriefcase,
  FaEnvelope,
  FaLocationArrow,
  FaGithub,
  FaLinkedin,
  FaPhone,
  FaMapMarkerAlt,
  FaArrowUp,
  FaTwitter,
} from "react-icons/fa";
import type { IconType } from "react-icons";

export const iconMap: Record<string, IconType> = {
  FaHome,
  FaUser,
  FaProjectDiagram,
  FaBriefcase,
  FaEnvelope,
  FaLocationArrow,
  FaGithub,
  FaLinkedin,
  FaPhone,
  FaMapMarkerAlt,
  FaArrowUp,
  FaTwitter,
};

/**
 * Resolve an icon name string to its React component.
 * Falls back to FaEnvelope if the name is not found.
 */
export function getIcon(name: string): IconType {
  return iconMap[name] ?? FaEnvelope;
}

// Re-export commonly used icons for direct imports
export {
  FaHome,
  FaUser,
  FaProjectDiagram,
  FaBriefcase,
  FaEnvelope,
  FaLocationArrow,
  FaGithub,
  FaLinkedin,
  FaPhone,
  FaMapMarkerAlt,
  FaArrowUp,
  FaTwitter,
};
