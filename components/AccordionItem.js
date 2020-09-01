import styles from "./AccordionItem.module.scss";
import Link from "next/link";
import React, {Component} from "react";
import PanelItem from "./PanelItem"


export default class AccordionItem extends Component {

  render() {
    return (
      <React.Fragment>

        <div id={this.props.accordionId} className={styles.accordionItem}>
          <img className={styles.logo} src="/img/html.png"/>
          <div className={styles.textsContainer}>
            <h3 className={styles.title}>HTML</h3>
            <span className={styles.summary}>
              Defines the structure of the websites
            </span>
          </div>
          <img className={styles.logo} src="/img/html.png"/>
        </div>
        <div
          id={this.props.panelId}
          className={styles.panel}>
          <ul className={styles.list}>
            <PanelItem isDefinition={true}/>
            <PanelItem isDefinition={false}/>
            <PanelItem isDefinition={false}/>
            <PanelItem isDefinition={false}/>
          </ul>
        </div>
      </React.Fragment>
    );

  }
}