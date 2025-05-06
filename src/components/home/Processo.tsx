import React from "react";

const WorkprocessArea = () => {
  return (
    <>
      <div className="work-process-wrapper">
        <div className="divider"></div>

        <div className="container">
          <div className="row g-5">
            <div className="col-md-5 col-xl-6">
              <div className="section-heading">
                <h2 className="mb-4">Nosso Processo de Criação</h2>
                <p className="mb-5">
                  Nosso processo é cuidadosamente estruturado para transformar
                  sua visão em um site funcional, atraente e otimizado. Desde o
                  entendimento inicial das suas necessidades até a entrega
                  final, trabalhamos com precisão e criatividade para garantir
                  resultados que superem as expectativas.
                </p>
                <a href="/templates" className="btn btn-primary">
                  <span>SAIBA MAIS</span>
                  <span>SAIBA MAIS</span>
                </a>
              </div>
            </div>

            <div className="col-md-7 col-xl-6">
              <div className="work-process">
                <div className="process-card">
                  <div className="number">1</div>
                  <div className="process-text">
                    <h4>Briefing e Planejamento</h4>
                    <p className="mb-0">
                      Reunião para entender objetivos e público. Definimos
                      estratégia, estrutura e tecnologias do site.
                    </p>
                  </div>
                </div>

                <div className="process-card">
                  <div className="number">2</div>
                  <div className="process-text">
                    <h4>Design e Prototipagem</h4>
                    <p className="mb-0">
                      Criamos wireframes e design responsivo, com foco em
                      usabilidade e identidade da marca.
                    </p>
                  </div>
                </div>

                <div className="process-card">
                  <div className="number">3</div>
                  <div className="process-text">
                    <h4>Criação e Produção</h4>
                    <p className="mb-0">
                      Desenvolvemos o site com codificação otimizada,
                      funcionalidades integradas e compatibilidade.
                    </p>
                  </div>
                </div>

                <div className="process-card">
                  <div className="number">4</div>
                  <div className="process-text">
                    <h4>Entrega e Suporte</h4>
                    <p className="mb-0">
                      Testamos o site, publicamos após aprovação e oferecemos
                      suporte para ajustes e manutenção.
                    </p>
                  </div>
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

export default WorkprocessArea;