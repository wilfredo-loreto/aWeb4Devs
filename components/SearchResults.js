import styles from "./SearchResults.module.scss";
import ResultCard from "./ResultCard";
import Link from "next/link";
import React, { Component } from "react";

export default class SearchResults extends Component{

    render(){
        return(
            /* Results Page */
            <div className={styles.mainContainer}>
            <span className={styles.resultsFound}>4 results found</span>
            
            {/* Result List */}
            <div className={styles.container}>
                <ResultCard/>
                <ResultCard/>
                <ResultCard/>
                <ResultCard/>
                <ResultCard/>
            </div>

            {/* Results no found */}
            <div className={styles.noResults} >

            <img src="/img/sad.png"/>
            <span>Opss... <br/> No results found <br/> Try with another keywords</span>
            </div>

            </div>
        )
    }
}

