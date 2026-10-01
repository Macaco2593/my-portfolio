import { Resend } from "resend";

// Inicializamos Resend con la variable de entorno que configuraremos luego
const resend = new Resend(process.env.RESEND_API_KEY);

export default async function handler(req: any, res: any) {
  // Solo permitimos peticiones POST
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Método no permitido" });
  }

  const { nombre, email, mensaje } = req.body;

  try {
    const data = await resend.emails.send({
      from: "Portfolio <onboarding@resend.dev>", // Dominio de prueba de Resend
      to: "santiagopjq13@gmail.com", // Tu correo real donde recibirás los mensajes
      subject: `Nuevo mensaje de tu Portfolio de: ${nombre}`,
      html: `
        <h2>Tienes un nuevo mensaje de tu portafolio!</h2>
        <p><strong>Nombre:</strong> ${nombre}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Mensaje:</strong><br/> ${mensaje}</p>
      `,
    });

    return res.status(200).json({ success: true, data });
  } catch (error) {
    return res.status(500).json({ error: "Hubo un error al enviar el correo" });
  }
}
