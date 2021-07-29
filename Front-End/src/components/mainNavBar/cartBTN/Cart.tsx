import React from "react";
import { Navbar } from "react-bootstrap";
import {ShoppingCart, User } from "react-feather";

const Cart : React.FC = () => {
    return (
        <Navbar.Brand className="cart"> 
            <ShoppingCart size={28} />
            <div className="cart-badge">33</div>
        </Navbar.Brand>
    );
}
export default Cart;