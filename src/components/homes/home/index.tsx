import CtaArea from "./CtaArea";
import HeroArea from "./HeroArea";
import Cta2Area from "./Cta2Area";
import BlogArea from "./BlogArea";
import AboutArea from "./AboutArea";
import ServiceArea from "./ServiceArea";
import ProjectsArea from "./ProjectsArea";
import CategoryArea from "./CategoryArea";
import WorkprocessArea from "./WorkprocessArea";
import TeamArea from "./TeamArea";
import PriceArea from "./PriceArea";
import FaqArea from "./FaqArea";
import TestimonialArea from "./TestimonialArea";
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