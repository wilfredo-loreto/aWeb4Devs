import styles from './BigCard.module.scss'

function BigCard() {
    return (
        <div className={styles.bigimage}>
          {/* Hidden is the pop-up generated doing hover in the card only in desktop*/}
            <div className={styles.hidden}>
              <h3 className={styles.bigarticletitle}>ReactJs vs AngularJs</h3>
              <span className={styles.summary}>
                lorem ipsum irtugus masxum erg contors, martusus elim pague...
              </span>
            </div>
          </div>
    );
  }
  
  export default BigCard;