import Layout from "../components/Layout";
import Carousel from "../components/Carousel"

function HomePage() {
  return (
    <Layout>
      <div>
        <Carousel
        subtitle = "Frontend Technologies"
        />
      </div>
    </Layout>
  );
}

export default HomePage;
