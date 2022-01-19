import React from "react";
import { ProductCard } from "./productPage/ProductCard.js"
import "./header.css";


function Body() {
    return (
        <div className="body-container">
            <navbar>
                <div>
                    <ProductCard />
                </div>
            </navbar>
        </div>
    )
}


 export default Body;