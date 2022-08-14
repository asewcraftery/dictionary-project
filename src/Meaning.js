import React from "react";
import Synonyms from "./Synonyms";
import "./Meaning.css";

export default function Meaning(props) {
    if(props.meaning) {
        return(
            <div className ="Meaning">
            <h3> {props.meaning.partOfSpeech}</h3>
            <p>{props.meaning.definitions[0].definitions}</p>
            {props.meaning.definitions.map(function (definition, index) {
                return(
                    <section key = {index}>
                        <p><strong> {definition.definition} </strong> </p>
                        <span><em>{definition.example}</em></span>
                        <Synonyms synonyms={definition.synonyms}/>
                    </section>
                );
            })}
            </div>
        );   
} else {
    return null;
}
}