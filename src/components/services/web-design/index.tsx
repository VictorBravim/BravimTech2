import Breacrumb from "@/common/Breacrumb";
import HeaderOne from "@/layouts/headers/HeaderOne";
import React from "react";
import Cta2Area from "@/components/home/CTA2";
import FooterOne from "@/layouts/footers/FooterOne";
import ServiceDetailsArea from "./web-design";
import VideoArea from "@/components/projects/CTA";

const ServiceDetails = () => {
  return (
    <>
      <HeaderOne />
      <Breacrumb title="Web Design" subtitle="Serviços" />
      <ServiceDetailsArea />
      <VideoArea style_2={true} />
      <Cta2Area />
      <FooterOne />
    </>
  );
};

export default ServiceDetails;