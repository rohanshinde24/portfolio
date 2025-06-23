import { motion, useInView } from 'framer-motion';
import { useEffect, useRef } from 'react';
import { useActiveSection } from '../context/ActiveSectionContext';

export default function AnimatedSection({ id, children }) {
  const ref = useRef(null);
  // const isInView = useInView(ref, {
  //   amount: 0.5, // section is considered active when 50% visible
  // });
  const isInView = useInView(ref, {
    rootMargin: '-4rem 0px -4rem 0px', // shift trigger up/down by your navbar height
    amount: 0.6,
  });
  const { setActiveId } = useActiveSection();

  useEffect(() => {
    if (isInView) {
      setActiveId(id);
    }
  }, [isInView, id, setActiveId]);

  return (
    <motion.section
      ref={ref}
      id={id}
      className="scroll-mt-16 w-full min-h-screen flex flex-col justify-center items-center text-center bg-white dark:bg-neutral-900"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: false, amount: 0.3 }}
      aria-labelledby={`${id}-heading`}
    >
      <div className="w-full max-w-6xl px-6">{children}</div>
    </motion.section>
  );
}
