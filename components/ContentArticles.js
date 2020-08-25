import styles from "./ContentArticles.module.scss";
import Link from "next/link";
import React, { Component } from "react";
import ArticleCard from "./ArticleCard"

export default class ContentArticles extends Component {
  render() {
    return (
      /* ContentCards  */
      <div className={styles.globalContainer}>
          <ArticleCard/>
      </div>
    );
  }
}
