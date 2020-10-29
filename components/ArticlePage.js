import styles from "./DefinitionPage.module.scss";
import Link from "next/link";
import React, { Component } from "react";
import Axios from "axios";

export default class ArticlePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      asideParents: [],
      asideChilds: [],
    };
  }
  shortURL(link){
    return link.slice(0,25) + "..."
  }
  slugSyntax(link) {
    return link.split(" ").join("-");
  }
  
  componentDidMount() {
    Axios.get(
      `https://aweb4devsapi.herokuapp.com/aside-techs/${this.props.articleContent.type}`
    ).then((res) => {
      var childrens = res.data.techs;

      var parents = [];
      var i = 0;
      while (childrens[i].parent == "") {
        i++;
      }
      parents = childrens.splice(0, i);

      var orderedChildrens = [];
      for (i = 0; i < parents.length; i++) {
        orderedChildrens[i] = [];
      }
      var j = 0;
      var band = true;
      for (i = 0; i <= childrens.length - 1; i++) {
        band = true;
        while (parents[j].title != childrens[i].parent && band) {
          j++;
          if (parents[j] == undefined) {
            band = false;
          }
        }

        orderedChildrens[j].push(childrens[i]);
      }
      this.setState({ asideParents: parents, asideChilds: orderedChildrens });
    }).catch((err)=>{throw err;});
  }
  render() {
    var finalContent = [];
    const { asideParents } = this.state;
    const { asideChilds } = this.state;
    if (this.props.articleContent == undefined) {
      return <img src="/img/loading.gif" alt="Loading" style={{height:"25%",width:"25%",display:"block",margin:"5% auto"}}/>;
    }
    this.props.articleContent.content.map((block) => {
      var i;
      switch (block.type) {
        case "subtitle":
          finalContent.push(
            <h2 className={styles.subtitle}>{block.content}</h2>
          );
          break;

        case "image":
          finalContent.push(
            <img className={styles.imageSizes} src={"/img/" + block.content.src} alt={block.content.alt} />
          );
          break;

        case "text":
          for (i = 0; i <= block.content.length - 1; i++)
            finalContent.push(<p>{block.content[i]}</p>);
          break;

        case "list":
          finalContent.push(
            <ul className={styles.list}>
              {block.content.map((item, i) => (
                <li>{item}</li>
              ))}
            </ul>
          );
          break;

        case "references":
          finalContent.push(
            <div className={styles.references}>
              <h5>References:</h5>
              <ul className={styles.list}>
                {block.content.references.map((item) => (
                  <li>
                    {item.author + " - "}
                    <a href={item.link} target="_blank">
                      {this.shortURL(item.link)}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          );
      }
    });

    return (
      /* Definition of technologies */
      <div className={styles.mainContainer}>
        <img className={styles.logo2} src={"/img/"+this.props.articleContent.logo} alt={this.props.articleContent.title + " logo"}/>
        <div className={styles.content}>
          <h2 className={styles.title}>{this.props.articleContent.title}</h2>
          <img className={styles.imageSizes} src={"/img/" + this.props.articleContent.img} alt={""}/>
          {finalContent.map((block) => block)}
        </div>

        {/* Aside */}
        <div className={[styles.aside, styles.articleAside].join(" ")}>
          <h3>More Content</h3>
          <div className={styles.asideContent}>
            {this.props.relatedArticles.length != 0 ? (
              <React.Fragment>
                <h4>Related Articles</h4>
              <ul>
                {this.props.relatedArticles.map((title) => (
                  <Link href={"/articles/" + this.slugSyntax(title)}>
                    <a>
                      <div>
                        <img
                          className={styles.arrow}
                          src="/icons/listarrow.svg"
                          alt=""
                        />
                        <li>{title}</li>
                      </div>
                    </a>
                  </Link>
                ))}
              </ul>
              </React.Fragment>
            ) : null}
            
            {asideParents.length>0 ? (

            
            <React.Fragment>
            <h4>Related Techs</h4>
            {asideParents.map((parent, i) => (
              <div className={styles.techBlock}>
                <Link href={"/" + parent.type + "/" + this.slugSyntax(parent.title) }>
                  <a>
                    <h4>{parent.title}</h4>
                  </a>
                </Link>
                <ul>
                  {asideChilds[i].map((child) => (
                    <Link href={"/" + child.type + "/" + this.slugSyntax(child.title)}>
                      <a>
                        <img
                          className={styles.arrow}
                          src="/icons/listarrow.svg"
                          alt=""
                          />
                        <li>{child.title}</li>
                      </a>
                    </Link>
                  ))}
                </ul>
              </div>
              ))}
              </React.Fragment>):null}
          </div>
        </div>
      </div>
    );
  }
}
