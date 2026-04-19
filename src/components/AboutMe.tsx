import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import '../styles/AboutMe.css';

// Import local images
import img1 from '../assets/images/aboutme1.png';
import img2 from '../assets/images/aboutme2.jpg';
import img3 from '../assets/images/aboutme3.png';
import img4 from '../assets/images/aboutme4.png';
import img5 from '../assets/images/aboutme5.jpg';
import img6 from '../assets/images/aboutme8.jpg';

const AboutMe = () => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x, { stiffness: 300, damping: 20 });
  const mouseYSpring = useSpring(y, { stiffness: 300, damping: 20 });

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["15deg", "-15deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-15deg", "15deg"]);

  const handleMouseMove = (e: React.MouseEvent<HTMLImageElement, MouseEvent>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;
    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <section id="about" className="about-container">
      <motion.div
        className="about-left"
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <div className="about-heading">
          <span className="about-subtitle">MY NAME IS</span>
          <h1 className="about-title">Van Anh</h1>
        </div>
        <div className="about-image-wrapper" style={{ perspective: 1000 }}>
          <motion.img
            src={img1}
            alt="Van Anh"
            className="about-image neon-pulse-glow"
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            style={{
              rotateX,
              rotateY,
              transformStyle: "preserve-3d"
            }}
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 400, damping: 30 }}
          />
        </div>

      </motion.div>

      <motion.div
        className="about-right"
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        viewport={{ once: true }}
      >
        <div className="about-block">
          <h2 className="block-title">ABOUT ME</h2>
          <p className="block-desc">
            Marketing Executive with experience in supporting <strong>brand strategy</strong> and <strong>executing marketing plans across digital and production environments</strong>. Demonstrates the ability to <strong>coordinate cross-functional teams</strong>, <strong>monitor campaign performance</strong>, and <strong>contribute to growth initiatives</strong>. Interested in FMCG with exposure to packaging and operations, and <strong>strong planning</strong> and <strong>problem-solving skills</strong>.
          </p>
        </div>

        <div className="info-grid">
          <div className="info-left-col" style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
            <div className="about-block">
              <h2 className="block-title">EDUCATION</h2>
              <ul className="edu-list">
                <li>
                  <span className="edu-icon">✿</span>
                  <div className="edu-info">
                    <strong>Master's in Marketing (Applied)</strong>
                    <span className="edu-meta">UEH University <span>—</span> 2025 - 2027</span>
                  </div>
                </li>
                <li>
                  <span className="edu-icon">✿</span>
                  <div className="edu-info">
                    <strong>Bachelor of Int. Business</strong>
                    <span className="edu-meta">UEH University <span>—</span> 2021 - 2024</span>
                  </div>
                </li>
              </ul>
            </div>

            <div className="about-block">
              <h2 className="block-title">LANGUAGE</h2>
              <ul className="edu-list" style={{ flexDirection: 'row', gap: '3rem' }}>
                <li>
                  <span className="edu-icon">✦</span>
                  <div className="edu-info">
                    <strong>Vietnamese</strong>
                    <span className="edu-meta">Native</span>
                  </div>
                </li>
                <li>
                  <span className="edu-icon">✦</span>
                  <div className="edu-info">
                    <strong>English</strong>
                    <span className="edu-meta">Upper-Intermediate</span>
                  </div>
                </li>
              </ul>
            </div>
          </div>

          <div className="info-right-col">
            <div className="about-block">
              <h2 className="block-title">EXPERIENCE</h2>
              <ul className="edu-list">
                <li>
                  <span className="edu-icon">✦</span>
                  <div className="edu-info">
                    <strong>Marketing Executive</strong>
                    <span className="edu-meta">H&L Concept <span>—</span> (01/2026 - Present)</span>
                  </div>
                </li>
                <li>
                  <span className="edu-icon">✦</span>
                  <div className="edu-info">
                    <strong>Sales & Marketing Exec</strong>
                    <span className="edu-meta">Toan Phat<span>—</span> (07/2025 - 12/2025)</span>
                  </div>
                </li>
                <li>
                  <span className="edu-icon">✦</span>
                  <div className="edu-info">
                    <strong>Social Media Marketing</strong>
                    <span className="edu-meta">Highlands Coffee <span>—</span> (08/2024 - 04/2025)</span>
                  </div>
                </li>
                <li>
                  <span className="edu-icon">✦</span>
                  <div className="edu-info">
                    <strong>Account Executive</strong>
                    <span className="edu-meta">Brainad Agency <span>—</span> (07/2024 - 01/2025)</span>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="photo-collage">
          <motion.img src={img5} className="polaroid" initial={{ rotate: -8, x: -190, y: 0 }} whileHover={{ scale: 1.2, zIndex: 10, rotate: 0, y: -20 }} />
          <motion.img src={img2} className="polaroid" initial={{ rotate: 5, x: -90, y: 10 }} whileHover={{ scale: 1.2, zIndex: 10, rotate: 0, y: -20 }} />
          <motion.img src={img3} className="polaroid" initial={{ rotate: -5, x: 0, y: 0 }} whileHover={{ scale: 1.2, zIndex: 10, rotate: 0, y: -20 }} />
          <motion.img src={img6} className="polaroid" initial={{ rotate: -15, x: 180, y: 0 }} whileHover={{ scale: 1.2, zIndex: 10, rotate: 0, y: -20 }} />
          <motion.img src={img4} className="polaroid" initial={{ rotate: 15, x: 90, y: 10 }} whileHover={{ scale: 1.2, zIndex: 10, rotate: 0, y: -20 }} />
        </div>
      </motion.div>
    </section>
  );
};

export default AboutMe;
