export default function Inicio() {
  return (
    <div className="flex flex-col gap-6 font-mono max-w-4xl">
      <div className="font-consolas">
        <h2 className="font-mono text-4xl font-bold text-teal-400 mb-4 pb-2 ">
          # ¡Buenas, Bienvenid@ a mi portfolio!
        </h2>
        <p className="text-sm text-gray-300 leading-relaxed">
          Desde el explorador de archivos podrás manejar qué ves. <br /> <br />
          Disfruta de lo simple.
        </p>
      </div>
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
          ecosistema de Astro, siempre busco aprender las mejores tecnologías
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
  );
}
