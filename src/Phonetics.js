import React from "react";
import "./Phonetics.css";

export default function Phonetics(props){
    if(props.phonetic) {
        return(
            <div className ="Phonetic">
               
                <a href={props.phonetic.audio} 
                target="_blank" 
                rel="noreferrer">Listen</a>
             <h2>{props.phonetic.text}</h2>            
            </div>
           ); 
    }else{
    return null;
}
}