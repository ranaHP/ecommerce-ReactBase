import React, { ChangeEvent, useEffect, useState } from "react";
import { Button, Col, Form, Image, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { addOrderItem } from "../../../store/actions/CheckoutActions";
import { RootState } from "../../../store/reducers/rootReducers";
import { IOrderItem, IProductItem } from "../../../Types";

type ProductItemProps =  {
    productItem: IProductItem
}
const ProductItem: React.FC<ProductItemProps> = (props) => {
    const checkoutList:IOrderItem [] = useSelector((state: RootState) => state.checkoutReducer.checkoutList);  
    const dispatch = useDispatch(); 
    const [qtyInput, setQtyInput] = useState<number>(1);
    const [isUpdated, setisUpdated] = useState<boolean>(false);

    useEffect( ()=> {
        const index = checkoutList.findIndex((orderItem: IOrderItem) => orderItem.item_no == props.productItem.item_no);
        if(index == -1){
            
        }else{
            props.productItem.qty = checkoutList[index].qty; 
            setQtyInput(checkoutList[index].qty);
            setisUpdated(true);
        }
    },[checkoutList])
    
    
    const handelOnNewCheckoutItemAdd = () => {
        dispatch(addOrderItem(
            {
                item_no: 3,
                name: "Gralic",
                qty: 55,
                unite_price: 350,
                offer_price: 150,
                image: "",
                amount: 520
            }
        ))
    }

    const handelOnChangeQtyInput = (e: ChangeEvent<HTMLInputElement>) => {
        setQtyInput(Number(e.target.value));
    }
    return (
        <div className="product-item-container">
            <div className="product-item">
                <div className="product-image">
                    <Image src={props.productItem.image} style={{height: "100px"}}  fluid={true}></Image>
                    <div className="item-title">
                        {props.productItem.name}
                    </div>
                </div>
                <div className="product-price-area">
                    <div className="product-ori-price">
                        {props.productItem.price}.00
                    </div>
                    <div className="product-offer-price">
                        Rs {props.productItem.offrePrice}.<span className="cents">00</span>
                    </div>
                </div>
                <div className="quantity-area">
                    <Form.Group className="quantity">
                        <Form.Control type="number" value={ qtyInput} onChange={handelOnChangeQtyInput} />
                    </Form.Group>
                    <Button className={!isUpdated ? "add-to-cart " : "update"}  onClick={ ()=>{
                        dispatch(addOrderItem(
                            {
                                item_no: props.productItem.item_no ,
                                name: props.productItem.name,
                                qty: qtyInput,
                                unite_price: props.productItem.price,
                                offer_price: props.productItem.offrePrice,
                                image: props.productItem.image,
                                amount: props.productItem.offrePrice ? props.productItem.offrePrice * qtyInput : props.productItem.price * qtyInput
                            }
                        ))
                    }}>
                        { !isUpdated ? "Add To Cart" : "Update" }
                    </Button>
                </div>
            </div>
        </div>
    )
}

export default ProductItem;