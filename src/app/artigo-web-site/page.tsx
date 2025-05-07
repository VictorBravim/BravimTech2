 
import BlogDetails from "@/components/blog-details/artigo-web-site";
import Wrapper from "@/layouts/Wrapper";

export const metadata = {
	title: "Criar WebSite - BravimTech",
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
