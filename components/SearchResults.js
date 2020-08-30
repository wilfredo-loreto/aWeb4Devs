import styles from "./SearchResults.module.scss";
import ResultCard from "./ResultCard";
import Link from "next/link";
import React, { Component } from "react";

export default class SearchResults extends Component{

    render(){
        return(

            <div className={styles.mainContainer}>
            <span>4 results found</span>
            <div className={styles.container}>
                <ResultCard/>
                <ResultCard/>
                <ResultCard/>
                <ResultCard/>
                <ResultCard/>
            </div>

            <div className={styles.noResults} >

            <img src="/images/sad.png"/>
            <span>Opss... <br/> No results found <br/> Try with another keywords</span>
            </div>

            </div>
        )
    }
}

