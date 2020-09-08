import styles from "./Accordion.module.scss";
import Link from "next/link";
import React, { Component } from "react";
import AccordionItem from "./AccordionItem";

export default class Accordion extends Component {
  

  componentDidMount() {

    /* Setting the event "Toggle Panel" to all the accordion components.*/
    var acc = []
    for (var i = 0; i <= 3; i++) {
      acc[i] = document.getElementById("accordionItem" + i);
      acc[i].addEventListener("click", function () {
       
        var panel = this.nextElementSibling;
        closeOpenPanel(acc,panel);
        this.classList.toggle(styles.active)
        if (panel.style.maxHeight== 0 || panel.style.maxHeight == 0+"px"){
          panel.style.maxHeight = panel.scrollHeight + "px"
        }else{
          panel.style.maxHeight = null
        }
      });
    }
     /* Closes the opened accordion and removes the "active" class when clicking in another one */
    function closeOpenPanel(accordion,actualPanel) {
      
      var i = 0;
      while (i <= accordion.length - 1) {
        var panel = accordion[i].nextElementSibling;
        if (panel.id != actualPanel.id) {
          panel.style.maxHeight= 0
          accordion[i].classList.remove(styles.active)
        }

        i++;
      }

    }
  }

  render() {
    return (
      /* main container which have all the accordion items */
      <div className={styles.mainContainer}>
        {/* Dynamic insert of accordion items*/}
        <AccordionItem  accordionId="accordionItem0" panelId="panel0"/>
        <AccordionItem  accordionId="accordionItem1" panelId="panel1"/>
        <AccordionItem  accordionId="accordionItem2" panelId="panel2"/>
        <AccordionItem  accordionId="accordionItem3" panelId="panel3"/>
      </div>
    );
  }
}
