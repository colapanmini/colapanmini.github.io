import React from "react";
import MuliaProducts from "./MuliaProducts";
import Sidebar from "./Sidebar";
import OffcanvasMulia from "./Offcanvas";
import PaginationComponent from "./PaginationComponent";
import { useInView } from 'react-intersection-observer';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLeftLong } from '@fortawesome/free-solid-svg-icons';

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

    // Filter Clear Confirmer
    let buttonDisabled = true;
    if(props.obatMulia.length !== productArray.length) {
      buttonDisabled = false;
    } else {
      console.log("no filters yet");
    }
    
    return (
      <div className="container-fluid partitioner-container">
        <button className="btn btn-dark back-button" onClick={handleBackClick}><FontAwesomeIcon icon={faLeftLong} /></button>
    <div>
        <div ref={ref1} className={`hidden-animation ${inView1 ? "show" : ""}`}>
        <h1 className="product-heading">PT. Mulia Farma Suci's Products</h1>
        <hr className="divider"/>
        </div>
        <OffcanvasMulia buttonDisabled={buttonDisabled} obatMulia={props.obatMulia} setProductArray={setProductArray} setCurrentPage={setCurrentPage} />
     <div className="row">
      <div className="col-lg-3 d-none d-lg-block sidebar">
        <Sidebar buttonDisabled={buttonDisabled} obatMulia={props.obatMulia} setProductArray={setProductArray} setCurrentPage={setCurrentPage}/>
      </div>
      <div className="col-lg-9 products">
        {productArray.length === 0 ? <h1 className="no-result text-center">No results found.</h1> : <MuliaProducts obatMulia={currentProd}/>}
        {productArray.length === 0 ? null : <PaginationComponent currentPage={currentPage} prodPerPage={prodPerPage} totalProd={productArray.length} setCurrentPage={setCurrentPage} />}
      </div>
     </div>
    </div>
    </div>
  )
}

export default Partitioner;