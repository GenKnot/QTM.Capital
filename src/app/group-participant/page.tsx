import GroupParticipant from "@/components/group-participant";
import Wrapper from "@/layouts/Wrapper";

export const metadata = {
	title: "入局者 - 产业并购机会",
	description: "了解如何参与产业并购，加入现有的资本组局",
	 
};

const index = () => {
	return (
		<Wrapper>
			<GroupParticipant />
		</Wrapper>
	);
};

export default index; 