
import React from 'react';
import Link from 'next/link';
import Breacrumb from '@/common/Breacrumb';
import Cta2Area from '../homes/home/Cta2Area';
import HeaderOne from '@/layouts/headers/HeaderOne';
import FooterOne from '@/layouts/footers/FooterOne';

const ErrorArea = () => {
  return (
    <>
      <HeaderOne />
      <Breacrumb title="404 错误" subtitle="404 错误" />
      <div className="error-content text-center">
        <div className="divider"></div>

        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="d-flex justify-content-center">
                <img className="pb-2 dark-mode-404" src="/assets/img/core-img/404.png" alt="" />
                <img className="pb-2 light-mode-404" src="/assets/img/core-img/404-light.png" alt="" />
              </div>
              <div className="section-heading mt-5">
                <h2 className="mb-4">看起来您迷路了</h2>
                <p>您访问的链接可能已损坏或页面已被移除</p>
                <Link href="/" className="btn btn-primary mt-5"><span>返回首页</span><span>返回首页</span></Link>
              </div>
            </div>
          </div>
        </div>

        <div className="divider"></div>
      </div>
      <Cta2Area />
      <FooterOne />

    </>
  );
};

export default ErrorArea;