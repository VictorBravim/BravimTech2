 
import ServiceDetails from "@/components/serviços-details";
import Wrapper from "@/layouts/Wrapper";

export const metadata = {
	title: "Detalhes - Serviços Web",
	description: "Creative Digital Agency", 
	 
};

const index = () => {
	return (
		<Wrapper>
			<ServiceDetails />
		</Wrapper>
	);
};

export default index;
