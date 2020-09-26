import News from "../components/News";
import Layout from "../components/Layout";
import Carousel from "../components/Carousel"
import axios from "axios"

export async function getStaticProps() {
  // params contains the post `id`.
  // If the route is like /posts/1, then params.id is 1
  function unSlug(link){
    return link.split("-").join(" ")
  }

  var res = await Promise.all([
    axios.get(`https://aweb4devsapi.herokuapp.com/api/homepage/news/3articles`),
    axios.get(`https://aweb4devsapi.herokuapp.com/api/homepage/news/2techs`),
    axios.get(`https://aweb4devsapi.herokuapp.com/api/homepage/carousel/`),
    axios.get(`https://aweb4devsapi.herokuapp.com/api/homepage/news/most-visited-articles`),
  ]);

  var i=0
  while (res[2].data.techs[i].type=="frontend"){
    i++
  }
  var frontendTechs = res[2].data.techs.splice(0,i)
  return {
    props: {
      articlesNews:res[0].data.articles,
      techsNews:res[1].data.techs,
      mostVisited:res[3].data.articles,
      frontendCarousel:frontendTechs,
      backendCarousel:res[2].data.techs
    },
    // Re-generate the post at most once per second
    // if a request comes in
    revalidate: 1,
  };
}


function HomePage({articlesNews,techsNews,mostVisited,frontendCarousel,backendCarousel}) {
 
  return (
    <Layout>
      
      <div>
        <News recentArticles={articlesNews} recentTechs={techsNews} subtitle="Recent Articles of Web Development Technologies" order={1}/>
        <Carousel
        subtitle = "Frontend Technologies"
        aux = {true} 
        carouselContent = {frontendCarousel}
        />
        <News subtitle="Most Visited Articles" order={0} mostVisiteds={mostVisited}/>
         <Carousel
        subtitle = "Backend Technologies"
        aux = {false}
        carouselContent={backendCarousel} 
        />
     
      </div>
    </Layout>
  );
}

export default HomePage;
