import News from "../components/News";
import Layout from "../components/Layout";
import Carousel from "../components/Carousel"

function HomePage() {
  return (
    <Layout>
      <div>
        <News subtitle="Recent Articles of Web Development Technologies" order={0}/>
        <Carousel
        subtitle = "Frontend Technologies"
        />
        <News subtitle="Most Visited Articles" order={1}/>
        <Carousel
        subtitle = "Backend Technologies"
        />
      </div>
    </Layout>
  );
}

export default HomePage;
