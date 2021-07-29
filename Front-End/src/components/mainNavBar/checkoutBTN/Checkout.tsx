import React from "react";
import { Button, Navbar } from "react-bootstrap";
import {Phone, User } from "react-feather";

const Checkout : React.FC = () => {
    return (
        <Navbar.Brand className="checkout-btn "> 
                <Button >
                    Checkout
                </Button>
        </Navbar.Brand>
          
    );
}
export default Checkout;