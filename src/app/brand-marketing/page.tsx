import BrandMarketing from "@/components/brand-marketing";
import Wrapper from "@/layouts/Wrapper";

export const metadata = {
	title: "品牌营销 - 专业的品牌营销服务",
	description: "让每个中小企业都有独一无二的品牌标识，提供从品牌故事撰写到营销策略的全方位服务",
};

const BrandMarketingPage = () => {
	return (
		<Wrapper>
			<BrandMarketing />
		</Wrapper>
	);
};

export default BrandMarketingPage; 