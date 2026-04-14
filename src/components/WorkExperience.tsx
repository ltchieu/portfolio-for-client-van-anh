import '../styles/WorkExperience.css';
import HighlandExperience from './HighlandExperience';
import BrainAgency from './BrainAgency';

const WorkExperience = () => {
  return (
    <section id="experience" className="we-section">
      <h2 className="section-title">Work Experience</h2>

      {/* Brain Agency */}
      <div className="we-board we-board--brain">
        <BrainAgency />
      </div>

      <div style={{ height: '300px' }}>

      </div>

      {/* Highlands Coffee TikTok */}
      <div className="we-board">
        <HighlandExperience />
      </div>
    </section>
  );
};

export default WorkExperience;
