import styles from "./PrivacyPolicyContent.module.scss";

export default function CookiesPolicyContent() {
  return (
    <div className={styles.mainContainer}>
      <h3 className={styles.title}>COOKIES POLICY</h3>

      <h5 className={styles.subtitle}>WHAT ARE COOKIES?</h5>
      <p className={styles.text}>
        Cookies are tiny text files that are stored on a user's browser. Most
        cookies contain a unique identifier called a cookie ID: a string of
        characters that websites and servers associate with the browser on which
        the cookie is stored. This allows websites and servers to distinguish
        the browser from other browsers that store different cookies, and to
        recognize each browser by its unique cookie ID.
      </p>
      <p className={styles.text}>
        Cookies are widely used by websites and servers to provide many of the
        basic services we find online. If you shop on a website, a cookie allows
        the website to remember which items you've added to your virtual
        shopping cart. If you set preferences on a website, a cookie allows the
        website to remember your preferences the next time you visit. Or if you
        sign into a website, the website might use a cookie to recognize your
        browser later on, so that you don't have to sign in again. Cookies also
        allow websites to collect data about user activity, such as how many
        unique visitors a page receives per month. All these applications depend
        on the information stored in cookies.
      </p>
      <h5 className={styles.subtitle}>
        WHAT COOKIES WE USE? WHAT WE USE THE COOKIES FOR?
      </h5>
      <p className={styles.text}>
        We only use third parties cookies (Google Adsense) and other tracking
        technologies to collect and store your information. Google adsense also
        can use cookies for a best user experience in our website
        www.aweb4devs.com
        <p className={styles.text}>
          Also, if you want to know how Google Adsense works and how uses the
          cookies, please visit{" "}
          <a href={"https://policies.google.com/technologies/types?hl=en-US"}>
            https://policies.google.com/technologies/types?hl=en-US
          </a>{" "}
        </p>
        <br />
      </p>
      <h5 className={styles.subtitle}>
        HOW USERS CAN OPT OUT OR ADJUST SETTINGS?
      </h5>
      <p className={styles.text}>
        You have a choice over the use of cookies as described in this Policy.
        To opt-out ad targeting set by google on our site, please click here:{" "}
        <a href={"http://www.google.com/settings/u/0/ads?hl=en"}>
          {" "}
          http://www.google.com/settings/u/0/ads?hl=en
        </a>{" "}
        .
      </p>
    </div>
  );
}
