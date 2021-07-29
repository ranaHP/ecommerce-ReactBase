import React from "react";
import { Col, Row, Image, Button } from "react-bootstrap";
import logoImage from "../../assets/images/logo4.png";
import heroBanner from "../../assets/images/hero2.jpg";

const HeroBanner : React.FC = () => {
    return (
        <Row className="hero-banner m-0">
            <Image src={heroBanner} fluid className="image-container p-0" />
            <Col xs={5} sm={5} md={5} lg={5} xl={5} className="text-container" >
                <Image src={logoImage} className="image" />
                <span className="title-1">
                    100% Healthy & Affordable
                </span>

                <span className="title-2">
                Organic Vegetables
                </span>
                
                <span className="title-3">
                Small Changes Big Difference
                </span>
                <Button>
                    Shop Now
                </Button>
            </Col>
        </Row>
    );
}

export default HeroBanner;