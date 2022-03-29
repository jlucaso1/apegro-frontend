interface InputProps {
  value: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export const Input: React.FC<InputProps> = ({ ...props }) => {
  return (
    <input
      className="border border-1 border-blue-300 p-2 text-white bg-transparent focus:border-blue-400 focus:outline-none"
      type={"text"}
      placeholder="Search a joke"
      minLength={3}
      required
      {...props}
    />
  );
};
