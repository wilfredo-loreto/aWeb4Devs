import styles from "./Accordion.module.scss";
import Link from "next/link";
import React, { Component } from "react";

export default class Accordion extends Component {
  constructor(props) {
    super(props);
    this.setState = {};
  }

  componentDidMount() {
    var acc = []
    for (var i = 0; i <= 2; i++) {
      acc[i] = document.getElementById("accordionItem" + i);
      acc[i].addEventListener("click", function () {
       
        var panel = this.nextElementSibling;
        closeOpenPanel(acc,panel);
        this.classList.toggle(styles.active)
        panel.classList.toggle(styles.panelHidden)
      });
    }

    function closeOpenPanel(accordion,actualPanel) {
      
      var i = 0;
      while (i <= 2) {
        var panel = accordion[i].nextElementSibling;
        console.log(actualPanel.id)
        if (panel.id != actualPanel.id) {
          panel.classList.add(styles.panelHidden);
          accordion[i].classList.remove(styles.active)
        }

        i++;
      }

    }
  }

  render() {
    return (
      <div className={styles.mainContainer}>
        <div id={"accordionItem0"} className={styles.accordionItem}>
          <img className={styles.logo} src="/img/html.png" />
          <div className={styles.textsContainer}>
            <h3 className={styles.title}>HTML</h3>
            <span className={styles.summary}>
              Defines the structure of the websites
            </span>
          </div>
          <img className={styles.logo} src="/img/html.png" />
        </div>
        <div id={"panel0"} className={[styles.panel,styles.panelHidden].join(' ')}>
          <ul className={styles.list}>
            <li className={styles.panelItem}>
              <div className={styles.bulletcontainer}>
                <img className={styles.bullet} src="/img/bullet.svg" />
              </div>
              <div className={styles.itemContent}>
                <img
                  className={styles.arrowDecoration}
                  src="/img/arrowLeft.svg"
                />
                <h4 className={styles.itemTitle}>Definition</h4>
                <img
                  className={styles.arrowDecoration}
                  src="/img/arrowRight.svg"
                />
              </div>
            </li>
            <li className={styles.panelItem}>
              <div className={styles.bulletcontainer}>
                <img className={styles.bullet} src="/img/bullet.svg" />
              </div>
              <div className={styles.itemContent}>
                <img className={styles.itemLogo} src="/img/html.png" />
                <div className={styles.titleTagContainer}>
                  <h4 className={styles.itemTitle}>Descriptionss</h4>
                  <span className={styles.itemTag}>Framework</span>
                </div>
              </div>
            </li>
            <li className={styles.panelItem}>
              <div className={styles.bulletcontainer}>
                <img className={styles.bullet} src="/img/bullet.svg" />
              </div>
              <div className={styles.itemContent}>
                <img className={styles.itemLogo} src="/img/html.png" />
                <div className={styles.titleTagContainer}>
                  <h4 className={styles.itemTitle}>Descriptionss</h4>
                  <span className={styles.itemTag}>Framework</span>
                </div>
              </div>
            </li>
            <li className={styles.panelItem}>
              <div className={styles.bulletcontainer}>
                <img className={styles.bullet} src="/img/bullet.svg" />
              </div>
              <div className={styles.itemContent}>
                <img className={styles.itemLogo} src="/img/html.png" />
                <div className={styles.titleTagContainer}>
                  <h4 className={styles.itemTitle}>Descriptionss</h4>
                  <span className={styles.itemTag}>Framework</span>
                </div>
              </div>
            </li>
            <li className={styles.panelItem}>
              <div className={styles.bulletcontainer}>
                <img className={styles.bullet} src="/img/bullet.svg" />
              </div>
              <div className={styles.itemContent}>
                <img className={styles.itemLogo} src="/img/html.png" />
                <div className={styles.titleTagContainer}>
                  <h4 className={styles.itemTitle}>Descriptionss</h4>
                  <span className={styles.itemTag}>Framework</span>
                </div>
              </div>
            </li>
          </ul>
        </div>
        <div id={"accordionItem1"} className={styles.accordionItem}>
          Section 2
        </div>
        <div id={"panel1"} className={[styles.panel,styles.panelHidden].join(' ')}>
          <p>Lorem ipsum...</p>
        </div>
        <div id={"accordionItem2"} className={styles.accordionItem}>
          Section 3
        </div>
        <div id={"panel2"} className={[styles.panel,styles.panelHidden].join(' ')}>
          <p>Lorem ipsum...</p>
        </div>
      </div>
    );
  }
}
