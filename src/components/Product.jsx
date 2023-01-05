import React from "react";

function Product(props) {
    return(
        <div class="col">
            <h3>{props.name}</h3>
            <img className="medicine-img" src={props.image} alt={props.name} />
            <img src="https://kmallph.com/data/item/2000000392/SAMYANGCarbonaraHotChickenRamensmallCup70g.jpg" />
        </div>)
}

export default Product;