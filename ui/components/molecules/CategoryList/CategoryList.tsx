import { Category } from "../../atoms/Category/Category";

interface CategoriesListProps {
  categories: string[];
}

export const CategoryList: React.FC<CategoriesListProps> = ({
  categories,
}) => {
  return (
    <div className="flex flex-wrap justify-center max-w-sm gap-2">
      {categories.map((category: string) => (
        <Category key={category} name={category} />
      ))}
    </div>
  );
};
