/* HighlandExperience.tsx */
import { useRef, useState, useEffect } from 'react';
import armImg from '../assets/images/workexperience-arm.png';
import '../styles/HighlandExperience.css';

const HighlandExperience = () => {
  const carouselRef = useRef<HTMLDivElement>(null);
  const [activeVideo, setActiveVideo] = useState<string | null>(null);
  const [isDown, setIsDown] = useState(false);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  const armRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const updatePosition = () => {
      if (armRef.current && armRef.current.parentElement) {
        const parentRect = armRef.current.parentElement.getBoundingClientRect();
        const distanceToScreenRight = window.innerWidth - parentRect.right - 10;
        armRef.current.style.right = `-${distanceToScreenRight}px`;
      }
    };

    const timer = setTimeout(updatePosition, 50);
    window.addEventListener('resize', updatePosition);
    return () => {
      clearTimeout(timer);
      window.removeEventListener('resize', updatePosition);
    };
  }, []);



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
  // All 12 images from src/assets/images/WorkExperience
  const gallery = Array.from({ length: 12 }, (_, i) =>
    new URL(`../assets/images/WorkExperience/highland (${i + 1}).png`, import.meta.url).href
  );

  // Mapping specific images for evidence
  const imgs = {
    header: gallery[1],
    metrics: gallery[2],
    profileBefore: gallery[3],
    profileAfter: gallery[0],
    comment1: gallery[8],
    comment2: gallery[9],
    comment3: gallery[10],
    brandLogo: gallery[11],
  };

  // Viral showcase images (from uploaded assets)
  const imgComment1 = new URL('../assets/images/WorkExperience/highland (9).png', import.meta.url).href;
  const imgComment2 = new URL('../assets/images/WorkExperience/highland (10).png', import.meta.url).href;
  const imgComment3 = new URL('../assets/images/WorkExperience/highland (11).png', import.meta.url).href;
  const imgSoundPage = new URL('../assets/images/WorkExperience/highland (12).png', import.meta.url).href;

  const tiktokVideos = [
    '7441885831670942994',
    '7449315026806131975',
    '7457846579706268935'
  ];

  return (
    <>
      {/* (1) Project Panel */}
      <div className="we-panel we-intro hl-panel-premium reveal-on-scroll">
        <h3 className="we-title" style={{ marginTop: '0.5rem' }}>HIGHLANDS TIKTOK</h3>
        <p className="we-subtitle">Social media marketing | 08/2024 – 04/2025</p>
        <div className="we-body">
          <p>
            From promotions to entertainment and trending content — I took part in Highlands’ TikTok journey from the very beginning,
            focusing on consistent content production and community engagement.
          </p>
        </div>
        <img className="hl-header-img" src={imgs.header} alt="Highlands TikTok Header" />
      </div>

      {/* (2) Performance Metrics (Moved to Left Column) */}
      <div className="we-panel we-patterns reveal-on-scroll">
        <div className="we-panel-label">Performance Metrics</div>
        <p className="hl-timeline-text">
          From <strong>01/09/2024</strong> to <strong>12/01/2025</strong>, the data speaks for itself:
        </p>

        <ul className="hl-metrics-list">
          <li>
            <strong>207K</strong>
            <span className="hl-metric-label">Likes <span className="hl-growth-chip">↑ 52.9%</span></span>
          </li>
          <li>
            <strong>4.1K</strong>
            <span className="hl-metric-label">Comments <span className="hl-growth-chip">↑ 166.2%</span></span>
          </li>
          <li>
            <strong>23K</strong>
            <span className="hl-metric-label">Shares <span className="hl-growth-chip">↑ 317.1%</span></span>
          </li>
        </ul>

        <div className="hl-metrics-evidence" style={{ marginTop: '1.5rem' }}>
          <img className="hl-metrics-img" src={imgs.metrics} alt="Performance Data Proof" />
        </div>
      </div>

      {/* (3) Follower Growth Section (Remains Hero area) */}
      <div className="we-panel we-hero reveal-on-scroll" style={{ position: 'relative' }}>
        <div className="we-panel-label">Follower Growth</div>
        <div className="hl-growth-narrative">
          <div className="hl-comparison-v2">
            <div className="hl-phone-block">
              <div className="iphone-wrapper small">
                <div className="iphone-notch"></div>
                <img className="iphone-screen" src={imgs.profileBefore} alt="Profile Sep 2024" />
              </div>
            </div>

            <div className="hl-comp-connector">
              <div className="hl-growth-bubble">+12.73%</div>
              <span className="hl-arrow">→</span>
            </div>

            <div className="hl-phone-block">
              <div className="iphone-wrapper small">
                <div className="iphone-notch"></div>
                <img className="iphone-screen" src={imgs.profileAfter} alt="Profile Now" />
              </div>
            </div>
          </div>
          <p className="we-body" style={{ marginTop: '1rem', textAlign: 'center' }}>
            Together with my team, we grew the account’s follower base by <strong>12.73%</strong>
            connecting with thousands of new Highlands fans.
          </p>
        </div>

        {/* Global Arm tracked dynamically to viewport edge */}
        <div className="hl-global-fixed-arm" aria-hidden="true" ref={armRef}>
          <img src={armImg} alt="Arm" className="hl-arm-image" />
        </div>
      </div>

      {/* (4) Massive Viewership & Interactive Feedback */}
      <div className="we-panel we-typography" style={{ gridArea: 'typography' }}>
        <div className="we-panel-label">Massive Viewership & Community</div>

        {/* ── Viral Video Showcase ─────────────────────────── */}
        <div className="hl-viral-showcase">
          <p className="hl-viral-heading">
            This includes results from a viral video my team worked on:
          </p>

          <div className="hl-viral-stats">
            <div className="hl-vstat">
              <div className="hl-vstat-icon"><i className="fa-solid fa-eye" /></div>
              <div className="hl-vstat-info">
                <span className="hl-vstat-num">1.4M</span>
                <span className="hl-vstat-label">Views</span>
              </div>
            </div>
            <div className="hl-vstat">
              <div className="hl-vstat-icon"><i className="fa-solid fa-heart" /></div>
              <div className="hl-vstat-info">
                <span className="hl-vstat-num">28.9K</span>
                <span className="hl-vstat-label">Likes</span>
              </div>
            </div>
            <div className="hl-vstat">
              <div className="hl-vstat-icon"><i className="fa-solid fa-comments" /></div>
              <div className="hl-vstat-info">
                <span className="hl-vstat-num">8.2K</span>
                <span className="hl-vstat-label">Buzz</span>
              </div>
            </div>
          </div>

          <div className="hl-viral-grid">
            {/* Col 1: TikTok video embed */}
            <div className="hl-viral-col hl-viral-col--video">
              <div className="hl-viral-tiktok-wrapper">
                <iframe
                  src="https://www.tiktok.com/player/v1/7438975789183307015?autoplay=0"
                  allow="autoplay; encrypted-media; gyroscope; picture-in-picture; fullscreen"
                  allowFullScreen
                  title="Viral TikTok Video"
                />
              </div>
            </div>

            {/* Col 2: 3 comment screenshots stacked */}
            <div className="hl-viral-col hl-viral-col--comments">
              {[imgComment1, imgComment2, imgComment3].map((src, i) => (
                <div key={i} className="hl-comment-card">
                  <img src={src} alt={`Community comment ${i + 1}`} />
                </div>
              ))}
            </div>

            <div className="hl-viral-col hl-viral-col--stats">
              <div className="hl-viral-phone-wrapper">
                <div className="hl-viral-phone-screen">
                  <img src={imgSoundPage} alt="Sangkran Magic TikTok Sound" />
                </div>
                <div className="hl-viral-phone-indicator">
                  <span />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Live TikTok Video Carousel */}
        <div className="hl-viewership-intro">
          <div className="hl-intro-line" />
          <p className="hl-intro-text">
            PRODUCED SEVERAL OTHER VIRAL VIDEOS
          </p>
          <div className="hl-intro-line" />
        </div>
        <div
          className={`hl-video-carousel ${isDragging ? 'is-dragging' : ''}`}
          ref={carouselRef}
          onMouseDown={handleMouseDown}
          onMouseLeave={handleMouseLeave}
          onMouseUp={handleMouseUp}
          onMouseMove={handleMouseMove}
        >
          {tiktokVideos.map((id) => (
            <div key={id} className="hl-video-card-interactive" onMouseLeave={() => setActiveVideo(null)}>
              <div className="tiktok-video-wrapper">
                <div
                  className={`iframe-drag-overlay ${activeVideo === id ? 'inactive' : ''}`}
                  onMouseUp={() => {
                    if (!isDragging) {
                      setActiveVideo(id);
                    }
                  }}
                />
                <iframe
                  src={`https://www.tiktok.com/player/v1/${id}?autoplay=0`}
                  allow="autoplay; encrypted-media; gyroscope; picture-in-picture; fullscreen"
                  allowFullScreen
                  title={`TikTok video ${id}`}
                  style={{ background: 'black' }}
                ></iframe>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default HighlandExperience;
