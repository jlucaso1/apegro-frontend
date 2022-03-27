import { FormEvent, useState } from "react";
import { Button } from "../../components/button";
import { JokeView } from "../../components/joke-view";
import { SearchContext } from "../../contexts/search-context";
import client from "../../graphql/boot/apollo-client";
import { QuerySearchJokes } from "../../graphql/queries/searchJokes";
import { Joke } from "../../types/joke";

const SearchPage = () => {

  const [jokes, setJokes] = useState<Joke[]>([]);
  const [search, setSearch] = useState("");


  const onSubmit = async (e: FormEvent) => {
    e.preventDefault();
    const result = await client.query({
      query: QuerySearchJokes,
      variables: {
        query: search,
      },
    })
    setJokes(result.data.searchJokes);
  }

  return (
    <SearchContext.Provider value={{ jokes, setJokes }}>
      <div className="flex flex-col gap-y-10">

        <form className='flex flex-col items-center gap-y-3' onSubmit={(event) => onSubmit(event)}>
          <input className="border border-1 border-blue-300 p-2 text-white bg-transparent focus:border-blue-400 focus:outline-none" type={"text"} placeholder="Search a joke" minLength={3} value={search} required
            onChange={
              (e) => setSearch(e.target.value)
            }
          />
          <Button type="submit">
            Search
          </Button>
        </form>
        <div className="flex flex-col gap-y-4 items-center">
          {jokes.map((joke) => (
            <JokeView key={joke.id} text={joke.value} className="w-full" />
          ))}
        </div>
      </div>
    </SearchContext.Provider>
  )
}

export default SearchPage;