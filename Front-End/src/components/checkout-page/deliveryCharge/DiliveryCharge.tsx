import React from 'react';
import { Col, Row } from 'react-bootstrap';;

const DeliveryCharge: React.FC = () => {
    return (
        <Row className="m-0 px-3" >
            <Col xs={12} sm={12} md={12} lg={12} xl={12} className="delivery-price-container px-1">
                <h6>Delivery Charge</h6>
                <span>Rs.350.00</span>
            </Col>
        </Row>
    )
}
export default DeliveryCharge;