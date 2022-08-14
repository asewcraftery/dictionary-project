import React from "react";
import "./Photos.css";

export default function Photos(props) {
if(props.photos.length) {
return(
    <section className="Photos">
        <div className="row">
        {props.photos.map(function(photo,index) {
         return(
        <div className="col-4"key={index}> 
            <a 
            href={photo.src.original} 
            class="img-fluid"
            target="_blank"
            rel="noopener noreferrer"
            >
            <img 
            src={photo.src.landscape} 
            key={index} 
            className="img-fluid"
            alt={photo.photographer}
            />
            </a>
         </div> 
         );         
        })}
        </div>
   </section>
    );
}else{
return null;
}
}