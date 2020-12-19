import styles from "./contactform.module.scss";
import Link from "next/link";
import React, { Component } from "react";
import axios from "axios";

export default class ContactInfo extends Component {
  componentDidMount() {
    //Hidding the contact form from the footer
    var containerList = document.getElementsByTagName("ul")[0].parentNode;

    containerList.nextSibling.style.display = "none";
  }

  async sendEmail(contact){

    var email = document.getElementById("email");
    var name = document.getElementById("name");
    var message = document.getElementById("message");
    
    var url = "http://aweb4devsapi.herokuapp.com/mail";
    var emailRegex = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i;

    if (emailRegex.test(contact.email)) {
      email.value = "";
      name.value = "";
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

  render() {
    var contact = {
      email: "",
      name: "",
      content: ""
    }
    return (
      // Form of the contact page
      <form className={styles.form} action="mailto:support@aweb4devs.com">
        <div className={styles.mainContainer}>
          <div className={styles.fieldsContainer}>
            <div className={styles.field}>
              <label className={styles.label}>Name</label>
              <input placeholder="Example"
               onChange = {(e) => contact.name = e.target.value}
               id="name" />
            </div>
            <div className={styles.field}>
              <label className={styles.label}>Email</label>
              <input placeholder="example@example.com"
              onChange = {(e) => contact.email = e.target.value}
              id = "email" />
            </div>
          </div>
          <div className={styles.yourMessage}>
            <label className={styles.label}>Your Message</label>
            <textarea placeholder="I have a doubt about aweb4devs ..." 
            onChange = {(e) => contact.content = e.target.value}
            id = "message"/>
            <div className={styles.adviceContainer}>
              <span>*</span>
              <span>
                {" "}
                By clicking below to send the message, you're agreeing to our{" "}
              </span>
              <Link href="/privacy-policy">
                <a className={styles.link}>privacy policy.</a>
              </Link>
            </div>
            <button type="button" className={styles.sendButton} onClick = {() => this.sendEmail(contact)}> Send </button>
          </div>
        </div>
      </form>
    );
  }
}
