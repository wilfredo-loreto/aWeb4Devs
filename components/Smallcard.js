import styles from './Smallcard.module.scss'
import Link from 'next/link'

function SmallCard({img,title,type}) {
  function slugSyntax(link){
    return link.split(" ").join("-")
  }
  var link,finalTitle,gray 
   if(type){
    link="/" + type + "/" + slugSyntax(title)
    finalTitle = null
    gray = ``
  }else{
    link = "/articles/" + slugSyntax(title)
    finalTitle = title
    gray = 'linear-gradient(180deg,rgba(68, 68, 68, 0.56) 99.98%,rgba(68, 68, 68, 0.5) 99.99%,rgba(255, 255, 255, 0) 100%),'
   }
  const background = {
    background: `${gray}url(${img})`,
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat"
   }
   
    return (
      <Link href={link}>
        <div className={styles.smallcard} style={background}>
          <h3 className={styles.articletitle}>{finalTitle}</h3>
          <button className={styles.morebutton}>More</button>
        </div>
      </Link>
    );
  }
  
  export default SmallCard;