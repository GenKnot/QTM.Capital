import React from "react";

const QuantumConsultingArea = () => {
  return (
    <>
      <section className="quantum-consulting-area pt-120 pb-120">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div className="quantum-consulting-content">
                <h1 className="section-title">量子咨询</h1>
                <p className="section-subtitle">
                  让每分钱都带来增长
                </p>
                <p className="mb-4">
                  在传统投资公司和商业咨询公司的业务基础上进行升级，不仅仅利用资本力量帮助企业飞速发展，还提供从品牌营销到战略规划等涵盖企业发展细节的各个方面，更关注于用户数据的增长。
                </p>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="quantum-consulting-img">
                <img src="/Image/service1.jpg" alt="量子咨询" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="services-detail-area pt-120 pb-120 bg-secondary">
        <div className="divider"></div>
        <div className="container">
          <div className="row g-4 g-xl-5">
            <div className="col-md-6">
              <div className="service-detail-card">
                <h3>品牌营销</h3>
                <p>让每个中小企业都有独一无二的品牌标识：从企业使命、愿景、价值观出发，进行品牌故事撰写，同时提炼品牌商业模式，并梳理品牌竞争壁垒。并结合企业现状，进行产品及服务业务的分析及升级。在以上信息的基础上，进行网站、第三方宣传渠道的搭建及托管运营，进行舆论监控以及危机公关。同时，设计配套的营销策略、营销话术、营销渠道整合方案，并且进行销售培训，帮助企业迅速拓展销售额。</p>
              </div>
            </div>

            <div className="col-md-6">
              <div className="service-detail-card">
                <h3>战略规划</h3>
                <p>根据企业发展状况，进行深入的调研和分析，帮助客户制定长期的企业发展战略，对现有业务模型进行整理、升级和优化，为其提供实施方案和支持。并针对目前的市场环境和趋势，为企业整理出合理的第二增长曲线及可能有的第三增长曲线。包括环境分析、内部分析、目标制定、实施方案、监控评估五个阶段，通过这些阶段的有机结合和实施，从而帮助客户在市场竞争中取得优势，实现持续稳健的增长和成功。</p>
              </div>
            </div>

            <div className="col-md-6">
              <div className="service-detail-card">
                <h3>人才匹配</h3>
                <p>为企业客户提供专业、高效的核心人才匹配及薪酬（期权）管理服务。该服务的目标是帮助中小型客户在快速扩张过程中找到适合的核心团队人员，满足其组织发展和业务扩张的需要。通过岗位分析、候选人招募、候选人筛选、候选人面试和人才推荐五个阶段来实现猎头服务，同时会根据目前企业的市值、利润等多方面情况设置合适的薪酬及激励机制，让团队快速形成粘性。</p>
              </div>
            </div>

            <div className="col-md-6">
              <div className="service-detail-card">
                <h3>资本方案</h3>
                <p>根据企业诉求制定商业计划书以及后续落地的执行方案，并同步指导财务部门就商业计划书所展现的业务逻辑进行合理优化。我们还就商业计划书所展现的内容与核心价值对企业创始人、核心管理团队进行辅导，让企业核心人员可以深刻理解商业模式以及产品变革，让他们在任何场合所进行的商业路演都可以游刃有余。同时，就可能参与的资本事件，例如融资、获得投资、获得并购、券商辅导等进行新闻露出，以期待获得更多的资本关注度。</p>
              </div>
            </div>
          </div>
        </div>
        <div className="divider"></div>
      </section>
    </>
  );
};

export default QuantumConsultingArea; 