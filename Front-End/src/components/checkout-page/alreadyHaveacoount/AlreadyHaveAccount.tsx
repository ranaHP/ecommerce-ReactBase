import React from 'react';
import { Col, Button } from 'react-bootstrap';

const AlreadyHaveACoount: React.FC = () => {
    return (
        <Col xs={12} sm={12} md={12} lg={7} xl={7} className="already-have-account">
                <span>Alreay have an accout?</span>
                <Button>
                    Sign in
                </Button>
        </Col>
    )
}
export default AlreadyHaveACoount;