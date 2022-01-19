import React from "react";
import { Cart } from "./Cart.js";
import { SearchBar } from "./searchBar.js";
import "./header.css";
import { Link } from "react-router-dom";



function Header(){
    return (
        <div className="navbar-Container">
            <navbar className="navbar-main">
                <p className="navbar-content">Your Logo Here</p>
                <SearchBar />
                <Link to="/cart" >
                    <Cart />
                </Link>
            </navbar>
        </div>
    )
}


 export default Header;