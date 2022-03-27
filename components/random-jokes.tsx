import { useContext } from "react";
import { IndexContext } from "../contexts/index-context";
import client from "../graphql/boot/apollo-client";
import { QueryGetRandomJoke } from "../graphql/queries/getRandomJoke";
import { Button } from "./button";
import { JokeView } from "./joke-view";



export const RandomJokes: React.FC = ({ }) => {
  const indexContext = useContext(IndexContext);

  const getRandomJoke = async () => {
    const result = await client.query({
      query: QueryGetRandomJoke,
      fetchPolicy: "no-cache",
    });
    indexContext.setJokeText(result.data.randomJoke.value);
  }

  return (
    <>
      <JokeView text={indexContext.jokeText} />

      <Button className='mt-2' onClick={getRandomJoke}>
        Get a random joke
      </Button>
    </>
  );
}