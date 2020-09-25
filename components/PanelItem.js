import styles from "./PanelItem.module.scss";
import Link from "next/link";
import React, {Component} from "react";

export default class PanelItem extends Component {

  slugSyntax(link){
    return link.split(" ").join("-")
  }

  componentDidMount(){
    
  }
  render() {
    var item;
    /*  if this item is the first item (Definition), it will have a different HTML structure (arrows)   */ 
    if (!this.props.isDefinition) {
      item = 
      <a className={styles.link}>
        <img className={styles.itemLogo} src={this.props.img}/>
        <div className={styles.titleTagContainer}>
    <h4 className={styles.itemTitle}>{this.props.title}</h4>
    <span className={styles.itemTag}>{this.props.tag}</span>
        </div>
      </a>
    
      
    } else {
     
    /* Standard structure for items in the panel */  
      item = 
      <a className={styles.linkDefinition}>
        <img className={styles.arrowDecoration} src="/icons/arrowLeft.svg"/>
    <h4 className={styles.itemTitle}>Definition</h4>
        <img className={styles.arrowDecoration} src="/icons/arrowRight.svg"/>
      </a>
    
    }
    return (
      <li className={styles.panelItem}>
        <div className={styles.bulletcontainer}>
          <img className={styles.bullet} src="/icons/bullet.svg"/>
        </div>
        <div className={styles.itemContent}>
        <Link href={"/"+this.props.type+"/"+this.slugSyntax(this.props.title)}>
          {item}
          </Link>
        </div>
      </li>
    );
  }
}
