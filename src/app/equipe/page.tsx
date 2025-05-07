 
import Team from "@/components/team";
import Wrapper from "@/layouts/Wrapper";

export const metadata = {
	title: "Equipe - Serviços Web",
	description: "Creative Digital Agency", 
	 
};

const index = () => {
	return (
		<Wrapper>
			<Team />
		</Wrapper>
	);
};

export default index;
