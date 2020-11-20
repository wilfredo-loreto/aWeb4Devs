import styles from "./bigcard.module.scss";
import Link from "next/link";
import React, { Component} from "react";

export default class BigCard extends Component {
  slugSyntax(link) {
    return link.split(" ").join("-");
  }
  MouseOver(event) {
    event.target.style.background = `linear-gradient(180deg,rgba(68, 68, 68, 0.56) 99.98%,rgba(68, 68, 68, 0.5) 99.99%,rgba(255, 255, 255, 0) 100%),url(/img/${this.props.img})`;
  }
  MouseOut(event) {
    event.target.style.background = `url(/img/${this.props.img})`;
  }

  render() {
    const background = {
      background: `url(/img/${this.props.img})`,
    };

    return (
      <Link href={"/articles/" + this.slugSyntax(this.props.title)}>
        <div
          style={background}
          className={styles.bigimage}
          onMouseOver={this.MouseOver.bind(this)}
          onMouseOut={this.MouseOut.bind(this)}
        >
          {/* Hidden is the pop-up generated doing hover in the card only in desktop*/}
          <div className={styles.hidden}>
            <h3 className={styles.bigarticletitle}>{this.props.title}</h3>
            <span className={styles.summary}>{this.props.summary}</span>
          </div>
        </div>
      </Link>
    );
  }
}
