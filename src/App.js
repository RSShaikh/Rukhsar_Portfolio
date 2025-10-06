import { lazy, useEffect, useState } from 'react';
import Footer from './Components/Footer';
import NavigationBar from './Components/NavigationBar';
import { ThemeProvider } from './Components/ThemeContext';
const About = lazy(() => import('./Components/About'));
const Projects = lazy(() => import('./Components/Projects'));
const Skills = lazy(() => import('./Components/Skills'));
const Resume = lazy(() => import('./Components/Resume'));
const Contact = lazy(() => import('./Components/Contact'));

function App() {
  const [activeSection, setActiveSection] = useState('about');

  useEffect(() => {
    const sections = ['about', 'projects', 'skills', 'resume', 'contact'];
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.8 }
    );

    sections.forEach(id => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
      <ThemeProvider>
      <NavigationBar activeSection={activeSection} />
      <div id="about"><About /></div>
      <div id="projects"><Projects /></div>
      <div id="skills"><Skills /></div>
      <div id="resume"><Resume /></div>
      <div id="contact"><Contact /></div>
      <Footer />
    </ThemeProvider>
  );
}

export default App;
