import GroupOrganizer from "@/components/group-organizer";
import Wrapper from "@/layouts/Wrapper";

export const metadata = {
	title: "攒局者 - 产业并购服务",
	description: "了解如何成为产业并购的攒局者，参与企业并购和资本运作",
	 
};

const index = () => {
	return (
		<Wrapper>
			<GroupOrganizer />
		</Wrapper>
	);
};

export default index; 