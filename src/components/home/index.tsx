import CtaArea from "./CTA";
import HeroArea from "./Hero";
import Cta2Area from "./CTA2";
import BlogArea from "./Blog";
import AboutArea from "./About";
import ServiceArea from "./Services";
import ProjectsArea from "./Projects";
import CategoryArea from "./Band";
import WorkprocessArea from "./Process";
import TeamArea from "./Team";
import PriceArea from "./Prices";
import FaqArea from "./Faq";
import TestimonialArea from "./Review";
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