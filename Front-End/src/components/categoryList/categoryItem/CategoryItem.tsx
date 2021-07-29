import React from "react";
import { Image } from "react-bootstrap";
import CategoryImage from "../../../assets/images/category-items/gorcery.jpg";
import {ICategoryItem} from "../../../Types";

type CategoryItemProps =  {
    item: ICategoryItem | null
}
const CategoryItem : React.FC<CategoryItemProps> = (props) => {
    return (
        <div className="item-container">
            <div className="item">
                <div className="image">
                    <Image src={CategoryImage} className="image" ></Image>
                </div> 
                <div className="title">
                        {props.item && props.item.name}
                </div>
            </div>
        </div>
    )
};

export default CategoryItem;