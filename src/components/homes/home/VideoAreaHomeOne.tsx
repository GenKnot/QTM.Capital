'use client';

import { useEffect } from 'react'; 
import 'jarallax/dist/jarallax.css';

const VideoAreaHomeOne: React.FC = () => {
  useEffect(() => {
    const jarallaxElements = document.querySelectorAll<HTMLElement>('.jarallax');
  }, []);

  return (
    <div
      className="video-wrapper jarallax"
      data-jarallax=""
      data-speed="0.6"
      style={{
        backgroundImage: `url(/Image/1.jpg)`,
        backgroundAttachment: 'fixed',
        minHeight: '400px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative'
      }}
    >
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: 'rgba(0, 0, 0, 0.5)',
          zIndex: 1
        }}
      />
      
      <div
        style={{
          position: 'relative',
          zIndex: 2,
          textAlign: 'center',
          color: 'white'
        }}
      >
        <h1
          style={{
            fontSize: '4rem',
            fontWeight: 'bold',
            marginBottom: '1rem',
            textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)'
          }}
        >
          商业服务首选
        </h1>
        <p
          style={{
            fontSize: '1.5rem',
            opacity: 0.9,
            textShadow: '1px 1px 2px rgba(0, 0, 0, 0.5)'
          }}
        >
          专业 · 可靠 · 高效
        </p>
      </div>
    </div>
  );
};

export default VideoAreaHomeOne;
