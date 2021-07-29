import React from 'react';
import { Col, Nav, Row } from 'react-bootstrap';
import { Facebook, Instagram, Twitter } from 'react-feather';
import Logo from '../mainNavBar/Logo/Logo';

const Footer: React.FC = () => {
    return (
        <Row className="m-0 footer p-0 m-0" >
            <Col xs={12} className="nav-container ">
                <Nav className="m-auto ">
                        <Nav.Link href="#home">Home</Nav.Link>
                        <Nav.Link href="#link">About Us</Nav.Link>
                        <Nav.Link href="#link">FAQ</Nav.Link>
                        <Nav.Link href="#link" className="pricing">Pricing</Nav.Link>
                        <Nav.Link href="#link">Contact Us</Nav.Link>
                </Nav>
            </Col>
            <Col xs={12} className="text-container ">
                <Logo/>
                <span>SoftVessel (Pvt) Ltd. </span>
                <span>60 Cotta Road, Colombo 8, </span>
                <span>Sri Lanka </span>
                <span>+94 779 510 260 </span>
                <span>+94 112 680 360 </span>
                <span>Copyright © 2020</span>
                <div className="icon">
                    <span><Facebook size={20} color={"#e8e8e8"}/></span>
                    <span><Twitter size={20} color={"#e8e8e8"}/></span>
                    
                    <span><Instagram size={20} color={"#e8e8e8"} /></span>
                </div>
               

            </Col>
        </Row>
    )
}
export default Footer;