
import React from 'react';

const HeroArea = () => {
  return (
    <>
      <section className="hero-wrapper">
        <div className="divider"></div>

        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="hero-content">
                <h2 className="mb-0 wow fadeInUp text-center" data-wow-duration="1000ms" data-wow-delay="500ms">
                  专注商业生态<br />
                  综合解决方案
                </h2>
                <p className="hero-subtitle mt-4 wow fadeInUp text-center" data-wow-duration="1000ms" data-wow-delay="1000ms">
                  让资本和智本同时为商业赋能
                </p>
                <div className="text-center mt-4 wow fadeInUp" data-wow-duration="1000ms" data-wow-delay="1500ms">
                  <a href="http://localhost:3000/about-us" className="btn btn-primary">
                    了解更多
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="divider"></div>
      </section>
    </>
  );
};

export default HeroArea;