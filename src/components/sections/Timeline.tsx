'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

const EXPERIENCE = [
  {
    id: 1,
    title: 'AI Trainer & Developer',
    company: 'Scale AI',
    logo: '/images/companies/scale_icon.png',
    period: 'Oct 2024 - Present',
    location: 'United States (Remote)',
    description: [
      'Enhanced AI models through coding, image-based learning, and prompt engineering',
      'Guiding AI agents through software development tasks with multi-turn prompt sequences',
      'Contributed to real-world project GitHub repositories for bug fixing and feature improvements',
      'Specialized in Reinforcement Learning from Human Feedback (RLHF) to fine-tune AI understanding'
    ],
    technologies: ['Python', 'Docker', 'Prompt Engineering', 'LLM Agents', 'GitHub', 'Cursor'],
    isActive: true
  },
  {
    id: 2,
    title: 'Machine Learning Engineer',
    company: 'Anyone AI',
    logo: '/images/companies/anyone_ai_logo.jpg',
    period: 'Nov 2024 - Mar 2025',
    location: 'United States (Remote)',
    description: [
      'Hands-on program with <2% acceptance rate for high-demand ML engineering projects',
      'Built ELT pipeline for e-commerce data analysis with seasonal insights',
      'Developed Home Credit Risk Prediction model with >0.72 AUC ROC score',
      'Created multimodal ML system integrating NLP and Computer Vision for e-commerce classification'
    ],
    technologies: ['Python', 'SQL', 'TensorFlow', 'Scikit-learn', 'AWS', 'FastAPI', 'Streamlit'],
    isActive: false
  },
  {
    id: 3,
    title: 'Development Team Member',
    company: 'Helte Co., Ltd',
    logo: '/images/companies/heltesail_logo.jpg',
    period: 'Aug 2024 - Nov 2024',
    location: 'Tokyo, Japan (Remote)',
    description: [
      'Online internship program with Tokyo-based consulting firm',
      'Contributed to UI/UX improvements resulting in 40% increase in user traffic',
      'Focused on software documentation and agile methodologies (Scrum, Kanban)',
      'Created and delivered presentations sharing insights for impactful changes'
    ],
    technologies: ['JavaScript', 'UI/UX', 'Scrum', 'Kanban', 'Documentation'],
    isActive: false
  }
];

const Timeline = () => {
  return (
    <section id="timeline" className="relative bg-slate-800 py-24 px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-slate-100 mb-6 tracking-tight">
            Professional Experience
          </h2>
          <p className="text-xl text-slate-400 max-w-3xl mx-auto leading-relaxed">
            My journey in Machine Learning and AI, from hands-on development to cutting-edge research.
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-400 via-purple-400 to-green-400"></div>
          
          {/* Timeline items */}
          <div className="space-y-12">
            {EXPERIENCE.map((exp, index) => (
              <motion.div
                key={exp.id}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                className={`relative flex items-center ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                {/* Timeline marker */}
                <div className="absolute left-6 w-6 h-6 bg-gradient-to-br from-blue-400 to-purple-400 rounded-full border-4 border-slate-800 z-10 flex items-center justify-center">
                  {exp.isActive && (
                    <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
                  )}
                </div>

                {/* Content card */}
                <div className={`flex-1 ${index % 2 === 0 ? 'md:ml-20' : 'md:mr-20'} ml-20`}>
                  <div className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-2xl p-8 border border-slate-700 hover:border-blue-400 transition-all duration-300 hover:scale-105 shadow-lg">
                    {/* Header with Company Logo */}
                    <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between mb-4">
                      <div className="flex items-center space-x-4 mb-4 sm:mb-0">
                        {/* Company Logo */}
                        <div className="relative w-16 h-16 rounded-xl overflow-hidden border-2 border-slate-600 bg-white p-2 flex-shrink-0">
                          <Image
                            src={exp.logo}
                            alt={`${exp.company} logo`}
                            fill
                            className="object-contain"
                          />
                        </div>
                        
                        {/* Title and Company */}
                        <div>
                          <h3 className="text-2xl font-bold text-slate-100 mb-1">
                            {exp.title}
                          </h3>
                          <p className="text-lg text-blue-400 font-medium">
                            {exp.company}
                          </p>
                        </div>
                      </div>
                      
                      {/* Period and Location */}
                      <div className="text-right">
                        <p className="text-slate-300 font-medium">
                          {exp.period}
                        </p>
                        <p className="text-slate-400 text-sm">
                          {exp.location}
                        </p>
                      </div>
                    </div>

                    {/* Description */}
                    <div className="mb-6">
                      <ul className="space-y-2">
                        {exp.description.map((item, idx) => (
                          <li key={idx} className="flex items-start">
                            <span className="w-2 h-2 bg-blue-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                            <span className="text-slate-300 leading-relaxed">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Technologies */}
                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 bg-blue-500/10 text-blue-400 rounded-full text-sm font-medium border border-blue-500/20"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
      
      {/* Diagonal divider for next section */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden">
        <svg className="relative block w-full h-20" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M0,0 L600,120 L1200,0 L1200,120 L0,120 Z" fill="#1e293b" />
        </svg>
      </div>
    </section>
  );
};

export default Timeline; 