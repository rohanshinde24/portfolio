import SectionWrapper from './SectionWrapper';

const SKILL_CATEGORIES = [
  {
    name: 'Languages',
    skills: [
      'Python',
      'Java',
      'C++',
      'JavaScript',
      'TypeScript',
      'SQL',
      'HTML',
      'CSS',
    ],
  },
  {
    name: 'Web',
    skills: [
      'Express.js',
      'React.js',
      'Spring Boot',
      'Node.js',
      'FastAPI',
      'Flask',
      'REST',
      'JUnit',
      'Mockito',
      'pytest',
    ],
  },
  {
    name: 'Cloud & DevOps',
    skills: [
      'Docker',
      'Kubernetes',
      'Git',
      'GitHub Actions',
      'AWS (EC2, S3, RDS)',
      'Azure',
      'Jenkins',
      'Linux',
    ],
  },
  {
    name: 'Data & ML',
    skills: [
      'PyTorch',
      'TensorFlow',
      'scikit-learn',
      'Spark',
      'NumPy',
      'Pandas',
      'HuggingFace',
      'FAISS',
      'Pinecone',
      'RAG',
    ],
  },
  {
    name: 'Databases',
    skills: ['PostgreSQL', 'MySQL', 'MongoDB', 'Redis'],
  },
  {
    name: 'Engineering',
    skills: [
      'Data Structures & Algorithms',
      'Object-Oriented Design',
      'Multithreaded Programming',
      'Distributed Systems',
      'Performance Optimization',
      'CI/CD',
      'Agile',
    ],
  },
];

export default function Skills() {
  return (
    <SectionWrapper id="skills" className="py-12">
      <h2 className="font-display text-4xl sm:text-5xl font-semibold text-center mb-10 text-ink dark:text-ink-dark">
        Technical Skills
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-6xl mx-auto text-left">
        {SKILL_CATEGORIES.map((category) => (
          <article
            key={category.name}
            className="bg-surface dark:bg-surface-dark border border-line dark:border-line-dark rounded-lg p-5"
          >
            <h3 className="font-display text-2xl font-semibold text-ink dark:text-ink-dark mb-4">
              {category.name}
            </h3>
            <div className="flex flex-wrap gap-2">
              {category.skills.map((skill) => (
                <span
                  key={skill}
                  className="px-2.5 py-1 text-xs bg-accent-soft dark:bg-accent-darkSoft text-muted dark:text-muted-dark rounded"
                >
                  {skill}
                </span>
              ))}
            </div>
          </article>
        ))}
      </div>
    </SectionWrapper>
  );
}
