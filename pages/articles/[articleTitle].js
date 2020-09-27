import Layout from "../../components/Layout";
import ArticlePage from "../../components/ArticlePage";


export default function article(){

    return(

        <Layout>
            <div>
                <ArticlePage/>
            </div>
        </Layout>
    )
}

export async function getStaticPaths() {
    const res = axios.get("http://aweb4devsapi.herokuapp.com/articles");
    const articles = (await res).data.articles;
  
    const paths = articles.map((article) => ({
      params: { articleTitle: article.title },
    }));
    return {
      paths,
      fallback: true,
    };
  }
  
  export async function getStaticProps({ params }) {
 
    
    const res = await Promise.all([
      axios.get(
        `https://aweb4devsapi.herokuapp.com/api/tech/${params.articleTitle}`
      ),
      axios.get(`https://aweb4devsapi.herokuapp.com/api/aside/backend`),
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
    return {
      props: {
        content: res[0].data.tech,
        asideParents: parents,
        asideChildrens: orderedChildrens,
      },
      revalidate: 1,
    };
  }
  
