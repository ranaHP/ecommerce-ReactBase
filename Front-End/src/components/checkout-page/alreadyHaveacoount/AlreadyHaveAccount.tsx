import React from 'react';
import { Col, Button } from 'react-bootstrap';
import { useHistory } from "react-router-dom";

const AlreadyHaveACoount: React.FC = () => {
    const history = useHistory();
    return (
        <Col xs={12} sm={12} md={12} lg={7} xl={7} className="already-have-account">
                <span>Alreay have an accout?</span>
                <Button onClick={()=> {
                        history.push("/login");    
                }}>
                    Sign in
                </Button>
        </Col>
    )
}
export default AlreadyHaveACoount;