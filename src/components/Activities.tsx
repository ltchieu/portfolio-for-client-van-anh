/* Activities.tsx – Container for activity/project sub-components */
import '../styles/Activities.css';
import HmkProject from './HmkProject';
import TvcProject from './TvcProject';

const Activities = () => {
  return (
    <section id="activities">
      <h2 className="section-title">Activities</h2>

      <div className="activities-container">
        {/* Project 1 – HMK #Nét Mọi Look */}
        <HmkProject />

        <div style={{ height: '300px' }}></div>

        {/* Project 2 – TVCreate | Tinh Hoa Không Ngủ */}
        <TvcProject />
      </div>
    </section>
  );
};

export default Activities;
