export type Language = 'en' | 'ja';

export const translations = {
  en: {
    // Navigation
    nav: {
      home: 'Home',
      about: 'About',
      experience: 'Experience',
      projects: 'Projects',
      contact: 'Contact'
    },
    // Hero Section
    hero: {
      greeting: "Hello, I'm",
      description: 'Machine Learning Engineer with +3 years of experience specializing in AI technologies. Also skilled in full stack development with React, JavaScript, and modern web technologies',
      additionalText: ". Let's create something exceptional together.",
      viewWork: 'View My Work',
      getInTouch: 'Get In Touch'
    },
    // About Section
    about: {
      title: 'About Me',
      subtitle: 'Learn more about my background, experience, and passion for Machine Learning and AI.',
      myBackground: 'My Background',
      quickFacts: 'Quick Facts',
      skillsAndTechnologies: 'Skills & Technologies',
      bio: {
        intro: `Hello! I'm {name}, a Machine Learning Engineer with +3 years of experience specializing in AI technologies. Based in Buenos Aires, Argentina, I have a passion for applying machine learning to solve complex problems and create innovative solutions.`,
        expertise: `My expertise spans Python, SQL, machine learning frameworks like TensorFlow, Scikit-learn, and Keras, along with deployment technologies including Docker, AWS, FastAPI, and Streamlit. I've worked on diverse projects from credit risk analysis to multimodal ML systems.`,
        fullstack: `I'm also skilled in full stack development with React, JavaScript, Next.js, and modern web technologies, enabling me to build complete AI-powered applications from backend models to user interfaces.`,
        current: `Currently, I'm enhancing AI models through coding and prompt engineering at Scale AI, while contributing to real-world ML engineering projects. I hold a degree in Software Engineering from UADE and am multilingual (Spanish, English C1, Japanese N2).`
      },
      facts: {
        experience: '3+ years ML experience',
        location: 'Based in Buenos Aires, Argentina',
        education: 'Degree in Software Engineering',
        languages: 'Multilingual (Spanish, English, Japanese)',
        role: 'ML Engineer / Software Engineer',
        fullStack: 'Full Stack Developer'
      }
    },
    // Timeline Section
    timeline: {
      title: 'Professional Experience',
      subtitle: 'My journey in Machine Learning and AI, from hands-on development to cutting-edge research.',
      present: 'Present'
    },
    // Projects Section
    projects: {
      title: 'Featured Projects',
      subtitle: 'Here are some of my recent projects that showcase my Machine Learning and full stack development skills. Click on any project to see detailed information.',
      viewDetails: 'View Details',
      viewCode: 'View Code',
      liveDemo: 'Live Demo',
      viewDemo: 'View Demo',
      interactiveDashboard: 'Interactive Dashboard',
      moreProjects: 'More ML Projects Coming Soon',
      moreProjectsDesc: "I'm always working on new ML projects and exploring different AI technologies. Check back soon for more exciting work!",
      collaborate: "Let's Collaborate",
      // Project Modal Content
      modal: {
        projectImpact: 'Project Impact',
        businessProblem: 'Business Problem Solved',
        technicalAchievement: 'Technical Achievement',
        keyResults: 'Key Results',
        technicalArchitecture: 'Technical Architecture',
        beforeManual: 'Before: Manual Process',
        afterAutomated: 'After: Automated Pipeline',
        technologiesUsed: 'Technologies Used',
        keyFeatures: 'Key Features',
        whatMakesSpecial: 'What Makes This Special'
      }
    },
    // Contact Section
    contact: {
      title: "Let's Work Together",
      subtitle: "I'd love to hear from you! Whether you have an ML project in mind, want to collaborate, or just want to say hello, feel free to reach out.",
      sendMessage: 'Send Me a Message',
      getInTouch: 'Get in Touch',
      connectWithMe: 'Connect With Me',
      name: 'Name',
      email: 'Email',
      message: 'Message',
      namePlaceholder: 'Your Name',
      emailPlaceholder: 'your.email@example.com',
      messagePlaceholder: 'Tell me about your ML project or just say hello!',
      send: 'Send Message',
      sending: 'Sending...',
      successMessage: "✅ Message sent successfully! I'll get back to you within 24 hours.",
      errorMessage: '❌ Something went wrong. Please try again or contact me directly via email.',
      location: 'Location',
      responseTime: 'Response Time',
      responseTimeText: 'Within 24 hours',
      whatsappText: 'Click WhatsApp to send me a direct message!',
      copyright: 'Built with Next.js, TypeScript, and Tailwind CSS.'
    }
  },
  ja: {
    // Navigation
    nav: {
      home: 'ホーム',
      about: '私について',
      experience: '経験',
      projects: 'プロジェクト',
      contact: 'お問い合わせ'
    },
    // Hero Section
    hero: {
      greeting: 'はじめまして、',
      description: 'AI技術を専門とする3年以上の経験を持つ機械学習エンジニア。React、JavaScript、最新のWeb技術を使ったフルスタック開発も得意としています',
      additionalText: '。一緒に素晴らしいものを創造しましょう。',
      viewWork: '作品を見る',
      getInTouch: 'お問い合わせ'
    },
    // About Section
    about: {
      title: '私について',
      subtitle: '私の経歴、経験、機械学習とAIへの情熱について詳しくご紹介します。',
      myBackground: '私の経歴',
      quickFacts: '基本情報',
      skillsAndTechnologies: 'スキルと技術',
      bio: {
        intro: `こんにちは！私は{name}、AI技術を専門とする3年以上の経験を持つ機械学習エンジニアです。アルゼンチンのブエノスアイレス在住で、機械学習を使って複雑な問題を解決し、革新的なソリューションを作ることに情熱を注いでいます。`,
        expertise: `私の専門知識は、Python、SQL、TensorFlow、Scikit-learn、Kerasなどの機械学習フレームワーク、そしてDocker、AWS、FastAPI、Streamlitなどのデプロイメント技術に及びます。信用リスク分析からマルチモーダルMLシステムまで、多様なプロジェクトに取り組んできました。`,
        fullstack: `また、React、JavaScript、Next.js、現代的なWeb技術を使ったフルスタック開発にも習熟しており、バックエンドモデルからユーザーインターフェースまで、完全なAI駆動アプリケーションを構築できます。`,
        current: `現在はScale AIでコーディングとプロンプトエンジニアリングを通じてAIモデルを改善する傍ら、実世界のML工学プロジェクトに貢献しています。UADEでソフトウェア工学の学位を取得し、多言語話者（スペイン語、英語C1、日本語N2）です。`
      },
      facts: {
        experience: '3年以上のML経験',
        location: 'アルゼンチン、ブエノスアイレス在住',
        education: 'ソフトウェア工学学位取得',
        languages: '多言語話者（スペイン語、英語、日本語）',
        role: 'MLエンジニア / ソフトウェアエンジニア',
        fullStack: 'フルスタック開発者'
      }
    },
    // Timeline Section
    timeline: {
      title: '職歴',
      subtitle: '最先端の研究から実践的な開発まで、機械学習とAIにおける私の歩み。',
      present: '現在'
    },
    // Projects Section  
    projects: {
      title: '注目プロジェクト',
      subtitle: '機械学習とフルスタック開発のスキルを紹介する最近のプロジェクトです。詳細情報を見るには任意のプロジェクトをクリックしてください。',
      viewDetails: '詳細を見る',
      viewCode: 'コードを見る',
      liveDemo: 'ライブデモ',
      viewDemo: 'デモを見る',
      interactiveDashboard: 'インタラクティブダッシュボード',
      moreProjects: '新しいMLプロジェクトが間もなく登場',
      moreProjectsDesc: '常に新しいMLプロジェクトに取り組み、様々なAI技術を探求しています。近日中により興味深い作品をお楽しみに！',
      collaborate: '一緒に働きましょう',
      // Project Modal Content
      modal: {
        projectImpact: 'プロジェクトの影響',
        businessProblem: '解決したビジネス問題',
        technicalAchievement: '技術的成果',
        keyResults: '主要な結果',
        technicalArchitecture: '技術アーキテクチャ',
        beforeManual: '以前：手動プロセス',
        afterAutomated: '現在：自動化パイプライン',
        technologiesUsed: '使用技術',
        keyFeatures: '主要機能',
        whatMakesSpecial: 'このプロジェクトの特別な点'
      }
    },
    // Contact Section
    contact: {
      title: '一緒に働きましょう',
      subtitle: 'MLプロジェクトのアイデア、コラボレーション、またはご挨拶など、お気軽にご連絡ください！',
      sendMessage: 'メッセージを送る',
      getInTouch: 'お問い合わせ',
      connectWithMe: 'つながりましょう',
      name: 'お名前',
      email: 'メールアドレス',
      message: 'メッセージ',
      namePlaceholder: 'お名前',
      emailPlaceholder: 'your.email@example.com',
      messagePlaceholder: 'MLプロジェクトについて教えてください。ご挨拶でも大歓迎です！',
      send: 'メッセージを送信',
      sending: '送信中...',
      successMessage: '✅ メッセージが正常に送信されました！24時間以内にお返事いたします。',
      errorMessage: '❌ エラーが発生しました。再試行するか、直接メールでお問い合わせください。',
      location: '所在地',
      responseTime: '返信時間',
      responseTimeText: '24時間以内',
      whatsappText: 'WhatsAppをクリックして直接メッセージを送信してください！',
      copyright: 'Next.js、TypeScript、Tailwind CSSで構築。'
    }
  }
} as const; 