import React from "react";
import magnifyingGlassIcon from "../images/overlay-img/magnifying-glass.png";

function Product(props) {

    const modalId = `exampleModal${props.id}`;

    return(
        <div className="col-lg-3 col-md-4 col-sm-12 individual-prod-col">
            <h3 className="medicine-name">{props.name}</h3>
            <div className="img-overlay mx-auto">
             <img className="medicine-img" src={props.img} alt={props.name} />
             <img className="magnifying-glass" data-bs-toggle="modal" data-bs-target={`#${modalId}`} src={magnifyingGlassIcon} alt="magnifying glass" />
             <div className="modal fade" id={modalId} tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
             <div className="modal-dialog modal-dialog-centered modal-lg">
                 <div className="modal-content">
                 <img src={props.img} alt="Full Sized Image" />
                 </div>
             </div>
             </div>
            </div>
        </div>
    )
}

export default Product;