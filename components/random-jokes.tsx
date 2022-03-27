import { useLazyQuery } from "@apollo/client";
import { QueryGetRandomJoke } from "../graphql/queries/getRandomJoke";
import { Button } from "./button";
import { JokeView } from "./joke-view";



export const RandomJokes: React.FC = () => {
  const [getRandomJoke, { data, loading }] = useLazyQuery(QueryGetRandomJoke);

  return (
    <>
      <JokeView text={data ? data.randomJoke.value : "Clique no botão para obter uma piada aleatória"} />

      <Button className='mt-2' onClick={getRandomJoke} disabled={loading}>
        Piada aleatória
      </Button>
    </>
  );
}