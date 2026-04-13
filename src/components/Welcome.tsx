import { motion } from 'framer-motion';
import '../styles/Welcome.css';

const Welcome = () => {
  return (
    <section id="welcome" className="welcome-container">
      <motion.div 
        className="welcome-content"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <h2 className="welcome-cursive">Welcome to my</h2>
        <div className="welcome-portfolio">
          <span className="char c-p">P</span>
          <span className="spin-star">✱</span>
          <span className="char c-o1">O</span>
          <span className="char c-r">R</span>
          <span className="char c-t">T</span>
          <span className="char c-f">F</span>
          <span className="char c-o2">O</span>
          <span className="char c-l">L</span>
          <span className="char c-i">I</span>
          <span className="char c-o3">O</span>
          <span className="spin-star-small">✱</span>
        </div>
        <div className="welcome-footer">
          <span className="footer-role">Marketing Executive</span>
          <span className="footer-year">2024- 2026</span>
        </div>
      </motion.div>
    </section>
  );
};

export default Welcome;
