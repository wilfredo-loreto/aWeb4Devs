import styles from "./News.module.scss";
import SmallCard from "./smallcard";
import BigCard from "./BigCard";
import React, { Component } from "react";
export default class News extends Component {
  render() {
    if (this.props.type == "recents") {
      var bigCard = {
        img: this.props.recentArticles[0].img,
        title: this.props.recentArticles[0].title,
        summary: this.props.recentArticles[0].summary,
      };
      var smallCards1 = [
        {
          img: this.props.recentArticles[1].img,
          title: this.props.recentArticles[1].title,
        },
        {
          img: this.props.recentArticles[2].img,
          title: this.props.recentArticles[2].title,
        },
      ];
      var smallCards2 = [
        {
          img: this.props.recentTechs[0].img,
          title: this.props.recentTechs[0].title,
          type: this.props.recentTechs[0].type,
        },
        {
          img: this.props.recentTechs[1].img,
          title: this.props.recentTechs[1].title,
          type: this.props.recentTechs[1].type,
        },
      ];
    } else if (this.props.type == "visiteds") {
      var bigCard = {
        img: this.props.mostVisiteds[0].img,
        title: this.props.mostVisiteds[0].title,
        summary: this.props.mostVisiteds[0].summary,
      };
      var smallCards1 = [
        {
          img: this.props.mostVisiteds[1].img,
          title: this.props.mostVisiteds[1].title,
        },
        {
          img: this.props.mostVisiteds[2].img,
          title: this.props.mostVisiteds[2].title,
        },
      ];
      var smallCards2 = [
        {
          img: this.props.mostVisiteds[3].img,
          title: this.props.mostVisiteds[3].title,
        },
        {
          img: this.props.mostVisiteds[4].img,
          title: this.props.mostVisiteds[4].title,
        },
      ];
    }

    return (
      <section
        className={[
          styles.maincontainer,
          this.props.order ? styles.lessPadding : styles.nothing,
        ].join(" ")}
      >
        <div>
          <h1 className={styles.title}>{this.props.subtitle}</h1>
        </div>
        {/* rowcontainer is a row flexbox with all the card containers */}
        <div className={styles.rowcontainer}>
          <div
            className={[
              styles.colcontainer,
              this.props.order ? styles.order1 : styles.order0,
            ].join(" ")}
          >
            <SmallCard img={smallCards1[1].img} title={smallCards1[1].title} />
            <SmallCard img={smallCards1[0].img} title={smallCards1[0].title} />
          </div>
          <div className={styles.container50width}>
            <BigCard
              img={bigCard.img}
              title={bigCard.title}
              summary={bigCard.summary}
            />
          </div>
          <div className={styles.colcontainer}>
            <SmallCard
              type={smallCards2[0].type}
              img={smallCards2[0].img}
              title={smallCards2[0].title}
            />
            <SmallCard
              type={smallCards2[1].type}
              img={smallCards2[1].img}
              title={smallCards2[1].title}
            />
          </div>
        </div>
      </section>
    );
  }
}
