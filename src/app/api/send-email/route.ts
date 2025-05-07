import { NextResponse } from 'next/server';
import { Resend } from 'resend';
import { EmailTemplate } from '@/components/contact/MailTemplate';
import type { ReactElement } from 'react';

const resend = new Resend(process.env.RESEND_API_KEY);

interface ContactPayload {
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
}

export async function POST(req: Request) {
  try {
    const body: ContactPayload = await req.json();
    if (!body.name || !body.email || !body.subject || !body.message) {
      return NextResponse.json({ message: 'Campos obrigatórios ausentes' }, { status: 400 });
    }

    const { data, error } = await resend.emails.send({
      from: process.env.RESEND_FROM_EMAIL || 'default@seu-dominio.com', // Remetente verificado(pega no resend)
      to: ['seu-email@dominio.com'], // destino aqui (vc no caso)
      replyTo: body.email, 
      subject: `Novo contato: ${body.subject}`,
      react: EmailTemplate({
        name: body.name,
        phone: body.phone,
        subject: body.subject,
        message: body.message,
      }) as ReactElement,
    });

    if (error) {
      return NextResponse.json({ message: 'Erro ao enviar e-mail', details: error }, { status: 400 });
    }

    return NextResponse.json({ message: 'E-mail enviado com sucesso', data });
  } catch (err) {
    return NextResponse.json(
      { message: 'Erro interno', details: (err as Error).message },
      { status: 500 }
    );
  }
}