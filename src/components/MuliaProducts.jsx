import React from "react";
import Product from "./Product";

function MuliaProducts(props) {
    return(
        <div className="container text-center">
         <div className="row">
            {props.obatMulia.map((element, index) => {
                return(
                <Product key={element.id} id={index} img={element.source} name={element.name} composition={element.composition} categories={element.categories} packaging={element.packaging} type={element.type}/>
                )
            })}
         </div>
        </div>
    )
}

export default MuliaProducts;