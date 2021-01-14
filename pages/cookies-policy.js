import Layout from "../components/layout";
import CookiesPolicyContent from "../components/cookiespolicycontent";
function CookiesPolicy() {
  return (
    <Layout noIndexPage={true} pageTitle="AWeb4Devs - Cookies Policy" description="AWeb4Devs only uses third-party cookies for improving user experience in the website. In this page you will see all the information about cookies and how it works">
      <CookiesPolicyContent />
    </Layout>
  );
}

export default CookiesPolicy;
