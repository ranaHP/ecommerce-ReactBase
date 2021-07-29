import React from "react";
import { Button, Col, Form, Image, Row } from "react-bootstrap";
import Garlic from "../../../assets/images/product-items/garlic.png";
import { IProductItem } from "../../../Types";

type ProductItemProps =  {
    productItem: IProductItem
}
const ProductItem: React.FC<ProductItemProps> = (props) => {
    // cosnt {title, image, price, offrePrice} = props.productItem;
    return (
        <div className="product-item-container">
            <div className="product-item">
                <div className="product-image">
                    <Image src={Garlic} fluid={true}></Image>
                    <div className="item-title">
                        {props.productItem.title}
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
                        <Form.Control type="number" />
                    </Form.Group>
                    <Button className="add-to-cart">
                        Add To Cart
                    </Button>
                </div>
            </div>
        </div>
    )
}

export default ProductItem;