import React from "react";

const HeroArea = () => {
  return (
    <>
      <section className="hero-wrapper">
        <div className="divider"></div>

        <div className="container">
          <div className="row g-4">
            <div className="col-12 col-lg-8 col-xl-9">
              <div className="hero-content home2">
                <h2
                  className="mb-0 wow fadeInUp"
                  data-wow-duration="1000ms"
                  data-wow-delay="700ms"
                >
                  Agência de Serviços Web & Design
                </h2>
              </div>
            </div>

            <div className="col-12 col-md-8 col-lg-4 col-xl-3">
              <div className="hero-content home2">
                <div
                  className="d-flex align-items-center gap-3 wow fadeInUp"
                  data-wow-duration="1000ms"
                  data-wow-delay="900ms"
                >
                  <div className="imgs-group">
                    <img src="/assets/img/bg-img/2.jpg" alt="Imagem de fundo" />
                    <img src="/assets/img/bg-img/3.jpg" alt="Imagem de fundo" />
                    <div>
                      <span className="counter">23</span>+
                    </div>
                  </div>
                  <h6 className="mb-0">
                    projetos entregues
                  </h6>
                </div>
                <p
                  className="my-5 wow fadeInUp"
                  data-wow-duration="1000ms"
                  data-wow-delay="1100ms"
                >
                 Nosso foco é criar websites que impulsionam seu negócio. Trabalhamos em parceria com você para entregar resultados de qualidade.
                </p>
                <a
                  href="/orcamento"
                  className="btn btn-primary wow fadeInUp"
                  data-wow-duration="1000ms"
                  data-wow-delay="1200ms"
                >
                  <span>ORÇAMENTO ONLINE</span>
                  <span>ORÇAMENTO ONLINE</span>
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="divider"></div>
        <div className="divider"></div>
      </section>
    </>
  );
};

export default HeroArea;