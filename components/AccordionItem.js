import styles from "./accordionItem.module.scss";
import React, { Component } from "react";
import PanelItem from "./panelitem";

export default class AccordionItem extends Component {
  render() {
    return (
      // accordion item and panel
      <React.Fragment>
        <div
          id={this.props.accordionId}
          className={
            this.props.title != "html"
              ? styles.accordionItem
              : [styles.accordionItem, styles.orderNegative2].join(" ")
          }
        >
          <img
            className={styles.logo}
            src={"/img/" + this.props.logo}
            alt={this.props.title + " logo"}
          />
          <div className={styles.textsContainer}>
            <h3 className={styles.title}>{this.props.title}</h3>
            <p className={styles.summary}>{this.props.summary}</p>
          </div>
          <img
            className={styles.logo}
            src={"/img/" + this.props.logo}
            alt={this.props.title + " logo"}
          />
        </div>
        <div
          id={this.props.panelId}
          className={
            this.props.title != "html"
              ? styles.panel
              : [styles.panel, styles.orderNegative1].join(" ")
          }
        >
          <ul className={styles.list}>
            <PanelItem
              type={this.props.type}
              isDefinition={true}
              title={this.props.title}
            />
            {/* Dynamic insert of panel items. Need Logo, title and TAG */}
            {this.props.childrens.map((child, cont) => (
              <PanelItem
                type={this.props.type}
                img={child.logo}
                title={child.title}
                tag={child.tags[0]}
                key={cont}
              />
            ))}
          </ul>
        </div>
      </React.Fragment>
    );
  }
}
