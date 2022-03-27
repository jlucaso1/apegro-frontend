import { useContext } from "react";
import { IndexContext } from "../contexts/index-context";
import client from "../graphql/boot/apollo-client";
import { QueryGetRandomJoke } from "../graphql/queries/getRandomJoke";

type CategoryProps = {
  name: string;
}

export const Category: React.FC<CategoryProps> = ({ name }) => {
  const indexContext = useContext(IndexContext);

  const getRandomJoke = async () => {
    const result = await client.query({
      query: QueryGetRandomJoke,
      variables: {
        category: name
      },
      fetchPolicy: "no-cache",
    });
    indexContext.setJokeText(result.data.randomJoke.value);
  }
  return (
    <button className="border border-1 border-yellow-100 text-white p-1" onClick={getRandomJoke}>
      {name}
    </button>
  )
}