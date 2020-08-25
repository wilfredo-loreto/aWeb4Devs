import styles from './Smallcard.module.scss'

function SmallCard() {
    return (
        <div className={styles.smallcard}>
          <h3 className={styles.articletitle}>Example title 2</h3>
          <button className={styles.morebutton}>More</button>
        </div>
    );
  }
  
  export default SmallCard;