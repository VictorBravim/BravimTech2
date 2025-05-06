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
                <h2 className="mb-0">Preços Fixos</h2>
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
            Desenvolvimento de um site profissional, funcional e otimizado, projetado para atender às suas necessidades e destacar sua marca online.
          </p>
        </div>

        <ul className="price-description list-unstyled">
          <li>
            <span className="material-symbols-outlined">check</span> Design responsivo
          </li>
          <li>
            <span className="material-symbols-outlined">check</span> Interface de usuário (UI)
          </li>
          <li>
            <span className="material-symbols-outlined">check</span> Integração com ferramentas
          </li>
          <li>
            <span className="material-symbols-outlined">check</span> Otimização básica de SEO
          </li>
          <li>
            <span className="material-symbols-outlined">check</span> Suporte contínuo por 6 meses
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
            Criação de uma identidade visual única e consistente, incluindo logotipo e elementos gráficos que fortalecem a presença da sua marca.
          </p>
        </div>

        <ul className="price-description list-unstyled">
          <li>
            <span className="material-symbols-outlined">check</span> Design de logotipo 
          </li>
          <li>
            <span className="material-symbols-outlined">check</span> Paleta de cores e tipografia
          </li>
          <li>
            <span className="material-symbols-outlined">check</span> Materiais gráficos básicos
          </li>
          <li>
            <span className="material-symbols-outlined">check</span> Manual de identidade visual
          </li>
          <li>
            <span className="material-symbols-outlined">check</span> Suporte contínuo por 2 meses
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
            Estratégias avançadas de SEO para melhorar o ranqueamento do seu site nos motores de busca, aumentando visibilidade e tráfego orgânico.
          </p>
        </div>

        <ul className="price-description list-unstyled">
          <li>
            <span className="material-symbols-outlined">check</span> Análise e pesquisa
          </li>
          <li>
            <span className="material-symbols-outlined">check</span> Otimização de conteúdo
          </li>
          <li>
            <span className="material-symbols-outlined">check</span> Configuração de SEO técnico
          </li>
          <li>
            <span className="material-symbols-outlined">check</span> Relatórios mensais
          </li>
          <li>
            <span className="material-symbols-outlined">check</span> Suporte contínuo por 6 meses
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