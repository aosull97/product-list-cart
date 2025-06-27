import React from "react";

interface IncrementIconProps {
  className?: string;
  onClick?: () => void;
}

const IncrementIcon: React.FC<IncrementIconProps> = ({
  className,
  onClick,
}) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"
      fill="none"
      viewBox="0 0 10 10"
      className={`rounded-full border-2 p-0.5 text-white hover:bg-white hover:text-red transition-colors ${className || ''}`}
      onClick={onClick}
    >
      <path
        fill="currentColor"
        d="M10 4.375H5.625V0h-1.25v4.375H0v1.25h4.375V10h1.25V5.625H10v-1.25Z"
      />
    </svg>
  );
};

export default IncrementIcon;
