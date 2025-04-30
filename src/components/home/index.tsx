import CtaArea from "./CTA";
import HeroArea from "./Hero";
import Cta2Area from "./CTA2";
import BlogArea from "./Blog";
import AboutArea from "./Sobre";
import ServiceArea from "./Serviços";
import ProjectsArea from "./Projetos";
import CategoryArea from "./Faixa";
import WorkprocessArea from "./Processo";
import TeamArea from "./Equipe";
import PriceArea from "./Preço";
import FaqArea from "./Faq";
import TestimonialArea from "./Avaliações";
import HeaderOne from "@/layouts/headers/HeaderOne";
import FooterOne from "@/layouts/footers/FooterOne";

const HomeOne = () => {
  return (
    <>
      <HeaderOne />
      <HeroArea />
      <CtaArea />
      <ServiceArea />
      <AboutArea />
      <ProjectsArea />
      <CategoryArea />
      <WorkprocessArea />
      <TeamArea />
      <PriceArea />
      <CategoryArea />
      <FaqArea />
      <TestimonialArea />
      <BlogArea />
      <Cta2Area />
      <FooterOne />
    </>
  );
};

export default HomeOne;