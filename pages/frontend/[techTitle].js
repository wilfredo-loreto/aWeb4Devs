import Layout from "../../components/Layout";
import DefinitionPage from "../../components/DefinitionPage";
import axios from "axios";

export default function definitionFrontend({
  content,
  asideParents,
  asideChildrens,
}) {
  return (
    <Layout>
      <div>
        <DefinitionPage
          allContent={content}
          asideParents={asideParents}
          asideChildrens={asideChildrens}
          type="frontend"
        />
      </div>
    </Layout>
  );
}
export async function getStaticPaths() {
  const res = axios.get("http://aweb4devsapi.herokuapp.com/aside-techs/frontend");
  const techs = (await res).data.techs;

  const paths = techs.map((tech) => ({

    params: { techTitle: tech.title.split(" ").join("-") },
  }));
  console.log(paths);
  return {
    paths,
    fallback: true,
  };
}

//  This also gets called at build time
export async function getStaticProps({ params }) {
  // params contains the post `id`.
  // If the route is like /posts/1, then params.id is 1
  function unSlug(link){
    return link.split("-").join(" ")
  }

  const res = await Promise.all([
    axios.get(`https://aweb4devsapi.herokuapp.com/tech/${unSlug(params.techTitle)}`),
    axios.get(`https://aweb4devsapi.herokuapp.com/techs/frontend`),
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
  for (i = 0; i <= childrens.length - 1; i++) {
    while (parents[j].title != childrens[i].parent) {
      j++;
    }
    orderedChildrens[j].push(childrens[i]);
  }

  // Pass post data to the page via props
  return {
    props: {
      content: res[0].data.tech,
      asideParents: parents,
      asideChildrens: orderedChildrens,
    },
    // Re-generate the post at most once per second
    // if a request comes in
    revalidate: 1,
  };
}