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
          onClick={onClose}
        >
          <motion.div
            className="relative w-full max-w-2xl p-5 sm:p-8 bg-surface dark:bg-surface-dark rounded-lg border border-line dark:border-line-dark overflow-y-auto max-h-[90vh]"
            initial={{ scale: 0.8, y: 20 }}
            animate={{ scale: 1, y: 0 }}
            exit={{ scale: 0.8, y: 20 }}
            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
            onClick={(event) => event.stopPropagation()}
          >
            <button
              onClick={onClose}
              className="absolute top-3 right-4 text-muted hover:text-ink dark:text-muted-dark dark:hover:text-ink-dark text-xl font-bold"
              aria-label="Close project details"
            >
              ✕
            </button>

            {/* Header */}
            <div className="mb-6">
              <div className="flex items-center gap-3 mb-3">
                <h3 className="font-display text-3xl font-semibold text-ink dark:text-ink-dark">
                  {project.name}
                </h3>
                <span className="px-3 py-1 text-xs font-medium bg-accent-soft dark:bg-accent-darkSoft text-accent dark:text-accent-dark rounded">
                  {project.category}
                </span>
              </div>

              <p className="text-muted dark:text-muted-dark text-sm leading-relaxed">
                {project.description}
              </p>
            </div>

            {/* Project Image */}
            {project.image && (
              <div className="mb-6">
                <img
                  src={project.image}
                  alt={project.name}
                  className="w-full h-48 object-cover rounded-md border border-line dark:border-line-dark"
                />
              </div>
            )}

            {/* Tech Stack */}
            <div className="mb-6">
              <h4 className="text-lg font-semibold text-ink dark:text-ink-dark mb-3">
                Technologies Used
              </h4>
              <div className="flex flex-wrap gap-2">
                {project.tech.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 text-sm bg-accent-soft dark:bg-accent-darkSoft text-muted dark:text-muted-dark rounded border border-line dark:border-line-dark"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Full Description */}
            <div className="mb-6">
              <h4 className="text-lg font-semibold text-ink dark:text-ink-dark mb-3">
                Project Overview
              </h4>
              <p className="text-muted dark:text-muted-dark leading-relaxed text-sm">
                {project.fullDescription}
              </p>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-3">
              {project.link && (
                <a
                  href={project.link}
                  className="flex-1 px-6 py-3 bg-ink dark:bg-ink-dark text-surface dark:text-surface-dark font-medium rounded-md hover:bg-accent dark:hover:bg-accent-dark transition-colors duration-200 text-center"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View on GitHub
                </a>
              )}

              {project.demo && (
                <a
                  href={project.demo}
                  className={`px-6 py-3 bg-accent dark:bg-accent-dark text-white font-medium rounded-md hover:bg-accent-hover dark:hover:bg-accent-darkHover transition-colors duration-200 text-center ${
                    project.link ? 'flex-1' : 'w-full'
                  }`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Open Live Demo
                </a>
              )}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
