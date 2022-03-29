interface ButtonProps {
  /**
   * Label to display
   */
  label: string;

  /**
   * Optional click handler
   */
  onClick?: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;

  /**
   * State of the button
   */
  disabled?: boolean;
}

const Button: React.FC<ButtonProps> = ({ label, ...props }) => {
  return (
    <button
      className={`border border-1 border-red-300 p-2 text-white hover:bg-green-800 disabled:bg-transparent`}
      {...props}
    >
      {label}
    </button>
  );
};

export default Button;
export type { ButtonProps };
