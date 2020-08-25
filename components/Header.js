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
  // Animate active function for nevegation menu 
  activeLink(x) {
    
    var active1 = document.getElementById("active1");
    var active2 = document.getElementById("active2");
    var active3 = document.getElementById("active3");
    
    switch(x){

      case 1:
        active1.classList.toggle(styles.activeNav);
        active2.classList.remove(styles.activeNav);
        active3.classList.remove(styles.activeNav);
      break;
      case 2:
        active2.classList.toggle(styles.activeNav);
        active1.classList.remove(styles.activeNav);
        active3.classList.remove(styles.activeNav);
      break;
      case 3:
        active3.classList.toggle(styles.activeNav);
        active2.classList.remove(styles.activeNav);
        active1.classList.remove(styles.activeNav);
      break;

    }

  }
  render() {
    return (
      <div className={styles.mainContainer}>
      {/* Header: Main logo, nav, search bar, burguer icon menu */}
        <div className={styles.auxDiv}></div>
        <div className={styles.header}>
          <Link href="/">
            <a className={styles.logoLink} >
              <img className={styles.logo} src="AWeb4Devs.png" alt="" />
            </a>
          </Link>
          <div className={styles.nav}>
            <Link href="/">
              <a>
                <div onClick={() => this.activeLink(1)} className={styles.ColContainer}>
                  <h3 className={styles.itemNav}>Articles</h3>
                  <div id="active1" className={styles.activeBar}></div>
                </div>
              </a>
            </Link>
            <Link href="/">
              <a >
                <div onClick={() => this.activeLink(2)} className={styles.ColContainer}>
                  <h3 className={styles.itemNav}>Front-end</h3>
                  <div id="active2" className={styles.activeBar}></div>
                </div>
              </a>
            </Link>
            <Link href="/">
              <a>
                <div onClick={() => this.activeLink(3)} className={styles.ColContainer}>
                  <h3 className={styles.itemNav}>Back-end</h3>
                  <div id="active3" className={styles.activeBar}></div>
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
      {/* Drop Menu: Nav, search bar */}
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
