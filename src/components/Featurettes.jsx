import React from "react";
import omestan from "../images/featurette-img/omestan.jpg";
import viboost from "../images/featurette-img/viboost.jpg";

function Featurettes(props) {
  
  function handleClickMulia() {
    props.setButtonState("mulia");
  }

  function handleClickMutifa() {
    props.setButtonState("mutifa");
  }
  
    return (

        <div className="row">
          <div className="col-lg-6">
            <img className="bd-placeholder-img rounded-circle" width="140" height="140" src={viboost} aria-label="Placeholder: 140x140" alt="viboost health-supplement" />
    
            <h2 className="fw-normal">PT. Mulia Farma Suci</h2>
            <p>Browse PT. Mulia Farma Suci's products.</p>
            <p><button className="btn btn-secondary" onClick={handleClickMulia}>Products &raquo;</button></p>
          </div>
          <div className="col-lg-6">
          <img className="bd-placeholder-img rounded-circle" width="140" height="140" src={omestan} aria-label="Placeholder: 140x140" alt="omestan anagelsic anagelsik" />
    
            <h2 className="fw-normal">PT. Mutifa</h2>
            <p>Browse PT. Mutiara Mukti Farma's products.</p>
            <p><button className="btn btn-secondary" onClick={handleClickMutifa}>Products &raquo;</button></p>
          </div>
        </div>
    )
}

export default Featurettes;