 
import Blog from "@/components/blog";  
import Wrapper from "@/layouts/Wrapper";

export const metadata = {
	title: "Blog - Serviços Web",
	description: "Creative Digital Agency", 
	
};

const index = () => {
	return (
		<Wrapper>
			<Blog />
		</Wrapper>
	);
};

export default index;
