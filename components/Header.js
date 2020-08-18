import styles from "./Header.module.scss";
import Link from "next/link";
import React, { Component } from "react";

export default class Header extends Component {

  // Animate function for drop menu 
  animationMenu() {
    var icono = document.getElementById("nav-icon3");
    var menu = document.getElementById("menu");

    icono.classList.toggle(styles.open);

    menu.classList.toggle(styles.openMenu);
  }
  render() {
    return (
      <div className={styles.mainContainer}>
        <div className={styles.header}>
          <Link href="/">
            <a className={styles.logoLink}>
              <img className={styles.logo} src="AWeb4Devs.png" alt="" />
            </a>
          </Link>
          <div className={styles.nav}>
            <Link href="/">
              <a>
                <div className={styles.ColContainer}>
                  <h3 className={styles.itemNav}>Articles</h3>
                  <div className={styles.activeBar}></div>
                </div>
              </a>
            </Link>
            <Link href="/">
              <a>
                <div className={styles.ColContainer}>
                  <h3 className={styles.itemNav}>Front-end</h3>
                  <div className={styles.activeBar}></div>
                </div>
              </a>
            </Link>
            <Link href="/">
              <a>
                <div className={styles.ColContainer}>
                  <h3 className={styles.itemNav}>Back-end</h3>
                  <div className={styles.activeBar}></div>
                </div>
              </a>
            </Link>
          </div>

          <div className={styles.searchBar}>
            <input type="text" placeholder="Search..." />
            <img className={styles.searchIcon} src="icons/search.png" alt="" />
          </div>

          <div className={styles.movilMenu}>
            <div
              className={styles.menuIcon}
              onClick={this.animationMenu}
              id="nav-icon3"
            >
              <span></span>
              <span></span>
              <span></span>
              <span></span>
            </div>
          </div>
        </div>

        <div className={styles.menu} id="menu">
          <div className={styles.nav}>
            <Link href="/">
              <a>
                <div className={styles.ColContainer}>
                  <h3 className={styles.itemNav}>Articles</h3>
                  <div className={styles.activeBar}></div>
                </div>
              </a>
            </Link>
            <Link href="/">
              <a>
                <div className={styles.ColContainer}>
                  <h3 className={styles.itemNav}>Front-end</h3>
                  <div className={styles.activeBar}></div>
                </div>
              </a>
            </Link>
            <Link href="/">
              <a>
                <div className={styles.ColContainer}>
                  <h3 className={styles.itemNav}>Back-end</h3>
                  <div className={styles.activeBar}></div>
                </div>
              </a>
            </Link>
          </div>
          <div className={styles.searchBar2}>
            <input type="text" placeholder="Search..." />
            <img className={styles.searchIcon} src="icons/search.png" alt="" />
          </div>
        </div>
      </div>
    );
  }
}
