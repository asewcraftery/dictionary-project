
import './App.css';
import Dictionary from "./Dictionary";

function App() {
  return (
    <div className="App">
     <div className ="container">
    <h1>Dictionary App</h1>
      <main>
        <Dictionary defaultKeyWord="cat"/>
      </main>
      
      <footer>
<p>Coded by Anna Brandon and hosted on <a href="">github</a> and <a href="https://playful-pixie-01111e.netlify.app/">netlify</a></p>
      </footer>
      </div>
    </div>
  );
}

export default App;
