import React from 'react';
import { motion } from 'framer-motion';

const Home = () => {
  return (
    <div className="w-full py-8 sm:py-12 px-4 sm:px-6 bg-white dark:bg-neutral-900 min-h-screen flex flex-col justify-center items-center">
      <div className="flex flex-col items-center justify-center text-center max-w-4xl mx-auto">
        <motion.h1
          id="home-heading"
          className="text-4xl sm:text-6xl font-extrabold mb-6 sm:mb-8 leading-snug sm:leading-tight tracking-tight text-primary-light dark:text-primary-dark drop-shadow-lg"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          Hi, I'm Rohan 👋
        </motion.h1>

        <p className="max-w-3xl text-base sm:text-lg leading-relaxed text-gray-700 dark:text-gray-300 mb-6 sm:mb-8 drop-shadow-sm">
          I'm a Master's student in Computer Science at USC, specializing in AI
          and ML. My passion lies in building data-driven solutions and
          generative AI models that create impact.
        </p>

        <p className="max-w-2xl text-sm sm:text-base leading-relaxed sm:leading-loose text-gray-600 dark:text-gray-400 mb-10 sm:mb-12">
          With internships at DMI Finance and ResoluteAI, I've fine-tuned LLMs,
          developed data-visualization tools, and optimized ML pipelines. Always
          exploring, always building.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center w-full sm:w-auto">
          <motion.a
            href="#about"
            className="w-full sm:w-auto px-6 py-3 rounded-xl text-sm font-semibold transition bg-primary-light text-white hover:bg-accent-light dark:bg-primary-dark dark:hover:bg-accent-dark text-center"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Learn More About Me
          </motion.a>

          <motion.a
            href="#projects"
            className="w-full sm:w-auto px-6 py-3 rounded-xl text-sm font-semibold transition border border-primary-light text-primary-light hover:bg-blue-50 dark:text-primary-dark dark:border-primary-dark dark:hover:bg-neutral-800 text-center"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            View My Projects
          </motion.a>
        </div>
      </div>
    </div>
  );
};

export default Home;

// ---

// src/pages/Home.jsx
// import React from 'react';
// import SectionWrapper from '../components/SectionWrapper';
// import { motion } from 'framer-motion';
// import HeroIllustration from '../assets/logo.svg'; // you can swap in any SVG/PNG

// const container = {
//   hidden: {},
//   show: {
//     transition: { staggerChildren: 0.2 },
//   },
// };
// const fadeInUp = {
//   hidden: { opacity: 0, y: 20 },
//   show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
// };

// const Home = () => {
//   return (
//     <SectionWrapper id="home" fullWidth>
//       <motion.div
//         variants={container}
//         initial="hidden"
//         animate="show"
//         className="grid grid-cols-1 lg:grid-cols-2 items-center gap-12 px-4 sm:px-6 lg:px-8 py-16"
//       >
//         {/* Left side: text & CTAs */}
//         <motion.div variants={fadeInUp} className="space-y-6">
//           <h1
//             id="home-heading"
//             className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-primary-light dark:text-primary-dark leading-tight tracking-tight drop-shadow-lg"
//           >
//             Hi, I'm Rohan Shinde 👋
//           </h1>

//           <p className="text-gray-700 dark:text-gray-300 text-base sm:text-lg lg:text-xl leading-relaxed">
//             I'm a Master's student in Computer Science at USC specializing in
//             Artificial Intelligence and Machine Learning. I build data-driven
//             solutions and generative AI models that solve complex problems and
//             create real impact.
//           </p>

//           <p className="text-gray-600 dark:text-gray-400 text-sm sm:text-base lg:text-lg leading-relaxed">
//             With hands-on experience at DMI Finance and ResoluteAI, I've
//             fine-tuned LLMs, crafted data visualizations, and optimized ML
//             pipelines—always learning, always building.
//           </p>

//           <div className="flex flex-col sm:flex-row gap-4 pt-4">
//             <motion.a
//               variants={fadeInUp}
//               href="#about"
//               className="inline-block px-6 py-3 bg-primary-light text-white rounded-xl text-sm sm:text-base font-semibold shadow-lg hover:bg-accent-light transition"
//               whileHover={{ scale: 1.05 }}
//               whileTap={{ scale: 0.95 }}
//             >
//               Learn More About Me
//             </motion.a>

//             <motion.a
//               variants={fadeInUp}
//               href="#projects"
//               className="inline-block px-6 py-3 border-2 border-primary-light text-primary-light rounded-xl text-sm sm:text-base font-semibold hover:bg-primary-light hover:text-white transition"
//               whileHover={{ scale: 1.05 }}
//               whileTap={{ scale: 0.95 }}
//             >
//               View My Projects
//             </motion.a>
//           </div>
//         </motion.div>

//         {/* Right side: illustration */}
//         <motion.div
//           variants={fadeInUp}
//           className="hidden lg:flex justify-center"
//         >
//           <img
//             src={HeroIllustration}
//             alt="Rohan Shinde Illustration"
//             className="w-80 h-auto"
//           />
//         </motion.div>
//       </motion.div>
//     </SectionWrapper>
//   );
// };

// export default Home;
