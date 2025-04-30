import Breacrumb from "@/common/Breacrumb";
import HeaderOne from "@/layouts/headers/HeaderOne";
import React from "react";
import Cta2Area from "../home/CTA2";
import FooterOne from "@/layouts/footers/FooterOne";
import TeamDetailsArea from "./TeamDetailsArea";

const TeamDetails = () => {
  return (
    <>
      <HeaderOne />
      <Breacrumb title="Nosso Time" subtitle="Equipe" />
      <TeamDetailsArea />
      <Cta2Area />
      <FooterOne />
    </>
  );
};

export default TeamDetails;