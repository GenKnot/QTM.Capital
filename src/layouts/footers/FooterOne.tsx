
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

                <a href="/">
                  <img className="dark-logo navbar-logo" src="/logo-main.png" alt="" style={{ maxWidth: '150px', maxHeight: '40px', width: 'auto', height: 'auto', objectFit: 'contain' }} />
                  <img className="light-logo navbar-logo" src="/logo-main.png" alt="" style={{ maxWidth: '150px', maxHeight: '40px', width: 'auto', height: 'auto', objectFit: 'contain' }} />
                </a>

                <p className="mb-0">让资本和智本同时为商业赋能</p>
              </div>
            </div>

            <div className="col-12 col-md-6 col-xl">
              <div className="footer-card">
                <h5 className="mb-0">Xpend咨询</h5>

                <ul className="footer-nav">
                  <li><a href="/quantum-consulting">Xpend咨询</a></li>
                  <li><a href="/brand-marketing">品牌营销</a></li>
                  <li><a href="/#service-area">核心服务</a></li>
                  <li><a href="/about-us">使命愿景</a></li>
                </ul>
              </div>
            </div>

            <div className="col-12 col-md-6 col-xl">
              <div className="footer-card">
                <h5 className="mb-0">Xpend资本</h5>

                <ul className="footer-nav">
                  <li><a href="/xpend-capital">Xpend资本</a></li>
                  <li><a href="/industrial-mergers">产业并购</a></li>
                  <li><a href="/group-organizer">攒局者</a></li>
                  <li><a href="/group-participant">入局者</a></li>
                  <li><a href="/quantum-partners">Xpend合伙人</a></li>
                </ul>
              </div>
            </div>

            <div className="col-12 col-md-6 col-xl-4">
              <div className="footer-card">
                <h5 className="mb-0">联系我们</h5>
                <p className="mb-3">随时联系我们</p>
                
                <div className="contact-info">
                  <p className="mb-2">
                    <span className="material-symbols-outlined me-2">email</span>
                    info@xpendcap.com
                  </p>
                  <p className="mb-2">
                    <span className="material-symbols-outlined me-2">phone</span>
                    +1 470-868-0868
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
              <p className="mb-0 copyright">Copyright © {new Date().getFullYear()} <span id="year"></span> <a href="#"> Xpend.Capital </a></p>
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