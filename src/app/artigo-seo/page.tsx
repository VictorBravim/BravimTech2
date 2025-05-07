 
import BlogDetails from "@/components/blog-details/artigo-seo";
import Wrapper from "@/layouts/Wrapper";

export const metadata = {
	title: "Otimizar SEO - BravimTech",
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
