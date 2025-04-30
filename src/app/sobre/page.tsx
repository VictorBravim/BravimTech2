 
import Aboutus from "@/components/sobre"; 
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
