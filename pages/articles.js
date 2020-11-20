import Layout from "../components/layout";
import ContentArticles from "../components/contentarticles";
import axios from "axios";

function articles({ posts }) {
  return (
    <Layout pageTitle="News and Articles about Web Development Technologies" description="Choose any article that you want more information. You will find various topics regarding web page development, mobile applications, desktop applications, servers, code examples in multiple programming languages, and much more.">
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
