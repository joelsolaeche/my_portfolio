'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { PORTFOLIO_DATA } from '@/lib/constants';
import { useLanguage } from '@/contexts/LanguageContext';

const Hero = () => {
  const { t, language } = useLanguage();
  
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center px-6 lg:px-8 overflow-hidden py-20">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/backgrounds/background_photo.jpg"
          alt="Tokyo Cherry Blossoms Background"
          fill
          className="object-cover"
          priority
          quality={85}
        />
        {/* Dark overlay for text readability */}
        <div className="absolute inset-0 bg-black/75"></div>
      </div>
      
      <div className="relative z-10 max-w-5xl mx-auto pt-20">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Profile Image Section */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="flex justify-center lg:justify-start"
          >
            <div className="relative">
              {/* Profile Image */}
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="relative w-72 h-72 lg:w-80 lg:h-80 rounded-full overflow-hidden ring-2 ring-blue-400/60 ring-offset-4 ring-offset-black/50 shadow-xl"
              >
                <Image
                  src="/images/profile/profile_photo.jpg"
                  alt="Joel Solaeche Profile Picture"
                  fill
                  className="object-cover"
                  priority
                />
              </motion.div>
            </div>
          </motion.div>

          {/* Text Content Section */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-center lg:text-left"
          >
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4 tracking-tight"
            >
              {t.hero.greeting}{' '}
              <span className="text-blue-400">
                {PORTFOLIO_DATA.name}
              </span>
            </motion.h1>
            
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.7 }}
              className="text-lg sm:text-xl lg:text-2xl font-medium text-zinc-300 mb-5"
            >
              {PORTFOLIO_DATA.title}
            </motion.h2>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.9 }}
              className="text-base text-zinc-400 mb-8 leading-relaxed max-w-lg"
            >
              {t.hero.description}{t.hero.additionalText}
            </motion.p>

            {/* Action Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.1 }}
              className="flex flex-col sm:flex-row gap-3 justify-center lg:justify-start"
            >
              <button
                onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
                className="px-6 py-2.5 bg-blue-600 text-white rounded-lg text-sm font-medium hover:bg-blue-500 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:ring-offset-2 focus:ring-offset-black"
              >
                {t.hero.viewWork}
              </button>
              
              <button
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="px-6 py-2.5 border border-zinc-600 text-zinc-300 rounded-lg text-sm font-medium hover:border-zinc-500 hover:text-white transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-zinc-500/50 focus:ring-offset-2 focus:ring-offset-black"
              >
                {t.hero.getInTouch}
              </button>
            </motion.div>

            {/* Resume Download Button */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.3 }}
              className="mt-5 flex flex-col sm:flex-row gap-2.5 justify-center lg:justify-start"
            >
              <a
                href="/resumes/Joel_Solaeche_Resume_EN.pdf"
                download
                className="inline-flex items-center justify-center gap-2 px-4 py-2 bg-zinc-900/80 text-zinc-300 rounded-lg text-sm font-medium hover:bg-zinc-800 hover:text-white transition-colors duration-200 border border-zinc-700 hover:border-zinc-600"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                <span>EN Resume</span>
              </a>
              
              <a
                href="/resumes/Joel_Solaeche_Resume_JP.pdf"
                download
                className="inline-flex items-center justify-center gap-2 px-4 py-2 bg-zinc-900/80 text-zinc-300 rounded-lg text-sm font-medium hover:bg-zinc-800 hover:text-white transition-colors duration-200 border border-zinc-700 hover:border-zinc-600"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                <span>JP 履歴書</span>
              </a>
              
              {language === 'ja' && (
                <a
                  href="/resumes/Joel_Solaeche_Rirekisho_JP.pdf"
                  download
                  className="inline-flex items-center justify-center gap-2 px-4 py-2 bg-zinc-900/80 text-zinc-300 rounded-lg text-sm font-medium hover:bg-zinc-800 hover:text-white transition-colors duration-200 border border-zinc-700 hover:border-zinc-600"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                  <span>職務経歴書</span>
                </a>
              )}
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 1.5 }}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-10"
      >
        <motion.button
          onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="text-zinc-500 hover:text-zinc-300 transition-colors duration-200 focus:outline-none"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </motion.button>
      </motion.div>
      
      {/* Clean gradient divider */}
      <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-zinc-900 to-transparent z-10"></div>
    </section>
  );
};

export default Hero; 