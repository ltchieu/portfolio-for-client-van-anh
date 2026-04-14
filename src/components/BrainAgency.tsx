/* BrainAgency.tsx */
import { useRef, useEffect } from 'react';
import '../styles/BrainAgency.css';

const BrainAgency = () => {
  // All 6 Brain Agency images
  const gallery = Array.from({ length: 6 }, (_, i) =>
    new URL(`../assets/images/WorkExperience/brainagentcy (${i + 1}).png`, import.meta.url).href
  );

  const imgs = {
    header: gallery[0],
    maybellineKV: gallery[1],
    tiktokMaybelline: gallery[2],
    tiktokHighland: gallery[3],
    reelsCrocs: gallery[4],
    modernKV: gallery[5],
  };

  // Scroll reveal effect
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
      { threshold: 0.12 }
    );

    document.querySelectorAll('.ba-reveal').forEach((el) => {
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  // Branded client campaigns data
  const campaigns = [
    {
      brand: 'Maybelline',
      sub: 'New York',
      type: 'Influencer TikTok',
      metric: '1,675',
      metricLabel: 'likes',
      color: '#d4145a',
    },
    {
      brand: 'Highlands',
      sub: 'Coffee',
      type: 'KOL Content',
      metric: '7,306',
      metricLabel: 'likes',
      color: '#b5292a',
    },
    {
      brand: 'Crocs',
      sub: '× Quang Hùng MasterD',
      type: 'Instagram Reels',
      metric: '79K',
      metricLabel: 'likes',
      color: '#1a73e8',
    },
    {
      brand: 'Modern',
      sub: 'Concert 2024',
      type: 'Event Marketing',
      metric: 'HAKUHODO',
      metricLabel: 'collab',
      color: '#c0392b',
    },
  ];


  return (
    <>
      {/* (1) Project Intro */}
      <div className="we-panel we-intro ba-panel-intro ba-reveal">
        <h3 className="we-title" style={{ marginTop: '0.5rem' }}>BRAIN AGENCY</h3>
        <p className="we-subtitle">Creative & Influencer Marketing | 07/2024 – 01/2025</p>
        <div className="we-body">
          <p>
            I work as an Account at an Influencer Booking Agency
            I turn client briefs into standout campaigns by matching them with the right KOLs — from planning to execution.
          </p>
        </div>

        {/* Brand colour identities */}
        <div className="ba-brand-chips">
          <span className="ba-chip" style={{ background: '#d4145a' }}>Maybelline</span>
          <span className="ba-chip" style={{ background: '#b5292a' }}>Highlands</span>
          <span className="ba-chip" style={{ background: '#1a73e8' }}>Crocs</span>
          <span className="ba-chip" style={{ background: '#111' }}>Modern</span>
        </div>
      </div>

      {/* (1) Campaign Metrics */}
      <div className="we-panel we-hero ba-reveal" style={{ borderLeft: '1px solid color-mix(in srgb, var(--color-text-main) 35%, transparent)' }}>
        <div className="we-panel-label">(1) Campaign Results</div>
        <div className="ba-metrics-grid">
          {campaigns.map((c, i) => (
            <div className="ba-metric-card" key={i} style={{ '--ba-accent': c.color } as React.CSSProperties}>
              <div className="ba-metric-top">
                <span className="ba-metric-brand">{c.brand}</span>
                <span className="ba-metric-type">{c.type}</span>
              </div>
              <div className="ba-metric-number">{c.metric}</div>
              <div className="ba-metric-label">{c.metricLabel} · {c.sub}</div>
            </div>
          ))}
        </div>
      </div>

      {/* (2) KV Showcase */}
      <div className="we-panel we-metrics ba-reveal">
        <div className="we-panel-label">(2) Key Visuals</div>
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

      {/* (4) Content Gallery */}
      <div className="we-panel we-typography ba-reveal" style={{ gridArea: 'typography' }}>
        <div className="we-panel-label">(4) Content Gallery</div>
        <p className="we-body">
          High-performing content crafted for top brands across TikTok & Instagram Reels —
          influencer-led, data-driven, and built to convert.
        </p>

        {/* Centred photo grid — 3 portrait cards side by side */}
        <div className="ba-photo-grid">
          <div className="ba-photo-card">
            <img src={imgs.tiktokMaybelline} alt="Maybelline TikTok" className="ba-photo-img" />
            <div className="ba-photo-caption">
              <span className="ba-photo-brand">Maybelline</span>
              <span className="ba-photo-stat">1,675 likes · TikTok</span>
            </div>
          </div>
          <div className="ba-photo-card">
            <img src={imgs.tiktokHighland} alt="Highlands TikTok" className="ba-photo-img" />
            <div className="ba-photo-caption">
              <span className="ba-photo-brand">Highlands</span>
              <span className="ba-photo-stat">7,306 likes · TikTok</span>
            </div>
          </div>
          <div className="ba-photo-card">
            <img src={imgs.reelsCrocs} alt="Crocs Reels" className="ba-photo-img" />
            <div className="ba-photo-caption">
              <span className="ba-photo-brand">Crocs × Quang Hùng MasterD</span>
              <span className="ba-photo-stat">79K likes · Instagram Reels</span>
            </div>
          </div>
        </div>

        {/* Infinite marquee – brand names */}
        <div className="ba-marquee-container ba-reveal">
          <div className="ba-marquee-track">
            {[1, 2, 3, 4].map((s) => (
              <div key={s} className="ba-marquee-content" aria-hidden={s > 1}>
                {['Maybelline', 'Crocs', 'Highlands', 'Modern', 'HAKUHODO', 'Brain Agency', 'TikTok', 'Reels'].map((b) => (
                  <span key={b} className="ba-marquee-tag">{b}</span>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* (3) Platform & Role */}
      <div className="we-panel we-patterns ba-reveal">
        <div className="we-panel-label">(3) Role & Platforms</div>
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

        {/* Colour palette row */}
        <div className="ba-palette">
          <div className="ba-color" style={{ background: '#d4145a' }}></div>
          <div className="ba-color" style={{ background: '#1a73e8' }}></div>
          <div className="ba-color" style={{ background: '#b5292a' }}></div>
          <div className="ba-color" style={{ background: '#111' }}></div>
          <div className="ba-color" style={{ background: '#f0f0f0', border: '1px solid #ccc' }}></div>
        </div>
      </div>
    </>
  );
};

export default BrainAgency;
