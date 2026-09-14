"use client";

import React from "react";
import { navItems, socialMedia, footerData, personalInfo, uiText } from "@/data";
import { getIcon, FaEnvelope } from "@/lib/icons";

const Footer = () => {
  // Smooth scroll function for navigation
  const handleSmoothScroll = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault();
    
    // Remove the # from the target if it exists
    const elementId = targetId.startsWith('#') ? targetId.slice(1) : targetId;
    const targetElement = document.getElementById(elementId);
    
    if (targetElement) {
      targetElement.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    } else {
      // If element not found, try scrolling to top for home
      if (elementId === 'home') {
        window.scrollTo({
          top: 0,
          behavior: 'smooth'
        });
      }
    }
  };
  
  return (
    <footer className="relative w-full max-w-full mx-auto px-3 py-8 sm:p-8 border-t border-white/10 bg-[#181A2A] text-white overflow-hidden flex flex-col items-center" role="contentinfo">
      {/* Decorative background */}
      <div className="absolute inset-0 w-full h-full pointer-events-none select-none z-0">
        <div className="absolute top-0 left-1/4 w-60 sm:w-80 h-60 sm:h-80 rounded-full bg-purple-600/10 filter blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-60 sm:w-80 h-60 sm:h-80 rounded-full bg-blue-600/10 filter blur-3xl"></div>
        <div className="h-full w-full opacity-10 [background-image:linear-gradient(to_right,#1e2142_1px,transparent_1px),linear-gradient(to_bottom,#1e2142_1px,transparent_1px)] [background-size:32px_32px] sm:[background-size:40px_40px]"></div>
      </div>
      <div className="relative z-10 max-w-7xl mx-auto px-1 sm:px-4 md:px-6 lg:px-8 w-full flex flex-col">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 md:gap-12 items-start w-full">
          {/* Logo and description */}
          <div className="flex flex-col justify-start sm:col-span-2 md:col-span-1">
            <h2 className="text-lg sm:text-xl font-bold text-white flex items-center gap-2">
              <span className="text-xl sm:text-3xl gradient-text">{footerData.logo.text}</span>
              <div className="w-1.5 sm:w-2 h-6 sm:h-8 bg-purple-500 rounded-full"></div>
            </h2>
            <p className="mt-3 sm:mt-4 text-[#BEC1DD] text-xs sm:text-sm leading-relaxed max-w-xs sm:max-w-md break-words">
              {footerData.description}
            </p>
          </div>
          {/* Navigation */}
          <div className="flex flex-col">
            <h3 className="text-white font-semibold mb-2 sm:mb-4 text-sm sm:text-lg">{uiText.footer.quickLinks}</h3>
            <ul className="flex flex-col gap-2 sm:gap-3">
              {navItems.map((item, index) => {
                const IconComponent = getIcon(item.icon);
                return (
                  <li key={index} className="w-full">
                    <a 
                      href={item.link} 
                      aria-label={`Scroll to ${item.name} section`}
                      onClick={(e) => handleSmoothScroll(e, item.link)}
                      className="flex items-center gap-2 text-[#BEC1DD] hover:text-white transition-colors hover:underline text-xs sm:text-base cursor-pointer px-1.5 py-1 rounded-md break-all whitespace-normal w-full focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-purple-400 focus-visible:ring-offset-1 focus-visible:ring-offset-[#181A2A]"
                    >
                      <IconComponent size={16} className="min-w-[16px] min-h-[16px]" aria-hidden="true" />
                      <span className="break-all whitespace-normal w-full">{item.name}</span>
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>
          {/* Contact Info */}
          <div className="flex-1 min-w-[130px] sm:min-w-[200px] mb-6 md:mb-0">
            <h3 className="text-white font-semibold mb-2 sm:mb-4 text-sm sm:text-lg">{uiText.footer.contact}</h3>
            <ul className="flex flex-col gap-2 sm:gap-3">
              <li className="w-full">
                <a 
                  href={`mailto:${personalInfo.email}`} 
                  aria-label={`Send email to ${personalInfo.email}`}
                  className="flex items-center gap-2 text-[#BEC1DD] hover:text-white transition-colors text-xs sm:text-base px-1.5 py-1 break-all whitespace-normal w-full rounded-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-purple-400 focus-visible:ring-offset-1 focus-visible:ring-offset-[#181A2A]"
                  style={{lineHeight: '1.5'}}
                >
                  <FaEnvelope size={16} className="min-w-[16px] min-h-[16px]" aria-hidden="true" />
                  <span className="break-all whitespace-normal w-full">{personalInfo.email}</span>
                </a>
              </li>
              {socialMedia.map((social) => {
                const IconComponent = getIcon(social.icon);
                return (
                  <li key={social.id} className="w-full">
                    <a 
                      href={social.url} 
                      aria-label={`Visit my ${social.name} profile (opens in new tab)`}
                      className="flex items-center gap-2 text-[#BEC1DD] hover:text-white transition-colors text-xs sm:text-base px-1.5 py-1 rounded-md break-all whitespace-normal w-full focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-purple-400 focus-visible:ring-offset-1 focus-visible:ring-offset-[#181A2A]"
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{lineHeight: '1.5'}}
                    >
                      <IconComponent size={16} className="min-w-[16px] min-h-[16px]" aria-hidden="true" />
                      <span className="break-all whitespace-normal w-full">{social.url.replace('https://', '')}</span>
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
        <div className="mt-6 sm:mt-12 pt-4 sm:pt-6 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-2 md:gap-0 w-full">
          <p className="text-[#BEC1DD] text-[11px] sm:text-sm text-center md:text-left w-full md:w-auto break-words">
            &copy; {footerData.copyright.year} {footerData.copyright.text}. {uiText.footer.allRightsReserved}
          </p>
          <p className="text-[#BEC1DD]/60 text-[10px] sm:text-xs text-center md:text-right">
            {footerData.builtWith}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
