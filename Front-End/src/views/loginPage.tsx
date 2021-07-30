import React from "react";
import { Col, Container, Row,Image } from "react-bootstrap";
import LoginForm from "../components/loginFrom/LoginForm";
import CartBanner from "../assets/images/cartBanner.jpg";
const Login : React.FC = () => {
return (
    <Container fluid={true}  className="p-0 login-register-container" >
        <Row>
            <Col xs={12} sm={12} md={6} lg={6} xl={6} className="d-flex justify-content-center" >
                <Image src={CartBanner}  width="70%" className="m-auto text-center"></Image>
            </Col>
            <Col xs={12} sm={12} md={6} lg={6} xl={6}>
                <LoginForm/>
            </Col>
        </Row>
    </Container>
);
}

export default Login;