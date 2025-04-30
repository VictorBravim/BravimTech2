import React from "react";

const PriceArea = ({ style_2 }: any) => {
  return (
    <>
      <div className={`price-table-wrapper ${style_2 ? "" : "bg-secondary"}`}>
        <div className="divider"></div>

        <div className="container">
          <div className="row justify-content-center">
            <div className="col-12 col-md-8">
              <div className="section-heading text-center">
                <h2 className="mb-0">Plano para Impulsionar Seu Negócio</h2>
              </div>
            </div>
          </div>
        </div>

        <div className="divider-sm"></div>

        <div className="container">
          <div className="row g-4 justify-content-center">
            <div className="col-12 col-md-6 col-lg-4">
              <div className="price-card">
                <div className="price-info">
                  <h6>WebSite</h6>
                  <h3 className="price">R$2.500</h3>
                  <p className="mb-0">
                    Priorizamos o sucesso deles, pois isso impulsiona
                    relacionamentos autênticos.
                  </p>
                </div>

                <ul className="price-description list-unstyled">
                  <li>
                    <span className="material-symbols-outlined">check</span> Web
                    e Mobile
                  </li>
                  <li>
                    <span className="material-symbols-outlined">check</span>{" "}
                    Criação de Design UI
                  </li>
                  <li>
                    <span className="material-symbols-outlined">check</span>{" "}
                    Desenvolvimento Blockchain
                  </li>
                  <li>
                    <span className="material-symbols-outlined">check</span>{" "}
                    Sistema Completo de Design de Website
                  </li>
                  <li>
                    <span className="material-symbols-outlined">check</span>{" "}
                    Suporte de Um Ano Incluído
                  </li>
                </ul>

                <div className="choose-plan">
                  <a href="#" className="btn btn-dark w-100">
                    <span>Escolher este plano</span>
                    <span>Escolher este plano</span>
                  </a>
                </div>
              </div>
            </div>

            <div className="col-12 col-md-6 col-lg-4">
              <div className="price-card">
                <div className="price-info">
                  <h6>Identidade Visual</h6>
                  <h3 className="price">R$750</h3>
                  <p className="mb-0">
                    Priorizamos o sucesso deles, pois isso impulsiona
                    relacionamentos autênticos.
                  </p>
                </div>

                <ul className="price-description list-unstyled">
                  <li>
                    <span className="material-symbols-outlined">check</span> Web
                    e Mobile
                  </li>
                  <li>
                    <span className="material-symbols-outlined">check</span>{" "}
                    Criação de Design UI
                  </li>
                  <li>
                    <span className="material-symbols-outlined">check</span>{" "}
                    Desenvolvimento Blockchain
                  </li>
                  <li>
                    <span className="material-symbols-outlined">check</span>{" "}
                    Sistema Completo de Design de Website
                  </li>
                  <li>
                    <span className="material-symbols-outlined">check</span>{" "}
                    Suporte de Um Ano Incluído
                  </li>
                </ul>

                <div className="choose-plan">
                  <a href="#" className="btn btn-primary w-100">
                    <span>Escolher este plano</span>
                    <span>Escolher este plano</span>
                  </a>
                </div>
              </div>
            </div>

            <div className="col-12 col-md-6 col-lg-4">
              <div className="price-card">
                <div className="price-info">
                  <h6>Otimização SEO</h6>
                  <h3 className="price">R$1.250</h3>
                  <p className="mb-0">
                    Priorizamos o sucesso deles, pois isso impulsiona
                    relacionamentos autênticos.
                  </p>
                </div>

                <ul className="price-description list-unstyled">
                  <li>
                    <span className="material-symbols-outlined">check</span> Web
                    e Mobile
                  </li>
                  <li>
                    <span className="material-symbols-outlined">check</span>{" "}
                    Criação de Design UI
                  </li>
                  <li>
                    <span className="material-symbols-outlined">check</span>{" "}
                    Desenvolvimento Blockchain
                  </li>
                  <li>
                    <span className="material-symbols-outlined">check</span>{" "}
                    Sistema Completo de Design de Website
                  </li>
                  <li>
                    <span className="material-symbols-outlined">check</span>{" "}
                    Suporte de Um Ano Incluído
                  </li>
                </ul>

                <div className="choose-plan">
                  <a href="#" className="btn btn-dark w-100">
                    <span>Escolher este plano</span>
                    <span>Escolher este plano</span>
                  </a>
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

export default PriceArea;