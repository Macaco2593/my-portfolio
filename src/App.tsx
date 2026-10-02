// src/App.tsx
import { useState, useRef, useEffect } from "react";
import ContentViewer, { ContentViewerBody } from "./components/contentViewer";
import { Files, Search, GitBranch, X, Menu } from "lucide-react";
import { archivos } from "./data/archivos";

function App() {
  const [openFiles, setOpenFiles] = useState([archivos[0]]);
  const [activeFileId, setActiveFileId] = useState<number | null>(
    archivos[0].id,
  );
  // estado para controlar el menú lateral en celulares
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const editorRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (editorRef.current) {
      editorRef.current.scrollTop = 0;
    }
  }, [activeFileId]);

  const handleOpenFile = (archivo: any) => {
    if (!openFiles.find((f) => f.id === archivo.id)) {
      setOpenFiles([...openFiles, archivo]);
    }
    setActiveFileId(archivo.id);
    // cerrar el menú automáticamente al abrir un archivo en celulares
    if (window.innerWidth < 768) {
      setIsSidebarOpen(false);
    }
  };

  const handleCloseFile = (e: React.MouseEvent, id: number) => {
    e.stopPropagation();
    const newOpenFiles = openFiles.filter((f) => f.id !== id);
    setOpenFiles(newOpenFiles);

    if (activeFileId === id) {
      setActiveFileId(
        newOpenFiles.length > 0
          ? newOpenFiles[newOpenFiles.length - 1].id
          : null,
      );
    }
  };

  const activeFileContent = archivos.find(
    (f) => f.id === activeFileId,
  )?.content;

  return (
    <div className="flex flex-col h-screen bg-[#1e1e1e] font-sans text-[#cccccc] overflow-hidden">
      <header className="flex items-center justify-between md:justify-center h-8 w-full bg-[#323233] border-b border-[#1e1e1e] select-none px-4 md:px-0">
        {/* botón de menu hamburguesa solo visible en móviles */}
        <button
          className="md:hidden text-[#cccccc] hover:text-white"
          onClick={() => setIsSidebarOpen(!isSidebarOpen)}
        >
          <Menu className="w-4 h-4" />
        </button>
        <h3 className="text-[12px] text-[#cccccc]">
          Santiago - Visual Studio Code
        </h3>
        <div className="w-4 md:hidden"></div>{" "}
        {/* Espaciador para centrar el título en móviles */}
      </header>

      <main className="flex h-full w-full overflow-hidden relative">
        <aside className="hidden md:flex w-12 shrink-0 bg-[#333333] flex-col items-center py-4 gap-6 text-[#858585]">
          <Files
            className="w-6 h-6 text-white cursor-pointer"
            onClick={() => setIsSidebarOpen(!isSidebarOpen)}
          />
          <Search className="w-6 h-6 hover:text-white cursor-pointer transition-colors" />
          <GitBranch className="w-6 h-6 hover:text-white cursor-pointer transition-colors" />
        </aside>

        {/* --- EXPLORADOR (Barra Lateral) --- */}
        <div
          className={`
            absolute md:relative z-20 h-full
            ${isSidebarOpen ? "translate-x-0" : "-translate-x-full md:translate-x-0"}
            transition-transform duration-300 ease-in-out
            w-64 shrink-0 bg-[#252526] flex flex-col border-r border-[#1e1e1e] shadow-2xl md:shadow-none
          `}
        >
          <div className="px-4 py-3 text-[11px] tracking-wider text-[#cccccc] font-semibold select-none flex justify-between items-center">
            <span>EXPLORADOR</span>
            <X
              className="w-4 h-4 cursor-pointer md:hidden hover:text-white"
              onClick={() => setIsSidebarOpen(false)}
            />
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

        {/* Fondo oscuro cuando el menú está abierto en móviles */}
        {isSidebarOpen && (
          <div
            className="absolute inset-0 bg-black bg-opacity-50 z-10 md:hidden"
            onClick={() => setIsSidebarOpen(false)}
          ></div>
        )}

        {/* --- ÁREA DEL EDITOR --- */}
        <div className="flex-1 flex flex-col bg-[#1e1e1e] min-w-0">
          {/* barra de Pestañas */}
          <div className="flex h-9 bg-[#252526] overflow-x-auto whitespace-nowrap scrollbar-hide border-b border-[#1e1e1e]">
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

          {/* contenido del archivo */}
          <div ref={editorRef} className="flex-1 overflow-y-auto p-4 md:p-6">
            {activeFileId ? (
              <div className="text-[#d4d4d4] animate-fade-in pb-10">
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
