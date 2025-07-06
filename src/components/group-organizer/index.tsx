import React from 'react';
import GroupOrganizerArea from './GroupOrganizerArea';
import Breacrumb from '@/common/Breacrumb';
import HeaderOne from '@/layouts/headers/HeaderOne';
import FooterOne from '@/layouts/footers/FooterOne';

const GroupOrganizer = () => {
  return (
    <>
    <HeaderOne />
    <Breacrumb title="攒局者" subtitle="攒局者" />
    <GroupOrganizerArea />
    <FooterOne />      
    </>
  );
};

export default GroupOrganizer; 