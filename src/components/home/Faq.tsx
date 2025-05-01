"use client";
import React, { useState } from "react";

const FaqArea = ({ style_2 }: any) => {
  const [activeIndex, setActiveIndex] = useState(0); // Primeiro item aberto por padrão, como na imagem

  const faqs = [
    {
      question: "Qual é a visão para o futuro?",
      answer:
        "Nossa visão é capacitar empresas a alcançar seu potencial máximo por meio de soluções inovadoras e estratégias personalizadas.",
    },
    {
      question: "Vocês oferecem recursos gratuitos?",
      answer:
        "Sim, oferecemos diversos recursos gratuitos, como guias, webinars e ferramentas de análise para ajudar no crescimento do seu negócio.",
    },
    {
      question: "Podem ajudar a encontrar investidores?",
      answer:
        "Sim, conectamos nossos clientes a uma rede de investidores e oferecemos suporte na elaboração de pitches e estratégias de captação de recursos.",
    },
    {
      question: "Como vocês personalizam suas soluções?",
      answer:
        "Analisamos as necessidades específicas de cada cliente e desenvolvemos estratégias sob medida para atender aos seus objetivos de negócios.",
    },
    {
      question: "Quais serviços vocês oferecem?",
      answer:
        "Oferecemos consultoria em estratégia, marketing digital, gestão financeira, desenvolvimento de tecnologia e muito mais.",
    },
  ];

  const toggleAccordion = (index: number) => {
    setActiveIndex(activeIndex === index ? -1 : index);
  };

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
                {faqs.map((faq, index) => (
                  <div className="accordion-item" key={index}>
                    <h2 className="accordion-header">
                      <button
                        className={`accordion-button1 ${
                          activeIndex === index ? "active" : ""
                        }`}
                        type="button"
                        onClick={() => toggleAccordion(index)}
                        aria-expanded={activeIndex === index}
                      >
                        {faq.question}
                        <span className="accordion-icon">
                          {activeIndex === index ? "−" : "+"}
                        </span>
                      </button>
                    </h2>
                    <div
                      className={`accordion-collapse ${
                        activeIndex === index ? "show" : ""
                      }`}
                    >
                      <div className="accordion-body pt-0">{faq.answer}</div>
                    </div>
                  </div>
                ))}
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