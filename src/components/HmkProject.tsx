import { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import '../styles/HmkProject.css';

const HmkProject = () => {
  // Featured images for the 2x2 grid
  const featured = [1, 3, 4, 5].map(
    (n) => new URL(`../assets/images/Activities/hmk (${n}).png`, import.meta.url).href
  );

  // Event concept images for the bento grid
  const eventConceptNums = [15, 8, 10, 13, 2, 18, 11, 12, 6];
  const eventConcepts = eventConceptNums.map(
    (n) => new URL(`../assets/images/Activities/hmk (${n}).png`, import.meta.url).href
  );

  // top row: index 0 (hero) + 1,2,3,4 (2×2 small)
  const topImages = eventConcepts.slice(0, 5);
  // bottom row: index 5,6,7,8
  const bottomImages = eventConcepts.slice(5, 9);

  const [lightboxSrc, setLightboxSrc] = useState<string | null>(null);

  const openLightbox = (src: string) => setLightboxSrc(src);
  const closeLightbox = () => setLightboxSrc(null);

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') closeLightbox();
    };
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, []);

  const objectives = [
    {
      title: 'Strengthen brand awareness',
      desc: 'and expand reach',
    },
    {
      title: 'Drive both online and offline sales growth',
      desc: '(+20%)',
    },
    {
      title: 'Position HMK',
      desc: 'as a modern Vietnamese eyewear brand',
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
            <span>
              View full campaign:{' '}
              <a
                href="https://drive.google.com/file/d/1YUJ_MPdd36wYlT5UMvhIjMwczXKzvVAP/view"
                target="_blank"
                rel="noopener noreferrer"
              >
                Click here
              </a>
            </span>
          </div>

          <p className="hmk-desc">
            A Tết campaign developed for HMK, focused on addressing key brand challenges and driving seasonal growth.
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
              "While always meticulously preparing their appearance for every Tết occasion, many young people forget that their eyes - the clearest reflection of charisma and confidence - also need to be refreshed. <strong>They don't just want a clearer view of Tết</strong>; they also <strong>want themselves to become "sharper" </strong>(rõ nét) in every glance."
            </p>
            <p style={{ marginTop: '1rem' }}>→ This insight led to the idea of "Nét Mới Look" - redefining clarity not just as vision, but as confidence.</p>
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

      {/* ── Bottom: Event concept bento grid ──── */}
      <div className="hmk-event-concept hmk-reveal">
        <p className="hmk-event-title">
          This is the <strong>&quot;Tết rõ, Tết đỏ&quot;</strong> event concept that I and my team developed for the <strong>&quot;Nét Mới Look&quot;</strong> campaign:
        </p>

        {/* Top bento: 1 large hero (left) + 2×2 small (right) */}
        <div className="hmk-event-grid-top">
          {topImages.map((src, i) => (
            <div
              key={i}
              className="hmk-event-item"
              onClick={() => openLightbox(src)}
              title="Click to enlarge"
            >
              <img src={src} alt={`HMK Event Concept ${i + 1}`} />
              <div className="hmk-grid-zoom-hint">
                <i className="fa-solid fa-magnifying-glass-plus" />
              </div>
            </div>
          ))}
        </div>

        {/* Bottom row: 4 equal images */}
        <div className="hmk-event-grid-bottom">
          {bottomImages.map((src, i) => (
            <div
              key={i}
              className="hmk-event-item"
              onClick={() => openLightbox(src)}
              title="Click to enlarge"
            >
              <img src={src} alt={`HMK Event Concept ${i + 6}`} />
              <div className="hmk-grid-zoom-hint">
                <i className="fa-solid fa-magnifying-glass-plus" />
              </div>
            </div>
          ))}
        </div>
      </div>

      <div style={{ borderBottom: '1px solid color-mix(in srgb, var(--color-text-main) 35%, transparent)', marginTop: '2rem', width: '100%' }}></div>
    </div>
  );
};

export default HmkProject;
