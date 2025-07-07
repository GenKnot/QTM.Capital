"use client"

import React from 'react';

const XpendCapitalArea = () => {
  return (
    <>
      <div id="xpend-capital-area" className="xpend-capital-wrapper bg-secondary">
        <div className="divider"></div>

        <div className="container">
          <div className="row g-4 g-xl-5 align-items-center">
            <div className="col-12 col-lg-5">
              <div className="xpend-capital-left">
                <div className="section-heading">
                  <h2 className="mb-0">Xpend资本</h2>
                  <h3 className="subtitle-text">
                    让每个中小型企业都有获得资本加持的权利
                  </h3>
                </div>

                <div className="mt-4">
                  <a href="http://localhost:3000/xpend-capital" className="btn btn-primary">
                    <span>了解更多</span><span>Xpend资本</span>
                  </a>
                </div>
              </div>
            </div>
            <div className="col-12 col-lg-7">
              <div className="xpend-capital-content ps-lg-4">
                <div className="content-paragraphs">
                  <p className="lead-paragraph">
                    无论在经济发展的哪个周期，中小企业永远都是推动社会经济发展的核心动力。但是让人遗憾的是，这些为社会贡献了99%活力以及就业岗位的中小企业，却仅仅能在资本市场里获得甚至都不到1%的收益。
                  </p>

                  <p className="mission-paragraph">
                    让每个中小型企业都有获得资本加持的权利，带着这样的愿景，我们来自全球各地的投资人、基金管理人、企业家、经济学者、管理学家、品牌营销专家共同成立了Xpend资本，合力打造了"攒局者"式融资并购，专注于帮助中小企业踏入资本市场，抱团共享资本市场红利。
                  </p>

                  <p className="vision-paragraph">
                    量子，是微观世界最小的单位，但却因为量子力学的出现，而有了技术行业的一次次变革。我们相信，中小型企业就如同量子一样，只要引领得当，会迸发出最惊人的价值。
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="divider"></div>
      </div>

      <style jsx>{`
        .xpend-capital-left {
          padding-right: 2rem;
        }

        .subtitle-text {
          margin: 20px 0 0 0;
          font-size: 1.4rem;
          font-weight: 500;
          color: #FFD700;
          letter-spacing: 0.5px;
          text-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);
          line-height: 1.4;
        }

        .content-paragraphs {
          max-width: 100%;
        }

        .lead-paragraph {
          font-size: 1.1rem;
          color: #E9ECEF;
          line-height: 1.8;
          margin-bottom: 1.8rem;
          font-weight: 400;
          letter-spacing: 0.3px;
        }

        .mission-paragraph {
          font-size: 1rem;
          color: #C8C8CD;
          line-height: 1.8;
          margin-bottom: 1.8rem;
          letter-spacing: 0.3px;
        }

        .vision-paragraph {
          font-size: 1rem;
          color: #C8C8CD;
          line-height: 1.8;
          margin-bottom: 0;
          letter-spacing: 0.3px;
          font-style: italic;
          position: relative;
          padding-left: 1rem;
        }

        .vision-paragraph::before {
          content: '"';
          position: absolute;
          left: 0;
          top: -5px;
          font-size: 2rem;
          color: #FFD700;
          line-height: 1;
        }

        .vision-paragraph::after {
          content: '"';
          margin-left: 0.2rem;
          font-size: 1.2rem;
          color: #FFD700;
        }

        :global(.light-mode) .subtitle-text {
          color: #FF8C00;
        }

        :global(.light-mode) .lead-paragraph {
          color: #495057;
        }

        :global(.light-mode) .mission-paragraph,
        :global(.light-mode) .vision-paragraph {
          color: #6C757D;
        }

        :global(.light-mode) .vision-paragraph::before,
        :global(.light-mode) .vision-paragraph::after {
          color: #FF8C00;
        }

        @media (max-width: 992px) {
          .xpend-capital-left {
            padding-right: 0;
            text-align: center;
            margin-bottom: 2rem;
          }

          .xpend-capital-content {
            text-align: center;
          }
        }

        @media (max-width: 768px) {
          .subtitle-text {
            font-size: 1.2rem;
            margin-top: 15px;
            line-height: 1.3;
          }
          
          .lead-paragraph,
          .mission-paragraph,
          .vision-paragraph {
            font-size: 0.95rem;
            margin-bottom: 1.5rem;
          }

          .btn {
            width: auto;
            min-width: 200px;
          }
        }

        @media (max-width: 576px) {
          .subtitle-text {
            font-size: 1.1rem;
            padding: 0 10px;
          }

          .vision-paragraph {
            padding-left: 0.5rem;
          }

          .btn {
            width: 100%;
          }
        }
      `}</style>
    </>
  );
};

export default XpendCapitalArea; 