import React from 'react';
import { Col, Nav, Row } from 'react-bootstrap';
import AlreadyHaveACoount from './alreadyHaveacoount/AlreadyHaveAccount';
import ChangeShippingAddress from './changeShippingAddress/ChangeShippingAddress';
import CheckoutPageTable from './checkoutPageTable/CheckoutPageTable';
import CheckoutPageTitle from './checkoutTitle/CheckoutTitle';
import ShippingAndBillingAddress from './shippingAndBillingAddress/ShippingAndBillingAddress';

const CheckoutPage: React.FC = () => {
    return (
        <Row className="m-0 checkout-page-container p-0 " >
            <Col xs={12} sm={12} md={12} lg={10} xl={10} className="checkout-page m-auto">
                <Row className="px-4">
                    <CheckoutPageTitle/>
                    <CheckoutPageTable/>
                </Row>
                <Row className="px-4 my-3">
                    <AlreadyHaveACoount/>
                </Row>
                <Row className="px-4 my-3">
                    <ShippingAndBillingAddress/>
                </Row>
                <Row className="px-4 my-3">
                    <ChangeShippingAddress/>
                </Row>
            </Col>
        </Row>
    )
}
export default CheckoutPage;