import React from 'react';
import Header from "./Header";
import Carousel from "./Carousel";
import Featurettes from "./Featurettes";
import About from "./About";
import Contact from "./Contact";
import obatMulia from "../obatmulia.js";
import Partitioner from "./Partitioner";
import Footer from "./Footer";
import { useInView } from 'react-intersection-observer';
// import obatMutifa from "../obatmutifa.js";

function App() {
  const [productButtonState, setButtonState] = React.useState("");
  const [ ref, inView ] = useInView({
    /* Optional options */
    threshold: 0,
  });
  return (
    <div>
      <Header setButtonState={setButtonState} />
      {productButtonState === "mulia" ? <Partitioner obatMulia={obatMulia} setButtonState={setButtonState} /> : <Carousel />}
      {productButtonState === "mulia" ? null : <div id="featurettes" className="container marketing custom-container-featurette">
        <div className="spacer"></div>
        <div ref={ref} className={`hidden-animation ${inView ? "show" : ""}`}>
        <h1 classsName="product-title">Our Products</h1>
        <p>PT. Mekada Abadi distributes Over-The-Counter (OTC) drugs from PT. Mulia Farma Suci and PT. Mutiara Mukti Farma.</p>
        <br/>
      <Featurettes setButtonState={setButtonState}/>
        </div>
      </div>}
      {productButtonState === "mulia" ? null : <About />}
      {productButtonState === "mulia" ? null : <Contact/>}
      <Footer />
    </div>
  );
}

export default App;
