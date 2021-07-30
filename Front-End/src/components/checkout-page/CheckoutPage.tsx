import React from 'react';
import { Col, Row } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import { IloginDetails } from '../../store/Interfaces/inteface';
import { StoreType } from '../../store/reducers/LoginReducer';
import { RootState } from '../../store/reducers/rootReducers';
import AlreadyHaveACoount from './alreadyHaveacoount/AlreadyHaveAccount';
import CheckoutPageTable from './checkoutPageTable/CheckoutPageTable';
import CheckoutPageTitle from './checkoutTitle/CheckoutTitle';
import PaymentMethods from './paymentMethods/PaymentMethod';
import ShippingAndBillingAddress from './shippingAndBillingAddress/ShippingAndBillingAddress';

const CheckoutPage: React.FC = () => {
    const loginDetails:StoreType = useSelector((state: RootState) => state.loginReducer);  

    return (
        <Row className="m-0 checkout-page-container p-0 " >
            <Col xs={12} sm={12} md={12} lg={10} xl={10} className="checkout-page m-auto">
                <Row className="px-4">
                    <CheckoutPageTitle/>
                    <CheckoutPageTable/>
                </Row>
                {!loginDetails.loginDetails[0] &&
                     <Row className="px-4 my-3">
                        <AlreadyHaveACoount/>
                    </Row>
                }
                <Row className="px-4 my-3">
                    <ShippingAndBillingAddress/>
                </Row>
                {/* <Row className="px-4 my-3">
                    <ChangeShippingAddress/>
                </Row> */}
                <Row className="px-4 my-3">
                    <PaymentMethods/>
                </Row>
            </Col>
        </Row>
    )
}
export default CheckoutPage;