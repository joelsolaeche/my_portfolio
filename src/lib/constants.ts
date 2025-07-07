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
    description: 'ML model to predict default risk using supervised learning, deep learning, and financial data modeling',
    technologies: ['Python', 'TensorFlow', 'Scikit-learn', 'FastAPI', 'Streamlit', 'Docker'],
    image: '/placeholder-project-1.jpg',
    github: 'https://github.com/joelsolaeche',
    demo: '#',
  },
  {
    id: 2,
    title: 'Multimodal E-Commerce Classifier',
    description: 'Machine learning model that classifies e-commerce products by integrating NLP and Computer Vision',
    technologies: ['Python', 'Hugging Face', 'Computer Vision', 'NLP', 'Deep Learning'],
    image: '/placeholder-project-2.jpg',
    github: 'https://github.com/joelsolaeche',
    demo: '#',
  },
  {
    id: 3,
    title: 'E-Commerce Data Pipeline',
    description: 'Built an ELT pipeline to analyze seasonal e-commerce data and extract holiday-driven purchase insights',
    technologies: ['Python', 'SQL', 'AWS', 'Data Analysis', 'ETL'],
    image: '/placeholder-project-3.jpg',
    github: 'https://github.com/joelsolaeche',
    demo: '#',
  },
  {
    id: 4,
    title: 'AI Image Classifier Web App',
    description: 'Designed and deployed an image classifier web app enabling real-time predictions from user uploads',
    technologies: ['FastAPI', 'Streamlit', 'Computer Vision', 'Deep Learning', 'Docker'],
    image: '/placeholder-project-4.jpg',
    github: 'https://github.com/joelsolaeche',
    demo: '#',
  },
] as const; 