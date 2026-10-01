// src/App.tsx
import { useState } from "react";
import ContentViewer, { ContentViewerBody } from "./components/contentViewer";
import { Files, Search, GitBranch, X } from "lucide-react";
import { archivos } from "./data/archivos"; // Importamos los datos

function App() {
  // Estado para los archivos abiertos en las pestañas
  const [openFiles, setOpenFiles] = useState([archivos[0]]);
  // Estado para saber cuál es el archivo que estamos viendo actualmente
  const [activeFileId, setActiveFileId] = useState<number | null>(
    archivos[0].id,
  );

  // Función para abrir un archivo
  const handleOpenFile = (archivo: any) => {
    // Si no está abierto, lo agregamos a las pestañas
    if (!openFiles.find((f) => f.id === archivo.id)) {
      setOpenFiles([...openFiles, archivo]);
    }
    // Lo marcamos como el archivo activo
    setActiveFileId(archivo.id);
  };

  // Función para cerrar una pestaña
  const handleCloseFile = (e: React.MouseEvent, id: number) => {
    e.stopPropagation(); // Evita que se dispare el click de la pestaña
    const newOpenFiles = openFiles.filter((f) => f.id !== id);
    setOpenFiles(newOpenFiles);

    // Si cerramos el archivo que estaba activo, pasamos al último de la lista
    if (activeFileId === id) {
      setActiveFileId(
        newOpenFiles.length > 0
          ? newOpenFiles[newOpenFiles.length - 1].id
          : null,
      );
    }
  };

  // Buscamos el contenido del archivo activo para mostrarlo
  const activeFileContent = archivos.find(
    (f) => f.id === activeFileId,
  )?.content;

  return (
    <div className="flex flex-col h-screen bg-[#1e1e1e] font-sans text-[#cccccc] overflow-hidden">
      {/* --- HEADER (Barra de Título) --- */}
      <header className="flex items-center justify-center h-8 w-full bg-[#323233] border-b border-[#1e1e1e] select-none">
        <h3 className="text-[12px] text-[#cccccc]">
          Tu Nombre - Visual Studio Code
        </h3>
      </header>

      {/* --- CONTENEDOR PRINCIPAL --- */}
      <main className="flex h-full w-full overflow-hidden">
        {/* Barra de Actividad (Activity Bar - Extrema izquierda) */}
        <aside className="w-12 shrink-0 bg-[#333333] flex flex-col items-center py-4 gap-6 text-[#858585]">
          <Files className="w-6 h-6 text-white cursor-pointer" />
          <Search className="w-6 h-6 hover:text-white cursor-pointer transition-colors" />
          <GitBranch className="w-6 h-6 hover:text-white cursor-pointer transition-colors" />
        </aside>

        {/* Explorador (Sidebar) */}
        <div className="w-60 shrink-0 bg-[#252526] flex flex-col border-r border-[#1e1e1e]">
          <div className="px-4 py-3 text-[11px] tracking-wider text-[#cccccc] font-semibold select-none">
            EXPLORADOR
          </div>
          <div className="flex flex-col gap-1 py-1">
            <div className="px-1 text-[11px] font-bold text-[#cccccc] flex items-center mb-1 select-none">
              <span className="ml-2">PORTFOLIO</span>
            </div>
            <ContentViewer>
              {archivos.map((archivo) => (
                <ContentViewerBody
                  key={archivo.id}
                  title={archivo.title}
                  isActive={activeFileId === archivo.id}
                  onClick={() => handleOpenFile(archivo)}
                >
                  {archivo.icon}
                </ContentViewerBody>
              ))}
            </ContentViewer>
          </div>
        </div>

        {/* --- ÁREA DEL EDITOR --- */}
        <div className="flex-1 flex flex-col bg-[#1e1e1e] min-w-0">
          {/* Barra de Pestañas (Tabs) */}
          <div className="flex h-9 bg-[#252526] overflow-x-auto no-scrollbar">
            {openFiles.map((file) => (
              <div
                key={file.id}
                onClick={() => setActiveFileId(file.id)}
                className={`flex items-center gap-2 px-3 py-1 min-w-fit cursor-pointer border-t-2 select-none group
                  ${
                    activeFileId === file.id
                      ? "bg-[#1e1e1e] text-white border-blue-500"
                      : "bg-[#2d2d2d] text-[#8b949e] border-transparent hover:bg-[#2b2d2e]"
                  }
                `}
              >
                {file.icon}
                <span className="text-[13px]">{file.title}</span>
                <div
                  onClick={(e) => handleCloseFile(e, file.id)}
                  className={`ml-1 p-0.5 rounded-md hover:bg-[#333333] ${activeFileId === file.id ? "opacity-100" : "opacity-0 group-hover:opacity-100"}`}
                >
                  <X className="w-3.5 h-3.5" />
                </div>
              </div>
            ))}
          </div>

          {/* Contenido del Archivo */}
          <div className="flex-1 overflow-y-auto p-6">
            {activeFileId ? (
              <div className="text-[#d4d4d4] animate-fade-in">
                {activeFileContent}
              </div>
            ) : (
              <div className="flex h-full items-center justify-center text-gray-500">
                <p>Selecciona un archivo para empezar</p>
              </div>
            )}
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
