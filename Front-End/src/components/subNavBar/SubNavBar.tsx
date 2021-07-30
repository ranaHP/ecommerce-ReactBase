import React from "react";
import { Col, Nav, Navbar, NavDropdown } from "react-bootstrap";
import CategoriesDropDown from "./categories/Categories";
import {
    Link
  } from "react-router-dom";

const SubNavBar: React.FC = () => {
    return (
       
        <Navbar  expand="lg"  className="sub-nav-bar px-3">
            <Col xs={12} sm={12} md={12} lg={10} xl={10} className="m-auto py-3  clearfix  ">  
                <Nav className="d-lg-none d-block float-left " style={{ float: "left"}}>
                    <CategoriesDropDown/>
                </Nav>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" style={{ float: "right"}} />
                <Navbar.Collapse id="responsive-navbar-nav" >
                <Nav className="">
                        <span className="d-lg-block d-none">
                        <CategoriesDropDown  />
                        </span>
                        <Link to="/"><Nav.Link href="#home">Home</Nav.Link></Link>
                        <Link to="/checkout"><Nav.Link href="#home">About Us</Nav.Link></Link>
                        <Nav.Link href="#link">FAQ</Nav.Link>
                        <Nav.Link href="#link" className="pricing">Pricing</Nav.Link>
                        <Nav.Link href="#link">Contact Us</Nav.Link>
                </Nav>
                </Navbar.Collapse>
            </Col>
        </Navbar>
    );
}
export default SubNavBar;