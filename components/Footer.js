import styles from "./Footer.module.scss";

export default function Footer() {
  return (
    <div className={styles.maincontainer}>
      <div className={styles.colcontainer}>
        <img className={styles.logo} src="/img/logo.png" />
        <h2 className={styles.informativetext}>
          Informative page about web development Technologies
        </h2>
        <a href="#" target="_blank">
          <div className={styles.whatsapp}>
            <img className={styles.footericon}src="/img/whatsapp.svg" />
            <span>+58 424-4320635</span>
          </div>
        </a>
        <a href="#" target="_blank">
          <div className={styles.email}>
            <img className={styles.footericon}src="/img/email.svg" />
            <span>test@cookiefox.com</span>
          </div>
        </a>
      </div>
      <div className={styles.colcontainer}>
        <h5>Links</h5>
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

      <div className={styles.colcontainer}>
        <form action="">
          <h5>Contact us</h5>
          <input type="email" placeholder="Email..." />
          <input type="text" placeholder="Message..." />
          <div className="rowcontainer">
            <p>
              <span>*</span>
              By clicking below to send the message, you're agreeing to our
              <a>privacy policy</a>
            </p>
            <button type="submit">Send</button>
          </div>
        </form>
      </div>
    </div>
  );
}
