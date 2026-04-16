import '../styles/WorkExperience.css';
import MenQuanExperience from './MenQuanExperience';
import HighlandExperience from './HighlandExperience';
import BrainAgency from './BrainAgency';
import ToanPhatExperience from './ToanPhatExperience';

const WorkExperience = () => {
  return (
    <section id="experience" className="we-section">
      <h2 className="section-title">Work Experience</h2>

      {/* H&L Concept (Men Quán & Renge Ramen) */}
      <div className="we-board">
        <MenQuanExperience />
      </div>

      {/* Toan Phat Printing & Packaging */}
      <div className="we-board we-board--spaced">
        <ToanPhatExperience />
      </div>

      {/* Highlands Coffee TikTok */}
      <div className="we-board we-board--spaced we-board--highland">
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
