import styles from "./Accordion.module.scss";
import Link from "next/link";
import React, { Component } from "react";
import AccordionItem from "./AccordionItem";
import Axios from "axios";

export default class Accordion extends Component {
  constructor(props) {
    super(props);

    this.state = {
      accordions: [],
    };
  }

  componentDidMount() {
    Axios.get("https://aweb4devsapi.herokuapp.com/api/techs/accordion/frontend")
      .then((result) => {
        this.setState({
          accordions: result.data.techs,
        });
        var acc = [];
    for (var i = 0; i <= this.state.accordions.length - 1; i++) {
      acc[i] = document.getElementById("accordionItem" + i);
      acc[i].addEventListener("click", function () {
        var panel = this.nextElementSibling;
        closeOpenPanel(acc, panel);
        this.classList.toggle(styles.active);
        if (panel.style.maxHeight == 0 || panel.style.maxHeight == 0 + "px") {
          panel.style.maxHeight = panel.scrollHeight + "px";
        } else {
          panel.style.maxHeight = null;
        }
      });
    }
    function closeOpenPanel(accordion, actualPanel) {
      var i = 0;
      while (i <= accordion.length - 1) {
        var panel = accordion[i].nextElementSibling;
        if (panel.id != actualPanel.id) {
          panel.style.maxHeight = 0;
          accordion[i].classList.remove(styles.active);
        }

        i++;
      }
    }
        
      })
      .catch((err) => {
        console.log(err);
      });
    /* Setting the event "Toggle Panel" to all the accordion components.*/
    
    /* Closes the opened accordion and removes the "active" class when clicking in another one */
    function closeOpenPanel(accordion, actualPanel) {
      var i = 0;
      while (i <= accordion.length - 1) {
        var panel = accordion[i].nextElementSibling;
        if (panel.id != actualPanel.id) {
          panel.style.maxHeight = 0;
          accordion[i].classList.remove(styles.active);
        }

        i++;
      }
    }
  }

  render() {
    const accordions = this.state.accordions;
    console.log(accordions);
    return (
      /* main container which have all the accordion items */
      <div className={styles.mainContainer}>
        {/* Dynamic insert of accordion items*/}
        {accordions.map((accordion,cont) => (
          <AccordionItem
            title={accordion.title}
            summary={accordion.summary}
            logo={accordion.logo}
            accordionId={"accordionItem" + cont}
            panelId={"panel" + cont}
          />
        ))}
      </div>
    );
  }
}
