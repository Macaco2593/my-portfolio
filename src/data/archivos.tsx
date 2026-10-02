import { Home, User, Folder, Zap, Mail } from "lucide-react";
import Inicio from "../components/tabs/Inicio";
import SobreMi from "../components/tabs/SobreMi";
import Proyectos from "../components/tabs/Proyectos";
import Habilidades from "../components/tabs/Habilidades";
import Contacto from "../components/tabs/Contacto";
export const archivos = [
  {
    id: 1,
    title: "inicio.tsx",
    icon: <Home className="w-4 h-4 text-blue-400" />,
    content: <Inicio />,
  },

  {
    id: 2,
    title: "sobre-mi.tsx",
    icon: <User className="w-4 h-4 text-green-400" />,
    content: <SobreMi />,
  },
  {
    id: 3,
    title: "proyectos.tsx",
    icon: <Folder className="w-4 h-4 text-yellow-400" />,
    content: <Proyectos />,
  },
  {
    id: 4,
    title: "habilidades.tsx",
    icon: <Zap className="w-4 h-4 text-purple-400" />,
    content: <Habilidades />,
  },
  {
    id: 5,
    title: "contacto.tsx",
    icon: <Mail className="w-4 h-4 text-red-400" />,
    content: <Contacto />,
  },
];
