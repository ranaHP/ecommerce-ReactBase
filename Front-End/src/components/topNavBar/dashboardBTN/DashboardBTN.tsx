import React from "react";
import { Navbar } from "react-bootstrap";
import {Pocket } from "react-feather";
import { useHistory } from "react-router-dom";

const DashBoardBTN : React.FC = () => {
    const history = useHistory();
    return (
        <Navbar.Brand onClick={() => {
            history.push("/dashboard")
        }}>
                <Pocket color="black" size={18} />
                Dashboard 
        </Navbar.Brand>
          
    );
}
export default DashBoardBTN;