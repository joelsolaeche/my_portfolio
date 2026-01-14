'use client';

import React, { useState, useCallback, useMemo, useRef, useEffect } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence, PanInfo } from 'framer-motion';
import { useLanguage } from '@/contexts/LanguageContext';

type AchievementCategory = 'all' | 'awards' | 'technical' | 'impact' | 'recognition' | 'language';

interface Achievement {
  id: number;
  category: AchievementCategory[];
  icon: string;
  iconImage?: string; // Optional path to icon image (for flags, etc.)
  title: string;
  titleJa: string;
  description: string;
  descriptionJa: string;
  metric?: string;
  metricJa?: string;
  link?: string;
  linkText?: string;
  linkTextJa?: string;
  date: string;
  image?: string;
}

// Stable slide variants - defined outside component to prevent recreation
const SLIDE_VARIANTS = {
  enter: (dir: number) => ({
    x: dir > 0 ? 300 : -300,
    opacity: 0,
  }),
  center: {
    x: 0,
    opacity: 1,
  },
  exit: (dir: number) => ({
    x: dir > 0 ? -300 : 300,
    opacity: 0,
  }),
};

const ACHIEVEMENTS: Achievement[] = [
  {
    id: 1,
    category: ['awards', 'recognition'],
    icon: '🏆',
    title: 'Helte Award - Sail Dream Project (3rd Edition)',
    titleJa: 'Helte賞受賞 - Sail夢プロジェクト（第3回）',
    description: 'Won the Helte Award at the world\'s largest online Japanese speech contest, earning a fully-funded internship at Helte Co., Ltd in Tokyo',
    descriptionJa: '世界最大級のオンライン日本語スピーチコンテストでHelte賞を受賞し、東京のHelte株式会社での全額支給インターンシップを獲得',
    metric: 'Global Competition Winner',
    metricJa: '国際大会優勝',
    link: 'https://helte.jp/journal/%E7%AC%AC3%E5%9B%9E%E5%A4%A2%E3%83%97%E3%83%AD%E3%82%B8%E3%82%A7%E3%82%AF%E3%83%88_helte%E8%B3%9E_%E3%82%A4%E3%83%B3%E3%82%BF%E3%83%BC%E3%83%B3%E3%82%B7%E3%83%83%E3%83%97/',
    linkText: 'View Article',
    linkTextJa: '記事を見る',
    date: 'Aug 2024',
    image: '/images/achievements/internship_image.png'
  },
  {
    id: 2,
    category: ['awards', 'recognition'],
    icon: '📜',
    title: 'Helte Internship Completion Certificate',
    titleJa: 'Helteインターンシップ修了証明書',
    description: 'Official completion certificate and recommendation letter from Helte Co., Ltd for outstanding performance during the internship program in Tokyo',
    descriptionJa: '東京でのインターンシッププログラムでの優秀なパフォーマンスに対するHelte株式会社からの公式修了証明書と推薦状',
    metric: 'Official Certificate',
    metricJa: '公式証明書',
    link: '/images/achievements/2024年9月25日_インターンシップ実施証明書_ジョエル様.pdf',
    linkText: 'View Recommendation Letter (PDF)',
    linkTextJa: '推薦状を見る (PDF)',
    date: 'Sep 2024',
    image: '/images/achievements/recommendation_letter.png'
  },
  {
    id: 11,
    category: ['recognition', 'technical'],
    icon: '🎓',
    title: 'Anyone AI Machine Learning Certificate',
    titleJa: 'Anyone AI 機械学習修了証',
    description: 'Completed rigorous Machine Learning Engineering program from Anyone AI Elite program, mastering advanced ML algorithms, model deployment, and production systems',
    descriptionJa: 'Anyone AIエリートプログラムの厳格な機械学習エンジニアリングプログラムを修了し、高度なMLアルゴリズム、モデルデプロイメント、本番システムを習得',
    metric: 'Elite ML Program',
    metricJa: 'エリートMLプログラム',
    link: '/images/achievements/AY24-05 - Certificate _ Joel Solaeche2x.pdf',
    linkText: 'View Certificate (PDF)',
    linkTextJa: '証明書を見る (PDF)',
    date: 'May 2025',
    image: '/images/achievements/AY24-05 - Certificate _ Joel Solaeche@2x.png'
  },
  {
    id: 12,
    category: ['recognition', 'technical'],
    icon: '🤖',
    title: 'LLM-Based Applications Development Certificate',
    titleJa: 'LLMベースアプリケーション開発修了証',
    description: 'Certified in developing production-ready LLM applications, covering RAG architecture, prompt engineering, vector databases, and agentic AI systems',
    descriptionJa: '本番対応LLMアプリケーション開発の認定を取得。RAGアーキテクチャ、プロンプトエンジニアリング、ベクトルデータベース、エージェントAIシステムを網羅',
    metric: 'LLM Development',
    metricJa: 'LLM開発',
    link: '/images/achievements/Developing LLM-Based Apps _ Joel Andres Solaeche.pdf',
    linkText: 'View Certificate (PDF)',
    linkTextJa: '証明書を見る (PDF)',
    date: 'Nov 2025',
    image: '/images/achievements/Developing LLM-Based Apps _ Joel Andres Solaeche.png'
  },
  {
    id: 17,
    category: ['recognition', 'technical'],
    icon: '🤖',
    title: 'AI Agents Specialization Certificate',
    titleJa: 'AIエージェント専門修了証',
    description: 'Certified in building advanced AI agents, covering LangChain, LangGraph, CrewAI, MCP, Tool Use, Human-in-the-Loop, RAG, and multi-agent orchestration systems',
    descriptionJa: '高度なAIエージェント構築の認定を取得。LangChain、LangGraph、CrewAI、MCP、ツール使用、ヒューマンインザループ、RAG、マルチエージェントオーケストレーションシステムを網羅',
    metric: 'Agents Specialization',
    metricJa: 'エージェント専門',
    link: '/images/achievements/Certificates - Agents _ Joel Andres Solaeche2x.pdf',
    linkText: 'View Certificate (PDF)',
    linkTextJa: '証明書を見る (PDF)',
    date: 'Jan 2026',
    image: '/images/achievements/Certificates - Agents _ Joel Andres Solaeche@2x.png'
  },
  {
    id: 3,
    category: ['recognition', 'technical'],
    icon: '🎓',
    title: 'Anyone AI Elite ML Program',
    titleJa: 'Anyone AI エリートMLプログラム',
    description: 'Selected for prestigious Machine Learning program with less than 2% acceptance rate among global applicants',
    descriptionJa: '世界中の応募者の中から2%未満の合格率を誇る名誉あるマシンラーニングエンジニアリングプログラムに選出',
    metric: '<2% Acceptance Rate',
    metricJa: '合格率2%未満',
    date: 'Nov 2024'
  },
  {
    id: 4,
    category: ['impact', 'technical'],
    icon: '💰',
    title: 'Credit Risk Model - $500K+ Default Prevention',
    titleJa: '信用リスクモデル - 50万ドル以上のデフォルト防止',
    description: 'Developed ML model processing 350K+ transactions achieving AUC ROC >0.72, preventing over $500,000 in potential loan defaults',
    descriptionJa: '35万件以上の取引を処理し、AUC ROC >0.72を達成するMLモデルを開発し、50万ドル以上の潜在的ローンデフォルトを防止',
    metric: '$500K+ Saved',
    metricJa: '50万ドル以上削減',
    date: 'Mar 2025'
  },
  {
    id: 5,
    category: ['impact', 'technical'],
    icon: '🤖',
    title: 'LLM Recruitment Tool - 90% Time Reduction',
    titleJa: 'LLM採用ツール - 90%時間削減',
    description: 'Built intelligent recruitment platform using RAG + LangChain reducing hiring screening time by 90% through semantic job matching',
    descriptionJa: 'RAG + LangChainを使用したインテリジェント採用プラットフォームを構築し、意味的求人マッチングにより採用スクリーニング時間を90%削減',
    metric: '90% Time Saved',
    metricJa: '90%時間削減',
    date: 'Feb 2025'
  },
  {
    id: 6,
    category: ['technical', 'impact'],
    icon: '🎯',
    title: 'Production CV System - 95%+ Accuracy',
    titleJa: '本番CVシステム - 95%以上の精度',
    description: 'Deployed YOLO-based computer vision system for warehouse automation achieving 95%+ accuracy and 85% reduction in manual verification',
    descriptionJa: '倉庫自動化向けYOLOベースのコンピュータビジョンシステムをデプロイし、95%以上の精度と85%の手動検証削減を達成',
    metric: '95%+ Accuracy',
    metricJa: '95%以上の精度',
    date: 'Nov 2025'
  },
  {
    id: 7,
    category: ['impact'],
    icon: '🌍',
    title: 'Scale AI - Millions of Developers Impacted',
    titleJa: 'Scale AI - 数百万人の開発者に影響',
    description: 'Contributed to RLHF pipeline and AI code assistant improvements (Claude, Copilot, Gemini) benefiting millions of developers worldwide',
    descriptionJa: 'RLHFパイプラインとAIコードアシスタント改善（Claude、Copilot、Gemini）に貢献し、世界中の数百万人の開発者に利益をもたらす',
    metric: 'Millions Impacted',
    metricJa: '数百万人に影響',
    date: 'Sep 2025'
  },
  {
    id: 10,
    category: ['technical'],
    icon: '🎨',
    title: 'Multimodal AI - 85%+ Classification Accuracy',
    titleJa: 'マルチモーダルAI - 85%以上の分類精度',
    description: 'Built multimodal ML system integrating NLP + Computer Vision for e-commerce product classification across 49K+ products',
    descriptionJa: 'NLP + Computer Visionを統合したマルチモーダルMLシステムを構築し、49K+製品のeコマース製品分類を実現',
    metric: '85%+ Accuracy',
    metricJa: '85%以上の精度',
    date: 'Jan 2025'
  },
  {
    id: 8,
    category: ['impact'],
    icon: '📊',
    title: 'Data Pipeline - 20+ Hours Monthly Automation',
    titleJa: 'データパイプライン - 月20時間以上の自動化',
    description: 'Engineered scalable ELT pipeline with Apache Airflow analyzing $2.8M+ revenue and automating 20+ hours of monthly reporting',
    descriptionJa: 'Apache AirflowでスケーラブルなELTパイプラインを構築し、280万ドル以上の収益を分析し、月20時間以上のレポート作業を自動化',
    metric: '20+ Hours Saved',
    metricJa: '月20時間以上削減',
    date: 'Dec 2024'
  },
  {
    id: 9,
    category: ['impact'],
    icon: '📈',
    title: 'UI/UX Improvements - 40% Traffic Increase',
    titleJa: 'UI/UX改善 - 40%トラフィック増加',
    description: 'Led UI/UX optimization initiatives at Helte resulting in 40% increase in user traffic through data-driven design decisions',
    descriptionJa: 'Helteでデータ駆動型デザイン決定によりUI/UX最適化イニシアチブを主導し、ユーザートラフィック40%増加を達成',
    metric: '40% Growth',
    metricJa: '40%成長',
    date: 'Nov 2024'
  },
  {
    id: 13,
    category: ['language'],
    icon: '🇯🇵',
    iconImage: '/icons/japan.png',
    title: 'JLPT N2 - Japanese Language Proficiency',
    titleJa: 'JLPT N2 - 日本語能力試験',
    description: 'Achieved N2 level certification in Japanese Language Proficiency Test, demonstrating advanced business-level Japanese communication skills',
    descriptionJa: '日本語能力試験N2レベルの認定を取得し、ビジネスレベルの高度な日本語コミュニケーション能力を証明',
    metric: 'N2 Level',
    metricJa: 'N2レベル',
    date: 'Aug 2022'
  },
  {
    id: 14,
    category: ['language'],
    icon: '🇬🇧',
    iconImage: '/icons/united-states.png',
    title: 'Cambridge First B2 - English Proficiency',
    titleJa: 'ケンブリッジ英検B2 - 英語能力',
    description: 'Earned Cambridge First Certificate (B2) demonstrating upper-intermediate English proficiency in professional and academic contexts',
    descriptionJa: 'ケンブリッジ英検B2を取得し、専門的および学術的な文脈での中上級英語能力を証明',
    metric: 'B2 Level',
    metricJa: 'B2レベル',
    date: 'Dec 2021'
  },
  {
    id: 15,
    category: ['language'],
    icon: '🌍',
    title: 'EF SET C1 - Advanced English Certificate',
    titleJa: 'EF SET C1 - 上級英語認定',
    description: 'Achieved C1 Advanced level on EF SET English Certificate, demonstrating proficient command of English in complex professional situations',
    descriptionJa: 'EF SET英語認定でC1上級レベルを達成し、複雑な専門的状況での熟練した英語運用能力を証明',
    metric: 'C1 Advanced',
    metricJa: 'C1上級',
    link: '/images/achievements/EF SET Certificate.pdf',
    linkText: 'View Certificate (PDF)',
    linkTextJa: '証明書を見る (PDF)',
    date: 'Apr 2023',
    image: '/images/achievements/efset-preview.png'
  },
  {
    id: 16,
    category: ['language'],
    icon: '🗣️',
    title: 'Smalltalk C1 - English Speaking Level Test',
    titleJa: 'Smalltalk C1 - 英語スピーキングレベルテスト',
    description: 'Certified C1 Advanced level in English speaking proficiency through Smalltalk assessment, demonstrating fluent verbal communication skills',
    descriptionJa: 'Smalltalk評価でC1上級レベルの英語スピーキング能力認定を取得し、流暢な口頭コミュニケーションスキルを証明',
    metric: 'C1 Speaking',
    metricJa: 'C1スピーキング',
    link: '/images/achievements/0b7c9260.pdf',
    linkText: 'View Certificate (PDF)',
    linkTextJa: '証明書を見る (PDF)',
    date: 'Apr 2023',
    image: '/images/achievements/smalltalk-preview.png'
  }
];

const CATEGORIES = [
  { id: 'all' as AchievementCategory, label: 'All', labelJa: 'すべて', icon: '🌟', color: 'blue' },
  { id: 'awards' as AchievementCategory, label: 'Awards', labelJa: '受賞歴', icon: '🏆', color: 'yellow' },
  { id: 'technical' as AchievementCategory, label: 'Technical', labelJa: '技術的', icon: '⚙️', color: 'cyan' },
  { id: 'impact' as AchievementCategory, label: 'Impact', labelJa: 'インパクト', icon: '🚀', color: 'purple' },
  { id: 'recognition' as AchievementCategory, label: 'Recognition', labelJa: '評価', icon: '🎓', color: 'green' },
  { id: 'language' as AchievementCategory, label: 'Language', labelJa: '言語', icon: '🌐', color: 'orange' }
];

// Pre-filter achievements outside component for stable references
const HELTE_RECOGNITIONS = ACHIEVEMENTS.filter(a => a.id === 1 || a.id === 2);
const OTHER_ACHIEVEMENTS = ACHIEVEMENTS.filter(a => a.id !== 1 && a.id !== 2);

const Achievements = () => {
  const { language } = useLanguage();
  const [activeCategory, setActiveCategory] = useState<AchievementCategory>('all');
  const [currentSlide, setCurrentSlide] = useState(0);
  const [direction, setDirection] = useState(0);
  
  // Use ref to avoid re-creating interval callback
  const slideRef = useRef(currentSlide);
  slideRef.current = currentSlide;

  // Memoize filtered achievements
  const filteredAchievements = useMemo(() => 
    activeCategory === 'all'
      ? OTHER_ACHIEVEMENTS
      : OTHER_ACHIEVEMENTS.filter(achievement => achievement.category.includes(activeCategory)),
    [activeCategory]
  );

  // Show Helte carousel only when 'all', 'awards', or 'recognition' categories are active
  const showHelteCarousel = activeCategory === 'all' || activeCategory === 'awards' || activeCategory === 'recognition';

  // Auto-play carousel with stable callback
  useEffect(() => {
    if (!showHelteCarousel) return;

    const interval = setInterval(() => {
      setDirection(1);
      setCurrentSlide((prev) => (prev + 1) % HELTE_RECOGNITIONS.length);
    }, 10000);

    return () => clearInterval(interval);
  }, [showHelteCarousel]);

  const nextSlide = useCallback(() => {
    setDirection(1);
    setCurrentSlide((prev) => (prev + 1) % HELTE_RECOGNITIONS.length);
  }, []);

  const prevSlide = useCallback(() => {
    setDirection(-1);
    setCurrentSlide((prev) => (prev - 1 + HELTE_RECOGNITIONS.length) % HELTE_RECOGNITIONS.length);
  }, []);

  // Handle swipe gestures for touch devices - memoized
  const handleDragEnd = useCallback((event: MouseEvent | TouchEvent | PointerEvent, info: PanInfo) => {
    const swipeThreshold = 50;
    if (info.offset.x > swipeThreshold) {
      prevSlide();
    } else if (info.offset.x < -swipeThreshold) {
      nextSlide();
    }
  }, [prevSlide, nextSlide]);

  // Memoized slide select handler
  const handleSlideSelect = useCallback((index: number) => {
    setCurrentSlide(index);
  }, []);

  // Memoized category change handler
  const handleCategoryChange = useCallback((categoryId: AchievementCategory) => {
    setActiveCategory(categoryId);
  }, []);

  return (
    <section id="achievements" className="relative bg-slate-900 py-24 px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-100 mb-4 tracking-tight">
            {language === 'ja' ? '実績・成果' : 'Achievements'}
          </h2>
          <p className="text-base text-slate-400 max-w-2xl mx-auto leading-relaxed">
            {language === 'ja'
              ? 'インパクトのある成果と技術的達成の軌跡'
              : 'A track record of impactful results and technical excellence'}
          </p>
        </motion.div>

        {/* Category Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-2 mb-10"
        >
          {CATEGORIES.map((category) => {
            const isActive = activeCategory === category.id;
            const colorStyles = {
              blue: isActive 
                ? 'bg-blue-600/30 text-blue-300 border-blue-500/40' 
                : 'bg-blue-600/10 text-blue-400 border-blue-500/20 hover:bg-blue-600/20',
              yellow: isActive 
                ? 'bg-yellow-600/30 text-yellow-300 border-yellow-500/40' 
                : 'bg-yellow-600/10 text-yellow-400 border-yellow-500/20 hover:bg-yellow-600/20',
              cyan: isActive 
                ? 'bg-cyan-600/30 text-cyan-300 border-cyan-500/40' 
                : 'bg-cyan-600/10 text-cyan-400 border-cyan-500/20 hover:bg-cyan-600/20',
              purple: isActive 
                ? 'bg-purple-600/30 text-purple-300 border-purple-500/40' 
                : 'bg-purple-600/10 text-purple-400 border-purple-500/20 hover:bg-purple-600/20',
              green: isActive 
                ? 'bg-green-600/30 text-green-300 border-green-500/40' 
                : 'bg-green-600/10 text-green-400 border-green-500/20 hover:bg-green-600/20',
              orange: isActive 
                ? 'bg-orange-600/30 text-orange-300 border-orange-500/40' 
                : 'bg-orange-600/10 text-orange-400 border-orange-500/20 hover:bg-orange-600/20',
            };
            const style = colorStyles[category.color as keyof typeof colorStyles] || colorStyles.blue;
            
            return (
              <button
                key={category.id}
                onClick={() => handleCategoryChange(category.id)}
                className={`px-4 py-1.5 rounded-full text-sm transition-colors duration-200 flex items-center gap-1.5 border ${style}`}
              >
                <span className="text-sm">{category.icon}</span>
                <span>{language === 'ja' ? category.labelJa : category.label}</span>
              </button>
            );
          })}
        </motion.div>

        {/* Helte Recognition Carousel */}
        {showHelteCarousel && (
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mb-10"
          >
            <h3 className="text-lg font-semibold text-slate-100 mb-4 text-center">
              {language === 'ja' ? 'Helte 認定実績' : 'Helte Recognitions'}
            </h3>
            <div className="relative w-full">
              {/* Carousel Container */}
              <div className="relative overflow-hidden rounded-xl bg-slate-800/50 border border-slate-700/50">
                <AnimatePresence mode="wait" custom={direction} initial={false}>
                  <motion.div
                    key={currentSlide}
                    custom={direction}
                    variants={SLIDE_VARIANTS}
                    initial="enter"
                    animate="center"
                    exit="exit"
                    transition={{ duration: 0.35, ease: [0.32, 0.72, 0, 1] }}
                    drag="x"
                    dragConstraints={{ left: 0, right: 0 }}
                    dragElastic={0.15}
                    onDragEnd={handleDragEnd}
                    className="cursor-grab active:cursor-grabbing touch-pan-y"
                  >
                    {(() => {
                      const achievement = HELTE_RECOGNITIONS[currentSlide];
                      return (
                        <div className="min-w-full">
                          {/* Image */}
                          {achievement.image && (
                            <div className="relative w-full h-[350px] md:h-[400px] lg:h-[450px] bg-slate-900">
                              <Image
                                src={achievement.image}
                                alt={achievement.title}
                                fill
                                className={achievement.id === 1 ? "object-contain" : "object-cover"}
                                priority={achievement.id === 1}
                              />
                            </div>
                          )}

                          {/* Content */}
                          <div className="p-6">
                            <div className="flex items-start justify-between mb-3">
                              <div className="text-3xl">{achievement.icon}</div>
                              <span className="text-xs text-slate-500 bg-slate-800 px-2 py-0.5 rounded-full">
                                {achievement.date}
                              </span>
                            </div>

                            <h3 className="text-lg font-semibold text-slate-100 mb-2">
                              {language === 'ja' ? achievement.titleJa : achievement.title}
                            </h3>

                            <p className="text-slate-400 mb-4 leading-relaxed text-sm">
                              {language === 'ja' ? achievement.descriptionJa : achievement.description}
                            </p>

                            {achievement.metric && (
                              <div className="mb-4">
                                <div className="inline-block bg-blue-500/10 border border-blue-500/20 text-blue-400 px-3 py-1 rounded-lg text-xs font-medium">
                                  {language === 'ja' ? achievement.metricJa : achievement.metric}
                                </div>
                              </div>
                            )}

                            {achievement.link && (
                              <a
                                href={achievement.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center text-blue-400 hover:text-blue-300 transition-colors duration-200 text-sm"
                              >
                                <span>{language === 'ja' ? achievement.linkTextJa : achievement.linkText}</span>
                                <svg
                                  className="w-4 h-4 ml-1"
                                  fill="none"
                                  stroke="currentColor"
                                  viewBox="0 0 24 24"
                                >
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                                </svg>
                              </a>
                            )}
                          </div>
                        </div>
                      );
                    })()}
                  </motion.div>
                </AnimatePresence>

                {/* Navigation Arrows */}
                <button
                  onClick={prevSlide}
                  className="absolute left-3 top-1/2 -translate-y-1/2 bg-slate-800/80 hover:bg-slate-700 text-white p-2 rounded-full backdrop-blur-sm transition-colors duration-200 z-10"
                  aria-label="Previous slide"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                  </svg>
                </button>
                <button
                  onClick={nextSlide}
                  className="absolute right-3 top-1/2 -translate-y-1/2 bg-slate-800/80 hover:bg-slate-700 text-white p-2 rounded-full backdrop-blur-sm transition-colors duration-200 z-10"
                  aria-label="Next slide"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>

                {/* Dots Indicator */}
                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-10">
                  {HELTE_RECOGNITIONS.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => handleSlideSelect(index)}
                      className={`w-2 h-2 rounded-full transition-all duration-300 ${currentSlide === index
                        ? 'bg-blue-400 w-8'
                        : 'bg-slate-600 hover:bg-slate-500'
                        }`}
                      aria-label={`Go to slide ${index + 1}`}
                    />
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        )}

        {/* Other Achievements Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {filteredAchievements.map((achievement) => (
            <motion.div
              key={achievement.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              viewport={{ once: true }}
              className="bg-slate-800/50 rounded-xl overflow-hidden border border-slate-700/50 hover:border-slate-600 transition-colors duration-200 group"
            >
              {/* Image if available */}
              {achievement.image && (
                <div className="relative w-full h-36 bg-slate-900">
                  <Image
                    src={achievement.image}
                    alt={achievement.title}
                    fill
                    className="object-cover"
                    loading="lazy"
                  />
                </div>
              )}

              <div className="p-5">
                {/* Icon & Date */}
                <div className="flex items-start justify-between mb-3">
                  {achievement.iconImage ? (
                    <div className="w-10 h-10 relative">
                      <Image
                        src={achievement.iconImage}
                        alt={achievement.title}
                        width={40}
                        height={40}
                        className="object-contain"
                        loading="lazy"
                      />
                    </div>
                  ) : (
                    <div className="text-3xl">{achievement.icon}</div>
                  )}
                  <span className="text-xs text-slate-500 bg-slate-800 px-2 py-0.5 rounded-full">
                    {achievement.date}
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-base font-semibold text-slate-100 mb-2">
                  {language === 'ja' ? achievement.titleJa : achievement.title}
                </h3>

                {/* Description */}
                <p className="text-slate-400 mb-3 leading-relaxed text-sm line-clamp-3">
                  {language === 'ja' ? achievement.descriptionJa : achievement.description}
                </p>

                {/* Metric Badge */}
                {achievement.metric && (
                  <div className="inline-block bg-blue-500/10 border border-blue-500/20 text-blue-400 px-2.5 py-1 rounded-lg text-xs font-medium mb-3">
                    {language === 'ja' ? achievement.metricJa : achievement.metric}
                  </div>
                )}

                {/* Link */}
                {achievement.link && (
                  <a
                    href={achievement.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center text-blue-400 hover:text-blue-300 transition-colors duration-200 text-sm mt-2"
                  >
                    <span>{language === 'ja' ? achievement.linkTextJa : achievement.linkText}</span>
                    <svg
                      className="w-3.5 h-3.5 ml-1"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                  </a>
                )}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Stats Summary */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-4"
        >
          {[
            { value: '9+', label: 'Key Achievements', labelJa: '主要実績' },
            { value: '$500K+', label: 'Value Created', labelJa: '創出価値' },
            { value: '95%+', label: 'Peak Accuracy', labelJa: '最高精度' },
            { value: '90%', label: 'Max Time Saved', labelJa: '最大時間削減' }
          ].map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              viewport={{ once: true }}
              className="bg-slate-800/50 rounded-lg p-4 text-center border border-slate-700/50"
            >
              <div className="text-xl font-bold text-blue-400 mb-1">
                {stat.value}
              </div>
              <div className="text-xs text-slate-500">
                {language === 'ja' ? stat.labelJa : stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Achievements;
