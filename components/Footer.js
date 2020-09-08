import styles from "./Footer.module.scss";
import Link from 'next/link'

export default function Footer() {
  return (
    <div className={styles.maincontainer}>
      {/* First container: logo, icons and a small text */}
      <div className={styles.colcontainer}>
        <img className={styles.logo} src="/img/logo.png" />
        <h2 className={styles.informativetext}>
          Informative page about web development Technologies
        </h2>
        
        <a href="https://api.whatsapp.com/send?phone=584244320635&text=Hello!%20Can%20i%20have%20information%20about%20aWeb4Devs.com%3F" target="_blank">
          <div className={styles.whatsapp}>
            <img className={styles.footericon} src="/img/whatsapp.svg" />
            <span>+58 424-4320635</span>
          </div>
        </a>
  
        
        <a href="mailto: support@aweb4devs.com">
          <div className={styles.email}>
            <img className={styles.footericon} src="/img/email.svg" />
            <span>
              support@<span className={styles.break}> </span>aweb4devs.com
            </span>
          </div>
        </a>
        
      </div>
      {/* Second container: links */}
      <div className={styles.colcontainer}>
        <h5 className={styles.titles}>Links</h5>
        <ul className={styles.linklist}>
          <li>
            <Link href="/articles">
            <div className={styles.rowcontainer}>
              <img src="/img/listarrow.svg" />
              <a>Articles</a>
            </div>
            </Link>
          </li>
          <li>
            <Link href="/front-end">
            <div className={styles.rowcontainer}>
              <img src="/img/listarrow.svg" />
              <a>Front-end</a>
            </div>
            </Link>
          </li>
          <li>
            <Link href="/back-end">
            <div className={styles.rowcontainer}>
              <img src="/img/listarrow.svg" />
              <a>Back-end</a>
            </div>
            </Link>
          </li>
          <li>
            <Link href="/about-us">
            <div className={styles.rowcontainer}>
              <img src="/img/listarrow.svg" />
              <a>About us</a>
            </div>
            </Link>
          </li>
          <li>
            <Link href="/contact">
            <div className={styles.rowcontainer}>
              <img src="/img/listarrow.svg" />
              <a>Contact</a>
            </div>
            </Link>
          </li>
          <li>
            <Link href="/privacy-policy">
            <div className={styles.rowcontainer}>
              <img src="/img/listarrow.svg" />
              <a>Privacy Policy</a>
            </div>
            </Link>
          </li>
        </ul>
      </div>

      {/* Third container: contact form */}
      <div className={styles.colcontainer}>
        <form action="">
          <h5 className={styles.titles}>Contact us</h5>
          <div className={styles.fieldscontainer}>
            <input
              className={styles.emailfield}
              type="email"
              placeholder="Email"
            />
            <textarea
              className={styles.messagefield}
              placeholder="Message..."
              rows="5"
            />
          </div>
          <div className={styles.rowcontainer}>
            <div className={styles.advice}>
              <p>
                <span>* </span>
                By clicking below to send the message, you're agreeing to our
                <Link href="/privacy-policy">
                
                <a> privacy policy</a>
                </Link>
              </p>
            </div>
            <div className={styles.sendbutton}>
              <button type="submit">Send</button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
