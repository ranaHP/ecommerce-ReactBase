import React from "react";
import { Navbar } from "react-bootstrap";
import {Phone, Trash, Truck } from "react-feather";

const DiliveryBTN : React.FC = () => {
    return (
        <Navbar.Brand> 
                <Truck color="black" size={18} />
                Delivery Areas
        </Navbar.Brand>
          
    );
}
export default DiliveryBTN;