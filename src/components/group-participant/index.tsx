import React from 'react';
import GroupParticipantArea from './GroupParticipantArea';
import Breacrumb from '@/common/Breacrumb';
import HeaderOne from '@/layouts/headers/HeaderOne';
import FooterOne from '@/layouts/footers/FooterOne';

const GroupParticipant = () => {
  return (
    <>
    <HeaderOne />
    <Breacrumb title="入局者" subtitle="入局者" />
    <GroupParticipantArea />
    <FooterOne />      
    </>
  );
};

export default GroupParticipant; 