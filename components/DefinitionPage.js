import styles from "./DefinitionPage.module.scss";
import Link from "next/link";
import React, { Component } from "react";

export default class DefinitionPage extends Component {
  componentDidMount() {
    console.log(this.props.allContent.content.type);
  }
  render() {
    var finalContent = [];
    this.props.allContent.content.map((block) => {
      var i;
      switch(block.type){
       

        case "subtitle":
          finalContent.push(<h2 className={styles.subtitle}>{block.content}</h2>);
          break

        case "image":
          finalContent.push( <img src={block.content.src} alt={block.content.alt} />)
          break

        case "text":
          for(i=0;i<=block.content.length - 1;i++)
          finalContent.push(<p>{block.content[i]}</p>);
          break

        case "list":
         
          finalContent.push(
            <ul>
              {block.content.map((item)=>(
                <li>{item}</li>
              ))}
            </ul>
          )
          break
        
        case "references":
          finalContent.push(
            <div className={styles.references}>
              <h5>References:</h5>
              <ul>
              {block.content.map((item)=>(
                <li>{item.author}<a href={item.link} target="_blank">{item.link}</a></li>
                ))}
              </ul>
            </div>
          )
        

        
      }
    });
    console.log(finalContent);
    return (
      /* Definition of technologies */
      <div className={styles.mainContainer}>
        <img className={styles.logo2} src={this.props.allContent.logo} />
        <div className={styles.content}>
          <h2 className={styles.title}>{this.props.allContent.title}</h2>
          {finalContent.map((block) => block)}

          
        </div>

        {/* Lateral Aside */}
        <div className={styles.aside}>
          <img className={styles.logo} src={this.props.allContent.logo} />
          <h3>More Content</h3>
          <div className={styles.asideContent}>
            <h4>HTMl</h4>
            <ul>
              <Link href="/">
                <a>
                  <img className={styles.arrow} src="/icons/listarrow.svg" />
                  <li>
                    5 tips de javascript para desarrolladores de alto nivel
                    imperdibles
                  </li>
                </a>
              </Link>
            </ul>
            <h4>CSS</h4>
            <ul>
              <Link href="/">
                <a>
                  <img className={styles.arrow} src="/icons/listarrow.svg" />
                  <li>Definition</li>
                </a>
              </Link>
            </ul>
            <h4>JS</h4>
            <ul>
              <Link href="/">
                <a>
                  <img className={styles.arrow} src="/icons/listarrow.svg" />
                  <li>React</li>
                </a>
              </Link>

              <Link href="/">
                <a>
                  <img className={styles.arrow} src="/icons/listarrow.svg" />
                  <li>React</li>
                </a>
              </Link>

              <Link href="/">
                <a>
                  <img className={styles.arrow} src="/icons/listarrow.svg" />
                  <li>React</li>
                </a>
              </Link>

              <Link href="/">
                <a>
                  <img className={styles.arrow} src="/icons/listarrow.svg" />
                  <li>React</li>
                </a>
              </Link>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}
