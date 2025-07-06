import Service from "@/components/service";
import Wrapper from "@/layouts/Wrapper";

export const metadata = {
	title: "量子咨询 - 专业的企业咨询服务",
	description: "量子咨询提供品牌营销、战略规划、人才匹配、资本方案等专业的企业咨询服务",
	 
};

const index = () => {
	return (
		<Wrapper>
			<Service />
		</Wrapper>
	);
};

export default index; 