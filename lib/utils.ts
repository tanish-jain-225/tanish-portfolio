import { ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

/** Return scroll behavior matching the user's reduced-motion OS preference. */
export function getPreferredScrollBehavior(): ScrollBehavior {
  if (
    typeof window !== "undefined" &&
    typeof window.matchMedia === "function" &&
    window.matchMedia("(prefers-reduced-motion: reduce)").matches
  ) {
    return "auto";
  }
  return "smooth";
}

/** Scroll to an anchor target (or top of document) and optionally move focus cleanly. */
export function scrollToSection(link: string, focusSection = false): void {
  if (typeof window === "undefined") return;
  const behavior = getPreferredScrollBehavior();
  const sectionId = link.replace(/^#/, "");

  if (sectionId) {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior, block: "start" });
      if (focusSection) {
        section.focus({ preventScroll: true });
      }
      return;
    }
  }

  window.scrollTo({ top: 0, behavior });
}
