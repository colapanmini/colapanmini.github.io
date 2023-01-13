import React from "react";
import logomekada from "../images/navbar-img/logo-mekada-3.png";

function Header() {
    return (
       <header>
          <nav className="navbar navbar-expand-md navbar-dark fixed-top navbar-customization">
            <div className="container-fluid">
              <a className="navbar-brand navbar-brand-customization" href="#"><span><img className="mekada-logo" src={logomekada} alt="Logo PT Mekada Abadi" /></span>Mekada Abadi</a>
              <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse" id="navbarCollapse">
                <ul className="navbar-nav ms-auto mb-2 mb-md-0">
                  <li className="nav-item">
                    <a className="nav-link active" aria-current="page" href="#featurettes">Products</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#about">About</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#contact">Contact</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link disabled">Offers</a>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
       </header>
    )
}

export default Header;