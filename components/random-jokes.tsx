import { useLazyQuery } from "@apollo/client";
import { QueryGetRandomJoke } from "../graphql/queries/getRandomJoke";
import { Button } from "./button";



export const RandomJokes: React.FC = () => {
  const [getRandomJoke, { data, loading }] = useLazyQuery(QueryGetRandomJoke);

  return (
    <>
      <div className='text-white border border-double border-1 border-slate-400 p-3 max-w-lg text-justify'>
        {data ? data.randomJoke.value : "Clique no botão para obter uma piada aleatória"}
      </div>

      <Button className='mt-2' onClick={getRandomJoke} disabled={loading}>
        Piada aleatória
      </Button>
    </>
  );
}