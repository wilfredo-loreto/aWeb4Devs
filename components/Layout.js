import Head from "next/head";
import Header from "./Header";
function Layout({ children }) {
  return (
    <div>
      <Head>
        <title>aWeb4Devs</title>
      </Head>
      <Header />
      <div>{children}</div>
    </div>
  );
}

export default Layout;
