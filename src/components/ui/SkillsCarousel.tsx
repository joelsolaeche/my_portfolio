'use client';

import React, { useState, useMemo, memo, useCallback } from 'react';
import { SKILLS, SKILL_CATEGORIES } from '@/lib/constants';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';

// Memoized individual skill item to prevent re-renders
interface SkillItemProps {
  skill: (typeof SKILLS)[number];
  index: number;
}

const SkillItem = memo(function SkillItem({ skill, index }: SkillItemProps) {
  const isEmoji = skill.icon.length <= 4 && !skill.icon.startsWith('http') && !skill.icon.startsWith('/');
  
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.2, delay: Math.min(index * 0.02, 0.3) }}
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
              loading="lazy"
            />
          )}
        </div>
        <span className="text-slate-300 text-xs text-center leading-tight">
          {skill.name}
        </span>
      </div>
    </motion.div>
  );
});

const SkillsCarousel = () => {
  const [activeCategory, setActiveCategory] = useState('All');

  // Memoize filtered skills to prevent recalculation on every render
  const filteredSkills = useMemo(() => 
    activeCategory === 'All' 
      ? SKILLS 
      : SKILLS.filter(skill => skill.category === activeCategory),
    [activeCategory]
  );

  // Memoize category click handler
  const handleCategoryClick = useCallback((categoryId: string) => {
    setActiveCategory(categoryId);
  }, []);

  return (
    <div className="space-y-6">
      {/* Filter Buttons */}
      <div className="flex flex-wrap justify-center gap-2">
        {SKILL_CATEGORIES.map((category) => {
          const isActive = activeCategory === category.id;
          const colorStyles = {
            blue: isActive 
              ? 'bg-blue-600/30 text-blue-300 border-blue-500/40' 
              : 'bg-blue-600/10 text-blue-400 border-blue-500/20 hover:bg-blue-600/20',
            purple: isActive 
              ? 'bg-purple-600/30 text-purple-300 border-purple-500/40' 
              : 'bg-purple-600/10 text-purple-400 border-purple-500/20 hover:bg-purple-600/20',
            cyan: isActive 
              ? 'bg-cyan-600/30 text-cyan-300 border-cyan-500/40' 
              : 'bg-cyan-600/10 text-cyan-400 border-cyan-500/20 hover:bg-cyan-600/20',
            green: isActive 
              ? 'bg-green-600/30 text-green-300 border-green-500/40' 
              : 'bg-green-600/10 text-green-400 border-green-500/20 hover:bg-green-600/20',
            orange: isActive 
              ? 'bg-orange-600/30 text-orange-300 border-orange-500/40' 
              : 'bg-orange-600/10 text-orange-400 border-orange-500/20 hover:bg-orange-600/20',
            red: isActive 
              ? 'bg-red-600/30 text-red-300 border-red-500/40' 
              : 'bg-red-600/10 text-red-400 border-red-500/20 hover:bg-red-600/20',
          };
          const style = colorStyles[category.color as keyof typeof colorStyles] || colorStyles.blue;
          
          return (
            <button
              key={category.id}
              onClick={() => handleCategoryClick(category.id)}
              className={`px-4 py-1.5 rounded-full text-sm transition-colors duration-200 border ${style}`}
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
          {filteredSkills.map((skill, index) => (
            <SkillItem key={skill.name} skill={skill} index={index} />
          ))}
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default SkillsCarousel;
