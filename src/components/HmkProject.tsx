import { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import '../styles/HmkProject.css';

const HmkProject = () => {
  // Featured images for the 2x2 grid
  const featured = [1, 3, 4, 5].map(
    (n) => new URL(`../assets/images/Activities/hmk (${n}).png`, import.meta.url).href
  );

  // Remaining images for the marquee
  const marqueeNums = [2, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18];
  const marqueeImgs = marqueeNums.map(
    (n) => new URL(`../assets/images/Activities/hmk (${n}).png`, import.meta.url).href
  );

  // Scroll-reveal
  const [lightboxSrc, setLightboxSrc] = useState<string | null>(null);

  const openLightbox = (src: string) => setLightboxSrc(src);
  const closeLightbox = () => setLightboxSrc(null);

  // Scroll-reveal
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-revealed');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll('.hmk-reveal').forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  // Close lightbox on Escape key
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') closeLightbox();
    };
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, []);

  const objectives = [
    {
      title: 'Increase Brand Awareness',
      desc: 'and overall media coverage/reach.',
    },
    {
      title: 'Achieve 20% Growth in Direct Sales',
      desc: '(online & offline) by driving total store traffic.',
    },
    {
      title: 'Establish HMK as the Pioneering Vietnamese Eyewear Brand,',
      desc: 'recognized for its modern spirit, technology, and superior customer experience.',
    },
  ];

  return (
    <div className="hmk-project hmk-reveal">
      {/* ── Top: Two-column layout ────────────────────────── */}
      <div className="hmk-layout">
        {/* Left column — Project info */}
        <div className="hmk-info">
          <span className="hmk-label">Activities — IMC Plan</span>

          <h3 className="hmk-title">#Nét Mọi Look</h3>

          <div className="hmk-meta">
            <span>Date: <strong>10/2025 – Now</strong></span>
            <span>
              Link:{' '}
              <a
                href="https://www.canva.com/design/DAG3cyRvxro/JZjnU_CbYc_COKfNsxtToQ/edit"
                target="_blank"
                rel="noopener noreferrer"
              >
                View full project
              </a>
            </span>
          </div>

          <p className="hmk-desc">
            Developed as part of our graduate IMC program, this Tết campaign for
            HMK aimed to resolve critical brand issues and meet holiday objectives.
          </p>

          <div className="hmk-objectives">
            <h4 className="hmk-obj-heading">3 Communication Objectives</h4>
            {objectives.map((obj, i) => (
              <div key={i} className="hmk-obj-item">
                <div className="hmk-obj-bar" />
                <p>
                  <strong>{obj.title}</strong> {obj.desc}
                </p>
              </div>
            ))}
          </div>

          {/* Insight callout */}
          <div className="hmk-insight">
            <span className="hmk-insight-label">Insight</span>
            <p>
              “While always meticulously preparing their appearance for every Tết occasion, many young people forget that their eyes - the clearest reflection of charisma and confidence - also need to be refreshed. <strong>They don't just want a clearer view of Tết</strong>; they also <strong>want themselves to become "sharper" </strong>(rõ nét) in every glance.”
            </p>
          </div>

          {/* Brand palette */}
          <div className="hmk-palette">
            <div className="hmk-swatch" style={{ background: '#8B1A1A' }} />
            <div className="hmk-swatch" style={{ background: '#D4A853' }} />
            <div className="hmk-swatch" style={{ background: '#F5F0E0' }} />
            <div className="hmk-swatch" style={{ background: '#1A1A2E' }} />
          </div>


        </div>

        {/* Right column — Video + Image grid */}
        <div className="hmk-right-col">
          {/* YouTube embed */}
          <div className="hmk-video-wrapper">
            <iframe
              src="https://www.youtube.com/embed/9dof8VbESXA?rel=0&modestbranding=1"
              title="HMK #Nét Mọi Look — IMC Plan Video"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>

          {/* 2×2 image grid */}
          <div className="hmk-grid">
            {featured.map((src, i) => (
              <div
                key={i}
                className="hmk-grid-item"
                onClick={() => openLightbox(src)}
                title="Click to enlarge"
              >
                <img src={src} alt={`HMK slide ${[1, 3, 4, 5][i]}`} />
                <div className="hmk-grid-zoom-hint">
                  <i className="fa-solid fa-magnifying-glass-plus" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── Lightbox overlay — rendered at document.body via Portal ── */}
      {lightboxSrc && ReactDOM.createPortal(
        <div className="hmk-lightbox" onClick={closeLightbox} role="dialog" aria-modal="true">
          <button
            className="hmk-lightbox-close"
            onClick={closeLightbox}
            aria-label="Close"
          >
            <i className="fa-solid fa-xmark" />
          </button>
          <img
            src={lightboxSrc}
            alt="HMK fullscreen"
            className="hmk-lightbox-img"
            onClick={(e) => e.stopPropagation()}
          />
        </div>,
        document.body
      )}

      {/* ── Bottom: Infinite scrolling image marquee ──── */}
      <div className="hmk-marquee">
        <div className="hmk-marquee-track">
          {[1, 2, 3].map((set) => (
            <div key={set} className="hmk-marquee-set" aria-hidden={set > 1}>
              {marqueeImgs.map((src, i) => (
                <div key={`${set}-${i}`} className="hmk-marquee-card">
                  <img src={src} alt={`HMK slide ${marqueeNums[i]}`} />
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HmkProject;
