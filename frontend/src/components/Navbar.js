// import { useState } from 'react';
// import { motion } from 'framer-motion';
// import { Link } from 'react-scroll';
// import { useNavigate } from 'react-router-dom';
// import { useActiveSection } from '../context/ActiveSectionContext';
// import { HiMenu, HiX } from 'react-icons/hi';
// import ThemeToggle from './ThemeToggle';

// const navItems = [
//   { id: 'home', label: 'Home' },
//   { id: 'about', label: 'About' },
//   { id: 'skills', label: 'Skills' },
//   { id: 'experience', label: 'Experience' },
//   { id: 'projects', label: 'Projects' },
//   { id: 'contact', label: 'Contact' },
// ];

// export default function Navbar() {
//   const [isOpen, setIsOpen] = useState(false);
//   const navigate = useNavigate();
//   const { activeId } = useActiveSection();

//   const closeMenu = () => setIsOpen(false);

//   const navLinkClass = (id) =>
//     `cursor-pointer transition relative
//      ${
//        activeId === id
//          ? 'text-blue-600 dark:text-blue-400 font-semibold underline underline-offset-4 decoration-2'
//          : 'text-gray-800 dark:text-gray-100 hover:text-blue-600 dark:hover:text-blue-400'
//      }`;

//   return (
//     <header className="fixed top-0 left-0 w-full z-50 backdrop-blur bg-white/80 dark:bg-neutral-900/80 shadow-sm border-b border-gray-200 dark:border-neutral-700">
//       <nav className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
//         {/* Logo */}
//         <h1 className="text-xl font-bold text-primary-light dark:text-primary-dark tracking-tight">
//           Rohan Shinde
//         </h1>

//         {/* Desktop Nav */}

//         <div className="hidden md:flex items-center gap-8 text-sm font-medium">
//           {navItems.map((item) => (
//             <Link
//               key={item.id}
//               to={item.id}
//               smooth
//               duration={500}
//               offset={-64}
//               className={navLinkClass(item.id)}
//             >
//               {item.label}
//             </Link>
//           ))}
//           <button
//             onClick={() =>
//               navigate('/resume', { state: { from: window.location.pathname } })
//             }
//             className="px-4 py-2 border border-primary-light dark:border-primary-dark rounded-md hover:bg-primary-light hover:text-white dark:hover:bg-primary-dark transition text-primary-light dark:text-primary-dark"
//           >
//             Resume
//           </button>
//           <ThemeToggle />
//         </div>

//         {/* Hamburger Icon */}
//         <button
//           onClick={() => setIsOpen(!isOpen)}
//           className="md:hidden text-gray-800 dark:text-white text-2xl"
//           aria-label="Toggle navigation"
//         >
//           {isOpen ? <HiX /> : <HiMenu />}
//         </button>
//       </nav>

//       {/* Mobile Menu */}

//       {isOpen && (
//         <motion.div
//           initial={{ opacity: 0, y: -10 }}
//           animate={{ opacity: 1, y: 0 }}
//           className="md:hidden bg-white dark:bg-neutral-900 border-t border-gray-200 dark:border-neutral-700 px-6 py-6 flex flex-col items-center gap-6 text-base font-medium text-gray-800 dark:text-gray-100"
//         >
//           <ThemeToggle />
//           {navItems.map((item) => (
//             <Link
//               key={item.id}
//               to={item.id}
//               smooth
//               duration={500}
//               offset={-70}
//               onClick={closeMenu}
//               className={navLinkClass(item.id)}
//             >
//               {item.label}
//             </Link>
//           ))}
//           <button
//             onClick={() => {
//               navigate('/resume', {
//                 state: { from: window.location.pathname },
//               });
//               closeMenu();
//             }}
//             className="w-full text-center border border-primary-light dark:border-primary-dark px-4 py-2 rounded-md text-primary-light dark:text-primary-dark hover:bg-primary-light hover:text-white dark:hover:bg-primary-dark transition"
//           >
//             Resume
//           </button>
//         </motion.div>
//       )}
//     </header>
//   );
// }

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-scroll';
import { useNavigate } from 'react-router-dom';
import { useActiveSection } from '../context/ActiveSectionContext';
import { HiMenu, HiX } from 'react-icons/hi';
import ThemeToggle from './ThemeToggle';

const navItems = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'experience', label: 'Experience' },
  { id: 'projects', label: 'Projects' },
  { id: 'contact', label: 'Contact' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
  const { activeId } = useActiveSection();

  const closeMenu = () => setIsOpen(false);

  const navLinkClass = (id) =>
    `cursor-pointer transition relative 
     ${
       activeId === id
         ? 'text-blue-600 dark:text-blue-400 font-semibold underline underline-offset-4 decoration-2'
         : 'text-gray-800 dark:text-gray-100 hover:text-blue-600 dark:hover:text-blue-400'
     }`;

  return (
    <header className="fixed top-0 left-0 w-full z-50 backdrop-blur bg-white/80 dark:bg-neutral-900/80 shadow-sm border-b border-gray-200 dark:border-neutral-700">
      <nav className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <h1 className="text-xl font-bold text-primary-light dark:text-primary-dark tracking-tight">
          Rohan Shinde
        </h1>

        {/* Desktop Nav */}

        <div className="hidden md:flex items-center gap-8 text-sm font-medium">
          {navItems.map((item) => (
            <Link
              key={item.id}
              to={item.id}
              smooth
              duration={500}
              offset={-64}
              className={navLinkClass(item.id)}
            >
              {item.label}
            </Link>
          ))}
          <button
            onClick={() =>
              navigate('/resume', { state: { from: window.location.pathname } })
            }
            className="px-4 py-2 border border-primary-light dark:border-primary-dark rounded-md hover:bg-primary-light hover:text-white dark:hover:bg-primary-dark transition text-primary-light dark:text-primary-dark"
          >
            Resume
          </button>
          <ThemeToggle />
        </div>

        {/* Hamburger Icon */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-gray-800 dark:text-white text-2xl"
          aria-label="Toggle navigation"
        >
          {isOpen ? <HiX /> : <HiMenu />}
        </button>
      </nav>

      {/* Mobile Menu */}

      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden bg-white dark:bg-neutral-900 border-t border-gray-200 dark:border-neutral-700 px-6 py-6 flex flex-col items-center gap-6 text-base font-medium text-gray-800 dark:text-gray-100"
        >
          <ThemeToggle />
          {navItems.map((item) => (
            <Link
              key={item.id}
              to={item.id}
              smooth
              duration={500}
              offset={-64}
              onClick={closeMenu}
              className={navLinkClass(item.id)}
            >
              {item.label}
            </Link>
          ))}
          <button
            onClick={() => {
              navigate('/resume', {
                state: { from: window.location.pathname },
              });
              closeMenu();
            }}
            className="w-full text-center border border-primary-light dark:border-primary-dark px-4 py-2 rounded-md text-primary-light dark:text-primary-dark hover:bg-primary-light hover:text-white dark:hover:bg-primary-dark transition"
          >
            Resume
          </button>
        </motion.div>
      )}
    </header>
  );
}
