import styles from "./contactinfo.module.scss";
import Link from "next/link";
import React, { Component } from "react";

export default class ContactInfo extends Component {
  render() {
    return (
      // Title, Logos and links for each developer
      <React.Fragment>
        <h4 className={styles.title}>Contact us</h4>
        <div className={styles.mainContainer}>
          <div className={styles.colContainer}>
            <span className={styles.subtitle}>Get in Touch</span>
            <div className={styles.rrssContainer}>
              <a className={styles.emailWhatsapp} href="">
                <img src="/icons/whatsapp.svg" alt="whatsapp logo" />
                <span className={styles.hiddenMobile}>+58 4244320635</span>
              </a>
            </div>
            <div className={styles.rrssContainer}>
              <a className={styles.emailWhatsapp} href="">
                <img src="/icons/email.svg" alt="email logo" />
                <span className={styles.hiddenMobile}>
                  support@<span className={styles.break}> </span>aweb4devs.com
                </span>
              </a>
            </div>
          </div>
          <div className={styles.colContainer}>
            <span className={styles.subtitle}>Follow us</span>
            <div className={styles.rrssContainer}>
              <a
                href="https://www.linkedin.com/in/wilfredo-alexander-loreto-irady-3600291ab/"
                target="_blank"
              >
                <img src="/icons/linkedin.svg" alt="linkedin logo" />
              </a>
              <a href="https://github.com/dragonpipe/" target="_blank">
                <img src="/icons/github.svg" alt="github logo" />
              </a>
              <span>Wilfredo Loreto</span>
            </div>
            <div className={styles.rrssContainer}>
              <a
                href="https://www.linkedin.com/in/anderson-arciniegas-728b2b1b3/"
                target="_blank"
              >
                <img src="/icons/linkedin.svg" alt="linkedin logo" />
              </a>
              <a href="https://github.com/anderDarkStorm" target="_blank">
                <img src="/icons/github.svg" alt="github logo" />
              </a>
              <span>Anderson Arciniegas</span>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}
