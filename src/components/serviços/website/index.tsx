import Breacrumb from "@/common/Breacrumb";
import HeaderOne from "@/layouts/headers/HeaderOne";
import React from "react";
import Cta2Area from "@/components/home/CTA2";
import FooterOne from "@/layouts/footers/FooterOne";
import ServiceDetailsArea from "./website";

const ServiceDetails = () => {
  return (
    <>
      <HeaderOne />
      <Breacrumb title="WebSite" subtitle="Serviços" />
      <ServiceDetailsArea />
      <Cta2Area />
      <FooterOne />
    </>
  );
};

export default ServiceDetails;