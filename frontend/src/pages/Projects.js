import React, { useState } from 'react';
import ProjectModal from '../components/ProjectModal';
import { motion } from 'framer-motion';

const projects = [
  {
    name: 'QueryLens',
    priority: 3,
    description:
      'Full-stack PostgreSQL performance tool with intelligent query optimization.',
    fullDescription:
      'Developed a full-stack PostgreSQL performance tool using Java & Spring Boot, with a REST API for deep query analysis, intelligent pattern detection, and automated rewriting for more efficient execution plans. Architected a modular optimization engine using the Strategy design pattern to rewrite SQL anti-patterns like non-SARGable predicates, reducing query latency over 80% on average by converting full table scans into efficient index seeks. Engineered an automated CI/CD pipeline with GitHub Actions and a comprehensive JUnit + Mockito test suite (TDD), achieving 90% code coverage on core optimizer logic.',
    tech: [
      'Java',
      'Spring Boot',
      'PostgreSQL',
      'REST API',
      'Docker',
      'TDD',
      'CI/CD',
      'JUnit',
      'Mockito',
    ],
    link: 'https://github.com/rohanshinde24/QueryLens',
    image: '/images/querylens.svg',
    category: 'Backend Development',
  },
  {
    name: 'RetentionPulse',
    priority: 4,
    description:
      'End-to-end low-latency FastAPI microservices system for customer churn prediction.',
    fullDescription:
      'Engineered an end-to-end, low-latency FastAPI microservices system using asynchronous I/O, connection pooling, and request batching and deploying it via a CI/CD pipeline with automated contract testing (pytest). Owned the full deployment and infrastructure for 4 containerized services, implementing a zero-downtime continuous deployment workflow and managing inter-service communication through a central API gateway.',
    tech: [
      'FastAPI',
      'Python',
      'TypeScript',
      'React',
      'Docker',
      'CI/CD',
      'pytest',
      'LightGBM',
    ],
    link: 'https://github.com/rohanshinde24/RetentionPulse',
    image: '/images/retentionpulse.svg',
    demo: 'https://retentionpulse-1.onrender.com',
    category: 'Full-Stack ML',
  },
  {
    name: 'FinTrackr',
    priority: 5,
    description:
      'Full-stack finance tracker with secure REST API and normalized PostgreSQL schema.',
    fullDescription:
      'Designed and built a full-stack finance tracker, implementing a secure Node.js REST API and a normalized PostgreSQL schema, while achieving 90% test coverage to ensure backend reliability and data integrity. Implemented responsive React frontend with semantic HTML/CSS and accessibility-first design, ensuring WCAG compliance; containerized with Docker and deployed to Azure App Services via GitHub Actions, reducing deployment time by 70%.',
    tech: [
      'React',
      'Node.js',
      'PostgreSQL',
      'Docker',
      'GitHub Actions',
      'Azure',
      'REST API',
    ],
    link: 'https://github.com/rohanshinde24/FinTrackr',
    image: '/images/fintrackr.svg',
    category: 'Full-Stack Development',
  },
  {
    name: 'GridSweep',
    priority: 6,
    description:
      'Enterprise-grade grid game with 96% accessibility score and comprehensive testing.',
    fullDescription:
      'Production-ready grid game implementation built with Next.js 15, React 19, and TypeScript 5. Features first-click safety with intelligent placement algorithms, full keyboard navigation (WASD/Arrow keys), WCAG 2.1 AA compliance with 96% Lighthouse accessibility score, and 95%+ test coverage using Jest and Playwright. Includes dark/light theme support, glassmorphism UI with Framer Motion animations, and comprehensive E2E testing. Demonstrates enterprise-grade architecture with pure functional game logic, immutable state updates, and performance optimization achieving 100% Best Practices and SEO scores.',
    tech: [
      'Next.js',
      'React',
      'TypeScript',
      'Tailwind CSS',
      'Framer Motion',
      'Jest',
      'Playwright',
      'Vercel',
    ],
    link: 'https://github.com/rohanshinde24/gridsweep',
    image: '/images/gridsweep.png',
    demo: 'https://gridsweep.vercel.app',
    category: 'Frontend Development',
  },
  {
    name: 'Autonomous Kart Racing Agent',
    priority: 8,
    description:
      'Reinforcement learning agents trained in Unity for optimal racing.',
    fullDescription:
      'Designed and trained multi-agent reinforcement learning karts in Unity using the ML-Agents toolkit. • Employed reward shaping and curriculum learning to accelerate convergence. • Integrated a TensorFlow backend for policy optimization, achieving a 25% reduction in lap time over baseline. • Visualized performance metrics and agent behaviors with custom in-engine overlays.',
    tech: ['Unity ML-Agents', 'Python', 'TensorFlow', 'C#'],
    // link: 'https://github.com/rohan/unity-kart-rl',
    image: '/images/kart-rl.png',
    category: 'Reinforcement Learning',
  },
  {
    name: 'SmartJournal',
    priority: 7,
    description:
      'iOS journaling app with on-device sentiment analysis and LLM summarization.',
    fullDescription:
      "Built a private journaling app powered by on-device sentiment analysis and LLM summarization. Used Core ML and Create ML to train, evaluate, and deploy sentiment and summarization models with >90% accuracy. Visualized emotional trends and journaling behavior using Apple's Charts framework. Integrated App Intents, VoiceOver accessibility, and Live Activities for a native, user-friendly experience.",
    tech: ['Swift', 'SwiftUI', 'Core ML', 'Create ML'],
    // link: 'https://github.com/rohan/SmartJournal',
    image: '/images/smartjournal.png',
    category: 'Mobile Development',
  },
  {
    name: 'LedgerFlow',
    priority: 1,
    description:
      'Financial-operations platform where deterministic services govern every agent-proposed action.',
    fullDescription:
      'Built a financial-operations platform for synthetic small-business data that handles categorization, invoice and payment reconciliation, anomaly detection, and investigation. A Java 21 and Spring Boot core owns monetary precision, accounting invariants, validation, and reconciliation candidates; a separate FastAPI agent service can only use typed read capabilities to investigate ambiguity and return proposals. The design keeps nondeterministic reasoning outside financial state changes, with deterministic validation, escalation, and auditable outcomes at every decision boundary.',
    tech: [
      'Java 21',
      'Spring Boot',
      'Python',
      'FastAPI',
      'Next.js',
      'PostgreSQL',
      'Docker',
      'REST API',
    ],
    image: '/images/ledgerflow.svg',
    category: 'Full-Stack Systems',
  },
  {
    name: 'CareRoute',
    priority: 2,
    description:
      'Safety-first referral coordination with bounded model assistance and deterministic workflow control.',
    fullDescription:
      'Built a synthetic-data referral-coordination system that places model reasoning at bounded ambiguity points without allowing it to control workflow state or booking. Two FastAPI services own separate PostgreSQL domains and communicate through a typed HTTP gateway; booking remains a single, confirmation-gated, idempotent transaction in the provider domain. Durable Inngest workflows, transactional outboxes relayed through Redis Streams, and OpenTelemetry traces support recovery and auditability. Every model proposal is schema-constrained, limited to observed candidates, deterministically validated, and fails closed to human review when invalid or uncertain.',
    tech: [
      'Python',
      'FastAPI',
      'Next.js',
      'PostgreSQL',
      'Redis',
      'Inngest',
      'LangGraph',
      'OpenTelemetry',
      'Docker',
    ],
    link: 'https://github.com/rohanshinde24/CareRoute',
    image: '/images/careroute.svg',
    category: 'Full-Stack Systems',
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState('All');
  const orderedProjects = [...projects].sort((a, b) => a.priority - b.priority);

  // Get unique categories
  const categories = [
    'All',
    ...new Set(orderedProjects.map((p) => p.category)),
  ];

  // Filter projects by category
  const filteredProjects =
    selectedCategory === 'All'
      ? orderedProjects
      : orderedProjects.filter((p) => p.category === selectedCategory);

  return (
    <div className="w-full py-12 sm:py-20 px-4 sm:px-6 bg-surface dark:bg-surface-dark">
      <h2 className="font-display text-4xl sm:text-5xl font-semibold mb-8 sm:mb-12 text-ink dark:text-ink-dark text-center">
        Projects
      </h2>

      {/* Category Filter */}
      <div className="flex flex-wrap justify-center gap-3 mb-8 sm:mb-12">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setSelectedCategory(category)}
            className={`px-4 py-2 rounded-md border text-sm font-medium transition-colors duration-200 ${
              selectedCategory === category
                ? 'bg-accent-soft border-accent text-accent dark:bg-accent-darkSoft dark:border-accent-dark dark:text-accent-dark'
                : 'bg-transparent border-line text-muted hover:border-accent hover:text-accent dark:border-line-dark dark:text-muted-dark dark:hover:border-accent-dark dark:hover:text-accent-dark'
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      <div className="grid gap-8 sm:gap-12 md:grid-cols-2 max-w-6xl mx-auto">
        {filteredProjects.map((project) => (
          <motion.div
            key={project.name}
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.3 }}
            onClick={() => setSelectedProject(project)}
            className="p-6 sm:p-8 rounded-lg bg-canvas dark:bg-canvas-dark border border-line dark:border-line-dark cursor-pointer hover:border-accent dark:hover:border-accent-dark transition-colors duration-200"
          >
            {project.image && (
              <div className="relative mb-4 sm:mb-6">
                <img
                  src={project.image}
                  alt={project.name}
                  className="w-full h-40 sm:h-48 object-cover rounded-md border border-line dark:border-line-dark"
                />
                <div className="absolute top-2 right-2">
                  <span className="px-2 py-1 text-xs font-medium bg-surface/95 dark:bg-surface-dark/95 text-ink dark:text-ink-dark border border-line dark:border-line-dark rounded">
                    {project.category}
                  </span>
                </div>
              </div>
            )}
            <h3 className="font-display text-2xl font-semibold text-ink dark:text-ink-dark mb-3">
              {project.name}
            </h3>
            <p className="text-muted dark:text-muted-dark mb-4 text-sm sm:text-base">
              {project.description}
            </p>
            <div className="flex flex-wrap gap-2 mb-4">
              {project.tech.slice(0, 4).map((tech) => (
                <span
                  key={tech}
                  className="px-2 py-1 text-xs bg-accent-soft dark:bg-accent-darkSoft text-muted dark:text-muted-dark rounded"
                >
                  {tech}
                </span>
              ))}
              {project.tech.length > 4 && (
                <span className="px-2 py-1 text-xs bg-accent-soft dark:bg-accent-darkSoft text-muted dark:text-muted-dark rounded">
                  +{project.tech.length - 4} more
                </span>
              )}
            </div>
            {project.demo && (
              <div className="text-sm text-accent dark:text-accent-dark font-medium">
                Live demo available
              </div>
            )}
          </motion.div>
        ))}
      </div>

      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </div>
  );
}
