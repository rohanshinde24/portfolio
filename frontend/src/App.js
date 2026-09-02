// export default App;
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Helmet } from 'react-helmet';

import Home from './pages/Home';
import About from './pages/About';
import Experience from './pages/Experience';
import Contact from './pages/Contact';
import Projects from './pages/Projects';
import ResumeViewer from './pages/ResumeViewer';

import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ScrollProgressBar from './components/ScrollProgressBar';
import AnimatedSection from './components/AnimatedSection';
import Skills from './components/Skills';
// import SkillsGraph from './components/Skills';
function MainLayout() {
  return (
    <>
      <ScrollProgressBar />
      <Navbar />
      <div className="min-h-screen w-full bg-canvas text-ink dark:bg-canvas-dark dark:text-ink-dark overflow-x-hidden">
        <main className="w-full">
          <AnimatedSection id="home">
            <Home />
          </AnimatedSection>
          <AnimatedSection id="about">
            <About />
          </AnimatedSection>
          <AnimatedSection id="skills">
            <Skills />
          </AnimatedSection>
          <AnimatedSection id="experience">
            <Experience />
          </AnimatedSection>
          <AnimatedSection id="projects">
            <Projects />
          </AnimatedSection>
          <AnimatedSection id="contact">
            <Contact />
          </AnimatedSection>
          <Footer />
        </main>
      </div>
    </>
  );
}

function App() {
  return (
    <Router>
      <Helmet>
        <title>Rohan Shinde | AI/ML & Full Stack Engineer</title>
        <meta
          name="description"
          content="Portfolio of Rohan Shinde — AI/ML Engineer and USC CS grad student. Explore full-stack projects, LLM agents, experience, and contact info."
        />
        <meta
          property="og:title"
          content="Rohan Shinde | AI/ML & Full Stack Engineer"
        />
        <meta
          property="og:description"
          content="Software engineer building reliable cloud, data, and applied AI systems."
        />
        <meta
          property="og:image"
          content="https://rohan-dev.vercel.app/images/og-image.jpeg"
        />
        <meta property="og:url" content="https://rohan-dev.vercel.app" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Rohan Shinde | AI/ML & Full Stack Engineer"
        />
        <meta
          name="twitter:description"
          content="Software engineer building reliable cloud, data, and applied AI systems."
        />
        <meta
          name="twitter:image"
          content="https://rohan-dev.vercel.app/images/og-image.jpeg"
        />
        <link rel="icon" href="/favicon.ico" />
        <meta name="theme-color" content="#F7F4EE" />
      </Helmet>

      <Routes>
        <Route path="/" element={<MainLayout />} />
        <Route path="/resume" element={<ResumeViewer />} />
      </Routes>
    </Router>
  );
}

export default App;
