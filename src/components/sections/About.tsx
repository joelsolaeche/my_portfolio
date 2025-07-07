'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { PORTFOLIO_DATA, SKILLS } from '@/lib/constants';

const About = () => {
  return (
    <section id="about" className="relative bg-slate-900 py-24 px-6 lg:px-8">
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
            About Me
          </h2>
          <p className="text-xl text-slate-400 max-w-3xl mx-auto leading-relaxed">
            Learn more about my background, experience, and passion for Machine Learning and AI.
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

            <h3 className="text-2xl font-semibold text-slate-100 mb-8">My Background</h3>
            <div className="space-y-6 text-slate-300 leading-relaxed">
              <p>
                Hello! I'm {PORTFOLIO_DATA.name}, a Machine Learning Engineer with +3 years of experience specializing 
                in AI technologies. Based in Buenos Aires, Argentina, I have a passion for applying machine learning 
                to solve complex problems and create innovative solutions.
              </p>
              <p>
                My expertise spans Python, SQL, machine learning frameworks like TensorFlow, Scikit-learn, and 
                Keras, along with deployment technologies including Docker, AWS, FastAPI, and Streamlit. I've 
                worked on diverse projects from credit risk analysis to multimodal ML systems.
              </p>
              <p>
                I'm also skilled in full stack development with React, JavaScript, Next.js, and modern web technologies, 
                enabling me to build complete AI-powered applications from backend models to user interfaces.
              </p>
              <p>
                Currently, I'm enhancing AI models through coding and prompt engineering at Scale AI, while 
                contributing to real-world ML engineering projects. I hold a degree in Software Engineering 
                from UADE and am multilingual (Spanish, English C1, Japanese N2).
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
            <h3 className="text-2xl font-bold text-slate-100 mb-6">Quick Facts</h3>
            <div className="space-y-4">
              <div className="flex items-center">
                <span className="w-3 h-3 bg-blue-400 rounded-full mr-4"></span>
                <span className="text-slate-300">3+ years ML experience</span>
              </div>
              <div className="flex items-center">
                <span className="w-3 h-3 bg-purple-400 rounded-full mr-4"></span>
                <span className="text-slate-300">Based in Buenos Aires, Argentina</span>
              </div>
              <div className="flex items-center">
                <span className="w-3 h-3 bg-red-400 rounded-full mr-4"></span>
                <span className="text-slate-300">Degree in Software Engineering</span>
              </div>
              <div className="flex items-center">
                <span className="w-3 h-3 bg-green-400 rounded-full mr-4"></span>
                <span className="text-slate-300">Multilingual (Spanish, English, Japanese)</span>
              </div>
              <div className="flex items-center">
                <span className="w-3 h-3 bg-orange-400 rounded-full mr-4"></span>
                <span className="text-slate-300">ML Engineer / Software Engineer</span>
              </div>
              <div className="flex items-center">
                <span className="w-3 h-3 bg-cyan-400 rounded-full mr-4"></span>
                <span className="text-slate-300">Full Stack Developer</span>
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
          <h3 className="text-3xl font-bold text-slate-100 mb-10 text-center">Skills & Technologies</h3>
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