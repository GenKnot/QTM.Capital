"use client";

import React from 'react';

const JoinUsArea = () => {
  return (
    <>
      <div id="join-us-area" className="join-us-wrapper bg-secondary">
        <div className="divider"></div>

        <div className="container">
          <div className="row justify-content-center">
            <div className="col-12 col-lg-10 col-xl-8">
              <div className="join-us-content text-center">
                

                <div className="section-heading mb-5">
                  <h2 className="mb-0">你准备好与我们<br />与更多与你一样优秀的中小企业同行了吗？</h2>
                </div>

                <div className="content-paragraphs mb-5">
                  <div className="row g-4">
                    <div className="col-12 col-md-6">
                      <div className="choice-card h-100">
                        <h5 className="choice-title">"攒"局者</h5>
                        <p className="choice-description">
                          与我们同行，成为"攒局者"的核心，围绕你的企业打造独具自己风格的拟上市公司体系。
                        </p>
                      </div>
                    </div>
                    <div className="col-12 col-md-6">
                      <div className="choice-card h-100">
                        <h5 className="choice-title">"入"局者</h5>
                        <p className="choice-description">
                          成为"入局者"，加入适合你的行业、你的喜好、你的价值观的资本组局，共同打造上市公司体系，共享资本盛宴。
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="cta-button">
                  <a href="/industrial-mergers" className="btn btn-primary btn-lg">
                    <span>"攒"局与"入"局</span><span>产业并购</span>
                  </a>
                </div>

              </div>
            </div>
          </div>
        </div>

        <div className="divider"></div>
      </div>

      <style jsx>{`
        .join-us-content {
          padding: 2rem 0;
        }

        .choice-card {
          background: rgba(255, 255, 255, 0.05);
          border-radius: 15px;
          padding: 2rem 1.5rem;
          border: 1px solid rgba(255, 255, 255, 0.1);
          transition: all 0.3s ease;
        }

        .choice-card:hover {
          background: rgba(255, 255, 255, 0.08);
          transform: translateY(-5px);
          border-color: rgba(255, 255, 255, 0.2);
        }

        .choice-title {
          margin: 0 0 1rem 0;
          font-size: 1.5rem;
          font-weight: 600;
          color: #FFD700;
          letter-spacing: 0.5px;
        }

        .choice-description {
          font-size: 1rem;
          color: #C8C8CD;
          line-height: 1.8;
          margin-bottom: 0;
          letter-spacing: 0.3px;
        }

        .cta-button .btn {
          padding: 0.8rem 2.5rem;
          font-size: 1.1rem;
          border-radius: 50px;
          transition: all 0.3s ease;
        }

        .cta-button .btn:hover {
          transform: translateY(-2px);
          box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
        }

        :global(.light-mode) .choice-title {
          color: #FF8C00;
        }

        :global(.light-mode) .choice-description {
          color: #6C757D;
        }

        :global(.light-mode) .choice-card {
          background: rgba(0, 0, 0, 0.03);
          border-color: rgba(0, 0, 0, 0.1);
        }

        :global(.light-mode) .choice-card:hover {
          background: rgba(0, 0, 0, 0.05);
          border-color: rgba(0, 0, 0, 0.15);
        }

        @media (max-width: 768px) {
          .choice-card {
            padding: 1.5rem 1rem;
          }

          .choice-title {
            font-size: 1.3rem;
          }
          
          .choice-description {
            font-size: 0.95rem;
          }

          .cta-button .btn {
            padding: 0.7rem 2rem;
            font-size: 1rem;
          }
        }

        @media (max-width: 576px) {
          .join-us-content {
            padding: 1.5rem 0;
          }

          .choice-card {
            padding: 1.5rem;
            margin-bottom: 1rem;
          }

          .choice-title {
            font-size: 1.2rem;
          }

          .cta-button .btn {
            width: 100%;
            padding: 0.8rem 1.5rem;
          }
        }
      `}</style>
    </>
  );
};

export default JoinUsArea; 