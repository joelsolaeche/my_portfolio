'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { PORTFOLIO_DATA } from '@/lib/constants';
import { useLanguage } from '@/contexts/LanguageContext';
import SkillsCarousel from '@/components/ui/SkillsCarousel';

const About = () => {
  const { t } = useLanguage();
  
  return (
    <section id="about" className="relative bg-slate-900 py-24 px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-100 mb-4 tracking-tight">
            {t.about.title}
          </h2>
          <p className="text-base text-slate-400 max-w-2xl mx-auto leading-relaxed">
            {t.about.subtitle}
          </p>
        </motion.div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-12 items-start mb-16">
          {/* Bio Section */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            {/* Profile Image */}
            <div className="flex justify-center mb-8 lg:justify-start">
              <div className="relative w-40 h-40 rounded-full overflow-hidden border-4 border-blue-400 shadow-lg">
                <Image
                  src="/images/profile/prof_pic.jpg"
                  alt="Joel Solaeche Profile Picture"
                  fill
                  sizes="160px"
                  className="object-cover"
                  quality={100}
                  priority
                />
              </div>
            </div>

            <h3 className="text-2xl font-semibold text-slate-100 mb-8">{t.about.myBackground}</h3>
            <div className="space-y-6 text-slate-300 leading-relaxed">
              <p>
                {t.about.bio.intro.replace('{name}', PORTFOLIO_DATA.name)}
              </p>
              <p>
                {t.about.bio.expertise}
              </p>
              <p>
                {t.about.bio.fullstack}
              </p>
              <p>
                {t.about.bio.current}
              </p>
            </div>
          </motion.div>

          {/* Quick Facts Card */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="bg-slate-800/50 rounded-xl p-6 border border-slate-700/50"
          >
            <h3 className="text-lg font-semibold text-slate-100 mb-5">{t.about.quickFacts}</h3>
            <div className="space-y-3">
              <div className="flex items-center">
                <span className="w-2 h-2 bg-blue-400 rounded-full mr-3"></span>
                <span className="text-slate-300 text-sm">{t.about.facts.experience}</span>
              </div>
              <div className="flex items-center">
                <span className="w-2 h-2 bg-purple-400 rounded-full mr-3"></span>
                <span className="text-slate-300 text-sm">{t.about.facts.location}</span>
              </div>
              <div className="flex items-center">
                <span className="w-2 h-2 bg-red-400 rounded-full mr-3"></span>
                <span className="text-slate-300 text-sm">{t.about.facts.education}</span>
              </div>
              <div className="flex items-center">
                <span className="w-2 h-2 bg-green-400 rounded-full mr-3"></span>
                <span className="text-slate-300 text-sm">{t.about.facts.languages}</span>
              </div>
              <div className="flex items-center">
                <span className="w-2 h-2 bg-orange-400 rounded-full mr-3"></span>
                <span className="text-slate-300 text-sm">{t.about.facts.role}</span>
              </div>
              <div className="flex items-center">
                <span className="w-2 h-2 bg-cyan-400 rounded-full mr-3"></span>
                <span className="text-slate-300 text-sm">{t.about.facts.fullStack}</span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Skills Carousel */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <h3 className="text-xl font-semibold text-slate-100 mb-8 text-center">{t.about.skillsAndTechnologies}</h3>
          <SkillsCarousel />
        </motion.div>
      </div>
      
      {/* Clean divider */}
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-slate-700 to-transparent"></div>
    </section>
  );
};

export default About; 