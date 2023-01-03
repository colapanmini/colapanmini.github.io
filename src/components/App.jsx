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
      <Featurettes />
      </div>
    </div>
  );
}

export default App;
