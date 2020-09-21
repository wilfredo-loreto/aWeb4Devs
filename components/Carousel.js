import styles from "./Carousel.module.scss";
import Link from "next/link";
import React, { Component } from "react";
import CarouselCard from "./CarouselCard";

export default class Carousel extends Component {
  constructor(props) {
    super(props);
    this.state = { actualCardF: 2, maxCardsF: 9, actualCardB: 2, maxCardsB: 9  };
  }

  //Animation left Carousel
  animationCarouselLeft(x, max) {

    if(this.props.aux){

      var card = "cardF";

    }else{
      var card = "cardB";
    }

    //Cards are laaded
    var actual = document.getElementById(card + x);
  
    if (x == max) {
      var siguiente = document.getElementById(card + 1);
    } else {
      var siguiente = document.getElementById(card + (x + 1));
    }

    if (x == 1) {
      var nueva = document.getElementById(card + max);
      var oculta = document.getElementById(card + (max - 1));

      x = max;
    } else if (x == 2) {
      var nueva = document.getElementById(card + 1);
      var oculta = document.getElementById(card + max);

      x = 1;
    } else {
      var nueva = document.getElementById(card + (x - 1));
      var oculta = document.getElementById(card + (x - 2));

      x -= 1;
    }

    //Card class are changed to make move animation 
    siguiente.classList.replace(styles.contentCardD, styles.hideCardD);
    siguiente.classList.replace(styles.hideCardD, styles.hideCard);
    nueva.classList.replace(styles.contentCardI, styles.mainCard);
    oculta.classList.replace(styles.hideCard, styles.hideCardI);
    oculta.classList.replace(styles.hideCardI, styles.contentCardI);
    actual.classList.replace(styles.mainCard, styles.contentCardD);


    clearInterval(this.timerID);

    this.automaticCarousel();

    if(this.props.aux){
     this.setState({actualCardF: x});
     

    }else{
      this.setState({actualCardB: x});
     
    }
  
  }

  
  //Animation right Carousel
  animationCarouselRight(x, max) {

    if(this.props.aux){

      var card = "cardF";

    }else{
      var card = "cardB";
    }
   
    var actual = document.getElementById(card + x);
  
    if (x == max) {
      var nueva = document.getElementById(card + 1);
    } else {
      var nueva = document.getElementById(card + (x + 1));
    }

    if (x == 1) {
      var siguiente = document.getElementById(card + max);
      var oculta = document.getElementById(card + (x + 2));

      x = 2;
    } else if (x == 2) {
      var siguiente = document.getElementById(card + 1);
      var oculta = document.getElementById(card + 4);

      x = 3;
    } else if (x == max - 1) {
      var siguiente = document.getElementById(card + (x - 1));
      var oculta = document.getElementById(card + 1);

      x += 1;
    } else if (x == max) {
      var siguiente = document.getElementById(card + (x - 1));
      var oculta = document.getElementById(card + 2);

      x = 1;
    } else {
      var siguiente = document.getElementById(card + (x - 1));
      var oculta = document.getElementById(card + (x + 2));

      x += 1;
    }

    siguiente.classList.replace(styles.contentCardI, styles.hideCardI);
    siguiente.classList.replace(styles.hideCardI, styles.hideCard);
    nueva.classList.replace(styles.contentCardD, styles.mainCard);
    oculta.classList.replace(styles.hideCard, styles.hideCardD);
    oculta.classList.replace(styles.hideCardD, styles.contentCardD);
    actual.classList.replace(styles.mainCard, styles.contentCardI);

  
    clearInterval(this.timerID);

    this.automaticCarousel();

    if(this.props.aux){
      this.setState({actualCardF: x});
      
      
   
    }else{
      this.setState({actualCardB: x});
    
    }

  }

  
  //Time animation of carousel 
  componentDidMount() {
    this.setState({actualCardF: 2});
    this.setState({actualCardB: 2});
   
    this.automaticCarousel();
  }

  componentWillUnmount() {
    clearInterval(this.timerID);

  }

  automaticCarousel(){
    this.timerID = setInterval(
      () =>
        ( this.animationCarouselRight(
          this.props.aux ? this.state.actualCardF : this.state.actualCardB,
          this.props.aux ? this.state.maxCardsF : this.state.maxCardsB
        )),
      5000
    );
  }

  render() {
  
    return (
      <div className={styles.contentCarousel}>
        {/* Subtitle */}
        <h2>{this.props.subtitle}</h2>

        {/* carousel and arrow container */}
        <div className={styles.container2}>

          {/* Left arrow and left div for carousel activation */}
          <div  className={styles.movilAnimationI}  onClick={() =>
              ( this.animationCarouselLeft(
                this.props.aux ? this.state.actualCardF : this.state.actualCardB,
                this.props.aux ? this.state.maxCardsF : this.state.maxCardsB
              ))
            }>
          <img
           
            className={styles.arrows}
            src="icons/arrowL.png"
            alt=""
          />
          </div>
          {/* Carousel container */}
          <div className={styles.carousel} id="carousel">
            
            {/* Carousel items/cards */}
            <div id={this.props.aux ? "cardF1" : "cardB1"} className={styles.contentCardI}>
              <CarouselCard 
              image = "img/html1.jpg"
              />
            </div>
            <div id={this.props.aux ? "cardF2" : "cardB2"} className={styles.mainCard}>
              <CarouselCard 
              image = "img/css.jpg"/>
            </div>
            <div id={this.props.aux ? "cardF3" : "cardB3"} className={styles.contentCardD}>
              <CarouselCard 
              image = "img/js.jpg"/>
            </div>
            <div id={this.props.aux ? "cardF4" : "cardB4"} className={styles.hideCard}>
              <CarouselCard 
              image = "img/html1.jpg"/>
            </div>
            <div id={this.props.aux ? "cardF5" : "cardB5"} className={styles.hideCard}>
              <CarouselCard
              image = "img/css.jpg" />
            </div>
            <div id={this.props.aux ? "cardF6" : "cardB6"} className={styles.hideCard}>
              <CarouselCard 
              image = "img/js.jpg"/>
            </div>
            <div id={this.props.aux ? "cardF7" : "cardB7"} className={styles.hideCard}>
              <CarouselCard 
              image = "img/html1.jpg"/>
            </div>
            <div id={this.props.aux ? "cardF8" : "cardB8"} className={styles.hideCard}>
              <CarouselCard 
              image = "img/css.jpg"/>
            </div>
            <div id={this.props.aux ? "cardF9" : "cardB9"} className={styles.hideCard}>
              <CarouselCard 
              image = "img/js.jpg"/>
            </div>
         
          </div>
          {/* Right Arrow and right div for carousel activation */}
          <div  className={styles.movilAnimationD}  onClick={() =>
              (this.animationCarouselRight(
                this.props.aux ? this.state.actualCardF : this.state.actualCardB,
                this.props.aux ? this.state.maxCardsF : this.state.maxCardsB
              ))
            }>
          <img
       
            className={styles.arrows}
            src="icons/arrowR.png"
            alt=""
          />
          </div>
         
        </div>
      </div>
    );
  }
}
