import React from "react";
import MuliaProducts from "./MuliaProducts";
import Sidebar from "./Sidebar";
import OffcanvasMulia from "./Offcanvas";

function Partitioner(props) {

    function handleBackClick() {
        props.setButtonState("");
    }
    
    return (
    <div className="container-fluid partitioner-container">
        <button className="btn btn-dark" onClick={handleBackClick}>Back</button>
        <OffcanvasMulia />
    <div className="row">
      <div className="col-lg-3 d-none d-lg-block sidebar">
        <Sidebar />
      </div>
      <div className="col-lg-9 products">
        <MuliaProducts obatMulia={props.obatMulia}/>
      </div>
    </div>
  </div>
  )
}

export default Partitioner;