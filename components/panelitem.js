import styles from "./panelitem.module.scss";
import Link from "next/link";
import React, { Component } from "react";

export default class PanelItem extends Component {
  slugSyntax(link) {
    return link.split(" ").join("-");
  }
  capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }
  componentDidMount() {}
  render() {
    var item;
    /*  if this item is the first item (Definition), it will have a different HTML structure (arrows)   */
    if (!this.props.isDefinition) {
      item = (
        <a className={styles.link}>
          <img
            className={styles.itemLogo}
            src={"/img/" + this.props.img}
            alt={this.props.title + " logo"}
          />
          <div className={styles.titleTagContainer}>
            <h4 className={styles.itemTitle}>{this.props.title}</h4>
            <span className={styles.itemTag}>
              {this.capitalizeFirstLetter(this.props.tag)}
            </span>
          </div>
        </a>
      );
    } else {
      /* Standard structure for items in the panel */
      item = (
        <a className={styles.linkDefinition}>
          <img
            className={styles.arrowDecoration}
            src="/icons/arrowLeft.svg"
            alt=""
          />
          <h4 className={styles.itemTitle}>Definition</h4>
          <img
            className={styles.arrowDecoration}
            src="/icons/arrowRight.svg"
            alt=""
          />
        </a>
      );
    }
    return (
      <li className={styles.panelItem}>
        <div className={styles.bulletcontainer}>
          <img className={styles.bullet} src="/icons/bullet.svg" alt="" />
        </div>
        <div className={styles.itemContent}>
          <Link
            href={
              "/" + this.props.type + "/" + this.slugSyntax(this.props.title)
            }
          >
            {item}
          </Link>
        </div>
      </li>
    );
  }
}
