"use client";

import React from "react";
import { navItems, socialMedia, footerData, personalInfo, uiText } from "@/data";
import * as FaIcons from "react-icons/fa";

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
    <footer className="relative w-full max-w-full mx-auto p-6 sm:p-8 border-t border-white/10 bg-[#181A2A] text-white" role="contentinfo">
      {/* Decorative background */}
      <div className="absolute inset-0 w-full h-full pointer-events-none select-none z-0">
        <div className="absolute top-0 left-1/4 w-60 sm:w-80 h-60 sm:h-80 rounded-full bg-purple-600/10 filter blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-60 sm:w-80 h-60 sm:h-80 rounded-full bg-blue-600/10 filter blur-3xl"></div>
        <div className="h-full w-full opacity-10 [background-image:linear-gradient(to_right,#1e2142_1px,transparent_1px),linear-gradient(to_bottom,#1e2142_1px,transparent_1px)] [background-size:32px_32px] sm:[background-size:40px_40px]"></div>
      </div>
      <div className="relative z-10 max-w-7xl mx-auto px-2 sm:px-4 md:px-6 lg:px-8 w-full">
        <div className="flex flex-col md:flex-row flex-wrap gap-8 md:gap-10 items-stretch md:items-start w-full">
          {/* Logo and description */}
          <div className="flex-1 min-w-[180px] sm:min-w-[220px] flex flex-col justify-center md:justify-start mb-8 md:mb-0">
            <h2 className="text-lg sm:text-xl font-bold text-white flex items-center gap-2">
              <span className="text-2xl sm:text-3xl">{footerData.logo.text}</span>
              <div className={`w-2 h-8 bg-${footerData.logo.accent}-500 rounded-full`}></div>
            </h2>
            <p className="mt-4 text-[#BEC1DD] text-xs sm:text-sm leading-relaxed max-w-xs sm:max-w-md break-words">
              {footerData.description}
            </p>
          </div>
          {/* Navigation */}
          <div className="flex-1 min-w-[150px] sm:min-w-[200px] mb-8 md:mb-0">
            <h3 className="text-white font-semibold mb-3 sm:mb-4 text-base sm:text-lg">{uiText.footer.quickLinks}</h3>
            <ul className="flex flex-col gap-2 sm:gap-3">
              {navItems.map((item, index) => {
                const IconComponent = FaIcons[item.icon as keyof typeof FaIcons];
                return (
                  <li key={index} className="w-full">
                    <a 
                      href={item.link} 
                      onClick={(e) => handleSmoothScroll(e, item.link)}
                      className="flex items-center gap-2 text-[#BEC1DD] hover:text-white transition-colors hover:underline text-sm sm:text-base cursor-pointer px-2 py-1 rounded-md break-all whitespace-normal w-full"
                    >
                      <IconComponent size={18} />
                      <span className="break-all whitespace-normal w-full">{item.name}</span>
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>
          {/* Contact Info */}
          <div className="flex-1 min-w-[150px] sm:min-w-[200px] mb-8 md:mb-0">
            <h3 className="text-white font-semibold mb-3 sm:mb-4 text-base sm:text-lg">{uiText.footer.contact}</h3>
            <ul className="flex flex-col gap-2 sm:gap-3">
              <li className="w-full">
                <a 
                  href={`mailto:${personalInfo.email}`} 
                  className="flex items-center gap-2 text-[#BEC1DD] hover:text-white transition-colors text-sm sm:text-base px-2 py-1 break-all whitespace-normal w-full"
                  style={{lineHeight: '1.5'}}
                >
                  <FaIcons.FaEnvelope size={20} className="min-w-[20px] min-h-[20px]" />
                  <span className="break-all whitespace-normal w-full">{personalInfo.email}</span>
                </a>
              </li>
              {socialMedia.slice(0, 2).map((social) => {
                const IconComponent = FaIcons[social.icon as keyof typeof FaIcons];
                return (
                  <li key={social.id} className="w-full">
                    <a 
                      href={social.url} 
                      className="flex items-center gap-2 text-[#BEC1DD] hover:text-white transition-colors text-sm sm:text-base px-2 py-1 rounded-md break-all whitespace-normal w-full"
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{lineHeight: '1.5'}}
                    >
                      <IconComponent size={20} className="min-w-[20px] min-h-[20px]" />
                      <span className="break-all whitespace-normal w-full">{social.url.replace('https://', '')}</span>
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
        <div className="mt-8 sm:mt-12 pt-4 sm:pt-6 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-3 md:gap-0 w-full">
          <p className="text-[#BEC1DD] text-xs sm:text-sm text-center md:text-left w-full md:w-auto break-words">
            &copy; {footerData.copyright.year} {footerData.copyright.text}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
