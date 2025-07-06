import React from 'react';
import QuantumPartnersArea from './QuantumPartnersArea';
import Breacrumb from '@/common/Breacrumb';
import HeaderOne from '@/layouts/headers/HeaderOne';
import FooterOne from '@/layouts/footers/FooterOne';

const QuantumPartners = () => {
  return (
    <>
    <HeaderOne />
    <Breacrumb title="量子合伙人" subtitle="量子合伙人" />
    <QuantumPartnersArea />
    <FooterOne />      
    </>
  );
};

export default QuantumPartners; 