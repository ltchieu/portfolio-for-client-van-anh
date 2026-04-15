import { useEffect } from 'react';
import Navbar from './components/Navbar';
import Welcome from './components/Welcome';
import AboutMe from './components/AboutMe';
import WorkExperience from './components/WorkExperience';
import Activities from './components/Activities';
import Skills from './components/Skills';
import ContactInfo from './components/ContactInfo';
import './styles/App.css';

function App() {
  // Global Scroll Reveal Logic
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-revealed');
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.05, // Lower threshold for better mobile reliability
        rootMargin: '0px 0px -50px 0px'
      }
    );

    // Initial registration
    const registerObservers = () => {
      const elements = document.querySelectorAll(
        '.reveal-on-scroll, .ba-reveal, .tp-reveal, .sr-reveal, .tvc-reveal, .hmk-reveal, .hl-global-fixed-arm'
      );
      elements.forEach((el) => observer.observe(el));
    };

    // Run initially
    registerObservers();

    // Re-run periodically or on mutation to catch dynamically loaded content
    const mutationObserver = new MutationObserver(() => {
      registerObservers();
    });

    mutationObserver.observe(document.body, {
      childList: true,
      subtree: true
    });

    return () => {
      observer.disconnect();
      mutationObserver.disconnect();
    };
  }, []);

  return (
    <div className="app-container">
      <Navbar />
      <main>
        <Welcome />
        <AboutMe />
        <WorkExperience />
        <Activities />
        <Skills />
        <ContactInfo />
      </main>
    </div>
  );
}

export default App;
