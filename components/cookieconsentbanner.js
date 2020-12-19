import styles from "./cookieconsentbanner.module.scss";
import React, { Component } from "react";

export default class CookieConsentBanner extends Component {
  constructor(props) {
    super(props);
    this.state = { hideBanner: null };
  }
  hideBanner(e) {
    this.setState({ hideBanner: true });
  }
  render() {
    return (
      <div
        id={"container"}
        className={[
          styles.mainContainer,
          this.state.hideBanner ? styles.hide : null,
        ].join(" ")}
      >
        <span>
          We use third party cookies to improve our website. By tapping on a
          link, on the Accept button, or (otherwise) by continuing to browse ,
          you agreeing to our and our partner's use of cookies and other
          technologies to process your personal data to personalise your
          experience and deliver tailored advertising to you. Tap{" "}
          <a
            id={"disable"}
            onClick={(e) => {
              this.props.stopCookies(e);
              this.hideBanner(e);
            }}
          >
            here to disable cookies
          </a>
        </span>
        <button
          onClick={(e) => {
            this.props.allowCookies(e);
            this.hideBanner(e);
          }}
          id={"button"}
          className={styles.button}
        >
          Accept
        </button>
      </div>
    );
  }
}
