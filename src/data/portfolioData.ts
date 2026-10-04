import { Project, Certificate, EducationItem, SkillCategory } from '../types/portfolio';

export const PERSONAL_INFO = {
  name: "Yajat Bharat Padmavat",
  firstName: "Yajat",
  title: "Computer Engineering Undergraduate & Software Engineer",
  tagline: "Building resilient web applications, applied machine learning systems, and agentic workflows.",
  email: "yajatpadmavat@gmail.com",
  phone: "+91-9221339060",
  location: "Dombivli, Maharashtra, India",
  college: "Thadomal Shahani Engineering College, Bandra, Mumbai",
  cgpa: "8.67",
  status: "Available for Software Engineering & ML Internships",
  resumeUrl: "https://drive.google.com/file/d/1PAdbeAbY48J57A5hXxBwlFB6Z1p0Ddgw/view",
  socials: {
    github: "https://github.com/yajatpadmavat",
    linkedin: "https://linkedin.com/in/yajat-padmavat",
    emailMailto: "mailto:yajatpadmavat@gmail.com",
    phoneTel: "tel:+919221339060",
    resumeDrive: "https://drive.google.com/file/d/1PAdbeAbY48J57A5hXxBwlFB6Z1p0Ddgw/view"
  },
  bio: "Pre-final year Computer Engineering student at Thadomal Shahani Engineering College with an 8.67 CGPA. Experienced in building responsive full-stack applications with React, Supabase, and Firebase, paired with practical Machine Learning model training and Agentic AI workflow architectures."
};


export const PROJECTS: Project[] = [
  {
    id: "muscler",
    title: "Muscler",
    subtitle: "Your Personal Fitness & Workout Tracker",
    description: "Muscler helps you track your fitness journey. Log daily workouts, calculate calories burnt with metabolic calculations, record sets and reps, and pave your way toward a healthy lifestyle.",
    longDescription: "Muscler is an end-to-end fitness management web application designed for athletes and gym-goers to eliminate paper workout sheets and complex spreadsheets. Featuring real-time cloud data synchronization, workout routine builders, dynamic caloric expenditure estimations based on body metrics, and historical progress visualization.",
    tags: ["React", "Supabase", "SQL", "Firebase", "Tailwind CSS"],
    date: "February 2026",
    liveUrl: "https://yajatpadmavat.github.io/Muscler-Your-personal-fitness-tracker/",
    githubUrl: "https://github.com/yajatpadmavat/Muscler-Your-personal-fitness-tracker",
    image: "/src/assets/images/muscler_preview_1791133371139.jpg",
    highlights: [
      "Real-time workout logging with interactive exercise sets, reps, and resistance tracking",
      "Dynamic metabolic calorie burn calculator tailored to individual physical attributes",
      "Relational backend storage using Supabase and Firebase for high-availability synchronization",
      "Fully responsive, ergonomic interface engineered for single-handed gym floor usage"
    ],
    metrics: [
      { label: "Architecture", value: "React + Supabase" },
      { label: "Sync Engine", value: "Firebase Realtime" },
      { label: "Deployment", value: "GitHub Pages" },
      { label: "Status", value: "Production Live" }
    ]
  },
  {
    id: "gaming-addiction-meter",
    title: "Gaming Addiction Meter",
    subtitle: "Machine Learning Classifier & Mental Health Risk Evaluator",
    description: "A machine learning web application that classifies gaming addiction patterns to prevent digital burnout. Utilizes a trained Random Forest model on Kaggle clinical data with real-time risk classification and habit intervention tips.",
    longDescription: "With the rise of hyper-engaging digital worlds, gaming addiction is an emerging mental health concern. This project uses machine learning to classify behavioral risks by assessing daily gaming hours, sleep disruption patterns, social engagement, and psychological indicators. Trained on real-world Kaggle clinical survey data with transparent feature scoring.",
    tags: ["Python", "Machine Learning", "Random Forest", "React", "Kaggle Dataset", "Data Analysis"],
    date: "July 2026",
    liveUrl: "https://gaming-addiction-predictor.vercel.app/",
    datasetUrl: "https://www.kaggle.com/datasets/dreamtensor/gaming-addiction-and-mental-health-analysis",
    githubUrl: "https://github.com/yajatpadmavat",
    image: "/src/assets/images/gaming_meter_preview_1791133383701.jpg",
    highlights: [
      "Supervised Random Forest Classifier trained on Kaggle Gaming Addiction and Mental Health benchmark data",
      "Multi-variable risk inference scoring screen time, sleep deficit, and academic/professional impact",
      "Interactive evaluation questionnaire providing instant categorization and tailored cognitive interventions",
      "Responsive web client deployed on Vercel ensuring sub-100ms prediction feedback"
    ],
    metrics: [
      { label: "Algorithm", value: "Random Forest" },
      { label: "Dataset", value: "Kaggle Clinical" },
      { label: "Deployment", value: "Vercel Cloud" },
      { label: "Latency", value: "< 120ms" }
    ]
  }
];

export const CERTIFICATES: Certificate[] = [
  {
    id: "agentic-ai-fintech",
    title: "Agentic AI for Fintech Enterprises",
    issuer: "Thadomal Shahani Engineering College (TSEC), Mumbai",
    issuerShort: "TSEC Department of Computer Engineering",
    date: "July 2026 (13.07.2026 – 18.07.2026)",
    duration: "36 Hours (1-Week Value Added Course)",
    driveUrl: "https://drive.google.com/file/d/12cgBBFbE8tEpvdLB46N9Agw6ry_bfOUN/view",
    image: "/src/assets/images/tsec_cert_preview_1791133394206.jpg",
    description: "Completed an intensive 36-hour Value Added Course organized by the Department of Computer Engineering at Thadomal Shahani Engineering College, exploring autonomous AI agents, tool integration, and financial technology application architectures.",
    keyLearnings: [
      "Hands-on exposure to agentic AI frameworks and autonomous agent reasoning patterns",
      "Practical implementation of LLM function calling, multi-agent coordination, and decision workflows",
      "Architecture patterns for deploying resilient AI agents in regulated financial environments",
      "Prompt orchestration and systematic evaluation for fintech use-cases"
    ],
    credentials: {
      signatories: [
        "Dr. G. T. Thampi (Principal, TSEC - Convener)",
        "Dr. Jayant Gadge (Vice Principal, TSEC - Co-Convener)",
        "Ms. Sonal Shroff (Assistant Professor - Coordinator)",
        "Dr. Ujwala Bharambe (Associate Professor - Coordinator)"
      ],
      verificationNote: "Digitally signed by GOPAKUMARAN TRIVIKRAMAN THAMPI on 2026.07.29 15:55:46 +05'30'"
    }
  },
  {
    id: "ai-tools-chatgpt",
    title: "AI Tools and ChatGPT Workshop",
    issuer: "be10x",
    issuerShort: "be10x Verified",
    date: "October 4th, 2026",
    duration: "Hands-on Masterclass",
    driveUrl: "https://drive.google.com/file/d/1N4CTix2BYmyNhKsSUGNGvejXewlYSrw3/view",
    image: "/src/assets/images/be10x_cert_preview_1791133404744.jpg",
    description: "Earned verified certificate of completion from be10x demonstrating high-efficiency workflows leveraging modern generative AI models and automated tooling for rapid development and analytics.",
    keyLearnings: [
      "Rapid presentation and structural deck generation using AI in under 5 minutes",
      "Automated exploratory data analysis, pattern extraction, and synthesis using AI in under 30 minutes",
      "Efficient code debugging, unit test synthesis, and refactoring using AI in under 10 minutes",
      "Optimized prompt workflows for engineering productivity and developer velocity"
    ],
    credentials: {
      signatories: [
        "Aditya Goenka (Co-founder, be10x)",
        "Aditya Kachave (Co-founder, be10x)"
      ],
      verificationNote: "Verified digital credential with secure authenticity QR validation"
    }
  }
];


export const EDUCATION_DATA: EducationItem[] = [
  {
    institution: "Thadomal Shahani Engineering College",
    degree: "B.E. Computer Engineering",
    scoreLabel: "CGPA",
    scoreValue: "8.67",
    period: "September 2024 – Present",
    location: "Bandra, Mumbai, Maharashtra",
    highlights: [
      "Pursuing Bachelor of Engineering in Computer Engineering with strong academic distinction",
      "Rigorous coursework in Data Structures, Object-Oriented Programming, Database Management, and Machine Learning",
      "Active participant in technical symposiums, hackathons, and department value-added certifications"
    ]
  },
  {
    institution: "Royal Junior College",
    degree: "Higher Secondary Certificate (HSC)",
    scoreLabel: "Percentage",
    scoreValue: "83%",
    period: "July 2022 – April 2024",
    location: "Dombivli, Maharashtra",
    highlights: [
      "Completed Higher Secondary Education majoring in Science & Mathematics with distinction",
      "Established foundational mastery in Mathematics, Physics, and algorithmic thinking"
    ]
  }
];


export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    category: "Languages & Foundations",
    description: "Core programming paradigms and computational foundations",
    skills: [
      { name: "Python", level: "Advanced", detail: "Data analysis, scikit-learn ML pipelines, script automation" },
      { name: "C", level: "Proficient", detail: "Memory management, pointers, algorithmic problem-solving" },
      { name: "JavaScript / TypeScript", level: "Proficient", detail: "Modern ES6+, DOM manipulation, type-safe development" },
      { name: "SQL", level: "Proficient", detail: "Relational queries, joins, indexing, and schema design" },
      { name: "OOPS Concepts", level: "Advanced", detail: "Encapsulation, inheritance, polymorphism, design patterns" }
    ]
  },
  {
    category: "Web & Frontend Engineering",
    description: "Building responsive, modern user experiences and state architectures",
    skills: [
      { name: "React", level: "Advanced", detail: "Hooks, component lifecycles, modular state architecture" },
      { name: "Tailwind CSS", level: "Advanced", detail: "Utility-first responsive layouts, tokens, custom themes" },
      { name: "Framer Motion", level: "Proficient", detail: "Physics-based animation, micro-interactions, layout transitions" },
      { name: "Responsive Design", level: "Advanced", detail: "Cross-device fluid grids, mobile-first touch optimization" },
      { name: "REST APIs", level: "Proficient", detail: "HTTP client integration, asynchronous data fetching" }
    ]
  },
  {
    category: "Machine Learning & AI",
    description: "Data-driven modeling, predictive algorithms, and agentic workflows",
    skills: [
      { name: "Random Forest & Classifiers", level: "Proficient", detail: "Supervised classification, feature importance tuning" },
      { name: "Machine Learning (Applied)", level: "Active Focus", detail: "Model evaluation, training splits, regression & metrics" },
      { name: "Agentic AI Frameworks", level: "Trained (36h)", durationDetail: "TSEC Value Added Course", detail: "Autonomous agents, tool execution, reasoning loops" },
      { name: "Data Analysis & Kaggle", level: "Proficient", detail: "Exploratory data analysis, cleaning, visualization" },
      { name: "AI Productivity & Debugging", level: "Certified (be10x)", detail: "Rapid presentation building, automated data workflows" }
    ]
  },
  {
    category: "Databases & Cloud Platforms",
    description: "Data persistence, cloud services, and production deployment",
    skills: [
      { name: "Supabase", level: "Proficient", detail: "PostgreSQL tables, authentication, row-level security" },
      { name: "Firebase", level: "Proficient", detail: "Realtime database, authentication, client synchronization" },
      { name: "Git & GitHub", level: "Proficient", detail: "Version control, branching workflows, GitHub Pages" },
      { name: "Vercel", level: "Proficient", detail: "Continuous deployment, serverless hosting, custom domains" }
    ]
  }
];
