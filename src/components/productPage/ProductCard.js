import React, {useEffect, useState} from "react";
import "./productCard.css"
import { useSelector, useDispatch } from "react-redux";
import styled from "styled-components";
import { addToCart, fetchImages } from "../redux/actions";




const Button = styled.button`
    width: 100px;
    height: 40px;
    margin: 5px;
    padding: 0;
    float: ${props => props.float};
    border: 1px solid black;
    border-radius: 2px;
    background-color: orange;
`

export const ProductCard = () => {
    let price;
    const dispatch = useDispatch()

    function randomNumber() {
       price =  Math.floor(Math.random() * 3000) + 100;
       return price;
    }

    const handleClick = (itemId) => {
        let productprice = document.getElementById(itemId).innerText;
        dispatch(addToCart(productprice))
    }


    useEffect(() => 
        {dispatch(fetchImages())}, []
    )
    const state = useSelector(state => state.fetchImages)
    const payload = state.payload
    return (
    <div>
        {state.loading ? 
        'loading..': state.error ? 
        state.payload.message : payload.map(
            item =>  item.id < 10 && (
            <div>
                <div className="productCard-container">
                    <div className="product-img">
                        <img src={item.thumbnailUrl} />
                    </div>
                    <div className="description-container">
                        <div className="product-description">
                            {item.title}
                        </div>
                        <div className="product-pricetag">
                            <h3 id={item.id}>${randomNumber()}</h3>
                            <small>Free Delivery. No Cost EMI Starting at ${(price/12).toFixed(2)}/month.</small>
                        </div>
                    </div>
                </div>
                <Button float="left" onClick={() => handleClick(item.id)}>ADD TO CART</Button>
                <Button float="right">BUY NOW</Button>
            </div>
        ))} 
        
        
    </div>
    )
}