import Breacrumb from "@/common/Breacrumb";
import HeaderOne from "@/layouts/headers/HeaderOne";
import React from "react";
import Cta2Area from "../../home/CTA2";
import FooterOne from "@/layouts/footers/FooterOne";
import ServiceDetailsArea from "./ServiceDetailsArea";

const ServiceDetails = () => {
  return (
    <>
      <HeaderOne />
      <Breacrumb title="Nossos Serviços" subtitle="Serviços" />
      <ServiceDetailsArea />
      <Cta2Area />
      <FooterOne />
    </>
  );
};

export default ServiceDetails;