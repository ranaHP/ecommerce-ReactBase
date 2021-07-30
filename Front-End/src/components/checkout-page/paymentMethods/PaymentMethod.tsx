import React from 'react';
import { Col,  Image, Form,Row, InputGroup, FormControl, Button } from 'react-bootstrap';
import DollarImage from "../../../assets/images/payment-method/dollar-bill.svg";
import CrediCardImage from "../../../assets/images/payment-method/creditCard.png";
const PaymentMethods: React.FC = () => {
    return (
        <Col xs={12} sm={12} md={12} lg={7} xl={7} className="payment-methods-container">
               <div className="title-container">
                    <span>Payment Methods</span>
               </div>
               <Row className="d-flex">
                    <Col xs={6} sm={6} md={6} lg={6} xl={6} className="credit-debit-cart-contaienr" >
                        <div className="credit-debit-cart">
                            <Image src={CrediCardImage} fluid={true} width="100px" className="m-auto"></Image>
                            <span>
                                Credit/Debit Card
                            </span>
                        </div>
                    </Col>
                    <Col  xs={6} sm={6} md={6} lg={6} xl={6} className="cash-on-delivery-contaienr" >
                        <div className="cash-on-delivery">    
                            <Image src={CrediCardImage} fluid={true} width="100px" className="m-auto"></Image>
                            <span>
                                Cash on Delivery
                            </span>
                        </div>
                    </Col>
                    <Button>
                        Order
                    </Button>
                </Row>
        </Col>
    )
}
export default PaymentMethods;