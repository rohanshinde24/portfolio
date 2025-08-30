import React, { useState } from 'react';
import ProjectModal from '../components/ProjectModal';
import { motion } from 'framer-motion';

const projects = [
  {
    name: 'QueryLens',
    description:
      'Intelligent SQL query analysis and optimization tool with automated query rewriting.',
    fullDescription:
      'A Spring Boot-based SQL query analysis tool that provides intelligent insights and automated query rewriting for PostgreSQL databases. Features include performance metrics extraction, pattern detection for common SQL anti-patterns (SELECT *, scalar subqueries, missing indexes), and automated query optimization. Built with Spring Boot 3.5.3, Java 21, PostgreSQL, and JPA. Includes comprehensive testing with JUnit, Mockito, and AssertJ.',
    tech: [
      'Java 21',
      'Spring Boot 3.5.3',
      'PostgreSQL',
      'JPA',
      'Maven',
      'JUnit',
      'Mockito',
    ],
    link: 'https://github.com/rohanshinde24/QueryLens',
    image: '/images/querylens.svg',
    demo: 'https://querylens-demo.com',
    category: 'Backend Development',
  },
  {
    name: 'RetentionPulse',
    description:
      'Full-stack customer churn prediction application with ML-powered insights.',
    fullDescription:
      'A production-ready customer churn prediction system built with FastAPI microservices and React frontend. Features real-time churn probability scoring using LightGBM models, SHAP-based feature explanations, and a modern responsive UI. Deployed on Render with Docker containers. The system includes prediction service, explainability service, and API gateway, demonstrating end-to-end ML model deployment and full-stack development capabilities.',
    tech: [
      'Python 3.11',
      'FastAPI',
      'React',
      'TypeScript',
      'LightGBM',
      'SHAP',
      'Docker',
      'Render',
    ],
    link: 'https://github.com/rohanshinde24/RetentionPulse',
    image: '/images/retentionpulse.svg',
    demo: 'https://retentionpulse-1.onrender.com',
    category: 'Full-Stack ML',
  },
  {
    name: 'Brain Tumor Classifier',
    description: 'Deep learning classifier for MRI scans using ResNet50.',
    fullDescription:
      'This project utilizes a deep convolutional neural network (ResNet50) for classifying MRI brain scans into tumor or non-tumor categories. Leveraged data augmentation, transfer learning, and early stopping to reach over 92% validation accuracy on a balanced dataset. Trained and evaluated using TensorFlow and Keras.',
    tech: ['Python', 'TensorFlow', 'Keras'],
    // link: 'https://github.com/rohan/brain-tumor-classifier',
    image: '/images/brain-tumor.png',
    category: 'Machine Learning',
  },
  {
    name: 'Movie Recommender System',
    description: 'Collaborative filtering system using Surprise and TMDB APIs.',
    fullDescription:
      'Built a movie recommendation system using collaborative filtering and matrix factorization. Integrated TMDB APIs for movie metadata and visuals. Implemented KNN-based user-item similarity using Surprise, with evaluation metrics like RMSE and MAE on the MovieLens dataset.',
    tech: ['Python', 'Surprise', 'Pandas', 'TMDB API'],
    link: 'https://github.com/rohanshinde24/movie-rec',
    image: '/images/movie-recommender.png',
    category: 'Machine Learning',
  },
  {
    name: 'Autonomous Kart Racing Agent',
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
    description:
      'iOS journaling app with on-device sentiment analysis and LLM summarization.',
    fullDescription:
      "Built a private journaling app powered by on-device sentiment analysis and LLM summarization. Used Core ML and Create ML to train, evaluate, and deploy sentiment and summarization models with >90% accuracy. Visualized emotional trends and journaling behavior using Apple's Charts framework. Integrated App Intents, VoiceOver accessibility, and Live Activities for a native, user-friendly experience.",
    tech: ['Swift', 'SwiftUI', 'Core ML', 'Create ML'],
    // link: 'https://github.com/rohan/SmartJournal',
    image: '/images/smartjournal.png',
    category: 'Mobile Development',
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState('All');

  // Get unique categories
  const categories = ['All', ...new Set(projects.map((p) => p.category))];

  // Filter projects by category
  const filteredProjects =
    selectedCategory === 'All'
      ? projects
      : projects.filter((p) => p.category === selectedCategory);

  return (
    <div className="w-full py-8 sm:py-12 px-4 sm:px-6 bg-white dark:bg-neutral-900">
      <h2 className="text-4xl font-extrabold mb-8 sm:mb-12 text-primary-light dark:text-primary-dark drop-shadow-lg text-center">
        Projects
      </h2>

      {/* Category Filter */}
      <div className="flex flex-wrap justify-center gap-3 mb-8 sm:mb-12">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setSelectedCategory(category)}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
              selectedCategory === category
                ? 'bg-primary-light dark:bg-primary-dark text-white shadow-lg'
                : 'bg-gray-200 dark:bg-neutral-700 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-neutral-600'
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
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            onClick={() => setSelectedProject(project)}
            className="p-6 sm:p-8 rounded-xl bg-white dark:bg-neutral-900 shadow-lg border border-gray-200 dark:border-neutral-700 cursor-pointer hover:shadow-xl transition-shadow duration-200"
          >
            {project.image && (
              <div className="relative mb-4 sm:mb-6">
                <img
                  src={project.image}
                  alt={project.name}
                  className="w-full h-40 sm:h-48 object-cover rounded-md"
                />
                <div className="absolute top-2 right-2">
                  <span className="px-2 py-1 text-xs font-medium bg-primary-light dark:bg-primary-dark text-white rounded-full">
                    {project.category}
                  </span>
                </div>
              </div>
            )}
            <h3 className="text-xl sm:text-2xl font-semibold text-primary-light dark:text-primary-dark mb-3">
              {project.name}
            </h3>
            <p className="text-gray-700 dark:text-gray-300 mb-4 text-sm sm:text-base">
              {project.description}
            </p>
            <div className="flex flex-wrap gap-2 mb-4">
              {project.tech.slice(0, 4).map((tech) => (
                <span
                  key={tech}
                  className="px-2 py-1 text-xs bg-gray-100 dark:bg-neutral-800 text-gray-600 dark:text-gray-400 rounded"
                >
                  {tech}
                </span>
              ))}
              {project.tech.length > 4 && (
                <span className="px-2 py-1 text-xs bg-gray-100 dark:bg-neutral-800 text-gray-600 dark:text-gray-400 rounded">
                  +{project.tech.length - 4} more
                </span>
              )}
            </div>
            {project.demo && (
              <div className="text-sm text-accent-light dark:text-accent-dark font-medium">
                🌐 Live Demo Available
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
