import { useEffect } from 'react';

interface InstagramEmbedProps {
  url: string;
}

declare global {
  interface Window {
    instgrm?: {
      Embeds: {
        process(): void;
      };
    };
  }
}

export default function InstagramEmbed({ url }: InstagramEmbedProps) {
  useEffect(() => {
    // Nếu script chưa có thì thêm vào
    if (!document.getElementById('instagram-embed-script')) {
      const script = document.createElement('script');
      script.id = 'instagram-embed-script';
      script.src = 'https://www.instagram.com/embed.js';
      script.async = true;
      document.body.appendChild(script);
    } else {
      // Script đã có rồi → gọi lại process() để render blockquote mới
      window.instgrm?.Embeds.process();
    }
  }, [url]);

  return (
    <blockquote
      className="instagram-media"
      data-instgrm-permalink={url}
      data-instgrm-version="14"
      style={{
        background: '#FFF',
        border: '0',
        borderRadius: '3px',
        boxShadow: '0 0 1px 0 rgba(0,0,0,0.5), 0 1px 10px 0 rgba(0,0,0,0.15)',
        margin: '0', // Changed to 0 to fit better in container
        maxWidth: '540px',
        minWidth: '326px',
        padding: '0',
        width: '100%',
      }}
    >
      <div style={{ padding: '16px' }}>
        <a href={url} target="_blank" rel="noreferrer" style={{ background: '#FFFFFF', textDecoration: 'none', width: '100%', color: '#000' }}>
          Xem trên Instagram
        </a>
      </div>
    </blockquote>
  );
}
