import Layout from "../components/Layout";
import Concept from "../components/Concept";
import Accordion from "../components/Accordion";
import axios from "axios";

export async function getStaticProps() {
  const res = axios.get("http://aweb4devsapi.herokuapp.com/techs/backend");
  var childrens = (await res).data.techs;

  var parents = [];
  var i = 0;
  while (childrens[i].parent == "") {
    i++;
  }
  parents = childrens.splice(0, i);

  var orderedChildrens = [];
  for (i = 0; i < parents.length; i++) {
    orderedChildrens[i] = [];
  }
  var j = 0;
  var band = true;
  for (i = 0; i <= childrens.length - 1; i++) {
    band = true;
    while (parents[j].title != childrens[i].parent && band) {
      j++;
      if (parents[j] == undefined) {
        band = false;
      }
    }

    orderedChildrens[j].push(childrens[i]);
  }

  return {
    props: {
      orderedChildrens,
      parents,
    },
  };
}

function BackEnd({ orderedChildrens, parents }) {
  return (
    <Layout pageTitle="AWeb4Devs - Backend Technologies">
      <div>
        <Concept
          title="Back-end"
          description="The backend is the part of a computer system or application that is not directly accessed by the user, typically responsible for storing and manipulating  internal and external data."
        />
        <Accordion
          type="back-end"
          requestType="backend"
          parents={parents}
          childrens={orderedChildrens}
        />
      </div>
    </Layout>
  );
}

export default BackEnd;
