import React from "react";
import { Button, Navbar } from "react-bootstrap";

const LoginBNT : React.FC = () => {
    return (
        <Navbar.Brand> 
                <Button className="login-btn">
                    Login
                </Button>
        </Navbar.Brand>
          
    );
}
export default LoginBNT;