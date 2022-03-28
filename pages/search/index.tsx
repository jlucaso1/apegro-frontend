import { FormEvent, useState } from "react";
import { Button } from "../../components/button";
import { JokeView } from "../../components/joke-view";
import { LoadingSpinner } from "../../components/loading-spinner";
import { SearchContext } from "../../contexts/search-context";
import client from "../../graphql/boot/apollo-client";
import { QuerySearchJokes } from "../../graphql/queries/searchJokes";
import { Joke } from "../../types/joke";

const SearchPage = () => {
  const [jokes, setJokes] = useState<Joke[]>([]);
  const [search, setSearch] = useState("");
  const [isFirstSearch, setIsFirstSearch] = useState(true);

  const [isLoading, setIsLoading] = useState(false);

  const onSubmit = async (e: FormEvent) => {
    setIsLoading(true);
    e.preventDefault();
    try {
      const result = await client.query({
        query: QuerySearchJokes,
        variables: {
          query: search,
        },
      });
      setJokes(result.data.searchJokes);
    } finally {
      if (isFirstSearch) {
        setIsFirstSearch(false);
      }
      setIsLoading(false);
    }
  };

  return (
    <SearchContext.Provider
      value={{ jokes, setJokes, isLoading, setIsLoading }}
    >
      <div className="flex flex-col gap-y-10">
        <form
          className="flex flex-col items-center gap-y-3"
          onSubmit={(event) => onSubmit(event)}
        >
          {isLoading ? (
            <LoadingSpinner />
          ) : (
            <input
              className="border border-1 border-blue-300 p-2 text-white bg-transparent focus:border-blue-400 focus:outline-none"
              type={"text"}
              placeholder="Search a joke"
              minLength={3}
              value={search}
              required
              onChange={(e) => setSearch(e.target.value)}
            />
          )}
          <Button type="submit">Search</Button>
        </form>
        <div className="flex flex-col gap-y-4 items-center px-3 pb-3">
          {isFirstSearch ? (
            <JokeView text="Make a search" />
          ) : jokes.length == 0 ? (
            <JokeView text="Not found results" />
          ) : (
            jokes.map((joke) => (
              <JokeView key={joke.id} text={joke.value} className="w-full" />
            ))
          )}
        </div>
      </div>
    </SearchContext.Provider>
  );
};

export default SearchPage;
