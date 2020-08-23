import styles from "./Carousel.module.scss";
import Link from "next/link";
import React, { Component } from "react";
import CarouselCard from "./CarouselCard";

export default class Carousel extends Component {
  constructor(props) {
    super(props);
    this.state = { actualCard: 2, maxCards: 9 };
  }

  //Animation left Carousel
  animationCarouselLeft(x, max) {

    //Cards are laaded
    var actual = document.getElementById("card" + x);

    if (x == max) {
      var siguiente = document.getElementById("card1");
    } else {
      var siguiente = document.getElementById("card" + (x + 1));
    }

    if (x == 1) {
      var nueva = document.getElementById("card" + max);
      var oculta = document.getElementById("card" + (max - 1));

      x = max;
    } else if (x == 2) {
      var nueva = document.getElementById("card1");
      var oculta = document.getElementById("card" + max);

      x = 1;
    } else {
      var nueva = document.getElementById("card" + (x - 1));
      var oculta = document.getElementById("card" + (x - 2));

      x -= 1;
    }

    //Card class are changed to make move animation 
    siguiente.classList.replace(styles.contentCardD, styles.hideCardD);
    siguiente.classList.replace(styles.hideCardD, styles.hideCard);
    nueva.classList.replace(styles.contentCardI, styles.mainCard);
    oculta.classList.replace(styles.hideCard, styles.hideCardI);
    oculta.classList.replace(styles.hideCardI, styles.contentCardI);
    actual.classList.replace(styles.mainCard, styles.contentCardD);

    console.log(x);

    clearInterval(this.timerID);

    this.componentDidMount();

    return x;
  }

  
  //Animation right Carousel
  animationCarouselRight(x, max) {
    var actual = document.getElementById("card" + x);

    if (x == max) {
      var nueva = document.getElementById("card1");
    } else {
      var nueva = document.getElementById("card" + (x + 1));
    }

    if (x == 1) {
      var siguiente = document.getElementById("card" + max);
      var oculta = document.getElementById("card" + (x + 2));

      x = 2;
    } else if (x == 2) {
      var siguiente = document.getElementById("card1");
      var oculta = document.getElementById("card4");

      x = 3;
    } else if (x == max - 1) {
      var siguiente = document.getElementById("card" + (x - 1));
      var oculta = document.getElementById("card1");

      x += 1;
    } else if (x == max) {
      var siguiente = document.getElementById("card" + (x - 1));
      var oculta = document.getElementById("card2");

      x = 1;
    } else {
      var siguiente = document.getElementById("card" + (x - 1));
      var oculta = document.getElementById("card" + (x + 2));

      x += 1;
    }

    siguiente.classList.replace(styles.contentCardI, styles.hideCardI);
    siguiente.classList.replace(styles.hideCardI, styles.hideCard);
    nueva.classList.replace(styles.contentCardD, styles.mainCard);
    oculta.classList.replace(styles.hideCard, styles.hideCardD);
    oculta.classList.replace(styles.hideCardD, styles.contentCardD);
    actual.classList.replace(styles.mainCard, styles.contentCardI);

    console.log(x);

    clearInterval(this.timerID);

    this.componentDidMount();

    return x;
  }

  //Time animation of carousel 
  componentDidMount() {
    this.timerID = setInterval(
      () =>
        (this.state.actualCard = this.animationCarouselRight(
          this.state.actualCard,
          this.state.maxCards
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
              (this.state.actualCard = this.animationCarouselLeft(
                this.state.actualCard,
                this.state.maxCards
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
            <div id="card1" className={styles.contentCardI}>
              <CarouselCard 
              image = "images/html1.jpg"
              />
            </div>
            <div id="card2" className={styles.mainCard}>
              <CarouselCard 
              image = "images/css.jpg"/>
            </div>
            <div id="card3" className={styles.contentCardD}>
              <CarouselCard 
              image = "images/js.jpg"/>
            </div>
            <div id="card4" className={styles.hideCard}>
              <CarouselCard 
              image = "images/html1.jpg"/>
            </div>
            <div id="card5" className={styles.hideCard}>
              <CarouselCard
              image = "images/css.jpg" />
            </div>
            <div id="card6" className={styles.hideCard}>
              <CarouselCard 
              image = "images/js.jpg"/>
            </div>
            <div id="card7" className={styles.hideCard}>
              <CarouselCard 
              image = "images/html1.jpg"/>
            </div>
            <div id="card8" className={styles.hideCard}>
              <CarouselCard 
              image = "images/css.jpg"/>
            </div>
            <div id="card9" className={styles.hideCard}>
              <CarouselCard 
              image = "images/js.jpg"/>
            </div>
         
          </div>
          {/* Right Arrow and right div for carousel activation */}
          <div  className={styles.movilAnimationD}  onClick={() =>
              (this.state.actualCard = this.animationCarouselRight(
                this.state.actualCard,
                this.state.maxCards
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
