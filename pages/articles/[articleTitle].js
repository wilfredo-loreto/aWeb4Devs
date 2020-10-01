import Layout from "../../components/Layout";
import ArticlePage from "../../components/ArticlePage";
import axios from "axios";
import { useRouter } from "next/router";

export default function article({ articleContent, relatedArticles }) {
  const router = useRouter();
  if (router.isFallback) {
    return <h1>Loading...</h1>;
  }
  return (
    <Layout>
      <div>
        <ArticlePage
          articleContent={articleContent}
          relatedArticles={relatedArticles}
        />
      </div>
    </Layout>
  );
}

export async function getStaticPaths() {
  const res = axios.get("http://aweb4devsapi.herokuapp.com/articles");
  const articles = (await res).data.articles;
 
  const paths = articles.map((article) => ({
    params: {articleTitle: article.title}
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
    axios.get(`https://aweb4devsapi.herokuapp.com/article/${unSlug(params.articleTitle)}`),
    axios.get(`https://aweb4devsapi.herokuapp.com/article/aside/${unSlug(params.articleTitle)}`),
  ]);

  return {
    props: {
      articleContent: res[0].data.article,
      relatedArticles: res[1].data.result,
    },
    revalidate: 1,
  };
}
