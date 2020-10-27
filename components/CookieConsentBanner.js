import styles from "./CookieConsentBanner.module.scss";
import React, { Component } from "react";

export default class CookieConsentBanner extends Component {
   
  render() {
    return (
        <div id={"container"} onClick={this.hideContainer} className={styles.mainContainer}>
            <span>We use third party cookies to improve our website. By tapping on a link, on the Accept button, or (otherwise) by continuing to browse , you agreeing to our and our partner's use of cookies and other technologies to process your personal data to personalise your experience and deliver tailored advertising to you. Tap <a id={"disable"} href="" onClick={this.props.stopCookies}>here to disable cookies</a></span>
            <button onClick={this.props.handleBanner}id={"button"}className={styles.button}>Accept</button>
        </div>
    )
  }
}
