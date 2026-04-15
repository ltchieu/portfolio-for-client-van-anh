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
        const distanceToScreenRight = window.innerWidth - parentRect.right;
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

  // Intersection Observer for Scroll Animations
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
      { threshold: 0.15 }
    );

    document.querySelectorAll('.reveal-on-scroll, .hl-global-fixed-arm').forEach((el) => {
      observer.observe(el);
    });

    return () => observer.disconnect();
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

  const tiktokVideos = [
    '7438975789183307015',
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

      {/* (2) Follower Growth Section */}
      <div className="we-panel we-hero reveal-on-scroll" style={{ position: 'relative' }}>
        <div className="we-panel-label">(1) Follower Growth</div>
        <div className="hl-growth-narrative">
          <div className="hl-comparison-v2">
            <div className="hl-phone-block">
              <div className="iphone-wrapper small">
                <div className="iphone-notch"></div>
                <img className="iphone-screen" src={imgs.profileBefore} alt="Profile Sep 2024" />
              </div>
              <div className="hl-profile-tag">Sep 2024: 118.6K</div>
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
              <div className="hl-profile-tag highlighted">Now: 133.7K</div>
            </div>
          </div>
          <p className="we-body" style={{ marginTop: '1rem', textAlign: 'center' }}>
            Together with my team, we grew the account’s follower base by <strong>12.73%</strong>,
            connecting with thousands of new Highlands fans.
          </p>
        </div>

        {/* Global Arm tracked dynamically to viewport edge */}
        <div className="hl-global-fixed-arm" aria-hidden="true" ref={armRef}>
          <img src={armImg} alt="Arm" className="hl-arm-image" />
        </div>
      </div>

      {/* (3) Performance Metrics */}
      <div className="we-panel we-metrics reveal-on-scroll">
        <div className="we-panel-label">(2) Performance Metrics</div>
        <p className="hl-timeline-text">
          From <strong>01/09/2024</strong> to <strong>12/01/2025</strong>, the data speaks for itself:
        </p>
        <div className="hl-metrics-evidence">
          <img className="hl-metrics-img" src={imgs.metrics} alt="Performance Data Proof" />
          <ul className="hl-metrics-list">
            <li><strong>207K</strong> likes (↑ 52.9%)</li>
            <li><strong>4.1K</strong> comments (↑ 166.2%)</li>
            <li><strong>23K</strong> shares (↑ 317.1%)</li>
          </ul>
        </div>
      </div>

      {/* (4) Massive Viewership & Interactive Feedback */}
      <div className="we-panel we-typography" style={{ gridArea: 'typography' }}>
        <div className="we-panel-label">(4) Massive Viewership & Community</div>
        <div className="hl-viewership-intro">
          <p className="we-body">
            Some of our videos reached massive viewership — especially one that hit <span><strong>1.2M views!</strong></span>
          </p>
          <p>Scroll through our top-performing content below:</p>
        </div>

        {/* Live TikTok Video Carousel */}
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

        {/* Viewer Interaction/Comments Showcase */}
        <div className="hl-comments-showcase reveal-on-scroll">
          <p className="we-body" style={{ fontWeight: 600, marginBottom: '1rem', textAlign: 'center' }}>
            What viewers are saying:
          </p>
          <div className="hl-marquee-container">
            <div className="hl-marquee-track">
              {[1, 2, 3, 4].map((setIndex) => (
                <div key={setIndex} className="hl-marquee-content" aria-hidden={setIndex > 1}>
                  <div className="hl-comment-img-wrapper">
                    <img className="hl-comment-img" src={imgs.comment1} alt="Viewer Comment 1" />
                  </div>
                  <div className="hl-comment-img-wrapper">
                    <img className="hl-comment-img" src={imgs.comment2} alt="Viewer Comment 2" />
                  </div>
                  <div className="hl-comment-img-wrapper">
                    <img className="hl-comment-img" src={imgs.comment3} alt="Viewer Comment 3" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* (3) Brand Identity */}
      <div className="we-panel we-patterns reveal-on-scroll">
        <div className="we-panel-label">(3) Brand Identity</div>
        <img src={imgs.brandLogo} alt="Highlands Logo Identity" className="hl-brand-logo-img" />
        <div className="hl-palette small">
          <div className="hl-color red"></div>
          <div className="hl-color gold"></div>
          <div className="hl-color cream"></div>
        </div>
      </div>
    </>
  );
};

export default HighlandExperience;
