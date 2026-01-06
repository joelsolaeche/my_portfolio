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

  const getColorClasses = (color: string, isActive: boolean) => {
    const colors = {
      blue: isActive ? 'bg-blue-500 text-white' : 'text-blue-400 hover:bg-blue-500/10',
      purple: isActive ? 'bg-purple-500 text-white' : 'text-purple-400 hover:bg-purple-500/10',
      cyan: isActive ? 'bg-cyan-500 text-white' : 'text-cyan-400 hover:bg-cyan-500/10',
      green: isActive ? 'bg-green-500 text-white' : 'text-green-400 hover:bg-green-500/10',
      orange: isActive ? 'bg-orange-500 text-white' : 'text-orange-400 hover:bg-orange-500/10',
      red: isActive ? 'bg-red-500 text-white' : 'text-red-400 hover:bg-red-500/10',
    };
    return colors[color as keyof typeof colors] || colors.blue;
  };

  return (
    <div className="space-y-8">
      {/* Filter Buttons */}
      <div className="flex flex-wrap justify-center gap-3">
        {SKILL_CATEGORIES.map((category) => (
          <button
            key={category.id}
            onClick={() => setActiveCategory(category.id)}
            className={`px-6 py-2 rounded-full font-medium text-sm transition-all duration-300 border border-slate-700 ${
              getColorClasses(category.color, activeCategory === category.id)
            }`}
          >
            {category.label}
          </button>
        ))}
      </div>

      {/* Skills Grid */}
      <AnimatePresence mode="wait">
        <motion.div 
          key={activeCategory}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.3 }}
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-8 gap-6"
        >
          {filteredSkills.map((skill, index) => {
            const isEmoji = skill.icon.length <= 4 && !skill.icon.startsWith('http') && !skill.icon.startsWith('/');
            
            return (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: index * 0.03 }}
                className="group"
              >
                <div className="flex flex-col items-center justify-center w-full h-28 bg-gradient-to-br from-slate-800 to-slate-900 rounded-xl p-4 border border-slate-700 hover:border-blue-400 transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-blue-500/20">
                  <div className="relative w-12 h-12 mb-2 transition-transform duration-300 group-hover:scale-110 flex items-center justify-center">
                    {isEmoji ? (
                      <span className="text-4xl">{skill.icon}</span>
                    ) : (
                      <Image
                        src={skill.icon}
                        alt={`${skill.name} icon`}
                        width={48}
                        height={48}
                        className="object-contain filter group-hover:drop-shadow-[0_0_8px_rgba(59,130,246,0.5)]"
                      />
                    )}
                  </div>
                  <span className="text-slate-200 font-medium text-xs text-center leading-tight">
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
