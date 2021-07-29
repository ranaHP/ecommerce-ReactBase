import React from "react";
import { Container, Navbar } from "react-bootstrap";
import AccountBTN from "./accountBTN/AccountBTN";
import ContactBTN from "./contactBTN/ContactBNT";
import DiliveryBTN from "./diliveryBTN/DiliveryBTN";
import LoginBNT from "./loginBTN/LoginBTN";
import RegisterBTN from "./registreBTN/RegisterBTN";

const TopNavbar : React.FC = () => {
    return (
        <Navbar expand="lg" variant="light"  className=" navbar-container">
            <Navbar.Toggle aria-controls="navbarScroll" />
            <Navbar.Collapse id="navbarScroll" className="justify-content-end">
                <ContactBTN/>
                <DiliveryBTN/>
                <AccountBTN/>
                <RegisterBTN/>
                <LoginBNT/>
            </Navbar.Collapse>
           
            
           
        </Navbar>
    );
}
export default TopNavbar;