"use client";
import React, { useState } from "react";

interface FormState {
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
}

const initialState: FormState = {
  name: "",
  email: "",
  phone: "",
  subject: "",
  message: "",
};

const ContactArea: React.FC = () => {
  const [form, setForm] = useState<FormState>(initialState);
  const [loading, setLoading] = useState(false);
  const [feedback, setFeedback] = useState<null | { ok: boolean; msg: string }>(
    null,
  );

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>,
  ) => {
    const { name, value } = e.target;
    setForm(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setFeedback(null);

    try {
      const res = await fetch("/api/send-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      if (!res.ok) throw new Error("Falha ao enviar mensagem");

      setFeedback({ ok: true, msg: "Mensagem enviada com sucesso 🎉" });
      setForm(initialState);
    } catch (err) {
      setFeedback({ ok: false, msg: "Ops! Não foi possível enviar 😢" });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="contact-details-wrap">

      <div className="contact-form-wrap contact-page-form">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-12 col-lg-10">
              <div className="contact-form bg-secondary m-0 mt-0">
                <div className="section-heading text-center">
                  <h2>
                    Tem dúvidas? <br />
                    Entre em contato conosco!
                  </h2>
                </div>

                <div className="divider-sm"></div>

                <form onSubmit={handleSubmit}>
                  <div className="row g-4 g-xl-5">
                    <div className="col-12 col-lg-6">
                      <input
                        name="name"
                        value={form.name}
                        onChange={handleChange}
                        type="text"
                        className="form-control"
                        placeholder="Seu Nome"
                        required
                      />
                    </div>

                    <div className="col-12 col-lg-6">
                      <input
                        name="email"
                        value={form.email}
                        onChange={handleChange}
                        type="email"
                        className="form-control"
                        placeholder="Endereço de E‑mail"
                        required
                      />
                    </div>

                    <div className="col-12 col-lg-6">
                      <input
                        name="phone"
                        value={form.phone}
                        onChange={handleChange}
                        type="text"
                        className="form-control"
                        placeholder="Seu Telefone"
                      />
                    </div>

                    <div className="col-12 col-lg-6">
                      <select
                        name="subject"
                        value={form.subject}
                        onChange={handleChange}
                        className="form-control"
                        required
                      >
                        <option value="">Selecionar Assunto</option>
                        <option value="Ajuda e Suporte">Ajuda e Suporte</option>
                        <option value="Consulta sobre Recursos">
                          Consulta sobre Recursos
                        </option>
                      </select>
                    </div>

                    <div className="col-12">
                      <textarea
                        name="message"
                        value={form.message}
                        onChange={handleChange}
                        className="form-control"
                        rows={6}
                        placeholder="Digite sua mensagem"
                        required
                      />
                    </div>

                    <div className="col-12">
                      <div className="text-center">
                        <button
                          type="submit"
                          className="btn btn-primary rounded-pill"
                          disabled={loading}
                        >
                          {loading ? "Enviando..." : "ENVIAR MENSAGEM"}
                        </button>
                      </div>
                    </div>

                    {feedback && (
                      <div className="col-12">
                        <p
                          className={`text-center mt-3 ${
                            feedback.ok ? "text-success" : "text-danger"
                          }`}
                        >
                          {feedback.msg}
                        </p>
                      </div>
                    )}
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactArea;
