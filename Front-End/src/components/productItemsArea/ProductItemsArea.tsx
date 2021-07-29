import React from "react";
import { Col, Row } from "react-bootstrap";
import { IProductList } from "../../Types";
import ProductItemsSet from "./productItemsSet/ProductItemsSet";

const productsList: IProductList = {
    
    Grocery:  [
        {title: "Garlic" ,image: "" ,price: "90" ,offrePrice: "65"},
        {title: "Apple" ,image: "" ,price: "90" ,offrePrice: "65"},
        {title: "Onion" ,image: "" ,price: "90" ,offrePrice: "65"},
        {title: "Red Rice" ,image: "" ,price: "90" ,offrePrice: "65"},
        {title: "Dal" ,image: "" ,price: "90" ,offrePrice: "65"},
        {title: "Vegitale" ,image: "" ,price: "90" ,offrePrice: "65"}
    ],
    Pharmacy:  [
        {title: "Garlic" ,image: "" ,price: "90" ,offrePrice: "65"},
        {title: "Apple" ,image: "" ,price: "90" ,offrePrice: "65"},
        {title: "Onion" ,image: "" ,price: "90" ,offrePrice: "65"},
        {title: "Red Rice" ,image: "" ,price: "90" ,offrePrice: "65"},
        {title: "Dal" ,image: "" ,price: "90" ,offrePrice: "65"},
        {title: "Vegitale" ,image: "" ,price: "90" ,offrePrice: "65"}
    ],
    Food: [
        {title: "Garlic" ,image: "" ,price: "90" ,offrePrice: "65"},
        {title: "Apple" ,image: "" ,price: "90" ,offrePrice: "65"},
        {title: "Onion" ,image: "" ,price: "90" ,offrePrice: "65"},
        {title: "Red Rice" ,image: "" ,price: "90" ,offrePrice: "65"},
        {title: "Dal" ,image: "" ,price: "90" ,offrePrice: "65"},
        {title: "Vegitale" ,image: "" ,price: "90" ,offrePrice: "65"}
    ],
    Electronic:  [
        {title: "Garlic" ,image: "" ,price: "90" ,offrePrice: "65"},
        {title: "Apple" ,image: "" ,price: "90" ,offrePrice: "65"},
        {title: "Onion" ,image: "" ,price: "90" ,offrePrice: "65"},
        {title: "Red Rice" ,image: "" ,price: "90" ,offrePrice: "65"},
        {title: "Dal" ,image: "" ,price: "90" ,offrePrice: "65"},
        {title: "Vegitale" ,image: "" ,price: "90" ,offrePrice: "65"}
    ]
}

const ProductItemsArea : React.FC = () => {
    return (
        <Row className="m-0 product-item-area">
            <Col xs={12} sm={12} md={12} lg={10} xl={10} className="m-auto">
                <ProductItemsSet title={"Gorcery"} productItemArray={productsList.Grocery} />
                <ProductItemsSet title={"Pharmacy"} productItemArray={productsList.Pharmacy} />
                <ProductItemsSet title={"Food"} productItemArray={productsList.Food} />
                <ProductItemsSet title={"Electronic"} productItemArray={productsList.Electronic} />
                
            </Col>
        </Row>
    )
}

export default ProductItemsArea;