import { Joke } from "../../../../src/types/joke";
import { JokeView } from "../../atoms/JokeView/JokeView";

interface SearchResult {
  jokes?: Joke[];
}

export const SearchResult: React.FC<SearchResult> = ({ jokes }) => {
  return (
    <div className="flex flex-col gap-y-4 items-center px-3 pb-3">
      {jokes == null ? (
        <JokeView text="Make a search" />
      ) : jokes.length == 0 ? (
        <JokeView text="No results found" />
      ) : (
        jokes.map((joke) => <JokeView key={joke.id} text={joke.value} />)
      )}
    </div>
  );
};
