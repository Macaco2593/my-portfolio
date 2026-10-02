export default function SobreMi() {
  return (
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
            href="/CV-santiago.pdf"
            download="CV-santiago.pdf"
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
  );
}
