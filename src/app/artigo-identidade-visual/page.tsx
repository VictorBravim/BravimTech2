 
import BlogDetails from "@/components/blog-details/artigo-identidade-visual";
import Wrapper from "@/layouts/Wrapper";

export const metadata = {
	title: "Criar Identidade Visual - BravimTech",
	description: "Creative Digital Agency", 
	 
};

const index = () => {
	return (
		<Wrapper>
			<BlogDetails />
		</Wrapper>
	);
};

export default index;
