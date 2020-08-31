import styles from "./ResultCard.module.scss";
import Link from "next/link";

export default function ResultCard() {
  return (

    /* Result Card */
    <div className={styles.mainContainer}>
      <div className={styles.circle}></div>
      <Link href="/">
        <a>
          <div className={styles.container}>
            <div className={styles.titleContainer}>
              {/* Title */}
              <h3>ReactJs</h3>
              {/* Description */}
              <p>
                ReactJs es uno de los principales frameworks de javascript...
              </p>
            </div>
              {/* Main tag */}
            <h4>Javascript-Framework </h4>
          </div>
        </a>
      </Link>
    </div>
  );
}
