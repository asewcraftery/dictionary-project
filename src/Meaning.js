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
                        <p><strong> Definition: </strong> {definition.definition}</p>
                        <br/>
                        <p><strong> Example: </strong>
                        <em>{definition.example}</em></p>
                        <br/>
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