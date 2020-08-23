import styles from "./CarouselCard.module.scss";
import Link from "next/link";
import React, { Component } from "react";

export default class CarouselCard extends Component {

  render(){
  return (
    /* Carousel Cards  */
    <div className={styles.globalContainer}>
      <Link href="/">
        <a className={styles.linkFather}>
          <div className={styles.carouselCard}>
            <img className={styles.image} src={this.props.image} alt="" />
          </div>
        </a>
      </Link>
    </div>
  );

  }
}
