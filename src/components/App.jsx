import React from 'react';
import Header from "./Header";
import Carousel from "./Carousel";
import Featurettes from "./Featurettes";
import About from "./About";
import Contact from "./Contact";
import obatMulia from "../obatmulia.js";
import Partitioner from "./Partitioner";

function App() {
  const [productButtonState, setButtonState] = React.useState("");
  return (
    <div>
      <Header />
      {productButtonState === "mulia" ? <Partitioner obatMulia={obatMulia} setButtonState={setButtonState} /> : <Carousel />}
      <div className="container marketing custom-container-featurette">
        <h1>Our Products</h1>
        <p>PT. Mekada Abadi distributes Over-The-Counter (OTC) drugs from PT. Mulia Farma Suci and PT. Mutiara Mukti Farma.</p>
      <Featurettes setButtonState={setButtonState}/>
      </div>
      <About />
      <Contact />
    </div>
  );
}

export default App;
