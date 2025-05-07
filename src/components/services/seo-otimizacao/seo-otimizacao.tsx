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
                  alt="Imagem de otimização SEO"
                />
                <h2>Por que você precisa de um bom SEO?</h2>
                <p>
                  O SEO (Search Engine Optimization) é a chave para posicionar
                  seu negócio no topo dos resultados de busca do Google. Em um
                  mercado digital competitivo, um bom SEO aumenta a
                  visibilidade do seu site, atrai tráfego qualificado e
                  converte visitantes em clientes. Ele garante que sua marca
                  seja encontrada por quem realmente importa: seu público-alvo.
                </p>
                <p>
                  Além disso, uma estratégia de SEO bem executada fortalece a
                  autoridade da sua marca, melhora a experiência do usuário e
                  proporciona resultados sustentáveis a longo prazo. Seja para
                  aumentar vendas, gerar leads ou destacar sua empresa da
                  concorrência, o SEO é essencial para o sucesso online.
                </p>

                <h3>Como melhoramos seu SEO com estratégias avançadas</h3>
                <p>
                  Nossa abordagem ao SEO é baseada em dados e focada em
                  resultados. Utilizamos técnicas avançadas, como pesquisa de
                  palavras-chave, otimização on-page, link building e análise
                  de concorrência, para garantir que seu site alcance as
                  primeiras posições nos motores de busca. Cada estratégia é
                  personalizada para atender às necessidades do seu negócio.
                </p>
                <p>
                  Começamos com uma auditoria completa do seu site, identificando
                  oportunidades de melhoria. Em seguida, implementamos
                  otimizações técnicas, criamos conteúdo relevante e monitoramos
                  o desempenho com ferramentas como Google Analytics e Search
                  Console. Nosso objetivo é entregar um SEO que maximize seu
                  tráfego orgânico e conversões.
                </p>

                <ul className="list-unstyled">
                  <li>
                    <span className="material-symbols-outlined">
                      check_circle
                    </span>
                    Otimização técnica para melhorar a velocidade e indexação do
                    site.
                  </li>
                  <li>
                    <span className="material-symbols-outlined">
                      check_circle
                    </span>
                    Conteúdo otimizado com palavras-chave estratégicas para
                    atrair tráfego qualificado.
                  </li>
                  <li>
                    <span className="material-symbols-outlined">
                      check_circle
                    </span>
                    Estratégias de link building para aumentar a autoridade do
                    seu domínio.
                  </li>
                </ul>

                <div className="row g-4">
                  <div className="col-6">
                    <img
                      src="/assets/img/bg-img/34.jpg"
                      alt="Imagem de análise SEO"
                    />
                  </div>
                  <div className="col-6">
                    <img
                      src="/assets/img/bg-img/35.jpg"
                      alt="Imagem de resultados de busca"
                    />
                  </div>
                </div>

                <p>
                  Nosso compromisso é posicionar sua marca no topo dos
                  resultados de busca, com estratégias de SEO que refletem as
                  melhores práticas do mercado. Trabalhamos em parceria com você
                  para garantir que cada ação esteja alinhada com seus objetivos
                  de negócios.
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
                        Quanto tempo leva para ver resultados com SEO?
                      </button>
                    </h2>
                    <div
                      id="faqQuestion1"
                      className="accordion-collapse collapse show"
                      data-bs-parent="#faqAccordion"
                    >
                      <div className="accordion-body">
                        Os resultados de SEO dependem de vários fatores, mas
                        geralmente começam a aparecer entre 3 e 6 meses, com
                        melhorias significativas após 6 a 12 meses de trabalho
                        contínuo.
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
                        Vocês oferecem monitoramento contínuo de SEO?
                      </button>
                    </h2>
                    <div
                      id="faqQuestion2"
                      className="accordion-collapse collapse"
                      data-bs-parent="#faqAccordion"
                    >
                      <div className="accordion-body">
                        Sim, oferecemos serviços de monitoramento e otimização
                        contínua para garantir que seu site mantenha e melhore
                        sua posição nos resultados de busca.
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
                        Meu site será otimizado para palavras-chave específicas?
                      </button>
                    </h2>
                    <div
                      id="faqQuestion3"
                      className="accordion-collapse collapse"
                      data-bs-parent="#faqAccordion"
                    >
                      <div className="accordion-body">
                        Sim, realizamos uma pesquisa detalhada de palavras-chave
                        para identificar os termos mais relevantes para seu
                        negócio e otimizamos seu site para atrair tráfego
                        qualificado.
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
                        Vocês garantem a primeira posição no Google?
                      </button>
                    </h2>
                    <div
                      id="faqQuestion4"
                      className="accordion-collapse collapse"
                      data-bs-parent="#faqAccordion"
                    >
                      <div className="accordion-body">
                        Embora não possamos garantir a primeira posição devido
                        aos algoritmos dinâmicos do Google, nossas estratégias
                        são projetadas para maximizar suas chances de alcançar
                        as primeiras posições com técnicas éticas e comprovadas.
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
                        Vocês oferecem SEO para todos os tipos de negócios?
                      </button>
                    </h2>
                    <div
                      id="faqQuestion5"
                      className="accordion-collapse collapse"
                      data-bs-parent="#faqAccordion"
                    >
                      <div className="accordion-body">
                        Sim, desenvolvemos estratégias de SEO personalizadas para
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