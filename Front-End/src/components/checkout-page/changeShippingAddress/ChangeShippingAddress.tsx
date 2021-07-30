import React, { ChangeEvent, useState } from 'react';
import { Col, Image, Form,Row, InputGroup, FormControl } from 'react-bootstrap';
import SrilanakanFlagImage from "../../../assets/images/srilankanFlag/sri-lanka.png"
const ChangeShippingAddress: React.FC = () => {
    const [radioValue, setRadioValue] = useState<string>("true");

    const handelOnChange = (e:  ChangeEvent<HTMLInputElement>) => {
        setRadioValue(e.target.value);
    }
    return (
        <Col xs={12} sm={12} md={12} lg={7} xl={7} className="change-shipping-billing-address">
               <div className="title-container">
                    <span>Change Shipping Address</span>
               </div>
                <Form>
                    <Row className="d-flex">
                        <Col xs={12} sm={12} md={6} lg={6} xl={6} >
                            <Form.Check
                                type="radio"
                                value="new"
                                label="Same as user address"
                                name="formHorizontalRadios"
                                id="formHorizontalRadios1"
                                onChange={handelOnChange}
                                />
                        </Col>
                        <Col  xs={12} sm={12} md={6} lg={6} xl={6} >
                            <Form.Check
                                type="radio"
                                value="old"
                                label="Change shipping address"
                                name="formHorizontalRadios"
                                id="formHorizontalRadios1"
                                onChange={handelOnChange}
                                />
                        </Col>
                        
                    </Row>
                    {
                        (radioValue == "new") && 
                            <div className="pt-3">
                                <Form.Group className="" controlId="formBasicEmail">
                                    <Form.Label>Name*</Form.Label>
                                    <Form.Control type="text" placeholder="Your Full Name" />
                                </Form.Group>
                                <Form.Group className="" controlId="formBasicEmail">
                                    <Form.Label>Billing Address*</Form.Label>
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
                                
                            </div>
                    }
                   
                   <Row>
                                    <Form.Group className="pt-3" controlId="formBasicEmail">
                                        <Form.Label ><h6>Add Delivery Instructions (Optional)</h6></Form.Label>
                                        <Form.Control as="textarea" style={{ height: '70px' }} className="mt-3" />
                                    </Form.Group>
                                </Row>
                </Form>
        </Col>
    )
}
export default ChangeShippingAddress;