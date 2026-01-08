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
    companyColor: '#22d3ee',
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
    companyColor: '#c084fc',
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
    title: 'AI Engineer',
    company: 'Anyone AI',
    companyColor: '#60a5fa',
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
    companyColor: '#4ade80',
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
  const { t, language } = useLanguage();
  
  return (
    <section id="timeline" className="relative bg-slate-800/50 py-24 px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-100 mb-4 tracking-tight">
            {t.timeline.title}
          </h2>
          <p className="text-base text-slate-400 max-w-2xl mx-auto leading-relaxed">
            {t.timeline.subtitle}
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-[18px] top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 via-purple-500 to-cyan-500 rounded-full"></div>
          
          {/* Timeline items */}
          <div className="space-y-8">
            {EXPERIENCE.map((exp, index) => (
              <motion.div
                key={exp.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="relative flex items-start"
              >
                {/* Timeline marker */}
                <div className="absolute left-2 w-5 h-5 bg-slate-900 rounded-full border-2 border-blue-400 z-10 flex items-center justify-center">
                  {exp.isActive && (
                    <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse"></div>
                  )}
                </div>

                {/* Content card */}
                <div className="flex-1 ml-14">
                  <div className="bg-slate-900/80 rounded-xl p-6 border border-slate-700/50 hover:border-slate-600 transition-colors duration-200">
                    {/* Header with Company Logo */}
                    <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between mb-4">
                      <div className="flex items-center space-x-3 mb-3 sm:mb-0">
                        {/* Company Logo */}
                        <div className="relative w-12 h-12 rounded-lg overflow-hidden border border-slate-600 bg-white p-1.5 flex-shrink-0">
                          <Image
                            src={exp.logo}
                            alt={`${exp.company} logo`}
                            fill
                            className="object-contain"
                          />
                        </div>
                        
                        {/* Title and Company */}
                        <div>
                          <h3 className="text-lg font-semibold text-slate-100 mb-0.5">
                            {exp.title}
                          </h3>
                          <p 
                            className="text-sm font-medium"
                            style={{ color: exp.companyColor }}
                          >
                            {exp.company}
                          </p>
                        </div>
                      </div>
                      
                      {/* Period and Location */}
                      <div className="text-right">
                        <p className="text-slate-300 text-sm font-medium">
                          {exp.period.replace('Present', t.timeline.present)}
                        </p>
                        <p className="text-slate-500 text-xs">
                          {exp.location}
                        </p>
                      </div>
                    </div>

                    {/* Description */}
                    <div className="mb-4">
                      <ul className="space-y-1.5">
                        {(language === 'ja' && exp.descriptionJa ? exp.descriptionJa : exp.description).map((item, idx) => (
                          <li key={idx} className="flex items-start">
                            <span className="w-1.5 h-1.5 bg-slate-500 rounded-full mt-2 mr-2 flex-shrink-0"></span>
                            <span className="text-slate-400 text-sm leading-relaxed">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Technologies */}
                    <div className="flex flex-wrap gap-1.5">
                      {exp.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-2 py-0.5 bg-slate-800 text-slate-400 rounded text-xs font-medium border border-slate-700/50"
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
      
      {/* Clean divider */}
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-slate-700 to-transparent"></div>
    </section>
  );
};

export default Timeline; 