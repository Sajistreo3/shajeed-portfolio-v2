import React from "react";
import { FaFileDownload } from "react-icons/fa";

interface AnimatedDownloadButtonProps {
  text?: string;
  onClick?: () => void;
  className?: string;
}

const AnimatedDownloadButton: React.FC<AnimatedDownloadButtonProps> = ({
  text = "Docs",
  onClick,
  className = "",
}) => {
  return (
    <button
      onClick={onClick}
      className={`group relative border-0 text-white text-[15px] font-semibold cursor-pointer rounded-md z-[1] ${className}`}
    >
      <div className="flex items-center justify-between gap-2.5 min-h-[40px] px-2.5 rounded-md z-[1] bg-[#242a35] border border-[#e8e8e82d] transition-all duration-500 ease-[cubic-bezier(0.77,0,0.175,1)] hover:shadow-[rgba(0,0,0,0.25)_0px_54px_55px,rgba(0,0,0,0.12)_0px_-12px_30px,rgba(0,0,0,0.12)_0px_4px_6px,rgba(0,0,0,0.17)_0px_12px_13px,rgba(0,0,0,0.09)_0px_-3px_5px]">
        <div className="flex items-center gap-2.5">
          <FaFileDownload size={20} />
          {text}
        </div>
      </div>
      <div className="absolute inset-0 flex items-center justify-center max-w-[90%] mx-auto z-[-1] rounded-md translate-y-0 bg-[#01e056] border border-[#01e0572d] transition-all duration-500 ease-[cubic-bezier(0.77,0,0.175,1)] group-hover:translate-y-full">
        <svg
          viewBox="0 0 24 24"
          width="24"
          height="24"
          stroke="currentColor"
          strokeWidth="2"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="animate-download"
        >
          <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
          <polyline points="7 10 12 15 17 10" />
          <line x1="12" y1="15" x2="12" y2="3" />
        </svg>
      </div>
    </button>
  );
};

export default AnimatedDownloadButton;
