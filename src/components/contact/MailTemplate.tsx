import * as React from 'react';

interface EmailTemplateProps {
  name: string;
  phone: string;
  subject: string;
  message: string;
}

export const EmailTemplate: React.FC<EmailTemplateProps> = ({
  name,
  phone,
  subject,
  message,
}) => (
  <main style={{ fontFamily: 'Inter, sans-serif', lineHeight: 1.5 }}>
    <h1>Nova mensagem de contato </h1>
    <p><strong>Nome:</strong> {name}</p>
    <p><strong>Telefone:</strong> {phone}</p>
    <p><strong>Assunto:</strong> {subject}</p>
    <p style={{ whiteSpace: 'pre-wrap' }}>{message}</p>
  </main>
);
