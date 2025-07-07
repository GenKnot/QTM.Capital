import React from 'react';
import Wrapper from "@/layouts/Wrapper";
import HeaderOne from "@/layouts/headers/HeaderOne";
import FooterOne from "@/layouts/footers/FooterOne";
import XpendCapitalArea from "@/components/xpend-capital";
import Breadcrumb from "@/common/Breacrumb";

export const metadata = {
	title: "Xpend资本 - 专业的投资与并购服务",
	description: "Xpend资本专注于商业计划、私募股权、上市辅导、直投基金、产业并购等全方位资本服务。", 
};

const XpendCapitalPage = () => {
	return (
		<Wrapper>
			<HeaderOne />
			<Breadcrumb 
				title="Xpend资本" 
				subtitle="Xpend资本"
			/>
			<XpendCapitalArea />
			<FooterOne />
		</Wrapper>
	);
};

export default XpendCapitalPage; 