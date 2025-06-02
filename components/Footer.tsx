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
    <footer className="p-8 border-t border-white/10 relative mx-auto w-[90vw]">
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
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">          {/* Logo and description */}
          <div className="col-span-1 md:col-span-2">
            <h2 className="text-xl font-bold text-white flex items-center">
              <span className="text-3xl mr-2">{footerData.logo.text}</span>
              <div className={`w-2 h-8 bg-${footerData.logo.accent}-500 rounded-full`}></div>
            </h2>
            
            <p className="mt-4 text-[#BEC1DD] text-sm leading-relaxed max-w-md">
              {footerData.description}
            </p>
          </div>
            {/* Navigation */}
          <div>
            <h3 className="text-white font-semibold mb-4">{uiText.footer.quickLinks}</h3>            <ul className="space-y-3">
              {navItems.map((item, index) => {
                const IconComponent = FaIcons[item.icon as keyof typeof FaIcons];
                return (
                  <li key={index}>
                    <a 
                      href={item.link} 
                      onClick={(e) => handleSmoothScroll(e, item.link)}
                      className="text-[#BEC1DD] hover:text-white transition-colors hover:underline flex items-center gap-2 text-sm cursor-pointer"
                    >
                      <IconComponent size={12} />
                      {item.name}
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>            {/* Contact Info */}
          <div>
            <h3 className="text-white font-semibold mb-4">{uiText.footer.contact}</h3>
            <ul className="space-y-3">
              <li>
                <a 
                  href={`mailto:${personalInfo.email}`} 
                  className="text-[#BEC1DD] hover:text-white transition-colors flex items-center gap-2 text-sm"
                >
                  <FaIcons.FaEnvelope size={12} />
                  {personalInfo.email}
                </a>
              </li>
              {socialMedia.slice(0, 2).map((social) => {
                const IconComponent = FaIcons[social.icon as keyof typeof FaIcons];
                return (
                  <li key={social.id}>
                    <a 
                      href={social.url} 
                      className="text-[#BEC1DD] hover:text-white transition-colors flex items-center gap-2 text-sm"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <IconComponent size={12} />
                      {social.url.replace('https://', '')}
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
          <div className="mt-12 pt-6 border-t border-white/10 flex flex-col md:flex-row justify-between items-center">
          <p className="text-[#BEC1DD] text-sm">
            &copy; {footerData.copyright.year} {footerData.copyright.text}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
