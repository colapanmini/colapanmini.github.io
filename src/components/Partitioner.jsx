import React from "react";
import MuliaProducts from "./MuliaProducts";
import Sidebar from "./Sidebar";
import OffcanvasMulia from "./Offcanvas";
import PaginationComponent from "./PaginationComponent";

function Partitioner(props) {

    const [currentPage, setCurrentPage] = React.useState(1);
    const [prodPerPage, setProdPerPage] = React.useState(12);

    function handleBackClick() {
        props.setButtonState("");
        window.location.reload();
    }

    const indexOfLastProd = currentPage * prodPerPage;
    const indexOfFirstProd = indexOfLastProd - prodPerPage;
    const currentProd = props.obatMulia.slice(indexOfFirstProd, indexOfLastProd);
    
    return (
    <div className="container-fluid partitioner-container">
        <button className="btn btn-dark" onClick={handleBackClick}>Back</button>
        <OffcanvasMulia />
     <div className="row">
      <div className="col-lg-3 d-none d-lg-block sidebar">
        <Sidebar />
      </div>
      <div className="col-lg-9 products">
        <MuliaProducts obatMulia={currentProd}/>
        <PaginationComponent prodPerPage={prodPerPage} totalProd={props.obatMulia.length} setCurrentPage={setCurrentPage} />
      </div>
     </div>
    </div>
  )
}

export default Partitioner;