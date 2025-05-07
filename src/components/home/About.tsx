import React from "react";

const AboutArea = () => {
  return (
    <>
      <div className="about-us-wrapper">
        <div className="divider"></div>

        <div className="container">
          <div className="row g-4 g-xl-5 align-items-center">
            <div className="col-12 col-md-6">
              <div className="about-us-thumbnail">
                <img
                  src="/assets/img/bg-img/6.jpg"
                  alt="Imagem da equipe trabalhando"
                />

                <div className="top-content">
                  <div className="clients-images">
                    <img src="/assets/img/bg-img/5.jpg" alt="Projeto 1" />
                    <img src="/assets/img/bg-img/4.jpg" alt="Projeto 2" />
                    <img src="/assets/img/bg-img/3.jpg" alt="Projeto 3" />
                    <img src="/assets/img/bg-img/2.jpg" alt="Projeto 4" />
                  </div>
                  <h6 className="mb-0">57+ Projetos Entregues</h6>
                </div>
              </div>
            </div>

            <div className="col-12 col-md-6">
              <div className="about-us-text-content ps-md-4">
                <div className="section-heading">
                  <h2 className="mb-0">Desenvolvendo o Futuro Digital</h2>
                </div>
                <p className="mb-0">
                  Somos uma equipe dedicada a criar websites que combinam design
                  excepcional, tecnologia de ponta e resultados concretos. Nosso
                  foco é desenvolver soluções digitais personalizadas que
                  refletem a essência da sua marca e impulsionam seu negócio no
                  ambiente online.
                </p>

                <ul className="ps-0 list-unstyled mb-0">
                  <li>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="28"
                      height="28"
                      viewBox="0 0 28 28"
                      fill="none"
                    >
                      <path
                        d="M12.1473 23.354C12.144 23.354 12.1402 23.354 12.1369 23.354C12.0013 23.3512 11.8733 23.2932 11.7814 23.1937L2.40471 12.9978C2.24392 12.8228 2.22916 12.5592 2.36971 12.3672C2.51025 12.1758 2.76619 12.1102 2.98166 12.2108L11.5638 16.2293C11.636 16.2632 11.7213 16.2468 11.7765 16.1893L24.8676 2.50708C25.0448 2.32169 25.3346 2.30145 25.5359 2.46114C25.7371 2.62083 25.7836 2.90739 25.6431 3.12231L12.6209 23.0712C12.6023 23.1002 12.5804 23.1265 12.5563 23.1511L12.4989 23.2085C12.4054 23.3015 12.2785 23.354 12.1473 23.354Z"
                        fill="#FEFEFE"
                      />
                    </svg>
                    Design intuitivo e responsivo para todos os dispositivos
                  </li>
                  <li>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="28"
                      height="28"
                      viewBox="0 0 28 28"
                      fill="none"
                    >
                      <path
                        d="M12.1473 23.354C12.144 23.354 12.1402 23.354 12.1369 23.354C12.0013 23.3512 11.8733 23.2932 11.7814 23.1937L2.40471 12.9978C2.24392 12.8228 2.22916 12.5592 2.36971 12.3672C2.51025 12.1758 2.76619 12.1102 2.98166 12.2108L11.5638 16.2293C11.636 16.2632 11.7213 16.2468 11.7765 16.1893L24.8676 2.50708C25.0448 2.32169 25.3346 2.30145 25.5359 2.46114C25.7371 2.62083 25.7836 2.90739 25.6431 3.12231L12.6209 23.0712C12.6023 23.1002 12.5804 23.1265 12.5563 23.1511L12.4989 23.2085C12.4054 23.3015 12.2785 23.354 12.1473 23.354Z"
                        fill="#FEFEFE"
                      />
                    </svg>
                    Código otimizado para performance e SEO
                  </li>
                  <li>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="28"
                      height="28"
                      viewBox="0 0 28 28"
                      fill="none"
                    >
                      <path
                        d="M12.1473 23.354C12.144 23.354 12.1402 23.354 12.1369 23.354C12.0013 23.3512 11.8733 23.2932 11.7814 23.1937L2.40471 12.9978C2.24392 12.8228 2.22916 12.5592 2.36971 12.3672C2.51025 12.1758 2.76619 12.1102 2.98166 12.2108L11.5638 16.2293C11.636 16.2632 11.7213 16.2468 11.7765 16.1893L24.8676 2.50708C25.0448 2.32169 25.3346 2.30145 25.5359 2.46114C25.7371 2.62083 25.7836 2.90739 25.6431 3.12231L12.6209 23.0712C12.6023 23.1002 12.5804 23.1265 12.5563 23.1511L12.4989 23.2085C12.4054 23.3015 12.2785 23.354 12.1473 23.354Z"
                        fill="#FEFEFE"
                      />
                    </svg>
                    Soluções personalizadas para cada negócio
                  </li>
                </ul>

                <div>
                  <a href="/orcamento" className="btn btn-primary mt-1">
                    <span>ORÇAMENTO ONLINE</span>
                    <span>ORÇAMENTO ONLINE</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="divider"></div>

        <div className="our-tools-wrapper">
          <div className="container">
            <div className="row g-4 align-items-center">
              <div className="col-12 col-md-3">
                <h4 className="mb-0">
                  <span className="text-primary">10+</span> Ferramentas
                  Utilizadas
                </h4>
              </div>

              <div className="col-12 col-md-9">
                <div className="tools-slide ms-md-4 d-flex flex-wrap align-items-center justify-content-between">
                  <img src="/assets/img/tools/photoshop.png" alt="photoshop" />
                  <img src="/assets/img/tools/google.png" alt="google" />
                  <img src="/assets/img/tools/figma.png" alt="figma" />
                  <img src="/assets/img/tools/wordpress.png" alt="wordpress" />
                  <img
                    src="/assets/img/tools/indesign.png"
                    alt="indesign"
                  />
                  <img src="/assets/img/tools/github.png" alt="github" />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="divider"></div>
      </div>
    </>
  );
};

export default AboutArea;