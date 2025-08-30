import { motion, AnimatePresence } from 'framer-motion';

export default function ProjectModal({ project, onClose }) {
  return (
    <AnimatePresence>
      {project && (
        <motion.div
          className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div
            className="relative w-full max-w-2xl p-4 sm:p-6 bg-white dark:bg-neutral-900 rounded-xl shadow-lg overflow-y-auto max-h-[90vh]"
            initial={{ scale: 0.8, y: 20 }}
            animate={{ scale: 1, y: 0 }}
            exit={{ scale: 0.8, y: 20 }}
            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
          >
            <div className="w-12 h-1.5 bg-gray-300 dark:bg-gray-600 rounded-full mx-auto mb-4" />
            <button
              onClick={onClose}
              className="absolute top-2 right-4 text-gray-400 hover:text-gray-600 dark:hover:text-white text-xl font-bold"
            >
              ✕
            </button>

            {/* Header */}
            <div className="mb-6">
              <div className="flex items-center gap-3 mb-3">
                <h3 className="text-2xl font-bold text-primary-light dark:text-primary-dark">
                  {project.name}
                </h3>
                <span className="px-3 py-1 text-xs font-medium bg-primary-light dark:bg-primary-dark text-white rounded-full">
                  {project.category}
                </span>
              </div>

              <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
                {project.description}
              </p>
            </div>

            {/* Project Image */}
            {project.image && (
              <div className="mb-6">
                <img
                  src={project.image}
                  alt={project.name}
                  className="w-full h-48 object-cover rounded-lg shadow-md"
                />
              </div>
            )}

            {/* Tech Stack */}
            <div className="mb-6">
              <h4 className="text-lg font-semibold text-primary-light dark:text-primary-dark mb-3">
                Technologies Used
              </h4>
              <div className="flex flex-wrap gap-2">
                {project.tech.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 text-sm bg-gray-100 dark:bg-neutral-800 text-gray-700 dark:text-gray-300 rounded-full border border-gray-200 dark:border-neutral-700"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Full Description */}
            <div className="mb-6">
              <h4 className="text-lg font-semibold text-primary-light dark:text-primary-dark mb-3">
                Project Overview
              </h4>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-sm">
                {project.fullDescription}
              </p>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-3">
              {project.link && (
                <a
                  href={project.link}
                  className="flex-1 px-6 py-3 bg-primary-light dark:bg-primary-dark text-white font-medium rounded-lg hover:bg-primary-dark dark:hover:bg-primary-light transition-colors duration-200 text-center"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  📁 View on GitHub
                </a>
              )}

              {project.demo && (
                <a
                  href={project.demo}
                  className={`px-6 py-3 bg-accent-light dark:bg-accent-dark text-white font-medium rounded-lg hover:bg-accent-dark dark:hover:bg-accent-light transition-colors duration-200 text-center ${
                    project.link ? 'flex-1' : 'w-full'
                  }`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  🌐 Live Demo
                </a>
              )}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
