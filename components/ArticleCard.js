import styles from "./ArticleCard.module.scss";
import Link from "next/link";
import React, { Component } from "react";

export default class ArticleCard extends Component {

  shortDate(){
    var date = this.props.data.date.split("T")[0];
    return date
  }

  slugSyntax(link){
    return link.split(" ").join("-")
  }

  render() {
    var data = this.props.data
    var date = this.shortDate()
    var link = this.slugSyntax(data.title);
    return (
      /* Article Card  */
      <div title={data.summary} className={styles.globalContainer}>
        <Link href={"/articles/" + link }>
          <a>
            {/*Main image*/}
            <div className={styles.contentImage}>
            <img
              className={styles.imageArticle}
              src={data.img}
              alt=""
            />
            </div>
            <div className={styles.infoContainer}>
              {/* title */}
              <h3 className={styles.title}>{data.title} </h3>
              {/* Resume */}
              <p className={styles.info}>
              {data.summary}
              </p>
              {/* Date and vitists */}
              <div className={styles.dataContainer}>
                <span className={styles.date}>{date}</span>
                <div>
                  <img className={styles.icon} src="/icons/visits.png" alt="" />
                  <span className={styles.visits}>{data.visits}</span>
                </div>
              </div>
            </div>
          </a>
        </Link>
      </div>
    );
  }
}
