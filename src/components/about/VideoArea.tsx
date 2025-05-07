"use client";

import { useEffect, useRef } from "react";
import "jarallax/dist/jarallax.css";

const VideoAreaHomeOne: React.FC = () => {
  const videoPopupRef = useRef<HTMLDivElement | null>(null);
  const videoFrameRef = useRef<HTMLIFrameElement | null>(null);

  useEffect(() => {
    const jarallaxElements =
      document.querySelectorAll<HTMLElement>(".jarallax");

    const videoPopup = videoPopupRef.current;
    const videoFrame = videoFrameRef.current;

    if (videoPopup && videoFrame) {
      document.querySelectorAll<HTMLElement>(".video-btn").forEach((button) => {
        button.addEventListener("click", function () {
          const videoUrl = (this as HTMLElement).getAttribute("data-video");
          if (videoUrl) {
            let updatedUrl =
              videoUrl.includes("youtube.com") || videoUrl.includes("youtu.be")
                ? `${videoUrl}?autoplay=1`
                : videoUrl.includes("vimeo.com")
                ? `${videoUrl}?autoplay=1`
                : videoUrl;

            videoFrame.src = updatedUrl;
            videoPopup.style.display = "flex";
          }
        });
      });

      const closeVideoPopup = () => {
        videoPopup.style.display = "none";
        videoFrame.src = ""; // Reset video
      };

      document
        .getElementById("videoCloseButton")
        ?.addEventListener("click", closeVideoPopup);
      window.addEventListener("click", (event: MouseEvent) => {
        if (event.target === videoPopup) closeVideoPopup();
      });

      return () => {
        window.removeEventListener("click", closeVideoPopup);
      };
    }
  }, []);

  return (
    <>
      <div
        className="jarallax"
        data-jarallax
        data-speed="0.6"
        style={{ zIndex: "9999" }}
      >
        {/* Video Popup */}
        <div ref={videoPopupRef} id="videoPopup" className="video-popup-iframe">
          <div className="video-content">
            <span className="close-btn" id="videoCloseButton">
              &times;
            </span>
            <div className="ratio ratio-16x9">
              <iframe
                ref={videoFrameRef}
                id="videoFrame"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>
      </div>

      <div
        className="video-wrapper bg-img jarallax"
        data-jarallax=""
        data-speed="0.6"
        style={{
          backgroundImage: `url(/assets/img/bg-img/11.jpg)`,
          backgroundAttachment: "fixed",
        }}
      >
      </div>
    </>
  );
};

export default VideoAreaHomeOne;