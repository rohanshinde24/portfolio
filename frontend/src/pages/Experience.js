// export default Experience;
import { motion } from 'framer-motion';
import SectionWrapper from '../components/SectionWrapper';
import { experienceData } from '../data/experience';

const Experience = () => {
  return (
    <SectionWrapper id="experience">
      <div className="pt-20 pb-28">
        <h2
          id="experience-heading"
          className="text-4xl font-extrabold mb-16 text-primary-light dark:text-primary-dark drop-shadow-lg text-center"
        >
          Experience
        </h2>

        <div className="relative border-l-2 border-accent-light dark:border-accent-dark max-w-4xl mx-auto pl-6">
          {experienceData.map(
            (
              { company, logo, location, role, type, period, highlights },
              index
            ) => (
              // <motion.div
              //   key={`${company}-${index}`}
              //   initial={{ opacity: 0, x: 40 }}
              //   whileInView={{ opacity: 1, x: 0 }}
              //   viewport={{ once: false, amount: 0.5 }}
              //   transition={{ duration: 0.6, delay: index * 0.3 }}
              //   className="mb-14 relative"
              // >
              //   {/* Timeline dot */}
              //   <span className="absolute -left-[0.43rem] top-2 w-3 h-3 bg-accent-light dark:bg-accent-dark rounded-full shadow-md" />

              //   <div className="bg-white dark:bg-neutral-900 p-6 rounded-lg shadow-md">
              //     {logo && (
              //       <img
              //         src={logo}
              //         alt={`${company} logo`}
              //         className="w-10 h-10 mb-4 object-contain"
              //       />
              //     )}

              //     {/* Top row: role and company */}
              //     {/* <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-1">
              //       <h3 className="text-2xl font-semibold text-primary-light dark:text-primary-dark">
              //         {role}
              //       </h3>
              //       <p className="text-primary-light dark:text-secondary-dark font-medium sm:text-right mt-1 sm:mt-0">
              //         {company}
              //       </p>
              //     </div> */}
              //     {/* <div className="flex flex-col sm:flex-row sm:justify-between sm:items-baseline mb-1 gap-2">
              //       <h3 className="text-2xl font-semibold text-primary-light dark:text-primary-dark leading-snug">
              //         {role}
              //       </h3>
              //       <p className="text-primary-light dark:text-secondary-dark font-medium sm:text-right self-end leading-tight">
              //         {company}
              //       </p>
              //     </div> */}
              //     {/* <div className="flex justify-between items-end mb-2">
              //       <h3 className="text-2xl font-semibold text-primary-light dark:text-primary-dark leading-snug">
              //         {role}
              //       </h3>
              //       <span className="text-primary-light dark:text-secondary-dark text-right text-base leading-snug">
              //         {company}
              //       </span>
              //     </div>
              //     <p className="text-sm text-accent-light dark:text-accent-dark font-medium -mt-1 mb-2">
              //       {type}
              //     </p> */}

              //     {/* Role Title */}
              //     <h3 className="text-2xl font-semibold text-primary-light dark:text-primary-dark mb-1 text-left">
              //       {role}
              //     </h3>

              //     {/* Job Type + Company Name */}
              //     <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center mb-2 gap-1">
              //       <p className="text-sm font-medium text-accent-light dark:text-accent-dark">
              //         {type}
              //       </p>
              //       <p className="text-base text-primary-light dark:text-secondary-dark text-right">
              //         {company}
              //       </p>
              //     </div>

              //     {/* Second row: location and period */}
              //     <div className="flex flex-col sm:flex-row sm:justify-between italic text-sm text-gray-600 dark:text-gray-400 mb-3">
              //       <p>{location}</p>
              //       <p className="sm:text-right">{period}</p>
              //     </div>

              //     {/* Bullet points */}
              //     <ul className="list-disc list-outside space-y-2 pl-5 text-gray-700 dark:text-gray-300 text-left leading-relaxed">
              //       {highlights.map((point, idx) => (
              //         <li key={idx}>{point}</li>
              //       ))}
              //     </ul>
              //   </div>
              // </motion.div>
              <motion.div
                key={company}
                initial={{ opacity: 0, x: 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: false, amount: 0.5 }}
                transition={{ duration: 0.6, delay: index * 0.3 }}
                className="mb-14 relative"
              >
                {/* Timeline dot */}
                <span className="absolute -left-[0.43rem] top-2 w-3 h-3 bg-accent-light dark:bg-accent-dark rounded-full shadow-md" />

                <div className="bg-white dark:bg-neutral-900 p-6 rounded-lg shadow-md">
                  {logo && (
                    <img
                      src={logo}
                      alt={`${company} logo`}
                      className="w-10 h-10 mb-4 object-contain"
                    />
                  )}

                  {/* Role Title */}
                  <h3 className="text-2xl font-semibold text-primary-light dark:text-primary-dark text-left mb-1">
                    {role}
                  </h3>

                  {/* Job Type & Company */}
                  <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center mb-1">
                    <span className="text-accent-light dark:text-accent-dark text-sm sm:text-base text-left sm:text-left">
                      {type}
                    </span>
                    <span className="text-primary-light dark:text-secondary-dark font-medium text-sm sm:text-base text-left sm:text-right">
                      {company}
                    </span>
                  </div>

                  {/* Location & Period */}
                  <div className="flex flex-col sm:flex-row sm:justify-between italic text-sm text-gray-600 dark:text-gray-400 mb-3">
                    <p className="text-left">{location}</p>
                    <p className="text-left sm:text-right">{period}</p>
                  </div>

                  {/* Highlights */}
                  <ul className="list-disc list-outside space-y-2 pl-5 text-gray-700 dark:text-gray-300 text-left leading-relaxed">
                    {highlights.map((point, idx) => (
                      <li key={idx}>{point}</li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            )
          )}
        </div>
      </div>
    </SectionWrapper>
  );
};

export default Experience;
