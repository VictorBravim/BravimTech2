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
                  alt="Imagem de site WordPress"
                />
                <h2>Por que você precisa de um site WordPress?</h2>
                <p>
                  Um site WordPress é a solução ideal para quem busca uma
                  presença online poderosa e flexível. Como a plataforma de
                  gerenciamento de conteúdo mais popular do mundo, o WordPress
                  permite criar sites profissionais, fáceis de gerenciar e
                  altamente personalizáveis. Ele é perfeito para negócios que
                  desejam se destacar com um site funcional e visualmente
                  atraente.
                </p>
                <p>
                  Além disso, o WordPress oferece uma vasta gama de temas e
                  plugins que ampliam as funcionalidades do seu site, desde
                  e-commerce até blogs e portfólios. Com otimização para SEO
                  integrada e suporte para todos os dispositivos, um site
                  WordPress é uma ferramenta essencial para alcançar novos
                  clientes e fortalecer sua marca.
                </p>

                <h3>Como criamos seu site WordPress com excelência</h3>
                <p>
                  Nosso processo de desenvolvimento de sites WordPress é focado
                  em entregar soluções personalizadas e de alta qualidade.
                  Utilizamos temas premium e plugins confiáveis, combinados com
                  desenvolvimento sob medida, para criar sites rápidos,
                  seguros e otimizados. Cada projeto é pensado para atender às
                  necessidades específicas do seu negócio.
                </p>
                <p>
                  Começamos com uma análise detalhada dos seus objetivos,
                  seguida pela escolha do tema ideal, personalização do design e
                  integração de funcionalidades. Realizamos testes rigorosos
                  para garantir que o site seja responsivo, fácil de usar e
                  otimizado para motores de busca. Nosso objetivo é entregar um
                  site WordPress que seja simples de gerenciar e poderoso em
                  resultados.
                </p>

                <ul className="list-unstyled">
                  <li>
                    <span className="material-symbols-outlined">
                      check_circle
                    </span>
                    Sites responsivos que funcionam perfeitamente em desktops,
                    tablets e smartphones.
                  </li>
                  <li>
                    <span className="material-symbols-outlined">
                      check_circle
                    </span>
                    Integração de plugins para SEO, segurança e funcionalidades
                    avançadas.
                  </li>
                  <li>
                    <span className="material-symbols-outlined">
                      check_circle
                    </span>
                    Painel de administração intuitivo para gerenciar seu
                    conteúdo com facilidade.
                  </li>
                </ul>

                <div className="row g-4">
                  <div className="col-6">
                    <img
                      src="/assets/img/bg-img/34.jpg"
                      alt="Imagem de painel WordPress"
                    />
                  </div>
                  <div className="col-6">
                    <img
                      src="/assets/img/bg-img/35.jpg"
                      alt="Imagem de personalização WordPress"
                    />
                  </div>
                </div>

                <p>
                  Nosso compromisso é entregar um site WordPress que combine
                  praticidade, desempenho e estética, refletindo a identidade da
                  sua marca. Trabalhamos em parceria com você para garantir que
                  cada detalhe esteja alinhado com seus objetivos de negócios.
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
                        Quanto tempo leva para criar um site WordPress?
                      </button>
                    </h2>
                    <div
                      id="faqQuestion1"
                      className="accordion-collapse collapse show"
                      data-bs-parent="#faqAccordion"
                    >
                      <div className="accordion-body">
                        O tempo depende da complexidade do projeto, mas
                        geralmente levamos de 2 a 6 semanas para entregar um
                        site WordPress completo, desde o planejamento até o
                        lançamento.
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
                        Vocês oferecem suporte após o lançamento?
                      </button>
                    </h2>
                    <div
                      id="faqQuestion2"
                      className="accordion-collapse collapse"
                      data-bs-parent="#faqAccordion"
                    >
                      <div className="accordion-body">
                        Sim, oferecemos planos de suporte e manutenção para
                        manter seu site WordPress atualizado, seguro e com
                        desempenho otimizado.
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
                        Meu site WordPress será otimizado para SEO?
                      </button>
                    </h2>
                    <div
                      id="faqQuestion3"
                      className="accordion-collapse collapse"
                      data-bs-parent="#faqAccordion"
                    >
                      <div className="accordion-body">
                        Sim, todos os nossos sites WordPress são otimizados para
                        SEO, com plugins como Yoast ou Rank Math e práticas que
                        melhoram sua visibilidade nos motores de busca.
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
                        Vocês garantem a segurança do meu site WordPress?
                      </button>
                    </h2>
                    <div
                      id="faqQuestion4"
                      className="accordion-collapse collapse"
                      data-bs-parent="#faqAccordion"
                    >
                      <div className="accordion-body">
                        Sim, implementamos plugins de segurança, atualizações
                        regulares e práticas recomendadas para proteger seu site
                        WordPress contra ameaças digitais.
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
                        Vocês criam sites WordPress para todos os tipos de negócios?
                      </button>
                    </h2>
                    <div
                      id="faqQuestion5"
                      className="accordion-collapse collapse"
                      data-bs-parent="#faqAccordion"
                    >
                      <div className="accordion-body">
                        Sim, desenvolvemos sites WordPress personalizados para
                        empresas de todos os tamanhos e setores, desde pequenos
                        negócios locais até grandes corporações.
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