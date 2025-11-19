'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { PORTFOLIO_DATA, SKILLS } from '@/lib/constants';
import { useLanguage } from '@/contexts/LanguageContext';

const About = () => {
  const { t } = useLanguage();
  
  return (
    <section id="about" className="relative bg-slate-900 py-32 px-8 lg:px-12">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-24"
        >
          <h2 className="text-5xl sm:text-6xl font-bold text-slate-100 mb-8 tracking-tight">
            {t.about.title}
          </h2>
          <p className="text-xl text-slate-400 max-w-3xl mx-auto leading-relaxed">
            {t.about.subtitle}
          </p>
        </motion.div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          {/* Bio Section */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            {/* Profile Image */}
            <div className="flex justify-center mb-8 lg:justify-start">
              <div className="relative w-32 h-32 rounded-full overflow-hidden border-4 border-blue-400 shadow-lg">
                {/* Replace this with your actual profile image */}
                <div className="w-full h-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center">
                  <span className="text-4xl">👨‍💻</span>
                </div>
                {/* 
                Uncomment this when you add your profile picture:
                <Image
                  src="/images/profile/profile-pic.jpg"
                  alt="Joel Solaeche Profile Picture"
                  fill
                  className="object-cover"
                  priority
                />
                */}
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
            className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl p-8 border border-slate-700"
          >
            <h3 className="text-2xl font-bold text-slate-100 mb-6">{t.about.quickFacts}</h3>
            <div className="space-y-4">
              <div className="flex items-center">
                <span className="w-3 h-3 bg-blue-400 rounded-full mr-4"></span>
                <span className="text-slate-300">{t.about.facts.experience}</span>
              </div>
              <div className="flex items-center">
                <span className="w-3 h-3 bg-purple-400 rounded-full mr-4"></span>
                <span className="text-slate-300">{t.about.facts.location}</span>
              </div>
              <div className="flex items-center">
                <span className="w-3 h-3 bg-red-400 rounded-full mr-4"></span>
                <span className="text-slate-300">{t.about.facts.education}</span>
              </div>
              <div className="flex items-center">
                <span className="w-3 h-3 bg-green-400 rounded-full mr-4"></span>
                <span className="text-slate-300">{t.about.facts.languages}</span>
              </div>
              <div className="flex items-center">
                <span className="w-3 h-3 bg-orange-400 rounded-full mr-4"></span>
                <span className="text-slate-300">{t.about.facts.role}</span>
              </div>
              <div className="flex items-center">
                <span className="w-3 h-3 bg-cyan-400 rounded-full mr-4"></span>
                <span className="text-slate-300">{t.about.facts.fullStack}</span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Skills Grid */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h3 className="text-3xl font-bold text-slate-100 mb-10 text-center">{t.about.skillsAndTechnologies}</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
            {SKILLS.map((skill, index) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.8 + index * 0.03 }}
                viewport={{ once: true }}
                className="group bg-gradient-to-br from-slate-800 to-slate-900 rounded-xl p-6 text-center border border-slate-700 hover:border-blue-400 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-blue-500/10"
              >
                <div className="text-3xl mb-3 group-hover:scale-110 transition-transform duration-300">
                  {skill.icon}
                </div>
                <span className="text-slate-200 font-medium text-sm leading-tight block">
                  {skill.name}
                </span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
      
      {/* Curved divider for next section */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden">
        <svg className="relative block w-full h-20" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M0,120 L0,60 Q600,0 1200,60 L1200,120 Z" fill="#1e293b" />
        </svg>
      </div>
    </section>
  );
};

export default About; 