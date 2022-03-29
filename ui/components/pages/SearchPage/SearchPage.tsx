import { useState } from "react";
import client from "../../../../src/graphql/boot/apollo-client";
import { QuerySearchJokes } from "../../../../src/graphql/queries/searchJokes";
import { Joke } from "../../../../src/types/joke";
import { SearchResult } from "../../molecules/SearchResult/SearchResult";
import { SearchForm } from "../../organisms/SearchForm/SearchForm";

const SearchPage: React.FC = () => {
  const [jokes, setJokes] = useState<Joke[]>();

  const [isLoading, setIsLoading] = useState(false);

  const onSubmit = async (searchText: string) => {
    setIsLoading(true);
    try {
      const result = await client.query({
        query: QuerySearchJokes,
        variables: {
          query: searchText,
        },
      });
      setJokes(result.data.searchJokes);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex flex-col gap-y-10">
      <SearchForm isLoading={isLoading} onSubmit={onSubmit} />
      <SearchResult jokes={jokes} />
    </div>
  );
};

export default SearchPage;
