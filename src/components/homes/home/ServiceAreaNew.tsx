"use client";
import Link from 'next/link';
import React, { useState } from 'react';
import { Autoplay, Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

const services = [
  { 
    icon: "trending_up", 
    title: "资本方案", 
    description: "根据企业诉求制定商业计划书以及后续落地的执行方案，并同步指导财务部门进行合理优化。" 
  },
  { 
    icon: "psychology", 
    title: "战略规划", 
    description: "从企业价值观入手，根据企业状态进行总体规划以及第二、第三业务成长曲线规划。" 
  },
  { 
    icon: "campaign", 
    title: "品牌营销", 
    description: "根据企业实际情况梳理品牌形象，设计全新的品牌宣传策略，帮助企业迅速拓展销售额。" 
  },
  { 
    icon: "groups", 
    title: "人才匹配", 
    description: "根据企业诉求，提供合伙人团队以及核心管理团队的猎头服务，规划薪酬管理以及股权激励。" 
  },
  { 
    icon: "trending_up", 
    title: "资本方案", 
    description: "根据企业诉求制定商业计划书以及后续落地的执行方案，并同步指导财务部门进行合理优化。" 
  },
  { 
    icon: "psychology", 
    title: "战略规划", 
    description: "从企业价值观入手，根据企业状态进行总体规划以及第二、第三业务成长曲线规划。" 
  },
  { 
    icon: "campaign", 
    title: "品牌营销", 
    description: "根据企业实际情况梳理品牌形象，设计全新的品牌宣传策略，帮助企业迅速拓展销售额。" 
  },
  { 
    icon: "groups", 
    title: "人才匹配", 
    description: "根据企业诉求，提供合伙人团队以及核心管理团队的猎头服务，规划薪酬管理以及股权激励。" 
  },
];

const ServiceAreaNew = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  return (
    <>
      <div id="service-area" className="latest-service-wrapper bg-secondary">
        <div className="divider"></div>

        <div className="container">
          <div className="row g-4 align-items-end">
            <div className="col-12 col-sm-6">
              <div className="section-heading">
                <h2 className="mb-0">Xpend咨询</h2>
                <h3 className="subtitle-text">
                  让每分钱都带来增长
                </h3>
                <p className="description-text">
                  在传统投资公司和商业咨询公司的业务基础上进行升级，不仅仅利用资本力量帮助企业飞速发展，还提供从品牌营销到战略规划等涵盖企业发展细节的各个方面，更关注于用户数据的增长。
                </p>
                <div className="mt-4">
                  <a href="http://localhost:3000/quantum-consulting" className="btn btn-primary">
                    <span>了解更多</span><span>Xpend咨询</span>
                  </a>
                </div>
              </div>
            </div>

            <div className="col-12 col-sm-6">
              <div className="swiper-navigation-container service-swiper-navigation">
                <div className="service-button-prev" style={{ cursor: "pointer" }}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
                    <path
                      d="M3.93875 17.0605L12.9387 26.0605C13.2205 26.3423 13.6027 26.5006 14.0012 26.5006C14.3998 26.5006 14.782 26.3423 15.0637 26.0605C15.3455 25.7787 15.5039 25.3965 15.5039 24.998C15.5039 24.5995 15.3455 24.2173 15.0637 23.9355L8.625 17.4992H27C27.3978 17.4992 27.7794 17.3412 28.0607 17.0599C28.342 16.7786 28.5 16.3971 28.5 15.9992C28.5 15.6014 28.342 15.2199 28.0607 14.9386C27.7794 14.6573 27.3978 14.4992 27 14.4992H8.625L15.0613 8.05924C15.343 7.77745 15.5014 7.39526 15.5014 6.99674C15.5014 6.59823 15.343 6.21603 15.0613 5.93424C14.7795 5.65245 14.3973 5.49414 13.9988 5.49414C13.6002 5.49414 13.218 5.65245 12.9363 5.93424L3.93625 14.9342C3.79639 15.0738 3.68547 15.2396 3.60986 15.4221C3.53426 15.6046 3.49546 15.8003 3.49569 15.9979C3.49592 16.1955 3.53518 16.391 3.61122 16.5734C3.68725 16.7557 3.79856 16.9213 3.93875 17.0605Z"
                      fill="#0E0E0E" />
                  </svg>
                </div>

                <div className="service-button-next" style={{ cursor: "pointer" }}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
                    <path
                      d="M28.0613 17.0605L19.0613 26.0605C18.7795 26.3423 18.3973 26.5006 17.9988 26.5006C17.6002 26.5006 17.218 26.3423 16.9363 26.0605C16.6545 25.7787 16.4961 25.3965 16.4961 24.998C16.4961 24.5995 16.6545 24.2173 16.9363 23.9355L23.375 17.4992H5C4.60218 17.4992 4.22064 17.3412 3.93934 17.0599C3.65804 16.7786 3.5 16.3971 3.5 15.9992C3.5 15.6014 3.65804 15.2199 3.93934 14.9386C4.22064 14.6573 4.60218 14.4992 5 14.4992H23.375L16.9387 8.05924C16.657 7.77745 16.4986 7.39526 16.4986 6.99674C16.4986 6.59823 16.657 6.21603 16.9387 5.93424C17.2205 5.65245 17.6027 5.49414 18.0012 5.49414C18.3998 5.49414 18.782 5.65245 19.0637 5.93424L28.0637 14.9342C28.2036 15.0738 28.3145 15.2396 28.3901 15.4221C28.4657 15.6046 28.5045 15.8003 28.5043 15.9979C28.5041 16.1955 28.4648 16.391 28.3888 16.5734C28.3127 16.7557 28.2014 16.9213 28.0613 17.0605Z"
                      fill="#0E0E0E" />
                  </svg>
                </div>
              </div>
            </div>

          </div>
        </div>

        <div className="divider-sm"></div>

        <div className="container">
          <Swiper
            loop={true}
            slidesPerView={4}
            spaceBetween={30}
            autoplay={{
              delay: 4000,
              disableOnInteraction: false,
            }}
            navigation={{
              nextEl: '.service-button-next',
              prevEl: '.service-button-prev',
            }}
            modules={[Navigation, Autoplay]}
            breakpoints={{
              0: {
                slidesPerView: 1,
                spaceBetween: 15,
              }, 
              576: {
                slidesPerView: 2,
                spaceBetween: 20,
              },
              768: {
                slidesPerView: 3,
                spaceBetween: 20,
              },
              1200: {
                slidesPerView: 3,
                spaceBetween: 20,
              },
              1400: {
                slidesPerView: 4,
                spaceBetween: 30,
              },
            }}
            className="swiper service-swiper"
            style={{ padding: '5px 0' }}>
            {services.map((item, i) => (
              <SwiperSlide key={i} className="swiper-slide">
                <div
                  onMouseEnter={() => setActiveIndex(i)}
                  onMouseLeave={() => setActiveIndex(null)}
                  className={`service-slide-card-new ${activeIndex === i ? "active" : ""}`}>
                  <span className="material-symbols-outlined service-icon-new">{item.icon}</span>
                  <h2 className={`service-title-new ${activeIndex === i ? "active" : ""}`}>
                    {item.title}
                  </h2>
                  <p className={`service-description-new ${activeIndex === i ? "active" : ""}`}>
                    {item.description}
                  </p>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        <div className="divider"></div>
      </div>

      <style jsx>{`
        .subtitle-text {
          margin: 16px 0 0 0;
          font-size: 1.3rem;
          font-weight: 500;
          color: #FFD700;
          letter-spacing: 0.5px;
          text-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);
        }

        .description-text {
          margin: 20px 0 0 0;
          font-size: 1rem;
          color: #C8C8CD;
          line-height: 1.8;
          letter-spacing: 0.3px;
          max-width: 90%;
        }

        :global(.light-mode) .subtitle-text {
          color: #FF8C00;
        }

        :global(.light-mode) .description-text {
          color: #666;
        }

        @media (max-width: 768px) {
          .subtitle-text {
            font-size: 1.1rem;
            margin-top: 12px;
          }
          .description-text {
            font-size: 0.9rem;
            margin-top: 15px;
            max-width: 100%;
          }
        }

        .service-slide-card-new {
          position: relative;
          border-radius: 20px;
          border: 1px solid rgba(254, 254, 254, 0.2);
          background: #1A1A1A;
          padding: 50px 36px;
          overflow: hidden;
          -webkit-transition: all 500ms;
          transition: all 500ms;
          height: auto;
          min-height: 320px;
          text-align: center;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          align-items: center;
        }

        .service-slide-card-new.active {
          background: linear-gradient(135deg, #FFD700 0%, #FFA500 100%);
          border-color: #FFD700;
          transform: translateY(-5px);
        }

        :global(.light-mode) .service-slide-card-new {
          border-color: rgba(26, 26, 26, 0.3);
          background: #FEFEFE;
        }

        :global(.light-mode) .service-slide-card-new.active {
          background: linear-gradient(135deg, #FFD700 0%, #FFA500 100%);
          border-color: #FFD700;
        }

        .service-icon-new {
          color: #C8C8CD;
          font-size: 64px;
          margin-bottom: 30px;
          transition: all 500ms;
          display: block;
          flex-shrink: 0;
        }

        .service-slide-card-new.active .service-icon-new {
          color: #1A1A1A;
          transform: scale(1.1);
        }

        .service-title-new {
          color: #C8C8CD;
          font-size: 20px;
          font-weight: 600;
          letter-spacing: -0.4px;
          margin: 0 0 15px 0;
          transition: all 500ms;
          flex-shrink: 0;
        }

        .service-slide-card-new.active .service-title-new {
          color: #1A1A1A;
        }

        .service-description-new {
          color: #888;
          font-size: 14px;
          line-height: 1.6;
          margin: 0;
          transition: all 500ms;
          flex-grow: 1;
          display: flex;
          align-items: center;
        }

        .service-slide-card-new.active .service-description-new {
          color: #1A1A1A;
        }

        :global(.light-mode) .service-title-new {
          color: #1A1A1A;
        }
        :global(.light-mode) .service-description-new {
          color: #666;
        }
        :global(.light-mode) .service-icon-new {
          color: #0E0E0E;
        }

        :global(.light-mode) .service-slide-card-new.active .service-title-new,
        :global(.light-mode) .service-slide-card-new.active .service-description-new,
        :global(.light-mode) .service-slide-card-new.active .service-icon-new {
          color: #1A1A1A;
        }

        @media (max-width: 1200px) {
          .service-slide-card-new {
            min-height: 280px;
            padding: 40px 30px;
          }
          .service-icon-new {
            font-size: 56px;
            margin-bottom: 25px;
          }
          .service-title-new {
            font-size: 18px;
          }
        }

        @media (max-width: 768px) {
          .service-slide-card-new {
            min-height: 250px;
            padding: 30px 25px;
          }
          .service-icon-new {
            font-size: 48px;
            margin-bottom: 20px;
          }
          .service-title-new {
            font-size: 16px;
            margin-bottom: 12px;
          }
          .service-description-new {
            font-size: 13px;
          }
        }

        @media (max-width: 576px) {
          .service-slide-card-new {
            min-height: 220px;
            padding: 25px 20px;
          }
          .service-icon-new {
            font-size: 40px;
            margin-bottom: 15px;
          }
          .service-title-new {
            font-size: 14px;
            margin-bottom: 10px;
          }
          .service-description-new {
            font-size: 12px;
          }
        }
      `}</style>
    </>
  );
};

export default ServiceAreaNew; 