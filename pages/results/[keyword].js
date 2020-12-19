import Layout from "../../components/layout";
import SearchResults from "../../components/searchresults";
import axios from "axios";


export default function results({ postsArticles, postsTechs }) {

  return (
    <Layout pageTitle="Search Results...">
      <div>
        <SearchResults
          articles={postsArticles.articles}
          techs={postsTechs.techs}
        />
      </div>
    </Layout>
  );
}

export async function getServerSideProps(ctx) {
  const res = await Promise.all([
    axios.get(
      "http://aweb4devsapi.herokuapp.com/search-articles/" + ctx.query.keyword
    ),
    axios.get(
      "http://aweb4devsapi.herokuapp.com/search-techs/" + ctx.query.keyword
    ),
  ]);

  const postsArticles = (await res[0]).data;
  const postsTechs = (await res[1]).data;

  return {
    props: {
      postsArticles,
      postsTechs,
    },
  };
}
