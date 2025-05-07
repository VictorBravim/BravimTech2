import ServiceDetails from "@/components/services/website";
import Wrapper from "@/layouts/Wrapper";

export const metadata = {
  title: "Desenvolvimento de Websites Profissionais - BravimTech",
  description:
    "Descubra como um website profissional pode transformar seu negócio. Oferecemos serviços de desenvolvimento web personalizados, otimizados para SEO e com código de alta qualidade. Conheça nosso processo e tire suas dúvidas!",
  keywords:
    "desenvolvimento web, criação de websites, sites profissionais, SEO, web design, BravimTech, websites personalizados",
  openGraph: {
    title: "Desenvolvimento de Websites Profissionais - BravimTech",
    description:
      "Crie um website que represente sua marca e atraia clientes. Soluções personalizadas com código limpo e otimização para buscadores.",
    url: "https://www.suaempresa.com.br/desenvolvimento-web", // Substitua pela URL real
    type: "website",
    images: [
      {
        url: "https://www.suaempresa.com.br/assets/img/og-image.jpg", // Substitua por uma imagem relevante
        width: 1200,
        height: 630,
        alt: "Desenvolvimento de Websites Profissionais",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Desenvolvimento de Websites Profissionais - BravimTech",
    description:
      "Soluções de desenvolvimento web personalizadas para o seu negócio. Conheça nossos serviços!",
    image: "https://www.suaempresa.com.br/assets/img/og-image.jpg", // Substitua pela mesma imagem do OpenGraph
  },
};

const index = () => {
  return (
    <Wrapper>
      <ServiceDetails />
    </Wrapper>
  );
};

export default index;