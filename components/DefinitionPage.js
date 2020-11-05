import styles from "./DefinitionPage.module.scss";
import Link from "next/link";
import React, { Component } from "react";

export default class DefinitionPage extends Component {
  slugSyntax(link) {
    return link.split(" ").join("-");
  }
  shortURL(link) {
    return link.slice(0, 25) + "...";
  }
  
  render() {
    var finalContent = [];
    if (this.props.allContent == undefined) {
      return (
        <img
          src="/img/loading.gif"
          alt="loading gif"
          style={{
            height: "25%",
            width: "25%",
            display: "block",
            margin: "5% auto",
          }}
        />
      );
    }
    this.props.allContent.content.map((block) => {
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
                    {item.author} -{" "}
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
        <img
          className={styles.logo2}
          src={"/img/" + this.props.allContent.logo}
          alt={this.props.allContent.title + " logo"}
        />

        <div className={styles.content}>
          <h2 className={styles.title}>{this.props.allContent.title}</h2>
          {finalContent.map((block) => block)}
        </div>

        {/* Lateral Aside */}
        <div className={styles.aside}>
          <img
            className={styles.logo}
            src={"/img/" + this.props.allContent.logo}
            alt={this.props.title + " logo"}
          />
          <h3>More Content</h3>
          <div className={styles.asideContent}>
            {this.props.asideParents.map((parent, i) => (
              <div className={styles.techBlock}>
                <Link
                  href={
                    "/" + this.props.type + "/" + this.slugSyntax(parent.title)
                  }
                >
                  <a>
                    <h4>{parent.title}</h4>
                  </a>
                </Link>
                <ul>
                  {this.props.asideChildrens[i].map((child) => (
                    <Link
                      href={
                        "/" +
                        this.props.type +
                        "/" +
                        this.slugSyntax(child.title)
                      }
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
          </div>
        </div>
      </div>
    );
  }
}
