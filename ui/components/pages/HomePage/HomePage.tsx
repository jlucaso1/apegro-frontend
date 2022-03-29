import type { NextPage } from "next";
import Router from "next/router";
import React, { useState } from "react";
import { IndexContext } from "../../../../contexts/index-context";
import client from "../../../../graphql/boot/apollo-client";
import { QueryGetCategories } from "../../../../graphql/queries/getCategories";
import { QueryGetRandomJoke } from "../../../../graphql/queries/getRandomJoke";
import Button from "../../atoms/Button/Button";
import { CategoryList } from "../../molecules/CategoryList/CategoryList";
import { RandomJoke } from "../../organisms/RandomJoke/RandomJoke";

type IndexPageProps = {
  categories: string[];
};

const HomePage: NextPage<IndexPageProps> = ({ categories }) => {
  const [jokeText, setJokeText] = useState(
    "Press the button to get a random joke!"
  );
  const [isLoading, setIsLoading] = useState(false);

  const getRandomJoke = async () => {
    setIsLoading(true);
    try {
      const result = await client.query({
        query: QueryGetRandomJoke,
        fetchPolicy: "no-cache",
      });
      setJokeText(result.data.randomJoke.value);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <IndexContext.Provider
      value={{ jokeText, setJokeText, isLoading, setIsLoading }}
    >
      <div className="flex flex-col items-center">
        <RandomJoke
          isLoading={isLoading}
          jokeText={jokeText}
          onClick={getRandomJoke}
        />

        <div className="flex flex-col absolute mx-auto bottom-7 left-0 right-0 items-center gap-y-5">
          <Button
            onClick={() => Router.push("/search")}
            label="Search a Joke"
          />
          <CategoryList categories={categories} />
        </div>
      </div>
    </IndexContext.Provider>
  );
};



export default HomePage;
