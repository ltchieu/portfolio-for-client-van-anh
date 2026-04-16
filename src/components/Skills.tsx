import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import { 
  HiOutlineMagnifyingGlass, 
  HiOutlineChartBar, 
  HiOutlinePencilSquare, 
  HiOutlineUserGroup, 
  HiOutlineCalendarDays, 
  HiOutlineTrophy, 
  HiOutlineLightBulb,
  HiOutlineChatBubbleLeftRight,
  HiOutlineWrenchScrewdriver,
  HiOutlineBriefcase,
  HiOutlinePresentationChartLine,
  HiOutlineCheckBadge
} from 'react-icons/hi2';

import canvaLogo from '../assets/images/Skills/canva-wordmark-2.svg';
import capcutLogo from '../assets/images/Skills/capcut-3.svg';
import excelLogo from '../assets/images/Skills/excel-4.svg';
import powerpointLogo from '../assets/images/Skills/powerpoint-2.svg';
import wordLogo from '../assets/images/Skills/word-1.svg';
import toeicCert from '../assets/images/Skills/toiec.png';

import '../styles/Skills.css';

const Skills = () => {
  const [lightboxSrc, setLightboxSrc] = useState<string | null>(null);

  const openLightbox = (src: string) => setLightboxSrc(src);
  const closeLightbox = () => setLightboxSrc(null);

  // Close lightbox on Escape key
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') closeLightbox();
    };
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, []);

  const marketingSkills = [
    { title: 'Market Research', desc: 'Deep dive into consumer insights & competitive analysis.', icon: <HiOutlineMagnifyingGlass /> },
    { title: 'Trend Tracking', desc: 'Staying ahead of viral shifts on TikTok, FB & Instagram.', icon: <HiOutlineChartBar /> },
    { title: 'Creative Briefing', desc: 'Translating vision into actionable guides for creators.', icon: <HiOutlinePencilSquare /> },
    { title: 'Influencer Coordination', desc: 'Selecting & managing key opinion leaders (KOLs).', icon: <HiOutlineUserGroup /> },
    { title: 'Campaign Planning', desc: 'End-to-end execution of holistic marketing strategies.', icon: <HiOutlineCalendarDays /> },
    { title: 'Performance Evaluation', desc: 'Data-driven analysis of reach, engagement & ROI.', icon: <HiOutlineTrophy /> },
    { title: 'Content Strategy', desc: 'Crafting compelling narratives for diverse audiences.', icon: <HiOutlineLightBulb /> },
  ];

  const softSkills = [
    { name: 'Strong Communication', icon: <HiOutlineChatBubbleLeftRight /> },
    { name: 'Planning & Organization', icon: <HiOutlineBriefcase /> },
    { name: 'Problem-solving', icon: <HiOutlineWrenchScrewdriver /> },
    { name: 'Project & Time Management', icon: <HiOutlinePresentationChartLine /> },
    { name: 'Reporting & Analysis', icon: <HiOutlineCheckBadge /> },
  ];

  const tools = [
    { name: 'Powerpoint', img: powerpointLogo },
    { name: 'Excel', img: excelLogo },
    { name: 'Word', img: wordLogo },
    { name: 'Canva', img: canvaLogo },
    { name: 'CapCut', img: capcutLogo },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1 }
  };

  return (
    <section id="skills" className="skills-section">
      <div className="skills-header">
        <h2 className="section-title">Skills & Expertise</h2>
        <p className="skills-intro">Bridging creative vision with data-driven marketing strategies.</p>
      </div>

      <div className="skills-main-grid">
        {/* Marketing Skills */}
        <div className="skills-column marketing-column">
          <h3 className="category-label">Marketing Mastery</h3>
          <motion.div 
            className="marketing-grid"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {marketingSkills.map((skill, index) => (
              <motion.div className="marketing-card" key={index} variants={itemVariants}>
                <div className="card-icon">{skill.icon}</div>
                <div className="card-content">
                  <h4>{skill.title}</h4>
                  <p>{skill.desc}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Tools & Soft Skills Side */}
        <div className="skills-column sidebar-column">
          {/* Tech Stack */}
          <div className="skills-box tech-stack-box">
            <h3 className="category-label">Technical Tools</h3>
            <div className="tools-row">
              {tools.map((tool, index) => (
                <motion.div 
                  className="tool-item" 
                  key={index}
                  whileHover={{ scale: 1.1, y: -5 }}
                  title={tool.name}
                >
                  <img src={tool.img} alt={tool.name} />
                </motion.div>
              ))}
            </div>
          </div>

          {/* Soft Skills */}
          <div className="skills-box soft-skills-box">
            <h3 className="category-label">Soft Skills</h3>
            <div className="soft-skills-list">
              {softSkills.map((skill, index) => (
                <div className="soft-skill-pill" key={index}>
                  <span className="pill-icon">{skill.icon}</span>
                  {skill.name}
                </div>
              ))}
            </div>
          </div>

          {/* Certificates */}
          <div className="skills-box cert-box">
            <h3 className="category-label">Certificates</h3>
            <div 
              className="cert-card"
              onClick={() => openLightbox(toeicCert)}
              title="Click to enlarge"
              style={{ cursor: 'pointer' }}
            >
              <div className="cert-image-wrapper">
                <img src={toeicCert} alt="TOEIC Certificate" />
                <div className="cert-zoom-hint">
                  <HiOutlineMagnifyingGlass />
                </div>
                <div className="cert-overlay">
                  <div className="toeic-badge">
                    <span className="badge-label">TOEIC SCORE</span>
                    <span className="badge-score">830</span>
                  </div>
                </div>
              </div>
              <div className="cert-info">
                <h4>TOEIC 830</h4>
                <p>Listening & Reading</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Lightbox Overlay */}
      {lightboxSrc && ReactDOM.createPortal(
        <div className="skills-lightbox" onClick={closeLightbox} role="dialog" aria-modal="true">
          <button
            className="skills-lightbox-close"
            onClick={closeLightbox}
            aria-label="Close"
          >
            ✕
          </button>
          <motion.img
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            src={lightboxSrc}
            alt="Certificate Fullscreen"
            className="skills-lightbox-img"
            onClick={(e) => e.stopPropagation()}
          />
        </div>,
        document.body
      )}
    </section>
  );
};

export default Skills;
