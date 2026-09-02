import { useState, useEffect } from 'react';
import { HiMoon, HiSun } from 'react-icons/hi';

function ThemeToggle() {
  const [theme, setTheme] = useState(localStorage.getItem('theme') || 'light');

  useEffect(() => {
    const root = window.document.documentElement;
    if (theme === 'dark') {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };

  return (
    <button
      onClick={toggleTheme}
      className="text-xl text-muted dark:text-muted-dark hover:text-accent dark:hover:text-accent-dark transition-colors"
      aria-label="Toggle Theme"
    >
      {theme === 'dark' ? <HiSun /> : <HiMoon />}
    </button>
  );
}

export default ThemeToggle;
