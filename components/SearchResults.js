import styles from "./SearchResults.module.scss";
import ResultCard from "./ResultCard";
import Link from "next/link";
import React, { Component } from "react";

export default class SearchResults extends Component {
  render() {
    const articles = this.props.articles;
    const techs = this.props.techs;

    var aux = articles.length + techs.length;

    return (
      /* Results Page */
      <div className={styles.mainContainer}>
        <span className={styles.resultsFound}>{aux} results found</span>

        {/* Result List */}
        <div className={styles.container}>
          {articles.map((article, count) => (
            <ResultCard
              key={"article" + count}
              data={article}
              type="articles"
            />
          ))}

          {techs.map((tech, count) => (
            <ResultCard key={"tech" + count} data={tech} type={tech.type} />
          ))}
        </div>

        {/* Results no found */}
        {aux == 0 ? (
          <div className={styles.noResults}>
            <img src="/img/sad.png" alt="Sad face" />
            <span>
              Opss... <br /> No results found <br /> Try with another keywords
            </span>
          </div>
        ) : null}
      </div>
    );
  }
}
