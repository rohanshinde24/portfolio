import React from 'react';
import { motion } from 'framer-motion';

const Home = () => {
  return (
    <div className="w-full py-12 sm:py-20 px-4 sm:px-6 bg-canvas dark:bg-canvas-dark min-h-screen flex flex-col justify-center items-center">
      <div className="flex flex-col items-center justify-center text-center max-w-4xl mx-auto">
        <motion.h1
          id="home-heading"
          className="font-display text-5xl sm:text-7xl font-semibold mb-6 sm:mb-8 leading-[0.95] tracking-tight text-ink dark:text-ink-dark"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          Rohan Shinde
        </motion.h1>

        <p className="max-w-3xl mx-auto text-lg sm:text-xl leading-relaxed text-center text-ink dark:text-ink-dark mb-6 sm:mb-8">
          Software engineer building reliable systems across cloud
          infrastructure, data, and applied AI. I am pursuing an M.S. in
          Computer Science at USC and recently worked on fulfillment tooling at
          Amazon.
        </p>

        <p className="max-w-3xl mx-auto text-base sm:text-lg leading-relaxed text-center text-muted dark:text-muted-dark mb-10 sm:mb-12">
          My work spans Java services on AWS, data platforms for university
          teams, and production ML systems. I focus on clear engineering
          tradeoffs, measurable performance, and products people can depend on.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center w-full sm:w-auto">
          <motion.a
            href="#about"
            className="w-full sm:w-auto px-6 py-3 rounded-md text-sm font-semibold transition-colors bg-accent text-white hover:bg-accent-hover dark:bg-accent-dark dark:hover:bg-accent-darkHover text-center"
          >
            Learn More About Me
          </motion.a>

          <motion.a
            href="#projects"
            className="w-full sm:w-auto px-6 py-3 rounded-md text-sm font-semibold transition-colors border border-line text-ink hover:border-accent hover:text-accent dark:border-line-dark dark:text-ink-dark dark:hover:border-accent-dark dark:hover:text-accent-dark text-center"
          >
            View My Projects
          </motion.a>
        </div>
      </div>
    </div>
  );
};

export default Home;
