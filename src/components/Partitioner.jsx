import React from "react";
import MuliaProducts from "./MuliaProducts";
import Sidebar from "./Sidebar";
import OffcanvasMulia from "./Offcanvas";
import PaginationComponent from "./PaginationComponent";
import { useInView } from 'react-intersection-observer';

function Partitioner(props) {

    const [currentPage, setCurrentPage] = React.useState(1);
    const [prodPerPage, setProdPerPage] = React.useState(12);
    const [productArray, setProductArray] = React.useState(props.obatMulia);
    const [ ref1, inView1 ] = useInView({
      /* Optional options */
      threshold: 0,
    });

    function handleBackClick() {
        props.setButtonState("");
        window.location.reload();
    }

    const indexOfLastProd = currentPage * prodPerPage;
    const indexOfFirstProd = indexOfLastProd - prodPerPage;
    const currentProd = productArray.slice(indexOfFirstProd, indexOfLastProd);

    // console.log(props.obatMulia);
    // console.log(productArray);
    // console.log(currentProd);
    // console.log(currentPage);
    
    return (
    <div ref={ref1} className={`container-fluid partitioner-container hidden-animation ${inView1 ? "show" : ""}`}>
        <button className="btn btn-dark" onClick={handleBackClick}>Back</button>
        <OffcanvasMulia />
     <div className="row">
      <div className="col-lg-3 d-none d-lg-block sidebar">
        <Sidebar obatMulia={props.obatMulia} setProductArray={setProductArray} setCurrentPage={setCurrentPage}/>
      </div>
      <div className="col-lg-9 products">
        <MuliaProducts obatMulia={currentProd}/>
        <PaginationComponent prodPerPage={prodPerPage} totalProd={productArray.length} setCurrentPage={setCurrentPage} />
      </div>
     </div>
    </div>
  )
}

export default Partitioner;