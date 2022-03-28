import { useContext } from "react";
import { IndexContext } from "../contexts/index-context";
import client from "../graphql/boot/apollo-client";
import { QueryGetRandomJoke } from "../graphql/queries/getRandomJoke";
import { Button } from "./button";
import { JokeView } from "./joke-view";
import { LoadingSpinner } from "./loading-spinner";

export const RandomJokes: React.FC = ({}) => {
  const indexContext = useContext(IndexContext);

  const getRandomJoke = async () => {
    indexContext.setIsLoading(true);
    try {
      const result = await client.query({
        query: QueryGetRandomJoke,
        fetchPolicy: "no-cache",
      });
      indexContext.setJokeText(result.data.randomJoke.value);
    } finally {
      indexContext.setIsLoading(false);
    }
  };

  return (
    <div className="flex flex-col gap-y-4 px-3 items-center">
      {indexContext.isLoading ? (
        <LoadingSpinner />
      ) : (
        <JokeView text={indexContext.jokeText} />
      )}

      <Button onClick={getRandomJoke} className="self-center">
        Get a random joke
      </Button>
    </div>
  );
};
