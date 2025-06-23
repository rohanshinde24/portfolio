import { useEffect, useState } from 'react';

const ScrollProgressBar = () => {
  const [scroll, setScroll] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      const progress = (scrollTop / docHeight) * 100;
      setScroll(progress);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="fixed top-0 left-0 w-full h-1 z-[9999] bg-transparent">
      <div
        className="h-full bg-blue-600 dark:bg-blue-400 transition-all duration-200 ease-out"
        style={{ width: `${scroll}%` }}
      />
    </div>
  );
};

export default ScrollProgressBar;
