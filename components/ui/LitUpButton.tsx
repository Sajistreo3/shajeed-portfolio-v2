import React from "react";

const LitUpButton = ({
  btnTitle,
  icon,
  position,
  handleClick,
  otherClasses,
}: {
  btnTitle?: string | React.ReactNode;
  icon?: React.ReactNode;
  position?: string;
  handleClick?: () => void;
  otherClasses?: string;
}) => {
  return (
    <button className={`p-[3px] relative ${otherClasses}`} onClick={handleClick}>
      {/* Outer Gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-lg" />
      
      {/* Inner Button */}
      <div className="px-8 py-2 bg-black rounded-[6px] relative group transition duration-200 text-white hover:bg-transparent">
        {position === "left" && icon}
        {btnTitle}
        {position === "right" && icon}
      </div>
    </button>
  );
};

export default LitUpButton;