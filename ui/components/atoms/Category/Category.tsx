import { useContext } from "react";
import { IndexContext } from "../../../../contexts/index-context";
import client from "../../../../graphql/boot/apollo-client";
import { QueryGetRandomJoke } from "../../../../graphql/queries/getRandomJoke";
import Button from "../Button/Button";

type Props = {
  name: string;
};

export const Category: React.FC<Props> = ({ name }) => {
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
    <Button
      className="border border-1 border-yellow-100 text-white p-1 hover:bg-purple-800"
      onClick={getRandomJoke}
    >
      {name}
    </Button>
  );
};

export type { Props as CategoryProps };
