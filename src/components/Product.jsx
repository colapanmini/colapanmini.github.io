import React from "react";
import magnifyingGlassIcon from "../images/overlay-img/magnifying-glass.png";

function Product(props) {

    // Magni Glass Modal Id Target
    const modalId = `exampleModal${props.id}`;
    // Img Modal Id Target
    const imgTriggerModalId = `imgModal${props.id}`;

    return(
        <div className="col-lg-3 col-md-4 col-sm-12 individual-prod-col">
            <h3 className="medicine-name">{props.name}</h3>
            <div className="img-overlay mx-auto">
             <img className="medicine-img" data-bs-toggle="modal" data-bs-target={`#${imgTriggerModalId}`} src={props.img} alt={props.name} />
             {/* Img Trigger Modal */}
             <div className="modal fade" id={imgTriggerModalId} tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
               <div className="modal-dialog modal-dialog-centered modal-lg">
                 <div className="modal-content">
                   <div className="modal-header">
                     <h1 className="modal-title fs-5 w-100" id="exampleModalLabel"><strong>{props.name}</strong></h1>
                     <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                   </div>
                   <div className="modal-body">
                    <div className="row">
                   <div className="col-5 align-self-center">
                   <img className="medicine-img-modal" src={props.img} alt={props.name} />
                   </div>
                   <div className="col-7 align-self-center">
                   <div className="info-wrapper">
                    <p><strong>Composition (ZAT API): </strong>{props.composition}</p>
                    <p><strong>Packaging: </strong>{props.packaging}</p>
                    <p><strong>Categories: </strong>{props.categories}</p>
                    <p><strong>Type: </strong>{props.type}</p>
                   </div>
                   </div>
                   </div>
                   </div>
                   <div className="modal-footer">
                     <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                   </div>
                 </div>
               </div>
             </div>
             <img className="magnifying-glass" data-bs-toggle="modal" data-bs-target={`#${modalId}`} src={magnifyingGlassIcon} alt="magnifying glass" />
             {/* Magni Glass Toggle Modal */}
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