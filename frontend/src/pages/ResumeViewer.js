import { useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { IoClose } from 'react-icons/io5';

export default function ResumeViewer() {
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    document.title = 'Resume | Rohan Shinde';
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, []);

  const handleClose = () => {
    navigate(location.state?.from || '/');
  };

  return (
    <AnimatePresence>
      {/* Background blur */}
      <motion.div
        key="backdrop"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.6 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.3 }}
        className="fixed inset-0 z-40 bg-black/60 backdrop-blur-sm"
        onClick={handleClose}
      />

      {/* Resume content */}
      <motion.div
        key="resume"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 40 }}
        transition={{ duration: 0.3 }}
        className="fixed inset-0 z-50 flex flex-col items-center justify-center px-4 py-6"
      >
        <button
          onClick={handleClose}
          className="absolute top-6 right-6 text-3xl text-white hover:text-red-400 z-50"
          aria-label="Close Resume"
        >
          <IoClose />
        </button>

        <div className="w-full max-w-5xl h-[75vh] sm:h-[85vh] border border-white/20 dark:border-neutral-700 rounded-lg shadow-lg overflow-hidden bg-white dark:bg-neutral-900">
          <iframe
            src="/resume.pdf"
            className="w-full h-full"
            title="Rohan Shinde Resume"
          />
        </div>

        <a
          href="/resume.pdf"
          download
          className="mt-6 inline-block bg-blue-600 text-white font-semibold py-2 px-5 rounded hover:bg-blue-700 transition"
        >
          Download PDF
        </a>
      </motion.div>
    </AnimatePresence>
  );
}
