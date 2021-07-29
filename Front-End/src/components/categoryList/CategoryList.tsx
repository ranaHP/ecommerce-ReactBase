import React from "react";
import { Col, Row } from "react-bootstrap";
import { ICategoryItem } from "../../Types";
import CategoryItem from "./categoryItem/CategoryItem";
import {categoryoItems} from "./CategoryItemsList" ;

const CategoryList : React.FC = () => {
    return (
        <Row className="category-list m-0 pt-4">
            <Col xs={12}>
                <h1> Demo Products</h1>
              
            </Col>
            <Col  xs={12} sm={12} md={12} lg={10} xl={10} className="category-items-container m-auto "> 
                {
                    categoryoItems.map( (item: ICategoryItem) => {
                        return <CategoryItem item={item} />
                    } )
                }
            </Col>
        </Row>
    )
};

export default CategoryList;