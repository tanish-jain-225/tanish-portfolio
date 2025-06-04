"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { 
  FaLocationArrow, 
  FaGithub, 
  FaClock, 
  FaAward, 
  FaStar, 
  FaChevronDown,
  FaCode,
  FaLightbulb
} from "react-icons/fa";
import { MdCategory } from "react-icons/md";
import { uiText } from "@/data";

interface Project {
  id: number;
  title: string;
  des: string;
  img: string;
  techStack: string[];
  demoLink: string;
  sourceLink: string;
  status: string;
  category: string;
  duration: string;
  features?: string[];
  achievements?: string[];
  course?: string;
}

interface ProjectCardProps {
  project: Project;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const getStatusColor = (status: string) => {
    switch (status) {
      case "completed":
        return "bg-green-500/20 text-green-400 border-green-500/30";
      case "in-progress":
        return "bg-blue-500/20 text-blue-400 border-blue-500/30";
      case "featured":
        return "bg-purple-500/20 text-purple-400 border-purple-500/30";
      default:
        return "bg-gray-500/20 text-gray-400 border-gray-500/30";
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "featured":
        return <FaStar className="w-3 h-3" />;
      case "completed":
        return <FaAward className="w-3 h-3" />;
      default:
        return <FaClock className="w-3 h-3" />;
    }
  };

  return (
    <motion.div
      className="project-card"
      whileHover={{ y: -5 }}
      layout
    >      {/* Project Image */}
      <div className="project-image relative h-48 overflow-hidden" style={{position: 'relative', height: '12rem'}}>
        <Image 
          src={project.img} 
          alt={project.title}
          className="w-full h-full object-cover"
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#13162D] via-transparent to-transparent" />
        
        {/* Status Badge */}
        <div className={`status-badge absolute top-3 right-3 px-2 py-1 rounded-full border text-xs font-medium flex items-center gap-1 ${getStatusColor(project.status)}`}>
          {getStatusIcon(project.status)}
          {project.status.charAt(0).toUpperCase() + project.status.slice(1).replace('-', ' ')}
        </div>
      </div>

      {/* Content */}
      <div className="p-6 space-y-4">
        {/* Category & Duration */}
        <div className="flex items-center justify-between text-xs">
          <div className="flex items-center gap-1 text-purple-300">
            <MdCategory className="w-3 h-3" />
            <span>{project.category}</span>
          </div>
          <div className="flex items-center gap-1 text-gray-400">
            <FaClock className="w-3 h-3" />
            <span>{project.duration}</span>
          </div>
        </div>

        {/* Title */}
        <h3 className="font-bold text-lg text-white line-clamp-1">
          {project.title}
        </h3>

        {/* Description */}
        <p className="text-sm text-[#BEC1DD] line-clamp-2 leading-relaxed">
          {project.des}
        </p>        {/* Tech Stack */}
        <div className="flex flex-wrap gap-2">
          {project.techStack.slice(0, 4).map((tech: string, index: number) => (
            <span
              key={index}
              className="tech-stack-item px-2 py-1 rounded text-xs"
            >
              {tech}
            </span>
          ))}
          {project.techStack.length > 4 && (
            <span className="px-2 py-1 bg-purple-900/30 border border-purple-500/30 rounded text-xs text-purple-300">
              +{project.techStack.length - 4} more
            </span>
          )}
        </div>        {/* Course */}
        {project.course && (
          <div className="text-xs text-gray-400 flex items-center gap-1">
            <FaCode className="w-3 h-3" />
            <span>{uiText.projects.course}: {project.course}</span>
          </div>
        )}{/* Expand Button */}
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className="w-full flex items-center justify-center gap-2 py-2 text-sm text-purple-300 hover:text-purple-200 transition-colors"
        >
          <span>{isExpanded ? uiText.projects.showLess : uiText.projects.showMore}</span>
          <motion.div
            animate={{ rotate: isExpanded ? 180 : 0 }}
            transition={{ duration: 0.2 }}
          >
            <FaChevronDown className="w-3 h-3" />
          </motion.div>
        </button>

        {/* Expanded Content */}
        <AnimatePresence>
          {isExpanded && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="space-y-4 border-t border-white/10 pt-4"
            >
              {/* Features */}
              {project.features && project.features.length > 0 && (                <div>
                  <h4 className="text-sm font-medium text-white mb-2 flex items-center gap-2">
                    <FaLightbulb className="w-3 h-3 text-yellow-400" />
                    {uiText.projects.keyFeatures}
                  </h4>
                  <ul className="space-y-1">
                    {project.features.map((feature: string, index: number) => (
                      <li key={index} className="text-xs text-[#BEC1DD] flex items-start gap-2">
                        <span className="w-1 h-1 bg-purple-400 rounded-full mt-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Achievements */}
              {project.achievements && project.achievements.length > 0 && (                <div>
                  <h4 className="text-sm font-medium text-white mb-2 flex items-center gap-2">
                    <FaAward className="w-3 h-3 text-green-400" />
                    {uiText.projects.achievements}
                  </h4>
                  <ul className="space-y-1">
                    {project.achievements.map((achievement: string, index: number) => (
                      <li key={index} className="text-xs text-[#BEC1DD] flex items-start gap-2">
                        <span className="w-1 h-1 bg-green-400 rounded-full mt-2 flex-shrink-0" />
                        {achievement}
                      </li>
                    ))}
                  </ul>
                </div>
              )}              {/* All Tech Stack */}
              <div>
                <h4 className="text-sm font-medium text-white mb-2">{uiText.projects.technologiesUsed}</h4>
                <div className="flex flex-wrap gap-1">
                  {project.techStack.map((tech: string, index: number) => (
                    <span
                      key={index}
                      className="tech-stack-item px-2 py-1 rounded text-xs"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Action Buttons */}
        <div className="flex items-center justify-between pt-4 border-t border-white/10">          <a 
            href={project.sourceLink}
            target="_blank"
            rel="noopener noreferrer"
            className="action-button github-button flex items-center gap-2 px-3 py-2 rounded text-xs text-white transition-colors"
          >
            <FaGithub className="w-3 h-3" />
            <span>{uiText.projects.sourceCode}</span>
          </a>
            <a
            href={project.demoLink}
            target="_blank"
            rel="noopener noreferrer"
            className="action-button demo-button flex items-center gap-2 px-3 py-2 rounded text-xs text-purple-300 hover:text-purple-200 transition-colors"
          >
            <span>{uiText.projects.liveProject}</span>
            <FaLocationArrow className="w-3 h-3" />
          </a>
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
