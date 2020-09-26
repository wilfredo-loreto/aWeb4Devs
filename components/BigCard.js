import styles from './BigCard.module.scss'

function BigCard({img,title,summary}) {
  const background = {
    background: `url(${img})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
   }
    return (
        <div className={styles.bigimage} style={background}>
          {/* Hidden is the pop-up generated doing hover in the card only in desktop*/}
            <div className={styles.hidden}>
              <h3 className={styles.bigarticletitle}>{title}</h3>
              <span className={styles.summary}>
               {summary}
              </span>
            </div>
          </div>
    );
  }
  
  export default BigCard;