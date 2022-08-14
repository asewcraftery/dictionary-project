import React, {useState} from "react";
import axios from "axios";
import Results from "./Results";
import "./Dictionary.css";
import Photos from "./Photos";


export default function Dictionary(props) {
let [keyword, setKeyword] = useState(props.defaultKeyWord);
let [results, setResults] =useState(null);
let [loaded, setLoaded] =useState(false);
let[photos, setPhotos] = useState([]);




  function handleResponse(response){
  setResults(response.data[0]);
  let pexelsApiKey="563492ad6f91700001000001af929b5ebc3e45d482195f958e326df3";
  let pexelsApiURL=`https://api.pexels.com/v1/search?query=${keyword}&per_page=8`;
  let headers=`{"Authorization",Bearer ${pexelsApiKey}}`
  axios.get(pexelsApiURL,`{headers:${headers}}`).then(handlePexelsResponse);

}
function handlePexelsResponse(response){
setPhotos(response.data.photos);

}
  function handleSubmit(event){
  event.preventDefault();
  search();

}

  function search(){
  let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`;
  axios.get(apiUrl).then(handleResponse);

  
}
  function handleKeywordChange(event){
  setKeyword(event.target.value)
 
}
  function load(){
  setLoaded(true);
  search();
}
    if (loaded) {
    return(
      <div className = "Dictionary">
        <section>
      <form onSubmit={handleSubmit}>
        <input 
        type="search" 
        onChange={handleKeywordChange} 
        autoFocus={true}
        placeholder="search for a word"
        defaultValue={props.defaultKeyWord}
        ></input>
      </form>
      </section>
      <section>
      <Results results={results}/>
      </section>
      <section>
        <Photos photos={photos}/>
      </section>
    </div>
    );
          
} else {
  load();
  
}
    
}    