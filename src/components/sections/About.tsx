'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { MapPin, GraduationCap, Languages, Briefcase, Code2, Clock } from 'lucide-react';
import { PORTFOLIO_DATA } from '@/lib/constants';
import { useLanguage } from '@/contexts/LanguageContext';
import SkillsCarousel from '@/components/ui/SkillsCarousel';
import SectionHeader from '@/components/ui/SectionHeader';

const staggerContainer = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.08 },
  },
};

const staggerItem = {
  hidden: { opacity: 0, x: -16 },
  show: { opacity: 1, x: 0, transition: { duration: 0.4 } },
};

const About = () => {
  const { t } = useLanguage();

  const facts = [
    { icon: Clock, color: 'text-blue-400', bg: 'bg-blue-500/10', text: t.about.facts.experience },
    { icon: MapPin, color: 'text-purple-400', bg: 'bg-purple-500/10', text: t.about.facts.location },
    { icon: GraduationCap, color: 'text-red-400', bg: 'bg-red-500/10', text: t.about.facts.education },
    { icon: Languages, color: 'text-green-400', bg: 'bg-green-500/10', text: t.about.facts.languages },
    { icon: Briefcase, color: 'text-orange-400', bg: 'bg-orange-500/10', text: t.about.facts.role },
    { icon: Code2, color: 'text-cyan-400', bg: 'bg-cyan-500/10', text: t.about.facts.fullStack },
  ];

  return (
    <section id="about" className="relative py-24 px-6 lg:px-8 section-gradient-overlay" style={{ backgroundColor: '#080d18' }}>
      <div className="absolute top-0 right-1/4 w-80 h-56 rounded-full blur-3xl pointer-events-none" style={{ background: 'rgba(152,16,250,0.05)' }} />

      <div className="max-w-6xl mx-auto">
        <SectionHeader
          number="01"
          title={t.about.title}
          subtitle={t.about.subtitle}
        />

        <div className="grid lg:grid-cols-2 gap-12 items-start mb-16">
          {/* Bio Section */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <div className="flex justify-center mb-8 lg:justify-start">
              <div className="relative">
                <div className="absolute -inset-2 rounded-full bg-gradient-to-br from-blue-500/20 to-purple-500/10 blur-xl" />
                <div className="relative w-36 h-36 rounded-full overflow-hidden ring-2 ring-blue-400/40 ring-offset-2 ring-offset-zinc-950">
                  <Image
                    src="/images/profile/prof_pic.jpg"
                    alt="Joel Solaeche Profile Picture"
                    fill
                    sizes="144px"
                    className="object-cover"
                    quality={100}
                    priority
                  />
                </div>
              </div>
            </div>

            <h3 className="text-xl font-semibold text-slate-100 mb-6">{t.about.myBackground}</h3>
            <div className="space-y-4 text-slate-400 leading-relaxed text-sm">
              <p>{t.about.bio.intro.replace('{name}', PORTFOLIO_DATA.name)}</p>
              <p>{t.about.bio.expertise}</p>
              <p>{t.about.bio.fullstack}</p>
              <p>{t.about.bio.current}</p>
            </div>
          </motion.div>

          {/* Quick Facts - Glassmorphism card */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            viewport={{ once: true }}
            className="glass-card rounded-2xl p-6 border border-white/[0.06]"
          >
            <h3 className="text-base font-semibold text-slate-100 mb-5">{t.about.quickFacts}</h3>

            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="space-y-3"
            >
              {facts.map(({ icon: Icon, color, bg, text }, i) => (
                <motion.div
                  key={i}
                  variants={staggerItem}
                  className="flex items-center gap-3"
                >
                  <div className={`w-8 h-8 rounded-lg ${bg} flex items-center justify-center flex-shrink-0`}>
                    <Icon className={`w-4 h-4 ${color}`} />
                  </div>
                  <span className="text-slate-300 text-sm">{text}</span>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>

        {/* Skills Carousel */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          viewport={{ once: true }}
          className="mb-4"
        >
          <h3 className="text-lg font-semibold text-slate-100 mb-8 text-center">{t.about.skillsAndTechnologies}</h3>
          <SkillsCarousel />
        </motion.div>
      </div>

      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-zinc-700/50 to-transparent" />
    </section>
  );
};

export default About;
