import Layout from "../../components/Layout";
import SearchResults from "../../components/SearchResults";
import axios from 'axios';
import {useRouter} from 'next/router'

export default function results({postsArticles, postsTechs}){
    const router = useRouter()
    const {keyWord} = router.query
    console.log(postsArticles)

    return(
        <Layout>
            <div>
                <SearchResults
                articles = {postsArticles.articles}
                techs = {postsTechs.techs}
                
                />
            </div>
        </Layout>
    )

}

export async function getServerSideProps(ctx){

  const res = await Promise.all([
    axios.get('http://aweb4devsapi.herokuapp.com/search-articles/'+ ctx.query.keyWord),
    axios.get('http://aweb4devsapi.herokuapp.com/search-techs/'+ ctx.query.keyWord)

  ]); 

  const postsArticles = (await res[0]).data
  const postsTechs = (await res[1]).data

  return {
    props: {
      postsArticles,
      postsTechs
    },
  }


}