import React, { useState } from 'react';
import SectionWrapper from '../components/SectionWrapper';
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
    image: '/images/brain-tumor.png', // Optional path
  },
  {
    name: 'Movie Recommender System',
    description: 'Collaborative filtering system using Surprise and TMDB APIs.',
    fullDescription:
      'Built a movie recommendation system using collaborative filtering and matrix factorization. Integrated TMDB APIs for movie metadata and visuals. Implemented KNN-based user-item similarity using Surprise, with evaluation metrics like RMSE, MAE on MovieLens dataset.',
    tech: ['Python', 'Surprise', 'Pandas', 'TMDB API'],
    link: 'https://github.com/rohan/movie-recommender',
    image: '/images/movie-recommender.png',
  },
];
const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

// export default Projects;
const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <SectionWrapper id="projects">
      <h2 className="text-4xl font-extrabold mb-12 text-primary-light dark:text-primary-dark drop-shadow-lg text-center">
        Projects
      </h2>

      <div className="grid gap-10 md:grid-cols-2 max-w-5xl mx-auto px-4">
        {projects.map((project) => (
          <motion.div
            key={project.name}
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            onClick={() => setSelectedProject(project)}
            className="p-6 rounded-xl bg-white dark:bg-neutral-900 shadow-lg border border-gray-200 dark:border-neutral-700 cursor-pointer"
          >
            <h3 className="text-2xl font-semibold text-primary-light dark:text-primary-dark mb-2">
              {project.name}
            </h3>
            <p className="text-gray-700 dark:text-gray-300 mb-3">
              {project.description}
            </p>
            <p className="text-sm text-accent-light dark:text-accent-dark">
              {project.tech.join(', ')}
            </p>
          </motion.div>
        ))}
      </div>

      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </SectionWrapper>
  );
};
export default Projects;
