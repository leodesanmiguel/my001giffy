import React, { useEffect, useState } from "react";
import "./App.css";
import getGifs from "./services/getGifs";
import Gif from "./components/Gif";
function App() {
  const [gifs, setGifs] = useState([]);

  useEffect(function() {
    getGifs({ keyword: "developper" }).then(gifs => setGifs(gifs));
  }, []);

  return (
    <div className="App">
      <section className="App-content">
        {gifs.map(({id, title, url}) =>
          <Gif 
          key={id}
          title={title} 
          url={url} 
          id={id} />
        )}
      </section>
    </div>
  );
}

export default App;
