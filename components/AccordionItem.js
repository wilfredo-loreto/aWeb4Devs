import styles from "./AccordionItem.module.scss";
import React, { Component } from "react";
import PanelItem from "./PanelItem";
import axios from 'axios'

export default class AccordionItem extends Component {
  
  componentDidMount(){
   console.log(this.props.childrens);
  }
  render() {
    return (
      // accordion item and panel
      <React.Fragment>
        <div id={this.props.accordionId} className={styles.accordionItem}>
          <img className={styles.logo} src={this.props.logo} />
          <div className={styles.textsContainer}>
            <h3 className={styles.title}>{this.props.title}</h3>
            <span className={styles.summary}>{this.props.summary}</span>
          </div>
          <img className={styles.logo} src={this.props.logo} />
        </div>
        <div id={this.props.panelId} className={styles.panel}>
          <ul className={styles.list}>
            
            <PanelItem
              type={this.props.type}
              isDefinition={true}
              title={this.props.title}
            />
            {/* Dynamic insert of panel items. Need Logo, title and TAG */}
            {this.props.childrens.map((child,cont)=>(
              <PanelItem
              type={this.props.type}
              img={child.logo}
              title={child.title}
              tag={child.tags[0]}
              key={cont}
              />
            ))
              
            }
         
          </ul>
        </div>
      </React.Fragment>
    );
  }
}
