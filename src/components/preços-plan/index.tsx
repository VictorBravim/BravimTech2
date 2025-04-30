import React from "react";
import Breacrumb from "@/common/Breacrumb";
import HeaderOne from "@/layouts/headers/HeaderOne";
import Cta2Area from "../home/CTA2";
import FooterOne from "@/layouts/footers/FooterOne";
import PricingPlanArea from "./PricingPlanArea";
import FaqArea from "../home/Faq";

const PricingPlan = () => {
  return (
    <>
      <HeaderOne />
      <Breacrumb title="Nossos Planos" subtitle="Preços" />
      <PricingPlanArea />
      <FaqArea style_2={true} />
      <Cta2Area />
      <FooterOne />
    </>
  );
};

export default PricingPlan;