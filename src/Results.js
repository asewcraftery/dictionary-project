import React from "react";
import Meaning from "./Meaning";
import Phonetics from "./Phonetics";


export default function Results(props){
    if(props.results) {
        return(
            <div className="Results">
                <h2>{props.results.word}</h2>
                {props.results.phonetics.map(function(phonetic, index) {
                    return(
                        <section key={index}>
                    <Phonetics phonetic={phonetic}/>
                    </section>
                    );
                })}
                {props.results.meanings.map(function(meaning ,index) {
                    return (
                        <ul key={index}>
                            <Meaning meaning={meaning}/>
                        </ul>     
                    )
                    }) }
            </div>  
        );
    }else{
        return null;
    }
   
}