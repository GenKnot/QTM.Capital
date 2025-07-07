'use client';

import { useEffect } from 'react'; 
import 'jarallax/dist/jarallax.css';

const PartnersStatsArea: React.FC = () => {
  useEffect(() => {
    const jarallaxElements = document.querySelectorAll<HTMLElement>('.jarallax');
  }, []);

  return (
    <div
      className="partners-stats-wrapper jarallax"
      data-jarallax=""
      data-speed="0.6"
      style={{
        backgroundImage: `url(/Image/bg2.jpeg)`,
        backgroundAttachment: 'fixed',
        padding: '100px 0',
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
          backgroundColor: 'rgba(0, 0, 0, 0.3)',
          zIndex: 1
        }}
      />
      
      <div className="container" style={{ position: 'relative', zIndex: 2 }}>
        
        <div className="row justify-content-center mb-5">
          <div className="col-12">
            <div className="stats-grid d-flex flex-wrap justify-content-center align-items-center text-center">
              <div className="stat-item">
                <h2 className="text-white mb-2" style={{ fontSize: '3rem', fontWeight: 'bold' }}>911+</h2>
                <p className="text-white-50 mb-0">服务企业</p>
              </div>

              <div className="stat-item">
                <h2 className="text-white mb-2" style={{ fontSize: '3rem', fontWeight: 'bold' }}>13+</h2>
                <p className="text-white-50 mb-0">从业经验</p>
              </div>

              <div className="stat-item">
                <h2 className="text-white mb-2" style={{ fontSize: '3rem', fontWeight: 'bold' }}>7+</h2>
                <p className="text-white-50 mb-0">并购案例</p>
              </div>

              <div className="stat-item">
                <h2 className="text-white mb-2" style={{ fontSize: '3rem', fontWeight: 'bold' }}>8.1B</h2>
                <p className="text-white-50 mb-0">成交市值</p>
              </div>

              <div className="stat-item">
                <h2 className="text-white mb-2" style={{ fontSize: '3rem', fontWeight: 'bold' }}>45+</h2>
                <p className="text-white-50 mb-0">行业奖项</p>
              </div>
            </div>
          </div>
        </div>

        
        <div className="partners-section">
          <div className="row g-4 align-items-center">
            <div className="col-12 col-md-3">
              <h4 className="mb-0 text-white">
                <span className="text-primary">911+</span> {' '}
                服务企业遍布全球
              </h4>
            </div>

            <div className="col-12 col-md-9">
              <div className="partners-slide ms-md-4 d-flex flex-wrap align-items-center justify-content-between">
                <img 
                  src="/Image/1.png" 
                  alt="合作伙伴" 
                  style={{ 
                    maxHeight: '60px', 
                    filter: 'brightness(0) invert(1)',
                    opacity: '0.8'
                  }} 
                />
                <img 
                  src="/Image/2.png" 
                  alt="合作伙伴" 
                  style={{ 
                    maxHeight: '60px', 
                    filter: 'brightness(0) invert(1)',
                    opacity: '0.8'
                  }} 
                />
                <img 
                  src="/Image/3.png" 
                  alt="合作伙伴" 
                  style={{ 
                    maxHeight: '60px', 
                    filter: 'brightness(0) invert(1)',
                    opacity: '0.8'
                  }} 
                />
                <img 
                  src="/Image/4.png" 
                  alt="合作伙伴" 
                  style={{ 
                    maxHeight: '60px', 
                    filter: 'brightness(0) invert(1)',
                    opacity: '0.8'
                  }} 
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .stats-grid {
          gap: 60px;
        }

        .stat-item {
          min-width: 150px;
        }

        .partners-slide {
          gap: 30px;
        }

        .partners-slide img {
          transition: all 0.3s ease;
        }

        .partners-slide img:hover {
          opacity: 1 !important;
          transform: scale(1.1);
        }

        @media (max-width: 768px) {
          .stats-grid {
            gap: 40px;
          }
          
          .stat-item h2 {
            font-size: 2.5rem !important;
          }

          .partners-slide {
            justify-content: center !important;
            gap: 20px;
          }
        }
      `}</style>
    </div>
  );
};

export default PartnersStatsArea; 