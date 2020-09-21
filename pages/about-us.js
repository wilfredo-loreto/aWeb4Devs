import Layout from "../components/Layout";
import styles from "../components/about-us.module.scss";
import Link from "next/link";

export default function aboutUs() {
  return (
    <Layout>
      <div className={styles.mainContainer}>
        <div className={styles.rowContainer}>
          <div>
            <h3>Who we are?</h3>
            <p>Hello!! we are Wilfredo and Anderson.</p>
            <p>
              Two developers who likes web programming. We like to share with
              the community everything that we have been learning over the
              years, in a more summarized, accessible and friendly way for
              developers and non-developers through our platform called
              aWeb4Devs.
            </p>
            <p>
              In this portal you will find all the information you need
              regarding the technologies and languages used for the development
              of web pages and applications. If at this time you do not get what
              you are looking for, it may be available in the future!{" "}
            </p>
            <p>
              Otherwise, if you want to get in touch with some of us, feel free
              to <Link href="/contact"><a href="">contact us here.</a></Link>
            </p>
          </div>
          <img src="img/aboutUs1.jpg" />
        </div>
        <div className={styles.rowContainer}>
          <img src="img/aboutUs2.jpg" />
          <div>
            <h3>What we do?</h3>
            <p>
              We have programmed many web pages over the years. Currently, we
              are in the constant practice and learning of the most modern
              languages and advanced programming strategies, to make every day
              more efficient applications and have a better performance in the
              workplace
            </p>
            <p>
              Our best way to learn is by sharing with you in this portal all
              the knowledge that we are acquiring.
            </p>
            <p>At last, we are available to work on:</p>
            <ul>
              <li>New Projects</li>
              <li>Startups</li>
              <li>Web Development Companies</li>
              <li>Digital Marketing Agencies</li>
            </ul>
            
            <p>Please <Link href="/"><a >contact us</a></Link> if you need our help as freelancers or developers.</p>
       
          </div>
        </div>
      </div>
    </Layout>
  );
}
