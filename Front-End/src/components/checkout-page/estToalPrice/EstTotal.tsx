import React, { useEffect, useState } from 'react';
import { Col, Nav, Row } from 'react-bootstrap';import { useSelector } from 'react-redux';
import { RootState } from '../../../store/reducers/rootReducers';
import { IOrderItem } from '../../../Types';
;

const EstTotalPrice: React.FC = () => {
    const [totalPrice, setTotalPrice] = useState<number>(0);  
    const checkoutList:IOrderItem [] = useSelector((state: RootState) => state.checkoutReducer.checkoutList);

    useEffect( () => {
        let orderTotalPrice: number = 0;
        checkoutList.map((orderItem: IOrderItem) => {
            orderTotalPrice =  orderTotalPrice + orderItem.offer_price * orderItem.qty;
        })
        setTotalPrice(orderTotalPrice);
    }, [] );

    useEffect( () => {
        let orderTotalPrice: number = 0;
        checkoutList.map((orderItem: IOrderItem) => {
            orderTotalPrice =  orderTotalPrice + orderItem.offer_price * orderItem.qty;
        })
        setTotalPrice(orderTotalPrice);
    }, [checkoutList] );
    return (
        <Row className="m-0 px-3 " >
            <Col xs={12} sm={12} md={12} lg={12} xl={12} className="est-total-container m-auto px-1">
                <h6>Est.Total</h6>
                <span>Rs.{totalPrice}.00</span>
            </Col>
        </Row>
    )
}
export default EstTotalPrice;