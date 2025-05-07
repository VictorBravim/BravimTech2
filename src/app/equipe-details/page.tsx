 
import TeamDetails from "@/components/team-details";
import Wrapper from "@/layouts/Wrapper";

export const metadata = {
	title: "Detalhes Equipe - Serviços Web",
	description: "Creative Digital Agency", 
	 
};

const index = () => {
	return (
		<Wrapper>
			<TeamDetails />
		</Wrapper>
	);
};

export default index;
