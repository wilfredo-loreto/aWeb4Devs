import styles from "./header.module.scss";
import Link from "next/link";
import { useRouter } from "next/router";

export default function Header() {
  const router = useRouter();

  return (
    <div className={styles.mainContainer}>
      {/* Header: Main logo, nav, search bar, burguer icon menu */}
      <div className={styles.auxDiv}></div>
      <div className={styles.header}>
        <Link href="/">
          <a className={styles.logoLink}>
            <img className={styles.logo} src="/img/AWeb4Devs.png" alt="" />
          </a>
        </Link>
        <div className={styles.nav}>
          <Link href="/articles">
            <a>
              <div className={styles.ColContainer}>
                <h3 className={styles.itemNav}>Articles</h3>
                <div
                  id="active1"
                  className={[
                    styles.activeBar,
                    router.pathname == "/articles" ? styles.activeNav : null,
                  ].join(" ")}
                ></div>
              </div>
            </a>
          </Link>
          <Link href="/frontend">
            <a>
              <div className={styles.ColContainer}>
                <h3 className={styles.itemNav}>Front-end</h3>
                <div
                  id="active2"
                  className={[
                    styles.activeBar,
                    router.pathname == "/front-end" ? styles.activeNav : null,
                  ].join(" ")}
                ></div>
              </div>
            </a>
          </Link>
          <Link href="/backend">
            <a>
              <div className={styles.ColContainer}>
                <h3 className={styles.itemNav}>Back-end</h3>
                <div
                  id="active3"
                  className={[
                    styles.activeBar,
                    router.pathname == "/back-end" ? styles.activeNav : null,
                  ].join(" ")}
                ></div>
              </div>
            </a>
          </Link>
        </div>

        <div className={styles.searchBar}>
          <input
            onKeyUp={() => key(event, 1)}
            id="searchBar1"
            type="text"
            placeholder="Search..."
          />

          <img
            onClick={() => search(1)}
            className={styles.searchIcon}
            src="/icons/search.png"
            alt="search"
          />
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
          <Link href="/frontend">
            <a>
              <div className={styles.ColContainer}>
                <h3 className={styles.itemNav}>Front-end</h3>
                <div className={styles.activeBar}></div>
              </div>
            </a>
          </Link>
          <Link href="/backend">
            <a>
              <div className={styles.ColContainer}>
                <h3 className={styles.itemNav}>Back-end</h3>
                <div className={styles.activeBar}></div>
              </div>
            </a>
          </Link>
        </div>
        <div className={styles.searchBar2}>
          <input
            onKeyUp={() => key(event, 2)}
            id="searchBar2"
            type="text"
            placeholder="Search..."
          />
          <img
            onClick={() => search(2)}
            className={styles.searchIcon}
            src="/icons/search.png"
            alt=""
          />
        </div>
      </div>
    </div>
  );
}

function AnimationMenu() {
  var icono = document.getElementById("nav-icon3");
  var menu = document.getElementById("menu");

  icono.classList.toggle(styles.open);
  menu.classList.toggle(styles.openMenu);
}

function key(e, x) {
  if (e.keyCode === 13) {
    search(x);
  }
}

async function search(x) {
  var searchBar = document.getElementById("searchBar" + x);

  if (searchBar.value != null) {
    location.href = "/results/" + searchBar.value;
  }
}
