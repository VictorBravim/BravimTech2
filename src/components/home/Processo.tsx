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
                  Nosso processo é cuidadosamente estruturado para transformar sua visão em um site funcional, atraente e otimizado. Desde o entendimento inicial das suas necessidades até a entrega final, trabalhamos com precisão e criatividade para garantir resultados que superem as expectativas.
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
                      Começamos com uma reunião detalhada para entender seus objetivos, público-alvo e requisitos. Definimos a estratégia, estrutura do site e tecnologias a serem utilizadas, criando um plano claro para o projeto.
                    </p>
                  </div>
                </div>

                <div className="process-card">
                  <div className="number">2</div>
                  <div className="process-text">
                    <h4>Design e Prototipagem</h4>
                    <p className="mb-0">
                      Criamos wireframes e protótipos visuais que refletem a identidade da sua marca. Após sua aprovação, desenvolvemos o design final, focando em usabilidade, estética e responsividade para todos os dispositivos.
                    </p>
                  </div>
                </div>

                <div className="process-card">
                  <div className="number">3</div>
                  <div className="process-text">
                    <h4>Desenvolvimento</h4>
                    <p className="mb-0">
                      Nossa equipe de desenvolvedores transforma o design em um site funcional, utilizando as melhores práticas de codificação. Integramos funcionalidades específicas, otimizamos o desempenho e garantimos compatibilidade multiplataforma.
                    </p>
                  </div>
                </div>

                <div className="process-card">
                  <div className="number">4</div>
                  <div className="process-text">
                    <h4>Testes e Entrega</h4>
                    <p className="mb-0">
                      Realizamos testes rigorosos para garantir que o site esteja livre de erros, rápido e seguro. Após sua aprovação final, publicamos o site e oferecemos suporte para ajustes e manutenção contínua.
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