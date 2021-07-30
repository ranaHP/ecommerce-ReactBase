import React from "react";
import { Button, Navbar } from "react-bootstrap";
import { useHistory } from "react-router-dom";

const LoginBNT : React.FC = () => {
    const history = useHistory();
    return (
        <Navbar.Brand> 
                <Button className="login-btn"  onClick={() => {
                    history.push("/login")
                }}>
                    Login
                </Button>
        </Navbar.Brand>
          
    );
}
export default LoginBNT;