import React from "react";
import { Button, Col, Form, Image, Row } from "react-bootstrap";
import Garlic from "../../../assets/images/product-items/garlic.png"
import { IProductItem } from "../../../Types";
import ProductItem from "../productItem/ProductItem";

type ProductItemSetProps = {
    productItemArray: IProductItem[] 
    title: string
}
const ProductItemsSet : React.FC<ProductItemSetProps> = (props) => {
    return (
        <Row className="m-0 product-item-area ">
            <Col xs={12} sm={12} md={12} lg={12} xl={12} className="m-auto">
                <span className="product-item-set-title px-2"> {props.title} </span>
            </Col>
            <Col xs={12} sm={12} md={12} lg={12} xl={12} className="product-items">
                {
                    props.productItemArray.map( (item:IProductItem) => {
                        return <ProductItem productItem={item} />
                    })
                }
            </Col>
        </Row>
    )
}

export default ProductItemsSet;