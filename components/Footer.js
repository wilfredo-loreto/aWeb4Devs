import styles from "./Footer.module.scss";

export default function Footer() {
  return (
    <div className={styles.maincontainer}>
      {/* First container: logo, icons and a small text */}
      <div className={styles.colcontainer}>
        <img className={styles.logo} src="/img/logo.png" />
        <h2 className={styles.informativetext}>
          Informative page about web development Technologies
        </h2>
        <a href="#" target="_blank">
          <div className={styles.whatsapp}>
            <img className={styles.footericon} src="/img/whatsapp.svg" />
            <span>+58 424-4320635</span>
          </div>
        </a>
        <a href="#" target="_blank">
          <div className={styles.email}>
            <img className={styles.footericon} src="/img/email.svg" />
            <span>
              contact@<span className={styles.break}> </span>aweb4devs.com
            </span>
          </div>
        </a>
      </div>
      {/* Second container: links */}
      <div className={styles.colcontainer}>
        <h5 className={styles.titles}>Links</h5>
        <ul className={styles.linklist}>
          <li>
            <div className={styles.rowcontainer}>
              <img src="/img/listarrow.svg" />
              <span>Articles</span>
            </div>
          </li>
          <li>
            <div className={styles.rowcontainer}>
              <img src="/img/listarrow.svg" />
              <span>Front-end</span>
            </div>
          </li>
          <li>
            <div className={styles.rowcontainer}>
              <img src="/img/listarrow.svg" />
              <span>Back-end</span>
            </div>
          </li>
          <li>
            <div className={styles.rowcontainer}>
              <img src="/img/listarrow.svg" />
              <span>About us</span>
            </div>
          </li>
          <li>
            <div className={styles.rowcontainer}>
              <img src="/img/listarrow.svg" />
              <span>Contact</span>
            </div>
          </li>
          <li>
            <div className={styles.rowcontainer}>
              <img src="/img/listarrow.svg" />
              <span>Privacy Policy</span>
            </div>
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
                <a> privacy policy</a>
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
