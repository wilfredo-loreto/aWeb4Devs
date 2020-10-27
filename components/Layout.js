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
    this.setState({showCookieConsentBanner:false})
  }
  stopCookies(e){
    this.setState({showCookieConsentBanner:false})
    /*CODE HERE TO STOP COOKIES FROM GOOGLE ADSENSE*/
  }
  componentDidMount(){
    setTimeout(()=>{
      if(!localStorage.getItem("cookieBannerDisplayed")){
        localStorage.setItem("cookieBannerDisplayed","true")
        this.setState({showCookieConsentBanner:true})
      }
    },2000)
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


