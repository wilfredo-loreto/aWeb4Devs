import styles from "./ResultCard.module.scss";
import Link from "next/link";
import React, { Component } from "react";

export default class ResultCard extends Component {
  slugSyntax(link) {
    return link.split(" ").join("-");
  }

  render() {
    var data = this.props.data;
    var type = this.props.type;
    var link = this.slugSyntax(data.title);

    return (
      /* Result Card */
      <div className={styles.mainContainer}>
        <div className={styles.circle}></div>
        <Link href={"/" + type + "/" + link}>
          <a>
            <div className={styles.container}>
              <div className={styles.titleContainer}>
                {/* Title */}
                <h3>{data.title}</h3>
                {/* Description */}
                <p>{data.summary}</p>
              </div>
              {/* Main tag */}
              <h4>{data.tags[0]}</h4>
            </div>
          </a>
        </Link>
      </div>
    );
  }
}
