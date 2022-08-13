import React from "react";
impoty "./Photos.css";

export default function Photos(props){
if(props.photos) {
return(
    <section className="Photos">
        <div className="row">
        {props.photos.map(function(photo,index){
    return <img src={photo.src.landscape} key={index} className="img-fluid"></img>
})}
        </div>

    </section>
);
}else{
return null;
}
}

const apiKey="563492ad6f91700001000001af929b5ebc3e45d482195f958e326df3";