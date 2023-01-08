import React from "react";
import MuliaProducts from "./MuliaProducts";
import Sidebar from "./Sidebar";
import OffcanvasMulia from "./Offcanvas";
import Pagination from "./Pagination";

function Partitioner(props) {

    const [currentPage, setCurrentPage] = React.useState(1);
    const [prodPerPage, setProdPerPage] = React.useState(10);

    function handleBackClick() {
        props.setButtonState("");
        window.location.reload();
    }

    //change page
    //captures the pageNumber as argument from Pagination component, which is number in Pagination comp
    const paginate = pageNumber => setCurrentPage(pageNumber);

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
        <Pagination prodPerPage={prodPerPage} totalProd={props.obatMulia.length} paginate={paginate} />
      </div>
     </div>
    </div>
  )
}

export default Partitioner;