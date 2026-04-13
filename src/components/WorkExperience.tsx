import { motion } from 'framer-motion';
import '../styles/WorkExperience.css';

const WorkExperience = () => {
  const experiences = [
    {
      year: 'Feb 2024 - Present',
      role: 'Marketing Executive',
      company: 'MSL Concept',
      desc: 'Executing and managing comprehensive marketing campaigns.'
    },
    {
      year: 'Jul 2023 - Dec 2023',
      role: 'Sales & Marketing Executive',
      company: 'Tien Phat Printing & Packaging',
      desc: 'Led B2B sales and coordinated marketing strategies for packaging solutions.'
    },
    {
      year: 'Aug 2022 - Apr 2023',
      role: 'Social Media Marketing',
      company: 'Highlands Coffee',
      desc: 'Developed social media content highlighting consumer insights and engagement.'
    },
    {
      year: 'Jul 2022 - Sep 2022',
      role: 'Account Executive',
      company: 'District Agency',
      desc: 'Acted as a liaison between the agency and clients, ensuring timely project delivery.'
    }
  ];

  return (
    <section id="experience">
      <h2 className="section-title">Work Experience</h2>
      <div className="experience-timeline">
        {experiences.map((exp, index) => (
          <motion.div 
            className="exp-card" 
            key={index}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            viewport={{ once: true, margin: "-100px" }}
          >
            <div className="exp-dot"></div>
            <div className="exp-content">
              <div className="exp-year">{exp.year}</div>
              <h3 className="exp-role">{exp.role}</h3>
              <div className="exp-company">{exp.company}</div>
              <p className="exp-desc">{exp.desc}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default WorkExperience;
