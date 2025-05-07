"use client";
import { useEffect } from "react";
import "jarallax/dist/jarallax.css";

const VideoArea = ({ style_2 = false }: { style_2?: boolean }) => {
  useEffect(() => {
    import("jarallax").then(({ jarallax }) => {
      jarallax(document.querySelectorAll(".jarallax"), {
        speed: 0.6,
      });
    });
  }, []);

  return (
    <div className="cta-video-wrapper">
      <div className="container">
        {!style_2 && (
          <div
            className="video-wrap bg-img jarallax"
            style={{ backgroundImage: `url(/assets/img/bg-img/11.jpg)` }}
          ></div>
        )}
      </div>
    </div>
  );
};

export default VideoArea;