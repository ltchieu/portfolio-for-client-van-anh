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

      {/* Highlands Coffee TikTok */}
      <div className="we-board we-board--spaced">
        <HighlandExperience />
      </div>

      {/* Brain Agency */}
      <div className="we-board we-board--spaced">
        <BrainAgency />
      </div>
    </section>
  );
};

export default WorkExperience;
