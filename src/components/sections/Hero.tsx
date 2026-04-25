'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { PORTFOLIO_DATA } from '@/lib/constants';
import { useLanguage } from '@/contexts/LanguageContext';

const ROLES_EN = ['AI Engineer', 'Full-Stack Developer', 'ML Engineer'];
const ROLES_JA = ['AIエンジニア', 'フルスタック開発者', 'MLエンジニア'];

const Hero = () => {
  const { t, language } = useLanguage();
  const [roleIndex, setRoleIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setRoleIndex(prev => (prev + 1) % ROLES_EN.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const roles = language === 'ja' ? ROLES_JA : ROLES_EN;

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
        <div className="absolute inset-0 bg-black/80" />
        {/* Dot grid pattern */}
        <div
          className="absolute inset-0 opacity-[0.07]"
          style={{
            backgroundImage: 'radial-gradient(circle, rgba(148,163,184,0.8) 1px, transparent 1px)',
            backgroundSize: '28px 28px',
          }}
        />
        {/* Signature blue→violet spotlight */}
        <div className="absolute inset-0" style={{
          background: 'radial-gradient(ellipse 80% 60% at 30% 50%, rgba(21,93,252,0.10) 0%, transparent 60%), radial-gradient(ellipse 60% 50% at 75% 30%, rgba(152,16,250,0.07) 0%, transparent 60%)'
        }} />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto pt-20">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Profile Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="flex justify-center lg:justify-start"
          >
            <div className="relative">
                      {/* Outer ambient glow — signature blue→violet */}
              <div className="absolute -inset-4 rounded-full blur-2xl" style={{ background: 'radial-gradient(circle, rgba(21,93,252,0.25) 0%, rgba(152,16,250,0.12) 60%, transparent 100%)' }} />
              {/* Gradient border ring */}
              <div className="relative p-[3px] rounded-full" style={{ background: 'linear-gradient(135deg, #155dfc, #9810fa, #155dfc)' }}>
                <motion.div
                  initial={{ scale: 0.85, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  className="relative w-72 h-72 lg:w-80 lg:h-80 rounded-full overflow-hidden bg-zinc-900"
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
            </div>
          </motion.div>

          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-center lg:text-left"
          >
            {/* Pill badge */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 mb-4"
            >
              <div className="w-1.5 h-1.5 bg-blue-400 rounded-full" />
              <span className="text-xs text-blue-400 font-medium tracking-wide">
                {language === 'ja' ? 'AI・フルスタックエンジニア' : 'AI & Full-Stack Engineer'}
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-3 tracking-tight"
            >
              <span className="text-white">{t.hero.greeting} </span>
              <span className="gradient-text-blue">{PORTFOLIO_DATA.name}</span>
            </motion.h1>

            {/* Animated role cycling */}
            <div className="h-7 mb-5 overflow-hidden flex justify-center lg:justify-start">
              <AnimatePresence mode="wait">
                <motion.p
                  key={roleIndex}
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -12 }}
                  transition={{ duration: 0.35 }}
                  className="text-lg font-medium text-blue-300/70"
                >
                  {roles[roleIndex]}
                </motion.p>
              </AnimatePresence>
            </div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.9 }}
              className="text-base text-slate-400 mb-8 leading-relaxed max-w-lg"
            >
              {t.hero.description}{t.hero.additionalText}
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.1 }}
              className="flex flex-col sm:flex-row gap-3 justify-center lg:justify-start mb-5"
            >
              <button
                onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
                className="px-6 py-2.5 bg-gradient-to-r from-blue-600 to-blue-500 text-white rounded-lg text-sm font-medium hover:from-blue-500 hover:to-blue-400 transition-all duration-200 shadow-lg shadow-blue-500/20 hover:shadow-blue-500/35 cursor-pointer focus:outline-none focus:ring-2 focus:ring-blue-500/50"
              >
                {t.hero.viewWork}
              </button>
              <button
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="px-6 py-2.5 bg-white/5 backdrop-blur-sm border border-white/10 text-slate-300 rounded-lg text-sm font-medium hover:bg-white/10 hover:border-white/20 hover:text-white transition-all duration-200 cursor-pointer focus:outline-none"
              >
                {t.hero.getInTouch}
              </button>
            </motion.div>

            {/* Resume Downloads */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.3 }}
              className="flex flex-col sm:flex-row gap-2.5 justify-center lg:justify-start mb-6"
            >
              <a
                href="/resumes/Joel_Solaeche_Resume_EN.pdf"
                download
                className="inline-flex items-center justify-center gap-2 px-4 py-2 bg-zinc-900/80 text-slate-300 rounded-lg text-sm font-medium hover:bg-zinc-800 hover:text-white transition-colors duration-200 border border-zinc-700 hover:border-zinc-600 cursor-pointer"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                <span>EN Resume</span>
              </a>
              <a
                href="/resumes/Joel_Solaeche_Resume_JP.pdf"
                download
                className="inline-flex items-center justify-center gap-2 px-4 py-2 bg-zinc-900/80 text-slate-300 rounded-lg text-sm font-medium hover:bg-zinc-800 hover:text-white transition-colors duration-200 border border-zinc-700 hover:border-zinc-600 cursor-pointer"
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
                  className="inline-flex items-center justify-center gap-2 px-4 py-2 bg-zinc-900/80 text-slate-300 rounded-lg text-sm font-medium hover:bg-zinc-800 hover:text-white transition-colors duration-200 border border-zinc-700 hover:border-zinc-600 cursor-pointer"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                  <span>職務経歴書</span>
                </a>
              )}
            </motion.div>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.5 }}
              className="flex items-center gap-2.5 justify-center lg:justify-start"
            >
              <a
                href={PORTFOLIO_DATA.github}
                target="_blank"
                rel="noopener noreferrer"
                title="GitHub"
                className="w-9 h-9 flex items-center justify-center rounded-lg bg-white/5 border border-white/10 text-slate-400 hover:text-white hover:bg-white/10 hover:border-white/20 transition-all duration-200 cursor-pointer"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                </svg>
              </a>
              <a
                href={PORTFOLIO_DATA.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                title="LinkedIn"
                className="w-9 h-9 flex items-center justify-center rounded-lg bg-blue-600/10 border border-blue-500/20 text-blue-400 hover:bg-blue-600/20 hover:border-blue-500/40 transition-all duration-200 cursor-pointer"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </a>
              <a
                href={`mailto:${PORTFOLIO_DATA.email}`}
                title="Email"
                className="w-9 h-9 flex items-center justify-center rounded-lg bg-white/5 border border-white/10 text-slate-400 hover:text-white hover:bg-white/10 hover:border-white/20 transition-all duration-200 cursor-pointer"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </a>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 1.8 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10"
      >
        <motion.button
          onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
          className="text-slate-500 hover:text-slate-300 transition-colors duration-200 focus:outline-none cursor-pointer"
          aria-label="Scroll to about"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </motion.button>
      </motion.div>

      <div className="absolute bottom-0 left-0 w-full h-24 z-10" style={{ background: 'linear-gradient(to top, #080d18, transparent)' }} />
    </section>
  );
};

export default Hero;
