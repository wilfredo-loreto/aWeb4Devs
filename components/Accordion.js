import styles from "./Accordion.module.scss";
import Link from "next/link";
import React, { Component } from "react";

export default class Accordion extends Component {
  componentDidMount() {
    var acc = [];
    for (var i = 1; i <= 3; i++) {
      acc[i] = document.getElementById("accordionItem" + i);
      acc[i].addEventListener("click", function () {
        this.classList.toggle("active");
        var panel = this.nextElementSibling;
        if (panel.style.maxHeight) {
          panel.style.maxHeight = null;
        } else {
          panel.style.maxHeight = panel.scrollHeight + "px";
        }
      });
    }
  }

  render() {
    return (
      <div className={styles.mainContainer}>
        <div id={"accordionItem1"} className={styles.accordionItem}>
          <img className={styles.logo}src="/img/html.png"/>
          <div className={styles.textsContainer}>
            <h3 className={styles.title}>HTML</h3>
            <span className={styles.summary}>Defines the structure of the websites</span>
          </div>
          <img className={styles.logo}src="/img/html.png"/>
        </div>
        <div id={"panel1"} className={styles.panel}>
          <ul className={styles.list}>
              <li className={styles.panelItem}>
                  <img className={styles.bullet}src="/img/bullet.svg"/>
                  <div className={styles.itemContent}>
                      <img className={styles.arrowDecoration}src="/img/html.png"/>
                      <h4 className={styles.itemTitle}>Definition</h4>
                      <img className={styles.arrowDecoration}src="/img/html.png"/>
                  </div>
              </li>
              <li className={styles.panelItem}>
                  <img className={styles.bullet}src="/img/bullet.svg"/>
                  <div className={styles.itemContent}>
                      <img className={styles.itemLogo}src="/img/html.png"/>
                      <h4 className={styles.itemTitle}>Elements</h4>
                      <span className={styles.itemTag}>Content</span>
                  </div>
              </li>
              <li className={styles.panelItem}>
                  <img className={styles.bullet}src="/img/bullet.svg"/>
                  <div className={styles.itemContent}>
                      <img className={styles.itemLogo}src="/img/html.png"/>
                      <h4 className={styles.itemTitle}>Elements</h4>
                      <span className={styles.itemTag}>Content</span>
                  </div>
              </li>
              <li className={styles.panelItem}>
                  <img className={styles.bullet}src="/img/bullet.svg"/>
                  <div className={styles.itemContent}>
                      <img className={styles.itemLogo}src="/img/html.png"/>
                      <h4 className={styles.itemTitle}>Elements</h4>
                      <span className={styles.itemTag}>Content</span>
                  </div>
              </li>
              <li className={styles.panelItem}>
                  <img className={styles.bullet}src="/img/bullet.svg"/>
                  <div className={styles.itemContent}>
                      <img className={styles.itemLogo}src="/img/html.png"/>
                      <h4 className={styles.itemTitle}>Elements</h4>
                      <span className={styles.itemTag}>Content</span>
                  </div>
              </li>
              <li className={styles.panelItem}>
                  <img className={styles.bullet}src="/img/bullet.svg"/>
                  <div className={styles.itemContent}>
                      <img className={styles.itemLogo}src="/img/html.png"/>
                      <h4 className={styles.itemTitle}>Elements</h4>
                      <span className={styles.itemTag}>Content</span>
                  </div>
              </li>
          </ul>
        </div>
        <div id={"accordionItem2"} className={styles.accordionItem}>
          Section 2
        </div>
        <div id={"panel2"} className={styles.panel}>
          <p>Lorem ipsum...</p>
        </div>
        <div id={"accordionItem3"} className={styles.accordionItem}>
          Section 3
        </div>
        <div id={"panel3"} className={styles.panel}>
          <p>Lorem ipsum...</p>
        </div>
      </div>
    );
  }
}
