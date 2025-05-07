 
import Aboutus from "@/components/about"; 
import Wrapper from "@/layouts/Wrapper";

export const metadata = {
	title: "Sobre nós - Serviços Web",
	description: "Creative Digital Agency", 
};

const index = () => {
	return (
		<Wrapper>
			<Aboutus />
		</Wrapper>
	);
};

export default index;
