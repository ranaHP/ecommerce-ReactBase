import React from "react";
import { Col, FormControl, InputGroup, Row } from "react-bootstrap";
import { Search } from "react-feather";

const SearchBox : React.FC = () => {
    return (
        <Row className="m-0 search-box">
            <Col className="d-flex justify-content-center">
            <InputGroup className="mb-3">
                <InputGroup.Text id="basic-addon1" >
                    <Search  size={15}/>
                </InputGroup.Text>
                <FormControl
                    placeholder="Seaching.."
                    aria-label="Username"
                    aria-describedby="basic-addon1"
                />
            </InputGroup>
            </Col>
        </Row>
    )
}

export default SearchBox;