import Head from "next/head";
import Header from "./Header";
import Footer from "./Footer"
import CookieConsentBanner from "./CookieConsentBanner";
function Layout({ children }) {
  return (
    <div>
      <Head>
        <title>AWeb4Devs</title>
        <link rel="icon" type="image/png" href="/img/favicon.png"/>
      </Head>
      <Header />
      <div> {children}</div>
      <CookieConsentBanner/>
      <Footer />
    </div>
  );
}

export default Layout;
