import styles from "./ArticleCard.module.scss";
import Link from "next/link";
import React, { Component } from "react";

export default class ArticleCard extends Component {
  render() {
    return (
      /* Article Card  */
      <div className={styles.globalContainer}>
        <Link href="/">
          <a>
            {/*Main image*/}
            <img
              className={styles.imageArticle}
              src="/images/desarrollo.png"
              alt=""
            />
            <div className={styles.infoContainer}>
              {/* title */}
              <h3 className={styles.title}>Top 5 Javascript tips </h3>
              {/* Resume */}
              <p className={styles.info}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
              </p>
              {/* Date and vitists */}
              <div className={styles.dataContainer}>
                <span className={styles.date}>26/06/20</span>
                <div>
                  <img className={styles.icon} src="/icons/visits.png" alt="" />
                  <span className={styles.visits}>48</span>
                </div>
              </div>
            </div>
          </a>
        </Link>
      </div>
    );
  }
}
