'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { PROJECTS } from '@/lib/constants';
import ProjectModal from '@/components/ui/ProjectModal';
import { useLanguage } from '@/contexts/LanguageContext';

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState<(typeof PROJECTS)[number] | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { t, language } = useLanguage();

  const openProjectModal = (project: (typeof PROJECTS)[number]) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  const closeProjectModal = () => {
    setIsModalOpen(false);
    setSelectedProject(null);
  };

  return (
    <section id="projects" className="relative bg-zinc-900 py-24 px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-zinc-100 mb-4 tracking-tight">
            {t.projects.title}
          </h2>
          <p className="text-base text-zinc-400 max-w-2xl mx-auto leading-relaxed">
            {t.projects.subtitle}
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid lg:grid-cols-2 gap-6 mb-12">
          {PROJECTS.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              onClick={() => openProjectModal(project)}
              className="group bg-zinc-800/50 rounded-xl overflow-hidden border border-zinc-700/50 hover:border-zinc-600 transition-all duration-200 cursor-pointer"
            >
              {/* Project Image */}
              <div className="relative overflow-hidden">
                <div className="h-44 bg-zinc-900 relative">
                  <Image 
                    src={project.image} 
                    alt={project.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-colors duration-200"></div>
                
                {/* Click indicator */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300">
                  <div className="bg-black/60 backdrop-blur-sm px-4 py-2 rounded-lg border border-white/10">
                    <div className="flex items-center gap-2 text-white">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                      </svg>
                      <span className="text-sm font-medium">{t.projects.viewDetails}</span>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Project Content */}
              <div className="p-5">
                <h3 className="text-lg font-semibold text-zinc-100 mb-2 group-hover:text-blue-400 transition-colors duration-200">
                  {language === 'ja' && project.titleJa ? project.titleJa : project.title}
                </h3>
                <p className="text-zinc-400 text-sm mb-4 leading-relaxed line-clamp-2">
                  {language === 'ja' && project.descriptionJa ? project.descriptionJa : project.description}
                </p>
                
                {/* Technologies */}
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {project.technologies.slice(0, 5).map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-0.5 bg-zinc-800 text-zinc-400 rounded text-xs font-medium border border-zinc-700/50"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 5 && (
                    <span className="px-2 py-0.5 text-zinc-500 text-xs">+{project.technologies.length - 5}</span>
                  )}
                </div>
                
                {/* Project Links */}
                <div className="flex gap-4">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(e) => e.stopPropagation()}
                    className="flex items-center text-zinc-500 hover:text-zinc-300 transition-colors duration-200 text-xs font-medium"
                  >
                    <svg className="w-4 h-4 mr-1.5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.30.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                    </svg>
                    {t.projects.viewCode}
                  </a>
                  
                  {project.demo !== '#' && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      className="flex items-center text-blue-400 hover:text-blue-300 transition-colors duration-200 text-xs font-medium"
                    >
                      {project.demo.includes('railway.app') ? (
                        <Image 
                          src="/images/profile/railway.png" 
                          alt="Railway" 
                          width={14}
                          height={14}
                          className="mr-1.5 brightness-0 invert opacity-70"
                          style={{ filter: 'brightness(0) invert(1) sepia(1) saturate(3) hue-rotate(200deg)' }}
                        />
                      ) : project.demo.includes('streamlit.app') ? (
                        <Image 
                          src="/images/profile/stream_lite_logo.png" 
                          alt="Streamlit" 
                          width={14}
                          height={14}
                          className="mr-1.5 opacity-70"
                        />
                      ) : project.demo.includes('vercel.app') ? (
                        <Image 
                          src="/images/projects/vercel-icon.svg" 
                          alt="Vercel" 
                          width={14}
                          height={14}
                          className="mr-1.5 brightness-0 invert opacity-70"
                        />
                      ) : (
                        <svg className="w-4 h-4 mr-1.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                        </svg>
                      )}
                      {project.demo.includes('railway.app') ? t.projects.viewDemo : 
                       project.demo.includes('streamlit.app') ? t.projects.interactiveDashboard :
                       project.demo.includes('vercel.app') ? t.projects.liveDemo : t.projects.liveDemo}
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="text-center bg-zinc-800/50 rounded-xl p-8 border border-zinc-700/50"
        >
          <h3 className="text-xl font-semibold text-zinc-100 mb-3">
            {t.projects.moreProjects}
          </h3>
          <p className="text-sm text-zinc-400 mb-6 max-w-xl mx-auto">
            {t.projects.moreProjectsDesc}
          </p>
          <button
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="inline-block bg-blue-600 text-white px-6 py-2.5 rounded-lg text-sm font-medium hover:bg-blue-500 transition-colors duration-200"
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
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-zinc-700 to-transparent"></div>
    </section>
  );
};

export default Projects; 