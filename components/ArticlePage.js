import styles from "./DefinitionPage.module.scss";
import Link from "next/link";
import React, { Component } from "react";

export default class ArticlePage extends Component {


  componentDidMount(){
      
  }
  render() {
    return (
      /* Informative articles  */
      <div className={styles.mainContainer}>
        <div className={styles.content}>
          <h2 className={styles.title}>Javascript</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed neque
            nunc, bibendum at lorem et, imperdiet viverra velit. Nullam gravida
            lobortis posuere. Fusce aliquet, quam quis interdum iaculis, orci
            massa lacinia dolor, et tristique sem nulla et velit. Suspendisse a
            libero interdum, dictum nisi quis, fermentum sem.
          </p>
          <p>
            Aenean laoreet, nibh in volutpat faucibus, libero dui malesuada mi,
            in posuere lorem ex pharetra lectus. Etiam convallis fermentum
            accumsan. Nullam suscipit sed ante eu hendrerit. Etiam turpis massa,
            tincidunt non arcu ac, fringilla ultrices leo. Nunc eget neque
            placerat, finibus lacus et, eleifend ante. Nullam in massa sit amet
            ex gravida bibendum at quis ligula. Nunc pharetra orci euismod
            ligula blandit hendrerit. Ut consectetur velit nec diam convallis
            sodales. Sed mollis finibus interdum. Sed cursus nulla eu mi auctor
            placerat.
          </p>
          <p>
            Nam facilisis quis dui vel iaculis. Nulla facilisis mi lobortis
            augue ornare porttitor. Aenean et varius libero. Fusce tristique
            rhoncus risus. Quisque varius odio sed vehicula varius. Fusce at
            metus risus. Cras ut aliquam erat. Nullam ultrices maximus
            venenatis. Suspendisse id lacinia sapien.
          </p>
          <img src="/img/desarrollo.png" />

          <h3 className={styles.subtitle}>Javascript</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed neque
            nunc, bibendum at lorem et, imperdiet viverra velit. Nullam gravida
            lobortis posuere. Fusce aliquet, quam quis interdum iaculis, orci
            massa lacinia dolor, et tristique sem nulla et velit. Suspendisse a
            libero interdum, dictum nisi quis, fermentum sem.
          </p>
          <p>
            Aenean laoreet, nibh in volutpat faucibus, libero dui malesuada mi,
            in posuere lorem ex pharetra lectus. Etiam convallis fermentum
            accumsan. Nullam suscipit sed ante eu hendrerit. Etiam turpis massa,
            tincidunt non arcu ac, fringilla ultrices leo. Nunc eget neque
            placerat, finibus lacus et, eleifend ante. Nullam in massa sit amet
            ex gravida bibendum at quis ligula. Nunc pharetra orci euismod
            ligula blandit hendrerit. Ut consectetur velit nec diam convallis
            sodales. Sed mollis finibus interdum. Sed cursus nulla eu mi auctor
            placerat.
          </p>
          <p>
            Nam facilisis quis dui vel iaculis. Nulla facilisis mi lobortis
            augue ornare porttitor. Aenean et varius libero. Fusce tristique
            rhoncus risus. Quisque varius odio sed vehicula varius. Fusce at
            metus risus. Cras ut aliquam erat. Nullam ultrices maximus
            venenatis. Suspendisse id lacinia sapien.
          </p>
          <img src="/img/desarrollo.png" />

          <div className={styles.references}>
            <h5>References:</h5>
            <span>
              Mauris bibendum ante nec ipsum -{" "}
              <a href="/">https://www.korvusweb.com</a>
            </span>
            <span>
              Mauris bibendum ante nec ipsum -{" "}
              <a href="/">https://www.korvusweb.com</a>
            </span>
            <span>
              Mauris bibendum ante nec ipsum -{" "}
              <a href="/">https://www.korvusweb.com</a>
            </span>
          </div>
        </div>

        {/* Lateral aside */}
        <div className={[styles.aside, styles.articleAside].join(" ")}>
          <h3>More Content</h3>
          <div className={styles.asideContent}>
            <h4>Related Articles</h4>
            <ul>
              <Link href="/">
                <a>
                  <div>
                    <img className={styles.arrow} src="/icons/listarrow.svg" />
                    <li>5 tips de javascript para desarrolla</li>
                  </div>
                </a>
              </Link>

              <Link href="/">
                <a>
                  <div>
                    <img className={styles.arrow} src="/icons/listarrow.svg" />
                    <li>Definition</li>
                  </div>
                </a>
              </Link>
            </ul>
            <h4>Related Tech</h4>
            <ul>
              <Link href="/">
                <a>
                  <div>
                    <img className={styles.arrow} src="/icons/listarrow.svg" />
                    <li>React</li>
                  </div>
                </a>
              </Link>

              <Link href="/">
                <a>
                  <div>
                    <img className={styles.arrow} src="/icons/listarrow.svg" />
                    <li>React</li>
                  </div>
                </a>
              </Link>

              <Link href="/">
                <a>
                  <div>
                    <img className={styles.arrow} src="/icons/listarrow.svg" />
                    <li>React</li>
                  </div>
                </a>
              </Link>

              <Link href="/">
                <a>
                  <div>
                    <img className={styles.arrow} src="/icons/listarrow.svg" />
                    <li>React</li>
                  </div>
                </a>
              </Link>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}
