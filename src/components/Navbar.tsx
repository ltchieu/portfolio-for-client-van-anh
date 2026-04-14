import { useState, useEffect } from 'react';
import { FiMenu, FiX } from 'react-icons/fi';
import '../styles/Navbar.css';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
      
      if (window.scrollY < window.innerHeight * 0.4) {
        setActiveSection('');
        return;
      }

      const sections = ['about', 'experience', 'activities', 'skills', 'contact'];
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 250 && rect.bottom >= 250) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    // Run once on mount to set initial state correctly upon reload
    handleScroll();

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setMenuOpen(false);
    }
  };

  const navLinks = [
    { id: 'about', label: 'ABOUT ME' },
    { id: 'experience', label: 'WORK EXPERIENCE' },
    { id: 'activities', label: 'ACTIVITIES' },
    { id: 'skills', label: 'SKILLS' },
    { id: 'contact', label: 'CONTACT INFOR' },
  ];

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="navbar-logo" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
        VAN ANH<span>.</span>
      </div>
      
      <div className={`navbar-links ${menuOpen ? 'open' : ''}`}>
        {navLinks.map((link) => (
          <div 
            key={link.id}
            className={`nav-item ${activeSection === link.id ? 'active' : ''}`}
            onClick={() => scrollTo(link.id)}
          >
            {link.label}
          </div>
        ))}
      </div>

      <div className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)}>
        {menuOpen ? <FiX /> : <FiMenu />}
      </div>
    </nav>
  );
};

export default Navbar;
