import styles from "./contentarticles.module.scss";
import React, { Component } from "react";
import ArticleCard from "./articlecard";

import Pagination from "./pagination";

class ContentArticles extends Component {
  constructor(props) {
    super(props);
    this.state = {
      articles: this.props.articles,
      pageOfItems: [],
      optionSelected: "Most recents",
    };

    this.onChangePage = this.onChangePage.bind(this);
  }

  onChangePage(pageOfItems) {
    // update state with new page of items
    this.setState({ pageOfItems: pageOfItems });
  }

  render() {
    return (
      /* ContentCards  */
      <div className={styles.globalContainer}>
        {/* Order select */}

        {/* Article cards container */}
        <div className={styles.articlesContainer}>
          {this.state.pageOfItems.map((article, count) => (
            <ArticleCard key={count} data={article} />
          ))}
        </div>
        <Pagination
          items={this.state.articles}
          onChangePage={this.onChangePage}
        />
      </div>
    );
  }
}

export default ContentArticles;
