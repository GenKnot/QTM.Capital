
import ErrorArea from '@/components/error';
import Wrapper from '@/layouts/Wrapper';
import React from 'react';

export const metadata = {
	title: "404 错误 || Xpend资本 - 专业的企业咨询服务",
	description: "Xpend资本 - 专业的企业咨询服务", 
};



const index = () => {
  return (
    <Wrapper>
      <ErrorArea />      
    </Wrapper>
  );
};

export default index;