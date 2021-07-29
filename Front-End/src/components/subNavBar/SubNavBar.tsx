import React from "react";
import { Col, Nav, Navbar } from "react-bootstrap";
import CategoriesDropDown from "./categories/Categories";

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
                        <Nav.Link href="#home">Home</Nav.Link>
                        <Nav.Link href="#link">About Us</Nav.Link>
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