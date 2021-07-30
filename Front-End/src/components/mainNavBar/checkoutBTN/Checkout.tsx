import React from "react";
import { Button, Navbar } from "react-bootstrap";
import {Phone, User } from "react-feather";
import { useHistory } from "react-router-dom";

const Checkout : React.FC = () => {
    const history = useHistory();
    return (
        <Navbar.Brand className="checkout-btn "> 
                <Button onClick={() => {
                    history.push("/checkout")
                }} >
                    Checkout
                </Button>
        </Navbar.Brand>
          
    );
}
export default Checkout;