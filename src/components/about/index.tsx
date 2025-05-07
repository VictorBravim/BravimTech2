import Breacrumb from "@/common/Breacrumb";
import HeaderOne from "@/layouts/headers/HeaderOne";
import Cta2Area from "../home/CTA2";
import AboutArea from "../home/About";
import VideoArea from "../home/CTA";
import WorkprocessArea from "../home/Process";
import VideoAreaHomeOne from "./VideoArea";
import TeamArea from "../home/Team";
import TestimonialArea from "../home/Review";
import FooterOne from "@/layouts/footers/FooterOne";

const Aboutus = () => {
  return (
    <>
      <HeaderOne />
      <Breacrumb title="Sobre Nós" subtitle="Sobre" />
      <AboutArea />
      <VideoArea style_2={true} />
      <WorkprocessArea />
      <VideoAreaHomeOne />
      <TeamArea />
      <TestimonialArea />
      <Cta2Area />
      <FooterOne />
    </>
  );
};

export default Aboutus;