'use client';

import React from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';
import { PROJECTS } from '@/lib/constants';
import { useLanguage } from '@/contexts/LanguageContext';

interface ProjectModalProps {
  isOpen: boolean;
  onClose: () => void;
  project: (typeof PROJECTS)[number];
}

const ProjectModal: React.FC<ProjectModalProps> = ({ isOpen, onClose, project }) => {
  const { language, t } = useLanguage();
  
  if (!isOpen) return null;

  // Get impact content with proper typing
  const getImpactContent = () => {
    if (language === 'ja' && 'impactJa' in project && project.impactJa) {
      return project.impactJa as {
        businessProblem: string;
        technicalAchievement: string;
        results: readonly string[];
      };
    }
    if ('impact' in project && project.impact) {
      return project.impact as {
        businessProblem: string;
        technicalAchievement: string;
        results: readonly string[];
      };
    }
    return null;
  };

  // Get architecture content with proper typing
  const getArchitectureContent = () => {
    if (language === 'ja' && 'architectureJa' in project && project.architectureJa) {
      return project.architectureJa as {
        before: readonly string[];
        after: readonly string[];
      };
    }
    if ('architecture' in project && project.architecture) {
      return project.architecture as {
        before: readonly string[];
        after: readonly string[];
      };
    }
    return null;
  };

  // Get features content
  const getFeaturesContent = () => {
    if (language === 'ja' && 'featuresJa' in project && project.featuresJa) {
      return project.featuresJa;
    }
    if ('features' in project && project.features) {
      return project.features;
    }
    return null;
  };

  // Get highlights content
  const getHighlightsContent = () => {
    if (language === 'ja' && 'highlightsJa' in project && project.highlightsJa) {
      return project.highlightsJa;
    }
    if ('highlights' in project && project.highlights) {
      return project.highlights;
    }
    return null;
  };

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 bg-black/80 backdrop-blur-sm"
        onClick={onClose}
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          className="relative w-full max-w-4xl max-h-[95vh] sm:max-h-[90vh] bg-slate-900 rounded-xl sm:rounded-2xl shadow-2xl overflow-hidden"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Close button - Fixed position for mobile */}
          <button
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
              onClose();
            }}
            className="absolute top-3 right-3 z-20 p-2.5 bg-black/40 hover:bg-black/60 active:bg-black/80 rounded-full text-white transition-colors duration-200 touch-manipulation"
            aria-label="Close modal"
          >
            <X size={20} />
          </button>

          {/* Header */}
          <div className="relative">
            <div className="h-32 sm:h-48 bg-gradient-to-br from-blue-600 to-purple-600 overflow-hidden relative">
              <Image 
                src={project.image} 
                alt={project.title}
                fill
                className="object-cover opacity-80"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600/80 to-purple-600/80"></div>
            </div>
            
            <div className="absolute bottom-3 sm:bottom-6 left-4 sm:left-6 right-12 sm:right-16">
              <h2 className="text-xl sm:text-3xl font-bold text-white mb-1 sm:mb-2 line-clamp-2">
                {language === 'ja' && project.titleJa ? project.titleJa : project.title}
              </h2>
              <p className="text-blue-100 text-sm sm:text-lg line-clamp-2">
                {language === 'ja' && project.descriptionJa ? project.descriptionJa : project.description}
              </p>
            </div>
          </div>
          
          {/* Content */}
          <div className="p-4 sm:p-6 max-h-[calc(95vh-8rem)] sm:max-h-[calc(90vh-12rem)] overflow-y-auto">
            <div className="space-y-6 sm:space-y-8">
              
              {/* Impact Section */}
              {'impact' in project && (
                <div>
                  <h3 className="text-base sm:text-xl font-bold text-slate-100 mb-3 sm:mb-4 flex items-center">
                    🎯 {t.projects.modal.projectImpact}
                  </h3>
                  <div className="grid sm:grid-cols-2 gap-4 sm:gap-6">
                    <div>
                      <h4 className="font-semibold text-blue-400 mb-1.5 sm:mb-2 text-sm sm:text-base">{t.projects.modal.businessProblem}</h4>
                      <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
                        {getImpactContent()?.businessProblem}
                      </p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-blue-400 mb-1.5 sm:mb-2 text-sm sm:text-base">{t.projects.modal.technicalAchievement}</h4>
                      <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
                        {getImpactContent()?.technicalAchievement}
                      </p>
                    </div>
                  </div>
                  <div className="mt-3 sm:mt-4">
                    <h4 className="font-semibold text-blue-400 mb-1.5 sm:mb-2 text-sm sm:text-base">{t.projects.modal.keyResults}</h4>
                    <ul className="list-disc list-inside text-slate-300 text-xs sm:text-sm space-y-1">
                      {getImpactContent()?.results?.map((result: string, index: number) => (
                        <li key={index}>{result}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              )}
              
              {/* Architecture Section */}
              {'architecture' in project && (
                <div>
                  <h3 className="text-base sm:text-xl font-bold text-slate-100 mb-3 sm:mb-4 flex items-center">
                    🏗️ {t.projects.modal.technicalArchitecture}
                  </h3>
                  <div className="grid sm:grid-cols-2 gap-4 sm:gap-6">
                    <div>
                      <h4 className="font-semibold text-red-400 mb-2 sm:mb-3 text-sm sm:text-base">{t.projects.modal.beforeManual} ❌</h4>
                      <ul className="space-y-1.5 sm:space-y-2 text-slate-300 text-xs sm:text-sm">
                        {getArchitectureContent()?.before?.map((item: string, index: number) => (
                          <li key={index} className="flex items-start">
                            <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-red-400 rounded-full mr-2 sm:mr-3 flex-shrink-0 mt-1.5"></span>
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-green-400 mb-2 sm:mb-3 text-sm sm:text-base">{t.projects.modal.afterAutomated} ✅</h4>
                      <ul className="space-y-1.5 sm:space-y-2 text-slate-300 text-xs sm:text-sm">
                        {getArchitectureContent()?.after?.map((item: string, index: number) => (
                          <li key={index} className="flex items-start">
                            <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-green-400 rounded-full mr-2 sm:mr-3 flex-shrink-0 mt-1.5"></span>
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              )}
              
              {/* Technologies */}
              <div>
                <h3 className="text-base sm:text-xl font-bold text-slate-100 mb-3 sm:mb-4 flex items-center">
                  🛠️ {t.projects.modal.technologiesUsed}
                </h3>
                <div className="flex flex-wrap gap-1.5 sm:gap-2">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-2 sm:px-3 py-0.5 sm:py-1 bg-blue-500/10 text-blue-400 rounded-full text-xs sm:text-sm font-medium border border-blue-500/20"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              
              {/* Key Features */}
              {'features' in project && (
                <div>
                  <h3 className="text-base sm:text-xl font-bold text-slate-100 mb-3 sm:mb-4 flex items-center">
                    🚀 {t.projects.modal.keyFeatures}
                  </h3>
                  <div className="grid sm:grid-cols-2 gap-2 sm:gap-3">
                    {getFeaturesContent()?.map((feature: string, index: number) => (
                      <div key={index} className="flex items-start text-slate-300 text-xs sm:text-sm">
                        <span className="text-green-400 mr-2 flex-shrink-0">✅</span>
                        {feature}
                      </div>
                    ))}
                  </div>
                </div>
              )}
              
              {/* Highlights */}
              {'highlights' in project && (
                <div>
                  <h3 className="text-base sm:text-xl font-bold text-slate-100 mb-3 sm:mb-4 flex items-center">
                    💡 {t.projects.modal.whatMakesSpecial}
                  </h3>
                  <ul className="space-y-1.5 sm:space-y-2">
                    {getHighlightsContent()?.map((highlight: string, index: number) => (
                      <li key={index} className="text-slate-300 text-xs sm:text-sm leading-relaxed flex items-start">
                        <span className="text-yellow-400 mr-2 flex-shrink-0">⭐</span>
                        {highlight}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
              
              {/* Links */}
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 pt-4 sm:pt-6 border-t border-slate-700">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center px-4 py-2.5 bg-slate-800 text-slate-300 rounded-lg hover:bg-slate-700 active:bg-slate-600 transition-colors duration-200 text-sm sm:text-base touch-manipulation"
                >
                  <svg className="w-4 h-4 sm:w-5 sm:h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.30.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                  </svg>
                  {t.projects.viewCode}
                </a>
                
                {project.demo !== '#' && (
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center px-4 py-2.5 bg-blue-600 text-white rounded-lg hover:bg-blue-700 active:bg-blue-800 transition-colors duration-200 text-sm sm:text-base touch-manipulation"
                  >
                    <svg className="w-4 h-4 sm:w-5 sm:h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                    {t.projects.liveDemo}
                  </a>
                )}
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default ProjectModal; 