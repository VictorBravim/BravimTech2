"use client";

import { useEffect } from "react";
import "jarallax/dist/jarallax.css";
import Count from "@/common/count";

const counter_data = [
  {
    count: 5,
    label: "Especialistas",
    description: "Profissionais dedicados a criar websites de alta qualidade.",
  },
  {
    count: 57,
    label: "Projetos Concluídos",
    description: "Entregamos sites personalizados que impulsionam negócios.",
  },
  {
    count: 23,
    label: "Clientes Atendidos",
    description: "Trabalhamos para transformar ideias em resultados digitais.",
  },
];

const VideoArea = ({ style_2 = false }: { style_2?: boolean }) => {
  useEffect(() => {
    // Initialize jarallax
    import("jarallax").then(({ jarallax }) => {
      jarallax(document.querySelectorAll(".jarallax"), {
        speed: 0.6,
      });
    });
  }, []);

  return (
    <div className="cta-video-wrapper">
      {style_2 && <div className="divider"></div>}
      <div className="container">
        {!style_2 && (
          <div
            className="video-wrap bg-img jarallax"
            style={{ backgroundImage: `url(/assets/img/bg-img/11.jpg)` }}
          ></div>
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
  );
};

export default VideoArea;