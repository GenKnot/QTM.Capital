 
import Aboutus from "@/components/about-us"; 
import Wrapper from "@/layouts/Wrapper";

export const metadata = {
	title: "关于我们 - Xpend资本 QTM",
    description: "Xpend资本致力于让更多中小企业获得财富，让更多中小企业创始人获得成长，让更多中小企业员工获得幸福。我们的愿景是陪伴一亿个中小企业，并帮助他们实现自我价值。",
};

const index = () => {
	return (
		<Wrapper>
			<Aboutus />
		</Wrapper>
	);
};

export default index;
