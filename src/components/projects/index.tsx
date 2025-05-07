import Breacrumb from "@/common/Breacrumb";
import HeaderOne from "@/layouts/headers/HeaderOne";
import ServiceArea from "./ServiceArea";
import ServiceAbout from "./ServiceAbout";
import PriceArea from "../home/Prices";
import Cta2Area from "../home/CTA2";
import VideoArea from "./CTA";
import FooterOne from "@/layouts/footers/FooterOne";

const Service = () => {
  return (
    <>
      <HeaderOne />
      <Breacrumb title="Sobre Nós" subtitle="Sobre" />
      <ServiceArea />
      <ServiceAbout />
      <PriceArea />
      <VideoArea style_2={true} />
      <Cta2Area />
      <FooterOne />
    </>
  );
};

export default Service;