import styles from "./News.module.scss";

export default function Footer() {
  return (
    <section className={styles.maincontainer}>
      <div>
        <h1 className={styles.title}>Modern Technologies of Web Development</h1>
      </div>

      <div className={styles.rowcontainer}>
        <div className={styles.container50width}>
          <div className={styles.bigimage}>
            <div className={styles.hidden}>
              <h3 className={styles.bigarticletitle}>ReactJs vs AngularJs</h3>
              <span className={styles.summary}>
                lorem ipsum irtugus masxum erg contors, martusus elim pague...
              </span>
            </div>
          </div>
        </div>

        <div className={styles.colcontainer}>
          <div className={styles.smallcard}>
            <h3 className={styles.articletitle}>Example title 1</h3>
            <button className={styles.morebutton}>More</button>
          </div>
          <div className={styles.smallcard}>
            <h3 className={styles.articletitle}>Example title 2 upper title</h3>
            <button className={styles.morebutton}>More</button>
          </div>
        </div>
        <div className={styles.colcontainer}>
          <div className={styles.smallcard}>
            <h3 className={styles.articletitle}>Example title 1</h3>
            <button className={styles.morebutton}>More</button>
          </div>
          <div className={styles.smallcard}>
            <h3 className={styles.articletitle}>Example title 2</h3>
            <button className={styles.morebutton}>More</button>
          </div>
        </div>
      </div>
    </section>
  );
}
