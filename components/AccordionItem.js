import styles from "./AccordionItem.module.scss";
import React, {Component} from "react";
import PanelItem from "./PanelItem"


export default class AccordionItem extends Component {

  render() {
    return (
    // accordion item and panel
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
            {/* Dynamic insert of panel items. Need Logo, title and TAG */}
            <PanelItem isDefinition={true}/>
            <PanelItem />
            <PanelItem />
            <PanelItem />
          </ul>
        </div>
      </React.Fragment>
    );

  }
}