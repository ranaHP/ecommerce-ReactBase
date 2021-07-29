import React from "react";
import { Col, Nav, Navbar } from "react-bootstrap";
import Cart from "./cartBTN/Cart";
import Checkout from "./checkoutBTN/Checkout";
import Logo from "./Logo/Logo";

const MainNavBar : React.FC = () => {
    return (
        <Navbar  className="main-navbar-container"   >
          <Col xs={12} sm={12} md={12} lg={10} xl={10} className="m-auto ">
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="me-auto">
                <Logo/>
              </Nav>
              <Nav>
                <Cart/>
                <Checkout/>
              </Nav>
            </Navbar.Collapse>
          </Col>
        </Navbar>
    );
}

export default MainNavBar; 