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
    <footer className="p-8 border-t border-white/10 relative mx-auto w-[90vw]" role="contentinfo">
      {/* Blurred gradient bg */}
      <div className="absolute inset-0 w-full h-full">
        <div className="absolute top-0 left-1/4 w-96 h-96 rounded-full bg-purple-600/5 filter blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 rounded-full bg-blue-600/5 filter blur-3xl"></div>
      </div>
      
      {/* Grid background */}
      <div className="absolute inset-0 opacity-20">
        <div className="h-full w-full 
          [background-image:linear-gradient(to_right,#1e2142_1px,transparent_1px),linear-gradient(to_bottom,#1e2142_1px,transparent_1px)]
          [background-size:40px_40px]">
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col md:flex-row flex-wrap gap-10 md:gap-8 items-start w-full">
          {/* Logo and description */}
          <div className="flex-1 min-w-[250px] flex flex-col justify-center md:justify-start mb-8 md:mb-0">
            <h2 className="text-xl font-bold text-white flex items-center">
              <span className="text-3xl mr-2">{footerData.logo.text}</span>
              <div className={`w-2 h-8 bg-${footerData.logo.accent}-500 rounded-full`}></div>
            </h2>
            <p className="mt-4 text-[#BEC1DD] text-sm leading-relaxed max-w-md">
              {footerData.description}
            </p>
          </div>
          {/* Navigation */}
          <div className="flex-1 min-w-[200px] mb-8 md:mb-0">
            <h3 className="text-white font-semibold mb-4">{uiText.footer.quickLinks}</h3>
            <ul className="space-y-3">
              {navItems.map((item, index) => {
                const IconComponent = FaIcons[item.icon as keyof typeof FaIcons];
                return (
                  <li key={index}>
                    <a 
                      href={item.link} 
                      onClick={(e) => handleSmoothScroll(e, item.link)}
                      className="flex items-center gap-2 text-[#BEC1DD] hover:text-white transition-colors hover:underline text-base cursor-pointer px-2 py-1 rounded-md"
                    >
                      <IconComponent size={18} />
                      <span>{item.name}</span>
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>
          {/* Contact Info */}
          <div className="flex-1 min-w-[200px] mb-8 md:mb-0">
            <h3 className="text-white font-semibold mb-4">{uiText.footer.contact}</h3>
            <ul className="space-y-3 min-h-[64px]">
              <li>
                <a 
                  href={`mailto:${personalInfo.email}`} 
                  className="flex items-center gap-3 text-[#BEC1DD] hover:text-white transition-colors text-base min-h-[40px] px-2 py-1"
                  style={{lineHeight: '1.5', fontSize: '1rem'}}
                >
                  <FaIcons.FaEnvelope size={20} className="min-w-[20px] min-h-[20px]" />
                  <span className="truncate">{personalInfo.email}</span>
                </a>
              </li>
              {socialMedia.slice(0, 2).map((social) => {
                const IconComponent = FaIcons[social.icon as keyof typeof FaIcons];
                return (
                  <li key={social.id}>
                    <a 
                      href={social.url} 
                      className="flex items-center gap-3 text-[#BEC1DD] hover:text-white transition-colors text-base min-h-[40px] px-2 py-1 rounded-md"
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{lineHeight: '1.5', fontSize: '1rem'}}
                    >
                      <IconComponent size={20} className="min-w-[20px] min-h-[20px]" />
                      <span className="truncate">{social.url.replace('https://', '')}</span>
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
        <div className="mt-12 pt-6 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 md:gap-0 w-full">
          <p className="text-[#BEC1DD] text-sm text-center md:text-left w-full md:w-auto">
            &copy; {footerData.copyright.year} {footerData.copyright.text}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
