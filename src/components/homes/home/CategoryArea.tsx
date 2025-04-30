"use client";

import React, { useState, useEffect } from "react";
import dynamic from "next/dynamic";

const Marquee = dynamic(() => import("react-fast-marquee"), { ssr: false });

const CategoryArea = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div className="catagory-slide" id="catagorySlide">
      <div className="marquee3k" data-speed="1">
        <Marquee gradient={false} speed={50}>
          <h2 className="d-flex align-items-center mb-0">
            <span>#</span>
            <span>Design Web</span>
            <span>#</span>
            <span>Desenvolvimento Web</span>
            <span>#</span>
            <span>Design UI/UX</span>
          </h2>
        </Marquee>
      </div>
    </div>
  );
};

export default CategoryArea;