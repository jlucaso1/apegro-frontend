type ButtonProps = {
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
  disabled?: boolean;
  type?: "button" | "submit" | "reset";
};

export const Button: React.FC<ButtonProps> = ({
  children,
  onClick,
  className,
  disabled,
  type = "button",
}) => {
  return (
    <button
      className={`${className} border border-1 border-red-300 p-2 text-white hover:bg-green-800 disabled:bg-transparent`}
      onClick={onClick}
      disabled={disabled}
      type={type}
    >
      {children}
    </button>
  );
};
