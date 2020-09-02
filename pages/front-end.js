import Layout from "../components/Layout";
import Concept from "../components/Concept"
import Accordion from "../components/Accordion"
function FrontEnd() {
  return (
    <Layout>
      <div>
        <Concept title="Front-end" description="The frontend of a website or software is everything with which the user interacts. From a developer, it is design and the programming that makes the interface works correctly."/>
        <Accordion />
      </div>
    </Layout>
  );
}

export default FrontEnd;