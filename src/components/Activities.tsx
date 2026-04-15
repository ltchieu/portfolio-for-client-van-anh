import '../styles/Activities.css';
import HmkProject from './HmkProject';
import TvcProject from './TvcProject';
import ScientificResearch from './ScientificResearch';

const Activities = () => {
  return (
    <section id="activities">
      <h2 className="section-title">Activities</h2>

      <div className="activities-container">
        {/* Project 1 – HMK #Nét Mọi Look */}
        <HmkProject />

        <div className="responsive-box"></div>

        {/* Project 2 – TVCreate | Tinh Hoa Không Ngủ */}
        <TvcProject />

        <div className="responsive-box"></div>

        {/* Scientific Research */}
        <ScientificResearch />
      </div>
    </section>
  );
};

export default Activities;
