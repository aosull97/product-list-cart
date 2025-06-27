import React from "react";

interface DecrementIconProps {
  className?: string;
  onClick?: () => void;
}

const DecrementIcon: React.FC<DecrementIconProps> = ({ 
  onClick, 
  className 
}) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"
      fill="none"
      viewBox="0 0 10 2"
      className={`rounded-full border-2 p-0.5 text-white hover:bg-white hover:text-red transition-colors ${className || ''}`}
      onClick={onClick}
    >
      <path fill="currentColor" d="M0 .375h10v1.25H0V.375Z" />
    </svg>
  );
};

export default DecrementIcon;
