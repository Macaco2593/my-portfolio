export default function Habilidades() {
  return (
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
            {[
              "Git y GitHub",
              "Vercel",
              "npm",
              "pnpm",
              "OpenCode",
              "Agentes de IA",
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
      </div>

      <p className="mt-4">
        <span className="text-[#ffd700]">{`}`}</span>
        <span className="text-[#d4d4d4]">;</span>
      </p>
    </div>
  );
}
