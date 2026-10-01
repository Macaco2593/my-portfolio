import { FileText, Home, User, Folder, Zap, Mail } from "lucide-react";
import { useState } from "react";

const FormularioContacto = () => {
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
};
export const archivos = [
  {
    id: 1,
    title: "README.md",
    icon: <FileText className="w-4 h-4 text-sky-400" />,
    content: (
      <div className="font-consolas">
        <h2 className="font-mono text-4xl font-bold text-teal-400 mb-4 pb-2 ">
          # ¡Buenas, Bienvenid@ a mi portfolio!
        </h2>
        <p className="text-sm text-gray-300 leading-relaxed">
          Desde el explorador de archivos podrás manejar qué ves. <br /> <br />
          Disfruta de lo simple.
        </p>
      </div>
    ),
  },
  {
    id: 2,
    title: "inicio.tsx",
    icon: <Home className="w-4 h-4 text-blue-400" />,
    content: (
      <div className="flex flex-col gap-6 font-sans max-w-4xl">
        <div className="bg-[#252526] p-6 rounded-xl flex flex-col md:flex-row items-center md:items-start gap-8 shadow-lg border border-[#333333]">
          {/* Imagen de perfil */}
          <div className="shrink-0">
            <img
              src="https://avatars.githubusercontent.com/Macaco2593"
              alt="Santiago Paredes"
              className="w-40 h-40 rounded-full object-cover border-4 border-[#333333] shadow-md"
            />
          </div>

          <div className="w-full bg-[#1e1e1e] p-4 rounded-lg overflow-x-auto font-mono text-[14px] leading-loose">
            <p>
              <span className="text-[#569cd6]">const</span>{" "}
              <span className="text-[#4fc1ff]">desarrollador</span>{" "}
              <span className="text-[#d4d4d4]">=</span> {"{"}
            </p>
            <div className="ml-4">
              <p>
                <span className="text-[#9cdcfe]">nombre</span>
                <span className="text-[#d4d4d4]">:</span>{" "}
                <span className="text-[#ce9178]">'Santiago Paredes'</span>
                <span className="text-[#d4d4d4]">,</span>
              </p>
              <p>
                <span className="text-[#9cdcfe]">titulo</span>
                <span className="text-[#d4d4d4]">:</span>{" "}
                <span className="text-[#ce9178]">'Desarrollador Frontend'</span>
                <span className="text-[#d4d4d4]">,</span>
              </p>
              <p>
                <span className="text-[#9cdcfe]">ubicacion</span>
                <span className="text-[#d4d4d4]">:</span>{" "}
                <span className="text-[#ce9178]">
                  'San Cristóbal, Táchira, Venezuela'
                </span>
                <span className="text-[#d4d4d4]">,</span>
              </p>
              <p>
                <span className="text-[#9cdcfe]">disponible</span>
                <span className="text-[#d4d4d4]">:</span>{" "}
                <span className="text-[#569cd6]">true</span>
              </p>
            </div>
            <p>{"};"}</p>
          </div>
        </div>

        <div className="bg-[#252526] p-8 rounded-xl shadow-lg border border-[#333333] font-mono">
          <h2 className="text-2xl font-bold text-white mb-4 ">
            Desarrollador Frontend
          </h2>
          <p className="text-gray-400 leading-relaxed mb-6">
            Soy un desarrollador web apasionado por crear interfaces de usuario
            hermosas e intuitivas. Me encanta transformar problemas complejos en
            diseños simples y soluciones escalables. Especializado en el
            ecosistema de React, siempre busco aprender las mejores tecnologías
            para llevar los proyectos al siguiente nivel.
          </p>

          <a
            href="https://github.com/Macaco2593"
            target="_blank"
            rel="noreferrer"
            className="text-sm inline-flex items-center gap-2 bg-[#2b3137] hover:bg-[#3f4448] text-[#cccccc] hover:text-white px-6 py-2.5 rounded-md font-medium transition-colors w-max"
          >
            <svg height="18" width="18" viewBox="0 0 16 16" fill="currentColor">
              <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"></path>
            </svg>
            Ver mi GitHub
          </a>
        </div>
      </div>
    ),
  },

  {
    id: 3,
    title: "sobre-mi.tsx",
    icon: <User className="w-4 h-4 text-green-400" />,
    content: (
      <div className="font-mono text-[15px] leading-relaxed max-w-4xl">
        <p className="mb-4">
          <span className="text-[#569cd6]">function</span>{" "}
          <span className="text-[#dcdcaa]">sobreMi</span>
          <span className="text-[#ffd700]">()</span>{" "}
          <span className="text-[#ffd700]">{`{`}</span>
        </p>

        <div className="ml-6 flex flex-col gap-6 pl-6 py-2 border-l border-[#404040]">
          <div className="bg-[#1F2934] p-6 rounded-lg shadow-md border border-[#2d3748]">
            <h3 className="font-mono text-white font-bold text-lg mb-3">
              Formación
            </h3>
            <ul className="font-mono list-disc ml-5 text-[#cccccc] flex flex-col gap-1.5">
              <li>Ingeniero de Sistemas - UBA</li>
              <li>Desarrollo Web Frontend</li>
              <li>Frontend con Astro, Vite y TypeScript</li>
              <li>Backend con Node.js</li>
            </ul>
          </div>

          <div className="bg-[#1F2934] p-6 rounded-lg shadow-md border border-[#2d3748] font-mono">
            <h3 className="text-white font-bold text-lg mb-3">Experiencia</h3>
            <div className="text-[#cccccc] flex flex-col gap-2.5">
              <p>Desarrollador Frontend (En progreso)</p>
              <p>
                <span className="font-semibold text-white">
                  Experiencia Profesional:
                </span>{" "}
                Desarrollo Freelance de proyectos web. Creación de sitios
                optimizados y de alto rendimiento utilizando
                <span className="text-[#4ec9b0]"> Astro</span>,
                <span className="text-[#4fc1ff]"> Tailwind CSS</span> y
                <span className="text-[#569cd6]"> TypeScript</span>.
              </p>
            </div>
          </div>

          <div className="bg-[#1F2934] p-6 rounded-lg shadow-md border border-[#2d3748] font-mono">
            <h3 className="text-white font-bold text-lg mb-3">Intereses</h3>
            <p className="text-[#cccccc]">
              Frontend, desarrollo de APIs, buenas prácticas de código y
              aprendizaje continuo.
            </p>
          </div>

          <div className="bg-[#1F2934] p-6 rounded-lg shadow-md border border-[#2d3748] flex flex-col items-start gap-4 font-mono">
            <p className="text-[#cccccc]">
              Si quieres conocer más sobre mi experiencia y formación:
            </p>
            <a
              href="/tu-cv.pdf" // Asegúrate de poner tu PDF en la carpeta "public" de tu proyecto
              download="CV_Santiago_Paredes.pdf"
              className="inline-flex items-center gap-2 bg-[#238636] hover:bg-[#2ea043] text-white px-6 py-2.5 rounded-md font-medium transition-colors"
            >
              {/* Ícono de Descarga */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                <polyline points="7 10 12 15 17 10" />
                <line x1="12" x2="12" y1="15" y2="3" />
              </svg>
              Descargar CV
            </a>
          </div>
        </div>

        <p className="mt-4">
          <span className="text-[#ffd700]">{`}`}</span>
        </p>
      </div>
    ),
  },
  {
    id: 4,
    title: "proyectos.tsx",
    icon: <Folder className="w-4 h-4 text-yellow-400" />,
    content: (
      <div className="font-mono text-[15px] leading-relaxed max-w-5xl">
        <p className="mb-4">
          <span className="text-[#569cd6]">const</span>{" "}
          <span className="text-[#4fc1ff]">proyectos</span>{" "}
          <span className="text-[#d4d4d4]">=</span>{" "}
          <span className="text-[#ffd700]">{`[`}</span>
        </p>

        <div className="ml-4 flex flex-col gap-6 pl-6 py-2 border-l border-[#404040]">
          <div className="bg-[#1F2934] p-6 rounded-lg shadow-md border border-[#2d3748] font-mono transition-transform hover:-translate-y-1 duration-300">
            <h3 className="text-white font-bold text-xl mb-2">
              ADADET - Plataforma de Deportes Acuáticos
            </h3>
            <p className="text-[#cccccc] mb-4 text-sm md:text-base leading-relaxed">
              Sitio web estático y responsivo desarrollado para la asociación de
              deportes acuáticos del estado Táchira. La plataforma centraliza la
              información deportiva y cuenta con un sistema para la
              visualización de resultados en vivo durante las competencias
              regionales de natación.
            </p>

            <div className="flex flex-wrap gap-2 mb-6">
              {[
                "Astro",
                "TypeScript",
                "Cloudflare R2",
                "Resend",
                "Tailwind CSS",
                "Vercel",
              ].map((tech) => (
                <span
                  key={tech}
                  className="bg-[#37414D] text-[#4ec9b0] px-2.5 py-1 rounded-md text-xs font-mono font-semibold"
                >
                  {tech}
                </span>
              ))}
            </div>

            <div className="flex flex-wrap gap-3">
              <a
                href="https://github.com/Macaco2593/static-astro-sport-website" // Aquí pon el link de tu repo
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 bg-[#0e639c] hover:bg-[#1177bb] text-white px-4 py-2 rounded text-sm font-medium transition-colors"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <polyline points="16 18 22 12 16 6"></polyline>
                  <polyline points="8 6 2 12 8 18"></polyline>
                </svg>
                Código
              </a>
              <a
                href="https://adadet.org/"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 bg-[#238636] hover:bg-[#2ea043] text-white px-4 py-2 rounded text-sm font-medium transition-colors"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                  <polyline points="15 3 21 3 21 9"></polyline>
                  <line x1="10" y1="14" x2="21" y2="3"></line>
                </svg>
                Demo
              </a>
            </div>
          </div>
          <div className="bg-[#1F2934] p-6 rounded-lg shadow-md border border-[#2d3748] font-mono transition-transform hover:-translate-y-1 duration-300">
            <h3 className="text-white font-bold text-xl mb-2">
              VSCode Interactive Portfolio
            </h3>
            <p className="text-[#cccccc] mb-4 text-sm md:text-base leading-relaxed">
              Portfolio interactivo con diseño fiel a la interfaz de Visual
              Studio Code. Permite la navegación entre archivos a través de
              pestañas y árbol de directorios, integrando componentes dinámicos
              y estilado avanzado.
            </p>

            <div className="flex flex-wrap gap-2 mb-6">
              {[
                "React",
                "TypeScript",
                "Vite",
                "Tailwind CSS",
                "Express.ts",
                "Vercel",
              ].map((tech) => (
                <span
                  key={tech}
                  className="bg-[#37414D] text-[#4ec9b0] px-2.5 py-1 rounded-md text-xs font-mono font-semibold"
                >
                  {tech}
                </span>
              ))}
            </div>

            <div className="flex flex-wrap gap-3">
              <a
                href="#"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 bg-[#0e639c] hover:bg-[#1177bb] text-white px-4 py-2 rounded text-sm font-medium transition-colors"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <polyline points="16 18 22 12 16 6"></polyline>
                  <polyline points="8 6 2 12 8 18"></polyline>
                </svg>
                Código
              </a>
            </div>
          </div>

          <div className="bg-[#1F2934] p-6 rounded-lg shadow-md border border-[#2d3748] border-dashed font-mono opacity-70">
            <h3 className="text-gray-400 font-bold text-xl mb-2 flex items-center gap-2">
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
                <circle cx="12" cy="12" r="10"></circle>
                <polyline points="12 6 12 12 16 14"></polyline>
              </svg>
              Próximo Proyecto...
            </h3>
            <p className="text-[#858585] mb-4 text-sm md:text-base">
              Actualmente estoy trabajando en nuevas ideas y aprendiendo nuevas
              tecnologías. ¡Pronto añadiré más proyectos a esta lista!
            </p>
            <div className="flex gap-2">
              <span className="bg-[#2d3748] text-[#858585] px-2.5 py-1 rounded-md text-xs font-mono font-semibold">
                En desarrollo
              </span>
            </div>
          </div>
        </div>

        <p className="mt-4">
          <span className="text-[#ffd700]">{`]`}</span>
          <span className="text-[#d4d4d4]">;</span>
        </p>
      </div>
    ),
  },
  {
    id: 5,
    title: "habilidades.tsx",
    icon: <Zap className="w-4 h-4 text-purple-400" />,
    content: (
      <div className="font-mono text-[15px] leading-relaxed max-w-4xl">
        <p className="mb-4">
          <span className="text-[#569cd6]">const</span>{" "}
          <span className="text-[#4fc1ff]">habilidades</span>{" "}
          <span className="text-[#d4d4d4]">=</span>{" "}
          <span className="text-[#ffd700]">{`{`}</span>
        </p>

        <div className="ml-4 flex flex-col gap-6 pl-6 py-2 border-l border-[#404040]">
          <div className="bg-[#1F2934] p-6 rounded-lg shadow-md border border-[#2d3748] font-sans transition-all hover:border-[#404040]">
            <h3 className="text-white font-bold text-xl mb-4">Frontend</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              {[
                "Astro",
                "TypeScript",
                "JavaScript",
                "HTML5",
                "CSS3",
                "Tailwind CSS",
                "Vite",
                "Git",
              ].map((tech) => (
                <span
                  key={tech}
                  className="bg-[#37414D] text-[#4ec9b0] py-2.5 px-2 rounded-md text-sm font-mono font-semibold text-center shadow-sm"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          <div className="bg-[#1F2934] p-6 rounded-lg shadow-md border border-[#2d3748] font-sans transition-all hover:border-[#404040]">
            <h3 className="text-white font-bold text-xl mb-4">Backend</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              {["Node.js", "TypeScript", "API REST"].map((tech) => (
                <span
                  key={tech}
                  className="bg-[#37414D] text-[#4ec9b0] py-2.5 px-2 rounded-md text-sm font-mono font-semibold text-center shadow-sm"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          <div className="bg-[#1F2934] p-6 rounded-lg shadow-md border border-[#2d3748] font-sans transition-all hover:border-[#404040]">
            <h3 className="text-white font-bold text-xl mb-4">Herramientas</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              {["Git y GitHub", "Vercel", "npm", "pnpm"].map((tech) => (
                <span
                  key={tech}
                  className="bg-[#37414D] text-[#4ec9b0] py-2.5 px-2 rounded-md text-sm font-mono font-semibold text-center shadow-sm"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>

        <p className="mt-4">
          <span className="text-[#ffd700]">{`}`}</span>
          <span className="text-[#d4d4d4]">;</span>
        </p>
      </div>
    ),
  },
  {
    id: 6,
    title: "contacto.tsx",
    icon: <Mail className="w-4 h-4 text-red-400" />,
    content: <FormularioContacto />,
  },
];
