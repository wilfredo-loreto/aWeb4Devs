import styles from "./definitionpage.module.scss";
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
  shortURL(link) {
    return link.slice(0, 25) + "...";
  }
  slugSyntax(link) {
    return link.split(" ").join("-");
  }

  componentDidMount() {
    Axios.get(
      `https://aweb4devsapi.herokuapp.com/aside-techs/${this.props.articleContent.type}`
    )
      .then((res) => {
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
      })
      .catch((err) => {
        throw err;
      });


      if(this.props.isArticle){
        var doc = this.props.articleContent
        var url = "http://aweb4devsapi.herokuapp.com/article/" + doc.title
        var minute = 1000 * 60 
        var newVisit = {
          title: doc.title,
          visits: doc.visits + 1,
          password: "Add 1 Visit to Our WebSite"
        }
  
        if(this.getWithExpiry("visits") == null){
         
          try {
            const saveDoc = Axios.put(url, newVisit);
            const res = (saveDoc).data;
            console.log(res);
            this.setWithExpiry("visits","true",minute)

          } catch (err) {
            console.log(err);
        
          }
          
        }
      }
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
  render() {
    var finalContent = [];
    const { asideParents } = this.state;
    const { asideChilds } = this.state;
    if (this.props.articleContent == undefined) {
      return (
        <img
          src="/img/loading.gif"
          alt="Loading"
          style={{
            height: "25%",
            width: "25%",
            display: "block",
            margin: "5% auto",
          }}
        />
      );
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
            <img
              className={styles.imageSizes}
              src={"/img/" + block.content.src}
              alt={block.content.alt}
            />
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
                <li key={"list" + i}>{item}</li>
              ))}
            </ul>
          );
          break;

        case "references":
          finalContent.push(
            <div className={styles.references}>
              <h5>References:</h5>
              <ul className={styles.list}>
                {block.content.map((item,i) => (
                  <li  key={"refs" + i}>
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
      /* Definition of articles */
      <div className={styles.mainContainer}>
        <div className={styles.content}>
          <h1 className={styles.title}>{this.props.articleContent.title}</h1>
          <img
            className={styles.imageSizes}
            src={"/img/" + this.props.articleContent.img}
            alt={""}
          />
          {finalContent.map((block) => block)}
        </div>

        {/* Aside */}
        <aside className={[styles.aside, styles.articleAside].join(" ")}>
          <h3>More Content</h3>
          <div className={styles.asideContent}>
            {this.props.relatedArticles.length != 0 ? (
              <React.Fragment>
                <h4>Related Articles</h4>
                <ul>
                  {this.props.relatedArticles.map((title,i) => (
                    <Link key={"asideArticles" + i} href={"/articles/" + this.slugSyntax(title)}>
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

            {asideParents.length > 0 ? (
              <React.Fragment>
                <h4>Related Techs</h4>
                {asideParents.map((parent, i) => (
                  <div  key={"asideTech" + i} className={styles.techBlock}>
                    <Link
                      href={
                        "/" + parent.type + "/" + this.slugSyntax(parent.title)
                      }
                    >
                      <a>
                        <h4>{parent.title}</h4>
                      </a>
                    </Link>
                    <ul>
                      {asideChilds[i].map((child, i) => (
                        <Link
                          key={"asideChildrens" + i}
                          href={
                            "/" +
                            child.type +
                            "/" +
                            this.slugSyntax(child.title)
                          }
                          key={"asideChild" + i}
                        >
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
              </React.Fragment>
            ) : null}
          </div>
        </aside>
      </div>
    );
  }
}
