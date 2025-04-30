import React from "react";

const FaqArea = ({ style_2 }: any) => {
  return (
    <>
      <div className={`faq-wrapper ${style_2 ? "bg-secondary" : ""}`}>
        <div className="divider"></div>

        <div className="container">
          <div className="row g-5 align-items-center">
            <div className="col-12 col-lg-6">
              <div className="section-heading">
                <h2 className="mb-0">Perguntas Frequentes</h2>
              </div>

              <div className="divider-sm"></div>

              <div className="faq-image">
                <img src="/assets/img/bg-img/26.jpg" alt="Imagem de fundo" />

                <div className="faq-info d-flex align-items-center">
                  <h2 className="mb-0">125k+</h2>
                </div>
              </div>
            </div>

            <div className="col-12 col-lg-6">
              <div className="faq-accordion ps-lg-4">
                <div className="accordion" id="faqAccordion">
                  <div className="accordion-item">
                    <h2 className="accordion-header">
                      <button
                        className="accordion-button"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#faqQuestion1"
                        aria-expanded="true"
                        aria-controls="faqQuestion1"
                      >
                        Qual é a visão para o futuro?
                      </button>
                    </h2>
                    <div
                      id="faqQuestion1"
                      className="accordion-collapse collapse show"
                      data-bs-parent="#faqAccordion"
                    >
                      <div className="accordion-body pt-0">
                        Um consultor de negócios é um profissional que fornece
                        conselhos especializados e orientação em diversos
                        aspectos.
                      </div>
                    </div>
                  </div>

                  <div className="accordion-item">
                    <h2 className="accordion-header">
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#faqQuestion2"
                        aria-expanded="false"
                        aria-controls="faqQuestion2"
                      >
                        Vocês oferecem recursos gratuitos?
                      </button>
                    </h2>
                    <div
                      id="faqQuestion2"
                      className="accordion-collapse collapse"
                      data-bs-parent="#faqAccordion"
                    >
                      <div className="accordion-body pt-0">
                        Um consultor de negócios é um profissional que fornece
                        conselhos especializados e orientação em diversos
                        aspectos.
                      </div>
                    </div>
                  </div>

                  <div className="accordion-item">
                    <h2 className="accordion-header">
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#faqQuestion3"
                        aria-expanded="false"
                        aria-controls="faqQuestion3"
                      >
                        Podem ajudar a encontrar investidores?
                      </button>
                    </h2>
                    <div
                      id="faqQuestion3"
                      className="accordion-collapse collapse"
                      data-bs-parent="#faqAccordion"
                    >
                      <div className="accordion-body pt-0">
                        Um consultor de negócios é um profissional que fornece
                        conselhos especializados e orientação em diversos
                        aspectos.
                      </div>
                    </div>
                  </div>

                  <div className="accordion-item">
                    <h2 className="accordion-header">
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#faqQuestion4"
                        aria-expanded="false"
                        aria-controls="faqQuestion4"
                      >
                        Podem ajudar a encontrar investidores?
                      </button>
                    </h2>
                    <div
                      id="faqQuestion4"
                      className="accordion-collapse collapse"
                      data-bs-parent="#faqAccordion"
                    >
                      <div className="accordion-body pt-0">
                        Um consultor de negócios é um profissional que fornece
                        conselhos especializados e orientação em diversos
                        aspectos.
                      </div>
                    </div>
                  </div>

                  <div className="accordion-item">
                    <h2 className="accordion-header">
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#faqQuestion5"
                        aria-expanded="false"
                        aria-controls="faqQuestion5"
                      >
                        Quais serviços vocês oferecem?
                      </button>
                    </h2>
                    <div
                      id="faqQuestion5"
                      className="accordion-collapse collapse"
                      data-bs-parent="#faqAccordion"
                    >
                      <div className="accordion-body pt-0">
                        Um consultor de negócios é um profissional que fornece
                        conselhos especializados e orientação em diversos
                        aspectos.
                      </div>
                    </div>
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

export default FaqArea;