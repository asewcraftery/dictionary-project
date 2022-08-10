import React from "react";
import Synonyms from "./Synonyms";
import "./Meaning.css";

export default function Meanings(props) {
    if(props.meaning) {
        return(
            <div className ="Meaning">
            <h3> {props.meaning.partOfSpeech}</h3>
            <p>{props.meaning.definitions[0].definitions}</p>
            {props.meaning.definitions.map(function (definition, index) {
                return(
                    <section key = {index}>
                        <p>
                        <strong> Definition: </strong> {definition.definition}
                        </p>
                        <br/>
                        <strong> Example: </strong>
                        <em>{definition.example}</em>

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