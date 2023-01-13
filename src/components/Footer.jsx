import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleUp } from '@fortawesome/free-solid-svg-icons';

function Footer() {
    return (
        <footer className="container-fluid text-center custom-footer">
        <h2><a className="footer-btn btn btn-dark btn-lg" href="#"><FontAwesomeIcon icon={faAngleUp} /></a></h2>
        <div className="container-fluid">
        <div className="row">
        <div className="col-md-6 col-sm-12 align-self-center">
        <p>&copy; 1950–2023 PT. Mekada Abadi</p>
        </div>
        <div className="col-md-6 col-sm-12">
        <div className="container-fluid">
        <p><strong>PT. Mekada Abadi</strong></p>
        <p>Jl. Kapten Muslim No. 235</p>
        <p>Helvetia Tengah, Kec. Medan Helvetia, Kota Medan, Sumatera Utara 20124</p>
        <p>☏ (061) 8471900 (Hunting)</p>
        <p>🖷 (061) 8476250 (Fax)</p>
        </div>
        </div>
        </div>
        </div>
      </footer>
    )
}

export default Footer;