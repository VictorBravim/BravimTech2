import Breacrumb from "@/common/Breacrumb";
import HeaderOne from "@/layouts/headers/HeaderOne";
import React from "react";
import Cta2Area from "../home/CTA2";
import FooterOne from "@/layouts/footers/FooterOne";
import PortfolioArea from "./PortfolioArea";
import VideoArea from "@/components/projects/CTA";

const Portfolio = () => {
  return (
    <>
      <HeaderOne />
      <Breacrumb title="Templates" subtitle="Portfolio" />
      <PortfolioArea />
      <VideoArea style_2={true} />
      <Cta2Area />
      <FooterOne />
    </>
  );
};

export default Portfolio;