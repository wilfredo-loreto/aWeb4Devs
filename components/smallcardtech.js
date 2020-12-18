import styles from "./smallcard.module.scss";
import Link from "next/link";

function SmallCardTech({ img, title,type }) {
  function slugSyntax(link) {
    return link.split(" ").join("-").replace("?","%3F");
  }
  return (
    <Link href={"/" + type + "/"+ slugSyntax(title)}>
        <div className={styles.smallcard}>
            <img src={"/img/"+img} alt={title + " logo"}/>
        </div>
    </Link>
  );
}

export default SmallCardTech;
