import styles from "./contactform.module.scss";
import Link from "next/link";
import React, { Component } from "react";

export default class ContactInfo extends Component {
  componentDidMount() {
    //Hidding the contact form from the footer
    var containerList = document.getElementsByTagName("ul")[0].parentNode;

    containerList.nextSibling.style.display = "none";
  }
  render() {
    return (
      // Form of the contact page
      <form className={styles.form}>
        <div className={styles.mainContainer}>
          <div className={styles.fieldsContainer}>
            <div className={styles.field}>
              <label className={styles.label}>Name</label>
              <input placeholder="Example" />
            </div>
            <div className={styles.field}>
              <label className={styles.label}>Email</label>
              <input placeholder="example@example.com" />
            </div>
          </div>
          <div className={styles.yourMessage}>
            <label className={styles.label}>Your Message</label>
            <textarea placeholder="I have a doubt about aweb4devs ..." />
            <div className={styles.adviceContainer}>
              <span>*</span>
              <span>
                {" "}
                By clicking below to send the message, you're agreeing to our{" "}
              </span>
              <Link href="/privacy-policy">
                <a className={styles.link}>privacy policy.</a>
              </Link>
            </div>
            <button className={styles.sendButton}> Send </button>
          </div>
        </div>
      </form>
    );
  }
}
