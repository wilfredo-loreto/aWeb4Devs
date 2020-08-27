import styles from './Concept.module.scss'

import React, { Component } from "react";

export default class Concept extends Component {
  render(){
  return (
    /* Carousel Cards  */
    <div className={styles.mainContainer}>
        <h1 className={styles.title}>{this.props.title}</h1>
        <br/>
        <p className={styles.text}>{this.props.description}</p>
        <br/>
        <p className={styles.text}>In the next sections you will find the most used technologies for {this.props.title} web development</p>
    </div>
  );

  }
}