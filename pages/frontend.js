import Layout from "../components/Layout";
import Concept from "../components/Concept";
import Accordion from "../components/Accordion";
import axios from "axios";

export async function getStaticProps() {
  
  const res = axios.get("http://aweb4devsapi.herokuapp.com/techs/frontend");
  var childrens = (await res).data.techs;

  var parents = [];
  var i = 0
  while (childrens[i].parent == "") {
    i++;
  }
  parents = childrens.splice(0, i);

  var orderedChildrens = []
  for (i = 0; i < parents.length; i++) {
    orderedChildrens[i] = [];
  }
  var j = 0;
  var band = true
  for (i = 0; i <= childrens.length - 1; i++) {
    band = true
      while (parents[j].title != childrens[i].parent && band) {
        j++;
        if(parents[j]== undefined){
          band=false
        }
      }
    
    
    orderedChildrens[j].push(childrens[i]);
  }
console.log(orderedChildrens)
  
  return {
    props: {
      orderedChildrens,
      parents,
    },
  };
}

function FrontEnd({orderedChildrens, parents}) {
  return (
    <Layout>
      <div>
        <Concept
          title="Front-end"
          description="The frontend of a website or software is everything with which the user interacts. From a developer, it is design and the programming that makes the interface works correctly."
        />
        <Accordion
          requestType="frontend"
          parents={parents}
          childrens={orderedChildrens}
        />
      </div>
    </Layout>
  );
}

export default FrontEnd;
