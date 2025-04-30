"use client";

import { useEffect } from "react";
import "jarallax/dist/jarallax.css";
import Count from "@/common/count";

const counter_data = [
  {
    count: 28,
    label: "Anos de Experiência",
    description:
      "Parece que você tem um ótimo ponto de partida para descrever sua agência criativa. Aqui está uma versão refinada.",
  },
  {
    count: 427,
    label: "Projetos Sucedidos",
    description:
      "Parece que você tem um ótimo ponto de partida para descrever sua agência criativa. Aqui está uma versão refinada.",
  },
  {
    count: 241,
    label: "Clientes Satisfeitos",
    description:
      "Parece que você tem um ótimo ponto de partida para descrever sua agência criativa. Aqui está uma versão refinada.",
  },
];

const VideoArea = ({ style_2 }: any) => {
  useEffect(() => {
    if (typeof window !== "undefined") {
      import("jarallax").then(({ jarallax }) => {
        jarallax(document.querySelectorAll<HTMLElement>(".jarallax"), {
          speed: 0.6,
        });
      });

      const videoPopup = document.getElementById(
        "videoPopup"
      ) as HTMLDivElement | null;
      const videoFrame = document.getElementById(
        "videoFrame"
      ) as HTMLIFrameElement | null;
      const closeBtn = document.getElementById(
        "videoCloseButton"
      ) as HTMLSpanElement | null;

      if (videoPopup && videoFrame && closeBtn) {
        document
          .querySelectorAll<HTMLElement>(".video-btn")
          .forEach((button) => {
            button.addEventListener("click", function () {
              const videoUrl = (this as HTMLElement).getAttribute("data-video");
              if (videoUrl) {
                let updatedUrl = videoUrl;
                if (
                  videoUrl.includes("youtube.com") ||
                  videoUrl.includes("youtu.be")
                ) {
                  updatedUrl += "?autoplay=1";
                } else if (videoUrl.includes("vimeo.com")) {
                  updatedUrl += "?autoplay=1";
                }
                videoFrame.src = updatedUrl;
                videoPopup.style.display = "flex";
              }
            });
          });

        closeBtn.onclick = () => {
          videoPopup.style.display = "none";
          videoFrame.src = "";
        };

        window.onclick = (event: MouseEvent) => {
          if (event.target === videoPopup) {
            videoPopup.style.display = "none";
            videoFrame.src = "";
          }
        };
      }
    }
  }, []);

  return (
    <>
      {style_2 ? null : (
        <div
          id="videoPopup"
          className="video-popup-iframe"
          style={{ zIndex: "9999" }}
        >
          <div className="video-content">
            <span className="close-btn" id="videoCloseButton">
              &times;
            </span>
            <div className="ratio ratio-16x9">
              <iframe id="videoFrame" allowFullScreen></iframe>
            </div>
          </div>
        </div>
      )}

      <div className="cta-video-wrapper">
        {style_2 ? <div className="divider"></div> : null}
        <div className="container">
          {style_2 ? null : (
            <div
              className="video-wrap bg-img"
              style={{ backgroundImage: `url(/assets/img/bg-img/11.jpg)` }}
            >
              <div className="video-popup"></div>
            </div>
          )}

          <div className="row g-4 g-lg-5">
            {counter_data.map((item, i) => (
              <div key={i} className="col-12 col-md-4">
                <div className="cta-content">
                  <h2 className="mb-3">
                    <span className="counter">
                      <Count number={item.count} text="+" />
                    </span>
                  </h2>
                  <h4>{item.label}</h4>
                  <p className="mb-0">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="divider"></div>
      </div>
    </>
  );
};

export default VideoArea;