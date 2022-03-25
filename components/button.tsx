
type ButtonProps = {
  children: React.ReactNode,
  onClick?: () => void,
  className?: string;
}

export const Button: React.FC<ButtonProps> = ({ children, onClick, className }) => {
  return (
    <button className={`${className} border border-1 border-red-300 p-2 text-white hover:bg-green-900`} onClick={onClick}  >
      {children}
    </button>
  )
}