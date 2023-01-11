import React from "react";
import mekadaFront from "../images/carousel-img/mekada-front-2.jpeg";
import mekadaWh2 from "../images/carousel-img/mekada-wh-2-2.jpeg";
import mekadaWh from "../images/carousel-img/mekada-warehouse-tint-2.jpeg";

function Carousel() {
    return (
        <div id="myCarousel" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-indicators">
          <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
          <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="1" aria-label="Slide 2"></button>
          <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="2" aria-label="Slide 3"></button>
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img className="bd-placeholder-img carousel-img-custom" src={mekadaFront} aria-hidden="true" preserveAspectRatio="xMidYMid slice" focusable="false" />
    
            <div className="container">
              <div className="carousel-caption text-start carousel-custom-text">
                <h1>Example headline.</h1>
                <p>Some representative placeholder content for the first slide of the carousel.</p>
                <p><a className="btn btn-lg btn-success" href="#">Sign up today</a></p>
              </div>
            </div>
          </div>
          <div className="carousel-item">
          <img className="bd-placeholder-img carousel-img-custom" src={mekadaWh} aria-hidden="true" preserveAspectRatio="xMidYMid slice" focusable="false" />
    
            <div className="container">
              <div className="carousel-caption carousel-custom-text">
                <h1>Another example headline.</h1>
                <p>Some representative placeholder content for the second slide of the carousel.</p>
                <p><a className="btn btn-lg btn-success" href="#">Learn more</a></p>
              </div>
            </div>
          </div>
          <div className="carousel-item">
          <img className="bd-placeholder-img carousel-img-custom" src={mekadaWh2} aria-hidden="true" preserveAspectRatio="xMidYMid slice" focusable="false" />
    
            <div className="container">
              <div className="carousel-caption text-end carousel-custom-text">
                <h1>One more for good measure.</h1>
                <p>Some representative placeholder content for the third slide of this carousel.</p>
                <p><a className="btn btn-lg btn-success" href="#">Browse gallery</a></p>
              </div>
            </div>
          </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#myCarousel" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#myCarousel" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    )
}

export default Carousel;