import React, { useState } from 'react';
import ProjectModal from '../components/ProjectModal';
import { motion } from 'framer-motion';

const projects = [
  {
    name: 'Brain Tumor Classifier',
    description: 'Deep learning classifier for MRI scans using ResNet50.',
    fullDescription:
      'This project utilizes a deep convolutional neural network (ResNet50) for classifying MRI brain scans into tumor or non-tumor categories. Leveraged data augmentation, transfer learning, and early stopping to reach over 92% validation accuracy on a balanced dataset. Trained and evaluated using TensorFlow and Keras.',
    tech: ['Python', 'TensorFlow', 'Keras'],
    link: 'https://github.com/rohan/brain-tumor-classifier',
    image: '/images/brain-tumor.png',
  },
  {
    name: 'Movie Recommender System',
    description: 'Collaborative filtering system using Surprise and TMDB APIs.',
    fullDescription:
      'Built a movie recommendation system using collaborative filtering and matrix factorization. Integrated TMDB APIs for movie metadata and visuals. Implemented KNN-based user-item similarity using Surprise, with evaluation metrics like RMSE and MAE on the MovieLens dataset.',
    tech: ['Python', 'Surprise', 'Pandas', 'TMDB API'],
    link: 'https://github.com/rohan/movie-recommender',
    image: '/images/movie-recommender.png',
  },
  {
    name: 'Autonomous Kart Racing Agent',
    description:
      'Reinforcement learning agents trained in Unity for optimal racing.',
    fullDescription:
      'Designed and trained multi-agent reinforcement learning karts in Unity using the ML-Agents toolkit. • Employed reward shaping and curriculum learning to accelerate convergence. • Integrated a TensorFlow backend for policy optimization, achieving a 25% reduction in lap time over baseline. • Visualized performance metrics and agent behaviors with custom in-engine overlays.',
    tech: ['Unity ML-Agents', 'Python', 'TensorFlow', 'C#'],
    link: 'https://github.com/rohan/unity-kart-rl',
    image: '/images/kart-rl.png',
  },
  {
    name: 'SmartJournal',
    description:
      'iOS journaling app with on-device sentiment analysis and LLM summarization.',
    fullDescription:
      "Built a private journaling app powered by on-device sentiment analysis and LLM summarization. Used Core ML and Create ML to train, evaluate, and deploy sentiment and summarization models with >90% accuracy. Visualized emotional trends and journaling behavior using Apple's Charts framework. Integrated App Intents, VoiceOver accessibility, and Live Activities for a native, user-friendly experience.",
    tech: ['Swift', 'SwiftUI', 'Core ML', 'Create ML'],
    link: 'https://github.com/rohan/SmartJournal',
    image: '/images/smartjournal.png',
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <div className="w-full py-8 sm:py-12 px-4 sm:px-6 bg-white dark:bg-neutral-900">
      <h2 className="text-4xl font-extrabold mb-12 sm:mb-16 text-primary-light dark:text-primary-dark drop-shadow-lg text-center">
        Projects
      </h2>

      <div className="grid gap-8 sm:gap-12 md:grid-cols-2 max-w-5xl mx-auto">
        {projects.map((project) => (
          <motion.div
            key={project.name}
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.3 }}
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            onClick={() => setSelectedProject(project)}
            className="p-6 sm:p-8 rounded-xl bg-white dark:bg-neutral-900 shadow-lg border border-gray-200 dark:border-neutral-700 cursor-pointer"
          >
            {project.image && (
              <img
                src={project.image}
                alt={project.name}
                className="w-full h-40 sm:h-48 object-cover rounded-md mb-4 sm:mb-6"
              />
            )}
            <h3 className="text-xl sm:text-2xl font-semibold text-primary-light dark:text-primary-dark mb-3">
              {project.name}
            </h3>
            <p className="text-gray-700 dark:text-gray-300 mb-4 text-sm sm:text-base">
              {project.description}
            </p>
            <p className="text-sm text-accent-light dark:text-accent-dark font-medium">
              {project.tech.join(', ')}
            </p>
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
