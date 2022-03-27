import type { NextPage } from 'next'
import React, { useState } from 'react';
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

        <CategoriesView categories={categories} />

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
  }
}

export default Home
