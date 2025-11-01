export const experienceData = [
  {
    company: 'University of Southern California',
    logo: '/assets/logos/usc.svg',
    location: 'Los Angeles, CA',
    role: 'Software Engineer (Student Worker)',
    type: 'Part-time (On Campus)',
    period: 'May 2025 – Present',
    highlights: [
      'Developed full-stack search solution using React/TypeScript frontend with SharePoint REST API backend, implementing NLP-powered intent detection and similarity scoring algorithms for real-time suggestions',
      'Engineered automated data pipeline using Python with multi-API integration (Tableau + SharePoint), implementing OAuth authentication and distributed caching for 440+ users across 19 administrative groups',
      'Built custom monitoring integration between IBM Cognos Analytics and Azure Monitor using REST APIs and Python middleware, reducing monitoring overhead by 40%',
      'Refactored legacy PostgreSQL pipelines using set-based operations and strategic indexing, reducing runtime by 80%',
    ],
  },
  {
    company: 'DMI Finance',
    logo: '/assets/logos/dmi.svg',
    location: 'Delhi, India',
    role: 'Software Engineer Intern (Full Stack & AI)',
    type: 'Internship',
    period: 'Jul 2024 – Oct 2024',
    highlights: [
      'Optimized a low-latency C++ backend inference service by removing hot-path bottlenecks and improving concurrency, delivering 2x throughput on the same hardware and cutting response time from 500 ms to 250 ms for 95% of requests',
      'Re-architected BERT-based NLP pipeline with automated training/eval workflows and real-time metrics, boosting classification accuracy to 98% on multi-class intent labels (+17% over baseline)',
      'Designed a scalable LLM powered hybrid streaming and batch pipeline using vLLM and Groq for synthetic data and labels, enabling concurrent training of domain-specific models across 5+ financial use cases',
      'Fine-tuned LLaMA 3.1 with QLoRA, improving precision from 0.26 to 0.75 across 35 classes (+190% relative; 2.9×)',
    ],
  },
  {
    company: 'ResoluteAI Software',
    logo: '/assets/logos/resolute-ai.svg',
    location: 'Bangalore, India',
    role: 'AI Engineer Intern',
    type: 'Internship',
    period: 'Dec 2023 – May 2024',
    highlights: [
      'Architected a scalable application by delivering FastAPI microservices with Google OAuth 2.0, JWT, and end-to-end HTTPS behind Nginx, added validation, retries, and structured logging',
      'Engineered containerized, scalable embedding services using Pinecone and FAISS for secure vector search, optimizing index configurations to achieve sub-100ms latency and a 20% lift in semantic recall',
    ],
  },
];
