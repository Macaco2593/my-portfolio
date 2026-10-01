import type { ReactNode } from "react";

interface Props {
  children: ReactNode;
  title?: string;
}

function ContentViewer(props: Props) {
  const { children } = props;

  return (
    <div className="flex flex-col w-full font-sans">
      <div className="text-white">{children}</div>
    </div>
  );
}

interface ContentViewerBodyProps {
  title: string;
  children: ReactNode;
  onClick?: () => void;
  isActive?: boolean;
}

export function ContentViewerBody(props: ContentViewerBodyProps) {
  const { title, children, onClick, isActive } = props;
  return (
    <div
      onClick={onClick}
      className={`flex items-center gap-2 px-4 py-1 cursor-pointer select-none transition-colors duration-75
        ${isActive ? "bg-[#37373d] text-white" : "text-[#cccccc] hover:bg-[#2a2d2e] hover:text-white"}
      `}
    >
      {children}
      <span className="text-[13px]">{title}</span>
    </div>
  );
}

export default ContentViewer;
