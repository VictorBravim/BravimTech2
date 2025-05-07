"use client";
import Link from "next/link";
import React from "react";

// Componente para a área de detalhes de serviços
const ServiceDetailsArea = () => {
  // Carrega o JavaScript do Bootstrap no lado do cliente
  if (typeof window !== "undefined") {
    require("bootstrap/dist/js/bootstrap");
  }

  return (
    <>
      <div className="service-details-wrapper">
        <div className="divider"></div>

        <div className="container">
          <div className="row g-4 g-xxl-5">
            <div className="col-12 col-lg-8">
              <div className="service-details-content">
                <img
                  className="rounded-lg"
                  src="/assets/img/bg-img/33.jpg"
                  alt="Imagem de identidade visual"
                />
                <h2>Por que você precisa de uma identidade visual forte?</h2>
                <p>
                  Uma identidade visual forte é a essência da sua marca no mundo
                  digital e físico. Ela cria uma conexão imediata com seu
                  público, transmite profissionalismo e diferencia sua empresa
                  da concorrência. Uma identidade bem projetada, com logotipos,
                  cores e tipografias consistentes, constrói confiança e
                  reconhecimento de marca.
                </p>
                <p>
                  Além disso, uma identidade visual coesa fortalece sua presença
                  em todos os pontos de contato, desde cartões de visita até
                  redes sociais e websites. Seja para atrair novos clientes,
                  consolidar sua marca ou destacar seus valores, uma identidade
                  visual é indispensável para o sucesso do seu negócio.
                </p>

                <h3>Como desenvolvemos sua identidade visual com criatividade</h3>
                <p>
                  Nosso processo de criação de identidade visual combina
                  pesquisa, criatividade e estratégia para entregar uma marca
                  única e memorável. Utilizamos ferramentas como Adobe
                  Illustrator e Figma, além de metodologias de design centradas
                  no cliente, para desenvolver logotipos, paletas de cores e
                  elementos gráficos que refletem a essência do seu negócio.
                </p>
                <p>
                  Começamos com uma análise profunda da sua empresa, seus valores
                  e público-alvo, seguida pela criação de conceitos visuais,
                  revisões colaborativas e entrega de um guia de identidade
                  completo. Nosso objetivo é fornecer uma identidade visual que
                  seja versátil, atemporal e alinhada aos seus objetivos
                  estratégicos.
                </p>

                <ul className="list-unstyled">
                  <li>
                    <span className="material-symbols-outlined">
                      check_circle
                    </span>
                    Logotipos exclusivos que capturam a essência da sua marca.
                  </li>
                  <li>
                    <span className="material-symbols-outlined">
                      check_circle
                    </span>
                    Paleta de cores e tipografia consistentes para uso em todos
                    os canais.
                  </li>
                  <li>
                    <span className="material-symbols-outlined">
                      check_circle
                    </span>
                    Guia de identidade visual para aplicação uniforme da marca.
                  </li>
                </ul>

                <div className="row g-4">
                  <div className="col-6">
                    <img
                      src="/assets/img/bg-img/34.jpg"
                      alt="Imagem de logotipo"
                    />
                  </div>
                  <div className="col-6">
                    <img
                      src="/assets/img/bg-img/35.jpg"
                      alt="Imagem de aplicação de identidade visual"
                    />
                  </div>
                </div>

                <p>
                  Nosso compromisso é criar uma identidade visual que represente
                  autenticamente sua marca e conecte emocionalmente com seu
                  público. Trabalhamos em parceria com você para garantir que
                  cada elemento visual esteja alinhado com sua visão e objetivos.
                </p>
              </div>

              <div className="divider-sm"></div>

              <div className="faq-accordion service-details-faq">
                <h3 className="mb-5">Perguntas Frequentes</h3>
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
                        Quanto tempo leva para criar uma identidade visual?
                      </button>
                    </h2>
                    <div
                      id="faqQuestion1"
                      className="accordion-collapse collapse show"
                      data-bs-parent="#faqAccordion"
                    >
                      <div className="accordion-body">
                        O tempo varia conforme a complexidade do projeto, mas
                        geralmente levamos de 2 a 4 semanas para entregar uma
                        identidade visual completa, desde o briefing até a
                        aprovação final.
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
                        Vocês oferecem revisões no design da identidade visual?
                      </button>
                    </h2>
                    <div
                      id="faqQuestion2"
                      className="accordion-collapse collapse"
                      data-bs-parent="#faqAccordion"
                    >
                      <div className="accordion-body">
                        Sim, oferecemos rodadas de revisões para garantir que a
                        identidade visual final atenda completamente à sua visão
                        e objetivos.
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
                        A identidade visual será aplicável em diferentes mídias?
                      </button>
                    </h2>
                    <div
                      id="faqQuestion3"
                      className="accordion-collapse collapse"
                      data-bs-parent="#faqAccordion"
                    >
                      <div className="accordion-body">
                        Sim, criamos identidades visuais versáteis que podem ser
                        aplicadas em mídias digitais e impressas, como sites,
                        redes sociais, cartões de visita e embalagens.
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
                        Vocês fornecem um guia de uso da identidade visual?
                      </button>
                    </h2>
                    <div
                      id="faqQuestion4"
                      className="accordion-collapse collapse"
                      data-bs-parent="#faqAccordion"
                    >
                      <div className="accordion-body">
                        Sim, entregamos um guia de identidade visual detalhado,
                        com instruções sobre o uso de logotipos, cores,
                        tipografias e outros elementos para garantir
                        consistência.
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
                        Vocês criam identidades visuais para todos os tipos de negócios?
                      </button>
                    </h2>
                    <div
                      id="faqQuestion5"
                      className="accordion-collapse collapse"
                      data-bs-parent="#faqAccordion"
                    >
                      <div className="accordion-body">
                        Sim, desenvolvemos identidades visuais personalizadas
                        para empresas de todos os tamanhos e setores, desde
                        pequenos negócios locais até grandes corporações.
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-12 col-lg-4">
              <div className="d-flex flex-column gap-5">
                <div className="service-widget">
                  <h4 className="mb-4">Nossos Serviços</h4>

                  <ul className="service-list">
                    <li>
                      <Link href="/desenvolvimento-web">
                        Web Sites
                        <span className="material-symbols-outlined">
                          arrow_forward
                        </span>
                      </Link>
                    </li>
                    <li>
                      <Link href="/seo-otimizacao">
                        SEO e Otimização
                        <span className="material-symbols-outlined">
                          arrow_forward
                        </span>
                      </Link>
                    </li>
                    <li>
                      <Link href="/web-design">
                        Web Design
                        <span className="material-symbols-outlined">
                          arrow_forward
                        </span>
                      </Link>
                    </li>
                    <li>
                      <Link href="/wordpress">
                        Sites WordPress
                        <span className="material-symbols-outlined">
                          arrow_forward
                        </span>
                      </Link>
                    </li>
                    <li>
                      <Link href="/identidade-visual">
                        Identidade Visual
                        <span className="material-symbols-outlined">
                          arrow_forward
                        </span>
                      </Link>
                    </li>
                    <li>
                      <Link href="/manutencao">
                        Manutenção Web
                        <span className="material-symbols-outlined">
                          arrow_forward
                        </span>
                      </Link>
                    </li>
                  </ul>
                </div>

                <div className="service-widget budget">
                  <h4 className="mb-4">Orçamento Online</h4>

                  <div className="d-flex gap-3">
                    <div>
                      <p>
                        Solicite um orçamento personalizado
                        agora mesmo!
                      </p>
                      <a href="/orcamento" className="btn-link">
                        Fazer Orçamento
                      </a>
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

export default ServiceDetailsArea;