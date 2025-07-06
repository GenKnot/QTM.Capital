
import React from 'react';

const FooterOne = ({ style_2 }: any) => {
  return (
    <>
      <footer className={`footer-wrapper ${style_2 ? 'footer-2 bg-secondary' : ''}`}>
        <div className="divider"></div>

        <div className="container">
          <div className="row g-5">

            <div className="col-12 col-md-6 col-xl">
              <div className="footer-card">

                <a href="#">
                  <span className="dark-logo" style={{ fontSize: '2rem', fontWeight: 'bold', color: '#ECC80B' }}>QTM</span>
                  <span className="light-logo" style={{ fontSize: '2rem', fontWeight: 'bold', color: '#ECC80B' }}>QTM</span>
                </a>

                <p className="mb-0">让每个中小企业都有获得资本加持的权利，助力企业腾飞，共创商业未来</p>
              </div>
            </div>

            <div className="col-12 col-md-6 col-xl">
              <div className="footer-card">
                <h5 className="mb-0">量子咨询</h5>

                <ul className="footer-nav">
                  <li><a href="/quantum-consulting">量子咨询</a></li>
                  <li><a href="/#service-area">核心服务</a></li>
                  <li><a href="/#about-area">使命愿景</a></li>
                  <li><a href="/#workprocess-area">价值观</a></li>
                  <li><a href="/contact">联系我们</a></li>
                </ul>
              </div>
            </div>

            <div className="col-12 col-md-6 col-xl">
              <div className="footer-card">
                <h5 className="mb-0">量子资本</h5>

                <ul className="footer-nav">
                  <li><a href="/industrial-mergers">产业并购</a></li>
                  <li><a href="/group-organizer">攒局者</a></li>
                  <li><a href="/group-participant">入局者</a></li>
                  <li><a href="/quantum-partners">量子合伙人</a></li>
                  <li><a href="/contact">联系我们</a></li>
                </ul>
              </div>
            </div>

            <div className="col-12 col-md-6 col-xl-4">
              <div className="footer-card">
                <h5 className="mb-0">联系我们</h5>
                <p className="mb-3">如果您有任何问题或需要咨询服务，请随时联系我们</p>
                
                <div className="contact-info">
                  <p className="mb-2">
                    <span className="material-symbols-outlined me-2">email</span>
                    info@qtm.capital
                  </p>
                  <p className="mb-2">
                    <span className="material-symbols-outlined me-2">phone</span>
                    +1 (555) 123-4567
                  </p>
                  <p className="mb-0">
                    <span className="material-symbols-outlined me-2">location_on</span>
                    全球服务网络
                  </p>
                </div>

              </div>
            </div>

          </div>
        </div>

        <div className="container">
          <div className="footer-line"></div>
        </div>

        <div className="container">
          <div className="row align-items-center">

            <div className="col-12 col-lg-6">
              <p className="mb-0 copyright">Copyright © {new Date().getFullYear()} <span id="year"></span> <a href="#"> QTM.Capital </a></p>
            </div>

            <div className="col-12 col-lg-6">
              <div className="footer-bottom-nav">
                <a href="#">条款和条件</a>
                <a href="#">隐私政策</a>
              </div>
            </div>
          </div>
        </div>

        <div className="divider-sm"></div>
      </footer>
    </>
  );
};

export default FooterOne;