import News from "../components/News";
import Layout from "../components/Layout";

function HomePage() {
  return (
    <Layout>
      <div>
        <News subtitle="Recent Articles of Web Development Technologies" order={0}/>
        <News subtitle="Most Visited Articles" order={1}/>
      </div>
    </Layout>
  );
}

export default HomePage;
