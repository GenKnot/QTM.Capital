import React from 'react';

const GroupOrganizerArea = () => {
  return (
    <>
      <div className="work-process-wrapper">
        <div className="divider"></div>

        <div className="container">
          <div className="row g-5">
            <div className="col-md-5 col-xl-6">
              <div className="section-heading">
                <h2 className="mb-4">"攒局式"并购</h2>
                <p className="mb-5">相关流程</p>
                <h4 className="mb-3">"攒局者"企业基本要求：</h4>
                <ul className="mb-4">
                  <li>企业有不低于100万美金的利润及对应的纳税数据。</li>
                  <li>企业有成熟的商业模式，并且经过Xpend资本的评估或升级后可以复制。</li>
                  <li>企业有稳定的销售团队。</li>
                  <li>企业创始团队有足够的时间、精力以及动力去参与一家集团化上市公司的管理。</li>
                  <li>企业创始团队有足够的分享意识，愿意与"入局者"共同分享上市产生的资本红利。</li>
                  <li>企业创始团队有一定的财务基础知识和稳定的财务团队。</li>
                </ul>
                <a href="/contact" className="btn btn-primary"><span>联系我们</span><span>联系我们</span></a>
              </div>
            </div>

            <div className="col-md-7 col-xl-6">
              <div className="work-process">

                <div className="process-card">
                  <div className="number">1</div>
                  <div className="process-text">
                    <h4>模式升级</h4>
                    <p className="mb-0">根据"攒局者"企业的情况，Xpend资本会从企业文化、商业模式、战略规划、营销模型四个方面进行全面升级。形成一套符合当下资本追捧热点、拥有高估值概念的产业模型，并根据这套产业模型制定可以复制的并购方案。</p>
                  </div>
                </div>

                <div className="process-card">
                  <div className="number">2</div>
                  <div className="process-text">
                    <h4>并购框架</h4>
                    <p className="mb-0">根据升级后的产业模型，制定后续并购的框架，确定是否需要上市公司进行资本背书、是否需要股权融资等资本事件。同时，根据该并购框架，确定产业并购的时间轴、需要补充的团队人员、以及需要补充的其他资源。</p>
                  </div>
                </div>

                <div className="process-card">
                  <div className="number">3</div>
                  <div className="process-text">
                    <h4>换股并购</h4>
                    <p className="mb-0">在全球范围内选取符合产业模型要求的中小型企业进行并购。并购过程中一般采用"现金+换股"的模式，现金部分Xpend资本的美元基金会进行直投或者由Xpend资本担任融资顾问向外部投资者进行股权融资。如果是用换股的模式进行并购，则双方可约定在3-5年内未完成上市计划，则互相退还股份，撤销所有协议。</p>
                  </div>
                </div>

                <div className="process-card">
                  <div className="number">4</div>
                  <div className="process-text">
                    <h4>上市或借壳</h4>
                    <p className="mb-0">在整个并购后的产业集团达到一定的利润额，且该利润额有相对应的纳税数据后。根据并购框架，选择进行独立上市或者被已经合作的上市公司并购。Xpend资本将配合券商、律所等第三方机构共同完成这个进程。</p>
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

export default GroupOrganizerArea; 