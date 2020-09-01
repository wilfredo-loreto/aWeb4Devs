import Layout from "../components/Layout";
import Concept from "../components/Concept"
import Accordion from "../components/Accordion"
function FrontEnd() {
  return (
    <Layout>
      <div>
        <Concept title="Back-end" description="The backend is the part of a computer system or application that is not directly accessed by the user, typically responsible for storing and manipulating  internal and external data."/>
        <Accordion />
      </div>
    </Layout>
  );
}

export default FrontEnd;