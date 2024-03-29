import styles from "./carousel.module.scss";
import React, { Component } from "react";
import CarouselCard from "./carouselcard";

export default class Carousel extends Component {
  constructor(props) {
    super(props);
    this.state = { actualCardF: 2, actualCardB: 2, techs: [] };
  }

  //Animation left Carousel
  animationCarouselLeft(x, max) {
    if (this.props.aux) {
      var card = "cardF";
    } else {
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

    if (this.props.aux) {
      this.setState({ actualCardF: x });
    } else {
      this.setState({ actualCardB: x });
    }
  }

  //Animation right Carousel
  animationCarouselRight(x, max) {
    if (this.props.aux) {
      var card = "cardF";
    } else {
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

    if (this.props.aux) {
      this.setState({ actualCardF: x });
    } else {
      this.setState({ actualCardB: x });
    }
  }

  //Time animation of carousel
  componentDidMount() {
    this.setState({ actualCardF: 2 });
    this.setState({ actualCardB: 2 });

    this.automaticCarousel();
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  increaseCounter(aux) {
    aux < 3 ? (aux += 1) : (aux = 3);

    return aux;
  }

  automaticCarousel() {
    this.timerID = setInterval(
      () =>
        this.animationCarouselRight(
          this.props.aux ? this.state.actualCardF : this.state.actualCardB,
          this.props.carouselContent.length
        ),
      5000
    );
  }

  render() {
    const techs = this.props.carouselContent;
    var aux = -1;
    var classCard = [
      styles.contentCardI,
      styles.mainCard,
      styles.contentCardD,
      styles.hideCard,
    ];

    return (
      <div className={styles.contentCarousel}>
        {/* Subtitle */}
        <h2>{this.props.subtitle}</h2>

        {/* carousel and arrow container */}
        <div className={styles.container2}>
          {/* Left arrow and left div for carousel activation */}
          <div
            className={styles.movilAnimationI}
            onClick={() =>
              this.animationCarouselLeft(
                this.props.aux
                  ? this.state.actualCardF
                  : this.state.actualCardB,
                this.props.carouselContent.length
              )
            }
          >
            <img
              className={styles.arrows}
              src="icons/arrowL.png"
              alt="Move carousel to left side"
            />
          </div>
          {/* Carousel container */}
          <div className={styles.carousel} id="carousel">
            {/* Carousel items/cards */}
            {techs.map((tech, count) => (
              <div
                key={"div" + count}
                id={
                  this.props.aux ? "cardF" + (count + 1) : "cardB" + (count + 1)
                }
                className={classCard[(aux = this.increaseCounter(aux))]}
              >
                <CarouselCard
                  image={tech.img}
                  title={tech.title}
                  type={tech.type}
                />
              </div>
            ))}
          </div>
          {/* Right Arrow and right div for carousel activation */}
          <div
            className={styles.movilAnimationD}
            onClick={() =>
              this.animationCarouselRight(
                this.props.aux
                  ? this.state.actualCardF
                  : this.state.actualCardB,
                this.props.carouselContent.length
              )
            }
          >
            <img
              className={styles.arrows}
              src="icons/arrowR.png"
              alt="Move carousel to right side"
            />
          </div>
        </div>
      </div>
    );
  }
}
