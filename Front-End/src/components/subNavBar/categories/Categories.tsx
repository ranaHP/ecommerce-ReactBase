import React from "react";
import { NavDropdown } from "react-bootstrap";

const CategoriesDropDown: React.FC = () => {
    return (
      
        <NavDropdown  title="Categories" id="basic-nav-dropdown" className="catgories-container ">
            <NavDropdown.Item href="#action/3.1">Fruit</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2">Vegetables</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3">Food</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3">Pharmacy</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3">Electronic</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#action/3.4">Grocery</NavDropdown.Item>
        </NavDropdown>
    );
}
export default CategoriesDropDown;