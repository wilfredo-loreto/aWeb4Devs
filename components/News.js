import styles from "./News.module.scss";
import SmallCard from "./SmallCard"
import BigCard from "./BigCard"
export default function Footer(props) {
  return (
    <section className={[styles.maincontainer, props.order ? styles.lessPadding:styles.nothing].join(' ')}>
      <div>
  <h1 className={styles.title}>{props.subtitle}</h1>
      </div>
      {/* rowcontainer is a row flexbox with all the card containers */}
      <div className={styles.rowcontainer}>

        <div className={[styles.colcontainer, props.order ? styles.order1:styles.order0].join(' ')}>
          <SmallCard />
          <SmallCard />
        </div>
        <div className={styles.container50width}>
          <BigCard />
        </div>
        <div className={styles.colcontainer}>
          <SmallCard />
          <SmallCard />
        </div>        
      </div>
    </section>
  );
}
