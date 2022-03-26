import { Category } from "./category";

type CategoriesViewProps = {
  categories: string[];
}

export const CategoriesView: React.FC<CategoriesViewProps> = ({ categories }) => {

  return (
    <div className="flex flex-wrap justify-center max-w-sm gap-2 absolute mx-auto bottom-7 left-0 right-0">
      {categories.map((category: string) => (
        <Category key={category} name={category} />
      ))}
    </div>
  );
}




