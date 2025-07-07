 
import HomeOne from "@/components/homes/home";
import Wrapper from "@/layouts/Wrapper";

export const metadata = {
	title: "Xpend资本 - 专业的中小企业投资与并购服务",
	description: "Xpend资本专注于中小企业投资、并购咨询、品牌营销等服务，致力于陪伴中小企业成长，实现资本梦想。", 
};

const index = () => {
	return (
		<Wrapper>
			<HomeOne />
		</Wrapper>
	);
};

export default index;
