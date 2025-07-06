
import React from 'react';

const CtaArea = () => {
  return (
    <>
      <div className="cta-wrap jarallax" data-jarallax="" data-speed="0.6"
        style={{ backgroundImage: "url(/Image/HeroBG.jpg)", backgroundAttachment: "fixed" }}>
        <div className="divider"></div>

        <div className="container">
          <div className="row justify-content-end">
            <div className="col-12 col-sm-11 col-md-10 col-lg-7 col-xl-6 col-xxl-5">
              <div className="cta-card">

                <div className="total-clients-wrap">
                  <div className="total-number">
                    <h3>911+</h3>
                    <p className="mb-0">服务企业</p>
                  </div>

                  <div className="total-clients-wrap" >
                    <p className="mb-0 text-white">服务企业</p>
                  </div>


                </div>

                <div className="cta-stats">
                  <div>
                    <h2>13+</h2>
                    <p className="mb-0">从业经验</p>
                  </div>

                  <div>
                    <h2>7+</h2>
                    <p className="mb-0">并购案例</p>
                  </div>

                  <div>
                    <h2>8.1B</h2>
                    <p className="mb-0">成交市值</p>
                  </div>

                  <div>
                    <h2>45+</h2>
                    <p className="mb-0">行业奖项</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="divider"></div>
      </div>
    </>
  );
};

export default CtaArea;