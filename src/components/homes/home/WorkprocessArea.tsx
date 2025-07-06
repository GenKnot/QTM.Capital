
import React from 'react';

const WorkprocessArea = () => {
  return (
    <>
      <div id="workprocess-area" className="work-process-wrapper">
        <div className="divider"></div>

        <div className="container">
          <div className="row g-5">
            <div className="col-md-5 col-xl-6">
              <div className="section-heading">
                <h2 className="mb-4">我们的价值观</h2>
                <p className="mb-5">我们是一群来自全球各地的投资人、基金管理人、企业家、经济学者、管理学家、品牌营销专家，联合打造了量子资本和量子咨询，每个人都在各自擅长的领域参与到中小企业的成长过程中。</p>
                <a href="#quantum-capital" className="btn btn-primary"><span>下一步</span><span>下一步</span></a>
              </div>
            </div>

            <div className="col-md-7 col-xl-6">
              <div className="work-process">

                <div className="process-card">
                  <div className="number">1</div>
                  <div className="process-text">
                    <h4>客户第一</h4>
                    <p className="mb-0">我们一直以客户为中心，因为他们是我们成功的根基。全心全意服务于客户，关注客户的每一个需求，提供个性化、全方位的服务体验。</p>
                  </div>
                </div>

                <div className="process-card">
                  <div className="number">2</div>
                  <div className="process-text">
                    <h4>归零心态、善于学习</h4>
                    <p className="mb-0">我们不断吸收新的知识和技能，不断反思和总结经验，时刻保持谦虚、谨慎、进取的心态。我们以一颗归零的心态去迎接每一个挑战和机遇。</p>
                  </div>
                </div>

                <div className="process-card">
                  <div className="number">3</div>
                  <div className="process-text">
                    <h4>勤于思考、不断创新</h4>
                    <p className="mb-0">我们不满足于现状，积极探索新的市场机会、商业模式和技术领域，以此推动我们自身和我们所服务客户的不断前进。</p>
                  </div>
                </div>

                <div className="process-card">
                  <div className="number">4</div>
                  <div className="process-text">
                    <h4>乐于分享、凝聚团队</h4>
                    <p className="mb-0">我们的每一位合伙人都拥有一颗协作、共赢的心，相互交流、分享心得，推动着每一个客户企业向着更高的目标迈进。</p>
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

export default WorkprocessArea;