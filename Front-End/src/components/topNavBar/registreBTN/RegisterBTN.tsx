import React from "react";
import { Button, Navbar } from "react-bootstrap";
import {Phone, Trash, Truck } from "react-feather";

const RegisterBTN : React.FC = () => {
    return (
        <Navbar.Brand> 
                <Button className="register-btn">
                    Register
                </Button>
        </Navbar.Brand>
          
    );
}
export default RegisterBTN;