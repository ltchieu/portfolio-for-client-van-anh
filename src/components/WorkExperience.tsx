import '../styles/WorkExperience.css';
import HighlandExperience from './HighlandExperience';
import BrainAgency from './BrainAgency';
import ToanPhatExperience from './ToanPhatExperience';

const WorkExperience = () => {
  return (
    <section id="experience" className="we-section">
      <h2 className="section-title">Work Experience</h2>

      {/* Toan Phat Printing & Packaging */}
      <div className="we-board">
        <ToanPhatExperience />
      </div>

      <div style={{ height: '300px' }}></div>

      {/* Highlands Coffee TikTok */}
      <div className="we-board">
        <HighlandExperience />
      </div>

      <div style={{ height: '300px' }}></div>

      {/* Brain Agency */}
      <div className="we-board">
        <BrainAgency />
      </div>
    </section>
  );
};

export default WorkExperience;
