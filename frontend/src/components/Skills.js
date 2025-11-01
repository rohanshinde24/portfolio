// // src/components/Skills.jsx

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  FaCode,
  FaLayerGroup,
  FaTools,
  FaDatabase,
  FaServer,
  FaBrain,
} from 'react-icons/fa';
import SectionWrapper from './SectionWrapper';

const SKILL_CATEGORIES = [
  {
    id: 'languages',
    name: 'Languages',
    icon: <FaCode />,
    skills: [
      'JavaScript',
      'TypeScript',
      'Java',
      'Python',
      'SQL',
      'C++',
      'HTML',
      'CSS',
    ],
  },
  {
    id: 'web',
    name: 'Web',
    icon: <FaLayerGroup />,
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
    id: 'cloud-devops',
    name: 'Cloud & DevOps',
    icon: <FaTools />,
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
    id: 'data-ml',
    name: 'Data & ML',
    icon: <FaBrain />,
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
    id: 'databases',
    name: 'Databases',
    icon: <FaDatabase />,
    skills: ['PostgreSQL', 'MySQL', 'MongoDB', 'Redis'],
  },
  {
    id: 'concepts',
    name: 'Concepts',
    icon: <FaServer />,
    skills: [
      'Data Structures & Algorithms',
      'Object-Oriented Design',
      'Multi-threaded Programming',
      'Distributed Systems',
      'Networking Protocols',
      'System Performance Optimization',
      'CI/CD',
      'Agile',
      'Scrum',
    ],
  },
];

export default function Skills() {
  const [flippedId, setFlippedId] = useState(null);
  const toggle = (id) => setFlippedId((f) => (f === id ? null : id));

  return (
    <SectionWrapper id="skills" className="py-12">
      <h2 className="text-3xl sm:text-4xl font-extrabold text-center mb-10 text-primary-light dark:text-primary-dark">
        Technical Skills
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
        {SKILL_CATEGORIES.map((cat) => (
          <div key={cat.id} className="flex justify-center">
            <motion.div
              style={{ perspective: 800 }}
              className="w-64 h-64"
              onClick={() => toggle(cat.id)}
            >
              <motion.div
                style={{ transformStyle: 'preserve-3d' }}
                animate={{ rotateY: flippedId === cat.id ? 180 : 0 }}
                transition={{ duration: 0.6 }}
                className="relative w-full h-full"
              >
                {/** Front Side */}
                <div
                  style={{ backfaceVisibility: 'hidden' }}
                  className="absolute inset-0 bg-white dark:bg-neutral-900 rounded-lg shadow-md flex flex-col justify-center items-center p-4 cursor-pointer hover:shadow-lg transition-shadow duration-200"
                >
                  <span className="text-primary-light dark:text-primary-dark text-3xl">
                    {cat.icon}
                  </span>
                  <p className="mt-2 text-lg font-medium text-gray-800 dark:text-gray-200">
                    {cat.name}
                  </p>
                </div>

                {/** Back Side */}
                <div
                  style={{
                    backfaceVisibility: 'hidden',
                    transform: 'rotateY(180deg)',
                  }}
                  className="absolute inset-0 bg-white dark:bg-neutral-900 rounded-lg shadow-md flex flex-col justify-center items-center p-4 text-center"
                >
                  <div className="flex flex-wrap justify-center items-center gap-2">
                    {cat.skills.map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-1 bg-gray-100 dark:bg-neutral-800 text-gray-800 dark:text-gray-200 rounded-full text-xs text-center"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        ))}
      </div>
    </SectionWrapper>
  );
}
