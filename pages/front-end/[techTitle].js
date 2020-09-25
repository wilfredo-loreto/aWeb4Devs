import Layout from "../../components/Layout";
import DefinitionPage from "../../components/DefinitionPage";
import axios from "axios"

export default function definitionFrontend({content}){

    return(

        <Layout>
            <div>
                <DefinitionPage allContent={content}/>
            </div>
        </Layout>
    )
}
export async function getStaticPaths() {

    const res = axios.get("http://aweb4devsapi.herokuapp.com/api/techs/frontend");
    const techs = (await res).data.techs;
  
    const paths = techs.map((tech)=>({
        params:{techTitle:tech.title}
    }))
    return {
      paths,
      fallback: true,
    }
  }

//  This also gets called at build time
export async function getStaticProps({ params }) {
  // params contains the post `id`.
  // If the route is like /posts/1, then params.id is 1
  const res = axios.get(`https://aweb4devsapi.herokuapp.com/api/tech/${params.techTitle}`);
  const content = (await res).data.tech;
  
  // Pass post data to the page via props
  return {
    props: {content},
    // Re-generate the post at most once per second
    // if a request comes in
    revalidate: 1,
  }
}
  