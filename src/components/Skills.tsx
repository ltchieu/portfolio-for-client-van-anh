import { motion } from 'framer-motion';
import '../styles/Skills.css';

const Skills = () => {
  const technicalSkills = ['Marketing Plan Execution', 'Campaign Execution', 'Consumer Insight Analysis', 'Project & Time Management', 'Microsoft Office', 'PowerPoint & Canva', 'CapCut'];
  const softSkills = ['Cross-functional Communication', 'Problem-solving', 'Vietnamese (Native)', 'English (Upper-Intermediate)'];

  return (
    <section id="skills">
      <h2 className="section-title">Skills</h2>
      <div className="skills-container">
        <motion.div 
          className="skills-category"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h3 className="category-title">Design & Technical</h3>
          <div className="skills-list">
            {technicalSkills.map((skill, index) => (
              <motion.div 
                className="skill-pill" 
                key={index}
                whileHover={{ scale: 1.05 }}
              >
                {skill}
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div 
          className="skills-category"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <h3 className="category-title">Interpersonal & Soft Skills</h3>
          <div className="skills-list">
            {softSkills.map((skill, index) => (
              <motion.div 
                className="skill-pill" 
                key={index}
                whileHover={{ scale: 1.05 }}
              >
                {skill}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
