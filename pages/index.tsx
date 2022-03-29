import client from "../graphql/boot/apollo-client";
import { QueryGetCategories } from "../graphql/queries/getCategories";
import HomePage from "../ui/components/pages/HomePage/HomePage";

export async function getStaticProps() {
  const result = await client.query({
    query: QueryGetCategories,
    fetchPolicy: "cache-first",
  });

  const categories = result.data.categories;

  return {
    props: {
      categories,
    },
    revalidate: 30,
  };
}

export default HomePage;
