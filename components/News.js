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
          <SmallCard img="/img/example.png" title="Example Title vs people"/>
          <SmallCard img="/img/example.png" title="Example Title vs people"/>
        </div>
        <div className={styles.container50width}>
          <BigCard img="/img/example.png" title="React vs Angular" summary="Lorem ipsum erg masd fermon nom marsen elum terek asun"/>
        </div>
        <div className={styles.colcontainer}>
          <SmallCard img="/img/example.png" title="Example Title vs people"/>
          <SmallCard img="/img/example.png" title="Example Title vs people"/>
        </div>        
      </div>
    </section>
  );
}
