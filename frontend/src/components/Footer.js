import { motion } from 'framer-motion';
import { FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

function isMobileDevice() {
  if (typeof navigator === 'undefined') return false;
  return /iPhone|iPad|iPod|Android|webOS|BlackBerry|IEMobile|Opera Mini/i.test(
    navigator.userAgent
  );
}

export default function Footer() {
  const navigate = useNavigate();

  const handleResumeClick = (e) => {
    e.preventDefault();
    e.stopPropagation();
    if (isMobileDevice()) {
      window.open('/resume.pdf', '_blank');
      return;
    }
    navigate('/resume', { state: { from: window.location.pathname } });
  };

  return (
    <footer className="w-full bg-surface dark:bg-surface-dark border-t border-line dark:border-line-dark py-10 mt-20">
      <motion.div
        className="max-w-6xl mx-auto px-6 text-center flex flex-col items-center gap-6"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.6 }}
      >
        {/* Resume Button */}
        <button
          onClick={handleResumeClick}
          className="px-5 py-2 border border-line dark:border-line-dark rounded-md text-ink dark:text-ink-dark hover:border-accent hover:text-accent dark:hover:border-accent-dark dark:hover:text-accent-dark transition-colors"
        >
          Resume
        </button>

        {/* Social Icons */}
        <div className="flex justify-center items-center gap-6 text-xl text-muted dark:text-muted-dark mx-auto">
          <a
            href="mailto:rohanshi@usc.edu"
            aria-label="Email"
            className="hover:text-accent dark:hover:text-accent-dark transition-colors duration-200"
          >
            <FaEnvelope />
          </a>
          <a
            href="https://linkedin.com/in/rohanshinde24"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="hover:text-accent dark:hover:text-accent-dark transition-colors duration-200"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://github.com/rohanshinde24"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="hover:text-accent dark:hover:text-accent-dark transition-colors duration-200"
          >
            <FaGithub />
          </a>
        </div>

        {/* Copyright */}
        <p className="text-sm text-muted dark:text-muted-dark">
          © {new Date().getFullYear()} Rohan Shinde. All rights reserved.
        </p>
      </motion.div>
    </footer>
  );
}
