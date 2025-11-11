'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { useLanguage } from '@/contexts/LanguageContext';

const EXPERIENCE = [
  {
    id: 1,
    title: 'AI Engineer',
    company: 'Algolabs AI',
    logo: '/images/companies/algolabs-icon.png',
    period: 'Oct 2025 - Present',
    location: 'Argentina (Remote)',
    description: [
      'Developed and optimized computer vision algorithms for image and video detection, classification, and segmentation',
      'Developed a computer vision system and full-stack application with Flask for warehouse robots to recognize and match product positions using YOLO-based object detection',
      'Implemented and trained deep learning models using CNNs and other modern architectures',
      'Prepared and preprocessed datasets, including data cleaning, labeling, and augmentation',
      'Evaluated and fine-tuned model performance through accuracy and efficiency metrics',
      'Integrated trained models into testing and production environments',
      'Collaborated with senior and junior engineers within agile workflows (Scrum/Kanban)',
      'Participated in code reviews and contributed technical improvement proposals'
    ],
    descriptionJa: [
      '画像およびビデオの検出、分類、セグメンテーション用のコンピュータビジョンアルゴリズムを開発・最適化',
      'YOLOベースのオブジェクト検出を使用して製品位置を認識・照合する倉庫ロボット向けのコンピュータビジョンシステムとFlaskフルスタックアプリケーションを開発',
      'CNNおよび他の最新アーキテクチャを使用したディープラーニングモデルの実装とトレーニング',
      'データクリーニング、ラベリング、拡張を含むデータセットの準備と前処理',
      '精度と効率メトリクスを通じたモデルパフォーマンスの評価と微調整',
      'トレーニング済みモデルをテスト環境と本番環境に統合',
      'アジャイルワークフロー（Scrum/Kanban）内でシニアおよびジュニアエンジニアと協力',
      'コードレビューに参加し、技術改善提案に貢献'
    ],
    technologies: ['TensorFlow', 'PyTorch', 'OpenCV', 'OpenVINO', 'NVIDIA SDK', 'TensorRT', 'Jetson Nano', 'DeepStream', 'Docker', 'Git', 'Flask', 'YOLO'],
    isActive: true
  },
  {
    id: 2,
    title: 'AI Trainer & Developer',
    company: 'Scale AI',
    logo: '/images/companies/scale_icon.png',
    period: 'Aug 2024 - Sep 2025',
    location: 'United States (Remote)',
    description: [
      'Enhanced AI code assistants (Claude Code, Copilot, Codex, Gemini Code Assist) through multi-turn prompt engineering and rubric-based evaluation',
      'Designed context-engineered prompts and evaluation frameworks for AI agents performing refactoring, debugging, and documentation tasks',
      'Guided specialized LLM agents through real-world coding workflows and repository improvements, contributing to AI-assisted SDLC research',
      'Configured and Dockerized repositories for automated testing and reproducible environments with GitHub integration',
      'Prototyped rule-based, command-driven AI workflows using Cursor and MCP (Model Context Protocol) concepts',
      'Collaborated in RLHF pipeline to improve AI understanding of structured reasoning, text, and code contexts'
    ],
    descriptionJa: [
      'マルチターンプロンプトエンジニアリングとルーブリックベース評価によりAIコードアシスタント（Claude Code、Copilot、Codex、Gemini Code Assist）を改善',
      'リファクタリング、デバッグ、ドキュメンテーションタスクを実行するAIエージェント向けのコンテキストエンジニアリングプロンプトと評価フレームワークを設計',
      '実世界のコーディングワークフローとリポジトリ改善を通じて特化型LLMエージェントを指導し、AI支援SDLCリサーチに貢献',
      '自動テストと再現可能な環境のためにリポジトリを設定・Docker化し、GitHub統合を実装',
      'CursorとMCP（Model Context Protocol）概念を使用してルールベースでコマンド駆動のAIワークフローをプロトタイプ化',
      '構造化された推論、テキスト、コードコンテキストのAI理解を向上させるためRLHFパイプラインで協力'
    ],
    technologies: ['Python', 'Docker', 'GitHub', 'Cursor', 'FastAPI', 'Prompt Engineering', 'RLHF', 'Devcontainers', 'MCP', 'LLM Agents'],
    isActive: false
  },
  {
    id: 3,
    title: 'Machine Learning Engineer',
    company: 'Anyone AI',
    logo: '/images/companies/anyone_ai_logo.jpg',
    period: 'Nov 2024 - Mar 2025',
    location: 'United States (Remote)',
    description: [
      'Hands-on program with <2% acceptance rate for high-demand ML engineering projects',
      'Built LLM-based recruitment tool using LangChain and GPT-4/Gemini with RAG system, vector embeddings, and ChromaDB for intelligent job matching and cover letter generation',
      'Developed e-commerce data pipeline with ELT architecture for seasonal trend analysis and insights extraction',
      'Created Home Credit Risk model processing 350K+ transactions with supervised learning (XGBoost, LightGBM), achieving AUC ROC >0.72',
      'Built multimodal ML system integrating NLP and Computer Vision for e-commerce product classification using pre-trained models',
      'Deployed AI-powered image classifier web app with FastAPI for real-time object recognition'
    ],
    descriptionJa: [
      '高需要ML工学プロジェクト向け2%未満合格率の実践プログラム',
      'LangChainとGPT-4/Geminiを使用し、RAGシステム、ベクトル埋め込み、ChromaDBを活用した求人マッチングとカバーレター生成のためのLLMベース採用ツールを構築',
      '季節的トレンド分析とインサイト抽出のためのELTアーキテクチャによるeコマースデータパイプラインを開発',
      '35万以上のトランザクションを処理し、教師あり学習（XGBoost、LightGBM）でAUC ROC >0.72を達成したHome Creditリスクモデルを作成',
      '事前学習済みモデルを使用してNLPとComputer Visionを統合したeコマース製品分類用マルチモーダルMLシステムを構築',
      'リアルタイムオブジェクト認識のためのFastAPIを使用したAI搭載画像分類器Webアプリをデプロイ'
    ],
    technologies: ['Python', 'LangChain', 'OpenAI API', 'ChromaDB', 'FastAPI', 'Streamlit', 'TensorFlow', 'Scikit-learn', 'Pandas', 'AWS', 'Docker', 'Chainlit'],
    isActive: false
  },
  {
    id: 4,
    title: 'Development Team Member',
    company: 'Helte Co., Ltd',
    logo: '/images/companies/heltesail_logo.jpg',
    period: 'Aug 2024 - Nov 2024',
    location: 'Tokyo, Japan (Remote)',
    description: [
      'Online internship program with Tokyo-based consulting firm',
      'Contributed to UI/UX improvements resulting in 40% increase in user traffic',
      'Focused on software documentation and agile methodologies (Scrum, Kanban)',
      'Created and delivered presentations sharing insights for impactful changes'
    ],
    descriptionJa: [
      '東京拠点のコンサルティング会社でのオンラインインターンシップ',
      'ユーザートラフィック40%増加に繋がるUI/UX改善に貢献',
      'ソフトウェアドキュメンテーションとアジャイル手法（Scrum、Kanban）に注力',
      'インパクトのある変更のための洞察を共有するプレゼンテーションを作成・発表'
    ],
    technologies: ['JavaScript', 'UI/UX', 'Scrum', 'Kanban', 'Documentation'],
    isActive: false
  }
];

const Timeline = () => {
  const { language, t } = useLanguage();
  
  return (
    <section id="timeline" className="relative bg-slate-800 py-24 px-6 lg:px-8">
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
            {t.timeline.title}
          </h2>
          <p className="text-xl text-slate-400 max-w-3xl mx-auto leading-relaxed">
            {t.timeline.subtitle}
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-400 via-purple-400 to-green-400"></div>
          
          {/* Timeline items */}
          <div className="space-y-12">
            {EXPERIENCE.map((exp, index) => (
              <motion.div
                key={exp.id}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                className={`relative flex items-center ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                {/* Timeline marker */}
                <div className="absolute left-6 w-6 h-6 bg-gradient-to-br from-blue-400 to-purple-400 rounded-full border-4 border-slate-800 z-10 flex items-center justify-center">
                  {exp.isActive && (
                    <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
                  )}
                </div>

                {/* Content card */}
                <div className={`flex-1 ${index % 2 === 0 ? 'md:ml-20' : 'md:mr-20'} ml-20`}>
                  <div className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-2xl p-8 border border-slate-700 hover:border-blue-400 transition-all duration-300 hover:scale-105 shadow-lg">
                    {/* Header with Company Logo */}
                    <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between mb-4">
                      <div className="flex items-center space-x-4 mb-4 sm:mb-0">
                        {/* Company Logo */}
                        <div className="relative w-16 h-16 rounded-xl overflow-hidden border-2 border-slate-600 bg-white p-2 flex-shrink-0">
                          <Image
                            src={exp.logo}
                            alt={`${exp.company} logo`}
                            fill
                            className="object-contain"
                          />
                        </div>
                        
                        {/* Title and Company */}
                        <div>
                          <h3 className="text-2xl font-bold text-slate-100 mb-1">
                            {exp.title}
                          </h3>
                          <p className="text-lg text-blue-400 font-medium">
                            {exp.company}
                          </p>
                        </div>
                      </div>
                      
                      {/* Period and Location */}
                      <div className="text-right">
                        <p className="text-slate-300 font-medium">
                          {exp.period.replace('Present', t.timeline.present)}
                        </p>
                        <p className="text-slate-400 text-sm">
                          {exp.location}
                        </p>
                      </div>
                    </div>

                    {/* Description */}
                    <div className="mb-6">
                      <ul className="space-y-2">
                        {(language === 'ja' && exp.descriptionJa ? exp.descriptionJa : exp.description).map((item, idx) => (
                          <li key={idx} className="flex items-start">
                            <span className="w-2 h-2 bg-blue-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                            <span className="text-slate-300 leading-relaxed">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Technologies */}
                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 bg-blue-500/10 text-blue-400 rounded-full text-sm font-medium border border-blue-500/20"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
      
      {/* Diagonal divider for next section */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden">
        <svg className="relative block w-full h-20" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M0,0 L600,120 L1200,0 L1200,120 L0,120 Z" fill="#1e293b" />
        </svg>
      </div>
    </section>
  );
};

export default Timeline; 