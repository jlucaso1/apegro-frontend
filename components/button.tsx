
type ButtonProps = {
  children: React.ReactNode,
  onClick?: () => void,
  className?: string;
  disabled?: boolean;
}

export const Button: React.FC<ButtonProps> = ({ children, onClick, className, disabled }) => {
  return (
    <button className={`${className} border border-1 border-red-300 p-2 text-white hover:bg-green-800 disabled:bg-transparent`} onClick={onClick} disabled={disabled}  >
      {children}
    </button>
  )
}