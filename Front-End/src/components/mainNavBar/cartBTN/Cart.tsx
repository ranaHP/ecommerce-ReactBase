import React from "react";
import { Navbar } from "react-bootstrap";
import {ShoppingCart, User } from "react-feather";
import { useSelector } from "react-redux";
import { RootState } from "../../../store/reducers/rootReducers";
import { IOrderItem } from "../../../Types";

const Cart : React.FC = () => {
    const checkoutList:IOrderItem [] = useSelector((state: RootState) => state.checkoutReducer.checkoutList);  
    return (
        <Navbar.Brand className="cart"> 
            <ShoppingCart size={28} />
            
            {
                checkoutList && <div className="cart-badge">{checkoutList.length}</div>
            }
        </Navbar.Brand>
    );
}
export default Cart;