import IndustrialMergers from "@/components/industrial-mergers";
import Wrapper from "@/layouts/Wrapper";

export const metadata = {
	title: "产业并购 - 专业的企业并购咨询服务",
	description: "产业并购提供企业并购、战略重组、投资咨询、风险评估等专业的企业并购咨询服务",
	 
};

const index = () => {
	return (
		<Wrapper>
			<IndustrialMergers />
		</Wrapper>
	);
};

export default index; 