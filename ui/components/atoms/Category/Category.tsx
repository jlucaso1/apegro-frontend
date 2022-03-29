export type CategoryProps = {
  name: string;
  onClick?: (categoryName: string) => void;
};

export const Category: React.FC<CategoryProps> = ({ name, onClick }) => {
  return (
    <button
      className="border border-1 border-yellow-100 text-white p-1 hover:bg-purple-800"
      onClick={() => onClick && onClick(name)}
    >
      {name}
    </button>
  );
};
