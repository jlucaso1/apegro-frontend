import { useContext } from "react";
import { IndexContext } from "../../../../src/contexts/index-context";
import client from "../../../../src/graphql/boot/apollo-client";
import { QueryGetRandomJoke } from "../../../../src/graphql/queries/getRandomJoke";
import { Category } from "../../atoms/Category/Category";

interface CategoriesListProps {
  categories: string[];
}

export const CategoryList: React.FC<CategoriesListProps> = ({ categories }) => {
  const indexContext = useContext(IndexContext);

  const getRandomJoke = async (categoryName: string) => {
    indexContext.setIsLoading(true);
    try {
      const result = await client.query({
        query: QueryGetRandomJoke,
        variables: {
          category: categoryName,
        },
        fetchPolicy: "no-cache",
      });
      indexContext.setJokeText(result.data.randomJoke.value);
    } finally {
      indexContext.setIsLoading(false);
    }
  };

  return (
    <div className="flex flex-wrap justify-center max-w-sm gap-2">
      {categories.map((category: string) => (
        <Category key={category} name={category} onClick={getRandomJoke} />
      ))}
    </div>
  );
};
