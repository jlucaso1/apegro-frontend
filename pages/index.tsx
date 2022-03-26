import type { NextPage } from 'next'
import { CategoriesView } from '../components/categories-view';
import { RandomJokes } from '../components/random-jokes';
import client from '../graphql/boot/apollo-client';
import { QueryGetCategories } from '../graphql/queries/getCategories';


type IndexPageProps = {
  categories: string[];
}

const Home: NextPage<IndexPageProps> = ({ categories }) => {

  return (
    <div className='flex flex-col items-center'>

      <RandomJokes />

      <CategoriesView categories={categories} />

    </div>
  )
}

export async function getStaticProps() {
  const result = await client.query({
    query: QueryGetCategories,
  })

  const categories = result.data.categories;

  return {
    props: {
      categories,
    },
  }
}

export default Home
