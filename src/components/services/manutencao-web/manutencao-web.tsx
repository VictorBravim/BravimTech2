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
                  alt="Imagem de manutenção web"
                />
                <h2>Por que você precisa de manutenção web?</h2>
                <p>
                  A manutenção web é essencial para garantir que seu site
                  permaneça seguro, rápido e atualizado. Em um ambiente digital
                  em constante evolução, a manutenção regular evita problemas
                  técnicos, protege contra ameaças cibernéticas e mantém a
                  experiência do usuário no mais alto nível. Um site bem
                  mantido reforça a confiança dos visitantes e a credibilidade
                  da sua marca.
                </p>
                <p>
                  Além disso, a manutenção contínua melhora o desempenho nos
                  motores de busca, corrige erros rapidamente e garante que seu
                  site esteja alinhado com as últimas tendências e tecnologias.
                  Seja para evitar downtime, otimizar a velocidade ou manter
                  conteúdos atualizados, a manutenção web é crucial para o
                  sucesso online do seu negócio.
                </p>

                <h3>Como realizamos a manutenção do seu site com eficiência</h3>
                <p>
                  Nosso serviço de manutenção web é projetado para manter seu
                  site funcionando perfeitamente, com foco em segurança,
                  desempenho e atualizações. Utilizamos ferramentas avançadas
                  para monitoramento, backups automáticos e correção de erros,
                  além de realizar atualizações de plugins, temas e sistemas
                  para garantir compatibilidade e proteção.
                </p>
                <p>
                  Começamos com uma auditoria completa do seu site para
                  identificar pontos de melhoria. Em seguida, implementamos um
                  plano de manutenção personalizado, que inclui atualizações
                  regulares, verificações de segurança e otimizações de
                  desempenho. Nosso objetivo é proporcionar tranquilidade,
                  permitindo que você foque no seu negócio enquanto cuidamos do
                  seu site.
                </p>

                <ul className="list-unstyled">
                  <li>
                    <span className="material-symbols-outlined">
                      check_circle
                    </span>
                    Atualizações regulares de plugins, temas e CMS para máxima
                    compatibilidade.
                  </li>
                  <li>
                    <span className="material-symbols-outlined">
                      check_circle
                    </span>
                    Backups automáticos para proteger seus dados contra perdas.
                  </li>
                  <li>
                    <span className="material-symbols-outlined">
                      check_circle
                    </span>
                    Monitoramento de segurança para prevenir e corrigir ameaças
                    cibernéticas.
                  </li>
                </ul>

                <div className="row g-4">
                  <div className="col-6">
                    <img
                      src="/assets/img/bg-img/34.jpg"
                      alt="Imagem de monitoramento de site"
                    />
                  </div>
                  <div className="col-6">
                    <img
                      src="/assets/img/bg-img/35.jpg"
                      alt="Imagem de atualização de site"
                    />
                  </div>
                </div>

                <p>
                  Nosso compromisso é manter seu site em perfeito estado,
                  oferecendo suporte proativo e soluções rápidas para qualquer
                  necessidade. Trabalhamos em parceria com você para garantir
                  que seu site esteja sempre pronto para atender seus clientes.
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
                        Com que frequência meu site precisa de manutenção?
                      </button>
                    </h2>
                    <div
                      id="faqQuestion1"
                      className="accordion-collapse collapse show"
                      data-bs-parent="#faqAccordion"
                    >
                      <div className="accordion-body">
                        Recomendamos manutenção mensal para atualizações,
                        backups e verificações de segurança, mas a frequência
                        pode variar conforme as necessidades do seu site.
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
                        Vocês oferecem suporte para emergências?
                      </button>
                    </h2>
                    <div
                      id="faqQuestion2"
                      className="accordion-collapse collapse"
                      data-bs-parent="#faqAccordion"
                    >
                      <div className="accordion-body">
                        Sim, oferecemos suporte prioritário para emergências,
                        como falhas técnicas ou ataques de segurança, para
                        restaurar seu site rapidamente.
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
                        A manutenção inclui atualizações de conteúdo?
                      </button>
                    </h2>
                    <div
                      id="faqQuestion3"
                      className="accordion-collapse collapse"
                      data-bs-parent="#faqAccordion"
                    >
                      <div className="accordion-body">
                        Sim, podemos incluir atualizações de conteúdo, como
                        textos, imagens e novos recursos, conforme o plano de
                        manutenção escolhido.
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
                        Vocês garantem a segurança do meu site durante a manutenção?
                      </button>
                    </h2>
                    <div
                      id="faqQuestion4"
                      className="accordion-collapse collapse"
                      data-bs-parent="#faqAccordion"
                    >
                      <div className="accordion-body">
                        Sim, implementamos medidas de segurança avançadas,
                        como verificações de malware e atualizações de software,
                        para proteger seu site durante e após a manutenção.
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
                        Vocês oferecem manutenção para todos os tipos de sites?
                      </button>
                    </h2>
                    <div
                      id="faqQuestion5"
                      className="accordion-collapse collapse"
                      data-bs-parent="#faqAccordion"
                    >
                      <div className="accordion-body">
                        Sim, fornecemos serviços de manutenção para sites de
                        todos os tipos, incluindo WordPress, sites personalizados
                        e plataformas de e-commerce, independentemente do setor.
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