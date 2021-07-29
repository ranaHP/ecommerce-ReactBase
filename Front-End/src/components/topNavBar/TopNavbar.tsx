import React from "react";
import {Nav, Navbar} from "react-bootstrap";
import AccountBTN from "./accountBTN/AccountBTN";
import ContactBTN from "./contactBTN/ContactBNT";
import DeliveryBTN from "./diliveryBTN/DiliveryBTN";
import LoginBNT from "./loginBTN/LoginBTN";
import RegisterBTN from "./registreBTN/RegisterBTN";

const TopNavbar: React.FC = () => {
    return (
        <Navbar expand="lg" className=" navbar-container px-4">
            <Navbar.Toggle aria-controls="responsive-navbar-nav "/>
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav>
                    <ContactBTN/>
                    <DeliveryBTN/>
                    <AccountBTN/>
                    <RegisterBTN/>
                    <LoginBNT/>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
}
export default TopNavbar;