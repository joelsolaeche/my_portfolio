'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { useLanguage } from '@/contexts/LanguageContext';

type AchievementCategory = 'all' | 'awards' | 'technical' | 'impact' | 'recognition';

interface Achievement {
  id: number;
  category: AchievementCategory[];
  icon: string;
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
  }
];

const CATEGORIES = [
  { id: 'all' as AchievementCategory, label: 'All', labelJa: 'すべて', icon: '🌟' },
  { id: 'awards' as AchievementCategory, label: 'Awards', labelJa: '受賞歴', icon: '🏆' },
  { id: 'technical' as AchievementCategory, label: 'Technical', labelJa: '技術的', icon: '⚙️' },
  { id: 'impact' as AchievementCategory, label: 'Impact', labelJa: 'インパクト', icon: '🚀' },
  { id: 'recognition' as AchievementCategory, label: 'Recognition', labelJa: '評価', icon: '🎓' }
];

const Achievements = () => {
  const { language } = useLanguage();
  const [activeCategory, setActiveCategory] = useState<AchievementCategory>('all');
  const [currentSlide, setCurrentSlide] = useState(0);

  // Separate Helte recognitions (id 1 and 2) for carousel
  const helteRecognitions = ACHIEVEMENTS.filter(a => a.id === 1 || a.id === 2);
  const otherAchievements = ACHIEVEMENTS.filter(a => a.id !== 1 && a.id !== 2);

  const filteredAchievements = activeCategory === 'all' 
    ? otherAchievements 
    : otherAchievements.filter(achievement => achievement.category.includes(activeCategory));

  // Show Helte carousel only when 'all', 'awards', or 'recognition' categories are active
  const showHelteCarousel = activeCategory === 'all' || activeCategory === 'awards' || activeCategory === 'recognition';

  // Auto-play carousel
  React.useEffect(() => {
    if (!showHelteCarousel) return;
    
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % helteRecognitions.length);
    }, 10000); // Change slide every 10 seconds

    return () => clearInterval(interval);
  }, [showHelteCarousel, helteRecognitions.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % helteRecognitions.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + helteRecognitions.length) % helteRecognitions.length);
  };

  return (
    <section id="achievements" className="relative bg-slate-900 py-32 px-8 lg:px-12">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl sm:text-6xl font-bold text-slate-100 mb-8 tracking-tight">
            {language === 'ja' ? '実績・成果' : 'Achievements'}
          </h2>
          <p className="text-xl text-slate-400 max-w-3xl mx-auto leading-relaxed">
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
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {CATEGORIES.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`px-6 py-3 rounded-xl font-medium transition-all duration-300 flex items-center gap-2 ${
                activeCategory === category.id
                  ? 'bg-gradient-to-r from-blue-500 to-purple-500 text-white shadow-lg scale-105'
                  : 'bg-slate-800 text-slate-300 hover:bg-slate-700 hover:text-white'
              }`}
            >
              <span className="text-xl">{category.icon}</span>
              <span>{language === 'ja' ? category.labelJa : category.label}</span>
            </button>
          ))}
        </motion.div>

        {/* Helte Recognition Carousel */}
        {showHelteCarousel && (
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <h3 className="text-2xl font-bold text-slate-100 mb-6 text-center">
              {language === 'ja' ? 'Helte 認定実績' : 'Helte Recognitions'}
            </h3>
            <div className="relative w-full">
              {/* Carousel Container */}
              <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-slate-800 to-slate-900 border border-slate-700">
                <div 
                  className="flex transition-transform duration-500 ease-in-out"
                  style={{ transform: `translateX(-${currentSlide * 100}%)` }}
                >
                  {helteRecognitions.map((achievement) => (
                    <div key={achievement.id} className="min-w-full">
                      {/* Image */}
                      {achievement.image && (
                        <div className="relative w-full h-[500px] md:h-[600px] lg:h-[700px] bg-slate-900">
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
                      <div className="p-8 md:p-10">
                        <div className="flex items-start justify-between mb-4">
                          <div className="text-5xl">{achievement.icon}</div>
                          <span className="text-xs text-slate-500 bg-slate-800 px-3 py-1 rounded-full">
                            {achievement.date}
                          </span>
                        </div>

                        <h3 className="text-2xl md:text-3xl font-bold text-slate-100 mb-4">
                          {language === 'ja' ? achievement.titleJa : achievement.title}
                        </h3>

                        <p className="text-slate-300 mb-6 leading-relaxed text-base md:text-lg">
                          {language === 'ja' ? achievement.descriptionJa : achievement.description}
                        </p>

                        {achievement.metric && (
                          <div className="mb-6">
                            <div className="inline-block bg-gradient-to-r from-blue-500/20 to-purple-500/20 border border-blue-500/30 text-blue-400 px-5 py-2 rounded-lg text-sm font-semibold">
                              {language === 'ja' ? achievement.metricJa : achievement.metric}
                            </div>
                          </div>
                        )}

                        {achievement.link && (
                          <a
                            href={achievement.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center text-blue-400 hover:text-blue-300 transition-colors duration-200 font-medium group/link"
                          >
                            <span>{language === 'ja' ? achievement.linkTextJa : achievement.linkText}</span>
                            <svg 
                              className="w-5 h-5 ml-2 transform group-hover/link:translate-x-1 transition-transform duration-200" 
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
                  ))}
                </div>

                {/* Navigation Arrows */}
                <button
                  onClick={prevSlide}
                  className="absolute left-4 top-1/2 -translate-y-1/2 bg-slate-800/80 hover:bg-slate-700 text-white p-3 rounded-full backdrop-blur-sm transition-all duration-300 z-10"
                  aria-label="Previous slide"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                  </svg>
                </button>
                <button
                  onClick={nextSlide}
                  className="absolute right-4 top-1/2 -translate-y-1/2 bg-slate-800/80 hover:bg-slate-700 text-white p-3 rounded-full backdrop-blur-sm transition-all duration-300 z-10"
                  aria-label="Next slide"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>

                {/* Dots Indicator */}
                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-10">
                  {helteRecognitions.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentSlide(index)}
                      className={`w-2 h-2 rounded-full transition-all duration-300 ${
                        currentSlide === index 
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
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredAchievements.map((achievement, index) => (
            <motion.div
              key={achievement.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl overflow-hidden border border-slate-700 hover:border-blue-400 transition-all duration-300 hover:scale-105 shadow-lg group"
            >
              {/* Image if available */}
              {achievement.image && (
                <div className="relative w-full h-48 bg-slate-900">
                  <Image
                    src={achievement.image}
                    alt={achievement.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
              )}

              <div className="p-6">
                {/* Icon & Date */}
                <div className="flex items-start justify-between mb-4">
                  <div className="text-5xl">{achievement.icon}</div>
                  <span className="text-xs text-slate-500 bg-slate-800 px-3 py-1 rounded-full">
                    {achievement.date}
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-slate-100 mb-3 group-hover:text-blue-400 transition-colors duration-300">
                  {language === 'ja' ? achievement.titleJa : achievement.title}
                </h3>

              {/* Description */}
              <p className="text-slate-300 mb-4 leading-relaxed text-sm">
                {language === 'ja' ? achievement.descriptionJa : achievement.description}
              </p>

              {/* Metric Badge */}
              {achievement.metric && (
                <div className="inline-block bg-gradient-to-r from-blue-500/20 to-purple-500/20 border border-blue-500/30 text-blue-400 px-4 py-2 rounded-lg text-sm font-semibold mb-4">
                  {language === 'ja' ? achievement.metricJa : achievement.metric}
                </div>
              )}

              {/* Link */}
              {achievement.link && (
                <a
                  href={achievement.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-blue-400 hover:text-blue-300 transition-colors duration-200 text-sm font-medium group/link"
                >
                  <span>{language === 'ja' ? achievement.linkTextJa : achievement.linkText}</span>
                  <svg 
                    className="w-4 h-4 ml-1 transform group-hover/link:translate-x-1 transition-transform duration-200" 
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
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6"
        >
          {[
            { value: '9+', label: 'Key Achievements', labelJa: '主要実績' },
            { value: '$500K+', label: 'Value Created', labelJa: '創出価値' },
            { value: '95%+', label: 'Peak Accuracy', labelJa: '最高精度' },
            { value: '90%', label: 'Max Time Saved', labelJa: '最大時間削減' }
          ].map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-xl p-6 text-center border border-slate-700"
            >
              <div className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400 mb-2">
                {stat.value}
              </div>
              <div className="text-sm text-slate-400">
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
