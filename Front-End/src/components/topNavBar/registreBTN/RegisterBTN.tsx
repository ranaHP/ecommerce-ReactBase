import React from "react";
import { Button, Navbar } from "react-bootstrap";
import { useHistory } from "react-router-dom";

const RegisterBTN : React.FC = () => {
    const history = useHistory();
    return (
        <Navbar.Brand> 
                <Button className="register-btn"  onClick={() => {
                    history.push("/register")
                }}>
                    Register
                </Button>
        </Navbar.Brand>
          
    );
}
export default RegisterBTN;