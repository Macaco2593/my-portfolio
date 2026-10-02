import { useState } from "react";

export default function Contacto() {
  const [formData, setFormData] = useState({
    nombre: "",
    email: "",
    mensaje: "",
  });
  const [estado, setEstado] = useState<
    "idle" | "loading" | "success" | "error"
  >("idle");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async () => {
    if (!formData.nombre || !formData.email || !formData.mensaje) return;

    setEstado("loading");
    try {
      const response = await fetch("/api/enviar", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setEstado("success");
        setFormData({ nombre: "", email: "", mensaje: "" });
      } else {
        setEstado("error");
      }
    } catch (error) {
      setEstado("error");
    }
  };

  return (
    <div className="font-mono text-[15px] leading-relaxed max-w-4xl pb-10">
      <p className="mb-4">
        <span className="text-[#569cd6]">async function</span>{" "}
        <span className="text-[#dcdcaa]">enviarMensaje</span>
        <span className="text-[#ffd700]">(</span>
        <span className="text-[#9cdcfe]">formulario</span>
        <span className="text-[#ffd700]">)</span>{" "}
        <span className="text-[#ffd700]">{`{`}</span>
      </p>

      <div className="ml-4 flex flex-col gap-6 border-l border-[#404040] pl-6 py-2">
        <div className="flex flex-col gap-2">
          <p>
            <span className="text-[#569cd6]">const</span>{" "}
            <span className="text-[#4fc1ff]">nombre</span>{" "}
            <span className="text-[#d4d4d4]">=</span>
          </p>
          <input
            name="nombre"
            value={formData.nombre}
            onChange={handleChange}
            type="text"
            placeholder="'Escribe tu nombre...'"
            className="bg-[#1F2934] border border-[#2d3748] rounded-md px-4 py-2.5 text-[#ce9178] placeholder-gray-500 focus:outline-none focus:border-[#4fc1ff] w-full md:w-2/3"
          />
        </div>

        <div className="flex flex-col gap-2">
          <p>
            <span className="text-[#569cd6]">const</span>{" "}
            <span className="text-[#4fc1ff]">email</span>{" "}
            <span className="text-[#d4d4d4]">=</span>
          </p>
          <input
            name="email"
            value={formData.email}
            onChange={handleChange}
            type="email"
            placeholder="'tu@email.com'"
            className="bg-[#1F2934] border border-[#2d3748] rounded-md px-4 py-2.5 text-[#ce9178] placeholder-gray-500 focus:outline-none focus:border-[#4fc1ff] w-full md:w-2/3"
          />
        </div>

        <div className="flex flex-col gap-2">
          <p>
            <span className="text-[#569cd6]">const</span>{" "}
            <span className="text-[#4fc1ff]">mensaje</span>{" "}
            <span className="text-[#d4d4d4]">=</span>
          </p>
          <textarea
            name="mensaje"
            value={formData.mensaje}
            onChange={handleChange}
            rows={4}
            placeholder="'¡Hola Santiago!'"
            className="bg-[#1F2934] border border-[#2d3748] rounded-md px-4 py-2.5 text-[#ce9178] placeholder-gray-500 focus:outline-none focus:border-[#4fc1ff] w-full resize-y"
          ></textarea>
        </div>

        {/* Botón */}
        <div className="mt-2">
          <button
            onClick={handleSubmit}
            disabled={estado === "loading"}
            className="bg-[#0e639c] hover:bg-[#1177bb] disabled:bg-gray-600 text-white px-6 py-2.5 rounded-md font-sans font-medium inline-flex items-center gap-2 transition-colors"
          >
            {estado === "loading"
              ? "Enviando..."
              : estado === "success"
                ? "¡Mensaje Enviado!"
                : "Enviar mensaje"}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line x1="22" y1="2" x2="11" y2="13"></line>
              <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
            </svg>
          </button>
          {estado === "error" && (
            <p className="text-red-400 text-sm mt-2 font-sans">
              Hubo un error al enviar. Intenta conectarte por mis redes.
            </p>
          )}
        </div>

        <div className="bg-[#1F2934] p-6 rounded-lg shadow-md border border-[#2d3748] font-sans mt-6">
          <p className="text-[#cccccc] mb-5">
            También puedes contactarme directamente por:
          </p>

          <div className="flex flex-col gap-4">
            <a
              href="mailto:santiagoppjq13@gmail.com"
              className="inline-flex items-center gap-3 text-[#cccccc] hover:text-[#4fc1ff] transition-colors w-max"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                <polyline points="22,6 12,13 2,6"></polyline>
              </svg>
              santiagoppjq13@gmail.com
            </a>

            {/* GitHub */}
            <a
              href="https://github.com/Macaco2593"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-3 text-[#cccccc] hover:text-[#4fc1ff] transition-colors w-max"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
              </svg>
              github.com/Macaco2593
            </a>

            {/* Instagram */}
            <a
              href="https://instagram.com/santiago_j13"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-3 text-[#cccccc] hover:text-[#4fc1ff] transition-colors w-max"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
              </svg>
              instagram.com/santiago_j13
            </a>
          </div>
        </div>
      </div>
      <p className="mt-4">
        <span className="text-[#ffd700]">{`}`}</span>
      </p>
    </div>
  );
}
