import styles from "./PanelItem.module.scss";
import Link from "next/link";
import React, {Component} from "react";

export default class PanelItem extends Component {
  render() {
    var item;
    /*  if this item is the first item (Definition), it will have a different HTML structure (arrows)   */ 
    if (this.props.isDefinition) {
      item = <Link href="/">
        <a className={styles.linkDefinition}>
          <img className={styles.arrowDecoration} src="/img/arrowLeft.svg"/>
          <h4 className={styles.itemTitle}>Definition</h4>
          <img className={styles.arrowDecoration} src="/img/arrowRight.svg"/>
        </a>
      </Link>
    } else {
     
    /* Standard structure for items in the panel */  
      item = <Link href="/">
        <a className={styles.link}>
          <img className={styles.itemLogo} src="/img/html.png"/>
          <div className={styles.titleTagContainer}>
            <h4 className={styles.itemTitle}>Descriptionss</h4>
            <span className={styles.itemTag}>Framework</span>
          </div>
        </a>
      </Link>
    }
    return (
      <li className={styles.panelItem}>
        <div className={styles.bulletcontainer}>
          <img className={styles.bullet} src="/img/bullet.svg"/>
        </div>
        <div className={styles.itemContent}>

          {item}

        </div>
      </li>
    );
  }
}
