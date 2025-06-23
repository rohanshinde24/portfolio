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
      className="text-xl text-gray-700 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400 transition"
      aria-label="Toggle Theme"
    >
      {theme === 'dark' ? <HiSun /> : <HiMoon />}
    </button>
  );
}

export default ThemeToggle;
