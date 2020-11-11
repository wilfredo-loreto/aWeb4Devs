import Layout from "../../components/Layout";
import DefinitionPage from "../../components/DefinitionPage";
import axios from "axios";
import { useRouter } from "next/router";

export default function definitionBackend({
  content,
  asideParents,
  asideChildrens,
}) {
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
    <Layout pageTitle={content.title} description={content.summary} keywords={content.tags}>
      <div>
        <DefinitionPage
          allContent={content}
          asideParents={asideParents}
          asideChildrens={asideChildrens}
          type="backend"
        />
      </div>
    </Layout>
  );
}
export async function getStaticPaths() {
  const res = axios.get("http://aweb4devsapi.herokuapp.com/techs/backend");
  const techs = (await res).data.techs;
  const paths = techs.map((tech) => ({
    params: { techtitle: tech.title.split(" ").join("-") },
  }));
  return {
    paths,
    fallback: true,
  };
}

export async function getStaticProps({ params }) {
  const res = await Promise.all([
    axios.get(`https://aweb4devsapi.herokuapp.com/tech/${params.techtitle}`),
    axios.get(`https://aweb4devsapi.herokuapp.com/aside-techs/backend`),
  ]);

  var childrens = res[1].data.techs;

  var parents = [];
  var i = 0;
  while (childrens[i].parent == "") {
    i++;
  }
  parents = childrens.splice(0, i);

  var orderedChildrens = [];
  for (i = 0; i < parents.length; i++) {
    orderedChildrens[i] = [];
  }
  var j = 0;
  var band = true;
  for (i = 0; i <= childrens.length - 1; i++) {
    band = true;
    while (parents[j].title != childrens[i].parent && band) {
      j++;
      if (parents[j] == undefined) {
        band = false;
      }
    }
    orderedChildrens[j].push(childrens[i]);
  }
  return {
    props: {
      content: res[0].data.tech,
      asideParents: parents,
      asideChildrens: orderedChildrens,
    },
    revalidate: 86400,
  };
}
