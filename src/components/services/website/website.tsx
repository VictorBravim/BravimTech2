"use client";
import Link from "next/link";
import React from "react";

const ServiceDetailsArea = () => {
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
                  alt="Imagem de desenvolvimento web"
                />
                <h2>Por que você precisa de um website?</h2>
                <p>
                  Um website é a vitrine digital do seu negócio. Em um mundo
                  onde a presença online é essencial, ter um site profissional
                  aumenta sua credibilidade, alcança novos clientes e mantém sua
                  marca disponível 24/7. Ele permite que você apresente seus
                  produtos ou serviços, conecte-se com seu público e se destaque
                  da concorrência.
                </p>
                <p>
                  Além disso, um site bem projetado melhora sua visibilidade nos
                  motores de busca, como o Google, e oferece uma plataforma para
                  compartilhar sua história, valores e diferenciais. Seja para
                  vendas, geração de leads ou construção de autoridade, um
                  website é uma ferramenta indispensável para o sucesso nos dias
                  de hoje.
                </p>

                <h3>Como desenvolvemos seu website com código</h3>
                <p>
                  Nosso processo de desenvolvimento é focado em criar websites
                  únicos, rápidos e otimizados. Utilizamos tecnologias modernas
                  como HTML, CSS, JavaScript e frameworks como React e Next.js
                  para garantir performance e escalabilidade. Cada linha de
                  código é escrita com atenção aos detalhes, garantindo um site
                  responsivo, seguro e adaptado às suas necessidades.
                </p>
                <p>
                  Começamos com uma análise detalhada do seu negócio, seguida
                  por design personalizado, desenvolvimento ágil e testes
                  rigorosos. Nosso objetivo é entregar um site que não apenas
                  atenda às suas expectativas, mas também proporcione uma
                  experiência excepcional para seus visitantes.
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
                    Otimização para SEO, aumentando sua visibilidade nos motores
                    de busca.
                  </li>
                  <li>
                    <span className="material-symbols-outlined">
                      check_circle
                    </span>
                    Código limpo e seguro, garantindo performance e proteção
                    contra ameaças.
                  </li>
                </ul>

                <div className="row g-4">
                  <div className="col-6">
                    <img
                      src="/assets/img/bg-img/34.jpg"
                      alt="Imagem de design web"
                    />
                  </div>
                  <div className="col-6">
                    <img
                      src="/assets/img/bg-img/35.jpg"
                      alt="Imagem de codificação"
                    />
                  </div>
                </div>

                <p>
                  Nosso compromisso é entregar um site que seja uma extensão da
                  sua marca, com design intuitivo e funcionalidades sob medida.
                  Trabalhamos lado a lado com você para garantir que cada
                  detalhe esteja alinhado com seus objetivos.
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
                        Quanto tempo leva para criar um website?
                      </button>
                    </h2>
                    <div
                      id="faqQuestion1"
                      className="accordion-collapse collapse show"
                      data-bs-parent="#faqAccordion"
                    >
                      <div className="accordion-body">
                        O tempo depende da complexidade do projeto, mas
                        geralmente levamos de 2 a 8 semanas para entregar um
                        site completo, desde o planejamento até o lançamento.
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
                        Vocês oferecem manutenção após o lançamento?
                      </button>
                    </h2>
                    <div
                      id="faqQuestion2"
                      className="accordion-collapse collapse"
                      data-bs-parent="#faqAccordion"
                    >
                      <div className="accordion-body">
                        Sim, oferecemos planos de manutenção para manter seu
                        site atualizado, seguro e com desempenho otimizado.
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
                        Meu site será otimizado para o Google?
                      </button>
                    </h2>
                    <div
                      id="faqQuestion3"
                      className="accordion-collapse collapse"
                      data-bs-parent="#faqAccordion"
                    >
                      <div className="accordion-body">
                        Sim, todos os nossos sites são otimizados para SEO,
                        incluindo estrutura, velocidade e palavras-chave
                        relevantes para melhorar sua posição nos resultados de
                        busca.
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
                        Vocês garantem a segurança do meu website?
                      </button>
                    </h2>
                    <div
                      id="faqQuestion4"
                      className="accordion-collapse collapse"
                      data-bs-parent="#faqAccordion"
                    >
                      <div className="accordion-body">
                        Sim, priorizamos a segurança em todos os nossos
                        projetos. Nossos sites são desenvolvidos com código
                        personalizado, utilizando práticas de segurança
                        modernas, como proteção contra ataques comuns, validação
                        de dados e atualizações regulares para manter seu site
                        seguro.
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
                        Vocês criam sites para todos os tipos de negócios?
                      </button>
                    </h2>
                    <div
                      id="faqQuestion5"
                      className="accordion-collapse collapse"
                      data-bs-parent="#faqAccordion"
                    >
                      <div className="accordion-body">
                        Sim, desenvolvemos websites para empresas de todos os
                        tamanhos e setores, desde pequenos negócios locais até
                        grandes corporações.
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