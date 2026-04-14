import '../styles/WorkExperience.css';
import HighlandExperience from './HighlandExperience';

const WorkExperience = () => {
  return (
    <section id="experience" className="we-section">
      <h2 className="section-title">Work Experience</h2>

      <div className="we-board">
        <HighlandExperience />
      </div>
    </section>
  );
};

export default WorkExperience;
