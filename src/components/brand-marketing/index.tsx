import React from 'react';
import BrandMarketingArea from './BrandMarketingArea';
import Breacrumb from '@/common/Breacrumb';
import HeaderOne from '@/layouts/headers/HeaderOne';
import FooterOne from '@/layouts/footers/FooterOne';

const BrandMarketing = () => {
  return (
    <>
      <HeaderOne />
      <Breacrumb title="品牌营销" subtitle="品牌营销" />
      <BrandMarketingArea />
      <FooterOne />      
    </>
  );
};

export default BrandMarketing; 