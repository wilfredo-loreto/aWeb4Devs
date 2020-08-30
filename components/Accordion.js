import styles from "./Accordion.module.scss";
import Link from "next/link";
import React, { Component } from "react";

export default class Accordion extends Component {
  

  componentDidMount() {
    var acc = []
    for (var i = 0; i <= 0; i++) {
      acc[i] = document.getElementById("accordionItem" + i);
      acc[i].addEventListener("click", function () {
       
        var panel = this.nextElementSibling;
        closeOpenPanel(acc,panel);
        console.log(panel.id)
        console.log(panel.style.maxHeight)
        this.classList.toggle(styles.active)
        if (panel.style.maxHeight== 0 || panel.style.maxHeight == 0+"px"){
          panel.style.maxHeight = panel.scrollHeight + "px"
          console.log('im in if')
        }else{
          
          console.log('im in else')
          panel.style.maxHeight = null
        }
      });
    }

    function closeOpenPanel(accordion,actualPanel) {
      
      var i = 0;
      while (i <= 0) {
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
                <Link href="/">
                <a className={styles.link}>
                <img
                  className={styles.arrowDecoration}
                  src="/img/arrowLeft.svg"
                  />
                <h4 className={styles.itemTitle}>Definition</h4>
                <img
                  className={styles.arrowDecoration}
                  src="/img/arrowRight.svg"
                  />
                  </a>
                  </Link>
              </div>
                  
            </li>
            <li className={styles.panelItem}>
              <div className={styles.bulletcontainer}>
                <img className={styles.bullet} src="/img/bullet.svg" />
              </div>
              <div className={styles.itemContent}>
                <Link href="/">
                <a className={styles.link}>
                <img className={styles.itemLogo} src="/img/html.png" />
                <div className={styles.titleTagContainer}>
                  <h4 className={styles.itemTitle}>Descriptionss</h4>
                  <span className={styles.itemTag}>Framework</span>
                </div>
                </a>
                </Link>
              </div>
            </li>
            <li className={styles.panelItem}>
              <div className={styles.bulletcontainer}>
                <img className={styles.bullet} src="/img/bullet.svg" />
              </div>
              <div className={styles.itemContent}>
                <Link href="/">
                <a className={styles.link}>
                <img className={styles.itemLogo} src="/img/html.png" />
                <div className={styles.titleTagContainer}>
                  <h4 className={styles.itemTitle}>Descriptionss</h4>
                  <span className={styles.itemTag}>Framework</span>
                </div>
                </a>
                </Link>
              </div>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}
