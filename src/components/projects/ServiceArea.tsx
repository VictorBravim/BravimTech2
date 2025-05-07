"use client";
import Link from "next/link";
import React, { useState } from "react";

const services = [
  {
    icon: "web",
    title: "Web Sites",
    description:
      "Sites personalizados, otimizados para performance e usabilidade.",
    link: "/website",
  },
  {
    icon: "search",
    title: "SEO e Otimização",
    description:
      "Estratégias de SEO para melhorar o ranqueamento e visibilidade no Google.",
    link: "/seo-otimizacao",
  },
  {
    icon: "design_services",
    title: "Web Design",
    description:
      "Interfaces modernas e intuitivas, projetadas para engajar e converter.",
    link: "/web-design",
  },
  {
    icon: "web",
    title: "Sites WordPress",
    description:
      "Desenvolvemos e personalizamos sites em WordPress otimizados.",
    link: "/wordpress",
  },
  {
    icon: "palette",
    title: "Identidade Visual",
    description:
      "Criação de marcas memoráveis com logos e elementos visuais únicos.",
    link: "/identidade-visual",
  },
  {
    icon: "build",
    title: "Manutenção Web",
    description: "Suporte para garantir segurança, atualizações e desempenho.",
    link: "/manutencao-web",
  },
];

const ServiceArea = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  return (
    <>
      <div className="service-wrapper">
        <div className="divider"></div>

        <div className="container">
          <div className="row g-4 g-lg-5">
            {services.map((item, i) => (
              <div key={i} className="col-12 col-md-6 col-xl-4">
                <Link href={item.link}>
                  <div
                    onMouseEnter={() => setActiveIndex(i)}
                    onMouseLeave={() => setActiveIndex(null)}
                    className={`service-slide-card ${
                      activeIndex === i ? "active" : ""
                    }`}
                  >
                    <span className="material-symbols-outlined">
                      {item.icon}
                    </span>
                    <h2
                      style={{ bottom: `${activeIndex === i ? "140px" : ""}` }}
                    >
                      {item.title}
                    </h2>
                    <p
                      className="mb-0"
                      style={{ bottom: `${activeIndex === i ? "45px" : ""}` }}
                    >
                      {item.description}
                    </p>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>

        <div className="divider"></div>
      </div>
    </>
  );
};

export default ServiceArea;