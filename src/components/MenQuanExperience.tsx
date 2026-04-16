/* MenQuanExperience.tsx */
import '../styles/MenQuanExperience.css';

const MenQuanExperience = () => {
  const menquanImg = new URL('../assets/images/WorkExperience/menquan.png', import.meta.url).href;
  const menquan1Img = new URL('../assets/images/WorkExperience/menquan1.png', import.meta.url).href;
  const brands = [
    { name: 'Men Quan', tone: 'var(--color-highlight-2)' },
    { name: 'Renge Ramen', tone: 'var(--color-text-main)' },
    { name: 'TikTok Growth', tone: '#2b7fff' }
  ];

  const tiktokVideos = [
    { id: '7603997952889179400', label: '@rengeramen_nguyenhongdao' },
    { id: '7616340201970945300', label: '@menquan691' }
  ];

  const facebookReel = "https://www.facebook.com/reel/1416497186550250";

  return (
    <>
      {/* (1) Intro Panel */}
      <div className="we-panel we-intro mq-panel-premium reveal-on-scroll">
        <h3 className="we-title" style={{ marginTop: '0.5rem' }}>H&L CONCEPT</h3>
        <p className="we-subtitle">01/2026 – Present</p>

        <div className="we-body mq-intro-copy">
          <p>
            I worked on Marketing Communications & Trade Marketing for Men Quán and Renge Ramen. 
            I developed communication and trade marketing plans, leading content, visual direction, 
            activations, competitor analysis, and growth strategy.
          </p>
        </div>

        <div className="mq-client-chips">
          {brands.map((brand) => (
            <span
              key={brand.name}
              className="mq-chip"
              style={{ '--mq-chip-color': brand.tone } as React.CSSProperties}
            >
              {brand.name}
            </span>
          ))}
        </div>

        <div className="mq-industry-badge">
          <i className="fa-solid fa-utensils"></i>
          <span>F&amp;B Marketing Communications</span>
        </div>
      </div>

      {/* (2) Analytics Highlight Panel */}
      <div className="we-panel we-hero reveal-on-scroll">
        <div className="we-panel-label">(1) Performance Analytics</div>
        
        <div className="mq-metrics-highlight">
          <div className="mq-image-container">
            <img src={menquanImg} alt="Analytics Overview" className="mq-analytics-img" />
            {/* Callouts for key stats (less sensitive to responsive scaling) */}
            <div className="mq-stat-callout mq-stat-callout--primary mq-h-video-views" aria-label="Video views: 185,488 (+304.33%)">
              <span className="mq-callout-sparkle" aria-hidden="true"></span>
              <span className="mq-callout-value">185,488</span>
              <span className="mq-callout-delta mq-callout-delta--up">+304.33%</span>
            </div>
            <div className="mq-stat-callout mq-stat-callout--secondary mq-h-reached-audience" aria-label="Reached audience: 162,392 (+468.36%)">
              <span className="mq-callout-sparkle" aria-hidden="true"></span>
              <span className="mq-callout-value">162,392</span>
              <span className="mq-callout-delta mq-callout-delta--up">+468.36%</span>
            </div>
          </div>

          <div className="mq-image-container">
            <img src={menquan1Img} alt="Audience Growth Chart" className="mq-analytics-img" />
            {/* Peaks emphasis (visual only) */}
            <div className="mq-chart-peak mq-h-chart-top" data-label="Peak"></div>
            <div className="mq-chart-peak mq-h-chart-bottom" data-label="Peak"></div>
          </div>
        </div>

        <div className="mq-growth-card">
          <p className="mq-growth-text">
            Scaled TikTok reach to <strong>162K users (+468.36%)</strong>  and <strong>185K views (+304.33%) </strong>  
            within <strong>12 weeks</strong> through content optimization.
          </p>
        </div>
      </div>

      {/* (3) Video Content Showcase */}
      <div className="we-panel we-typography reveal-on-scroll" style={{ gridArea: 'typography' }}>
        <div className="we-panel-label">(2) Key Content Development</div>
        <span className="mq-section-label">Some of the key videos I developed:</span>

        <div className="mq-video-gallery">
          {/* Facebook Reel - Using iframe embed if possible, or link card */}
          <div className="mq-video-wrapper">
             <iframe 
                src={`https://www.facebook.com/plugins/video.php?href=${encodeURIComponent(facebookReel)}&show_text=false&t=0`} 
                title="Facebook Reel"
                allowFullScreen={true}
                allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
                style={{ width: '100%', height: '100%' }}
             ></iframe>
          </div>

          {/* TikTok Videos */}
          {tiktokVideos.map((video) => (
            <div key={video.id} className="mq-video-wrapper">
              <iframe
                src={`https://www.tiktok.com/player/v1/${video.id}?autoplay=0`}
                title={`TikTok ${video.label}`}
                allow="autoplay; encrypted-media; gyroscope; picture-in-picture; fullscreen"
                allowFullScreen
              ></iframe>
            </div>
          ))}
        </div>
      </div>

      {/* (4) Pattern / Identity Decoration */}
      <div className="we-panel we-patterns reveal-on-scroll">
        <div className="we-panel-label">(3) Brand Growth</div>
        <div className="we-metric-grid">
            <div className="we-metric-card m1">
                <div className="we-metric-value">162K</div>
                <div className="we-metric-label">Reached Audience</div>
            </div>
            <div className="we-metric-card m2">
                <div className="we-metric-value">185K</div>
                <div className="we-metric-label">Video Views</div>
            </div>
        </div>
        <p className="we-body" style={{ marginTop: '1.5rem' }}>
            Consistently delivering high-impact content that resonates with the F&B community, 
            driving significant organic growth for Men Quán and Renge Ramen.
        </p>
      </div>
    </>
  );
};

export default MenQuanExperience;
