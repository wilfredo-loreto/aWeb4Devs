import styles from './Smallcard.module.scss'
import Link from 'next/link'

function SmallCard({img,title,type,isTech}) {
  function slugSyntax(link){
    return link.split(" ").join("-")
  }
  const background = {
    background: `linear-gradient(180deg,rgba(68, 68, 68, 0.56) 99.98%,rgba(68, 68, 68, 0.5) 99.99%,rgba(255, 255, 255, 0) 100%),url(${img})`,
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat"
   }
   var link
   if(isTech){
    link="/" + type + "/" + slugSyntax(title)
   }else{
     link = "/articles/" + slugSyntax(title)
   }
    return (
      <Link href={link}>
        <div className={styles.smallcard} style={background}>
          <h3 className={styles.articletitle}>{title}</h3>
          <button className={styles.morebutton}>More</button>
        </div>
      </Link>
    );
  }
  
  export default SmallCard;