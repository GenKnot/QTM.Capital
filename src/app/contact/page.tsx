 
import Contact from "@/components/contact";  
import Wrapper from "@/layouts/Wrapper";

export const metadata = {
	title: "联系我们 - Xpend资本专业咨询服务",
	description: "Xpend资本提供专业的企业咨询服务，包括Xpend咨询、产业并购等服务",
	 
};

const index = () => {
	return (
		<Wrapper>
			<Contact />
		</Wrapper>
	);
};

export default index;
