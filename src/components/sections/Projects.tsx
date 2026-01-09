'use client';

import React, { useState, useEffect, useCallback, memo, useRef } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence, PanInfo } from 'framer-motion';
import { PROJECTS } from '@/lib/constants';
import ProjectModal from '@/components/ui/ProjectModal';
import { useLanguage } from '@/contexts/LanguageContext';

// Stable slide variants - defined outside component to prevent recreation
const SLIDE_VARIANTS = {
  enter: (dir: number) => ({
    x: dir > 0 ? 300 : -300,
    opacity: 0,
  }),
  center: {
    x: 0,
    opacity: 1,
  },
  exit: (dir: number) => ({
    x: dir > 0 ? -300 : 300,
    opacity: 0,
  }),
};

// Memoized ProjectCard component to prevent unnecessary re-renders
interface ProjectCardProps {
  project: (typeof PROJECTS)[number];
  index: number;
  isCarousel?: boolean;
  hasAnimated: boolean;
  onAnimationComplete: () => void;
  onOpenModal: (project: (typeof PROJECTS)[number]) => void;
  language: string;
  t: ReturnType<typeof useLanguage>['t'];
}

const ProjectCard = memo(function ProjectCard({ 
  project, 
  index, 
  isCarousel = false, 
  hasAnimated, 
  onAnimationComplete, 
  onOpenModal,
  language,
  t 
}: ProjectCardProps) {
  return (
    <motion.div
      initial={hasAnimated ? false : { opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: isCarousel ? 0 : index * 0.1 }}
      viewport={{ once: true }}
      onAnimationComplete={onAnimationComplete}
      onClick={() => onOpenModal(project)}
      className="group bg-slate-800/50 rounded-xl shadow-sm hover:shadow-md transition-all duration-200 overflow-hidden border border-slate-700/50 hover:border-slate-600 cursor-pointer h-full"
    >
      {/* Project Image */}
      <div className="relative overflow-hidden">
        <div className="h-44 bg-slate-900 relative">
          <Image 
            src={project.image} 
            alt={project.title}
            fill
            className="object-cover"
            loading={index < 2 ? undefined : "lazy"}
          />
        </div>
        <div className="absolute inset-0 bg-black/30 group-hover:bg-black/10 transition-colors duration-200"></div>
        
        {/* Click indicator */}
        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300">
          <div className="bg-black/50 backdrop-blur-sm px-4 py-2 rounded-lg border border-white/10">
            <div className="flex items-center space-x-2 text-white">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
              </svg>
              <span className="font-medium text-sm">{t.projects.viewDetails}</span>
            </div>
          </div>
        </div>
      </div>
      
      {/* Project Content */}
      <div className="p-5">
        <h3 className="text-lg font-semibold text-slate-100 mb-2 group-hover:text-blue-400 transition-colors duration-200">
          {language === 'ja' && project.titleJa ? project.titleJa : project.title}
        </h3>
        <p className="text-slate-400 mb-4 text-sm leading-relaxed line-clamp-2">
          {language === 'ja' && project.descriptionJa ? project.descriptionJa : project.description}
        </p>
        
        {/* Technologies */}
        <div className="flex flex-wrap gap-1.5 mb-4">
          {project.technologies.slice(0, 5).map((tech) => (
            <span
              key={tech}
              className="px-2 py-0.5 bg-slate-700/50 text-slate-400 rounded text-xs font-medium"
            >
              {tech}
            </span>
          ))}
          {project.technologies.length > 5 && (
            <span className="px-2 py-0.5 text-slate-500 text-xs">+{project.technologies.length - 5}</span>
          )}
        </div>
        
        {/* Project Links */}
        <div className="flex gap-4">
          <motion.a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            onClick={(e) => e.stopPropagation()}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center text-slate-400 hover:text-slate-300 transition-colors duration-200 text-sm font-medium"
          >
            <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
            </svg>
            {t.projects.viewCode}
          </motion.a>
          
          {project.demo !== '#' && (
            <motion.a
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center text-blue-400 hover:text-blue-300 transition-colors duration-200 text-sm font-medium"
            >
              {project.demo.includes('railway.app') ? (
                <Image 
                  src="/images/profile/railway.png" 
                  alt="Railway" 
                  width={16}
                  height={16}
                  className="mr-2 brightness-0 invert opacity-80 group-hover:opacity-100 transition-opacity duration-200"
                  style={{ filter: 'brightness(0) invert(1) sepia(1) saturate(3) hue-rotate(200deg)' }}
                />
              ) : project.demo.includes('streamlit.app') ? (
                <Image 
                  src="/images/profile/stream_lite_logo.png" 
                  alt="Streamlit" 
                  width={16}
                  height={16}
                  className="mr-2 opacity-80 group-hover:opacity-100 transition-opacity duration-200"
                />
              ) : project.demo.includes('vercel.app') ? (
                <Image 
                  src="/images/projects/vercel-icon.svg" 
                  alt="Vercel" 
                  width={16}
                  height={16}
                  className="mr-2 brightness-0 invert opacity-80 group-hover:opacity-100 transition-opacity duration-200"
                />
              ) : (
                <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h4m4-16h6m0 0v6m0-6L10 14" />
                </svg>
              )}
              {project.demo.includes('railway.app') ? t.projects.viewDemo : 
               project.demo.includes('streamlit.app') ? t.projects.interactiveDashboard :
               project.demo.includes('vercel.app') ? t.projects.liveDemo : t.projects.liveDemo}
            </motion.a>
          )}
        </div>
      </div>
    </motion.div>
  );
});

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState<(typeof PROJECTS)[number] | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const [direction, setDirection] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);
  const [isNavigating, setIsNavigating] = useState(false);
  const { t, language } = useLanguage();
  
  // Ref for resize throttling
  const resizeRafRef = useRef<number | null>(null);

  // Handle responsive detection with throttled resize handler
  useEffect(() => {
    const handleResize = () => {
      if (resizeRafRef.current !== null) return;
      
      resizeRafRef.current = requestAnimationFrame(() => {
        setIsMobile(window.innerWidth < 1024);
        resizeRafRef.current = null;
      });
    };
    
    handleResize();
    window.addEventListener('resize', handleResize, { passive: true });
    return () => {
      window.removeEventListener('resize', handleResize);
      if (resizeRafRef.current !== null) {
        cancelAnimationFrame(resizeRafRef.current);
      }
    };
  }, []);

  const totalProjects = PROJECTS.length;

  const openProjectModal = useCallback((project: (typeof PROJECTS)[number]) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  }, []);

  const closeProjectModal = useCallback(() => {
    setIsModalOpen(false);
    setSelectedProject(null);
  }, []);

  const goToPrevious = useCallback(() => {
    setIsNavigating(true);
    setDirection(-1);
    setCurrentIndex((prev) => (prev === 0 ? totalProjects - 1 : prev - 1));
  }, [totalProjects]);

  const goToNext = useCallback(() => {
    setIsNavigating(true);
    setDirection(1);
    setCurrentIndex((prev) => (prev === totalProjects - 1 ? 0 : prev + 1));
  }, [totalProjects]);

  const goToSlide = useCallback((index: number) => {
    setCurrentIndex(prev => {
      if (index === prev) return prev;
      setIsNavigating(true);
      setDirection(index > prev ? 1 : -1);
      return index;
    });
  }, []);

  // Handle swipe gestures for touch devices
  const handleDragEnd = useCallback((event: MouseEvent | TouchEvent | PointerEvent, info: PanInfo) => {
    const swipeThreshold = 50;
    if (info.offset.x > swipeThreshold) {
      goToPrevious();
    } else if (info.offset.x < -swipeThreshold) {
      goToNext();
    }
  }, [goToPrevious, goToNext]);

  // Reset navigation flag after animation completes
  const handleAnimationComplete = useCallback(() => {
    setIsNavigating(false);
  }, []);

  // Memoized callback for animation complete in ProjectCard
  const handleCardAnimationComplete = useCallback(() => {
    if (!hasAnimated) setHasAnimated(true);
  }, [hasAnimated]);

  return (
    <section id="projects" className="relative bg-slate-800/30 py-24 px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-100 mb-4 tracking-tight">
            {t.projects.title}
          </h2>
          <p className="text-base text-slate-400 max-w-2xl mx-auto leading-relaxed">
            {t.projects.subtitle}
          </p>
        </motion.div>

        {/* Mobile/Tablet: Carousel View */}
        {isMobile ? (
          <>
            <div className="relative mb-8">
              {/* Swipeable Cards Container */}
              <div className="overflow-hidden">
                <AnimatePresence mode="wait" custom={direction} initial={false}>
                  <motion.div
                    key={currentIndex}
                    custom={direction}
                    variants={isNavigating ? SLIDE_VARIANTS : undefined}
                    initial={isNavigating ? "enter" : false}
                    animate="center"
                    exit={isNavigating ? "exit" : undefined}
                    transition={{ duration: 0.35, ease: [0.32, 0.72, 0, 1] }}
                    onAnimationComplete={handleAnimationComplete}
                    drag="x"
                    dragConstraints={{ left: 0, right: 0 }}
                    dragElastic={0.15}
                    onDragEnd={handleDragEnd}
                    className="cursor-grab active:cursor-grabbing touch-pan-y"
                  >
                    <ProjectCard 
                      project={PROJECTS[currentIndex]} 
                      index={currentIndex}
                      isCarousel={true}
                      hasAnimated={hasAnimated}
                      onAnimationComplete={handleCardAnimationComplete}
                      onOpenModal={openProjectModal}
                      language={language}
                      t={t}
                    />
                  </motion.div>
                </AnimatePresence>
              </div>

              {/* Navigation Arrows */}
              <button
                onClick={goToPrevious}
                className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-3 sm:-translate-x-5 w-10 h-10 bg-slate-800/90 hover:bg-slate-700 border border-slate-600 rounded-full flex items-center justify-center text-slate-300 hover:text-white transition-all duration-200 backdrop-blur-sm shadow-lg z-10"
                aria-label="Previous project"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              
              <button
                onClick={goToNext}
                className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-3 sm:translate-x-5 w-10 h-10 bg-slate-800/90 hover:bg-slate-700 border border-slate-600 rounded-full flex items-center justify-center text-slate-300 hover:text-white transition-all duration-200 backdrop-blur-sm shadow-lg z-10"
                aria-label="Next project"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>

            {/* Pagination Dots */}
            <div className="flex items-center justify-center gap-2 mb-12">
              {PROJECTS.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`h-2.5 rounded-full transition-all duration-200 ${
                    index === currentIndex 
                      ? 'bg-blue-500 w-8' 
                      : 'bg-slate-600 hover:bg-slate-500 w-2.5'
                  }`}
                  aria-label={`Go to project ${index + 1}`}
                />
              ))}
            </div>
          </>
        ) : (
          /* Desktop: Grid View */
          <div className="grid lg:grid-cols-2 gap-6 mb-12">
            {PROJECTS.map((project, index) => (
              <ProjectCard 
                key={project.id} 
                project={project} 
                index={index}
                hasAnimated={hasAnimated}
                onAnimationComplete={handleCardAnimationComplete}
                onOpenModal={openProjectModal}
                language={language}
                t={t}
              />
            ))}
          </div>
        )}

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="text-center bg-slate-800/50 rounded-xl p-8 border border-slate-700/50"
        >
          <h3 className="text-xl font-semibold text-slate-100 mb-2">
            {t.projects.moreProjects}
          </h3>
          <p className="text-sm text-slate-400 mb-5 max-w-xl mx-auto">
            {t.projects.moreProjectsDesc}
          </p>
          <button
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="inline-block bg-blue-600 text-white px-5 py-2 rounded-lg text-sm font-medium hover:bg-blue-500 transition-colors duration-200"
          >
            {t.projects.collaborate}
          </button>
        </motion.div>
      </div>
      
      {/* Project Modal */}
      {selectedProject && (
        <ProjectModal
          isOpen={isModalOpen}
          onClose={closeProjectModal}
          project={selectedProject}
        />
      )}
      
      {/* Clean divider */}
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-slate-700 to-transparent"></div>
    </section>
  );
};

export default Projects;
