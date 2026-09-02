// src/pages/About.jsx
import React from 'react';
import { motion } from 'framer-motion';
import { FaFilePdf, FaLightbulb } from 'react-icons/fa';
import { education } from '../data/education';

export default function About() {
  return (
    <div className="w-full py-12 sm:py-20 px-4 sm:px-6 bg-surface dark:bg-surface-dark">
      {/* Section Title */}
      <motion.h2
        className="font-display text-4xl sm:text-5xl font-semibold mb-8 sm:mb-12 text-center text-ink dark:text-ink-dark"
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
      >
        Get to Know Me
      </motion.h2>

      {/* Narrative Intro */}
      <motion.p
        className="max-w-2xl mx-auto text-center text-muted dark:text-muted-dark mb-12 sm:mb-16 leading-relaxed text-base sm:text-lg"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
      >
        I believe the best technology grows out of{' '}
        <strong>real human needs</strong>, whether that's making data more
        accessible for non-technical teams or crafting LLMs that actually{' '}
        <em>understand context</em>. When I'm not refining models, you'll find
        me hitting the gym, exploring new trails on weekend hikes, shooting
        hoops on the court, sketching in my art journal, or experimenting with
        international recipes in the kitchen.
      </motion.p>

      <motion.figure
        className="max-w-sm mx-auto mb-12 sm:mb-16"
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.5 }}
      >
        <img
          src="/images/seattle-hike.jpeg"
          alt="Rohan hiking near Seattle"
          className="w-full aspect-[4/5] object-cover object-center rounded-lg border border-line dark:border-line-dark"
          loading="lazy"
        />
        <figcaption className="mt-3 text-sm text-muted dark:text-muted-dark text-center">
          Exploring the Pacific Northwest.
        </figcaption>
      </motion.figure>

      {/* Highlights */}
      <motion.div
        className="grid gap-6 sm:grid-cols-2 max-w-2xl mx-auto mb-16 sm:mb-20"
        initial="hidden"
        animate="visible"
        variants={{
          hidden: {},
          visible: { transition: { staggerChildren: 0.2 } },
        }}
      >
        <motion.div
          className="flex flex-col items-center p-6 sm:p-8 bg-canvas dark:bg-canvas-dark rounded-lg border border-line dark:border-line-dark"
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: { opacity: 1, y: 0 },
          }}
        >
          <FaFilePdf className="text-3xl text-accent dark:text-accent-dark mb-3" />
          <h3 className="text-lg text-ink dark:text-ink-dark font-semibold mb-2">
            2× IEEE Papers
          </h3>
          <p className="text-sm text-muted dark:text-muted-dark text-center">
            Reinforcement-learning agents & software requirements research
          </p>
        </motion.div>

        <motion.div
          className="flex flex-col items-center p-6 sm:p-8 bg-canvas dark:bg-canvas-dark rounded-lg border border-line dark:border-line-dark"
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: { opacity: 1, y: 0 },
          }}
        >
          <FaLightbulb className="text-3xl text-accent dark:text-accent-dark mb-3" />
          <h3 className="text-lg text-ink dark:text-ink-dark font-semibold mb-2">
            1× Patent
          </h3>
          <p className="text-sm text-muted dark:text-muted-dark text-center">
            Route-optimization for freight logistics
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
        <h3 className="font-display text-3xl font-semibold mb-8 sm:mb-12 border-b border-line dark:border-line-dark pb-3 text-ink dark:text-ink-dark text-center">
          Education
        </h3>

        <ul className="space-y-8 sm:space-y-12">
          {education.map(
            ({ institution, location, degree, period, gpa, coursework }) => (
              <li
                key={institution}
                className="bg-canvas dark:bg-canvas-dark p-6 sm:p-8 rounded-lg border border-line dark:border-line-dark"
              >
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-3">
                  <h4 className="font-display text-2xl font-semibold text-ink dark:text-ink-dark">
                    {degree}
                  </h4>
                  <span className="text-ink dark:text-ink-dark whitespace-nowrap sm:text-right font-medium">
                    {institution}
                  </span>
                </div>

                <div className="flex flex-col sm:flex-row sm:justify-between italic text-sm sm:text-base text-muted dark:text-muted-dark mb-3">
                  <p>{location}</p>
                  <p className="whitespace-nowrap">{period}</p>
                </div>

                {gpa && (
                  <p className="text-left text-muted dark:text-muted-dark font-medium mb-3">
                    GPA: {gpa.toFixed(2)}
                  </p>
                )}

                <p className="text-left text-muted dark:text-muted-dark text-sm sm:text-base">
                  <strong className="text-accent dark:text-accent-dark">
                    Coursework:
                  </strong>{' '}
                  {coursework.join(', ')}
                </p>
              </li>
            )
          )}
        </ul>
      </motion.div>
    </div>
  );
}
