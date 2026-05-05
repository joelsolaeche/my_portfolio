'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { useLanguage } from '@/contexts/LanguageContext';
import SectionHeader from '@/components/ui/SectionHeader';

const EXPERIENCE = [
  {
    id: 0,
    title: 'AI Engineer',
    company: 'Taller Technologies',
    companyColor: '#ef4444',
    logo: '/images/companies/taller_technologies_logo.jpg',
    period: 'Mar 2025 - Present',
    location: 'United States (Remote)',
    employmentType: 'Full-time',
    description: [
      'Contributing to Chiron, an agentic operating system platform that orchestrates multiple AI engineering agents for code analysis, document processing, and project setup',
      'Concurrently building an AI-native e-learning platform with the team — cohort-based courses with Mux video streaming, interactive quizzes, and an Anthropic-powered AI tutor on Next.js 15 + Supabase (Auth, Postgres, RLS)',
      'Diagnosed and resolved data persistence bugs in the local dev environment — fixed Docker Compose to bind-mount Firebase Firestore and Storage emulator data across container restarts',
      'Resolved unintentional spawning of multiple agent instances that caused duplicate operations and state conflicts',
      'Collaborated on DevOps setup scripts (setup.sh, rebuild.sh) for streamlined onboarding, service rebuilding, and environment variable injection',
      'Stabilized the Firebase emulator container entrypoint to ensure correct startup sequencing before dependent services come online',
      'Tested end-to-end flows across Manager and Engineers Next.js dashboards and validated agent task assignment and Firestore output persistence',
      'Contributed to naming and structural refactors following Clean Architecture conventions (domain/, application/, infrastructure/)',
      'Investigated and resolved cross-platform Docker volume and file permission differences between macOS and Windows'
    ],
    descriptionJa: [
      'Chironというコード分析、ドキュメント処理、プロジェクトセットアップのための複数のAIエンジニアリングエージェントを調整するエージェント型OSプラットフォームの開発に貢献',
      'チームメンバーとAIネイティブEラーニングプラットフォームを並行開発—Mux動画ストリーミング、インタラクティブクイズ、AnthropicベースのAIチューターを搭載したコホート型コースをNext.js 15 + Supabase（Auth、Postgres、RLS）で構築',
      'ローカル開発環境のデータ永続化バグを診断・修正：Firebase FirestoreとStorageエミュレータのデータをコンテナ再起動後も保持するようDocker Composeを修正',
      '重複操作や状態競合を引き起こす意図しない複数エージェントインスタンスの生成問題を解決',
      'スムーズなオンボーディングとサービス再構築のためのDevOpsセットアップスクリプト（setup.sh、rebuild.sh）の整備に協力',
      '依存サービスが起動する前に正しい起動シーケンスを確保するFirebaseエミュレータコンテナのエントリポイントを安定化',
      'ManagerおよびEngineers Next.jsダッシュボードのエンドツーエンドフローをテストし、エージェントのタスク割り当てとFirestore出力永続化を検証',
      'クリーンアーキテクチャ規約（domain/、application/、infrastructure/）に従った命名・構造リファクタリングに貢献',
      'macOSとWindows間のDockerボリュームとファイルパーミッションの差異を調査・解決'
    ],
    technologies: ['TypeScript', 'Next.js', 'Node.js', 'Supabase', 'Mux', 'Vercel AI SDK', 'Anthropic', 'Docker', 'Firebase', 'Claude API', 'Pinecone', 'Neo4j', 'InversifyJS'],
    isActive: true
  },
  {
    id: -1,
    title: 'AI Trainer',
    company: 'LinkedIn',
    companyColor: '#0A66C2',
    logo: '/images/companies/LinkedIn_icon.svg.png',
    period: 'Apr 2025 - Present',
    location: 'United States (Remote)',
    employmentType: 'Part-time · Contract',
    description: [
      'Wrote ground-truth code in real open-source repositories to evaluate AI code completion tools, then studied and annotated AI agent behavior across TypeScript, JavaScript, and other languages',
      'Compared leading AI coding assistants on suggestion quality, response latency, and contextual understanding using a defined scoring rubric',
      'Analyzed AI behavior across diverse task categories: symbol renaming, bug detection, smart rewrites, multi-file refactors, import resolution, and pattern-based completions',
      'Documented raw AI outputs verbatim and provided scored comparative analysis, identifying strengths, failure modes, and edge cases in agent reasoning',
      'Maintained annotation consistency across dozens of tasks to produce structured data contributing to next-generation AI developer tools'
    ],
    descriptionJa: [
      '実際のオープンソースリポジトリでグラウンドトゥルースコードを記述してAIコード補完ツールを評価し、TypeScript、JavaScript等の複数言語にわたるAIエージェントの動作を分析・アノテーション',
      '定義されたスコアリングルーブリックを使用して、提案品質、応答レイテンシー、コードベースの文脈理解でAIコーディングアシスタントを比較評価',
      'シンボルリネーム、バグ検出、スマートリライト、マルチファイルリファクタリング、インポート解決、パターンベース補完など多様なタスクカテゴリにわたるAIの動作を分析',
      'AIの生出力を逐語的に記録し、エージェント推論の強み、失敗モード、エッジケースを特定するスコア付き比較分析を提供',
      '次世代AIデベロッパーツールの改善に貢献する構造化アノテーションデータを生成するため、数十のタスクにわたって一貫した評価基準を維持'
    ],
    technologies: ['TypeScript', 'JavaScript', 'VS Code', 'Code Review', 'AI Evaluation', 'Data Annotation', 'Static Code Analysis'],
    isActive: true
  },
  {
    id: 1,
    title: 'AI Engineer',
    company: 'Algolabs AI',
    companyColor: '#22d3ee',
    logo: '/images/companies/algolabs-icon.png',
    period: 'Oct 2025 - March 2026',
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
    isActive: false
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
    <section id="timeline" className="relative py-24 px-6 lg:px-8 section-gradient-overlay" style={{ backgroundColor: '#0c1322' }}>
      <div className="absolute top-0 right-1/4 w-80 h-80 rounded-full blur-3xl pointer-events-none" style={{ background: 'rgba(21,93,252,0.05)' }} />

      <div className="max-w-5xl mx-auto">
        <SectionHeader
          number="02"
          title={t.timeline.title}
          subtitle={t.timeline.subtitle}
        />

        <div className="relative">
          {/* Animated timeline line */}
          <motion.div
            initial={{ scaleY: 0 }}
            whileInView={{ scaleY: 1 }}
            transition={{ duration: 1.2, ease: 'easeInOut' }}
            viewport={{ once: true }}
            style={{ originY: 0 }}
            className="absolute left-[18px] top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 via-purple-500 to-cyan-500 rounded-full"
          />

          <div className="space-y-8">
            {EXPERIENCE.map((exp, index) => (
              <motion.div
                key={exp.id}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.55, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="relative flex items-start"
              >
                {/* Timeline dot */}
                <div className="absolute left-2 w-5 h-5 bg-zinc-950 rounded-full border-2 border-blue-400 z-10 flex items-center justify-center">
                  {exp.isActive && (
                    <motion.div
                      animate={{ scale: [1, 1.4, 1], opacity: [1, 0.5, 1] }}
                      transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
                      className="w-2 h-2 bg-blue-400 rounded-full"
                    />
                  )}
                </div>

                {/* Card with left accent border */}
                <div className="flex-1 ml-14">
                  <div
                    className={`relative rounded-xl p-6 border border-white/[0.07] hover:border-blue-500/20 transition-all duration-300 card-glow overflow-hidden ${
                      exp.isActive ? 'shadow-[0_0_30px_rgba(21,93,252,0.08)]' : ''
                    }`}
                    style={{ backgroundColor: 'rgba(12, 19, 34, 0.85)' }}
                  >
                    {/* Left accent stripe */}
                    <div
                      className="absolute left-0 top-0 bottom-0 w-0.5 rounded-l-xl"
                      style={{ backgroundColor: exp.companyColor, opacity: 0.7 }}
                    />

                    {/* Header */}
                    <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between mb-4">
                      <div className="flex items-center space-x-3 mb-3 sm:mb-0">
                        <div className="relative w-11 h-11 rounded-lg overflow-hidden border border-zinc-600/50 bg-white p-1 flex-shrink-0">
                          <Image
                            src={exp.logo}
                            alt={`${exp.company} logo`}
                            fill
                            className="object-contain"
                            loading={index === 0 ? undefined : 'lazy'}
                          />
                        </div>
                        <div>
                          <h3 className="text-base font-semibold text-slate-100 mb-0.5">{exp.title}</h3>
                          <p className="text-sm font-medium" style={{ color: exp.companyColor }}>
                            {exp.company}
                          </p>
                        </div>
                      </div>
                      <div className="text-right flex-shrink-0">
                        <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-zinc-800/80 border border-zinc-700/50 mb-1">
                          {exp.isActive && <div className="w-1.5 h-1.5 bg-green-400 rounded-full animate-pulse" />}
                          <p className="text-slate-300 text-xs font-medium">
                            {exp.period.replace('Present', t.timeline.present)}
                          </p>
                        </div>
                        {'employmentType' in exp && exp.employmentType && (
                          <p className="text-zinc-500 text-xs mb-0.5">{exp.employmentType as string}</p>
                        )}
                        <p className="text-slate-500 text-xs">{exp.location}</p>
                      </div>
                    </div>

                    {/* Description */}
                    <div className="mb-4">
                      <ul className="space-y-1.5">
                        {(language === 'ja' && exp.descriptionJa ? exp.descriptionJa : exp.description).map((item, idx) => (
                          <li key={idx} className="flex items-start">
                            <span className="w-1 h-1 bg-zinc-500 rounded-full mt-2.5 mr-2.5 flex-shrink-0" />
                            <span className="text-slate-400 text-sm leading-relaxed">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Tech badges */}
                    <div className="flex flex-wrap gap-1.5">
                      {exp.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-2 py-0.5 bg-gradient-to-r from-zinc-800 to-zinc-800/80 text-slate-400 rounded text-xs font-medium border border-zinc-700/50"
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

      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-zinc-700/50 to-transparent" />
    </section>
  );
};

export default Timeline;
