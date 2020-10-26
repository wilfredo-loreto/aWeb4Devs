import styles from "./CarouselCard.module.scss";
import Link from "next/link";
import React, { Component } from "react";

export default class CarouselCard extends Component {

  slugSyntax(link){
    return link.split(" ").join("-")
  }

  render(){
    var link = this.slugSyntax(this.props.title)
  return (
    /* Carousel Cards  */
    <div className={styles.globalContainer}>
      <Link href={"/"+ this.props.type + "/"+link}>
        <a className={styles.linkFather}>
          <div className={styles.carouselCard}>
            <img className={styles.image} src={"/img/"+this.props.image} alt="" />
          </div>
        </a>
      </Link>
    </div>
  );

  }
}
