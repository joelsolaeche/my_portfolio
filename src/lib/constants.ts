export const NAVIGATION_ITEMS = [
  { name: 'Home', href: '#hero' },
  { name: 'About', href: '#about' },
  { name: 'Experience', href: '#timeline' },
  { name: 'Achievements', href: '#achievements' },
  { name: 'Projects', href: '#projects' },
  { name: 'Contact', href: '#contact' },
] as const;

export const PORTFOLIO_DATA = {
  name: 'Joel Solaeche',
  title: 'AI Engineer',
  description: 'AI Engineer with 3+ years building ML/AI systems. Also skilled in full stack development with React, JavaScript, and modern web technologies',
  location: 'Buenos Aires, Argentina',
  email: 'joel_solaeche@hotmail.com',
  github: 'https://github.com/joelsolaeche',
  linkedin: 'https://linkedin.com/in/joelsolaeche',
  phone: '+54 9 1151073821',
} as const;

export const SKILLS = [
  // AI & Machine Learning
  { name: 'Python', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg', category: 'AI' },
  { name: 'TensorFlow', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tensorflow/tensorflow-original.svg', category: 'AI' },
  { name: 'PyTorch', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/pytorch/pytorch-original.svg', category: 'AI' },
  { name: 'Scikit-learn', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/scikitlearn/scikitlearn-original.svg', category: 'AI' },
  { name: 'Keras', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/keras/keras-original.svg', category: 'AI' },
  { name: 'Pandas', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/pandas/pandas-original.svg', category: 'AI' },
  { name: 'NumPy', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/numpy/numpy-original.svg', category: 'AI' },
  { name: 'Matplotlib', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/matplotlib/matplotlib-original.svg', category: 'AI' },
  { name: 'Seaborn', icon: '/images/stack/seaborn-1.svg', category: 'AI' },
  { name: 'Hugging Face', icon: '🤗', category: 'AI' },
  { name: 'LangChain', icon: '/images/stack/langchain-color.png', category: 'AI' },
  { name: 'LangGraph', icon: '/images/stack/langgraph-color.png', category: 'AI' },
  { name: 'OpenAI API', icon: '/images/stack/openai.svg', category: 'AI' },
  { name: 'Claude / Anthropic', icon: '✨', category: 'AI' },
  { name: 'Vercel AI SDK', icon: '⚡', category: 'AI' },
  { name: 'MCP', icon: '🔌', category: 'AI' },
  { name: 'LLMs', icon: '🗣️', category: 'AI' },
  { name: 'RAG', icon: '🔗', category: 'AI' },
  { name: 'Agents', icon: '🤖', category: 'AI' },
  { name: 'Transformers', icon: '🔄', category: 'AI' },
  { name: 'Computer Vision', icon: '👁️', category: 'AI' },
  { name: 'NLP', icon: '📝', category: 'AI' },
  { name: 'Data Science', icon: '📊', category: 'AI' },
  { name: 'Deep Learning', icon: '🧠', category: 'AI' },
  { name: 'Machine Learning', icon: '🤖', category: 'AI' },
  { name: 'YOLO11', icon: '/images/stack/ultra.avif', category: 'AI' },
  { name: 'Prompt Engineering', icon: '💡', category: 'AI' },


  // Cloud & DevOps
  { name: 'Docker', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-original.svg', category: 'DevOps' },
  { name: 'AWS', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/amazonwebservices/amazonwebservices-original-wordmark.svg', category: 'DevOps' },
  { name: 'Vercel', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vercel/vercel-original.svg', category: 'DevOps' },
  { name: 'Git', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg', category: 'DevOps' },
  { name: 'GitHub', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg', category: 'DevOps' },
  { name: 'Airflow', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/apacheairflow/apacheairflow-original.svg', category: 'DevOps' },

  // Backend & APIs
  { name: 'FastAPI', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/fastapi/fastapi-original.svg', category: 'Backend' },
  { name: 'Flask', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/flask/flask-original.svg', category: 'Backend' },
  { name: 'Spring Boot', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/spring/spring-original.svg', category: 'Backend' },
  { name: 'Node.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg', category: 'Backend' },
  { name: 'Supabase', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/supabase/supabase-original.svg', category: 'Backend' },
  { name: 'Firebase', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/firebase/firebase-original.svg', category: 'Backend' },
  { name: 'Chainlit', icon: '/images/stack/chainlit.svg', category: 'Backend' },

  // Databases
  { name: 'PostgreSQL', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg', category: 'Database' },
  { name: 'MySQL', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original.svg', category: 'Database' },
  { name: 'MongoDB', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original.svg', category: 'Database' },
  { name: 'Redis', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/redis/redis-original.svg', category: 'Database' },
  { name: 'Pinecone', icon: '🌲', category: 'Database' },
  { name: 'Neo4j', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/neo4j/neo4j-original.svg', category: 'Database' },
  { name: 'ChromaDB', icon: '/images/stack/chromadb.png', category: 'Database' },

  // Frontend Development
  { name: 'React', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg', category: 'Frontend' },
  { name: 'Next.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg', category: 'Frontend' },
  { name: 'TypeScript', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg', category: 'Frontend' },
  { name: 'JavaScript', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg', category: 'Frontend' },
  { name: 'Tailwind CSS', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg', category: 'Frontend' },
  { name: 'shadcn/ui', icon: '🎨', category: 'Frontend' },
  { name: 'HTML5', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg', category: 'Frontend' },
  { name: 'CSS3', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg', category: 'Frontend' },
  { name: 'Streamlit', icon: '/images/stack/streamlit-icon.webp', category: 'Frontend' },
] as const;

export const SKILL_CATEGORIES = [
  { id: 'All', label: 'All', color: 'blue' },
  { id: 'AI', label: 'AI & ML', color: 'purple' },
  { id: 'Frontend', label: 'Frontend', color: 'cyan' },
  { id: 'Backend', label: 'Backend', color: 'green' },
  { id: 'Database', label: 'Database', color: 'orange' },
  { id: 'DevOps', label: 'DevOps', color: 'red' },
] as const;

export const PROJECTS = [
  {
    id: 1,
    title: 'AI-Powered Shopping Assistant',
    titleJa: 'AI駆動ショッピングアシスタント',
    description: 'Production-ready conversational AI system for intelligent e-commerce customer service using LangGraph, LangChain, and Model Context Protocol (MCP) with web search capabilities',
    descriptionJa: 'LangGraph、LangChain、Model Context Protocol（MCP）とWeb検索機能を使用したインテリジェントなeコマースカスタマーサービス向け本番対応会話AIシステム',
    detailedDescription: 'Advanced AI shopping assistant revolutionizing e-commerce customer service with natural language understanding, contextual conversations, and intelligent web integration',
    technologies: ['LangChain', 'LangGraph', 'OpenAI GPT-4o-mini', 'Chroma', 'HuggingFace', 'Brave Search API', 'MCP', 'Streamlit', 'Python', 'Pandas', 'Agents'],
    image: '/images/projects/AI_assistant_agent.png',
    github: 'https://github.com/joelsolaeche/AI-Powered-Shopping-Assistant',
    demo: '#',
    impact: {
      businessProblem: 'Traditional e-commerce platforms struggle with generic search results that don\'t understand natural language, disconnected shopping experiences across product discovery and purchase, overwhelming customer support teams with routine inquiries, and lack of personalization based on purchase history.',
      technicalAchievement: 'Built intelligent conversational AI system using LangGraph state machine orchestration with GPT-4o-mini, semantic product search over 49,688 products using vector embeddings, and 6 Brave Search MCP tools for real-time web integration. Achieved 100% test coverage with 26 passing tests.',
      results: [
        '49,688 products searchable via semantic vector embeddings',
        'Natural language understanding for intuitive product discovery',
        '6 Brave Search tools: web, news, video, images, local, AI summaries',
        'Real-time cart management with session persistence',
        'Intelligent escalation to human support for sensitive operations',
        'Human-in-the-loop approval workflow for refunds and account issues',
        '100% test coverage with comprehensive integration tests'
      ]
    },
    impactJa: {
      businessProblem: '従来のeコマースプラットフォームは、自然言語を理解しない一般的な検索結果、製品発見と購入にわたる分断されたショッピング体験、日常的な問い合わせで圧倒されるカスタマーサポートチーム、購入履歴に基づくパーソナライゼーションの欠如に苦戦しています。',
      technicalAchievement: 'GPT-4o-miniを使用したLangGraphステートマシンオーケストレーション、ベクトル埋め込みによる49,688製品の意味検索、リアルタイムWeb統合のための6つのBrave Search MCPツールを使用したインテリジェントな会話AIシステムを構築。26のテストが通過し100%のテストカバレッジを達成。',
      results: [
        '意味的ベクトル埋め込みによる49,688製品の検索可能化',
        '直感的な製品発見のための自然言語理解',
        '6つのBrave Searchツール：Web、ニュース、動画、画像、ローカル、AIサマリー',
        'セッション永続化によるリアルタイムカート管理',
        '機密操作のための人間サポートへのインテリジェントなエスカレーション',
        '払い戻しとアカウント問題のための人間参加型承認ワークフロー',
        '包括的統合テストによる100%テストカバレッジ'
      ]
    },
    architecture: {
      before: [
        'Generic keyword search → Poor natural language understanding',
        'Disconnected product discovery → Separate from shopping cart',
        'Manual customer support → All inquiries require human intervention',
        'No web integration → Limited to static catalog data',
        'Total: Fragmented experience with high support costs'
      ],
      after: [
        'Semantic vector search → Natural language product discovery',
        'LangGraph state machine → Contextual conversation flow management',
        'Intelligent escalation → Automated handling with human-in-the-loop',
        'MCP web integration → Real-time Brave Search across 6 tools',
        'Total: Unified AI-powered experience with 26/26 tests passing'
      ]
    },
    architectureJa: {
      before: [
        '一般的キーワード検索 → 自然言語理解が不十分',
        '分断された製品発見 → ショッピングカートとの分離',
        '手動カスタマーサポート → すべての問い合わせが人間の介入を必要',
        'Web統合なし → 静的カタログデータに限定',
        '合計：高いサポートコストを伴う断片化された体験'
      ],
      after: [
        '意味的ベクトル検索 → 自然言語製品発見',
        'LangGraphステートマシン → コンテキスト認識会話フロー管理',
        'インテリジェントなエスカレーション → 人間参加型自動処理',
        'MCP Web統合 → 6つのツールにわたるリアルタイムBrave Search',
        '合計：26/26テスト通過によるAI駆動統合体験'
      ]
    },
    features: [
      'Intelligent Product Search: Semantic vector search with HuggingFace embeddings over 49,688 products',
      'Smart Shopping Cart: Add, remove, update quantities with session persistence',
      'Web Search Integration: 6 Brave Search MCP tools (web, news, video, images, local, AI summaries)',
      'Customer Support Escalation: Automatic detection and human-in-the-loop approval workflow',
      'LangGraph State Machine: Contextual conversation orchestration with memory',
      'Multi-Agent Architecture: Separate sales and support assistants with specialized tools',
      'Purchase History Analysis: Personalized recommendations based on past orders',
      'Production Ready: 100% test coverage with 26 comprehensive tests'
    ],
    featuresJa: [
      'インテリジェントな製品検索：49,688製品にわたるHuggingFace埋め込みを使用した意味的ベクトル検索',
      'スマートショッピングカート：セッション永続化による追加、削除、数量更新',
      'Web検索統合：6つのBrave Search MCPツール（Web、ニュース、動画、画像、ローカル、AIサマリー）',
      'カスタマーサポートエスカレーション：自動検出と人間参加型承認ワークフロー',
      'LangGraphステートマシン：メモリ付きコンテキスト認識会話オーケストレーション',
      'マルチエージェントアーキテクチャ：特化ツールを持つ独立した販売およびサポートアシスタント',
      '購入履歴分析：過去の注文に基づくパーソナライズド推奨',
      '本番対応：26の包括的テストによる100%テストカバレッジ'
    ],
    highlights: [
      'Advanced AI Stack: LangChain, LangGraph, MCP integration with GPT-4o-mini',
      'Semantic Search: 49,688 products with vector embeddings for natural language queries',
      'Production Quality: 100% test coverage with comprehensive integration testing',
      'Hybrid Intelligence: Combines product catalog with real-time web search',
      'Modern Architecture: State machine orchestration with human-in-the-loop workflows',
      'Complete Solution: End-to-end system from product search to customer support'
    ],
    highlightsJa: [
      '高度AIスタック：GPT-4o-miniとのLangChain、LangGraph、MCP統合',
      '意味検索：自然言語クエリのためのベクトル埋め込みによる49,688製品',
      '本番品質：包括的統合テストによる100%テストカバレッジ',
      'ハイブリッドインテリジェンス：製品カタログとリアルタイムWeb検索の組み合わせ',
      'モダンアーキテクチャ：人間参加型ワークフローによるステートマシンオーケストレーション',
      '完全ソリューション：製品検索からカスタマーサポートまでのエンドツーエンドシステム'
    ]
  },
  {
    id: 2,
    title: 'LLM-Based Recruitment Tool',
    titleJa: 'LLMベース採用支援ツール',
    description: 'Intelligent job-matching application powered by LangChain, GPT-4/Gemini, and RAG system with ChromaDB for semantic candidate-job matching and automated cover letter generation',
    descriptionJa: 'LangChain、GPT-4/Gemini、ChromaDBを活用したRAGシステムによる意味的候補者・求人マッチングと自動カバーレター生成を実現するインテリジェント採用支援アプリケーション',
    detailedDescription: 'Advanced recruitment platform leveraging LLMs and vector embeddings to revolutionize job matching through AI-powered resume analysis, semantic search, and personalized assistant agents',
    technologies: ['LangChain', 'OpenAI GPT-4', 'Gemini', 'ChromaDB', 'Chainlit', 'Python', 'FastAPI', 'Docker', 'RAG', 'Vector Embeddings'],
    image: '/images/projects/LLM-based_home_screen.png',
    github: 'https://github.com/joelsolaeche/llm-based-recruitment-tool',
    demo: '#',
    impact: {
      businessProblem: 'Traditional recruitment processes struggle with inefficient candidate-job matching, time-consuming manual resume screening, subjective evaluation criteria, and inability to process large volumes of applications effectively. Recruiters spend 23 hours on average to hire a single candidate.',
      technicalAchievement: 'Built intelligent multi-agent recruitment system using LangChain and RAG architecture with ChromaDB vector database, implementing three specialized AI assistants (ChatGPT clone, Jobs Finder with semantic search, and Agentic system with cover letter generation). Achieved semantic job matching with PDF resume processing and conversation memory management.',
      results: [
        '3 specialized AI assistants for different recruitment workflows',
        'Semantic search across job listings using vector embeddings',
        'Automatic PDF resume processing and candidate profile generation',
        'RAG-powered job matching with context-aware recommendations',
        'Personalized cover letter generation based on candidate profiles',
        'Multi-LLM support (OpenAI GPT-4 and Google Gemini)',
        'Real-time conversational interface with memory management'
      ]
    },
    impactJa: {
      businessProblem: '従来の採用プロセスは、非効率的な候補者・求人マッチング、時間のかかる手動履歴書スクリーニング、主観的評価基準、大量の応募を効果的に処理できない問題を抱えています。採用担当者は平均23時間を1人の候補者採用に費やしています。',
      technicalAchievement: 'LangChainとRAGアーキテクチャ、ChromaDBベクトルデータベースを使用したインテリジェントマルチエージェント採用システムを構築。3つの特化型AIアシスタント（ChatGPTクローン、意味検索付きジョブファインダー、カバーレター生成付きエージェントシステム）を実装。PDF履歴書処理と会話メモリ管理による意味的求人マッチングを実現。',
      results: [
        '異なる採用ワークフロー向けの3つの特化型AIアシスタント',
        'ベクトル埋め込みを使用した求人リストの意味検索',
        '自動PDF履歴書処理と候補者プロフィール生成',
        'コンテキスト認識推奨付きRAG駆動求人マッチング',
        '候補者プロフィールに基づくパーソナライズドカバーレター生成',
        'マルチLLMサポート（OpenAI GPT-4とGoogle Gemini）',
        'メモリ管理付きリアルタイム会話インターフェース'
      ]
    },
    architecture: {
      before: [
        'Manual resume screening → 2-4 hours per position',
        'Keyword-based matching → 60-70% relevance accuracy',
        'Generic job recommendations → Poor candidate fit',
        'Manual cover letter review → Time-consuming process',
        'Total: 23+ hours average time-to-hire per candidate'
      ],
      after: [
        'AI-powered resume analysis → <2 minutes processing',
        'Semantic vector search → 85%+ relevance accuracy',
        'RAG-based recommendations → Context-aware job matching',
        'Automated cover letter generation → Personalized content',
        'Total: 90%+ time reduction in initial screening process'
      ]
    },
    architectureJa: {
      before: [
        '手動履歴書スクリーニング → ポジションあたり2-4時間',
        'キーワードベースマッチング → 60-70%の関連性精度',
        '一般的な求人推奨 → 候補者適合性が低い',
        '手動カバーレターレビュー → 時間のかかるプロセス',
        '合計：候補者あたり平均採用時間23時間以上'
      ],
      after: [
        'AI駆動履歴書分析 → 2分未満の処理',
        '意味的ベクトル検索 → 85%以上の関連性精度',
        'RAGベース推奨 → コンテキスト認識求人マッチング',
        '自動カバーレター生成 → パーソナライズドコンテンツ',
        '合計：初期スクリーニングプロセスで90%以上の時間削減'
      ]
    },
    features: [
      'Multi-Assistant System: Three specialized AI agents (ChatGPT clone, Jobs Finder, Agentic system)',
      'RAG Architecture: Retrieval-Augmented Generation with ChromaDB vector database',
      'PDF Resume Processing: Automatic text extraction and candidate profile summarization',
      'Semantic Job Search: Vector-based matching using sentence transformers',
      'Conversation Memory: Context-aware chat with full conversation history',
      'Multi-LLM Provider: Factory pattern supporting OpenAI and Google Gemini',
      'Cover Letter Generation: Personalized content based on candidate and job data',
      'Production Ready: Docker containerization, error handling, and comprehensive testing'
    ],
    featuresJa: [
      'マルチアシスタントシステム：3つの特化型AIエージェント（ChatGPTクローン、ジョブファインダー、エージェントシステム）',
      'RAGアーキテクチャ：ChromaDBベクトルデータベースを使用したRetrieval-Augmented Generation',
      'PDF履歴書処理：自動テキスト抽出と候補者プロフィール要約',
      '意味的求人検索：文変換器を使用したベクトルベースマッチング',
      '会話メモリ：完全な会話履歴を持つコンテキスト認識チャット',
      'マルチLLMプロバイダー：OpenAIとGoogle Geminiをサポートするファクトリパターン',
      'カバーレター生成：候補者と求人データに基づくパーソナライズドコンテンツ',
      '本番対応：Dockerコンテナ化、エラーハンドリング、包括的テスト'
    ],
    highlights: [
      'Advanced AI/ML Stack: LangChain, RAG, Vector Embeddings, Multi-LLM support',
      'Intelligent Automation: 90%+ reduction in manual screening time',
      'Semantic Understanding: Vector-based job matching with 85%+ relevance',
      'Production Engineering: Docker, comprehensive testing, factory pattern design',
      'Modern Architecture: Microservices, async processing, scalable design',
      'End-to-End Solution: Resume processing to cover letter generation'
    ],
    highlightsJa: [
      '高度AI/MLスタック：LangChain、RAG、ベクトル埋め込み、マルチLLMサポート',
      'インテリジェント自動化：手動スクリーニング時間90%以上削減',
      '意味的理解：85%以上の関連性を持つベクトルベース求人マッチング',
      '本番エンジニアリング：Docker、包括的テスト、ファクトリパターン設計',
      'モダンアーキテクチャ：Microservices、非同期処理、スケーラブル設計',
      'エンドツーエンドソリューション：履歴書処理からカバーレター生成まで'
    ]
  },
  {
    id: 3,
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
    id: 4,
    title: 'Multimodal E-Commerce Product Classification System',
    titleJa: 'マルチモーダルEコマース製品分類システム',
    description: 'Advanced multimodal ML system with professional Next.js demo combining computer vision and NLP for automated product categorization, achieving 85%+ accuracy across 49K+ products',
    descriptionJa: 'コンピュータビジョンとNLPを組み合わせた自動製品分類のための高度なマルチモーダルMLシステム。49K+製品で85%以上の精度を達成するプロフェッショナルなNext.jsデモ付き',
    detailedDescription: 'State-of-the-art multimodal classification system with professional demo frontend that automatically categorizes BestBuy products using both product images and text descriptions, demonstrating superior performance over single-modality approaches',
    technologies: ['Next.js', 'TypeScript', 'FastAPI', 'TensorFlow', 'ResNet50', 'BERT', 'Vision Transformer', 'Tailwind CSS', 'Python'],
    image: '/images/projects/nlp_ecommerce.png',
    github: 'https://github.com/joelsolaeche/Multimodal_E-commerce_Product_Classification_System',
    demo: 'https://multimodalecommercenlpitems.vercel.app/',
    impact: {
      businessProblem: 'E-commerce platforms struggle with accurate product categorization across vast inventories, leading to poor search results, misplaced products, and reduced customer satisfaction. Manual categorization is time-consuming, inconsistent, and unable to scale with growing product catalogs.',
      technicalAchievement: 'Built comprehensive multimodal AI system achieving 85%+ accuracy by combining computer vision and NLP models, with professional Next.js demo frontend showcasing 12+ ML architectures including ResNet, Vision Transformers, and BERT for real-time product classification.',
      results: [
        '85%+ accuracy with multimodal fusion vs 82% vision-only and 79% text-only',
        '12+ ML architectures implemented and compared (ResNet, ViT, BERT, ConvNeXt)',
        '49K+ products processed across 4K+ categories from BestBuy dataset',
        'Professional demo frontend with interactive visualizations and real-time predictions',
        'Superior performance over single-modality approaches by 3-6%',
        'Real-time classification with instant prediction confidence scores',
        'Production-ready FastAPI backend with structured logging and error handling'
      ]
    },
    impactJa: {
      businessProblem: 'Eコマースプラットフォームは膨大な在庫の正確な製品分類に苦戦し、検索結果の悪化、製品の誤配置、顧客満足度の低下を招いています。手動分類は時間がかかり、一貫性がなく、増大する製品カタログに対応できません。',
      technicalAchievement: 'コンピュータビジョンとNLPモデルを組み合わせて85%以上の精度を達成する包括的マルチモーダルAIシステムを構築。リアルタイム製品分類のためのResNet、Vision Transformers、BERTを含む12以上のMLアーキテクチャを紹介するプロフェッショナルなNext.jsデモフロントエンド付き。',
      results: [
        'マルチモーダル融合で85%以上の精度（ビジョンのみ82%、テキストのみ79%と比較）',
        '12以上のMLアーキテクチャを実装・比較（ResNet、ViT、BERT、ConvNeXt）',
        'BestBuyデータセットから4K+カテゴリにわたる49K+製品を処理',
        'インタラクティブな可視化とリアルタイム予測を備えたプロフェッショナルなデモフロントエンド',
        '単一モダリティアプローチより3-6%優れたパフォーマンス',
        '即座の予測信頼度スコア付きリアルタイム分類',
        '構造化ログとエラーハンドリングを備えた本番対応FastAPIバックエンド'
      ]
    },
    architecture: {
      before: [
        'Manual product categorization → Time-consuming and inconsistent',
        'Single-modality classification → Limited accuracy (79-82%)',
        'No interactive demonstration → Static results only',
        'Basic ML approaches → Simple models with limited features',
        'Total: Inefficient, inaccurate, and non-scalable classification process'
      ],
      after: [
        'Multimodal AI fusion → Computer vision + NLP with 85%+ accuracy',
        'Professional demo frontend → Interactive Next.js application with real-time predictions',
        '12+ ML architectures → ResNet, ViT, BERT, ConvNeXt, Swin Transformer comparison',
        'Production API backend → FastAPI with structured logging and error handling',
        'Total: Advanced, accurate, and scalable multimodal classification system'
      ]
    },
    architectureJa: {
      before: [
        '手動製品分類 → 時間がかかり一貫性がない',
        '単一モダリティ分類 → 限定的精度（79-82%）',
        'インタラクティブなデモンストレーションなし → 静的結果のみ',
        '基本的MLアプローチ → 限定的機能を持つシンプルなモデル',
        '合計：非効率、不正確、非スケーラブルな分類プロセス'
      ],
      after: [
        'マルチモーダルAI融合 → コンピュータビジョン + NLPで85%以上の精度',
        'プロフェッショナルなデモフロントエンド → リアルタイム予測付きインタラクティブNext.jsアプリケーション',
        '12以上のMLアーキテクチャ → ResNet、ViT、BERT、ConvNeXt、Swin Transformer比較',
        '本番APIbackend → 構造化ログとエラーハンドリング付きFastAPI',
        '合計：高度、正確、スケーラブルなマルチモーダル分類システム'
      ]
    },
    features: [
      'Professional Demo Frontend: Next.js application with Tailwind CSS, interactive visualizations, and responsive design',
      'Multimodal AI Architecture: Combines computer vision (ResNet, ViT, ConvNeXt) with NLP (BERT, MiniLM) models',
      'Real-time Classification: Interactive demo with image upload and text input for instant predictions',
      'Performance Analytics Dashboard: Interactive charts showing model comparisons and category performance',
      'Model Explorer: Detailed view of 12+ ML architectures with performance metrics and technical specifications',
      'Production API Backend: FastAPI server with structured logging, error handling, and async support',
      'Advanced ML Comparison: Classical ML, Deep Learning, and Multimodal fusion approaches evaluated',
      'Scalable Data Processing: Handles 49K+ products across 4K+ categories with efficient embedding storage'
    ],
    featuresJa: [
      'プロフェッショナルなデモフロントエンド：Tailwind CSS、インタラクティブな可視化、レスポンシブデザインを備えたNext.jsアプリケーション',
      'マルチモーダルAIアーキテクチャ：コンピュータビジョン（ResNet、ViT、ConvNeXt）とNLP（BERT、MiniLM）モデルを組み合わせ',
      'リアルタイム分類：画像アップロードとテキスト入力による即座の予測のためのインタラクティブデモ',
      'パフォーマンス分析ダッシュボード：モデル比較とカテゴリパフォーマンスを示すインタラクティブチャート',
      'モデルエクスプローラー：パフォーマンス指標と技術仕様を備えた12以上のMLアーキテクチャの詳細ビュー',
      '本番APIバックエンド：構造化ログ、エラーハンドリング、非同期サポート付きFastAPIサーバー',
      '高度ML比較：古典的ML、深層学習、マルチモーダル融合アプローチを評価',
      'スケーラブルデータ処理：効率的な埋め込みストレージで4K+カテゴリにわたる49K+製品を処理'
    ],
    highlights: [
      'Multimodal AI Innovation: 85%+ accuracy combining computer vision and NLP, outperforming single-modality approaches',
      'Professional Full-Stack Demo: Modern Next.js frontend with FastAPI backend showcasing production-ready development',
      'Comprehensive ML Research: 12+ architectures implemented including ResNet, Vision Transformers, and BERT models',
      'Interactive Data Science: Real-time visualizations, performance analytics, and model comparison dashboards',
      'Production Engineering: Scalable architecture with proper logging, error handling, and API documentation',
      'Industry-Scale Dataset: 49K+ products across 4K+ categories demonstrating real-world applicability'
    ],
    highlightsJa: [
      'マルチモーダルAI革新：コンピュータビジョンとNLPを組み合わせて85%以上の精度を実現、単一モダリティアプローチを上回る性能',
      'プロフェッショナルなフルスタックデモ：本番対応開発を紹介するFastAPIバックエンド付きモダンNext.jsフロントエンド',
      '包括的ML研究：ResNet、Vision Transformers、BERTモデルを含む12以上のアーキテクチャを実装',
      'インタラクティブなデータサイエンス：リアルタイム可視化、パフォーマンス分析、モデル比較ダッシュボード',
      '本番エンジニアリング：適切なログ記録、エラーハンドリング、APIドキュメンテーション付きスケーラブルアーキテクチャ',
      '業界スケールデータセット：実世界の適用性を実証する4K+カテゴリにわたる49K+製品'
    ]
  },
  {
    id: 5,
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
    id: 6,
    title: 'AI Vision Classifier',
    titleJa: 'AI画像分類システム',
    description: 'Enterprise-grade full-stack application with ResNet50 AI model for automated image classification across 1000+ categories, featuring 95% time reduction and real-time processing',
    descriptionJa: '1000以上のカテゴリに対応するResNet50 AIモデルを使用した企業級フルスタックアプリケーション。95%の時間短縮とリアルタイム処理を実現',
    detailedDescription: 'Comprehensive AI-powered platform that transforms business image processing workflows through intelligent automation, modern user experience, and scalable microservices architecture',
    technologies: ['Next.js', 'TypeScript', 'FastAPI', 'TensorFlow', 'ResNet50', 'PostgreSQL', 'Redis', 'Docker', 'TailwindCSS'],
    image: '/images/projects/demo_ai_classifier.png',
    github: 'https://github.com/joelsolaeche/ai_classifier',
    demo: 'https://ai-classifier-nine.vercel.app/',
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
    id: 7,
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