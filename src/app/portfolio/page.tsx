 
import Portfolio from "@/components/portfolio";
import Wrapper from "@/layouts/Wrapper";

export const metadata = {
	title: "Portfolio - Serviços Web",
	description: "Creative Digital Agency", 
	 
};

const index = () => {
	return (
		<Wrapper>
			<Portfolio />
		</Wrapper>
	);
};

export default index;
