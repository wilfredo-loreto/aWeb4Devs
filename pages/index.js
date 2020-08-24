import Layout from "../components/Layout";
import Carousel from "../components/Carousel"

function HomePage() {
  return (
    <Layout>
      <div>
        <Carousel
        subtitle = "Frontend Technologies"
        aux = {true} 
        />
         <Carousel
        subtitle = "Backend Technologies"
        aux = {false} 
        />
     
     
      </div>
    </Layout>
  );
}

export default HomePage;
