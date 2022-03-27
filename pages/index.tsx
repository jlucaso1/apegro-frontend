import type { NextPage } from 'next'
import Router from 'next/router';
import React, { useState } from 'react';
import { Button } from '../components/button';
import { CategoriesView } from '../components/categories-view';
import { RandomJokes } from '../components/random-jokes';
import { IndexContext } from '../contexts/index-context';
import client from '../graphql/boot/apollo-client';
import { QueryGetCategories } from '../graphql/queries/getCategories';


type IndexPageProps = {
  categories: string[];
}


const Home: NextPage<IndexPageProps> = ({ categories }) => {

  const [jokeText, setJokeText] = useState("Press the button to get a random joke!");

  return (

    <IndexContext.Provider value={{ jokeText, setJokeText }}>
      <div className='flex flex-col items-center'>

        <RandomJokes />


        <div className='flex flex-col absolute mx-auto bottom-7 left-0 right-0 items-center gap-y-5'>
          <Button onClick={() => Router.push("/search")}>
            Search a Joke
          </Button>
          <CategoriesView categories={categories} />
        </div>

      </div>
    </IndexContext.Provider>
  )
}

export async function getStaticProps() {
  const result = await client.query({
    query: QueryGetCategories,
    fetchPolicy: "cache-first",
  })

  const categories = result.data.categories;

  return {
    props: {
      categories,
    },
    revalidate: 30,
  }
}

export default Home
