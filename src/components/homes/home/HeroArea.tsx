
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
                  让资本和智本同时为商业赋能。量子咨询与量子资本联手，为中小企业打造从品牌营销到战略规划，从人才匹配到资本方案的全方位服务体系。通过"攒局者"式融资并购模式，让体量相同的中小企业抱团成长，共同享受资本红利。
                </p>
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