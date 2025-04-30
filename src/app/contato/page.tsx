 
import Contact from "@/components/contato";  
import Wrapper from "@/layouts/Wrapper";

export const metadata = {
	title: "Contato - Serviços Web",
	description: "Creative Digital Agency", 
	 
};

const index = () => {
	return (
		<Wrapper>
			<Contact />
		</Wrapper>
	);
};

export default index;
