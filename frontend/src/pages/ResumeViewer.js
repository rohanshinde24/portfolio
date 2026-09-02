import { useEffect, useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { IoClose } from 'react-icons/io5';

function isMobileDevice() {
  if (typeof navigator === 'undefined') return false;
  return /iPhone|iPad|iPod|Android|webOS|BlackBerry|IEMobile|Opera Mini/i.test(
    navigator.userAgent
  );
}

export default function ResumeViewer() {
  const navigate = useNavigate();
  const location = useLocation();
  const [isMobile, setIsMobile] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    setIsMobile(isMobileDevice());
  }, []);

  useEffect(() => {
    document.title = 'Resume | Rohan Shinde';
    document.body.style.overflow = 'hidden';

    // On mobile, open PDF in new tab and close modal
    if (isMobile) {
      window.open('/resume.pdf', '_blank');
      navigate(location.state?.from || '/');
    }

    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 100);

    return () => {
      document.body.style.overflow = 'auto';
      clearTimeout(timer);
    };
    // eslint-disable-next-line
  }, [isMobile]);

  const handleClose = (e) => {
    e.preventDefault();
    e.stopPropagation();
    navigate(location.state?.from || '/');
  };

  const handleIframeLoad = () => {
    setIsLoading(false);
  };

  const handleIframeError = () => {
    setHasError(true);
    setIsLoading(false);
  };

  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) {
      handleClose(e);
    }
  };

  if (isMobile) {
    return (
      <div className="resume-viewer">
        <AnimatePresence>
          <motion.div
            key="backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.8 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 bg-black/80 backdrop-blur-sm"
            onClick={handleBackdropClick}
          />
          <motion.div
            key="resume-mobile"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 40 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-50 flex flex-col items-center justify-center px-4 py-6"
          >
            <button
              onClick={handleClose}
              className="absolute top-4 right-4 text-3xl text-ink dark:text-ink-dark hover:text-accent dark:hover:text-accent-dark z-50 p-2 bg-surface/90 dark:bg-surface-dark/90 backdrop-blur rounded-md transition-colors"
              aria-label="Close Resume"
              style={{ WebkitTapHighlightColor: 'transparent' }}
            >
              <IoClose />
            </button>
            <div className="w-full max-w-md bg-surface dark:bg-surface-dark rounded-lg border border-line dark:border-line-dark p-8 flex flex-col items-center">
              <h2 className="font-display text-2xl font-semibold mb-6 text-ink dark:text-ink-dark text-center">
                Download Resume
              </h2>
              <a
                href="/resume.pdf"
                download
                className="w-full text-center bg-accent text-white font-semibold py-3 px-6 rounded-md hover:bg-accent-hover transition-colors text-base mb-2"
                style={{ WebkitTapHighlightColor: 'transparent' }}
              >
                Download PDF
              </a>
              <span className="text-muted dark:text-muted-dark text-xs mt-2 text-center">
                If the download doesn't start,{' '}
                <a
                  href="/resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline"
                >
                  open in new tab
                </a>
                .
              </span>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    );
  }

  // Desktop behavior
  return (
    <div className="resume-viewer">
      <AnimatePresence>
        {/* Background blur */}
        <motion.div
          key="backdrop"
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.8 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed inset-0 z-40 bg-black/80 backdrop-blur-sm"
          onClick={handleBackdropClick}
        />

        {/* Resume content */}
        <motion.div
          key="resume"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 40 }}
          transition={{ duration: 0.3 }}
          className="fixed inset-0 z-50 flex flex-col items-center justify-center px-2 sm:px-4 py-4 sm:py-6"
        >
          <button
            onClick={handleClose}
            className="absolute top-4 right-4 sm:top-6 sm:right-6 text-3xl text-ink dark:text-ink-dark hover:text-accent dark:hover:text-accent-dark z-50 p-2 bg-surface/90 dark:bg-surface-dark/90 backdrop-blur rounded-md transition-colors touch-manipulation"
            aria-label="Close Resume"
            style={{ WebkitTapHighlightColor: 'transparent' }}
          >
            <IoClose />
          </button>

          <div className="w-full max-w-5xl h-[85vh] sm:h-[90vh] border border-line dark:border-line-dark rounded-lg overflow-hidden bg-surface dark:bg-surface-dark relative">
            {isLoading && (
              <div className="absolute inset-0 flex items-center justify-center bg-surface dark:bg-surface-dark">
                <div className="text-lg text-muted dark:text-muted-dark">
                  Loading resume...
                </div>
              </div>
            )}

            {hasError ? (
              <div className="absolute inset-0 flex flex-col items-center justify-center bg-surface dark:bg-surface-dark p-4">
                <div className="text-lg text-accent dark:text-accent-dark mb-4">
                  Failed to load resume
                </div>
                <a
                  href="/resume.pdf"
                  download
                  className="bg-accent text-white font-semibold py-2 px-4 rounded-md hover:bg-accent-hover transition-colors"
                >
                  Download PDF Instead
                </a>
              </div>
            ) : (
              <iframe
                src="/resume.pdf#toolbar=1&navpanes=1&scrollbar=1"
                className="w-full h-full"
                title="Rohan Shinde Resume"
                onLoad={handleIframeLoad}
                onError={handleIframeError}
                style={{ border: 'none' }}
                allowFullScreen
              />
            )}
          </div>

          <a
            href="/resume.pdf"
            download
            className="mt-4 sm:mt-6 inline-block bg-accent text-white font-semibold py-3 px-6 rounded-md hover:bg-accent-hover transition-colors text-sm sm:text-base touch-manipulation"
            style={{ WebkitTapHighlightColor: 'transparent' }}
          >
            Download PDF
          </a>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
