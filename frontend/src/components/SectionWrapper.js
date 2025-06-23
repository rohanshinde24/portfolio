export default function SectionWrapper({ children, id, fullWidth = false }) {
  return (
    <section
      id={id}
      className="scroll-mt-16 w-full flex flex-col justify-center items-center text-center bg-white dark:bg-neutral-900 py-16"
      aria-labelledby={`${id}-heading`}
    >
      <div className={`${fullWidth ? 'w-full' : 'w-full max-w-6xl px-6'}`}>
        {children}
      </div>
    </section>
  );
}
