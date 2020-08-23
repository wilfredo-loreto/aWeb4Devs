import Head from "next/head";
import Header from "./Header";
import Footer from "./Footer"
function Layout({ children }) {
  return (
    <div>
      <Head>
        <title>AWeb4Devs</title>
      </Head>
      <Header />
      <div> {children}</div>
      <Footer />
    </div>
  );
}

export default Layout;
