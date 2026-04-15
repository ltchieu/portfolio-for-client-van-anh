import { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import '../styles/ScientificResearch.css';

const ScientificResearch = () => {
  const imgResearch1 = new URL('../assets/images/Activities/scientificresearch.png', import.meta.url).href;
  const imgResearch2 = new URL('../assets/images/Activities/scientificresearch1.png', import.meta.url).href;

  const [lightboxSrc, setLightboxSrc] = useState<string | null>(null);
  const closeLightbox = () => setLightboxSrc(null);



  // Escape key closes lightbox
  useEffect(() => {
    const handler = (e: KeyboardEvent) => { if (e.key === 'Escape') closeLightbox(); };
    window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  }, []);

  return (
    <div className="sr-project sr-reveal">
      <div className="sr-layout">
        {/* LEFT — Info column */}
        <div className="sr-info">
          <span className="sr-label">Activities — Scientific Research</span>

          <div className="sr-title-block">
            <h3 className="sr-title">Scientific Research</h3>
            <p className="sr-subtitle-tag">2024</p>
          </div>

          <p className="sr-desc">
            Besides creative competitions, I'm also passionate about doing
            <br />
            scientific research at UEH university.
          </p>

          {/* ★ Achievement badge */}
          <div className="sr-achievement">
            <i className="fa-solid fa-medal sr-achievement-icon" />
            <div className="sr-achievement-text">
              <span className="sr-achievement-sub">Two scientific research got</span>
              <span className="sr-achievement-top">B PRIZE WINNER</span>
            </div>
            <i className="fa-solid fa-award sr-achievement-icon-right" style={{ marginLeft: 'auto', fontSize: '1.5rem', color: 'var(--sr-gold)', opacity: 0.6 }} />
          </div>

          <div className="sr-topics">
            <h4 className="sr-topics-heading">The two research topics are titled:</h4>
            <ul className="sr-topics-list">
              <li>
                <strong>Risk, Expectations, and the Influence of Virtual Reality on Travel Intention</strong>
              </li>
              <li>
                <strong>The Role of Personality and Stress on Work-Life Balance Affecting Job Performance, and the Moderating Effect of Job Satisfaction:</strong> An Empirical Study on Gen Z in Economic Fields in Ho Chi Minh City.
              </li>
            </ul>
          </div>

          <div className="sr-current">
            <div className="sr-current-accent" />
            <div className="sr-current-body">
              <h4 className="sr-current-title">
                <i className="fa-solid fa-flask" /> Not stopping there...
              </h4>
              <p className="sr-current-tagline">Currently, I'm researching the following topics:</p>

              <div className="sr-current-item">
                <span className="sr-current-label">With my team:</span>
                <p><strong>From Materialism to Life Satisfaction:</strong> The Mediating Role of Minimalism, Voluntary Simplification, and Consumer Behavior</p>
              </div>

              <div className="sr-current-item">
                <span className="sr-current-label">Independently:</span>
                <p><strong>Social Comparison on Social Media and Mental Health:</strong> Analyzing Upward/Downward Social Comparison, Stress, Self-Esteem, and Depression.</p>
              </div>
            </div>
          </div>

        </div>

        {/* RIGHT — image grid */}
        <div className="sr-right-col">
          <div className="sr-grid">
            <div className="sr-grid-item" onClick={() => setLightboxSrc(imgResearch1)} title="Click to enlarge">
              <img src={imgResearch1} alt="Scientific Research 1" />
              <div className="sr-grid-zoom-hint">
                <i className="fa-solid fa-magnifying-glass-plus" />
              </div>
            </div>
            <div className="sr-grid-item" onClick={() => setLightboxSrc(imgResearch2)} title="Click to enlarge">
              <img src={imgResearch2} alt="Scientific Research 2" />
              <div className="sr-grid-zoom-hint">
                <i className="fa-solid fa-magnifying-glass-plus" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ── Lightbox Portal ── */}
      {lightboxSrc && ReactDOM.createPortal(
        <div className="sr-lightbox" onClick={closeLightbox} role="dialog" aria-modal="true">
          <button className="sr-lightbox-close" onClick={closeLightbox} aria-label="Close">
            <i className="fa-solid fa-xmark" />
          </button>
          <img src={lightboxSrc} alt="Scientific Research fullscreen" className="sr-lightbox-img" onClick={(e) => e.stopPropagation()} />
        </div>,
        document.body
      )}
    </div>
  );
};

export default ScientificResearch;
