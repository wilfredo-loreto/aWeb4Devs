import Layout from "../../components/Layout";
import ArticlePage from "../../components/ArticlePage";
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
    <Layout>
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
    params: { articletitle: article.title.split(" ").join("-") },
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
  const res = await Promise.all([
    axios.get(
      `https://aweb4devsapi.herokuapp.com/article/${unSlug(
        params.articletitle
      )}`
    ),
    axios.get(
      `https://aweb4devsapi.herokuapp.com/article/aside/${unSlug(
        params.articletitle
      )}`
    ),
  ]);

  return {
    props: {
      articleContent: res[0].data.article,
      relatedArticles: res[1].data.result,
    },
    revalidate: 86400,
  };
}
