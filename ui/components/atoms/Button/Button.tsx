type Props = {
  children?: React.ReactNode;
  onClick?: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
  className?: string;
};

const Button: React.FC<Props> = ({ children, type = "button", ...props }) => {
  return (
    <button
      type={type}
      className={`border border-1 border-red-300 p-2 text-white hover:bg-green-800 disabled:bg-transparent`}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
export type { Props as ButtonProps };
