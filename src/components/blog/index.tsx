import React from "react";
import BlogArea from "./BlogArea";
import Breacrumb from "@/common/Breacrumb";
import Cta2Area from "../home/CTA2";
import HeaderOne from "@/layouts/headers/HeaderOne";
import FooterOne from "@/layouts/footers/FooterOne";
import VideoArea from "@/components/projects/CTA";

const Blog = () => {
  return (
    <>
      <HeaderOne />
      <Breacrumb title="Nosso Blog" subtitle="Blog" />
      <BlogArea />
      <VideoArea style_2={true} />
      <Cta2Area />
      <FooterOne />
    </>
  );
};

export default Blog;