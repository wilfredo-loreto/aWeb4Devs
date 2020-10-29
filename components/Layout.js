import Head from "next/head";
import Header from "./Header";
import Footer from "./Footer"
import CookieConsentBanner from "./CookieConsentBanner";
import React, { Component } from "react";

export default class Layout extends Component {

  constructor(props){
    super(props)
    this.state={
      showCookieConsentBanner:false
    }
    this.handleBanner = this.handleBanner.bind(this)
    this.stopCookies= this.stopCookies.bind(this)
  }

  handleBanner(e){
    const year = 1000*60*60*24*365
    this.setWithExpiry("cookieBannerAccepted","true",year)
    this.setState({showCookieConsentBanner:false})
  }
  stopCookies(e){
    const day = 1000*60*60*24
    this.setWithExpiry("cookieBannerRejected","true",day)
    this.setState({showCookieConsentBanner:false})
    /*CODE HERE TO STOP COOKIES FROM GOOGLE ADSENSE*/
  }
  setWithExpiry(key, value, ttl) {
    const now = new Date()
    const item = {
      value: value,
      expiry: now.getTime() + ttl,
    }
    localStorage.setItem(key, JSON.stringify(item))
  }
  getWithExpiry(key) {
    const itemStr = localStorage.getItem(key)
    if (!itemStr) {
      return null
    }
    const item = JSON.parse(itemStr)
    const now = new Date()
   
    if (now.getTime() > item.expiry) {
     
      localStorage.removeItem(key)
      return null
    }
    return item.value
  }
  componentDidMount(){
    setTimeout(()=>{
      
      if(!this.getWithExpiry("cookieBannerAccepted") && !this.getWithExpiry("cookieBannerRejected")){
        this.setState({showCookieConsentBanner:true})
      }
    },3000)
  }



  render(){
    return (
      <div>
        <Head>
          <title>AWeb4Devs</title>
          <link rel="icon" type="image/png" href="/img/favicon.png"/>
        </Head>
        <Header />
        <div> {this.props.children}</div>
      
        {this.state.showCookieConsentBanner == true ? <CookieConsentBanner stopCookies={this.stopCookies} handleBanner={this.handleBanner}/>:null}
        <Footer />
      </div>
    );
  }
}


