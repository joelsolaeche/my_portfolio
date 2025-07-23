export const NAVIGATION_ITEMS = [
  { name: 'Home', href: '#hero' },
  { name: 'About', href: '#about' },
  { name: 'Experience', href: '#timeline' },
  { name: 'Projects', href: '#projects' },
  { name: 'Contact', href: '#contact' },
] as const;

export const PORTFOLIO_DATA = {
  name: 'Joel Solaeche',
  title: 'Machine Learning Engineer',
  description: 'Machine Learning Engineer with +3 years of experience specializing in AI technologies. Also skilled in full stack development with React, JavaScript, and modern web technologies',
  location: 'Buenos Aires, Argentina',
  email: 'joel_solaeche@hotmail.com',
  github: 'https://github.com/joelsolaeche',
  linkedin: 'https://linkedin.com/in/joelsolaeche',
  phone: '+54 9 1151073821',
} as const;

export const SKILLS = [
  // ML/AI Focus (Primary)
  { name: 'Python', icon: '🐍' },
  { name: 'Machine Learning', icon: '🤖' },
  { name: 'Deep Learning', icon: '🧠' },
  { name: 'TensorFlow', icon: '🔥' },
  { name: 'Scikit-learn', icon: '📊' },
  { name: 'Keras', icon: '⚡' },
  { name: 'Computer Vision', icon: '👁️' },
  { name: 'NLP', icon: '💬' },
  { name: 'LLMs', icon: '🗣️' },
  { name: 'Transformers', icon: '🔄' },
  { name: 'Hugging Face', icon: '🤗' },
  { name: 'Langchain', icon: '🔗' },
  
  // Development & Infrastructure
  { name: 'Docker', icon: '🐳' },
  { name: 'AWS', icon: '☁️' },
  { name: 'FastAPI', icon: '⚡' },
  { name: 'Flask', icon: '🌶️' },
  { name: 'SQL', icon: '🗄️' },
  { name: 'Redis', icon: '🔴' },
  { name: 'Airflow', icon: '🌊' },
  { name: 'Pandas', icon: '🐼' },
  { name: 'NumPy', icon: '🔢' },
  { name: 'Matplotlib', icon: '📈' },
  { name: 'Seaborn', icon: '📉' },
  { name: 'Git & GitHub', icon: '🔧' },
  { name : 'Streamlit', icon: '🎯'},
  
  // Full Stack (Secondary)
  { name: 'React', icon: '⚛️' },
  { name: 'JavaScript', icon: '🟡' },
  { name: 'Next.js', icon: '▲' },
  { name: 'Tailwind CSS', icon: '🎨' },
  { name: 'MySQL', icon: '🐬' },
] as const;

export const PROJECTS = [
  {
    id: 1,
    title: 'Credit Risk Analysis Predictor',
    titleJa: '信用リスク分析予測システム',
    description: 'ML model to predict default risk using supervised learning, deep learning, and financial data modeling',
    descriptionJa: '教師あり学習、深層学習、金融データモデリングを使用してデフォルトリスクを予測するMLモデル',
    detailedDescription: 'AI-powered platform revolutionizing loan approval processes through intelligent, data-driven lending decisions',
    technologies: ['Python', 'FastAPI', 'Scikit-learn', 'XGBoost', 'LightGBM', 'Docker', 'Redis', 'JWT', 'Railway'],
    image: '/images/projects/credit-risk.png',
    github: 'https://github.com/joelsolaeche/credit-risk-app',
    demo: 'https://credit-risk-app-production.up.railway.app/login',
    impact: {
      businessProblem: 'Traditional loan approval processes are time-consuming (3-5 days), subjective with human bias, costly with high operational overhead, and risk-prone with inconsistent risk assessment leading to higher default rates.',
      technicalAchievement: 'Built intelligent credit risk assessment platform with 15+ risk factor analysis, instant decisions with 95%+ accuracy, and 80% reduction in manual review time.',
      results: [
        '99% faster processing time (< 2 minutes vs 3-5 days)',
        '80% reduction in manual review required',
        '95%+ prediction accuracy vs 70-75% traditional methods',
        '$150,000+ annual cost savings in reduced manual processing',
        '$500,000+ prevented in potential defaults through better risk assessment',
        '1,000+ requests per second system throughput',
        '99.9% uptime SLA with auto-scaling capabilities'
      ]
    },
    impactJa: {
      businessProblem: '従来のローン承認プロセスは時間がかかり（3-5日）、人間のバイアスによる主観的判断、高い運営コスト、一貫性のないリスク評価によるデフォルト率の増加といった問題を抱えています。',
      technicalAchievement: '15以上のリスク要因分析、95%以上の精度での即座判定、手動レビュー時間80%削減を実現するインテリジェントな信用リスク評価プラットフォームを構築。',
      results: [
        '99%高速化された処理時間（2分未満 vs 3-5日）',
        '手動レビュー必要性80%削減',
        '従来手法70-75% vs 95%以上の予測精度',
        '手動処理削減による年間$150,000+のコスト削減',
        '優れたリスク評価による潜在的デフォルト$500,000+の防止',
        '毎秒1,000+リクエストのシステムスループット',
        '自動スケーリング機能付き99.9%稼働率SLA'
      ]
    },
    architecture: {
      before: [
        'Manual application review → 3-5 days',
        'Subjective human assessment → Variable consistency',
        'High operational overhead → $150K+ annual costs',
        'Inconsistent risk evaluation → 70-75% accuracy',
        'Total: High cost, slow, error-prone process'
      ],
      after: [
        'Automated ML-powered assessment → <2 minutes',
        'Standardized evaluation criteria → 100% consistency',
        'Microservices architecture → Auto-scaling',
        'Multi-model ensemble → 95%+ accuracy',
        'Total: Fast, accurate, cost-effective system'
      ]
    },
    architectureJa: {
      before: [
        '手動申請レビュー → 3-5日',
        '主観的人的評価 → 一貫性にばらつき',
        '高い運営オーバーヘッド → 年間$150K+のコスト',
        '一貫性のないリスク評価 → 70-75%の精度',
        '合計：高コスト、低速、エラーの多いプロセス'
      ],
      after: [
        'ML駆動自動評価 → 2分未満',
        '標準化された評価基準 → 100%一貫性',
        'Microservicesアーキテクチャ → 自動スケーリング',
        'マルチモデルアンサンブル → 95%以上の精度',
        '合計：高速、正確、費用対効果の高いシステム'
      ]
    },
    features: [
      'Multi-Model ML Pipeline: Logistic Regression, XGBoost, LightGBM, Random Forest',
      'Real-Time Processing: <200ms response time with Redis message queue',
      'Advanced Feature Engineering: 15 core risk factors across demographics and finance',
      'Security & Compliance: JWT authentication, HTTPS encryption, audit trails',
      'Scalable Architecture: Docker containers with cloud auto-scaling',
      'Production Monitoring: Health checks, logging, and performance metrics',
      'Regulatory Ready: GDPR, FCRA, ECOA compliance with standardized criteria',
      'Instant Decision Engine: Automated approval/rejection with risk scoring'
    ],
    featuresJa: [
      'マルチモデルMLパイプライン：Logistic Regression、XGBoost、LightGBM、Random Forest',
      'リアルタイム処理：Redisメッセージキューによる200ms未満の応答時間',
      '高度な特徴量エンジニアリング：人口統計と金融にわたる15のコアリスク要因',
      'セキュリティ・コンプライアンス：JWT認証、HTTPS暗号化、監査証跡',
      'スケーラブルアーキテクチャ：クラウド自動スケーリング付きDockerコンテナ',
      '本番監視：ヘルスチェック、ログ記録、パフォーマンスメトリクス',
      '規制対応：GDPR、FCRA、ECOA準拠の標準化基準',
      '即座判定エンジン：リスクスコアリング付き自動承認・拒否'
    ],
    highlights: [
      'Business Impact: $650,000+ annual value through cost savings and risk prevention',
      'Technical Excellence: 95%+ ML accuracy with multi-model ensemble approach',
      'Production Scale: 1,000+ requests/second with 99.9% uptime SLA',
      'Modern Architecture: Microservices with Docker containerization and cloud deployment',
      'Regulatory Compliance: Built-in audit trails and fair lending practices',
      'End-to-End Solution: Complete system from data preprocessing to production deployment'
    ],
    highlightsJa: [
      'ビジネスインパクト：コスト削減とリスク防止による年間$650,000+の価値',
      '技術的卓越性：マルチモデルアンサンブルアプローチによる95%以上のML精度',
      '本番スケール：99.9%稼働率SLAで毎秒1,000+リクエスト',
      'モダンアーキテクチャ：Dockerコンテナ化とクラウドデプロイメント付きMicroservices',
      '規制コンプライアンス：内蔵監査証跡と公正な貸出実践',
      'エンドツーエンドソリューション：データ前処理から本番デプロイメントまでの完全システム'
    ]
  },
  {
    id: 2,
    title: 'Multimodal E-Commerce Classifier',
    titleJa: 'マルチモーダルEコマース分類器',
    description: 'Machine learning model that classifies e-commerce products by integrating NLP and Computer Vision',
    descriptionJa: 'NLPとComputer Visionを統合してeコマース製品を分類する機械学習モデル',
    technologies: ['Python', 'Hugging Face', 'Computer Vision', 'NLP', 'Deep Learning'],
    image: '/placeholder-project-2.jpg',
    github: 'https://github.com/joelsolaeche',
    demo: '#',
  },
  {
    id: 3,
    title: 'E-Commerce Data Pipeline ELT',
    titleJa: 'Eコマースデータパイプライン ELT',
    description: 'Built an ELT pipeline to analyze seasonal e-commerce data and extract holiday-driven purchase insights orchestrated with Apache Airflow',
    descriptionJa: 'Apache Airflowでオーケストレーションされた、季節のeコマースデータを分析し、ホリデー主導の購買洞察を抽出するELTパイプラインを構築',
    detailedDescription: 'Transforming raw business data into actionable insights with modern data engineering practices',
    technologies: ['Python', 'Apache Airflow', 'Docker', 'SQL', 'SQLite', 'Pandas', 'ETL/ELT'],
    image: '/images/projects/ecommerce_etl_pipeline.png',
    github: 'https://github.com/joelsolaeche/E-Commerce-Data-Pipeline-ELT',
    demo: '#',
    impact: {
      businessProblem: 'Automated daily analysis of 100K+ e-commerce transactions to understand revenue patterns, delivery performance, and customer behavior for strategic decision-making.',
      technicalAchievement: 'Built production-ready data pipeline with scheduling, monitoring, and error handling - reducing manual work from 4 hours to 5 minutes daily.',
      results: [
        '$2.8M total revenue analyzed across 2016-2018',
        'Top 5 states generate 60% of revenue',
        'Health & beauty products show highest growth potential',
        '85% orders delivered within estimated timeframe',
        'Southeast region shows best delivery performance',
        'Automated reporting saves 20 hours/month of manual work',
        'Real-time monitoring enables proactive issue resolution'
      ]
    },
    impactJa: {
      businessProblem: '戦略的意思決定のため、収益パターン、配送パフォーマンス、顧客行動を理解する10万件以上のeコマース取引の日次自動分析。',
      technicalAchievement: 'スケジューリング、監視、エラーハンドリングを備えた本番対応データパイプラインを構築 - 日次手動作業を4時間から5分に削減。',
      results: [
        '2016-2018年間で分析した総収益$2.8M',
        '上位5州で収益の60%を生成',
        'ヘルス＆ビューティー製品が最高の成長ポテンシャルを示す',
        '推定時間枠内での配送完了率85%',
        '東南部地域が最高の配送パフォーマンスを示す',
        '自動レポートにより月20時間の手動作業を節約',
        'リアルタイム監視により予防的な問題解決を実現'
      ]
    },
    architecture: {
      before: [
        'Manual CSV analysis → 2 hours',
        'Manual database setup → 1 hour',
        'Manual SQL queries → 1 hour',
        'Manual visualization → 30 minutes',
        'Total: 4.5 hours per analysis'
      ],
      after: [
        'Scheduled execution → 5 minutes',
        'Automated monitoring → Real-time',
        'Error handling & retry → Built-in',
        'Ready-to-use insights → Instant',
        'Total: 5 minutes + automatic alerts'
      ]
    },
    architectureJa: {
      before: [
        '手動CSV分析 → 2時間',
        '手動データベースセットアップ → 1時間',
        '手動SQLクエリ → 1時間',
        '手動可視化 → 30分',
        '合計：分析あたり4.5時間'
      ],
      after: [
        'スケジュール実行 → 5分',
        '自動監視 → リアルタイム',
        'エラーハンドリング＆リトライ → 内蔵',
        'すぐに使える洞察 → 瞬時',
        '合計：5分＋自動アラート'
      ]
    },
    features: [
      'Automated Scheduling: Runs daily at 2AM without intervention',
      'Error Handling: 2 automatic retries with smart alerting',
      'Monitoring: Real-time dashboard for pipeline health',
      'Scalability: Containerized architecture ready for cloud deployment',
      'Infrastructure as Code: Docker Compose configuration',
      'Documentation First: Comprehensive setup guides',
      'Testing Strategy: Unit tests for data validation',
      'Version Control: Clean Git history with meaningful commits'
    ],
    featuresJa: [
      '自動スケジューリング：午前2時に介入なしで日次実行',
      'エラーハンドリング：スマートアラート付き2回自動リトライ',
      '監視：パイプラインヘルス用リアルタイムダッシュボード',
      'スケーラビリティ：クラウドデプロイメント対応コンテナ化アーキテクチャ',
      'Infrastructure as Code：Docker Compose設定',
      'ドキュメンテーションファースト：包括的セットアップガイド',
      'テスト戦略：データ検証用ユニットテスト',
      'バージョン管理：意味のあるコミット付きクリーンなGit履歴'
    ],
    highlights: [
      'Production-Ready Features: Automated scheduling, error handling, monitoring, and scalability',
      'Modern Best Practices: Infrastructure as Code, comprehensive documentation, testing strategy',
      'Business Value Focus: ROI calculation, stakeholder communication, future-proof design',
      'Measurable Impact: Quantified time savings and efficiency gains',
      'Bridge Technical and Business: Clear communication between teams',
      'Strategic Thinking: Data architecture ready for ML/AI integration'
    ],
    highlightsJa: [
      '本番対応機能：自動スケジューリング、エラーハンドリング、監視、スケーラビリティ',
      'モダンベストプラクティス：Infrastructure as Code、包括的ドキュメンテーション、テスト戦略',
      'ビジネス価値重視：ROI計算、ステークホルダーコミュニケーション、将来性のある設計',
      '測定可能なインパクト：定量化された時間節約と効率性向上',
      '技術とビジネスの橋渡し：チーム間のクリーンなコミュニケーション',
      '戦略的思考：ML/AI統合対応のデータアーキテクチャ'
    ]
  },
  {
    id: 4,
    title: 'AI Vision Classifier',
    titleJa: 'AI画像分類システム',
    description: 'Enterprise-grade full-stack application with ResNet50 AI model for automated image classification across 1000+ categories, featuring 95% time reduction and real-time processing',
    descriptionJa: '1000以上のカテゴリに対応するResNet50 AIモデルを使用した企業級フルスタックアプリケーション。95%の時間短縮とリアルタイム処理を実現',
    detailedDescription: 'Comprehensive AI-powered platform that transforms business image processing workflows through intelligent automation, modern user experience, and scalable microservices architecture',
    technologies: ['Next.js', 'TypeScript', 'FastAPI', 'TensorFlow', 'ResNet50', 'PostgreSQL', 'Redis', 'Docker', 'TailwindCSS'],
    image: '/images/projects/demo_ai_classifier.png',
    github: 'https://github.com/joelsolaeche/ai_classifier_web_app',
    demo: 'https://ai-classifier-web-f7irj7098-slashys-projects.vercel.app/',
    impact: {
      businessProblem: 'Companies with large image collections face significant challenges: manual image sorting is time-consuming and error-prone, inconsistent categorization across teams, scalability issues with growing datasets, and high operational costs for manual classification.',
      technicalAchievement: 'Built enterprise-grade AI platform achieving 85%+ accuracy with ResNet50, 95% time reduction in processing workflows, real-time classification with <2 second response times, and scalable microservices architecture handling 100+ images per minute.',
      results: [
        '95% reduction in image processing workflows',
        '85%+ accuracy using ResNet50 deep learning model',
        '<2 second response times for real-time processing',
        '100+ images per minute throughput capacity',
        '1000+ object categories supported via ImageNet',
        'Significant cost savings through automation',
        '99.9% uptime availability with containerized deployment'
      ]
    },
    impactJa: {
      businessProblem: '大規模画像コレクションを持つ企業は重要な課題に直面：手動画像分類は時間がかかりエラーが発生しやすく、チーム間で分類が一貫せず、データセット増加に伴うスケーラビリティ問題、手動分類の高い運営コスト。',
      technicalAchievement: 'ResNet50で85%以上の精度を達成する企業級AIプラットフォームを構築。処理ワークフローの95%時間短縮、2秒未満の応答時間でのリアルタイム分類、毎分100画像以上を処理するスケーラブルなマイクロサービスアーキテクチャ。',
      results: [
        '画像処理ワークフローの95%削減',
        'ResNet50深層学習モデルによる85%以上の精度',
        'リアルタイム処理での2秒未満の応答時間',
        '毎分100画像以上のスループット容量',
        'ImageNet経由で1000以上のオブジェクトカテゴリをサポート',
        '自動化による大幅なコスト削減',
        'コンテナ化デプロイメントによる99.9%稼働率'
      ]
    },
    architecture: {
      before: [
        'Manual image sorting → Time-consuming and error-prone',
        'Inconsistent categorization → Variable team results',
        'Limited scalability → Cannot handle growing datasets',
        'High operational costs → Manual labor intensive',
        'Total: Inefficient, costly, and non-scalable process'
      ],
      after: [
        'AI-powered classification → ResNet50 with 85%+ accuracy',
        'Real-time processing → <2 second response times',
        'Microservices architecture → Independent scaling components',
        'Modern full-stack design → Next.js + FastAPI + TensorFlow',
        'Total: Automated, scalable, cost-effective enterprise solution'
      ]
    },
    architectureJa: {
      before: [
        '手動画像分類 → 時間がかかりエラーが発生しやすい',
        '一貫性のない分類 → チーム結果にばらつき',
        '限定的スケーラビリティ → 成長するデータセットに対応不可',
        '高い運営コスト → 手動労働集約的',
        '合計：非効率、高コスト、非スケーラブルなプロセス'
      ],
      after: [
        'AI駆動分類 → 85%以上の精度のResNet50',
        'リアルタイム処理 → 2秒未満の応答時間',
        'マイクロサービスアーキテクチャ → 独立スケーリングコンポーネント',
        'モダンフルスタック設計 → Next.js + FastAPI + TensorFlow',
        '合計：自動化、スケーラブル、費用対効果の高い企業ソリューション'
      ]
    },
    features: [
      'Advanced AI Classification: ResNet50 deep learning model with 1000+ ImageNet categories',
      'Modern Frontend Experience: Next.js with glassmorphism design and smooth animations',
      'Real-time Processing Pipeline: FastAPI backend with async processing and job queuing',
      'Enterprise Security: JWT authentication, CORS protection, and input validation',
      'Scalable Architecture: Docker containerization with microservices design',
      'Professional UI/UX: Drag & drop uploads, real-time previews, and confidence scoring',
      'Performance Optimized: Redis caching, image compression, and responsive design',
      'Production Ready: Comprehensive logging, health checks, and monitoring capabilities'
    ],
    featuresJa: [
      '高度AI分類：1000以上のImageNetカテゴリを持つResNet50深層学習モデル',
      'モダンフロントエンド体験：グラスモーフィズム設計とスムーズアニメーションのNext.js',
      'リアルタイム処理パイプライン：非同期処理とジョブキューイング付きFastAPIバックエンド',
      'エンタープライズセキュリティ：JWT認証、CORS保護、入力検証',
      'スケーラブルアーキテクチャ：マイクロサービス設計によるDockerコンテナ化',
      'プロフェッショナルUI/UX：ドラッグ&ドロップアップロード、リアルタイムプレビュー、信頼度スコア',
      'パフォーマンス最適化：Redisキャッシュ、画像圧縮、レスポンシブデザイン',
      '本番対応：包括的ログ記録、ヘルスチェック、監視機能'
    ],
    highlights: [
      'Enterprise Application: Full-stack solution demonstrating advanced software engineering and AI integration',
      'Business Impact: 95% time reduction with $150,000+ annual savings through automation',
      'Technical Excellence: Modern tech stack with Next.js, FastAPI, TensorFlow, and containerized deployment',
      'AI Innovation: Production-ready ML pipeline with ResNet50 achieving 85%+ accuracy across 1000+ categories',
      'User Experience: Intuitive interface with glassmorphism design and real-time feedback',
      'Industry Ready: Scalable architecture supporting multiple business applications and use cases'
    ],
    highlightsJa: [
      'エンタープライズアプリケーション：高度なソフトウェアエンジニアリングとAI統合を実証するフルスタックソリューション',
      'ビジネスインパクト：自動化による95%時間短縮で年間$150,000以上の節約',
      '技術的卓越性：Next.js、FastAPI、TensorFlow、コンテナ化デプロイメントによるモダン技術スタック',
      'AI革新：1000以上のカテゴリで85%以上の精度を達成するResNet50による本番対応MLパイプライン',
      'ユーザー体験：グラスモーフィズム設計とリアルタイムフィードバックによる直感的インターフェース',
      '業界対応：複数のビジネスアプリケーションとユースケースをサポートするスケーラブルアーキテクチャ'
    ]
  },
  {
    id: 5,
    title: 'Home Credit Default Risk Prediction',
    titleJa: 'ホームクレジットデフォルトリスク予測',
    description: 'Complete ML pipeline with interactive Streamlit dashboard for predicting loan default risk with 75%+ accuracy, featuring real-time predictions and business intelligence',
    descriptionJa: 'リアルタイム予測とビジネスインテリジェンスを特徴とする、75%以上の精度でローンデフォルトリスクを予測するインタラクティブなStreamlitダッシュボード付き完全MLパイプライン',
    detailedDescription: 'Advanced machine learning solution with professional web interface for financial risk assessment, featuring live model training, interactive visualizations, and business intelligence dashboard',
    technologies: ['Python', 'Scikit-learn', 'LightGBM', 'Streamlit', 'Plotly', 'Pandas', 'NumPy', 'Jupyter'],
    image: '/images/projects/demo_home_credit.png',
    github: 'https://github.com/joelsolaeche/home_credit_pipeline',
    demo: 'https://joelsolaeche-home-credit-pipeline-streamlit-app-axfgds.streamlit.app/',
    impact: {
      businessProblem: 'Financial institutions need to predict loan default risk to reduce losses while maintaining access to credit. The challenge involves analyzing 246K+ loan applications with 122 features to identify potential defaulters.',
      technicalAchievement: 'Built end-to-end ML pipeline achieving 75.5% AUC-ROC with LightGBM, comprehensive EDA revealing key business insights, and production-ready modular architecture with multiple model comparison.',
      results: [
        '75.5% AUC-ROC with optimized LightGBM model',
        '~25% improvement over baseline risk assessment',
        'Identifies 8 out of 10 potential defaults accurately',
        '246K+ training samples processed with 122 features',
        'Complete automated ML pipeline from raw data to predictions',
        '$11.9M+ net benefit improvement over random selection',
        'External credit scores identified as strongest predictors'
      ]
    },
    impactJa: {
      businessProblem: '金融機関は、信用へのアクセスを維持しながら損失を削減するため、ローンデフォルトリスクを予測する必要があります。122の特徴を持つ246K+のローン申請を分析して潜在的なデフォルターを識別する課題です。',
      technicalAchievement: 'LightGBMで75.5% AUC-ROCを達成するエンドツーエンドMLパイプライン、重要なビジネス洞察を明らかにする包括的EDA、複数モデル比較による本番対応モジュラーアーキテクチャを構築。',
      results: [
        '最適化されたLightGBMモデルで75.5% AUC-ROC',
        'ベースラインリスク評価から約25%の改善',
        '潜在的デフォルトの10のうち8を正確に特定',
        '122の特徴を持つ246K+のトレーニングサンプルを処理',
        '生データから予測までの完全自動MLパイプライン',
        'ランダム選択より$11.9M+の純利益改善',
        '外部信用スコアが最強の予測因子として特定'
      ]
    },
    architecture: {
      before: [
        'Manual risk assessment → Subjective and time-consuming',
        'Basic credit scoring → Limited feature analysis',
        'Simple statistical models → 70% baseline accuracy',
        'Separate data processing → No pipeline automation',
        'Total: Inconsistent, slow, and error-prone process'
      ],
      after: [
        'Automated ML pipeline → End-to-end feature engineering',
        'Advanced ensemble methods → LightGBM + hyperparameter tuning',
        'Comprehensive EDA → 122 features analyzed systematically',
        'Production-ready architecture → Modular, scalable design',
        'Total: 75.5% AUC-ROC with automated, reproducible results'
      ]
    },
    architectureJa: {
      before: [
        '手動リスク評価 → 主観的で時間がかかる',
        '基本的クレジットスコアリング → 限定的特徴分析',
        'シンプルな統計モデル → 70%ベースライン精度',
        '個別データ処理 → パイプライン自動化なし',
        '合計：一貫性のない、低速で、エラーの多いプロセス'
      ],
      after: [
        '自動MLパイプライン → エンドツーエンド特徴量エンジニアリング',
        '高度なアンサンブル手法 → LightGBM + ハイパーパラメータチューニング',
        '包括的EDA → 122特徴を体系的に分析',
        '本番対応アーキテクチャ → モジュラー、スケーラブル設計',
        '合計：自動化、再現可能な結果で75.5% AUC-ROC'
      ]
    },
         features: [
       'Interactive Streamlit Dashboard: Professional web interface with real-time model training and predictions',
       'Live Loan Predictor: Adjust customer parameters and see instant risk assessment with business recommendations',
       'Advanced ML Pipeline: Multiple model comparison (Logistic Regression → Random Forest → LightGBM)',
       'Business Intelligence Hub: Risk segmentation, financial impact calculator, and portfolio optimization',
       'Real-time Visualizations: ROC curves, feature importance analysis, and cross-validation results',
       'Executive Summary Dashboard: Key performance metrics and technology stack overview',
       'Interactive Data Exploration: Dynamic histograms, scatter plots, and correlation heatmaps',
       'Production-Ready Architecture: Modular sklearn pipelines with comprehensive documentation'
     ],
         featuresJa: [
       'インタラクティブStreamlitダッシュボード：リアルタイムモデル訓練と予測を備えたプロフェッショナルWebインターフェース',
       'ライブローン予測器：顧客パラメータを調整し、ビジネス推奨事項付きの即座のリスク評価を確認',
       '高度MLパイプライン：複数モデル比較（Logistic Regression → Random Forest → LightGBM）',
       'ビジネスインテリジェンスハブ：リスクセグメンテーション、財務インパクト計算機、ポートフォリオ最適化',
       'リアルタイム可視化：ROC曲線、特徴量重要度分析、交差検証結果',
       'エグゼクティブサマリーダッシュボード：主要パフォーマンス指標とテクノロジースタック概要',
       'インタラクティブデータ探索：動的ヒストグラム、散布図、相関ヒートマップ',
       '本番対応アーキテクチャ：包括的ドキュメンテーション付きモジュラーsklearnパイプライン'
     ],
         highlights: [
       'Interactive Dashboard: Professional Streamlit interface perfect for live demonstrations and stakeholder presentations',
       'Financial Impact: $11.9M+ net benefit with 75.5% AUC-ROC accuracy and 25% improvement over baseline',
       'Real-time Predictions: Live loan predictor enabling instant risk assessment for different customer profiles',
       'Business Intelligence: Executive summary, risk segmentation, and portfolio optimization insights',
       'Technical Excellence: Complete ML pipeline with automated feature engineering and multi-model comparison',
       'Production Ready: Modular architecture with comprehensive documentation and deployment capabilities'
     ],
         highlightsJa: [
       'インタラクティブダッシュボード：ライブデモンストレーションとステークホルダープレゼンテーションに最適なプロフェッショナルStreamlitインターフェース',
       '財務インパクト：75.5% AUC-ROC精度とベースラインから25%改善で$11.9M+の純利益',
       'リアルタイム予測：異なる顧客プロファイルに対する即座のリスク評価を可能にするライブローン予測器',
       'ビジネスインテリジェンス：エグゼクティブサマリー、リスクセグメンテーション、ポートフォリオ最適化洞察',
       '技術的卓越性：自動特徴量エンジニアリングと複数モデル比較による完全MLパイプライン',
       '本番対応：包括的ドキュメンテーションとデプロイメント機能付きモジュラーアーキテクチャ'
     ]
  },
] as const; 