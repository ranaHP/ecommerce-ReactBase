import React from "react";
import { Navbar } from "react-bootstrap";
import {Phone } from "react-feather";

const ContactBTN : React.FC = () => {
    return (
        <Navbar.Brand> 
                <Phone color="black" size={18} />
                +41 2283 111
        </Navbar.Brand>
          
    );
}
export default ContactBTN;