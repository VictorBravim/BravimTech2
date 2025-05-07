 
import PricingPlan from "@/components/orçamento";
import Wrapper from "@/layouts/Wrapper";

export const metadata = {
	title: "Preços - Serviços Web",
	description: "Creative Digital Agency", 
	 
};

const index = () => {
	return (
		<Wrapper>
			<PricingPlan />
		</Wrapper>
	);
};

export default index;
