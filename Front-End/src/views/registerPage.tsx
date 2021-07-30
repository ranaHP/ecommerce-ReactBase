import React from "react";
import { Col, Container, Row,Image } from "react-bootstrap";
import CartBanner from "../assets/images/cartBanner.jpg";
import RegisterForm from "../components/registerFrom/RegisterForm";

const Register : React.FC = () => {
    return (
        <Container fluid={true}  className="p-0 login-register-container " >
            <Row>
                <Col xs={12} sm={12} md={6} lg={6} xl={6} className="d-flex justify-content-center">
                    <Image src={CartBanner} width="70%" ></Image>
                </Col>
                <Col xs={12} sm={12} md={6} lg={6} xl={6}>
                    <RegisterForm/>
                </Col>
            </Row>
        </Container>
    );
}

export default Register;