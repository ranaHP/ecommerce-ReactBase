import React from 'react';
import { Col, Image, Form,Row, InputGroup, FormControl } from 'react-bootstrap';
import SrilanakanFlagImage from "../../../assets/images/srilankanFlag/sri-lanka.png"
const ShippingAndBillingAddress: React.FC = () => {
    return (
        <Col xs={12} sm={12} md={12} lg={7} xl={7} className="shipping-billing-address">
               <div className="title-container">
                    <span>Shipping and Billing Address</span>
               </div>
                <Form>
                    <Form.Group className="" controlId="formBasicEmail">
                        <Form.Label>Full Name*</Form.Label>
                        <Form.Control type="text" placeholder="Your Full Name" />
                    </Form.Group>
                    <Form.Group className="" controlId="formBasicEmail">
                        <Form.Label>Address*</Form.Label>
                        <Form.Control type="text" placeholder="Street Address"/>
                    </Form.Group>

                    <Row className="">
                        <Col xs={12} sm={12} md={4} lg={4} xl={4}>
                            <Form.Group as={Col}  controlId="formBasicEmail">
                                <Form.Label>City / suburb*</Form.Label>
                                <Form.Control type="text" placeholder="City / suburb"/>
                            </Form.Group>
                        </Col>
                        <Col xs={12} sm={12} md={4} lg={4} xl={4}>
                            <Form.Group as={Col} className="" controlId="formBasicEmail">
                                <Form.Label>Postal Code*</Form.Label>
                                <Form.Control type="text" placeholder="Postal Code"/>
                            </Form.Group>
                        </Col>
                        <Col xs={12} sm={12} md={4} lg={4} xl={4}>
                            <Form.Group as={Col} className="" controlId="formBasicEmail">
                                <Form.Label>Country*</Form.Label>
                                <Form.Control type="text" />
                            </Form.Group>
                        </Col>

                    </Row>
                    <Row>
                        <Form.Label  className="px-3">Contact Number*</Form.Label>
                        <InputGroup>
                            <InputGroup.Text id="basic-addon2" ><Image src={SrilanakanFlagImage} width="30px"></Image> &nbsp; +94</InputGroup.Text>
                            <FormControl
                           
                            aria-label="Recipient's username"
                            aria-describedby="basic-addon2"
                            type="number"
                            
                            />
                            
                        </InputGroup>
                    </Row>
                   
                    <Row className="">
                        <Form.Group as={Col} className="" controlId="formBasicEmail">
                            <Form.Label>Email*</Form.Label>
                            <Form.Control type="email" placeholder="Email" />
                        </Form.Group>
                        <Form.Group as={Col} className="" controlId="formBasicEmail">
                            <Form.Label>Retype Email*</Form.Label>
                            <Form.Control type="email" />
                        </Form.Group>
                    </Row>
                   
                   

                    <Form.Group className="" controlId="formBasicPassword">
                        <Form.Label>Choose your password*</Form.Label>
                        <Form.Control type="password" />
                    </Form.Group>
                    {/* <Form.Group className="" controlId="formBasicCheckbox">
                        <Form.Check type="checkbox" label="Check me out" />
                    </Form.Group> */}
                    
                </Form>
        </Col>
    )
}
export default ShippingAndBillingAddress;