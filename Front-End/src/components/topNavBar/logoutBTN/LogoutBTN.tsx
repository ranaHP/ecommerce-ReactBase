import React from "react";
import { Button, Navbar } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { deleteLoginDetails } from "../../../store/actions/LoginActions";

const LogoutBTN : React.FC = () => {
    const history = useHistory();
    const dispatch = useDispatch();
    return (
        <Navbar.Brand> 
                <Button className="register-btn pb-1"  onClick={() => {
                    dispatch(deleteLoginDetails(0))
                }}>
                    Logout
                </Button>
        </Navbar.Brand>
          
    );
}
export default LogoutBTN;