import React from "react";
import CategoryList from "../components/categoryList/CategoryList";
import HeroBanner from "../components/heroBanner/HeroBanner";
import SearchBox from "../components/searchBox/SearchBox";
import ProductItemsArea from "../components/productItemsArea/ProductItemsArea";

const HomePage : React.FC = () => {
    return (
        <React.Fragment>
            <HeroBanner/>
            <SearchBox/>
            <CategoryList/>
            <ProductItemsArea/>
        </React.Fragment>
    );
}

export default HomePage;