import '../styles/ToanPhatExperience.css';

const ToanPhatExperience = () => {
  const img1 = new URL('../assets/images/WorkExperience/toanphat (1).png', import.meta.url).href;
  const img2 = new URL('../assets/images/WorkExperience/toanphat (2).png', import.meta.url).href;
  const img3 = new URL('../assets/images/WorkExperience/toanphat (3).png', import.meta.url).href;



  const responsibilities = [
    {
      icon: 'fa-solid fa-diagram-project',
      title: 'Project Management',
      desc: <>Translated client requirements into <strong>packaging development and execution plans</strong></>,
    },
    {
      icon: 'fa-solid fa-people-arrows',
      title: 'Cross-functional Coordination',
      desc: <>Coordinated cross-functionally with <strong>R&D, production, and technical teams</strong> to ensure feasibility and quality</>,
    },
    {
      icon: 'fa-solid fa-timeline',
      title: 'Timeline Management',
      desc: <>Managed end-to-end project timeline (design → sampling → production)</>,
    },
    {
      icon: 'fa-solid fa-chart-line',
      title: 'Planning & Forecasting',
      desc: <>Monitored order volume and supported <strong>planning &amp; forecasting</strong></>,
    },
    {
      icon: 'fa-solid fa-shield-halved',
      title: 'Risk Mitigation',
      desc: <>Identified and mitigated <strong>production risks</strong> to ensure delivery standards</>,
    },
  ];

  const clients = [
    { name: 'Fengtay', country: 'Taiwan', flag: '🇹🇼', color: '#1a5276' },
    { name: 'EMSV', country: 'USA', flag: '🇺🇸', color: '#b22222' },
    { name: 'QuickPack', country: 'Germany', flag: '🇩🇪', color: '#2c3e50' },
    { name: 'Hoyalens', country: 'Japan', flag: '🇯🇵', color: '#922b21' },
  ];

  const additionals = [
    { icon: 'fa-solid fa-globe', text: <>Supported website development: <a href="https://intoanphat.com/" target="_blank" rel="noopener noreferrer" style={{ color: '#c89b3c', fontWeight: 600, textDecoration: 'underline' }}>intoanphat.com</a></> },
    { icon: 'fa-solid fa-clapperboard', text: 'Coordinated TVC production' },
  ];

  const pipeline = [
    { label: 'Client Brief', icon: 'fa-solid fa-file-lines' },
    { label: 'R&D + Feasibility', icon: 'fa-solid fa-flask' },
    { label: 'Design & Sampling', icon: 'fa-solid fa-pencil-ruler' },
    { label: 'Production', icon: 'fa-solid fa-industry' },
    { label: 'QA & Delivery', icon: 'fa-solid fa-truck-fast' },
  ];

  return (
    <>
      {/* (1) Intro Panel */}
      <div className="we-panel we-intro tp-panel-intro tp-reveal">
        <h3 className="we-title" style={{ marginTop: '0.5rem' }}>TOAN PHAT PRINTING & PACKAGING</h3>
        <p className="we-subtitle">Sales &amp; Marketing Executive | 07/2025 – 12/2025</p>
        <div className="we-body">
          <p>
            At a leading printing &amp; packaging manufacturer, I bridged client needs with production
            realities — turning requirements into flawless execution plans while coordinating across
            R&amp;D, technical, and production teams.
          </p>
        </div>

        {/* Client chips */}
        <div className="tp-client-chips">
          {clients.map((c) => (
            <span
              key={c.name}
              className="tp-chip"
              style={{ '--tp-chip-color': c.color } as React.CSSProperties}
            >
              <span className="tp-chip-flag">{c.flag}</span>
              {c.name}
            </span>
          ))}
        </div>

        {/* Industry badge */}
        <div className="tp-industry-badge">
          <i className="fa-solid fa-box-open"></i>
          <span>Printing &amp; Packaging Industry</span>
        </div>
      </div>

      {/* (2) Global Clients Panel */}
      <div className="we-panel we-hero tp-reveal">
        <div className="we-panel-label">(1) Global Clients</div>
        <p className="tp-context-quote">
          Delivered end-to-end packaging solutions for multinational clients across{' '}
          <strong>4 countries</strong>, ensuring international quality standards from design to delivery.
        </p>

        <div className="tp-client-grid">
          {clients.map((c, i) => (
            <div
              key={i}
              className="tp-client-card"
              style={{ '--tp-accent': c.color } as React.CSSProperties}
            >
              <div className="tp-client-flag">{c.flag}</div>
              <div className="tp-client-name">{c.name}</div>
              <div className="tp-client-country">{c.country}</div>
            </div>
          ))}
        </div>

        {/* Additional contributions */}
        <div className="tp-additional-row">
          {additionals.map((a, i) => (
            <div key={i} className="tp-additional-item">
              <i className={a.icon}></i>
              <span>{a.text}</span>
            </div>
          ))}
        </div>
      </div>

      {/* (3) Responsibilities Panel */}
      <div className="we-panel we-metrics tp-reveal">
        <div className="we-panel-label">(2) Key Responsibilities</div>
        <div className="tp-roles-list">
          {responsibilities.map((r, i) => (
            <div key={i} className="tp-role-card">
              <div className="tp-role-icon">
                <i className={r.icon}></i>
              </div>
              <div className="tp-role-body">
                <strong>{r.title}</strong>
                <p>{r.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* (4) Full-width Image Gallery */}
      <div className="we-panel we-typography tp-reveal" style={{ gridArea: 'typography' }}>
        <div className="we-panel-label">(3) Company Showcase</div>
        <p className="we-body" style={{ marginBottom: '1.5rem' }}>
          From ISO-certified manufacturing facilities to a diverse packaging portfolio — Toan Phat
          delivers premium solutions for global brands.
        </p>

        <div className="tp-gallery-grid">
          <div className="tp-gallery-item tp-gallery-item--tall">
            <img src={img1} alt="Toan Phat Certifications & Products" className="tp-gallery-img" />
            <div className="tp-gallery-overlay">
              <span className="tp-gallery-tag">ISO Certified</span>
              <p className="tp-gallery-caption">BVQA ISO 14001:2015 · Packaging Solutions</p>
            </div>
          </div>

          <div className="tp-gallery-item">
            <img src={img2} alt="Toan Phat Company Story" className="tp-gallery-img" />
            <div className="tp-gallery-overlay">
              <span className="tp-gallery-tag">Manufacturing</span>
              <p className="tp-gallery-caption">Factory & Operations · 20+ Years</p>
            </div>
          </div>

          <div className="tp-gallery-item">
            <img src={img3} alt="Toan Phat Products Catalog" className="tp-gallery-img" />
            <div className="tp-gallery-overlay">
              <span className="tp-gallery-tag">Product Range</span>
              <p className="tp-gallery-caption">Boxes · Trays · Labels · Hangtags</p>
            </div>
          </div>
        </div>

        {/* Marquee */}
        <div className="tp-marquee-container">
          <div className="tp-marquee-track">
            {[1, 2, 3, 4].map((s) => (
              <div key={s} className="tp-marquee-content" aria-hidden={s > 1}>
                {[
                  'Project Management', 'Packaging', 'ISO Certified', 'Fengtay',
                  'EMSV', 'QuickPack', 'Hoyalens', 'TVC Production', 'intoanphat.com',
                  'R&D Coordination', 'Production Planning',
                ].map((tag) => (
                  <span key={tag} className="tp-marquee-tag">{tag}</span>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* (5) Project Flow / Side Panel */}
      <div className="we-panel we-patterns tp-reveal">
        <div className="we-panel-label">(4) Project Flow</div>

        <div className="tp-pipeline">
          {pipeline.map((p, i) => (
            <div key={i} className="tp-pipe-step">
              <div className="tp-pipe-icon-wrap">
                <i className={p.icon}></i>
              </div>
              <div className="tp-pipe-label">{p.label}</div>
              {i < pipeline.length - 1 && <div className="tp-pipe-connector"></div>}
            </div>
          ))}
        </div>

        {/* Brand palette */}
        <div className="tp-brand-palette">
          <div className="tp-b-color" style={{ background: '#c89b3c' }}></div>
          <div className="tp-b-color" style={{ background: '#3d2b1f' }}></div>
          <div className="tp-b-color" style={{ background: '#f5f0e8', border: '1px solid #ccc' }}></div>
          <div className="tp-b-color" style={{ background: '#1a3c5e' }}></div>
        </div>
      </div>
    </>
  );
};

export default ToanPhatExperience;
