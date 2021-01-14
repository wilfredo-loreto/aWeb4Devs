import Head from "next/head";
import Header from "./header";
import Footer from "./footer";
import CookieConsentBanner from "./cookieconsentbanner";
import React, { Component } from "react";

export default class Layout extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showCookieConsentBanner: false,
    };
    this.allowCookies = this.allowCookies.bind(this);
    this.stopCookies = this.stopCookies.bind(this);
  }

  allowCookies(e) {
    const year = 1000 * 60 * 60 * 24 * 365;

    this.setWithExpiry("cookieBannerAccepted", "true", year);
    setTimeout(() => {
      this.setState({ showCookieConsentBanner: false });
    }, 1000);
    /*CODE HERE TO START PERSONALIZED ADS (ENABLED COOKIES) FROM GOOGLE ADSENSE*/
  }
  stopCookies(e) {
    const day = 1000 * 60 * 60 * 24;

    this.setWithExpiry("cookieBannerRejected", "true", day);
    setTimeout(() => {
      this.setState({ showCookieConsentBanner: false });
    }, 1000);
    /*CODE HERE TO STOP PERSONALIZED ADS (DISABLED COOKIES) FROM GOOGLE ADSENSE*/
  }
  setWithExpiry(key, value, ttl) {
    const now = new Date();
    const item = {
      value: value,
      expiry: now.getTime() + ttl,
    };
    localStorage.setItem(key, JSON.stringify(item));
  }
  getWithExpiry(key) {
    const itemStr = localStorage.getItem(key);
    if (!itemStr) {
      return null;
    }
    const item = JSON.parse(itemStr);
    const now = new Date();

    if (now.getTime() > item.expiry) {
      localStorage.removeItem(key);
      return null;
    }
    return item.value;
  }
  componentDidMount() {
    setTimeout(() => {
      if (
        !this.getWithExpiry("cookieBannerAccepted") &&
        !this.getWithExpiry("cookieBannerRejected")
      ) {
        this.setState({ showCookieConsentBanner: true });
      }
    }, 3000);
  }

  render() {
    const generalKeywords = "dev,devs,web,web development,web application,web page,application,website,developers,frontend,backend,full-stack,app"
  
    if(this.props.keywords != null){
      const customKeywords = this.props.keywords.join(",")

     var allKeywords = generalKeywords + customKeywords
    }else{

      var allKeywords = generalKeywords
    }
   
   
    
    return (
      <div>
        <Head>
          <meta name="viewport" content="width=device-width, initial-scale=1"/>
          <meta charSet="UTF-8"/>
          <meta name="google-site-verification" content="fEItVepHn_jJoO8-KuJjTRlibnbsp-EwZsQqTmJG82M" />
          <meta name="description" content={this.props.description}/>
          {this.props.noIndexPage ? <meta name="robots" content="noindex"/> : null}
          {this.props.keywords ? <meta name="keywords" content={allKeywords}/>:<meta name="keywords" content={generalKeywords}/>}
          <title>{this.props.pageTitle}</title>
          <link rel="icon" type="image/png" href="/img/favicon.png" />
        </Head>
        <Header />
        <div> {this.props.children}</div>

        {this.state.showCookieConsentBanner == true ? (
          <CookieConsentBanner
            stopCookies={this.stopCookies}
            allowCookies={this.allowCookies}
          />
        ) : null}
        <Footer />
      </div>
    );
  }
}
