import { ReactElement } from "react";

interface Buttonprops {
  variant: "primary" | "secondary";
  text: string;
  startIcon: ReactElement;
  onClick?: () => void;
  fullWidth?: boolean;
  loading?: boolean;
}

const variantClasses = {
  primary: "bg-purple-600 text-white",
  secondary: "bg-purple-200 text-purple-600",
};

const defaultStyle = "px-4 py-2 rounded-md font-light flex items-center";

export function Button({
  variant,
  text,
  startIcon,
  fullWidth,
  onClick,
  loading,
}: Buttonprops) {
  return (
    <button
      onClick={onClick}
      className={
        variantClasses[variant] +
        " " +
        defaultStyle +
        `${fullWidth ? " w-full flex justify-center items-center" : ""}`
      }
    >
      <div className="pr-2">{startIcon}</div>
      {text}
    </button>
  );
}
