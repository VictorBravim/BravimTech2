import React from "react";
import TeamArea from "./TeamArea";
import Breacrumb from "@/common/Breacrumb";
import Cta2Area from "../home/CTA2";
import HeaderOne from "@/layouts/headers/HeaderOne";
import FooterOne from "@/layouts/footers/FooterOne";
import CategoryArea from "../home/Band";
import TestimonialArea from "../home/Review";
import VideoArea from "@/components/projects/CTA";

const Team = () => {
  return (
    <>
      <HeaderOne />
      <Breacrumb title="Nosso Time" subtitle="Equipe" />
      <TeamArea />
      <CategoryArea />
      <TestimonialArea />
      <VideoArea style_2={true} />
      <Cta2Area />
      <FooterOne />
    </>
  );
};

export default Team;