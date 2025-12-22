"use server";
import { Resend } from "resend";

const apiKey = process.env.RESEND_API_KEY;

export async function sendEmailToUser({
  name,
  email,
  subject,
  message,
}: {
  name: string;
  email: string;
  subject: string;
  message: string;
}) {
  if (!apiKey) {
    return {success: false, error: "La API Key no está configurada en el servidor"};    
  }
  const resend = new Resend(apiKey);

  try {
    const { data, error } = await resend.emails.send({
      from: "Acme <onboarding@resend.dev>",
      to: ["alejandro36036@gmail.com"],
      subject: `Nuevo mensaje de ${name}: ${subject}`,
      html: `
    <p><strong>Remitente:</strong> ${email}</p>
    <p><strong>Mensaje:</strong></p>
    <p>${message}</p>
  `,
    });

    if (error) {
      return {success: false};
    }

    return { success: true, data };
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  } catch (error) {
    return {success: false};
  }
}
