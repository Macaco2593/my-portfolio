export default function Proyectos() {
  return (
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
            información deportiva y ofrece un sistema de resultados en vivo para
            competencias regionales de natación, ranking estadal automatizado.
            Además, implementé flujos de automatización integrando agentes de IA
            potenciados por Opencode, optimizando tareas repetitivas clave como
            la redacción y publicación de noticias o la estructuración
            automática de álbumes fotográficos
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
              href="https://github.com/Macaco2593/static-astro-sport-website"
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
  );
}
