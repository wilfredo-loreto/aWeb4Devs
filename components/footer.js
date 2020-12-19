import styles from "./footer.module.scss";
import Link from "next/link";
import axios from "axios";

export default function Footer() {
  var contact = {
    email: "",
    content: ""
  }

  return (
    <div className={styles.maincontainer}>
      {/* First container: logo, icons and a small text */}
      <div className={styles.colcontainer}>
        <img className={styles.logo} src="/img/logo.png" alt="aWeb4Devs logo" />
        <h2 className={styles.informativetext}>
          Informative page about web development Technologies
        </h2>

        <a
          href="https://api.whatsapp.com/send?phone=584244320635&text=Hello!%20Can%20i%20have%20information%20about%20aWeb4Devs.com%3F"
          target="_blank"
        >
          <div className={styles.whatsapp}>
            <img
              className={styles.footericon}
              src="/icons/whatsapp.svg"
              alt="whatsapp logo"
            />
            <span>+58 424-4320635</span>
          </div>
        </a>

        <a href="mailto: support@aweb4devs.com">
          <div className={styles.email}>
            <img
              className={styles.footericon}
              src="/icons/email.svg"
              alt="email logo"
            />
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
                <img src="/icons/listarrow.svg" alt="" />
                <a>Articles</a>
              </div>
            </Link>
          </li>
          <li>
            <Link href="/frontend">
              <div className={styles.rowcontainer}>
                <img src="/icons/listarrow.svg" alt="" />
                <a>Front-end</a>
              </div>
            </Link>
          </li>
          <li>
            <Link href="/backend">
              <div className={styles.rowcontainer}>
                <img src="/icons/listarrow.svg" alt="" />
                <a>Back-end</a>
              </div>
            </Link>
          </li>
          <li>
            <Link href="/about-us">
              <div className={styles.rowcontainer}>
                <img src="/icons/listarrow.svg" alt="" />
                <a>About us</a>
              </div>
            </Link>
          </li>
          <li>
            <Link href="/contact">
              <div className={styles.rowcontainer}>
                <img src="/icons/listarrow.svg" alt="" />
                <a>Contact</a>
              </div>
            </Link>
          </li>
          <li>
            <Link href="/privacy-policy">
              <div className={styles.rowcontainer}>
                <img src="/icons/listarrow.svg" alt="" />
                <a>Privacy Policy</a>
              </div>
            </Link>
          </li>
          <li>
            <Link href="/cookies-policy">
              <div className={styles.rowcontainer}>
                <img src="/icons/listarrow.svg" alt="" />
                <a>Cookies Policy</a>
              </div>
            </Link>
          </li>
        </ul>
      </div>

      {/* Third container: contact form */}
      <div className={styles.colcontainer}>
        <form action="mailto:support@aweb4devs.com">
          <h5 className={styles.titles}>Contact us</h5>
          <div className={styles.fieldscontainer}>
            <input
              onChange = {(e) => contact.email = e.target.value}
              className={styles.emailfield}
              type="email"
              placeholder="Email"
              id="email"
            />
            <textarea
              onChange = {(e) => contact.content = e.target.value}
              className={styles.messagefield}
              placeholder="Message..."
              rows="5"
              id= "message"
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
              <button onClick = {() => sendEmail(contact)} type="button">Send</button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

async function sendEmail(contact){

    var email = document.getElementById("email");
    var message = document.getElementById("message");
    var url = "http://aweb4devsapi.herokuapp.com/mail";
    var emailRegex = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i;

    if (emailRegex.test(contact.email)) {
      email.value = "";
      message.value = "";

      try{
        const sendContactEmail = axios.post(url, contact);
        const res = (await sendContactEmail).data;
        console.log(res);

      }catch(err){
        console.log(err);
      }


    } else {
      alert("The email is not valid");
    }

}
