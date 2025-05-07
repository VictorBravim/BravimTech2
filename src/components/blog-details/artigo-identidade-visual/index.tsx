import React from "react";
import Breacrumb from "@/common/Breacrumb";
import Cta2Area from "../../home/CTA2";
import BlogDetailsArea from "./BlogDetailsArea";
import HeaderOne from "@/layouts/headers/HeaderOne";
import FooterOne from "@/layouts/footers/FooterOne";
import VideoArea from "@/components/projects/CTA";

const BlogDetails = () => {
  return (
    <>
      <HeaderOne />
      <Breacrumb title="Otimização SEO" subtitle="Artigo" />
      <BlogDetailsArea />
      <VideoArea style_2={true} />
      <Cta2Area />
      <FooterOne />
    </>
  );
};

export default BlogDetails;