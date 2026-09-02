import { motion } from 'framer-motion';
import { experienceData } from '../data/experience';

export default function Experience() {
  return (
    <div className="w-full py-12 sm:py-20 px-4 sm:px-6 bg-canvas dark:bg-canvas-dark">
      <h2
        id="experience-heading"
        className="font-display text-4xl sm:text-5xl font-semibold mb-12 sm:mb-16 text-ink dark:text-ink-dark text-center"
      >
        Experience
      </h2>

      <div className="relative border-l-2 border-accent dark:border-accent-dark max-w-4xl mx-auto pl-4 sm:pl-6">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.12 } },
          }}
        >
          {experienceData.map(
            ({ company, logo, location, role, period, highlights }, idx) => (
              <motion.div
                key={company}
                variants={{
                  hidden: { opacity: 0, x: 20 },
                  visible: { opacity: 1, x: 0 },
                }}
                transition={{ duration: 0.6, delay: idx * 0.2 }}
                className="mb-12 sm:mb-16 relative"
              >
                <span className="absolute -left-[0.43rem] top-2 w-3 h-3 bg-accent dark:bg-accent-dark rounded-full" />

                <div className="bg-surface dark:bg-surface-dark p-6 sm:p-8 rounded-lg border border-line dark:border-line-dark">
                  {logo && (
                    <img
                      src={logo}
                      alt={`${company} logo`}
                      className="w-10 h-10 sm:w-12 sm:h-12 mb-4 sm:mb-6 object-contain"
                    />
                  )}

                  <h3 className="font-display text-left text-2xl sm:text-3xl font-semibold mb-2 sm:mb-3 text-ink dark:text-ink-dark">
                    {role}
                  </h3>

                  <p className="text-ink dark:text-ink-dark font-semibold text-sm sm:text-base text-left mb-3">
                    {company}
                  </p>

                  <div className="italic text-sm sm:text-base text-muted dark:text-muted-dark mb-4 sm:mb-6 space-y-1">
                    <p className="text-left">{period}</p>
                    <p className="text-left">{location}</p>
                  </div>

                  <ul className="text-left list-disc list-outside space-y-2 sm:space-y-3 pl-5 sm:pl-6 text-sm sm:text-base text-muted dark:text-muted-dark leading-relaxed">
                    {highlights.map((point, i) => (
                      <li key={i} className="mb-2">
                        {point}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            )
          )}
        </motion.div>
      </div>
    </div>
  );
}
