import { GetStaticPaths } from "next/types"
import { JokeView } from "../../components/joke-view"
import client from "../../graphql/boot/apollo-client"
import { QueryGetRandomJoke } from "../../graphql/queries/getRandomJoke"
import { Joke } from "../../types/joke"


type Props = {
  joke: Joke
}

const CategoryPage: React.FC<Props> = ({ joke }) => {

  return (
    <div className="flex justify-center">
      <JokeView text={joke.value} />
    </div>
  )
}

export async function getStaticProps({ params: { name } }: { params: { name: string } }) {
  const result = await client.query({
    query: QueryGetRandomJoke,
    variables: {
      category: name
    }
  })

  const joke = result.data.randomJoke;

  return {
    props: {
      joke,
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