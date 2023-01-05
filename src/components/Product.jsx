import React from "react";
import magnifyingGlassIcon from "../images/overlay-img/magnifying-glass.png";

function Product(props) {

    const modalId = `exampleModal${props.id}`;

    return(
        <div className="col">
            <h3>{props.name}</h3>
            <div className="img-overlay">
             <img className="medicine-img" src={props.img} alt={props.name} />
             <img className="magnifying-glass" data-bs-toggle="modal" data-bs-target={`#${modalId}`} src={magnifyingGlassIcon} alt="magnifying glass" />
             <div class="modal fade" id={modalId} tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
             <div class="modal-dialog modal-dialog-centered modal-lg">
                 <div class="modal-content">
                 <img src={props.img} alt="Full Sized Image" />
                 </div>
             </div>
             </div>
            </div>
        </div>
    )
}

export default Product;