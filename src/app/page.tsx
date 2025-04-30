 import HomeOne from "@/components/home";
import Wrapper from "@/layouts/Wrapper";

export const metadata = {
	title: "BravimTech - Serviços Web",
	description: "Creative Digital Agency", 
};

const index = () => {
	return (
		<Wrapper>
			<HomeOne />
		</Wrapper>
	);
};

export default index;
