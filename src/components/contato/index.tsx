import Breacrumb from "@/common/Breacrumb";
import HeaderOne from "@/layouts/headers/HeaderOne";
import React from "react";
import Cta2Area from "../home/CTA2";
import FooterOne from "@/layouts/footers/FooterOne";
import ContactArea from "./ContactArea";

const Contact = () => {
  return (
    <>
      <HeaderOne />
      <Breacrumb title="Entre em Contato" subtitle="Contato" />
      <ContactArea />
      <Cta2Area />
      <FooterOne />
    </>
  );
};

export default Contact;