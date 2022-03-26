import { GetStaticPaths } from "next/types"
import client from "../../graphql/boot/apollo-client"
import { QueryGetRandomJoke } from "../../graphql/queries/getRandomJoke"


const CategoryPage: React.FC = () => {


  return (
    <>
    </>
  )
}

export async function getStaticProps({ params: { name } }: { params: { name: string } }) {
  const result = await client.query({
    query: QueryGetRandomJoke,
    variables: {
      category: name
    }
  })

  const jokes = result.data.randomJoke;
  

  console.log(jokes)

  return {
    props: {
      jokes,
    },
  }
}

export const getStaticPaths: GetStaticPaths<{ slug: string }> = async () => {

  return {
    paths: [], //indicates that no page needs be created at build time
    fallback: 'blocking' //indicates the type of fallback
  }
}

export default CategoryPage;