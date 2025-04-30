import Breacrumb from "@/common/Breacrumb";
import HeaderOne from "@/layouts/headers/HeaderOne";
import Cta2Area from "../home/CTA2";
import AboutArea from "../home/Sobre";
import VideoArea from "../home/CTA";
import WorkprocessArea from "../home/Processo";
import VideoAreaHomeOne from "../home/Video";
import TeamArea from "../home/Equipe";
import TestimonialArea from "../home/Avaliações";
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