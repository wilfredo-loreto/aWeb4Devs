import styles from "./ContentArticles.module.scss";
import Link from "next/link";
import React, { Component } from "react";
import ArticleCard from "./ArticleCard";
import axios from 'axios';

class ContentArticles extends Component {
  

  constructor(props) {
    super(props)
    this.state = {articles: [], optionSelected: "Most recents" };
 
  }

  componentDidMount(){

    this.setState({ articles: this.props.articles })

  }

  // Select order desplegable animation 
  showOptions() {
    var options = document.getElementById("options");
    var option1 = document.getElementById("option1");
    var option2 = document.getElementById("option2");
    var option3 = document.getElementById("option3");
    var icon = document.getElementById("icon");
    
    options.classList.toggle(styles.hide);
    icon.classList.toggle(styles.iconActive);

    if (option1.classList.item(0) == styles.option) {
      option1.classList.replace(styles.option, styles.optionHide);
      option2.classList.replace(styles.option, styles.optionHide);
      option3.classList.replace(styles.option, styles.optionHide);
    } else {
      option1.classList.replace(styles.optionHide, styles.option);
      option2.classList.replace(styles.optionHide, styles.option);
      option3.classList.replace(styles.optionHide, styles.option);
    }
  }

  // Choise new order for cards
  newOrder(x) {
    var aux = true;
    var result;
    console.log(this.state.optionSelected);
   
    console.log(this.props.articles)

    if (
      (x == 1 && this.state.optionSelected == "Most recents") ||
      (x == 2 && this.state.optionSelected == "Technology") ||
      (x == 3 && this.state.optionSelected == "Visits")
    ) {
      aux = false;
    }

    if (aux) {
  
      switch (x) {
        case 1:
          result = "Most recents";
          const newOrder = this.props.articles.sort((a,b) => {

              if(b.date.split("T")[0].split("-")[0] - a.date.split("T")[0].split("-")[0] == 0 ){

                if(b.date.split("T")[0].split("-")[1] - a.date.split("T")[0].split("-")[1] == 0 ){

                  return(b.date.split("T")[0].split("-")[2] - a.date.split("T")[0].split("-")[2])
                }else{

                  return(b.date.split("T")[0].split("-")[1] - a.date.split("T")[0].split("-")[1])

                }

              }else{

                return(b.date.split("T")[0].split("-")[0] - a.date.split("T")[0].split("-")[0])

              }
      
          })
          this.setState({ articles: newOrder })
          break;
        case 2:
          result = "Technology";
          break;
        case 3:
          result = "Visits";
     
          const newOrder1 = this.props.articles.sort((a,b) => {

            return (b.visits - a.visits)
          })

          console.log(this.props.articles)

          this.setState({ articles: newOrder1 })

          break;
      }

      this.setState({ optionSelected: result });
    }

   this.showOptions()

  }

  render(){
  
    const articles = this.state.articles
    
 
    return (
      /* ContentCards  */
      <div className={styles.globalContainer}>
        {/* Order select */}
        <div className={styles.order}>
          <span onClick={() => this.showOptions()} >Sort by:</span>
          <div className={styles.selected}>
            <span onClick={() => this.showOptions()} className={styles.showed}>
              {this.state.optionSelected}
            </span>
            <div
              id="options"
              className={[styles.options, styles.hide].join(" ")}
            >
              <span
                onClick={() => this.newOrder(1)}
                id="option1"
                className={styles.optionHide}
              >
                Most recents
              </span>
              <span
                onClick={() => this.newOrder(2)}
                id="option2"
                className={styles.optionHide}
              >
                Technology
              </span>
              <span
                onClick={() => this.newOrder(3)}
                id="option3"
                className={styles.optionHide}
              >
                Visits
              </span>
            </div>
          </div>
          <img
            id="icon"
            onClick={() => this.showOptions()}
            className={styles.icon}
            src="/icons/optionArros.png"
          />
        </div>

        {/* Article cards container */}
        <div className={styles.articlesContainer}>
          
          {articles.map((article, count) => (
          
           <ArticleCard key={count}
           data = {article} />  
         
          ))}
              
        </div>
      </div>
    );
  }

 
}

export default ContentArticles