import React from 'react';
import { Col, Nav, Row } from 'react-bootstrap';;

const EstTotalPrice: React.FC = () => {
    return (
        <Row className="m-0 px-3 " >
            <Col xs={12} sm={12} md={12} lg={12} xl={12} className="est-total-container m-auto px-1">
                <h6>Est.Total</h6>
                <span>Rs.1,110.00</span>
            </Col>
        </Row>
    )
}
export default EstTotalPrice;