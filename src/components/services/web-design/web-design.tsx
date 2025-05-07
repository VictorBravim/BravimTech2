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
                  alt="Imagem de web design profissional"
                />
                <h2>Por que você precisa de um bom web design?</h2>
                <p>
                  Um web design profissional é a base para uma presença online
                  impactante. Em um mundo onde a primeira impressão conta, um
                  site bem projetado transmite credibilidade, engaja seus
                  visitantes e reflete a essência da sua marca. Um design
                  atrativo e funcional mantém os usuários no seu site por mais
                  tempo e aumenta as chances de conversão.
                </p>
                <p>
                  Além disso, um web design de qualidade melhora a experiência do
                  usuário, facilita a navegação e garante que seu site seja
                  acessível em todos os dispositivos. Seja para atrair novos
                  clientes, reforçar sua identidade visual ou destacar sua
                  empresa da concorrência, o web design é fundamental para o
                  sucesso digital.
                </p>

                <h3>Como criamos seu web design com excelência</h3>
                <p>
                  Nosso processo de web design combina criatividade e estratégia
                  para entregar sites visualmente impressionantes e altamente
                  funcionais. Utilizamos ferramentas modernas como Figma,
                  Adobe XD e frameworks como Tailwind CSS para criar designs
                  responsivos e personalizados que se alinham aos objetivos do
                  seu negócio.
                </p>
                <p>
                  Começamos com uma análise aprofundada da sua marca e público-alvo,
                  seguida por wireframes, protótipos e iterações de design. Cada
                  elemento visual é cuidadosamente planejado para garantir
                  consistência, acessibilidade e uma experiência de usuário
                  impecável. Nosso objetivo é criar um site que encante seus
                  visitantes e impulsione seus resultados.
                </p>

                <ul className="list-unstyled">
                  <li>
                    <span className="material-symbols-outlined">
                      check_circle
                    </span>
                    Designs responsivos que se adaptam perfeitamente a desktops,
                    tablets e smartphones.
                  </li>
                  <li>
                    <span className="material-symbols-outlined">
                      check_circle
                    </span>
                    Interfaces intuitivas que melhoram a navegação e a experiência
                    do usuário.
                  </li>
                  <li>
                    <span className="material-symbols-outlined">
                      check_circle
                    </span>
                    Identidade visual consistente, alinhada à sua marca e valores.
                  </li>
                </ul>

                <div className="row g-4">
                  <div className="col-6">
                    <img
                      src="/assets/img/bg-img/34.jpg"
                      alt="Imagem de interface de web design"
                    />
                  </div>
                  <div className="col-6">
                    <img
                      src="/assets/img/bg-img/35.jpg"
                      alt="Imagem de protótipo de design"
                    />
                  </div>
                </div>

                <p>
                  Nosso compromisso é criar um web design que seja uma extensão
                  autêntica da sua marca, com visuais cativantes e funcionalidades
                  sob medida. Trabalhamos em colaboração com você para garantir
                  que cada detalhe esteja alinhado com seus objetivos de negócio.
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
                        Quanto tempo leva para criar um web design?
                      </button>
                    </h2>
                    <div
                      id="faqQuestion1"
                      className="accordion-collapse collapse show"
                      data-bs-parent="#faqAccordion"
                    >
                      <div className="accordion-body">
                        O tempo varia conforme a complexidade do projeto, mas
                        geralmente levamos de 2 a 6 semanas para entregar um
                        design completo, desde o planejamento até a aprovação
                        final.
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
                        Vocês oferecem revisões no design?
                      </button>
                    </h2>
                    <div
                      id="faqQuestion2"
                      className="accordion-collapse collapse"
                      data-bs-parent="#faqAccordion"
                    >
                      <div className="accordion-body">
                        Sim, oferecemos rodadas de revisões para garantir que o
                        design final atenda completamente às suas expectativas e
                        objetivos.
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
                        Meu site será otimizado para dispositivos móveis?
                      </button>
                    </h2>
                    <div
                      id="faqQuestion3"
                      className="accordion-collapse collapse"
                      data-bs-parent="#faqAccordion"
                    >
                      <div className="accordion-body">
                        Sim, todos os nossos designs são responsivos, garantindo
                        uma experiência perfeita em dispositivos móveis, tablets
                        e desktops.
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
                        Vocês criam designs alinhados com a minha marca?
                      </button>
                    </h2>
                    <div
                      id="faqQuestion4"
                      className="accordion-collapse collapse"
                      data-bs-parent="#faqAccordion"
                    >
                      <div className="accordion-body">
                        Sim, nossos designs são personalizados para refletir a
                        identidade visual da sua marca, incluindo cores, tipografia
                        e elementos gráficos consistentes.
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
                        Vocês criam web designs para todos os tipos de negócios?
                      </button>
                    </h2>
                    <div
                      id="faqQuestion5"
                      className="accordion-collapse collapse"
                      data-bs-parent="#faqAccordion"
                    >
                      <div className="accordion-body">
                        Sim, criamos web designs personalizados para empresas de
                        todos os tamanhos e setores, desde pequenos negócios locais
                        até grandes corporações.
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