import Layout from "../components/Layout"
import Link from "next/link"
import styles from "./PrivacyPolicyContent.module.scss"


function PrivacyPolicyContent() {
  return (
    <div>
      <h3 className={styles.title}>Privacy Policy</h3>
      <span> Last updated September 21, 2020</span>
      <p className={styles.text}>Thank you for choosing to be part of our community at aWeb4Devs (“Company”, “we”, “us”, or “our”). We are committed to protecting your personal information and your right to privacy. If you have any questions or concerns about this privacy notice, or our practices with regards to your personal information, please contact us at contact@aweb4devs.com.</p>
      <p className={styles.text}>When you visit our website <Link href="/"> <a> www.aweb4devs.com </a></Link> (the "Website"), and more generally, use any of our services (the "Services", which include the Website), we appreciate that you are trusting us with your personal information. We take your privacy very seriously. In this privacy notice, we seek to explain to you in the clearest way possible what information we collect, how we use it and what rights you have in relation to it. We hope you take some time to read through it carefully, as it is important. If there are any terms in this privacy notice that you do not agree with, please discontinue use of our Services immediately. </p>
      <p className={styles.text}> </p>
    </div>
  );
}

export default PrivacyPolicyContent;