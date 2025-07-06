
import Link from 'next/link';
import React from 'react';

const BlogArea = () => {
  return (
    <>
      <div className="blog-wrapper">
      <div className="divider"></div>

      <div className="container">
         <div className="row">
            <div className="col-12">
               <div className="section-heading d-md-flex align-items-end justify-content-between">
                  <h2 className="mb-4 mb-md-0">资本组局案例 <br />& 成功故事</h2>
                  <a href="#" className="btn btn-primary"><span>查看全部</span><span>查看全部</span></a>
               </div>
            </div>
         </div>
      </div>

      <div className="divider-sm"></div>

      <div className="container">
         <div className="row g-4">
             
            <div className="col-12 col-md-6 col-lg-4">
               <div className="blog-card">
                  <img src="/assets/img/bg-img/17.jpg" alt="" />
                  <div className="blog-meta d-flex align-items-center">
                     <a href="#">已完成</a>
                     <div className="dot"></div>
                     <a href="#">教育行业</a>
                  </div>
                  <Link className="post-title" href="/blog-details">儿童培训机构成功并购案例</Link>
               </div>
            </div>

             
            <div className="col-12 col-md-6 col-lg-4">
               <div className="blog-card">
                  <img src="/assets/img/bg-img/18.jpg" alt="" />
                  <div className="blog-meta d-flex align-items-center">
                     <a href="#">已完成</a>
                     <div className="dot"></div>
                     <a href="#">教育行业</a>
                  </div>
                  <Link className="post-title" href="/blog-details">职业教育资本组局成功案例</Link>
               </div>
            </div>

             
            <div className="col-12 col-md-6 col-lg-4">
               <div className="blog-card">
                  <img src="/assets/img/bg-img/19.jpg" alt="" />
                  <div className="blog-meta d-flex align-items-center">
                     <a href="#">进行中</a>
                     <div className="dot"></div>
                     <a href="#">养老产业</a>
                  </div>
                  <Link className="post-title" href="/blog-details">养老产业资本组局招募中</Link>
               </div>
            </div>

         </div>
      </div>

      <div className="divider"></div>
   </div>
    </>
  );
};

export default BlogArea;