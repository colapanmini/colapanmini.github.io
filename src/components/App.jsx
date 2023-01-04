import React from 'react';
import Header from "./Header";
import Carousel from "./Carousel";
import Featurettes from "./Featurettes";

function App() {
  return (
    <div>
      <Header />
      <Carousel />
      <div class="container marketing">
        <h1>Our Products</h1>
        <p>PT. Mekada Abadi distributes Over-The-Counter (OTC) drugs from PT. Mulia Farma Suci and PT. Mutiara Mukti Farma.</p>
      <Featurettes />
      </div>
    </div>
  );
}

export default App;
