import React from "react";
import { Col, Row } from "react-bootstrap";
import { IProductList } from "../../Types";
import ProductItemsSet from "./productItemsSet/ProductItemsSet";

const productsList: IProductList = {
    
    Grocery:  [
        {
            item_no: 1,
            name: "Apple",
            qty: 10,
            price: 50,
            offrePrice: 43,
            image: "https://purepng.com/public/uploads/large/purepng.com-fresh-applefoodsweettastyhealthyfruitappleleaf-981524677946vfurf.png"
        },
        {
            item_no: 2,
            name: "Graps",
            qty: 2,
            price: 120,
            offrePrice: 118,
            image: "https://www.pngplay.com/wp-content/uploads/4/Garlic-No-Background.png"
        },
        {
            item_no: 3,
            name: "Pera",
            qty: 33,
            price: 60,
            offrePrice: 55,
            image: "https://pics.clipartpng.com/Pear_Fruit_PNG_Clipart-242.png"
        },{
            item_no: 4,
            name: "Mora",
            qty: 55,
            price: 35,
            offrePrice: 30,
            image: "https://purepng.com/public/uploads/large/purepng.com-eggseggseggshellegg-whiteegg-yolk-1411527413743absg1.png"
        }
        
    ],
    Pharmacy:  [
        {
            item_no: 3,
            name: "Gralic",
            qty: 55,
            price: 350,
            offrePrice: 150,
            image: ""
        }
    ],
    Food: [
        {
            item_no: 3,
            name: "Gralic",
            qty: 55,
            price: 350,
            offrePrice: 150,
            image: ""
        }
    ],
    Electronic:  [
        {
            item_no: 3,
            name: "Gralic",
            qty: 55,
            price: 350,
            offrePrice: 150,
            image: ""
        }
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