import News from "../components/News";
import Layout from "../components/Layout";
import Carousel from "../components/Carousel"

function HomePage() {
  return (
    <Layout>
      <div>
        <News subtitle="Recent Articles of Web Development Technologies" order={1}/>
        <Carousel
        subtitle = "Frontend Technologies"
        aux = {true} 
        />
        <News subtitle="Most Visited Articles" order={0}/>
         <Carousel
        subtitle = "Backend Technologies"
        aux = {false} 
        />
     
      </div>
    </Layout>
  );
}

export default HomePage;
