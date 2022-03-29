import { useContext } from "react";
import { IndexContext } from "../../../../contexts/index-context";
import client from "../../../../graphql/boot/apollo-client";
import { QueryGetRandomJoke } from "../../../../graphql/queries/getRandomJoke";
import Button from "../Button/Button";

export type CategoryProps = {
  name: string;
};

export const Category: React.FC<CategoryProps> = ({ name }) => {
  const indexContext = useContext(IndexContext);

  const getRandomJoke = async () => {
    indexContext.setIsLoading(true);
    try {
      const result = await client.query({
        query: QueryGetRandomJoke,
        variables: {
          category: name,
        },
        fetchPolicy: "no-cache",
      });
      indexContext.setJokeText(result.data.randomJoke.value);
    } finally {
      indexContext.setIsLoading(false);
    }
  };

  return (
    <button
      className="border border-1 border-yellow-100 text-white p-1 hover:bg-purple-800"
      onClick={getRandomJoke}
    >
      {name}
    </button>
  );
};
