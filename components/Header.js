import styles from "./Header.module.scss";
import Link from "next/link";
import { useRouter } from "next/router";

export default function Header (){
  
  const router = useRouter();
    return (
      <div className={styles.mainContainer}>
      {/* Header: Main logo, nav, search bar, burguer icon menu */}
        <div className={styles.auxDiv}></div>
        <div className={styles.header}>
          <Link href="/">
            <a className={styles.logoLink} >
              <img className={styles.logo} src="/img/AWeb4Devs.png" alt="" />
            </a>
          </Link>
          <div className={styles.nav}>
            <Link href="/articles">
              <a>
                <div className={styles.ColContainer}>
                  <h3 className={styles.itemNav}>Articles</h3>
                  <div id="active1" className={[styles.activeBar, router.pathname == "/articles" ? styles.activeNav : null].join(" ")}></div>
                </div>
              </a>
            </Link>
            <Link href="/front-end">
              <a >
                <div className={styles.ColContainer}>
                  <h3 className={styles.itemNav}>Front-end</h3>
                  <div id="active2" className={[styles.activeBar, router.pathname == "/frontend" ? styles.activeNav : null].join(" ")}></div>
                </div>
              </a>
            </Link>
            <Link href="/back-end">
              <a>
                <div  className={styles.ColContainer}>
                  <h3 className={styles.itemNav}>Back-end</h3>
                  <div id="active3" className={[styles.activeBar, router.pathname == "/backend" ? styles.activeNav : null].join(" ")}></div>
                </div>
              </a>
            </Link>
          </div>

          <div className={styles.searchBar}>
            <input type="text" placeholder="Search..." />
            <img className={styles.searchIcon} src="/icons/search.png" alt="" />
          </div>

          <div className={styles.movilMenu}>
            <div
              className={styles.menuIcon}
              onClick={AnimationMenu}
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
            <Link href="/articles">
              <a>
                <div className={styles.ColContainer}>
                  <h3 className={styles.itemNav}>Articles</h3>
                  <div className={styles.activeBar}></div>
                </div>
              </a>
            </Link>
            <Link href="/front-end">
              <a>
                <div className={styles.ColContainer}>
                  <h3 className={styles.itemNav}>Front-end</h3>
                  <div className={styles.activeBar}></div>
                </div>
              </a>
            </Link>
            <Link href="/back-end">
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
            <img className={styles.searchIcon} src="/icons/search.png" alt="" />
          </div>
        </div>
      </div>
    );
  }

  
function AnimationMenu(){

  var icono = document.getElementById("nav-icon3");
  var menu = document.getElementById("menu");

  icono.classList.toggle(styles.open);
  menu.classList.toggle(styles.openMenu);
}
