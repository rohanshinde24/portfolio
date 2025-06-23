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
          {/* below without drag version */}
          {/* <motion.div
            className="relative w-full max-w-xl p-4 sm:p-6 bg-white dark:bg-neutral-900 rounded-xl shadow-lg overflow-y-auto max-h-[90vh]"
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            exit={{ scale: 0.8 }}
          > */}
          <motion.div
            className="relative w-full max-w-xl p-4 sm:p-6 bg-white dark:bg-neutral-900 rounded-xl shadow-lg"
            drag="y"
            dragConstraints={{ top: 0, bottom: 100 }}
            dragElastic={0.2}
            onDragEnd={(event, info) => {
              if (info.offset.y > 100) onClose(); // close modal on downward swipe
            }}
          >
            <div className="w-12 h-1.5 bg-gray-300 dark:bg-gray-600 rounded-full mx-auto mb-4" />
            <button
              onClick={onClose}
              className="absolute top-2 right-4 text-gray-400 hover:text-gray-600 dark:hover:text-white"
            >
              ✕
            </button>

            <h3 className="text-2xl font-bold text-primary-light dark:text-primary-dark mb-2">
              {project.name}
            </h3>

            <p className="text-sm text-accent-light dark:text-accent-dark mb-2">
              {project.tech.join(', ')}
            </p>

            {project.image && (
              <img
                src={project.image}
                alt={project.name}
                className="w-full h-48 object-cover rounded mb-4"
              />
            )}

            <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
              {project.fullDescription}
            </p>

            <a
              href={project.link}
              className="text-blue-600 dark:text-blue-400 hover:underline font-medium"
              target="_blank"
              rel="noopener noreferrer"
            >
              View on GitHub →
            </a>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
