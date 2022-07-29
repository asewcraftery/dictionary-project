import React from "react";

export default function Results(props){
    if(props.results.length){
        return(
            <div className = "Results">Hello from Results</div>
        )
    }else{
        return null;
    }
   
}