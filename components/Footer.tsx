"use client";

import React from "react";
import { navItems, socialMedia, footerData, personalInfo, uiText } from "@/data";
import { getIcon, FaEnvelope } from "@/lib/icons";
import { scrollToSection } from "@/lib/utils";

const Footer = () => {
  const handleSmoothScroll = (
    e: React.MouseEvent<HTMLAnchorElement>,
    targetId: string
  ) => {
    e.preventDefault();
    scrollToSection(targetId, true);
  };

  return (
    <footer
      role="contentinfo"
      className="w-full border-t border-zinc-800/80 bg-gradient-to-b from-[#09090b] to-[#050507] text-zinc-100 py-12 px-4 sm:px-6 lg:px-8"
    >
      <div className="max-w-5xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-12 gap-8 md:gap-10">
          <div className="sm:col-span-2 md:col-span-5 space-y-2.5">
            <h2 className="text-base font-semibold tracking-tight text-zinc-100">
              {footerData.logo.text}
            </h2>
            <p className="text-sm text-zinc-400 leading-relaxed max-w-sm">
              {footerData.description}
            </p>
          </div>

          <div className="md:col-span-3 space-y-2.5">
            <h3 className="text-xs font-mono uppercase tracking-wider text-zinc-400">
              {uiText.footer.quickLinks}
            </h3>
            <ul className="space-y-1">
              {navItems.map((item) => (
                <li key={item.link}>
                  <a
                    href={item.link}
                    aria-label={`Scroll to ${item.name} section`}
                    onClick={(e) => handleSmoothScroll(e, item.link)}
                    className="inline-flex items-center text-sm text-zinc-400 hover:text-zinc-100 transition-colors rounded px-1 py-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zinc-200"
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-4 space-y-2.5">
            <h3 className="text-xs font-mono uppercase tracking-wider text-zinc-400">
              {uiText.footer.contact}
            </h3>
            <ul className="space-y-1.5">
              <li>
                <a
                  href={`mailto:${personalInfo.email}`}
                  aria-label={`Send email to ${personalInfo.email}`}
                  className="inline-flex items-center gap-2 text-sm text-zinc-400 hover:text-zinc-100 transition-colors break-all rounded px-1 py-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zinc-200"
                >
                  <FaEnvelope className="w-3.5 h-3.5 text-zinc-400 shrink-0" aria-hidden="true" />
                  <span>{personalInfo.email}</span>
                </a>
              </li>
              {socialMedia.map((social) => {
                const IconComponent = getIcon(social.icon);
                return (
                  <li key={social.id}>
                    <a
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`Visit my ${social.name} profile (opens in new tab)`}
                      className="inline-flex items-center gap-2 text-sm text-zinc-400 hover:text-zinc-100 transition-colors break-all rounded px-1 py-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zinc-200"
                    >
                      <IconComponent className="w-3.5 h-3.5 text-zinc-400 shrink-0" aria-hidden="true" />
                      <span>{social.url.replace("https://", "")}</span>
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-zinc-800/80 flex flex-col sm:flex-row justify-between items-center gap-2 text-xs font-mono text-zinc-400">
          <p>
            &copy; {footerData.copyright.year} {footerData.copyright.text}.{" "}
            {uiText.footer.allRightsReserved}
          </p>
          <p>{footerData.builtWith}</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
