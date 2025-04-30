 
import PortfolioDetails from "@/components/portfolio-details";
import Wrapper from "@/layouts/Wrapper";

export const metadata = {
	title: "Detalhes Portfolio - Serviços Web",
	description: "Creative Digital Agency", 
	 
};

const index = () => {
	return (
		<Wrapper>
			<PortfolioDetails />
		</Wrapper>
	);
};

export default index;
