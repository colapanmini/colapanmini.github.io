import React from "react";
import Product from "./Product";

function MuliaProducts(props) {
    return(
        <div class="container text-center">
         <div class="row">
            {props.obatMulia.map(element => {
                return(
                <Product key={element.id} img={element.image} name={element.name}/>
                )
            })}
         </div>
        </div>
    )
}

export default MuliaProducts;