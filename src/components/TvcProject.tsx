import { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import '../styles/TvcProject.css';

const TvcProject = () => {
  const imgLogo1 = new URL('../assets/images/Activities/logotvc.png', import.meta.url).href;
  const imgLogo2 = new URL('../assets/images/Activities/logotvc2.png', import.meta.url).href;
  const imgStoryboard = new URL('../assets/images/Activities/tvc (1).png', import.meta.url).href;
  const imgKeyvisual = new URL('../assets/images/Activities/tvc (2).png', import.meta.url).href;
  const imgMarket = new URL('../assets/images/Activities/tvc (3).png', import.meta.url).href;
  const imgKol = new URL('../assets/images/Activities/tvc (4).png', import.meta.url).href;

  const gridImages = [
    { src: imgStoryboard, alt: 'TVC Storyboard – 60s script' },
    { src: imgKeyvisual, alt: 'Key Visual – Tinh Hoa Không Ngủ' },
    { src: imgMarket, alt: 'Market Overview – Museum Tourism' },
    { src: imgKol, alt: 'KOL – Dương Domic' },
  ];

  const [lightboxSrc, setLightboxSrc] = useState<string | null>(null);
  const closeLightbox = () => setLightboxSrc(null);



  // Escape key closes lightbox
  useEffect(() => {
    const handler = (e: KeyboardEvent) => { if (e.key === 'Escape') closeLightbox(); };
    window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  }, []);

  // const highlights = [
  //   {
  //     icon: 'fa-solid fa-qrcode',
  //     label: 'AR Experience',
  //     desc: 'QR-triggered AR tour featuring character "Surya" guiding visitors through 3D history',
  //   },
  //   {
  //     icon: 'fa-solid fa-chart-bar',
  //     label: '31.3B USD Market',
  //     desc: 'Museum tourism CAGR 11.5% (2025–2035) — HCM draws 100K–200K visitors/year',
  //   },
  //   {
  //     icon: 'fa-brands fa-tiktok',
  //     label: 'KOL — Dương Domic',
  //     desc: 'TOP 4 Vietnam influencer · #2 BXH Viberate · 1.4M TikTok, 818K FB, 993K IG',
  //   },
  // ];

  return (
    <div className="tvc-project tvc-reveal">
      {/* ── Two-column layout ─────────────────────────────── */}
      <div className="tvc-layout">

        {/* LEFT — Info column */}
        <div className="tvc-info">
          {/* Branding row */}
          <div className="tvc-brand-row">
            <img src={imgLogo1} alt="TV Create logo" className="tvc-logo" />
            <img src={imgLogo2} alt="Competition logo" className="tvc-logo tvc-logo--star" />
            <span className="tvc-label">Activities — TVC Competition</span>
          </div>

          {/* Title */}
          <div className="tvc-title-block">
            <p className="tvc-subtitle-tag">MẬU THÂN 1968</p>
            <h3 className="tvc-title">TINH HOA <em>không ngủ</em></h3>
            <p className="tvc-brand-name">Bảo Tàng Lịch Sử TP.HCM</p>
          </div>

          {/* ★ Achievement badge */}
          <div className="tvc-achievement">
            <div className="tvc-achievement-glow" />
            <i className="fa-solid fa-trophy tvc-achievement-icon" />
            <div className="tvc-achievement-text">
              <span className="tvc-achievement-top">TOP 20 TEAMS</span>
              <span className="tvc-achievement-sub">IN ROUND 3!</span>
            </div>
            <div className="tvc-achievement-stars">
              <i className="fa-solid fa-star" />
              <i className="fa-solid fa-star" />
              <i className="fa-solid fa-star" />
            </div>
          </div>

          {/* Personal context */}
          <div className="tvc-personal">
            <p className="tvc-desc">
              I joined this competition to gain more knowledge and challenge myself.
              During the process, my team and I worked together on research, brainstorming ideas,
              and creating a TVC for the <strong>Ho Chi Minh City Museum of History</strong>.
            </p>
          </div>

          {/* Description */}
          {/* <p className="tvc-desc">
            A 60-second TVC concept blending AR technology with Vietnamese heritage — designed
            to revive museum tourism for Gen Z. Created as part of the{' '}
            <strong>TVCreate national competition</strong>.
          </p> */}

          {/* TVC Concept — "When Heritage Awakens" */}
          <div className="tvc-concept">
            <div className="tvc-concept-accent" />
            <div className="tvc-concept-body">
              <h4 className="tvc-concept-title">
                <i className="fa-solid fa-clapperboard" />
                &ldquo;When Heritage Awakens&rdquo;
              </h4>
              <p className="tvc-concept-tagline">
                History was never silent — just waiting to be heard.
              </p>
              <p className="tvc-concept-narrative">
                In a quiet museum, a group of bored young visitors scan a QR code… and suddenly,
                everything comes to life. Artifacts begin to tell their own stories — not through
                dry text, but through emotional, first-person voices.
              </p>
              <p className="tvc-concept-cta">
                <i className="fa-solid fa-hand-pointer" />
                Touch to awaken. History has never been old.
              </p>
              <p className="tvc-concept-footnote">
                This TVC reimagines the museum as a living space, where every object has a soul
                and every touch revives the past.
              </p>
            </div>
          </div>



          {/* Meta */}
          <div className="tvc-meta">
            <span><i className="fa-solid fa-hashtag" /> LịchSửThứcGiấc</span>
            <a
              href="https://drive.google.com/file/d/1QFtYWIUZGVw8eiUb1lFEhBlaNQ7AnO4E/view"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fa-brands fa-google-drive" /> Full project deck
            </a>
          </div>
        </div>

        {/* RIGHT — Video + image grid */}
        <div className="tvc-right-col">
          {/* YouTube embed */}
          <div className="tvc-video-wrapper">
            <iframe
              src="https://www.youtube.com/embed/Yx0_jZjDWhk?rel=0&modestbranding=1"
              title="TINH HOA KHÔNG NGỦ – TVCreate TVC"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>

          {/* 2×2 image grid */}
          <div className="tvc-grid">
            {gridImages.map((img, i) => (
              <div
                key={i}
                className="tvc-grid-item"
                onClick={() => setLightboxSrc(img.src)}
                title="Click to enlarge"
              >
                <img src={img.src} alt={img.alt} />
                <div className="tvc-grid-zoom-hint">
                  <i className="fa-solid fa-magnifying-glass-plus" />
                </div>
              </div>
            ))}
          </div>

          {/* Key highlights */}
          {/* <div className="tvc-highlights">
            {highlights.map((h, i) => (
              <div key={i} className="tvc-highlight-item">
                <div className="tvc-hi-icon"><i className={h.icon} /></div>
                <div className="tvc-hi-body">
                  <strong>{h.label}</strong>
                  <p>{h.desc}</p>
                </div>
              </div>
            ))}
          </div> */}
        </div>
      </div>

      {/* ── Lightbox Portal ──────────────────────────────── */}
      {lightboxSrc && ReactDOM.createPortal(
        <div className="tvc-lightbox" onClick={closeLightbox} role="dialog" aria-modal="true">
          <button className="tvc-lightbox-close" onClick={closeLightbox} aria-label="Close">
            <i className="fa-solid fa-xmark" />
          </button>
          <img
            src={lightboxSrc}
            alt="TVC fullscreen"
            className="tvc-lightbox-img"
            onClick={(e) => e.stopPropagation()}
          />
        </div>,
        document.body
      )}
    </div>
  );
};

export default TvcProject;
