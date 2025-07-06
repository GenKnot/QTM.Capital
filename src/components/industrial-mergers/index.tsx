import React from 'react';
import IndustrialMergersArea from './IndustrialMergersArea';
import Breacrumb from '@/common/Breacrumb';
import HeaderOne from '@/layouts/headers/HeaderOne';
import FooterOne from '@/layouts/footers/FooterOne';

const IndustrialMergers = () => {
  return (
    <>
    <HeaderOne />
    <Breacrumb title="产业并购" subtitle="产业并购" />
    <IndustrialMergersArea />
    <FooterOne />      
    </>
  );
};

export default IndustrialMergers; 