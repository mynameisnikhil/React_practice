import React, {useState} from "react";
import { useSelector } from "react-redux";
import "./cart.css"


export const Cart = () => {
    const state = useSelector(state => state.addItemToCart)

    return (
        <div>
            <div class="cart-container">
            <div class="cart-items-container">
                
            </div>
            <div class="cart-price-container">
            <div class="price-title upper-title">
            <h2>Price Details</h2>
            </div>
            <div class="details-container lower-title">
            <h3 class="detail-name">Price (item)</h3>

            <h3 class="exact-detail">{state.payload}</h3>
            </div>
            <div class="details-container lower-title">
            <h3 class="detail-name">saving</h3>

            <h3 class="exact-detail">2000</h3>
            </div>
            <div class="details-container lower-title">
            <h3 class="detail-name">Delivery Charge</h3>

            <h3 class="exact-detail">FREE</h3>
            </div>
            <div class="saving-detail upper-title">
            <p>You have saved Rs. 2500 and got a free delivery too :)</p>
            </div>
        </div>
        </div>
        <div class="checkout-button-container lower-title">
            <h2 class="checkout-price">Price 340</h2>
            <button class="checkout-button">CHECKOUT</button>
        </div>
        </div>
    )
}