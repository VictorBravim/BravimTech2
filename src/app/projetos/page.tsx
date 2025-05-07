 
import Service from "@/components/projects";
import Wrapper from "@/layouts/Wrapper";

export const metadata = {
	title: "Serviços - Serviços Web",
	description: "Creative Digital Agency", 
};

const index = () => {
	return (
		<Wrapper>
			<Service />
		</Wrapper>
	);
};

export default index;
