'use client';

import React, { useState } from 'react';
import { SKILLS, SKILL_CATEGORIES } from '@/lib/constants';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';

const SkillsCarousel = () => {
  const [activeCategory, setActiveCategory] = useState('All');

  // Filter skills based on active category
  const filteredSkills = activeCategory === 'All' 
    ? SKILLS 
    : SKILLS.filter(skill => skill.category === activeCategory);

  return (
    <div className="space-y-6">
      {/* Filter Buttons */}
      <div className="flex flex-wrap justify-center gap-2">
        {SKILL_CATEGORIES.map((category) => {
          const isActive = activeCategory === category.id;
          return (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`px-4 py-1.5 rounded-full text-sm transition-colors duration-200 border ${
                isActive
                  ? 'bg-slate-700 text-slate-100 border-slate-600'
                  : 'bg-transparent text-slate-400 border-slate-700/50 hover:text-slate-300 hover:border-slate-600'
              }`}
            >
              {category.label}
            </button>
          );
        })}
      </div>

      {/* Skills Grid */}
      <AnimatePresence mode="wait">
        <motion.div 
          key={activeCategory}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.2 }}
          className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 xl:grid-cols-8 gap-3"
        >
          {filteredSkills.map((skill, index) => {
            const isEmoji = skill.icon.length <= 4 && !skill.icon.startsWith('http') && !skill.icon.startsWith('/');
            
            return (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.2, delay: index * 0.02 }}
                className="group"
              >
                <div className="flex flex-col items-center justify-center w-full h-20 bg-slate-800/50 rounded-lg p-3 border border-slate-700/50 hover:border-slate-600 transition-colors duration-200">
                  <div className="relative w-8 h-8 mb-1.5 flex items-center justify-center">
                    {isEmoji ? (
                      <span className="text-2xl">{skill.icon}</span>
                    ) : (
                      <Image
                        src={skill.icon}
                        alt={`${skill.name} icon`}
                        width={32}
                        height={32}
                        className="object-contain"
                      />
                    )}
                  </div>
                  <span className="text-slate-300 text-xs text-center leading-tight">
                    {skill.name}
                  </span>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default SkillsCarousel;
