import News from "../components/news";
import Layout from "../components/layout";
import Carousel from "../components/carousel";
import axios from "axios";

export async function getStaticProps() {
 

  var res = await Promise.all([
    axios.get(`https://aweb4devsapi.herokuapp.com/homepage/news/3articles`),
    axios.get(`https://aweb4devsapi.herokuapp.com/homepage/news/2techs`),
    axios.get(`https://aweb4devsapi.herokuapp.com/homepage/carousel/`),
    axios.get(`https://aweb4devsapi.herokuapp.com/homepage/news/most-visited-articles`),
  ]);

  var i = 0;
  while (res[2].data.techs[i].type == "frontend") {
    i++;
  }
  var frontendTechs = res[2].data.techs.splice(0, i);
  return {
    props: {
      articlesNews: res[0].data.articles,
      techsNews: res[1].data.techs,
      mostVisited: res[3].data.articles,
      frontendCarousel: frontendTechs,
      backendCarousel: res[2].data.techs,
    },
    
    revalidate: 86400,
  };
}

function HomePage({
  articlesNews,
  techsNews,
  mostVisited,
  frontendCarousel,
  backendCarousel,
}) {
  return (
    <Layout pageTitle="AWeb4Devs - Articles and technologies about web development" description="An informative page about the most recents technologies, web development and interesting articles for juniors, seniors and experimented developers">
      <div>
        <News
          type="recents"
          recentArticles={articlesNews}
          recentTechs={techsNews}
          subtitle="Recent Articles of Web Development Technologies"
          order={1}
        />
        <Carousel
          subtitle="Frontend Technologies"
          aux={true}
          carouselContent={frontendCarousel}
        />
        <News
          type="visiteds"
          subtitle="Most Visited Articles"
          order={0}
          mostVisiteds={mostVisited}
        />
        <Carousel
          subtitle="Backend Technologies"
          aux={false}
          carouselContent={backendCarousel}
        />
      </div>
    </Layout>
  );
}

export default HomePage;
