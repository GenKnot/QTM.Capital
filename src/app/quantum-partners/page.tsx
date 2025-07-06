import QuantumPartners from "@/components/quantum-partners";
import Wrapper from "@/layouts/Wrapper";

export const metadata = {
	title: "量子合伙人 - 专业团队介绍",
	description: "了解量子资本和量子咨询的专业合伙人团队",
	 
};

const index = () => {
	return (
		<Wrapper>
			<QuantumPartners />
		</Wrapper>
	);
};

export default index; 