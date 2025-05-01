"use client";
import useSticky from "@/hooks/use-sticky";
import React, { useState, useEffect } from "react";

type style_type = {
  style?: boolean;
};
const ScrollToTop = () => {
  const { sticky }: { sticky: boolean } = useSticky();

  const [showScroll, setShowScroll] = useState(false);

  const checkScrollTop = () => {
    if (!showScroll && window.pageYOffset > 400) {
      setShowScroll(true);
    } else if (showScroll && window.pageYOffset <= 400) {
      setShowScroll(false);
    }
  };

  const scrollTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  useEffect(() => {
    window.addEventListener("scroll", checkScrollTop);
    return () => window.removeEventListener("scroll", checkScrollTop);
  }, []);

  return (
    <>
      <button
        onClick={scrollTop}
        id="scrollTopButton"
        className={`${sticky ? "scrolltop-show" : "scrolltop-hide"}`}
      >
        <span className="material-symbols-outlined">arrow_upward_alt</span>
      </button>
    </>
  );
};

export default ScrollToTop;