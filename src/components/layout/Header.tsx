'use client';

import React, { useState, useEffect, useCallback, useMemo, useRef } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { PORTFOLIO_DATA } from '@/lib/constants';
import { useLanguage } from '@/contexts/LanguageContext';
import { USFlag, JapanFlag } from '@/components/ui/FlagIcons';

// Stable section IDs - defined outside component to prevent recreation
const SECTION_IDS = ['hero', 'about', 'timeline', 'achievements', 'projects', 'contact'] as const;

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');
  const [isInHero, setIsInHero] = useState(true);
  const { language, setLanguage, t } = useLanguage();
  
  // Use refs for scroll handler to avoid closure issues and re-renders
  const rafRef = useRef<number | null>(null);
  const lastScrollY = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      // Skip if scroll position hasn't changed significantly (throttle by ~16ms via rAF)
      if (rafRef.current !== null) return;
      
      rafRef.current = requestAnimationFrame(() => {
        const scrollY = window.scrollY;
        // Skip update if scroll change is minimal (less than 5px)
        if (Math.abs(scrollY - lastScrollY.current) < 5) {
          rafRef.current = null;
          return;
        }
        lastScrollY.current = scrollY;
        
        const scrollPosition = scrollY + 100;
        const heroSection = document.getElementById('hero');
        
        // Check if we're still in the hero section
        if (heroSection) {
          const heroBottom = heroSection.offsetTop + heroSection.offsetHeight;
          const newIsInHero = scrollY < heroBottom - 200;
          setIsInHero(prev => prev !== newIsInHero ? newIsInHero : prev);
        }

        // Set active section
        for (let i = SECTION_IDS.length - 1; i >= 0; i--) {
          const section = document.getElementById(SECTION_IDS[i]);
          if (section && section.offsetTop <= scrollPosition) {
            const newSection = `#${SECTION_IDS[i]}`;
            setActiveSection(prev => prev !== newSection ? newSection : prev);
            break;
          }
        }
        rafRef.current = null;
      });
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // Call once to set initial state
    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (rafRef.current !== null) {
        cancelAnimationFrame(rafRef.current);
      }
    };
  }, []);

  const toggleMenu = useCallback(() => {
    setIsMenuOpen(prev => !prev);
  }, []);

  const handleNavClick = useCallback((e: React.MouseEvent<HTMLButtonElement>, href: string) => {
    e.preventDefault();
    e.stopPropagation();
    
    if (href.startsWith('#')) {
      const element = document.getElementById(href.slice(1));
      if (element) {
        // Close menu first, then scroll after a brief delay to ensure menu closes
        setIsMenuOpen(false);
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }, 100);
      }
    } else {
      setIsMenuOpen(false);
    }
  }, []);

  const toggleLanguage = useCallback(() => {
    setLanguage(language === 'en' ? 'ja' : 'en');
  }, [setLanguage, language]);

  // Navigation items with translations - memoized to prevent recreation
  const navItems = useMemo(() => [
    { name: t.nav.home, href: '#hero' },
    { name: t.nav.about, href: '#about' },
    { name: t.nav.experience, href: '#timeline' },
    { name: t.nav.achievements, href: '#achievements' },
    { name: t.nav.projects, href: '#projects' },
    { name: t.nav.contact, href: '#contact' },
  ], [t.nav]);

  return (
    <motion.header 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-out border-b ${
        isInHero 
          ? 'bg-transparent border-transparent' 
          : 'bg-black/90 backdrop-blur-md border-slate-800/50'
      }`}
    >
      <div className="max-w-5xl mx-auto px-6 lg:px-8">
        <div className={`flex justify-between items-center transition-all duration-300 ease-out ${
          isInHero ? 'h-18' : 'h-14'
        }`}>
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className={`font-semibold text-slate-100 tracking-tight hover:text-white transition-colors duration-200 ${
                isInHero ? 'text-lg' : 'text-base'
              }`}
            >
              {PORTFOLIO_DATA.name}
            </motion.div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-1">
            {navItems.map((item, index) => (
              <motion.div
                key={item.name}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <button
                  onClick={(e) => handleNavClick(e, item.href)}
                  className={`rounded-md font-medium transition-all duration-200 ${
                    isInHero 
                      ? 'px-3.5 py-2 text-sm' 
                      : 'px-3 py-1.5 text-sm'
                  } ${
                    activeSection === item.href
                      ? 'text-blue-400'
                      : 'text-slate-400 hover:text-slate-100'
                  }`}
                >
                  {item.name}
                </button>
              </motion.div>
            ))}
            
            {/* Language Toggle Button */}
            <motion.button
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              onClick={toggleLanguage}
              className={`ml-4 rounded-md font-medium transition-all duration-200 flex items-center gap-1.5 ${
                isInHero 
                  ? 'px-3 py-1.5 text-sm' 
                  : 'px-2.5 py-1 text-sm'
              } text-slate-400 hover:text-slate-100 border border-slate-700/50 hover:border-slate-600`}
            >
              <div className="flex items-center space-x-1">
                {language === 'en' ? (
                  <JapanFlag className={isInHero ? "w-6 h-4" : "w-5 h-3"} />
                ) : (
                  <USFlag className={isInHero ? "w-6 h-4" : "w-5 h-3"} />
                )}
                <span>{language === 'en' ? 'JP' : 'EN'}</span>
              </div>
            </motion.button>
          </nav>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center space-x-2">
            {/* Mobile Language Toggle */}
            <button
              onClick={toggleLanguage}
              className={`inline-flex items-center justify-center rounded-md text-slate-300 hover:text-slate-100 hover:bg-slate-800/50 transition-all duration-500 ${
                isInHero ? 'p-2' : 'p-1.5'
              }`}
            >
              {language === 'en' ? (
                <JapanFlag className={isInHero ? "w-6 h-4" : "w-5 h-3"} />
              ) : (
                <USFlag className={isInHero ? "w-6 h-4" : "w-5 h-3"} />
              )}
            </button>
            
            <button
              onClick={toggleMenu}
              className={`inline-flex items-center justify-center rounded-md text-slate-300 hover:text-slate-100 hover:bg-slate-800/50 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500/50 transition-all duration-500 ${
                isInHero ? 'p-2' : 'p-1.5'
              }`}
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              <motion.div
                animate={{ rotate: isMenuOpen ? 180 : 0 }}
                transition={{ duration: 0.3 }}
              >
                {!isMenuOpen ? (
                  <svg className={`block fill-none stroke-current transition-all duration-500 ${
                    isInHero ? 'h-6 w-6' : 'h-5 w-5'
                  }`} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                  </svg>
                ) : (
                  <svg className={`block fill-none stroke-current transition-all duration-500 ${
                    isInHero ? 'h-6 w-6' : 'h-5 w-5'
                  }`} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                )}
              </motion.div>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ 
            opacity: 1, 
            height: 'auto' 
          }}
          exit={{ opacity: 0, height: 0 }}
          transition={{ duration: 0.3 }}
          className={`md:hidden overflow-hidden transition-all duration-500 ${
            isInHero ? 'bg-black/60' : 'bg-black/80'
          } backdrop-blur-lg`}
        >
          <div className="px-2 pt-2 pb-3 space-y-1">
            {navItems.map((item) => (
              <button
                key={item.name}
                onClick={(e) => handleNavClick(e, item.href)}
                className={`block w-full text-left px-3 py-2 rounded-md text-base font-medium transition-colors duration-200 ${
                  activeSection === item.href
                    ? 'text-blue-400 bg-blue-500/10'
                    : 'text-slate-300 hover:text-slate-100 hover:bg-slate-800/50'
                } touch-manipulation`}
              >
                {item.name}
              </button>
            ))}
          </div>
        </motion.div>
      )}
    </motion.header>
  );
};

export default Header; 