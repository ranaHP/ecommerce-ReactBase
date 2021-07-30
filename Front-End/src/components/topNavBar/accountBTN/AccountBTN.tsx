import React from "react";
import { Navbar } from "react-bootstrap";
import { User } from "react-feather";

const AccountBTN : React.FC = () => {
    return (
        <Navbar.Brand> 
                <User color="black" size={18} />
                My Account
        </Navbar.Brand>
          
    );
}
export default AccountBTN;