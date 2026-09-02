import { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-scroll';
import { useNavigate } from 'react-router-dom';
import { useActiveSection } from '../context/ActiveSectionContext';
import { HiMenu, HiX } from 'react-icons/hi';
import ThemeToggle from './ThemeToggle';

const navItems = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'experience', label: 'Experience' },
  { id: 'projects', label: 'Projects' },
  { id: 'contact', label: 'Contact' },
];

function isMobileDevice() {
  if (typeof navigator === 'undefined') return false;
  return /iPhone|iPad|iPod|Android|webOS|BlackBerry|IEMobile|Opera Mini/i.test(
    navigator.userAgent
  );
}

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
  const { activeId } = useActiveSection();

  const closeMenu = () => setIsOpen(false);

  const navLinkClass = (id) =>
    `cursor-pointer transition relative 
     ${
       activeId === id
         ? 'text-accent dark:text-accent-dark font-semibold underline underline-offset-4 decoration-2'
         : 'text-muted dark:text-muted-dark hover:text-accent dark:hover:text-accent-dark'
     }`;

  const handleResumeClick = (e) => {
    e.preventDefault();
    e.stopPropagation();
    if (isMobileDevice()) {
      window.open('/resume.pdf', '_blank');
      closeMenu();
      return;
    }
    closeMenu();
    setTimeout(() => {
      navigate('/resume', { state: { from: window.location.pathname } });
    }, 100);
  };

  return (
    <header className="fixed top-0 left-0 w-full z-50 backdrop-blur bg-surface/90 dark:bg-surface-dark/90 border-b border-line dark:border-line-dark">
      <nav className="max-w-6xl mx-auto px-4 sm:px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <h1 className="font-display text-2xl font-semibold text-ink dark:text-ink-dark tracking-tight">
          Rohan Shinde
        </h1>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8 text-sm font-medium">
          {navItems.map((item) => (
            <Link
              key={item.id}
              to={item.id}
              smooth
              duration={500}
              offset={-64}
              className={navLinkClass(item.id)}
            >
              {item.label}
            </Link>
          ))}
          <button
            onClick={handleResumeClick}
            className="px-4 py-2 border border-line dark:border-line-dark rounded-md hover:border-accent hover:text-accent dark:hover:border-accent-dark dark:hover:text-accent-dark transition-colors text-ink dark:text-ink-dark"
          >
            Resume
          </button>
          <ThemeToggle />
        </div>

        {/* Hamburger Icon */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-ink dark:text-ink-dark text-2xl p-2"
          aria-label="Toggle navigation"
        >
          {isOpen ? <HiX /> : <HiMenu />}
        </button>
      </nav>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden bg-surface dark:bg-surface-dark border-t border-line dark:border-line-dark px-4 sm:px-6 py-6 flex flex-col items-center gap-6 text-base font-medium text-ink dark:text-ink-dark"
        >
          <ThemeToggle />
          {navItems.map((item) => (
            <Link
              key={item.id}
              to={item.id}
              smooth
              duration={500}
              offset={-64}
              onClick={closeMenu}
              className={navLinkClass(item.id)}
            >
              {item.label}
            </Link>
          ))}
          <button
            onClick={handleResumeClick}
            className="w-full text-center border border-line dark:border-line-dark px-4 py-3 rounded-md text-ink dark:text-ink-dark hover:border-accent hover:text-accent dark:hover:border-accent-dark dark:hover:text-accent-dark transition-colors font-medium"
          >
            Resume
          </button>
        </motion.div>
      )}
    </header>
  );
}
