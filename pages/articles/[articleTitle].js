import Layout from "../../components/layout";
import ArticlePage from "../../components/articlepage";
import axios from "axios";
import { useRouter } from "next/router";

export default function article({ articleContent, relatedArticles }) {
  const router = useRouter();
  if (router.isFallback) {
    return (
      <img
        src="/img/loading.gif"
        alt="loading gif"
        style={{
          height: "25%",
          width: "25%",
          display: "block",
          margin: "5% auto",
        }}
      />
    );
  }
  return (
    <Layout pageTitle={articleContent.title  + " - AWeb4Devs"} description={articleContent.summary} keywords={articleContent.tags}>
      <div>
        <ArticlePage
          articleContent={articleContent}
          relatedArticles={relatedArticles}
          isArticle = {true}
        />
      </div>
    </Layout>
  );
}

export async function getStaticPaths() {
  const res = axios.get("http://aweb4devsapi.herokuapp.com/articles");
  const articles = (await res).data.articles;

  const paths = articles.map((article) => ({
    params: { articletitle: article.title.split(" ").join("-").replace("?","%3F") },
  }));
  return {
    paths,
    fallback: true, 
  };
}
 
export async function getStaticProps({ params }) {
  function unSlug(str) {
    return str.split("-").join(" ");
  }
  function fixedEncodeURIComponent(str) {
    return encodeURIComponent(str).replace(/[!'()*]/g, function(c) {
      return '%' + c.charCodeAt(0).toString(16);
    });
  }
  let request = fixedEncodeURIComponent(unSlug(params.articletitle))
  const res = await Promise.all([
    axios.get(
      `https://aweb4devsapi.herokuapp.com/article/${request}`
    ),
    axios.get(
      `https://aweb4devsapi.herokuapp.com/article/aside/${request}`
    ),
  ]);
  console.log(fixedEncodeURIComponent(unSlug(params.articletitle)));
  return {
    props: {
      articleContent: res[0].data.article,
      relatedArticles: res[1].data.result,
    },
    revalidate: 86400,
  };
}
