import Layout from "../components/Layout";
import ContentArticles from "../components/ContentArticles";
import axios from "axios";

function articles({ posts }) {
  return (
    <Layout pageTitle="News and Articles about Web Development Technologies">
      <div>
        <ContentArticles articles={posts.articles} />
      </div>
    </Layout>
  );
}

export async function getStaticProps(ctx) {
  const res = axios.get("http://aweb4devsapi.herokuapp.com/articles/");
  const posts = (await res).data;

  return {
    props: {
      posts,
    },
  };
}

export default articles;
