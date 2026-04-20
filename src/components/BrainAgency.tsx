import { useRef, useState } from 'react';
import '../styles/BrainAgency.css';
import InstagramEmbed from './InstagramEmbed';

const BrainAgency = () => {
  const carouselRef = useRef<HTMLDivElement>(null);
  const [activeVideo, setActiveVideo] = useState<string | null>(null);
  const [isDown, setIsDown] = useState(false);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  // All 6 Brain Agency images
  const gallery = Array.from({ length: 6 }, (_, i) =>
    new URL(`../assets/images/WorkExperience/brainagentcy (${i + 1}).png`, import.meta.url).href
  );
  const handleMouseDown = (e: React.MouseEvent) => {
    if (!carouselRef.current) return;
    setIsDown(true);
    setIsDragging(false);
    setStartX(e.pageX - carouselRef.current.offsetLeft);
    setScrollLeft(carouselRef.current.scrollLeft);
  };

  const handleMouseLeave = () => {
    setIsDown(false);
    setIsDragging(false);
  };

  const handleMouseUp = () => {
    setIsDown(false);
    setTimeout(() => setIsDragging(false), 50);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDown || !carouselRef.current) return;
    e.preventDefault();
    setIsDragging(true);
    const x = e.pageX - carouselRef.current.offsetLeft;
    const walk = (x - startX) * 2;
    carouselRef.current.scrollLeft = scrollLeft - walk;
  };

  const imgs = {
    header: gallery[0],      // Highlands Spring
    maybellineKV: gallery[1], // Maybelline
    modernKV: gallery[5],     // Modern Concert
  };

  return (
    <>
      {/* (1) Project Intro */}
      <div className="we-panel we-intro ba-panel-intro ba-reveal">
        <h3 className="we-title" style={{ marginTop: '0.5rem' }}>BRAINAD AGENCY</h3>
        <p className="we-subtitle">Creative & Influencer Marketing | 07/2024 – 01/2025</p>
        <div className="we-body">
          <p>
            Worked at the intersection of brands, creators, and audiences - turning client briefs into influencer-led campaigns. Selected KOLs, shaped content direction, and ensured alignment between brand objectives and audience response.
            Focused on understanding what drives performance, using content and engagement data to refine campaign direction.
          </p>
        </div>

        {/* Brand colour identities */}
        <div className="ba-brand-chips">
          <span className="ba-chip" style={{ background: '#d4145a' }}>Maybelline</span>
          <span className="ba-chip" style={{ background: '#b5292a' }}>Highlands</span>
          <span className="ba-chip" style={{ background: '#1a73e8' }}>Crocs</span>
          <span className="ba-chip" style={{ background: '#111' }}>Modern</span>
        </div>

        {/* (3) Platform & Role */}
        <div style={{ padding: '20px 0', marginTop: '20px' }}>
          <div className="we-panel-label">Role & Platforms</div>
          <div className="ba-role-list">
            <div className="ba-role-item">
              <span className="ba-role-icon"><i className="fa-solid fa-clapperboard"></i></span>
              <div>
                <strong>Content Strategist</strong>
                <p>TikTok & Reels scripting, brief writing, creative direction</p>
              </div>
            </div>
            <div className="ba-role-item">
              <span className="ba-role-icon"><i className="fa-solid fa-handshake"></i></span>
              <div>
                <strong>Influencer Coordinator</strong>
                <p>KOL/KOC briefing & performance tracking across campaigns</p>
              </div>
            </div>
            <div className="ba-role-item">
              <span className="ba-role-icon"><i className="fa-solid fa-chart-simple"></i></span>
              <div>
                <strong>Campaign Analyst</strong>
                <p>Reporting on reach, engagement, and ROI for brand clients</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* (2) KV Showcase */}
      <div className="we-panel we-hero ba-reveal">
        <div className="we-panel-label">Key Visuals</div>
        <p className="ba-context-quote" style={{ marginBottom: '1.5rem' }}>
          I've had the opportunity to work with several well-known brands such as
          <strong> Maybelline</strong>, <strong>Modern</strong>, and <strong>Highlands</strong>, etc.
        </p>

        <div className="ba-kv-grid">
          <div className="ba-kv-item">
            <img src={imgs.header} alt="Highlands Spring Campaign" className="ba-kv-img" />
            <div className="ba-kv-caption">Highlands Coffee · Spring Campaign</div>
          </div>
          <div className="ba-kv-item">
            <img src={imgs.modernKV} alt="Modern Concert 2024 KV" className="ba-kv-img" />
            <div className="ba-kv-caption">Modern Concert 2024 × HAKUHODO</div>
          </div>
          <div className="ba-kv-item">
            <img src={imgs.maybellineKV} alt="Maybelline KV" className="ba-kv-img" />
            <div className="ba-kv-caption">Maybelline New York</div>
          </div>
        </div>
      </div>

      {/* (4) Content Gallery - Interactive Carousel */}
      <div className="we-panel we-typography ba-reveal" style={{ gridArea: 'typography' }}>
        <div className="we-panel-label">Content Gallery</div>
        <div className="hl-viewership-intro">
          <p className="we-body">
            Selected campaign videos developed in collaboration with KOLs/KOCs across TikTok and Instagram Reels.
          </p>
          <p style={{ opacity: 0.6, fontSize: '0.8rem' }}>Click and drag to explore videos</p>
        </div>

        <div
          className={`ba-video-carousel ${isDragging ? 'is-dragging' : ''}`}
          ref={carouselRef}
          onMouseDown={handleMouseDown}
          onMouseLeave={handleMouseLeave}
          onMouseUp={handleMouseUp}
          onMouseMove={handleMouseMove}
        >
          {[
            { id: '7459372386291338514', type: 'tiktok' },
            { id: '7435148700172782866', type: 'tiktok' },
            { id: '7438818559012162834', type: 'tiktok' },
            { id: 'DAYanedPwSC', type: 'instagram' },
          ].map((v) => (
            <div key={v.id} className="ba-video-card-interactive" onMouseLeave={() => setActiveVideo(null)}>
              <div className="ba-video-wrapper">
                <div
                  className={`ba-iframe-drag-overlay ${activeVideo === v.id ? 'inactive' : ''}`}
                  onMouseUp={() => {
                    if (!isDragging) {
                      setActiveVideo(v.id);
                    }
                  }}
                />
                {v.type === 'instagram' ? (
                  <div className="ba-video-embed-container">
                    <InstagramEmbed url={`https://www.instagram.com/reel/${v.id}/`} />
                  </div>
                ) : (
                  <iframe
                    className="ba-video-iframe"
                    src={`https://www.tiktok.com/player/v1/${v.id}?autoplay=0`}
                    allow="autoplay; encrypted-media; gyroscope; picture-in-picture; fullscreen"
                    allowFullScreen
                    title={`Video ${v.id}`}
                  />
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Infinite marquee – brand names */}
        <div className="ba-marquee-container ba-reveal">
          <div className="ba-marquee-track">
            {[1, 2, 3, 4].map((s) => (
              <div key={s} className="ba-marquee-content" aria-hidden={s > 1}>
                {['Maybelline', 'Crocs', 'Highlands', 'Modern', 'HAKUHODO', 'BrainAd Agency', 'TikTok', 'Reels'].map((b) => (
                  <span key={b} className="ba-marquee-tag">{b}</span>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default BrainAgency;
