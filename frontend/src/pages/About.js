// src/pages/About.jsx
import React from 'react';
import { motion } from 'framer-motion';
import { FaFilePdf, FaLightbulb, FaUniversity } from 'react-icons/fa';
import SectionWrapper from '../components/SectionWrapper';
import { education } from '../data/education';

export default function About() {
  return (
    <SectionWrapper id="about">
      {/* Section Title */}
      <motion.h2
        className="text-4xl font-extrabold mb-6 text-center text-primary-light dark:text-primary-dark"
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
      >
        Get to Know Me
      </motion.h2>

      {/* Narrative Intro */}
      <motion.p
        className="max-w-2xl mx-auto text-center text-gray-700 dark:text-gray-300 mb-12 leading-relaxed"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
      >
        I believe the best technology grows out of{' '}
        <strong>real human needs</strong>—whether that’s making data more
        accessible for non-technical teams or crafting LLMs that actually{' '}
        <em>understand context</em>. When I’m not refining models, you’ll find
        me hitting the gym, exploring new trails on weekend hikes, shooting
        hoops on the court, sketching in my art journal, or experimenting with
        international recipes in the kitchen.
      </motion.p>

      {/* <motion.p
        className="max-w-2xl mx-auto text-center text-gray-700 dark:text-gray-300 mb-12 leading-relaxed"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
      >
        I’m a USC Master’s student with a knack for turning complex AI problems
        into user-friendly products. From fine-tuning large language models to
        architecting distributed data pipelines, I tackle challenges that sit at
        the intersection of cutting-edge research and real-world impact.
      </motion.p> */}

      {/* Highlights */}
      <motion.div
        className="grid gap-8 sm:grid-cols-3 max-w-4xl mx-auto mb-16"
        initial="hidden"
        animate="visible"
        variants={{
          hidden: {},
          visible: { transition: { staggerChildren: 0.2 } },
        }}
      >
        <motion.div
          className="flex flex-col items-center p-6 bg-white dark:bg-neutral-900 rounded-xl shadow"
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: { opacity: 1, y: 0 },
          }}
        >
          <FaFilePdf className="text-3xl text-blue-600 mb-2" />
          <h3 className="text-lg text-blue-600 dark:text-white font-semibold mb-1">
            2× IEEE Papers
          </h3>
          <p className="text-sm text-gray-600 dark:text-gray-400 text-center">
            Reinforcement-learning agents & software requirements research
          </p>
        </motion.div>

        <motion.div
          className="flex flex-col items-center p-6 bg-white dark:bg-neutral-900 rounded-xl shadow"
          variants="visible"
        >
          <FaLightbulb className="text-3xl text-blue-600 mb-2" />
          <h3 className="text-lg text-blue-600 dark:text-white font-semibold mb-1">
            1× Patent
          </h3>
          <p className="text-sm text-gray-600 dark:text-gray-400 text-center">
            Route-optimization for freight logistics
          </p>
        </motion.div>

        <motion.div
          className="flex flex-col items-center p-6 bg-white dark:bg-neutral-900 rounded-xl shadow"
          variants="visible"
        >
          <FaUniversity className="text-3xl text-blue-600 mb-2" />
          <h3 className="text-lg text-blue-600 dark:text-white font-semibold mb-1">
            Hackathon Winner
          </h3>
          <p className="text-sm text-gray-600 dark:text-gray-400 text-center">
            1st Place at HackMIT
          </p>
        </motion.div>
      </motion.div>

      {/* Education */}
      <motion.div
        className="max-w-4xl mx-auto"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
      >
        <h3 className="text-3xl font-semibold mb-6 border-b pb-2 text-accent-light dark:text-accent-dark drop-shadow-sm">
          Education
        </h3>

        <ul className="space-y-8">
          {education.map(
            ({ institution, location, degree, period, gpa, coursework }) => (
              <li
                key={institution}
                className="bg-white dark:bg-neutral-900 p-6 rounded-lg shadow border border-gray-200 dark:border-neutral-700"
              >
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-2">
                  <h4 className="text-xl font-semibold text-primary-light dark:text-primary-dark">
                    {degree}
                  </h4>
                  <span className="text-secondary-light dark:text-secondary-dark whitespace-nowrap sm:text-right">
                    {institution}
                  </span>
                </div>

                <div className="flex flex-col sm:flex-row sm:justify-between italic text-sm text-gray-600 dark:text-gray-400 mb-2">
                  <p>{location}</p>
                  <p className="whitespace-nowrap">{period}</p>
                </div>

                {gpa && (
                  <p className="text-left text-gray-700 dark:text-gray-300 font-medium mb-2">
                    GPA: {gpa.toFixed(2)}
                  </p>
                )}

                <p className="text-left text-gray-700 dark:text-gray-300 text-sm">
                  <strong className="text-accent-light dark:text-accent-dark">
                    Coursework:
                  </strong>{' '}
                  {coursework.join(', ')}
                </p>
              </li>
            )
          )}
        </ul>
      </motion.div>
    </SectionWrapper>
  );
}
